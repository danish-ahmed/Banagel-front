import Head from "next/head";
import Image from "next/image";
import styles from "./layout.module.css";
import utilStyles from "../../styles/utils.module.css";
import Link from "next/link";

const name = "[Banagel]";
export const siteTitle = "Bangel Beta";

export default function Layout({ children, home }) {
  return (
    <div className={styles.container}>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="description"
          content="Learn how to build a personal website using Next.js"
        />
        <meta
          property="og:image"
          content={`https://og-image.vercel.app/${encodeURI(
            siteTitle
          )}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.zeit.co%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
        />
        <meta name="og:title" content={siteTitle} />
        <meta name="twitter:card" content="summary_large_image" />
        <link
          rel="stylesheet"
          href="https://pro.fontawesome.com/releases/v5.10.0/css/all.css"
          integrity="sha384-AYmEC3Yw5cVb3ZcuHtOA93w35dYTsvhLPVnYs9eStHfGJvOvKxVfELGroGkvsg+p"
          crossorigin="anonymous"
        />

        <link
          href="https://cdnjs.cloudflare.com/ajax/libs/flag-icon-css/3.5.0/css/flag-icon.min.css"
          rel="stylesheet"
          integrity="sha384-AYmEC3Yw5cVb3ZcuHtOA93w35dYTsvhLPVnYs9eStHfGJvOvKxVfELGroGkvsg+p"
          crossorigin="anonymous"
        />
      </Head>
      <header className={styles.header}>
        {home ? (
          <></>
        ) : (
          <>
            <Link href="/">
              <a>
                <Image
                  priority
                  src="/images/profile.jpg"
                  className={utilStyles.borderCircle}
                  height={108}
                  width={108}
                  alt={name}
                />
              </a>
            </Link>
            <h2 className={utilStyles.headingLg}>
              <Link href="/">
                <a className={utilStyles.colorInherit}>{name}</a>
              </Link>
            </h2>
          </>
        )}
      </header>

      <main>{children}</main>
      {!home && (
        <div className={styles.backToHome}>
          <Link href="/">
            <a>← Back to home</a>
          </Link>
        </div>
      )}
      <footer>
        <div class="container-fluid">
          <div class="row">
            <div class="col-md-3">
              <h2 class="footer-headings">Download Our App</h2>
              <div class="footer-btn-links">
                <ul>
                  <li class="footer-btn-li">
                    <a href="#">
                      <img class="footer-btn-img" src="images/appstore.jpg" />
                    </a>
                  </li>
                  <li class="footer-btn-li">
                    <a href="#">
                      <img class="footer-btn-img" src="images/googleplay.jpg" />
                    </a>
                  </li>
                  <li class="footer-btn-li">
                    <a href="#">
                      <img class="footer-btn-img" src="images/appgallery.jpg" />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div class="col-md-3">
              <h2 class="footer-headings">Menu</h2>
              <div class="links">
                <ul class="footer-list-links">
                  <li class="footer-links-li">
                    <a href="#" class="footer-links-anchor">
                      Delivery to door or pickup
                    </a>
                  </li>
                  <li class="footer-links-li">
                    <a href="#" class="footer-links-anchor">
                      Best Price
                    </a>
                  </li>
                  <li class="footer-links-li">
                    <a href="#" class="footer-links-anchor">
                      Contact Us
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div class="col-md-3">
              <h2 class="footer-headings">Need help?</h2>
              <div class="links">
                <ul class="footer-list-links">
                  <li class="footer-links-li">
                    <a href="#" class="footer-links-anchor">
                      FAQ
                    </a>
                  </li>
                  <li class="footer-links-li">
                    <a href="#" class="footer-links-anchor">
                      Protecting Private Information
                    </a>
                  </li>
                  <li class="footer-links-li">
                    <a href="#" class="footer-links-anchor">
                      Privacy Policy
                    </a>
                  </li>
                  <li class="footer-links-li">
                    <a href="#" class="footer-links-anchor">
                      Terms & Conditions
                    </a>
                  </li>
                  <li class="footer-links-li">
                    <a href="#" class="footer-links-anchor">
                      Cookie Policy
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div class="col-md-3">
              <h2 class="footer-headings">Categories</h2>
              <div class="links">
                <ul class="footer-list-links">
                  <li class="footer-links-li">
                    <a href="#" class="footer-links-anchor">
                      Vegetables & Fruits
                    </a>
                  </li>
                  <li class="footer-links-li">
                    <a href="#" class="footer-links-anchor">
                      Bread & Co
                    </a>
                  </li>
                  <li class="footer-links-li">
                    <a href="#" class="footer-links-anchor">
                      Drinks
                    </a>
                  </li>
                  <li class="footer-links-li">
                    <a href="#" class="footer-links-anchor">
                      Meat & Fish
                    </a>
                  </li>
                  <li class="footer-links-li">
                    <a href="#" class="footer-links-anchor">
                      Breakfast
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div class="row">
              <div class="col-md-3">
                <p class="p-credits">
                  © Copyright 2021. All Rights Reserved{" "}
                  <i class="fas fa-circle"></i>{" "}
                  <a href="#">Bilgi Toplumu Hizmetleri</a>{" "}
                </p>
              </div>
              <div class="col-md-6"></div>
              <div class="col-md-3 links-last-col">
                <div class="credits-links" align="right">
                  <ul>
                    <li>
                      <a href="#">
                        <i class="fab fa-facebook"></i>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i class="fab fa-twitter"></i>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i class="fab fa-instagram"></i>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i class="fab fa-youtube"></i>
                      </a>
                    </li>
                    <li>
                      <a href="#" class="btn btn-light border">
                        <img src="images/globe.jpg" class="imgglobe" /> English
                        (EN)
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
      <script
        src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta3/dist/js/bootstrap.bundle.min.js"
        integrity="sha384-JEW9xMcG8R+pH31jmWH6WWP0WintQrMb4s7ZOdauHnUtxwoG2vI5DkLtS3qm9Ekf"
        crossorigin="anonymous"
      ></script>
      <script
        type="text/javascript"
        src="https://cdn.jsdelivr.net/npm/slick-carousel@1.8.1/slick/slick.min.js"
      ></script>
    </div>
  );
}
