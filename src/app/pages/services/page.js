export default function Services(){
    return(
        <>
         <section className="service-sec overflow-hidden space" id="service-sec">
      <div className="container">
        <div className="title-area text-center mb-30">
          <span className="sub-title style2">Our Services</span>
          <img src="/img/theme-img/title_shape_1.svg" alt="" />
          <h2 className="sec-title">Professional Spa and Beauty Service</h2>
        </div>
        <div className="row gy-4 justify-content-between align-items-center">
          <div className="col-md-6 col-lg-auto">
            <div className="service-item wow fadeInLeft">
              <div className="service-item_img global-img">
                <img src="/img/service/service_1_1.jpg" alt="Service" />
              </div>
              <div className="service-item_wrapper">
                <h3 className="box-title">
                  <a href="service-details.html">Nail Manicure</a>
                </h3>
                <div className="service-item_icon">
                  <i className="fa-regular fa-arrow-right"></i>
                </div>
              </div>
            </div>
            <div className="service-item wow fadeInLeft">
              <div className="service-item_img global-img">
                <img src="/img/service/service_1_2.jpg" alt="Service" />
              </div>
              <div className="service-item_wrapper">
                <h3 className="box-title">
                  <a href="service-details.html">Nail Art</a>
                </h3>
                <div className="service-item_icon">
                  <i className="fa-regular fa-arrow-right"></i>
                </div>
              </div>
            </div>
          </div>
          <div className="col col-xxl-auto text-center d-none d-lg-block">
            <div className="service-image wow fadeInUp">
              <img
                className="tilt-active"
                src="/img/normal/service-img.png"
                alt=""
              />
            </div>
          </div>
          <div className="col-md-6 col-lg-auto">
            <div className="service-item wow fadeInRight">
              <div className="service-item_img global-img">
                <img src="/img/service/service_1_3.jpg" alt="Service" />
              </div>
              <div className="service-item_wrapper">
                <h3 className="box-title">
                  <a href="service-details.html">Nail Pedicure</a>
                </h3>
                <div className="service-item_icon">
                  <i className="fa-regular fa-arrow-right"></i>
                </div>
              </div>
            </div>
            <div className="service-item wow fadeInRight">
              <div className="service-item_img global-img">
                <img src="/img/service/service_1_4.jpg" alt="Service" />
              </div>
              <div className="service-item_wrapper">
                <h3 className="box-title">
                  <a href="service-details.html">Nail Paraffin Hands</a>
                </h3>
                <div className="service-item_icon">
                  <i className="fa-regular fa-arrow-right"></i>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        className="shape-mockup jump d-none d-xl-block"
        data-top="5%"
        data-left="0%"
      >
        <img src="/img/shape/leaves_8.png" alt="shape" />
      </div>
      <div
        className="shape-mockup jump d-none d-xl-block"
        data-bottom="5%"
        data-right="0%"
      >
        <img src="/img/shape/leaves_7.png" alt="shape" />
      </div>
    </section></>
    )
}