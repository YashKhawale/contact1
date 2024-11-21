import React from "react";

const Footer = () => {
  return (
    <div>
      {/* <!-- Footer area start here --> */}
      <footer class="footer-two-area secondary-bg">
        <div
          class="footer__shape-regular-left wow slideInLeft"
          data-wow-delay="00ms"
          data-wow-duration="1500ms"
        >
          <img
            src="src/assets/images/shape/footer-regular-left.png"
            alt="shape"
          />
        </div>
        <div
          class="footer__shape-solid-left wow slideInLeft"
          data-wow-delay="200ms"
          data-wow-duration="1500ms"
        >
          <img
            class="sway_Y__animation"
            src="src/assets/images/shape/footer-solid-left.png"
            alt="shape"
          />
        </div>
        <div
          class="footer__shape-solid-right wow slideInRight"
          data-wow-delay="00ms"
          data-wow-duration="1500ms"
        >
          <img
            class="sway_Y__animation"
            src="src/assets/images/shape/footer-regular-right.png"
            alt="shape"
          />
        </div>
        <div
          class="footer__shape-regular-right wow slideInRight"
          data-wow-delay="200ms"
          data-wow-duration="1500ms"
        >
          <img
            src="src/assets/images/shape/footer-solid-right.png"
            alt="shape"
          />
        </div>
        <div class="footer__shadow-shape">
          <img
            src="src/assets/images/shape/footer-shadow-shape.png"
            alt="shodow"
          />
        </div>
        <div class="container">
          <div class="footer__wrp pt-100 pb-100">
            <div
              class="footer__item item-big wow fadeInUp"
              data-wow-delay="00ms"
              data-wow-duration="1500ms"
            >
              <a href="index.html" class="logo mb-30">
                <img
                  src="src/assets/images/logo/logo.png"
                  alt="image"
                  width={126}
                />
              </a>
              <p>
                We ensure access to healthcare and education for all,
                transforming lives through compassion, knowledge, and support.
              </p>
              <div class="social-icon">
                <a href="#0">
                  <i class="fa-brands fa-facebook-f"></i>
                </a>
                <a href="#0">
                  <i class="fa-brands fa-twitter"></i>
                </a>
                <a href="#0">
                  <i class="fa-brands fa-linkedin-in"></i>
                </a>
                <a href="#0">
                  <i class="fa-brands fa-youtube"></i>
                </a>
              </div>
            </div>
            <div
              class="footer__item item-sm wow fadeInUp"
              data-wow-delay="200ms"
              data-wow-duration="1500ms"
            >
              <h3 class="footer-title">IT Solution</h3>
              <ul>
                <li>
                  <a href="website-development.html">
                    <i class="fa-solid fa-angles-right me-1"></i> Web
                    Development
                  </a>
                </li>
                <li>
                  <a href="android-application.html">
                    <i class="fa-solid fa-angles-right me-1"></i> App
                    Development
                  </a>
                </li>
                <li>
                  <a href="cyber-security-services.html">
                    <i class="fa-solid fa-angles-right me-1"></i> Cyber Security
                  </a>
                </li>
                <li>
                  <a href="graphics-&-branding.html">
                    <i class="fa-solid fa-angles-right me-1"></i> Advertisement
                  </a>
                </li>
                <li>
                  <a href="robotics-&-ai.html">
                    <i class="fa-solid fa-angles-right me-1"></i>Robotics & AI
                  </a>
                </li>
              </ul>
            </div>
            <div
              class="footer__item item-sm wow fadeInUp"
              data-wow-delay="400ms"
              data-wow-duration="1500ms"
            >
              <h3 class="footer-title">Quick Link</h3>
              <ul>
                <li>
                  <a href="https://lms.countryedu.com/">
                    <i class="fa-solid fa-angles-right me-1"></i> Renu Sharma
                    LMS
                  </a>
                </li>
                <li>
                  <a href="https://openai.countryedu.com/">
                    <i class="fa-solid fa-angles-right me-1"></i> Renu Sharma AI
                  </a>
                </li>
                <li>
                  <a href="https://productdesigner.countryedu.com">
                    <i class="fa-solid fa-angles-right me-1"></i> Product
                    Designer
                  </a>
                </li>
                <li>
                  <a href="Products.html">
                    <i class="fa-solid fa-angles-right me-1"></i> Our Products
                  </a>
                </li>
                <li>
                  <a href="team.html">
                    <i class="fa-solid fa-angles-right me-1"></i> Our Team
                  </a>
                </li>
              </ul>
            </div>
            <div
              class="footer__item item-big wow fadeInUp"
              data-wow-delay="600ms"
              data-wow-duration="1500ms"
            >
              <h3 class="footer-title">Contact Us</h3>
              <p class="mb-20">Gurugram, Haryana - 122503, India</p>
              <ul class="footer-contact">
                <li>
                  <i class="fa-regular fa-clock"></i>
                  <div class="info">
                    <h5>Opening Hours :</h5>
                    <p>Mon - Fri: 08.00 AM - 05.00 PM</p>
                  </div>
                </li>
                <li>
                  <i class="fa-solid fa-phone"></i>
                  <div class="info">
                    <h5>Phone Call:</h5>
                    <p>+91-9671457366</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div class="footer__copyright">
          <div class="container">
            <div class="d-flex gap-1 flex-wrap align-items-center justify-content-md-between justify-content-center">
              <p
                class="wow fadeInDown"
                data-wow-delay="00ms"
                data-wow-duration="1500ms"
              >
                &copy; All Copyright by{" "}
                <a href="#0">Renu Sharma Healthcare & Education Foundation</a>
              </p>
              <ul
                class="d-flex align-items-center gap-4 wow fadeInDown"
                data-wow-delay="200ms"
                data-wow-duration="1500ms"
              >
                <li>
                  <a href="#0">Terms & Condition</a>
                </li>
                <li>
                  <a href="#0">Privacy Policy</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
      {/* <!-- Footer area end here --> */}
    </div>
  );
};

export default Footer;
