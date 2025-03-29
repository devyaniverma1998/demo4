"use client"; // ✅ Ensure this runs only on the client
import Link from "next/link";
import { useEffect, useRef } from "react";
// Remove jQuery dependency if possible, or ensure it's properly installed
// import $ from "jquery";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function Hero() {
  const sliderRef = useRef(null);

  useEffect(() => {
    let slickInstance;
    
    const initSlider = async () => {
      if (typeof window !== "undefined" && sliderRef.current) {
        const $ = await import("jquery");
        await import("slick-carousel");
        
        // Initialize slick using the ref
        const $slider = $(sliderRef.current);
        
        // Destroy existing instance if it exists
        if ($slider.hasClass("slick-initialized")) {
          $slider.slick("unslick");
        }

        // Initialize slick
        $slider.slick({
          fade: true,
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: true,
          dots: true,
          autoplay: true,
          autoplaySpeed: 3000,
          infinite: true,
        });

        slickInstance = $slider;
      }
    };

    initSlider();

    // Cleanup function
    return () => {
      if (slickInstance && slickInstance.slick("getSlick")) {
        slickInstance.slick("unslick");
      }
    };
  }, []);

  return (
    <section
      className="th-hero-wrapper hero-2"
      id="hero"
      style={{ backgroundImage: "url('/img/bg/hero_bg_2.jpg')" }}
    >
      <div
        ref={sliderRef}
        className="hero-slider-2 th-carousel"
        data-fade="true"
        data-slide-show="1"
        data-md-slide-show="1"
        data-arrows="true"
        data-xl-arrows="true"
        data-ml-arrows="true"
        data-lg-arrows="true"
      >
        {/* Slide 1 */}
        <div className="th-hero-slide">
          <div className="container">
            <div className="row align-items-end">
              <div className="col-lg-7">
                <div className="hero-style2">
                  <span
                    className="sub-title"
                    data-ani="slideindown"
                    data-ani-delay="0.1s"
                  >
                    <img src="/img/theme-img/title_left.svg" alt="shape" />
                    Welcome to Rasm Nail Stylist
                  </span>
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
                  >
                    <img src="/img/hero/nail.png" alt="" />
                  </span>
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
                   <Link href="/about" className="th-btn">
                      Discover More
                      <i className="fa-regular fa-arrow-right ms-2"></i>
                    </Link>
                  </div>
                </div>
              </div>
              <div className="col-lg-5">
                <div
                  className="th-hero-img"
                  data-ani="slideinright"
                  data-ani-delay="0.1s"
                >
                  <img src="/img/hero/hero_bg_2_1.png" alt="" />
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
                    <div data-ani="slideinup" data-ani-delay="0.6s">
                      <img src="/img/shape/flower_1_9.png" alt="" />
                    </div>
                  </div>
                  <div
                    className="hero-shape_2"
                    data-ani="slideinup"
                    data-ani-delay="0.9s"
                  >
                    <img src="/img/shape/leaves_10.png" alt="" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Slide 2 */}
        <div className="th-hero-slide">
          <div className="container">
            <div className="row align-items-end">
              <div className="col-lg-7">
                <div className="hero-style2">
                  <span
                    className="sub-title"
                    data-ani="slideindown"
                    data-ani-delay="0.1s"
                  >
                    <img src="/img/theme-img/title_left.svg" alt="shape" />
                    Give Your Nails Sweet Treat
                  </span>
                  <h1
                    className="hero-title mb-0"
                    data-ani="slideinleft"
                    data-ani-delay="0.2s"
                  >
                    New Trends
                  </h1>
                  <span
                    className="hero-img"
                    data-ani="slideinup"
                    data-ani-delay="0.3s"
                  >
                    <img src="/img/hero/nail.png" alt="" />
                  </span>
                  <h1
                    className="hero-title style2"
                    data-ani="slideinleft"
                    data-ani-delay="0.4s"
                  >
                    Classy Nail
                  </h1>
                  <div
                    className="btn-group justify-content-center justify-content-lg-start"
                    data-ani="slideinup"
                    data-ani-delay="0.3s"
                  >
                   <Link href="/about" className="th-btn">
                      Discover More
                      <i className="fa-regular fa-arrow-right ms-2"></i>
                    </Link>
                  </div>
                </div>
              </div>
              <div className="col-lg-5">
                <div
                  className="th-hero-img"
                  data-ani="slideinright"
                  data-ani-delay="0.1s"
                >
                  <img src="/img/hero/hero_bg_2_2.png" alt="" />
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
                    <div data-ani="slideinup" data-ani-delay="0.6s">
                      <img src="/img/shape/flower_1_9.png" alt="" />
                    </div>
                  </div>
                  <div
                    className="hero-shape_2"
                    data-ani="slideinup"
                    data-ani-delay="0.9s"
                  >
                    <img src="/img/shape/leaves_10.png" alt="" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Slide 3 */}
        <div className="th-hero-slide">
          <div className="container">
            <div className="row align-items-end">
              <div className="col-lg-7">
                <div className="hero-style2">
                  <span
                    className="sub-title"
                    data-ani="slideindown"
                    data-ani-delay="0.1s"
                  >
                    <img src="/img/theme-img/title_left.svg" alt="shape" />
                    Our Rasm Nail Stylist
                  </span>
                  <h1
                    className="hero-title mb-0"
                    data-ani="slideinleft"
                    data-ani-delay="0.2s"
                  >
                    Trendy Look
                  </h1>
                  <span
                    className="hero-img"
                    data-ani="slideinup"
                    data-ani-delay="0.3s"
                  >
                    <img src="/img/hero/nail.png" alt="" />
                  </span>
                  <h1
                    className="hero-title style2"
                    data-ani="slideinleft"
                    data-ani-delay="0.4s"
                  >
                    Of Nail Art
                  </h1>
                  <div
                    className="btn-group justify-content-center justify-content-lg-start"
                    data-ani="slideinup"
                    data-ani-delay="0.3s"
                  >
                   <Link href="/about" className="th-btn">
                      Discover More
                      <i className="fa-regular fa-arrow-right ms-2"></i>
                    </Link>
                  </div>
                </div>
              </div>
              <div className="col-lg-5">
                <div
                  className="th-hero-img"
                  data-ani="slideinright"
                  data-ani-delay="0.1s"
                >
                  <img src="/img/hero/hero_bg_2_3.png" alt="" />
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
                    <div data-ani="slideinup" data-ani-delay="0.6s">
                      <img src="/img/shape/flower_1_9.png" alt="" />
                    </div>
                  </div>
                  <div
                    className="hero-shape_2"
                    data-ani="slideinup"
                    data-ani-delay="0.9s"
                  >
                    <img src="/img/shape/leaves_10.png" alt="" />
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
    </section>
  );
}