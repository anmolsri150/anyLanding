import React from "react";
import Navbar from "../components/Navbar/navbar";
import FullTestimonials from "../components/Full-testimonials/full-testimonials";
import CallToAction from "../components/Call-to-action/call-to-action";
import Footer from "../components/Footer/footer";
import Team from "../components/Team/team";
import DarkTheme from "../layouts/Dark";
import Works3 from "../components/Works3/works3";
import Blogs4 from "../components/blogs/Blogs4/blogs4";
import Intro4 from "../components/Intro4/intro4";
import Intro41 from "../components/Intro4/intro41";
import AboutUs3 from "../components/About-us3/about-us3";
import Services3 from "../components/Services3/services3";
import MinimalArea2 from "../components/Minimal-Area2/minimal-area2";

const Homepage5 = () => {
  const navbarRef = React.useRef(null);
  const logoRef = React.useRef(null);

  React.useEffect(() => {
    var navbar = navbarRef.current;
    if (window.pageYOffset > 300) {
      navbar.classList.add("nav-scroll");
    } else {
      navbar.classList.remove("nav-scroll");
    }
    window.addEventListener("scroll", () => {
      if (window.pageYOffset > 300) {
        navbar.classList.add("nav-scroll");
      } else {
        navbar.classList.remove("nav-scroll");
      }
    });
  }, [navbarRef]);
  return (
    <DarkTheme>
      <Navbar nr={navbarRef} lr={logoRef} />
      <Intro4 />
      <Intro41 />
      {/*<AboutUs3 />*/}
      {/*<Works3 />*/}
      {/*<Services3 />*/}
      {/*<MinimalArea2 />*/}
      {/*<FullTestimonials classText="pb-0" />*/}
      {/*<Team />*/}
      {/*<Blogs4 />*/}
      {/*  <section className="services bords lficon section-padding position-re">*/}
      {/*      <div className="container">*/}
      {/*          <div className="row justify-content-center">*/}
      {/*              <div className="col-lg-8 col-md-10">*/}
      {/*                  <div className="sec-head  text-center">*/}
      {/*                      <h6 className="wow fadeIn" data-wow-delay=".5s">*/}
      {/*                          Best Features*/}
      {/*                      </h6>*/}
      {/*                      <h3 className="wow color-font">*/}
      {/*                          Creative Agency, Corporate and Portfolio Template*/}
      {/*                      </h3>*/}
      {/*                  </div>*/}
      {/*              </div>*/}
      {/*          </div>*/}
      {/*          <div className="row">*/}
      {/*              <div className="col-lg-6 wow fadeInLeft" data-wow-delay=".5s">*/}
      {/*                  <div className="item-box">*/}
      {/*                      <div>*/}
      {/*                          <span className="icon pe-7s-paint-bucket"></span>*/}
      {/*                      </div>*/}
      {/*                      <div className="cont">*/}
      {/*                          <h6>UI/UX Design</h6>*/}
      {/*                          <p>*/}
      {/*                              We provide the best design by following the latest trends.*/}
      {/*                          </p>*/}
      {/*                      </div>*/}
      {/*                  </div>*/}
      {/*              </div>*/}
      {/*              <div className="col-lg-6 wow fadeInLeft" data-wow-delay=".7s">*/}
      {/*                  <div className="item-box">*/}
      {/*                      <div>*/}
      {/*                          <span className="icon pe-7s-phone"></span>*/}
      {/*                      </div>*/}
      {/*                      <div className="cont">*/}
      {/*                          <h6>Easily Customizable</h6>*/}
      {/*                          <p>Build and customize stunning pages in minutes.</p>*/}
      {/*                      </div>*/}
      {/*                  </div>*/}
      {/*              </div>*/}
      {/*              <div className="col-lg-6 wow fadeInLeft" data-wow-delay=".9s">*/}
      {/*                  <div className="item-box">*/}
      {/*                      <div>*/}
      {/*                          <span className="icon pe-7s-display1"></span>*/}
      {/*                      </div>*/}
      {/*                      <div className="cont">*/}
      {/*                          <h6>One / Multi Page</h6>*/}
      {/*                          <p>Choose the layout style that fits your need.</p>*/}
      {/*                      </div>*/}
      {/*                  </div>*/}
      {/*              </div>*/}
      {/*              <div className="col-lg-6 wow fadeInLeft" data-wow-delay=".5s">*/}
      {/*                  <div className="item-box">*/}
      {/*                      <div>*/}
      {/*                          <span className="icon pe-7s-diskette"></span>*/}
      {/*                      </div>*/}
      {/*                      <div className="cont">*/}
      {/*                          <h6>24/7 Support</h6>*/}
      {/*                          <p>We commit to keep your site up-to-date.</p>*/}
      {/*                      </div>*/}
      {/*                  </div>*/}
      {/*              </div>*/}
      {/*          </div>*/}
      {/*      </div>*/}
      {/*      <div className="line top right"></div>*/}
      {/*  </section>*/}
      {/*<CallToAction />*/}
      {/*<Footer />*/}
    </DarkTheme>
  );
};

export default Homepage5;
