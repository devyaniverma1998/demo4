"use client"; // ✅ Ensure this runs only on the client

import { useEffect } from "react";
import $ from "jquery";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function Hero() {
  useEffect(() => {
    if (typeof window !== "undefined") {
      import("slick-carousel").then(() => {
        $(".hero-slider-2").not(".slick-initialized").slick({
          fade: true,
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: true,
          dots: true,
          autoplay: true,
          autoplaySpeed: 3000,
        });
      });
    }
  }, []);

  return (
    <section
    className="th-hero-wrapper hero-2"
    id="hero"
     style={{ backgroundImage: "url('/img/bg/hero_bg_2.jpg')" }}
  >
    <div
      className="hero-slider-2 th-carousel"
      data-fade="true"
      data-slide-show="1"
      data-md-slide-show="1"
      data-arrows="true"
      data-xl-arrows="true"
      data-ml-arrows="true"
      data-lg-arrows="true"
    >
      <div className="th-hero-slide">
        <div className="container">
          <div className="row align-items-end">
            <div className="col-lg-7">
              <div className="hero-style2">
                <span
                  className="sub-title"
                  data-ani="slideindown"
                  data-ani-delay="0.1s"
                  ><img
                    src="/img/theme-img/title_left.svg"
                    alt="shape"
                  />Welcome to Rasm Nail Stylist</span
                >
                <h1
                  className="hero-title mb-0"
                  data-ani="slideinleft"
                  data-ani-delay="0.2s"
                >
                  Nail Artistry
                </h1>
                <span
                  className="hero-img"
                  data-ani="slideinup"
                  data-ani-delay="0.3s"
                  ><img src="/img/hero/nail.png" alt="not found"
                /></span>
                <h1
                  className="hero-title style2"
                  data-ani="slideinleft"
                  data-ani-delay="0.4s"
                >
                  That Shines
                </h1>
                <div
                  className="btn-group justify-content-center justify-content-lg-start"
                  data-ani="slideinup"
                  data-ani-delay="0.3s"
                >
                  <a href="about.html" className="th-btn"
                    >Discover More<i
                      className="fa-regular fa-arrow-right ms-2"
                    ></i
                  ></a>
                </div>
              </div>
            </div>
            <div className="col-lg-5">
              <div
                className="th-hero-img"
                data-ani="slideinright"
                data-ani-delay="0.1s"
              >
                <img src="/img/hero/hero_bg_2_1.png" alt="not found" />
                <div
                  className="hero-shape"
                  data-ani="slideinup"
                  data-ani-delay="0.3s"
                ></div>
                <div
                  className="hero-shape_1"
                  data-ani="slideinup"
                  data-ani-delay="0.4s"
                >
                  <div className="" data-ani="slideinup" data-ani-delay="0.6s">
                    <img src="/img/shape/flower_1_9.png" alt="not found" />
                  </div>
                </div>
                <div
                  className="hero-shape_2"
                  data-ani="slideinup"
                  data-ani-delay="0.9s"
                >
                  <img src="/img/shape/leaves_10.png" alt="not found" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="th-hero-slide">
        <div className="container">
          <div className="row align-items-end">
            <div className="col-lg-7">
              <div className="hero-style2">
                <span
                  className="sub-title"
                  data-ani="slideindown"
                  data-ani-delay="0.1s"
                  ><img
                    src="/img/theme-img/title_left.svg"
                    alt="shape"
                  />Give Your Nails Sweet Treat</span
                >
                <h1
                  className="hero-title mb-0"
                  data-ani="slideinleft"
                  data-ani-delay="0.2s"
                >
                  new trends
                </h1>
                <span
                  className="hero-img"
                  data-ani="slideinup"
                  data-ani-delay="0.3s"
                  ><img src="/img/hero/nail.png" alt="not found"
                /></span>
                <h1
                  className="hero-title style2"
                  data-ani="slideinleft"
                  data-ani-delay="0.4s"
                >
                  classNamey nail
                </h1>
                <div
                  className="btn-group justify-content-center justify-content-lg-start"
                  data-ani="slideinup"
                  data-ani-delay="0.3s"
                >
                  <a href="about.html" className="th-btn"
                    >Discover More<i
                      className="fa-regular fa-arrow-right ms-2"
                    ></i
                  ></a>
                </div>
              </div>
            </div>
            <div className="col-lg-5">
              <div
                className="th-hero-img"
                data-ani="slideinright"
                data-ani-delay="0.1s"
              >
                <img src="/img/hero/hero_bg_2_2.png" alt="not found" />
                <div
                  className="hero-shape"
                  data-ani="slideinup"
                  data-ani-delay="0.3s"
                ></div>
                <div
                  className="hero-shape_1"
                  data-ani="slideinup"
                  data-ani-delay="0.4s"
                >
                  <div className="" data-ani="slideinup" data-ani-delay="0.6s">
                    <img src="/img/shape/flower_1_9.png" alt="not found" />
                  </div>
                </div>
                <div
                  className="hero-shape_2"
                  data-ani="slideinup"
                  data-ani-delay="0.9s"
                >
                  <img src="/img/shape/leaves_10.png" alt="not found" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="th-hero-slide">
        <div className="container">
          <div className="row align-items-end">
            <div className="col-lg-7">
              <div className="hero-style2">
                <span
                  className="sub-title"
                  data-ani="slideindown"
                  data-ani-delay="0.1s"
                  ><img
                    src="/img/theme-img/title_left.svg"
                    alt="shape"
                  />Our Rasm Nail Stylist</span
                >
                <h1
                  className="hero-title mb-0"
                  data-ani="slideinleft"
                  data-ani-delay="0.2s"
                >
                  trendy look
                </h1>
                <span
                  className="hero-img"
                  data-ani="slideinup"
                  data-ani-delay="0.3s"
                  ><img src="/img/hero/nail.png" alt="not found"
                /></span>
                <h1
                  className="hero-title style2"
                  data-ani="slideinleft"
                  data-ani-delay="0.4s"
                >
                  of nail art
                </h1>
                <div
                  className="btn-group justify-content-center justify-content-lg-start"
                  data-ani="slideinup"
                  data-ani-delay="0.3s"
                >
                  <a href="about.html" className="th-btn"
                    >Discover More<i
                      className="fa-regular fa-arrow-right ms-2"
                    ></i
                  ></a>
                </div>
              </div>
            </div>
            <div className="col-lg-5">
              <div
                className="th-hero-img"
                data-ani="slideinright"
                data-ani-delay="0.1s"
              >
                <img src="/img/hero/hero_bg_2_3.png" alt="not found" />
                <div
                  className="hero-shape"
                  data-ani="slideinup"
                  data-ani-delay="0.3s"
                ></div>
                <div
                  className="hero-shape_1"
                  data-ani="slideinup"
                  data-ani-delay="0.4s"
                >
                  <div className="" data-ani="slideinup" data-ani-delay="0.6s">
                    <img src="/img/shape/flower_1_9.png" alt="not found" />
                  </div>
                </div>
                <div
                  className="hero-shape_2"
                  data-ani="slideinup"
                  data-ani-delay="0.9s"
                >
                  <img src="/img/shape/leaves_10.png" alt="not found" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div
      className="shape-mockup shape2 d-none d-xl-block"
      data-bottom="0%"
      data-left="0%"
    >
      <img src="/img/shape/nail-polish.png" alt="shape" />
    </div>
    <div
      className="shape-mockup shape3 d-none d-xxl-block"
      data-top="4%"
      data-left="0%"
    >
      <img src="/img/shape/leaves_6.png" alt="shape" />
    </div>
    <div className="hero-indicator-wrapp">
      <div className="hero-indicator" data-asnavfor=".hero-slider-2">
        <a className="indicatior-btn active"
          ><img src="/img/hero/hero_bg_2_1.png" alt="img" /></a
        ><a className="indicatior-btn"
          ><img src="/img/hero/hero_bg_2_2.png" alt="img" /></a
        ><a className="indicatior-btn"
          ><img src="/img/hero/hero_bg_2_3.png" alt="img"
        /></a>
      </div>
    </div>
  </section>
  );
}
