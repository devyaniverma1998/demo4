"use client";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";

export default function Testimonial() {
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

    return(
       <>
        <div className="overflow-hidden space">
        <div className="container">
          <div className="row">
            <div className="title-area text-center mb-25">
              <span className="sub-title style2">Testimonials</span>
             <img src="/img/theme-img/title_shape_1.svg" alt="not found" />
              <h2 className="sec-title">Our Customer Feedback</h2>
            </div>
          </div>
          <div
            className="row slider-shadow th-carousel"
            data-slide-show="3"
            data-lg-slide-show="2"
            data-sm-slide-show="1"
            data-xs-slide-show="1"
          >
             <Slider {...settings} className="th-carousel" >
          
            <div className="col-md-6 col-lg-4">
              <div className="testi-grid wow fadeInUp">
                <div className="testi-grid_img">
                 <img src="/img/testimonial/testi_2_3.jpg" alt="not found" />
                </div>
                <h3 className="box-title">
                  Continually utilize 24/365 bandwidth before real-time
                  interfaces. Proin mollis, ipsum vel ultrices dictum. Credibly
                  grow users deliver.
                </h3>
                <div className="testi-grid_profile">
                  <div className="media-body">
                    <h5 className="testi-grid_name">Jenifer Lopez</h5>
                    <p className="testi-grid_desig">Customer</p>
                  </div>
                </div>
                <div className="testi-quote">
                 <img src="/img/shape/quote_2.png" alt="not found" />
                </div>
                <div className="testi-shape1">
                 <img src="/img/shape/leaf_2.svg" alt="not found" />
                </div>
                <div className="testi-shape2">
                 <img src="/img/shape/flower_1_6.svg" alt="not found" />
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-4">
              <div className="testi-grid wow fadeInDown">
                <div className="testi-grid_img">
                 <img src="/img/testimonial/testi_2_4.jpg" alt="not found" />
                </div>
                <h3 className="box-title">
                  Intrinsicly pontifice pandemic ships growth strategies and
                  partner convergence lives multidi sciplinar business Proin
                  mollis ultrices
                </h3>
                <div className="testi-grid_profile">
                  <div className="media-body">
                    <h5 className="testi-grid_name">Dianne Russell</h5>
                    <p className="testi-grid_desig">Customer</p>
                  </div>
                </div>
                <div className="testi-quote">
                 <img src="/img/shape/quote_2.png" alt="not found" />
                </div>
                <div className="testi-shape1">
                 <img src="/img/shape/leaf_2.svg" alt="not found" />
                </div>
                <div className="testi-shape2">
                 <img src="/img/shape/flower_1_6.svg" alt="not found" />
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-4">
              <div className="testi-grid wow fadeInUp">
                <div className="testi-grid_img">
                 <img src="/img/testimonial/testi_2_1.jpg" alt="not found" />
                </div>
                <h3 className="box-title">
                  Whether youre preparing for a special occasion or simply want to
                  pamper yourself our talented stylists will work closely with you
                  to create.
                </h3>
                <div className="testi-grid_profile">
                  <div className="media-body">
                    <h5 className="testi-grid_name">Angelina Margret</h5>
                    <p className="testi-grid_desig">Customer</p>
                  </div>
                </div>
                <div className="testi-quote">
                 <img src="/img/shape/quote_2.png" alt="not found" />
                </div>
                <div className="testi-shape1">
                 <img src="/img/shape/leaf_2.svg" alt="not found" />
                </div>
                <div className="testi-shape2">
                 <img src="/img/shape/flower_1_6.svg" alt="not found" />
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-4">
              <div className="testi-grid wow fadeInDown">
                <div className="testi-grid_img">
                 <img src="/img/testimonial/testi_2_2.jpg" alt="not found" />
                </div>
                <h3 className="box-title">
                  Parallel task user friendly through supply are chains.
                  Dynamically simplify reliable meta service visionary sources
                  unleash tactical.
                </h3>
                <div className="testi-grid_profile">
                  <div className="media-body">
                    <h5 className="testi-grid_name">Senjuti das</h5>
                    <p className="testi-grid_desig">Customer</p>
                  </div>
                </div>
                <div className="testi-quote">
                 <img src="/img/shape/quote_2.png" alt="not found" />
                </div>
                <div className="testi-shape1">
                 <img src="/img/shape/leaf_2.svg" alt="not found" />
                </div>
                <div className="testi-shape2">
                 <img src="/img/shape/flower_1_6.svg" alt="not found" />
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-4">
              <div className="testi-grid wow fadeInUp">
                <div className="testi-grid_img">
                 <img src="/img/testimonial/testi_2_3.jpg" alt="not found" />
                </div>
                <h3 className="box-title">
                  Continually utilize 24/365 bandwidth before real-time
                  interfaces. Proin mollis, ipsum vel ultrices dictum. Credibly
                  grow users deliver.
                </h3>
                <div className="testi-grid_profile">
                  <div className="media-body">
                    <h5 className="testi-grid_name">Jenifer Lopez</h5>
                    <p className="testi-grid_desig">Customer</p>
                  </div>
                </div>
                <div className="testi-quote">
                 <img src="/img/shape/quote_2.png" alt="not found" />
                </div>
                <div className="testi-shape1">
                 <img src="/img/shape/leaf_2.svg" alt="not found" />
                </div>
                <div className="testi-shape2">
                 <img src="/img/shape/flower_1_6.svg" alt="not found" />
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-4">
              <div className="testi-grid wow fadeInDown">
                <div className="testi-grid_img">
                 <img src="/img/testimonial/testi_2_4.jpg" alt="not found" />
                </div>
                <h3 className="box-title">
                  Intrinsicly pontifice pandemic ships growth strategies and
                  partner convergence lives multidi sciplinar business Proin
                  mollis ultrices
                </h3>
                <div className="testi-grid_profile">
                  <div className="media-body">
                    <h5 className="testi-grid_name">Dianne Russell</h5>
                    <p className="testi-grid_desig">Customer</p>
                  </div>
                </div>
                <div className="testi-quote">
                 <img src="/img/shape/quote_2.png" alt="not found" />
                </div>
                <div className="testi-shape1">
                 <img src="/img/shape/leaf_2.svg" alt="not found" />
                </div>
                <div className="testi-shape2">
                 <img src="/img/shape/flower_1_6.svg" alt="not found" />
                </div>
              </div>
            </div>
          </Slider>
          </div>
        </div>
      </div>
     </>
    )
}