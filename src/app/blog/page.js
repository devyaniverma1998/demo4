"use client";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";


export default function Blog() {
  const settings = {
    dots: false,  // Disable dots for brand logos
    infinite: true,
    speed: 500,
    slidesToShow: 3, // Number of brands visible at once
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: false,  // Hide arrows for a clean look
    responsive: [
        {
            breakpoint: 1024,
            settings: {
                slidesToShow: 3,
            },
        },
        {
            breakpoint: 768,
            settings: {
                slidesToShow: 2,
            },
        },
        {
            breakpoint: 480,
            settings: {
                slidesToShow: 1,
            },
        },
    ],
};

  return (
    <>
      <section className="space overflow-hidden" id="blog-sec">
        <div className="container">
          <div className="title-area text-center">
            <span className="sub-title style2">Our Blog</span>
           <img src="/img/theme-img/title_shape_1.svg" alt="not found" />
            <h2 className="sec-title">Our Latest News & Blog</h2>
          </div>
          <div
            className="row slider-shadow th-carousel"
            id="blogSlide1"
            data-slide-show="3"
            data-lg-slide-show="2"
            data-md-slide-show="2"
            data-sm-slide-show="1"
            data-arrows="true"
          >
             <Slider {...settings} className="th-carousel" >
            <div className="col-md-6 col-xl-4">
              <div className="blog-box wow fadeInUp">
                <div className="blog-img">
                 <img src="/img/blog/blog_2_1.jpg" alt="blog image" />
                  <div className="blog-wrapper">
                    <span className="blog-box_date">22</span>
                    <span className="blog-box_month">May 2024</span>
                  </div>
                </div>
                <div className="blog-box_content">
                  <div className="blog-meta">
                    <a href="/blog"
                    ><i className="fa-regular fa-user"></i>Post By
                      <span className="blog-post">Admin</span></a
                    >
                    <a href="/blog"
                    ><i className="fa-regular fa-comments"></i>Comments (3)</a
                    >
                  </div>
                  <h3 className="box-title">
                    <a href="/blog"
                    >Maintaining Health and Beauty Through Spas</a
                    >
                  </h3>
                  <a href="/blog" className="half-line-btn"
                  >Read More<i className="fa-solid fa-arrow-right ms-2"></i
                  ></a>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-xl-4">
              <div className="blog-box wow fadeInDown">
                <div className="blog-img">
                 <img src="/img/blog/blog_2_2.jpg" alt="blog image" />
                  <div className="blog-wrapper">
                    <span className="blog-box_date">24</span>
                    <span className="blog-box_month">Jun 2024</span>
                  </div>
                </div>
                <div className="blog-box_content">
                  <div className="blog-meta">
                    <a href="/blog"
                    ><i className="fa-regular fa-user"></i>Post By
                      <span className="blog-post">Admin</span></a
                    >
                    <a href="/blog"
                    ><i className="fa-regular fa-comments"></i>Comments (3)</a
                    >
                  </div>
                  <h3 className="box-title">
                    <a href="/blog"
                    >Do Massages Have Real Health Benefits?</a
                    >
                  </h3>
                  <a href="/blog" className="half-line-btn"
                  >Read More<i className="fa-solid fa-arrow-right ms-2"></i
                  ></a>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-xl-4">
              <div className="blog-box wow fadeInUp">
                <div className="blog-img">
                 <img src="/img/blog/blog_2_3.jpg" alt="blog image" />
                  <div className="blog-wrapper">
                    <span className="blog-box_date">26</span>
                    <span className="blog-box_month">July 2024</span>
                  </div>
                </div>
                <div className="blog-box_content">
                  <div className="blog-meta">
                    <a href="/blog"
                    ><i className="fa-regular fa-user"></i>Post By
                      <span className="blog-post">Admin</span></a
                    >
                    <a href="/blog"
                    ><i className="fa-regular fa-comments"></i>Comments (3)</a
                    >
                  </div>
                  <h3 className="box-title">
                    <a href="/blog"
                    >Ultra Glam Gold Nail Polishes for Holiday.</a
                    >
                  </h3>
                  <a href="/blog" className="half-line-btn"
                  >Read More<i className="fa-solid fa-arrow-right ms-2"></i
                  ></a>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-xl-4">
              <div className="blog-box wow fadeInDown">
                <div className="blog-img">
                 <img src="/img/blog/blog_2_4.jpg" alt="blog image" />
                  <div className="blog-wrapper">
                    <span className="blog-box_date">28</span>
                    <span className="blog-box_month">Aug 2024</span>
                  </div>
                </div>
                <div className="blog-box_content">
                  <div className="blog-meta">
                    <a href="/blog"
                    ><i className="fa-regular fa-user"></i>Post By
                      <span className="blog-post">Admin</span></a
                    >
                    <a href="/blog"
                    ><i className="fa-regular fa-comments"></i>Comments (3)</a
                    >
                  </div>
                  <h3 className="box-title">
                    <a href="/blog"
                    >A Relaxation of the Senses with Their Help</a
                    >
                  </h3>
                  <a href="/blog" className="half-line-btn"
                  >Read More<i className="fa-solid fa-arrow-right ms-2"></i
                  ></a>
                </div>
              </div>
            </div>
            </Slider>
          </div>
        </div>
        <div
          className="shape-mockup jump d-none d-xl-block"
          data-top="5%"
          data-left="0%"
        >
         <img src="/img/shape/leaves_3.png" alt="shape" />
        </div>
      </section>
      </>
  )
}
