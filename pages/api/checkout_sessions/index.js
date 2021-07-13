import { formatAmountForStripe } from "../../../utils/stripe-helpers";

import Stripe from "stripe";
const stripe = new Stripe(
  "sk_test_51JAUfvJ4ab5F4uysjClLzULUgIoV7C59XzcR1y1QazjSAR3qEW4ShqjnC3Zil66gDb1ViFV4xE6UwNjWQX0nXKm100TppRzKQB",
  {
    // https://github.com/stripe/stripe-node#configuration
    apiVersion: "2020-03-02",
  }
);

export default async function handler(req, res) {
  if (req.method === "POST") {
    const cart = req.body.cart;
    const items = req.body.cart.addedItems;
    var quantity = 0;
    items.map((item) => (quantity += item.quantity));
    try {
      // Validate the amount that was passed from the client.
      //   if (!(amount >= MIN_AMOUNT && amount <= MAX_AMOUNT)) {
      //     throw new Error('Invalid amount.')
      //   }
      // Create Checkout Sessions from body params.
      const params = {
        // submit_type: 'donate',
        payment_method_types: ["card"],
        line_items: [
          {
            name: "Banagel Bill Payment",
            amount: formatAmountForStripe(cart.total, "usd"),
            currency: "usd",
            quantity: quantity,
          },
        ],
        success_url: `${req.headers.origin}/invoice?session_id={CHECKOUT_SESSION_ID}`,
        cancel_url: `${req.headers.origin}/donate-with-checkout`,
      };
      const checkoutSession = await stripe.checkout.sessions.create(params);

      res.status(200).json(checkoutSession);
    } catch (err) {
      res.status(500).json({ statusCode: 500, message: err.message });
    }
  } else {
    res.setHeader("Allow", "POST");
    res.status(405).end("Method Not Allowed");
  }
}
