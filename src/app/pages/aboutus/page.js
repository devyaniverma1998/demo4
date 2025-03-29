import Link from "next/link"
import Image from "next/image";
export default function AboutUs() {
    return (
      <>
        <div className="overflow-hidden space" id="about-sec" >
            <div className="container">
                <div className="about-title-area">
                    <div className="title-area text-center mb-40">
                        <span className="sub-title style2">About Us</span>
                        <img src="/img/theme-img/title_shape_1.svg" alt="" />
                        <h2 className="sec-title">
                            Step Into The World of Nail Styling Perfection
                        </h2>
                        <p className="sec-text">
                            At our Nail Style Salon, we understand that each client is unique,
                            and their nail preferences vary. Thats why we offer customized
                            nail services tailored to your specific needs. Whether you are
                            looking for a classNameic French manicure, a chic and sophisticated
                            look for a special event.
                        </p>
                    </div>
                </div>
                <div className="video-group text-center">
                    <Link href="/about" className="th-btn"
                    >More About Us<i className="fa-regular fa-arrow-right ms-2"></i
                    ></Link>
                    <Link href="tel:+256214203215" className="th-btn style2"
                    >Make A Call<i className="fa-regular fa-arrow-right ms-2"></i
                    ></Link>
                </div>
                <div className="row gy-4 align-items-center"    >
                    <div className="col-xl-6 col-xxl-8" >
                        <div
                            className="video-box1 wow fadeInDown"
                            data-bg-src="/img/normal/video_1.jpg"
                        >
                            <img src="/img/normal/video_1.jpg" alt="video" />
                            <Link
                                href="https://www.youtube.com/watch?v=_sI_Ps7JSEk"
                                className="video-play-btn play-btn popup-video"
                            ><i className="fa-sharp fa-solid fa-play"></i
                            ></Link>
                        </div>
                    </div>
                    <div className="col-xl-6 col-xxl-4" >
                        <div className="counter-content">
                            <div className="th-counterup style2 wow fadeInUp">
                                <div className="inner">
                                    <div className="icon">
                                        <img src="/img/icon/counter_2_1.svg" alt="" />
                                    </div>
                                    <div className="content">
                                        <h3 className="counter">
                                            <span className="odometer" data-count="26">00</span>
                                            <span className="counter-number">+</span>
                                        </h3>
                                        <p className="counter-card_text">Years of Experience</p>
                                    </div>
                                </div>
                            </div>
                            <div className="th-counterup style2 wow fadeInUp">
                                <div className="inner">
                                    <div className="icon">
                                        <img src="/img/icon/counter_2_2.svg" alt="" />
                                    </div>
                                    <div className="content">
                                        <h3 className="counter">
                                            <span className="odometer" data-count="100">00</span>
                                            <span className="counter-number">%</span>
                                        </h3>
                                        <p className="counter-card_text">Natural Products</p>
                                    </div>
                                </div>
                            </div>
                            <div className="th-counterup style2 wow fadeInUp">
                                <div className="inner">
                                    <div className="icon">
                                        <img src="/img/icon/counter_2_3.svg" alt="" />
                                    </div>
                                    <div className="content">
                                        <h3 className="counter">
                                            <span className="odometer" data-count="56">00</span>
                                            <span className="counter-number">k+</span>
                                        </h3>
                                        <p className="counter-card_text">Satisfied Clients</p>
                                    </div>
                                </div>
                            </div>
                            <div className="th-counterup style2 wow fadeInUp">
                                <div className="inner">
                                    <div className="icon">
                                        <img src="/img/icon/counter_2_4.svg" alt="" />
                                    </div>
                                    <div className="content">
                                        <h3 className="counter">
                                            <span className="odometer" data-count="36">00</span>
                                            <span className="counter-number">+</span>
                                        </h3>
                                        <p className="counter-card_text">Specialists Team</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div
                className="shape-mockup d-none d-lg-block jump"
                data-top="0%"
                data-left="0%"
            >
                <img src="/img/shape/flower_1_5.png" alt="shape" />
            </div>
            <div
                className="shape-mockup d-none d-lg-block jump"
                data-bottom="0%"
                data-right="0%"
            >
                <img src="/img/shape/leaves_2.png" alt="shape" />
            </div>
        </div>
      </>
    )
}