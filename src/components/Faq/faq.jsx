import React from "react";
import handleAccordion from "../../common/handleAccordion";

const Faq = () => {

  return (
    <section className="app-faq section-padding">
      <div className="container">
        <div className="row">
          <div className="col-lg-5">
            <div className="content md-mb50">
              <h6 className="stit mb-30">
                <span className="left"></span> FAQ
              </h6>
              <h2 className="mb-30">

              </h2>
              <p>
                Spacetime is a web based interface to computers. It allows the user to build and run modular apps on different computers
                and have one place for the UI that can be accessed from anywhere! And you can doodle anywhere on the canvas
              </p>
            </div>
          </div>
          <div className="col-lg-6 offset-lg-1">
            <div className="content">
              <div className="accordion shadwo">
                <div
                  className="item mb-30"
                  onClick={(e) =>
                    handleAccordion(
                      e.currentTarget.querySelector(".accordion-info")
                    )
                  }
                >
                  <div className="title">
                    <h6>
                      Who is it for?
                      <span className="icon pe-7s-angle-right"></span>
                    </h6>
                  </div>
                  <div className="accordion-info">
                    <p>
                    For a user of Jupyter Notebooks, spacetime is a drop in replacement to it on a 2D canvas where you can have async graphs of cells. You can also deploy and monitor your applications directly from here.
                      Every cell gets a fully fledged React based UI that communicates with the python code to form a self complete App.
                    </p>
                  </div>
                </div>

                <div
                  className="item active mb-30"
                  onClick={(e) =>
                    handleAccordion(
                      e.currentTarget.querySelector(".accordion-info")
                    )
                  }
                >
                  <div className="title">
                    <h6>
                      Frameworks Solve And Without Them ?
                      <span className="icon pe-7s-angle-right"></span>
                    </h6>
                  </div>
                  <div className="accordion-info active">
                    <p>
                      But must explain you how all this mistaken idea denouncing
                      pleasure and praising pain was born and I will give you
                      complete the system and expound the actual teachings of
                      the great explorer
                    </p>
                  </div>
                </div>

                <div
                  className="item mb-30"
                  onClick={(e) =>
                    handleAccordion(
                      e.currentTarget.querySelector(".accordion-info")
                    )
                  }
                >
                  <div className="title">
                    <h6>
                      Getting Started With CSS Cascade Layers ?
                      <span className="icon pe-7s-angle-right"></span>
                    </h6>
                  </div>
                  <div className="accordion-info">
                    <p>
                      But must explain you how all this mistaken idea denouncing
                      pleasure and praising pain was born and I will give you
                      complete the system and expound the actual teachings of
                      the great explorer
                    </p>
                  </div>
                </div>

                <div
                  className="item"
                  onClick={(e) =>
                    handleAccordion(
                      e.currentTarget.querySelector(".accordion-info")
                    )
                  }
                >
                  <div className="title">
                    <h6>
                      Designing Better Links Websites Guideline ?
                      <span className="icon pe-7s-angle-right"></span>
                    </h6>
                  </div>
                  <div className="accordion-info">
                    <p>
                      But must explain you how all this mistaken idea denouncing
                      pleasure and praising pain was born and I will give you
                      complete the system and expound the actual teachings of
                      the great explorer
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Faq;
