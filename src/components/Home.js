import React from "react";
import "../styles/Home.css";
import trendiLogo from "../images/trendi.png";
import trendiOut from "../images/trendioutside.png";
import mani from "../images/mani.png";
import pedi from "../images/pedi.png";
import wax from "../images/wax.png";
import etc from "../images/etc.png";
import essie2 from "../images/opi2.png";
import dnd from "../images/dnd.png";
import opi from "../images/opi.png";
import g1 from "../images/g1.jpg";
import g2 from "../images/g2.jpg";
import g3 from "../images/g3.jpg";
import g4 from "../images/g4.jpg";
import g5 from "../images/g5.jpg";
import polish from "../images/polish.png";
import End from "./End";

// Client ID: 588942216255-4nnlem9bsaorpmg28o873uupbl5mr2hq.apps.googleusercontent.com
// Client Secret: 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
// API key: AIzaSyCNxEdxzx4-sbxM0vu8-0vFSlne-3-WEKY

function Home() {

  return (
    <>
      <div className="full-background">
        <div className="content">
          <div className="logo-container">
            <img src={trendiLogo} className="logo" alt="Trendi Logo" />
          </div>
          <div className="header">
            <div className="header-line1">Polish Your Presence</div>
            <div className="header-line2">One Nail at a Time</div>
            <hr className="header-divider" />
            <button className="header-button">BOOK NOW</button>
          </div>
        </div>
      </div>
      <div className="two-container">
        <div className="left-container">
          <img
            src={trendiOut}
            className="outside-image"
            alt="Outside view of salon"
          />
        </div>
        <div className="right-container">
          <h2
            style={{
              lineHeight: "1.2em",
              fontWeight: 400,
              letterSpacing: "0",
              fontFamily: "Lustria, serif",
              color: "#dea43e",
            }}
          >
            Trendi Nails & Facial - Your Destination for Elite Nail and Beauty
            Care
          </h2>
          <p></p>
          <p></p>

          <p>
            At our salons, we provide top-tier beauty services designed to
            enhance your natural charm.
          </p>
          <p>
            Our expert technicians are committed to ongoing training,
            guaranteeing unparalleled service at every appointment. We select
            only premium products to craft the style you envision.
          </p>
          <p>
            Embrace the cutting edge of nail design with our extensive selection
            of over 5000 polish and powder hues, and experience pedicures that
            blend relaxation with beauty benefits. Leave our salon feeling
            rejuvenated and looking your absolute best.
          </p>
        </div>
      </div>
      <div class="three-container">
        <div class="title3">Our Services</div>
        <div className="home-services-container">
          <div class="manicure" id="manicure">
            <div class="manicure-icon">
              <img src={mani} alt="mani" className="mani-icon" />
            </div>
            <div class="manicure-title">MANICURE</div>
            <div class="manicure-description">
              Begin with a trimming, filing, and shaping of your nails, followed
              by cuticle care to neaten the nail beds. A relaxing hand massage
              precedes the final flourish: a nail polish application in your
              preferred hue.
            </div>
          </div>
          <div class="pedicure" id="pedicure">
            <div class="pedicure-icon">
              <img src={pedi} alt="pedi" className="pedi-icon" />
            </div>
            <div class="pedicure-title">PEDICURE</div>
            <div class="pedicure-description">
              Experience a full-service pedicure starting with nail shaping and
              meticulous cuticle attention, complemented by a hydrating massage
              for feet and calves. Rough skin is smoothed away with a
              one-time-use foot file, all concluded with a polish in the shade
              you desire and a quick-set top coat for longevity.
            </div>
          </div>
          <div class="wax" id="wax">
            <div class="wax-icon">
              <img src={wax} alt="wax" className="wax2-icon" />
            </div>
            <div class="wax-title">WAX</div>
            <div class="wax-description">
              The waxing treatment involves applying a specially formulated
              sticky substance to the skin that grips unwanted hair. This method
              ensures hair is pulled from the root when the wax is removed,
              resulting in a smoother finish.
            </div>
          </div>
          <div class="etc" id="etc">
            <div class="etc-icon">
              <img src={etc} alt="etc" className="etc2-icon" />
            </div>
            <div class="etc-title">ETC</div>
            <div class="etc-description">
              Nails are a reflection of personal style, much like skin and hair.
              Embrace the exploration of various nail enhancements to discover
              the perfect match that complements your unique lifestyle and
              preferences.
            </div>
          </div>
        </div>
      </div>
      <div className="four-container">
        <div className="polish-brands">
          <div className="dnd-container">
            <img className="dnd-logo" src={dnd} alt="dnd" />
          </div>
          <div className="opi-container">
            <img className="opi-logo" src={opi} alt="opi" />
          </div>
          <div className="essie-container">
            <img className="essie-logo" src={essie2} alt="essie" />
          </div>
        </div>
      </div>
      <div className="five-container">
        <div className="home-gallery-container">
          <div className="g1-container"><img src={g1} alt="g1" className="g1"/></div>
          <div className="g2-container"><img src={g2} alt="g2" className="g2"/></div>
          <div className="g3-container"><img src={g3} alt="g3" className="g3"/></div>
          <div className="g4-container"><img src={g4} alt="g4" className="g4"/></div>
          <div className="g5-container"><img src={g5} alt="g5" className="g5"/></div>
        </div>
      </div>
      <div className="six-container">
        <div className="six-left-container"><img src={polish} alt="polish" className="polish"/></div>
        <div className="six-right-container">
          <div className="six-header">PROMOTIONS</div>
          <div className="six-divider"><hr className="header-six-divider" /></div>
          <div className="six-promo1"><strong>Get 10% Off</strong> &nbsp;<em>(On All Services)</em></div>
          <div className="promo1-date"> Senior (65+), Teachers, Students, Military (Mon-Thur)</div>
          <div className="six-promo2"><strong>Get 10% Off</strong> &nbsp;<em>(On All Services)</em></div>
          <div className="promo2-desc">On your birthday</div>
          <div className="promo2-desc2">Only Applicable for the week of your Birthday & ID is required</div>
        </div>
      </div>
      <End/>
    </>
  );
}

export default Home;


// Client ID - 588942216255-7t6fu5i90jnl3i6bilpfo6njrrp7ij9f.apps.googleusercontent.com

// Client Secret - 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