import { NextApiRequest, NextApiResponse } from "next";

import Stripe from "stripe";
const stripe = new Stripe(
  "sk_test_51JAUfvJ4ab5F4uysjClLzULUgIoV7C59XzcR1y1QazjSAR3qEW4ShqjnC3Zil66gDb1ViFV4xE6UwNjWQX0nXKm100TppRzKQB",
  {
    // https://github.com/stripe/stripe-node#configuration
    apiVersion: "2020-03-02",
  }
);

export default async function handler(req, res) {
  const id = req.query.id;
  try {
    // if (!id.startsWith("cs_")) {
    //   throw Error("Incorrect CheckoutSession ID.");
    // }
    const checkout_session = await stripe.checkout.sessions.retrieve(id, {
      expand: ["payment_intent"],
    });

    res.status(200).json(checkout_session);
  } catch (err) {
    res.status(500).json({ statusCode: 500, message: err.message });
  }
}
