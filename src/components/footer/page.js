import Link from "next/link";

export default function Footer() {
  return (
    <footer
      className="footer-wrapper footer-layout2"
      style={{ backgroundImage: "url('/img/bg/footer_bg_2.jpg')" }}
    >
      <div className="widget-area">
        <div className="container">
          <div className="row justify-content-between">
            <div className="col-md-6 col-xxl-3 col-xl-4">
              <div className="widget footer-widget">
                <div className="th-widget-about">
                  <div className="about-logo">
                    <a href="/"
                      ><img src="/img/logo-white.svg" alt="Rasm"
                    /></a>
                  </div>
                  <p className="about-text">
                    Centric applications productize front end portals visualize
                    front end.
                  </p>
                  <div className="th-widget-about">
                    <p className="footer-info">
                      <i className="fa-sharp fa-solid fa-phone"></i
                      ><a className="text-inherit" href="tel:+256214203215"
                        >+256 214 203 215</a
                      >
                    </p>
                    <p className="footer-info">
                      <i className="fas fa-envelope"></i
                      ><a className="text-inherit" href="mailto:info@rasm.com"
                        >info@rasm.com</a
                      >
                    </p>
                  </div>
                  <div className="th-social footer-social mt-40">
                    <a href="https://www.facebook.com/"
                      ><i className="fab fa-facebook-f"></i
                    ></a>
                    <a href="https://www.twitter.com/"
                      ><i className="fab fa-twitter"></i
                    ></a>
                    <a href="https://www.linkedin.com/"
                      ><i className="fab fa-linkedin-in"></i
                    ></a>
                    <a href="https://www.behance.net/"
                      ><i className="fa-brands fa-behance"></i
                    ></a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-xl-auto">
              <div className="widget widget_nav_menu footer-widget">
                <h3 className="widget_title">Quick link</h3>
                <div className="menu-all-pages-container">
                  <ul className="menu">
                    <li><a href="/about">About Us</a></li>
                    <li><a href="/serve">Our Services</a></li>
  <li><a href="contact">Contact Us</a></li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-xl-auto">
              <div className="widget widget_nav_menu footer-widget">
                <h3 className="widget_title">Our Policy</h3>
                <div className="menu-all-pages-container">
                  <ul className="menu">
                    <li><a href="/privacy">Privacy and Policy</a></li>
                    <li><a href="/terms">Terms and Service</a></li>
                    <li><a href="/faq">Faq</a></li>
                  
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-xl-3">
              <div className="widget footer-widget">
                <h3 className="widget_title">Recent Posts</h3>
                <div className="recent-post-wrap">
                  <div className="recent-post">
                    <div className="media-img">
                      <a href="/blog"
                        ><img
                          src="/img/blog/recent-post-2-1.jpg"
                          alt="Blog Image"
                      /></a>
                    </div>
                    <div className="media-body">
                      <h4 className="post-title">
                        <a className="text-inherit" href="/blog"
                          >Local residents and a few celebrities, too</a
                        >
                      </h4>
                      <div className="recent-post-meta">
                        <a href="/blog"
                          ><i className="fal fa-calendar-days"></i>19 June, 2024</a
                        >
                      </div>
                    </div>
                  </div>
                  <div className="recent-post">
                    <div className="media-img">
                      <a href="/blog"
                        ><img
                          src="/img/blog/recent-post-2-2.jpg"
                          alt="Blog Image"
                      /></a>
                    </div>
                    <div className="media-body">
                      <h4 className="post-title">
                        <a className="text-inherit" href="/blog"
                          >Local residents and a few celebrities, too</a
                        >
                      </h4>
                      <div className="recent-post-meta">
                        <a href="/blog"
                          ><i className="fal fa-calendar-days"></i>22 June, 2024</a
                        >
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="copyright-wrap">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <p className="copyright-text text-white">
                <i className="fal fa-copyright"></i> 2024 <a href="#">Rasm.</a> All
                Rights Reserved By
              </p>
            </div>
            <div className="col-lg-6">
              <div className="footer-links">
                <ul>
                  <li><a href="/policy">Privacy Policy</a></li>
                  <li><a href="/terms">Terms &amp; Condition</a></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        className="shape-mockup d-none d-xl-block"
        data-bottom="0%"
        data-right="0%"
      >
        <img src="/img/shape/leaves_5.png" alt="shape" />
      </div>
      <div className="scroll-top">
        <svg
          className="progress-circle svg-content"
          width="100%"
          height="100%"
          viewBox="-1 -1 102 102"
        >
          <path
            d="M50,1 a49,49 0 0,1 0,98 a49,49 0 0,1 0,-98"
           
          ></path>
        </svg>
      </div>
    </footer>
  );
}
