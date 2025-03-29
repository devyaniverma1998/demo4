import Link from "next/link";
import Image from "next/image";

export default function Header() {


    return (
        <header className="th-header header-layout2 header-absolute">
            <div className="header-top">
                <div className="container th-container">
                    <div
                        className="row justify-content-center justify-content-lg-between align-items-center gy-2"
                    >
                        <div className="col-auto d-none d-lg-block">
                            <div className="header-links">
                                <ul>
                                    <li>
                                        <i className="far fa-phone"></i
                                        ><Link href="tel:+256214203215">+256 214 203 215</Link >
                                    </li>
                                    <li>
                                        <i className="far fa-envelope"></i
                                        ><Link href="mailto:info@rasm.com">info@rasm.com</Link >
                                    </li>
                                    <li>
                                        <i className="fal fa-location-dot"></i>25 Street, 145 City Town,
                                        USA
                                    </li>
                                    <li>
                                        <i className="fa-light fa-clock"></i>Mon - Sat: 8 AM - 15 PM
                                        Sunday Off
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-auto">
                            <div className="social-links">
                                <span className="social-title">Follow Us:</span>
                                <Link href="https://www.facebook.com/"
                                ><i className="fab fa-facebook-f"></i
                                ></Link >
                                <Link href="https://www.twitter.com/"
                                ><i className="fab fa-twitter"></i
                                ></Link >
                                <Link href="https://www.linkedin.com/"
                                ><i className="fab fa-linkedin-in"></i></Link >
                                <Link href="https://www.instagram.com/"
                                ><i className="fab fa-instagram"></i
                                ></Link >
                                <Link href="https://www.youtube.com/"
                                ><i className="fab fa-youtube"></i
                                ></Link >
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="sticky-wrapper">
                <div className="menu-area">
                    <div className="container th-container">
                        <div className="row align-items-center justify-content-between">
                            <div className="col-auto">
                                <div className="header-logo">
                                    <Link href="/"
                                    >
                                        <img src="/img/logo-black.svg" alt="Rasm"
                                        />
                                        </Link >
                                </div>
                            </div>
                            <div className="col-auto me-xl-auto">
                                <nav className="main-menu d-none d-lg-inline-block">
                                    <ul>
                                        <li >
                                            <Link href="/">Home</Link >

                                        </li>
                                        <li >
                                            <Link href="/about">About us</Link >

                                        </li>
                                        <li >
                                            <Link href="/serve">Services</Link >

                                        </li>


                                        <li ><Link href="/blog">Blog</Link > </li>
                                        <li><Link href="/contact">Contact Us</Link></li>
                                    </ul>
                                </nav>
                                <button className="th-menu-toggle d-inline-block d-lg-none">
                                    <i className="far fa-bars"></i>
                                </button>
                            </div>
                            <div className="col-auto d-none d-xl-block">
                                <div className="header-button">
                                    <button type="button" className="icon-btn searchBoxToggler">
                                        <i className="fas fa-search"></i>
                                    </button>
                                    <Link href="#" className="icon-btn sideMenuToggler2">
                                        <i className="fas fa-cart-shopping"></i>
                                        <span className="badge">5</span>
                                    </Link >
                                    <Link href="#" className="icon-btn sideMenuToggler">
                                        <i className="fas fa-grip"></i>
                                    </Link >
                                    <Link href="/contact" className="th-btn style3">
                                        Appointment Now <i className="fas fa-arrow-right ms-2"></i>
                                    </Link >
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
                <div className="logo-bg"></div>
            </div>
        </header>
    );
}
