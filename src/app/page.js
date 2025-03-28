import Image from "next/image";
import About from "./about/page";
import Contact from "./contact/page";
import Blog from "./blog/page";
import Gallery from "./gallery/page";
import "bootstrap/dist/css/bootstrap.min.css";

export default function Home() {
  return (
   <>
   <About/>
   <Blog/>
   <Gallery/>
   <Contact/>
   </>
  );
}
