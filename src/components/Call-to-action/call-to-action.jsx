import React, {useState} from 'react'
import Split from '../Split'
import Link from 'next/link'
import Script from 'next/script'
import {handleMobileDropdown} from "../../common/navbar";
const CallToAction = ({img}) => {
  const [formVisible, setFormVisible] = useState(false);
  const showForm = () => {
    document.showPopup()
    // setFormVisible(true);
    // setTimeout(()=> {
    // }, 500)
  }
    return (
      <section
        className="call-action section-padding sub-bg bg-img"
        style={{ backgroundImage: `url(${img ? img : "/img/patrn.svg"})` }}
      >
        <Script src="/js/mailchimp.js" />
        <div className="container">
          <div className="row">
            <div className="col-md-8 col-lg-9">
              <div className="content sm-mb30">
                <Split>
                  <h6 className="wow words chars splitting" data-splitting>
                    Interested
                  </h6>
                  <h2 className="wow words chars splitting" data-splitting>
                    Join our <br /> <b className="back-color">Mailing List</b>
                    .
                  </h2>
                </Split>
              </div>
            </div>

            <div className="col-md-4 col-lg-3 valign">
              <a
                  className="butn bord curve wow fadeInUp"
                  data-wow-delay=".08s"
                  onClick={showForm}
                  style={{zIndex: 2}}
              >
                <span>Get In Touch</span>
              </a>
              {/*<button*/}
              {/*    type="button"*/}
              {/*    onClick={showForm}*/}
              {/*>*/}
              {/*  <span>Get In Touch</span>*/}
              {/*</button>*/}
              {/*<Link*/}
              {/*  href={`/contact/contact-dark`}*/}
              {/*>*/}
              {/*  <a*/}
              {/*    className="butn bord curve wow fadeInUp"*/}
              {/*    data-wow-delay=".5s"*/}
              {/*  >*/}
              {/*    <span>Get In Touch</span>*/}
              {/*  </a>*/}
              {/*</Link>*/}
            </div>
          </div>
        </div>
      </section>
    );
}

export default CallToAction