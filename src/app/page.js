import Image from "next/image";
import About from "./about/page";
import Contact from "./contact/page";
import Blog from "./blog/page";
import Gallery from "./gallery/page";
import "bootstrap/dist/css/bootstrap.min.css";
import Hero from "./pages/hero/page";
import AboutUs from "./pages/aboutus/page";
import "slick-carousel/slick/slick.css"
import Services from "./pages/services/page";
import Choose from "./pages/choose/page";
import Space from "./pages/space/page";
import Appointment from "./pages/appointment/page";
import Product from "./pages/product/page";
import Productspace from "./pages/productspace/page";
import ProductSpace from "./pages/productspace/page";
import Testimonial from "./pages/testimonial/page";
import SecShape from "./pages/secshape/page";


export default function Home() {
  return (
   <>
   <Hero/>
   <AboutUs/>
   <Services/>
   <Choose/>
   <Space/>
   <Appointment/>
   <SecShape/>
   <Product/>
   <ProductSpace/>
   <Testimonial/>
   <SecShape/>
   <Blog/>
   </>
  );
}
