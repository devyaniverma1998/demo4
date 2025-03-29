"use client";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Link from "next/link";
import Image from "next/image";
export default function Product() {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        arrows: true,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                },
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                },
            },
        ],
    };

    return (
        <section className="overflow-hidden space" id="shop-sec" >
            <div className="container">
                <div className="title-area text-center">
                    <span className="sub-title style2">Our Products</span>
                   <img src="/img/theme-img/title_shape_1.svg" alt="not found" />
                    <h2 className="sec-title">Our Latest Nail Products</h2>
                </div>

                {/* Slick Slider Starts */}
                <Slider {...settings} className="th-carousel">
                    {/* Product 1 */}
                    <div className="col-xl-3 col-lg-4 col-md-6">
                        <div className="th-product product-grid">
                            <div className="product-img">
                               <img src="/img/product/product_1_1.jpg" alt="Product Image" />
                                <div className="product-action style1">
                                   <Link href="/">
                                        <span className="action-text">Add To Cart</span>
                                        <span className="icon"><i className="fa-regular fa-cart-shopping"></i></span>
                                    </Link>
                                   <Link href="/">
                                        <span className="action-text">Wishlist</span>
                                        <span className="icon"><i className="fal fa-heart"></i></span>
                                    </Link>
                                </div>
                            </div>
                            <div className="product-grid_wrapper">
                                <div className="product-content">
                                    <h3 className="box-title">
                                       <Link className="text-inherit" href="/">OPI Nail Polish</Link>
                                    </h3>
                                    <div className="product-category">
                                       <Link href="/">Popular</Link>
                                    </div>
                                </div>
                                <div className="product-grid_content">
                                    <span className="price">$99</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Product 2 */}
                    <div className="col-xl-3 col-lg-4 col-md-6">
                        <div className="th-product product-grid">
                            <div className="product-img">
                               <img src="/img/product/product_1_2.jpg" alt="Product Image" />
                                <div className="product-action style1">
                                   <Link href="/">
                                        <span className="action-text">Add To Cart</span>
                                        <span className="icon"><i className="fa-regular fa-cart-shopping"></i></span>
                                    </Link>
                                   <Link href="/">
                                        <span className="action-text">Wishlist</span>
                                        <span className="icon"><i className="fal fa-heart"></i></span>
                                    </Link>
                                </div>
                            </div>
                            <div className="product-grid_wrapper">
                                <div className="product-content">
                                    <h3 className="box-title">
                                       <Link className="text-inherit" href="/">Sunscreen Lotion</Link>
                                    </h3>
                                    <div className="product-category">
                                       <Link href="/">Brand</Link>
                                    </div>
                                </div>
                                <div className="product-grid_content">
                                    <span className="price">$98</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Product 3 */}
                    <div className="col-xl-3 col-lg-4 col-md-6">
                        <div className="th-product product-grid">
                            <div className="product-img">
                               <img src="/img/product/product_1_3.jpg" alt="Product Image" />
                                <div className="product-action style1">
                                   <Link href="/">
                                        <span className="action-text">Add To Cart</span>
                                        <span className="icon"><i className="fa-regular fa-cart-shopping"></i></span>
                                    </Link>
                                   <Link href="/">
                                        <span className="action-text">Wishlist</span>
                                        <span className="icon"><i className="fal fa-heart"></i></span>
                                    </Link>
                                </div>
                            </div>
                            <div className="product-grid_wrapper">
                                <div className="product-content">
                                    <h3 className="box-title">
                                       <Link className="text-inherit" href="/">Wholesale Liquid</Link>
                                    </h3>
                                    <div className="product-category">
                                       <Link href="/">Classic</Link>
                                    </div>
                                </div>
                                <div className="product-grid_content">
                                    <span className="price">$96</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Product 4 */}
                    <div className="col-xl-3 col-lg-4 col-md-6">
                        <div className="th-product product-grid">
                            <div className="product-img">
                               <img src="/img/product/product_1_4.jpg" alt="Product Image" />
                                <div className="product-action style1">
                                   <Link href="/">
                                        <span className="action-text">Add To Cart</span>
                                        <span className="icon"><i className="fa-regular fa-cart-shopping"></i></span>
                                    </Link>
                                   <Link href="/">
                                        <span className="action-text">Wishlist</span>
                                        <span className="icon"><i className="fal fa-heart"></i></span>
                                    </Link>
                                </div>
                            </div>
                            <div className="product-grid_wrapper">
                                <div className="product-content">
                                    <h3 className="box-title">
                                       <Link className="text-inherit" href="/">Hair Dryers</Link>
                                    </h3>
                                    <div className="product-category">
                                       <Link href="/">Cosmetic</Link>
                                    </div>
                                </div>
                                <div className="product-grid_content">
                                    <span className="price">$85<del>$98</del></span>
                                </div>
                            </div>
                        </div>
                    </div>
                </Slider>
                {/* Slick Slider Ends */}
            </div>

            {/* Decorative Shapes */}
            <div className="shape-mockup jump d-none d-xl-block" data-top="0%" data-left="0%">
               <img src="/img/shape/leaves_3.png" alt="shape" />
            </div>
            <div className="shape-mockup jump d-none d-xl-block" data-top="5%" data-right="0%">
               <img src="/img/shape/flower_1_6.png" alt="shape" />
            </div>
        </section>
    );
}
