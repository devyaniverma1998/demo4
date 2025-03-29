import Link from "next/link"
import Image from "next/image";
export default function Space(){
    return(
        <section className="space" style={{ backgroundImage: "url('/img/bg/price_bg_1.jpg')" }}>
        <div className="container">
          <div className="row justify-content-end">
            <div className="price-box_area">
              <div className="price-box-wrapper">
                <div className="title-area text-center">
                  <span className="sub-title">Nail & Hand Care</span>
                  <img src="/img/theme-img/title_shape_1.svg" alt="" />
                  <h2 className="sec-title">Our Nails Treatments & Prices</h2>
                </div>
                <div className="price-box wow fadeInUp">
                  <div className="price-box_wrapp">
                    <div className="price-box_content">
                      <h4 className="box-title"><Link href="/pages/price">Manicure</Link></h4>
                      <p className="price-box_desc">Elemental tempus getas</p>
                    </div>
                    <span className="price-box_price">$26</span>
                  </div>
                </div>
                <div className="price-box wow fadeInUp">
                  <div className="price-box_wrapp">
                    <div className="price-box_content">
                      <h4 className="box-title">
                       <Link href="/pages/price">Nail Clippers</Link>
                      </h4>
                      <p className="price-box_desc">
                        Quality products, customized services
                      </p>
                    </div>
                    <span className="price-box_price">$15</span>
                  </div>
                </div>
                <div className="price-box wow fadeInUp">
                  <div className="price-box_wrapp">
                    <div className="price-box_content">
                      <h4 className="box-title">
                       <Link href="/pages/price">Manicure & Pedicure</Link>
                      </h4>
                      <p className="price-box_desc">Premium quality nail polishes</p>
                    </div>
                    <span className="price-box_price">$34</span>
                  </div>
                </div>
                <div className="price-box wow fadeInUp">
                  <div className="price-box_wrapp">
                    <div className="price-box_content">
                      <h4 className="box-title">
                       <Link href="/pages/price">Hand/nail Moisturizer</Link>
                      </h4>
                      <p className="price-box_desc">
                        Rejuvenating hand or foot massage
                      </p>
                    </div>
                    <span className="price-box_price">$60</span>
                  </div>
                </div>
                <div className="price-box wow fadeInUp">
                  <div className="price-box_wrapp">
                    <div className="price-box_content">
                      <h4 className="box-title"><Link href="/pages/price">Nail Art</Link></h4>
                      <p className="price-box_desc">Vibrant colors, finishes</p>
                    </div>
                    <span className="price-box_price">$46</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    )
}