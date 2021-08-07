import React from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
export default function SegmentPageCarousel({ offers }) {
  const router = useRouter();
  const { locale } = router;
  const t = locale === "en-US" ? "en" : "de";
  return (
    <div
      id="carouselExampleDark"
      class="carousel carousel-dark slide"
      data-bs-ride="carousel"
    >
      <div class="carousel-indicators"></div>

      <div class="carousel-inner">
        {offers &&
          offers.length > 0 &&
          offers.map((offer) => (
            <div
              class="carousel-item active"
              data-bs-interval="10000"
              style={{
                position: "relative",
                width: "100%",
                height: "500px",
                maxHeight: "500px",
                maxWidth: "100%",
              }}
            >
              <Image
                src={offer && offer.image}
                alt={offer && offer.name[t]}
                // alt={shop && shop.shopname.en}
                className="d-block w-100"
                layout="fill"
                objectFit="cover"
              />
              <Link href={"/offers/[id]"} as={`/offers/${offer._id}`}>
                <div class="carousel-caption d-none d-md-block">
                  <h5>{offer.name[t]}</h5>
                  <p class="card-text">
                    <div
                      dangerouslySetInnerHTML={{
                        __html: offer.description,
                      }}
                    ></div>
                  </p>
                </div>
              </Link>
            </div>
          ))}
        {offers && offers.length < 1 && (
          <div class="carousel-item active" data-bs-interval="10000">
            <img src="/images/slad-1.jpg" class="d-block w-100" alt="..." />
            <div class="carousel-caption d-none d-md-block">
              <h5>First slide label</h5>
              <p>
                Some representative placeholder content for the first slide.
              </p>
            </div>
          </div>
        )}
      </div>
      <button
        class="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExampleDark"
        data-bs-slide="prev"
      >
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Previous</span>
      </button>
      <button
        class="carousel-control-next"
        type="button"
        data-bs-target="#carouselExampleDark"
        data-bs-slide="next"
      >
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Next</span>
      </button>
    </div>
  );
}
