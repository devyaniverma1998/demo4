"use client"; // Ensure it's a client component

export default function Appointment() {
    const bgImage = "/img/bg/appointment_bg_2.jpg"; // Change this dynamically if needed

    return (
        <>
            <div
                className="appointment-sec bg-top-center space"
                id="contact-sec"
                style={{ backgroundImage: `url(${bgImage})` }} // ✅ Fix: Only one style attribute
            >
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 wow fadeInLeft">
                            <div className="title-area mb-25 text-center text-lg-start">
                                <span className="sub-title text-white">
                                    Make An Appointment
                                    <img src="/img/theme-img/title_right2.svg" alt="" />
                                </span>
                                <h2 className="sec-title text-white">
                                    Experience the Magic of Our Nail Styling Services
                                </h2>
                            </div>
                            <div className="appointment-work text-center text-lg-start">
                                <h4 className="work-title">Working Hours:</h4>
                                <p>
                                    We are dedicated to delivering exceptional results and ensuring
                                    your nails make a bold and beautiful statement.
                                </p>
                                <ul className="working-list">
                                    <li>Monday to Friday<span>09:00am - 20:00pm</span></li>
                                    <li>Saturday<span>10:00am - 18:00pm</span></li>
                                    <li>Sunday<span>Closed</span></li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="appointment-quote-form wow fadeInUp">
                                <div className="row">
                                    <div className="col-md-6 form-group">
                                        <input type="text" placeholder="First Name" className="form-control" />
                                    </div>
                                    <div className="col-md-6 form-group">
                                        <input type="text" placeholder="Last Name" className="form-control" />
                                    </div>
                                    <div className="col-md-6 form-group">
                                        <input type="text" placeholder="Email Address" className="form-control" />
                                    </div>
                                    <div className="col-md-6 form-group">
                                        <input type="text" placeholder="Phone Number" className="form-control" />
                                    </div>
                                    <div className="form-group col-12">
                                        <select name="subject" id="subject" className="form-select nice-select" defaultValue="">
                                            <option value="" disabled hidden>
                                                Select Subject
                                            </option>
                                            <option value="Spa & Massage">Spa & Massage</option>
                                            <option value="Facial & Massage">Facial & Massage</option>
                                            <option value="Head Massage">Head Massage</option>
                                            <option value="Sports Massage">Sports Massage</option>
                                            <option value="Stone Massage">Stone Massage</option>
                                        </select>

                                    </div>
                                    <div className="form-group col-12">
                                        <input type="text" className="date-pick form-control" name="date" placeholder="Select Date" />
                                    </div>
                                    <div className="form-group col-12">
                                        <input type="text" className="time-pick form-control" name="time" placeholder="Select Time" />
                                    </div>
                                    <div className="btn-group justify-content-center justify-content-xl-start">
                                        <button className="th-btn style3 fw-btn">
                                            Make An Appointment
                                            <i className="fa-solid fa-arrow-right ms-2"></i>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
           
        </>
    );
}
