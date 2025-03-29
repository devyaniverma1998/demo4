"use client";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Link from "next/link";
import Image from "next/image";

export default function ProductSpace() {
    const settings = {
        dots: false,  // Disable dots for brand logos
        infinite: true,
        speed: 500,
        slidesToShow: 6, // Number of brands visible at once
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        arrows: false,  // Hide arrows for a clean look
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 4,
                },
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 3,
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
            {/* Brand Section with Slider */}
            <div className="brand-sec1">
                <div className="container th-container">
                    <div className="brand-content bg-smoke">
                        <Slider {...settings} className="th-carousel">
                            {/* Brand 1 */}
                            <div className="brand-box">
                               <Link href="#">
                                    <img className="original" src="/img/brand/brand_1_1.png" alt="Brand Logo" />
                                    <img className="gray" src="/img/brand/brand_1_1.png" alt="Brand Logo" />
                               </Link>
                            </div>
                            {/* Brand 2 */}
                            <div className="brand-box">
                               <Link href="#">
                                    <img className="original" src="/img/brand/brand_1_2.png" alt="Brand Logo" />
                                    <img className="gray" src="/img/brand/brand_1_2.png" alt="Brand Logo" />
                               </Link>
                            </div>
                            {/* Brand 3 */}
                            <div className="brand-box">
                               <Link href="#">
                                    <img className="original" src="/img/brand/brand_1_3.png" alt="Brand Logo" />
                                    <img className="gray" src="/img/brand/brand_1_3.png" alt="Brand Logo" />
                               </Link>
                            </div>
                            {/* Brand 4 */}
                            <div className="brand-box">
                               <Link href="#">
                                    <img className="original" src="/img/brand/brand_1_4.png" alt="Brand Logo" />
                                    <img className="gray" src="/img/brand/brand_1_4.png" alt="Brand Logo" />
                               </Link>
                            </div>
                            {/* Brand 5 */}
                            <div className="brand-box">
                               <Link href="#">
                                    <img className="original" src="/img/brand/brand_1_5.png" alt="Brand Logo" />
                                    <img className="gray" src="/img/brand/brand_1_5.png" alt="Brand Logo" />
                               </Link>
                            </div>
                            {/* Brand 6 */}
                            <div className="brand-box">
                               <Link href="#">
                                    <img className="original" src="/img/brand/brand_1_6.png" alt="Brand Logo" />
                                    <img className="gray" src="/img/brand/brand_1_6.png" alt="Brand Logo" />
                               </Link>
                            </div>
                        </Slider>
                    </div>
                </div>
            </div>

            {/* Newsletter Section */}
            <div className="newsletter-sec space"   style={{ backgroundImage: "url('/img/bg/newsletter_bg_1.jpg')" }}>
                <div className="container">
                    <div className="row justify-content-end">
                        <div className="col-12">
                            <div className="newsletter-wrapper wow fadeInUp">
                                <div className="newsletter-content">
                                    <div className="title-area text-center mb-30">
                                        <span className="sub-title style2 text-white">Subscribe to Newsletter</span>
                                        <img src="/img/theme-img/title_shape_2.svg" alt="" />
                                        <h2 className="sec-title text-white">Sign Up To Get Updates & News About Us</h2>
                                    </div>
                                    <form className="newsletter-form">
                                        <input className="form-control" type="email" placeholder="Email Address" required="" />
                                        <div className="icon"><i className="fa-regular fa-envelope"></i></div>
                                        <button type="submit" className="th-btn style4">
                                            Subscribe Now<i className="fa-solid fa-right-long ms-2"></i>
                                        </button>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
