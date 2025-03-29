import Link from "next/link"
import Image from "next/image";
export default function Instagram(){
    return(
        <>
        <div
      className="sidebar-gallery-area"
      data-pos-for=".footer-layout2"
      data-sec-pos="bottom-half"
    >
      <div className="container-fluid">
        <div
          className="row th-carousel"
          id="gallerySlide1"
          data-slide-show="9"
          data-xl-slide-show="6"
          data-lg-slide-show="4"
          data-md-slide-show="3"
          data-sm-slide-show="3"
          data-xs-slide-show="2"
          data-autoplay="false"
        >
          <div className="gallery-thumb">
           <img src="/img/widget/gallery_1_1.jpg" alt="Gallery Image" />
           <Link
              href="/img/widget/gallery_1_1.jpg"
              className="gallery-btn popup-image"
              ><i className="fab fa-instagram"></i
            ></Link>
          </div>
          <div className="gallery-thumb">
           <img src="/img/widget/gallery_1_2.jpg" alt="Gallery Image" />
           <Link
              href="/img/widget/gallery_1_2.jpg"
              className="gallery-btn popup-image"
              ><i className="fab fa-instagram"></i
            ></Link>
          </div>
          <div className="gallery-thumb">
           <img src="/img/widget/gallery_1_3.jpg" alt="Gallery Image" />
           <Link
              href="/img/widget/gallery_1_3.jpg"
              className="gallery-btn popup-image"
              ><i className="fab fa-instagram"></i
            ></Link>
          </div>
          <div className="gallery-thumb">
           <img src="/img/widget/gallery_1_4.jpg" alt="Gallery Image" />
           <Link
              href="/img/widget/gallery_1_4.jpg"
              className="gallery-btn popup-image"
              ><i className="fab fa-instagram"></i
            ></Link>
          </div>
          <div className="gallery-thumb">
           <img src="/img/widget/gallery_1_5.jpg" alt="Gallery Image" />
           <Link
              href="/img/widget/gallery_1_5.jpg"
              className="gallery-btn popup-image"
              ><i className="fab fa-instagram"></i
            ></Link>
          </div>
          <div className="gallery-thumb">
           <img src="/img/widget/gallery_1_6.jpg" alt="Gallery Image" />
           <Link
              href="/img/widget/gallery_1_6.jpg"
              className="gallery-btn popup-image"
              ><i className="fab fa-instagram"></i
            ></Link>
          </div>
          <div className="gallery-thumb">
           <img src="/img/widget/gallery_1_7.jpg" alt="Gallery Image" />
           <Link
              href="/img/widget/gallery_1_7.jpg"
              className="gallery-btn popup-image"
              ><i className="fab fa-instagram"></i
            ></Link>
          </div>
          <div className="gallery-thumb">
           <img src="/img/widget/gallery_1_8.jpg" alt="Gallery Image" />
           <Link
              href="/img/widget/gallery_1_8.jpg"
              className="gallery-btn popup-image"
              ><i className="fab fa-instagram"></i
            ></Link>
          </div>
          <div className="gallery-thumb">
           <img src="/img/widget/gallery_1_9.jpg" alt="Gallery Image" />
           <Link
              href="/img/widget/gallery_1_9.jpg"
              className="gallery-btn popup-image"
              ><i className="fab fa-instagram"></i
            ></Link>
          </div>
          <div className="gallery-thumb">
           <img src="/img/widget/gallery_1_10.jpg" alt="Gallery Image" />
           <Link
              href="/img/widget/gallery_1_10.jpg"
              className="gallery-btn popup-image"
              ><i className="fab fa-instagram"></i
            ></Link>
          </div>
        </div>
      </div>
    </div></>
    )
}
