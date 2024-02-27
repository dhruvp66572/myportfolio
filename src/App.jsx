import React, { useState } from "react";
import ProgressLine from "./ProgressLine";
import Project_details from "./Project_details";
function App() {
  const [modalShow, setModalShow] = useState(false);
  const [index, setIndex] = useState(0)
  const projectdata = [
      {
        "pid": 1,
        "projectName": "PlanetX",
        "projectDescription": "This is E-commerce Website For Online Shopping Cart System",
        "projectImage": "nikhil-KO4io-eCAXA-unsplash.jpg",
        "projectLink": "",
        "projectFrontend": "Asp.Net, Vb.net, SQL server",
        "projectBackend": "Asp.Net, Vb.net, SQL server",
        "projectDatabase": "SQL server",
        "projectType": "Web Development",
        "projectDate": "10-01-2023",
        "projectStatus": "Completed",
      },
      {
        "pid": 2,
        "projectName": "News App",
        "projectDescription": "This is E-commerce Website For Online Shopping Cart System",
        "projectImage": "nikhil-KO4io-eCAXA-unsplash.jpg",
        "projectLink": "",
        "projectFrontend": "Asp.Net, Vb.net, SQL server",
        "projectBackend": "Asp.Net, Vb.net, SQL server",
        "projectDatabase": "SQL server",
        "projectType": "Web Development",
        "projectDate": "10-01-2023",
        "projectStatus": "Completed",
      },
      {
        "pid": 3,
        "projectName": "Portfolio",
        "projectDescription": "This is E-commerce Website For Online Shopping Cart System",
        "projectImage": "nikhil-KO4io-eCAXA-unsplash.jpg",
        "projectLink": "",
        "projectFrontend": "Asp.Net, Vb.net, SQL server",
        "projectBackend": "Asp.Net, Vb.net, SQL server",
        "projectDatabase": "SQL server",
        "projectType": "Web Development",
        "projectDate": "10-01-2023",
        "projectStatus": "Completed",
      }
  ];
// console.log(projectdata.pid)
  return (
    <>
      <section className="preloader">
        <div className="spinner">
          <span className="spinner-rotate"></span>
        </div>
      </section>

      <nav className="navbar navbar-expand-lg">
        <div className="container">
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <a href="#" className="navbar-brand mx-auto mx-lg-0">
            Dhruv Prajapati
          </a>

          <div className="d-flex align-items-center d-lg-none">
            <i
              className="navbar-icon bi-telephone-plus me-3"
              id="toggleButton"
            ></i>
            <a className="custom-btn btn" href="#section_5">
              9909066572
            </a>
          </div>

          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-lg-5">
              <li className="nav-item">
                <a className="nav-link click-scroll" href="#section_1">
                  Home
                </a>
              </li>

              <li className="nav-item">
                <a className="nav-link click-scroll" href="#section_2">
                  About
                </a>
              </li>

              <li className="nav-item">
                <a className="nav-link click-scroll" href="#section_3">
                  Skills
                </a>
              </li>

              <li className="nav-item">
                <a className="nav-link click-scroll" href="#section_4">
                  Projects
                </a>
              </li>

              <li className="nav-item">
                <a className="nav-link click-scroll" href="#section_5">
                  Contact
                </a>
              </li>
            </ul>

            <div className="d-lg-flex align-items-center d-none ms-auto">
              <i className="navbar-icon bi-telephone-plus me-3"></i>
              <a className="custom-btn btn" href="#section_5">
                9909066572
              </a>
            </div>
          </div>
        </div>
      </nav>

      <main>
        <section
          className="hero d-flex justify-content-center align-items-center"
          id="section_1"
        >
          <div className="container">
            <div className="row">
              <div className="col-lg-7 col-12">
                <div className="hero-text">
                  <div className="hero-title-wrap d-flex align-items-center mb-4">
                    <img
                      src="../images/profile.jpg"
                      className="avatar-image avatar-image-large img-fluid"
                      alt=""
                    />

                    <h1 className="hero-title ms-3 mb-0">Hello friend!</h1>
                  </div>
                  {/* <div className="mb-4" style="height: 22px;">
                            <h4 className="typed-text-output d-inline-block text-light"></h4>
                            <div className="typed-text d-none">Web Designer, Web Developer, Front End Developer, Apps Designer, Apps Developer</div>
                        </div> */}
                  <h2 className="mb-4">I’m available for freelance work.</h2>
                  <p className="mb-4">
                    <a className="custom-btn btn custom-link" href="#section_2">
                      Let's begin
                    </a>
                  </p>
                </div>
              </div>

              <div className="col-lg-5 col-12 position-relative">
                <div className="hero-image-wrap"></div>
                <img
                  src="../images/bg1.png"
                  className="hero-image img-fluid"
                  alt="sd"
                  style={{
                    minWidth: "400px",
                    width: "470px",
                    height: "429px",
                    marginTop: "-130px",
                    marginLeft: "-5px",
                    borderBottomLeftRadius: "300px",
                    transform: "rotate(1deg)",
                    borderBottomRightRadius: "300px",
                  }}
                />
              </div>
            </div>
          </div>

          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
            <path
              fill="#535da1"
              fillOpacity="1"
              d="M0,160L24,160C48,160,96,160,144,138.7C192,117,240,75,288,64C336,53,384,75,432,106.7C480,139,528,181,576,208C624,235,672,245,720,240C768,235,816,213,864,186.7C912,160,960,128,1008,133.3C1056,139,1104,181,1152,202.7C1200,224,1248,224,1296,197.3C1344,171,1392,117,1416,90.7L1440,64L1440,0L1416,0C1392,0,1344,0,1296,0C1248,0,1200,0,1152,0C1104,0,1056,0,1008,0C960,0,912,0,864,0C816,0,768,0,720,0C672,0,624,0,576,0C528,0,480,0,432,0C384,0,336,0,288,0C240,0,192,0,144,0C96,0,48,0,24,0L0,0Z"
            ></path>
          </svg>
        </section>

        <section className="about section-padding" id="section_2">
          <div className="container">
            <div className="row">
              {/* <div className="col-lg-6 col-12">
                <img
                  src="images/couple-working-from-home-together-sofa.jpg"
                  className="about-image img-fluid"
                  alt=""
                />
              </div> */}

              <div className="col-lg-12 col-12 mt-5 mt-lg-0">
                <div className="about-thumb">
                  <div className="section-title-wrap d-flex align-items-center mb-4">
                    <div className="col-3">
                      <img
                        src="../images/profile.jpg"
                        className="avatar-image img-fluid"
                        alt=""
                        style={{border:"2px solid black"}}
                      />
                      {/* <h2 className="text-white me-4 mb-0">My Story</h2> */}
                    </div>
                    <div className="col-9">
                      <h3 className="text-white pt-2 mb-3">
                        A little bit about Dhruv
                      </h3>
                      <p
                        className="text-white"
                        style={{ textAlign: "justify" }}
                      >
                        Lorem ipsum dolor, sit amet consectetur adipisicing
                        elit. Iure hic incidunt delectus quia esse expedita
                        iusto excepturi asperiores consequatur. Vitae hic, unde
                        reiciendis ratione sequi repellendus harum blanditiis
                        omnis debitis.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="container">
                  <div className="row">
                    <div className="col-lg-6 col-12">
                      <div className="profile-thumb">
                        <div className="profile-title">
                          <h4 className="mb-0">Information</h4>
                        </div>

                        <div className="profile-body">
                          <p>
                            <span className="profile-small-title">Name</span>
                            <span>Dhruv Prajapati</span>
                          </p>

                          <p>
                            <span className="profile-small-title">
                              Birthday
                            </span>
                            <span>Sep 22, 2004</span>
                          </p>

                          <p>
                            <span className="profile-small-title">Phone</span>
                            <span>
                              <a href="tel: 9909066572">9909066572</a>
                            </span>
                          </p>

                          <p>
                            <span className="profile-small-title">Email</span>
                            <span>
                              <a href="mailto:hello@josh.design">
                                dhruvprajapati.ce@gmail.com
                              </a>
                            </span>
                          </p>
                          <p>
                            <span className="profile-small-title">State</span>
                            <span>
                              {/* <a href="">dhruvprajapati.ce@gmail.com</a> */}
                              Gujarat
                            </span>
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="col-lg-6 col-12 mt-5 mt-lg-0">
                      <div className="about-thumb">
                        <div className="row">
                          <div className="col-lg-6 col-6 featured-border-bottom py-2">
                            <strong className="featured-numbers">3+</strong>

                            <p className="featured-text">
                              Years of Experiences
                            </p>
                          </div>

                          <div className="col-lg-6 col-6 featured-border-start featured-border-bottom ps-5 py-2">
                            <strong className="featured-numbers">-</strong>

                            <p className="featured-text">Happy Customers</p>
                          </div>

                          <div className="col-lg-6 col-6 pt-4">
                            <strong className="featured-numbers">10+</strong>

                            <p className="featured-text">Project Finished</p>
                          </div>

                          <div className="col-lg-6 col-6 featured-border-start ps-5 pt-4">
                            <strong className="featured-numbers">72+</strong>

                            <p className="featured-text">Digital Awards</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* <section className="clients section-padding">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-lg-12 col-12">
                <h3 className="text-center mb-5">Companies I've had worked</h3>
              </div>

              <div className="col-lg-2 col-4 ms-auto clients-item-height">
                <img
                  src="images/clients/cachet.svg"
                  className="clients-image img-fluid"
                  alt=""
                />
              </div>

              <div className="col-lg-2 col-4 clients-item-height">
                <img
                  src="images/clients/guitar-center.svg"
                  className="clients-image img-fluid"
                  alt=""
                />
              </div>

              <div className="col-lg-2 col-4 clients-item-height">
                <img
                  src="images/clients/tokico.svg"
                  className="clients-image img-fluid"
                  alt=""
                />
              </div>

              <div className="col-lg-2 col-4 clients-item-height">
                <img
                  src="images/clients/shopify.svg"
                  className="clients-image img-fluid"
                  alt=""
                />
              </div>

              <div className="col-lg-2 col-4 me-auto clients-item-height">
                <img
                  src="images/clients/profil-rejser.svg"
                  className="clients-image img-fluid"
                  alt=""
                />
              </div>
            </div>
          </div>
        </section> */}

        <section className="services " id="section_3">
          <div className="container">
            <div className="row">
              <div className="col-lg-12 col-12">
                <div className="section-title-wrap d-flex justify-content-center align-items-center mb-5">
                  <img
                    src="images/handshake-man-woman-after-signing-business-contract-closeup.jpg"
                    className="avatar-image img-fluid"
                    alt=""
                  />

                  <h2 className="text-white ms-4 mb-0">Skills</h2>
                </div>

                <div className="row">
                  <div className="col-lg-12 col-12">
                    {/* style={{color:"#14B789",borderRight: "1px solid #e9eaeb", fontWeight: "700"}} */}
                    <div
                      className="services-thumb"
                      style={{
                        backgroundColor: "#535da1",
                        color: "white",
                        padding: "30px",
                      }}
                    >
                      <div className="row">
                        <div className="col-6">
                          <ProgressLine
                            label="React Js"
                            visualParts={[
                              {
                                percentage: "60%",
                                color: "#14B789",
                              },
                            ]}
                          />
                          <ProgressLine
                            label="Node Js"
                            visualParts={[
                              {
                                percentage: "70%",
                                color: "#14B789",
                              },
                            ]}
                          />
                          <ProgressLine
                            label="Express Js"
                            visualParts={[
                              {
                                percentage: "65%",
                                color: "#14B789",
                              },
                            ]}
                          />
                          <ProgressLine
                            label="Javasript"
                            visualParts={[
                              {
                                percentage: "75%",
                                color: "#14B789",
                              },
                            ]}
                          />

                          <ProgressLine
                            label="Asp.Net"
                            visualParts={[
                              {
                                percentage: "90%",
                                color: "#14B789",
                              },
                            ]}
                          />
                        </div>
                        <div className="col-6">
                          <ProgressLine
                            label="C"
                            visualParts={[
                              {
                                percentage: "60%",
                                color: "#14B789",
                              },
                            ]}
                          />
                          <ProgressLine
                            label="C++"
                            visualParts={[
                              {
                                percentage: "70%",
                                color: "#14B789",
                              },
                            ]}
                          />
                          <ProgressLine
                            label="Java"
                            visualParts={[
                              {
                                percentage: "70%",
                                color: "#14B789",
                              },
                            ]}
                          />
                          <ProgressLine
                            label="Php"
                            visualParts={[
                              {
                                percentage: "65%",
                                color: "#14B789",
                              },
                            ]}
                          />
                          <ProgressLine
                            label="SQL"
                            visualParts={[
                              {
                                percentage: "75%",
                                color: "#14B789",
                              },
                            ]}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="services section-padding" id="section_3">
          <div className="container">
            <div className="row">
              <div className="col-lg-12 col-12 mx-auto">
                <div className="section-title-wrap d-flex justify-content-center align-items-center mb-5">
                  <img
                    src="images/handshake-man-woman-after-signing-business-contract-closeup.jpg"
                    className="avatar-image img-fluid"
                    alt=""
                  />

                  <h2 className="text-white ms-4 mb-0">Services</h2>
                </div>

                <div className="row pt-lg-5">
                  <div className="col-lg-6 col-12">
                    <div className="services-thumb">
                      <div className="d-flex flex-wrap align-items-center border-bottom mb-4 pb-3">
                        <h3 className="mb-0">Websites</h3>

                        <div className="services-price-wrap ms-auto">
                          <p className="services-price-text mb-0">$2,400</p>
                          <div className="services-price-overlay"></div>
                        </div>
                      </div>

                      <p>
                        You may want to explore Too CSS for great collection of
                        free HTML CSS templates.
                      </p>

                      <a
                        href="#"
                        className="custom-btn custom-border-btn btn mt-3"
                      >
                        Discover More
                      </a>

                      <div className="services-icon-wrap d-flex justify-content-center align-items-center">
                        <i className="services-icon bi-globe"></i>
                      </div>
                    </div>
                  </div>

                  <div className="col-lg-6 col-12">
                    <div className="services-thumb services-thumb-up">
                      <div className="d-flex flex-wrap align-items-center border-bottom mb-4 pb-3">
                        <h3 className="mb-0">Web Portal</h3>

                        <div className="services-price-wrap ms-auto">
                          <p className="services-price-text mb-0">$1,200</p>
                          <div className="services-price-overlay"></div>
                        </div>
                      </div>

                      <p>
                        You can explore more CSS templates on TemplateMo website
                        by browsing through different tags.
                      </p>

                      <a
                        href="#"
                        className="custom-btn custom-border-btn btn mt-3"
                      >
                        Discover More
                      </a>

                      <div className="services-icon-wrap d-flex justify-content-center align-items-center">
                        <i className="services-icon bi-lightbulb"></i>
                      </div>
                    </div>
                  </div>

                  <div className="col-lg-6 col-12">
                    <div className="services-thumb">
                      <div className="d-flex flex-wrap align-items-center border-bottom mb-4 pb-3">
                        <h3 className="mb-0">E-commerce</h3>

                        <div className="services-price-wrap ms-auto">
                          <p className="services-price-text mb-0">$3,600</p>
                          <div className="services-price-overlay"></div>
                        </div>
                      </div>

                      <p>
                        If you need a customized ecommerce website for your
                        business, feel free to discuss with me.
                      </p>

                      <a
                        href="#"
                        className="custom-btn custom-border-btn btn mt-3"
                      >
                        Discover More
                      </a>

                      <div className="services-icon-wrap d-flex justify-content-center align-items-center">
                        <i className="services-icon bi-phone"></i>
                      </div>
                    </div>
                  </div>

                  <div className="col-lg-6 col-12">
                    <div className="services-thumb services-thumb-up">
                      <div className="d-flex flex-wrap align-items-center border-bottom mb-4 pb-3">
                        <h3 className="mb-0">Window-Based</h3>

                        <div className="services-price-wrap ms-auto">
                          <p className="services-price-text mb-0">$1,450</p>
                          <div className="services-price-overlay"></div>
                        </div>
                      </div>

                      <p>
                        To list your website first on any search engine, we will
                        work together. First Portfolio is one-page CSS Template
                        for free download.
                      </p>

                      <a
                        href="#"
                        className="custom-btn custom-border-btn btn mt-3"
                      >
                        Discover More
                      </a>

                      <div className="services-icon-wrap d-flex justify-content-center align-items-center">
                        <i className="services-icon bi-google"></i>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="projects section-padding" id="section_4">
          <div className="container">
            <div className="row">
              <div className="col-lg-12 col-md-12 col-12 ms-auto">
                <div className="section-title-wrap d-flex justify-content-center align-items-center mb-4">
                  <img
                    src="images/white-desk-work-study-aesthetics.jpg"
                    className="avatar-image img-fluid"
                    alt=""
                  />

                  <h2 className="text-white ms-4 mb-0">Projects</h2>
                </div>
              </div>

              <div className="clearfix"></div>

                            {
                              projectdata.map((project,index) => {
                                return (
                                  <div className="col-lg-4 col-md-6 col-12">
                                    <div className="projects-thumb">
                                      <div className="projects-info">
                                        <small className="projects-tag">{project.projectType}</small>
                                        <h3 className="projects-title">{project.projectName}</h3>
                                      </div>
                                      <img
                                        src={`../images/projects/${project.projectImage}`}
                                        className="projects-image img-fluid"
                                        alt=""
                                        style={{cursor:"pointer"}}
                                        onClick={() => {setModalShow(true);setIndex(index)}}
                                      />
                                    </div>
                                  </div>
                                )
                                })
                            }
            </div>
          </div>
        </section>

        <Project_details 
          index = {index}
          projectdata = {projectdata}
          show={modalShow}
          onHide={() => setModalShow(false)}
        />

        <section className="contact section-padding" id="section_5">
          <div className="container">
            <div className="row">
              <div className="col-lg-12 col-md-12 col-12">
                <div className="section-title-wrap d-flex justify-content-center align-items-center mb-5">
                  <img
                    src="images/aerial-view-man-using-computer-laptop-wooden-table.jpg"
                    className="avatar-image img-fluid"
                    alt=""
                  />

                  <h2 className="text-white ms-4 mb-0">Say Hi</h2>
                </div>
              </div>

              <div className="clearfix"></div>

              <div className="col-lg-3 col-md-6 col-12 pe-lg-0">
                <div className="contact-info contact-info-border-start d-flex flex-column">
                  <strong className="site-footer-title d-block mb-3">
                    Services
                  </strong>

                  <ul className="footer-menu">
                    <li className="footer-menu-item">
                      <a href="#" className="footer-menu-link">
                        Websites
                      </a>
                    </li>

                    <li className="footer-menu-item">
                      <a href="#" className="footer-menu-link">
                        Web Portal
                      </a>
                    </li>

                    <li className="footer-menu-item">
                      <a href="#" className="footer-menu-link">
                        E-commerce
                      </a>
                    </li>

                    <li className="footer-menu-item">
                      <a href="#" className="footer-menu-link">
                        Window-Based
                      </a>
                    </li>
                  </ul>

                  <strong className="site-footer-title d-block mt-4 mb-3">
                    Stay connected
                  </strong>

                  <ul className="social-icon">
                    <li className="social-icon-item">
                      <a
                        href="https://www.linkedin.com/in/dhruv-prajapati-088721260/"
                        className="social-icon-link bi-linkedin"
                      ></a>
                    </li>

                    <li className="social-icon-item">
                      <a
                        href="https://github.com/dhruvp66572"
                        className="social-icon-link bi-github"
                      ></a>
                    </li>

                    <li className="social-icon-item">
                      <a
                        href="https://www.instagram.com/dp__572/"
                        className="social-icon-link bi-instagram"
                      ></a>
                    </li>

                    {/* <li className="social-icon-item">
                      <a
                        href=""
                        className="social-icon-link bi-youtube"
                      ></a>
                    </li> */}
                  </ul>

                  <strong className="site-footer-title d-block mt-4 mb-3">
                    Start a project
                  </strong>

                  <p className="mb-0">I’m available for freelance projects</p>
                </div>
              </div>

              <div className="col-lg-3 col-md-6 col-12 ps-lg-0">
                <div className="contact-info d-flex flex-column">
                  <strong className="site-footer-title d-block mb-3">
                    About
                  </strong>

                  <p className="mb-2">
                    I am a professional web developer. Feel free to get in touch
                    with me.
                  </p>

                  <strong className="site-footer-title d-block mt-4 mb-3">
                    Email
                  </strong>

                  <p>
                    <a href="dhruvprajapati.ce@gmail.com">
                      dhruvprajapati.ce@gmail.com
                    </a>
                  </p>

                  <strong className="site-footer-title d-block mt-4 mb-3">
                    Call
                  </strong>

                  <p className="mb-0">
                    <a href="tel: 99090-66572">+91 9909066572</a>
                  </p>
                </div>
              </div>

              <div className="col-lg-6 col-12 mt-5 mt-lg-0">
                <form
                  action="#"
                  method="get"
                  className="custom-form contact-form"
                  role="form"
                >
                  <div className="row">
                    <div className="col-lg-6 col-md-6 col-12">
                      <div className="form-floating">
                        <input
                          type="text"
                          name="name"
                          id="name"
                          className="form-control"
                          placeholder="Name"
                          required=""
                        />

                        <label htmlFor="floatingInput">Name</label>
                      </div>
                    </div>

                    <div className="col-lg-6 col-md-6 col-12">
                      <div className="form-floating">
                        <input
                          type="email"
                          name="email"
                          id="email"
                          pattern="[^ @]*@[^ @]*"
                          className="form-control"
                          placeholder="Email address"
                          required=""
                        />

                        <label htmlFor="floatingInput">Email address</label>
                      </div>
                    </div>

                    <div className="col-lg-3 col-md-6 col-6">
                      <div className="form-check form-check-inline">
                        <input
                          name="website"
                          type="checkbox"
                          className="form-check-input"
                          id="inlineCheckbox1"
                          value="1"
                        />

                        <label
                          className="form-check-label"
                          htmlFor="inlineCheckbox1"
                        >
                          <i className="bi-globe form-check-icon"></i>
                          <span className="form-check-label-text">
                            Websites
                          </span>
                        </label>
                      </div>
                    </div>

                    <div className="col-lg-3 col-md-6 col-6">
                      <div className="form-check form-check-inline">
                        <input
                          name="webportal"
                          type="checkbox"
                          className="form-check-input"
                          id="inlineCheckbox2"
                          value="1"
                        />

                        <label
                          className="form-check-label"
                          htmlFor="inlineCheckbox2"
                        >
                          <i className="bi-lightbulb form-check-icon"></i>
                          <span className="form-check-label-text">
                            webportal
                          </span>
                        </label>
                      </div>
                    </div>

                    <div className="col-lg-3 col-md-6 col-6">
                      <div className="form-check form-check-inline">
                        <input
                          name="ecommerce"
                          type="checkbox"
                          className="form-check-input"
                          id="inlineCheckbox3"
                          value="1"
                        />

                        <label
                          className="form-check-label"
                          htmlFor="inlineCheckbox3"
                        >
                          <i className="bi-phone form-check-icon"></i>
                          <span className="form-check-label-text">
                            E-commerce
                          </span>
                        </label>
                      </div>
                    </div>

                    <div className="col-lg-3 col-md-6 col-6">
                      <div className="form-check form-check-inline me-0">
                        <input
                          name="windowbased"
                          type="checkbox"
                          className="form-check-input"
                          id="inlineCheckbox4"
                          value="1"
                        />

                        <label
                          className="form-check-label"
                          htmlFor="inlineCheckbox4"
                        >
                          <i className="bi-google form-check-icon"></i>
                          <span className="form-check-label-text">
                            Window-Based
                          </span>
                        </label>
                      </div>
                    </div>

                    <div className="col-lg-12 col-12">
                      <div className="form-floating">
                        <textarea
                          className="form-control"
                          id="message"
                          name="message"
                          placeholder="Tell me about the project"
                        ></textarea>

                        <label htmlFor="floatingTextarea">
                          Tell me about the project
                        </label>
                      </div>
                    </div>

                    <div className="col-lg-3 col-12 ms-auto">
                      <button type="submit" className="form-control">
                        Send
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
          {/* </div> */}
        </section>
      </main>

      {/* <footer className="site-footer">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 col-12">
              <div className="copyright-text-wrap">
                <p className="mb-0">
                  <span className="copyright-text">
                    Copyright © 2036 <a href="#">First Portfolio</a> Company.
                    All rights reserved.
                  </span>
                  Design:
                  <a
                    rel="sponsored"
                    href="https://templatemo.com"
                    target="_blank"
                  >
                    TemplateMo
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </footer> */}
    </>
  );
}

export default App;
