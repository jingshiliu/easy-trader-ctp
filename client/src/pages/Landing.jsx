import React from "react";
import { Link } from "react-router-dom";

function LandingPage(){
  return (
    <div>
      <meta charSet="UTF-8" />
      <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
      <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@300&display=swap" rel="stylesheet" />
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
      <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@700&display=swap" rel="stylesheet" />
      <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0/dist/css/bootstrap.min.css" />
      <link rel="stylesheet" href="./LandingPage.css" />
      <title>Easy Trader</title>
      <header>
        <h1 className="logo">LOGO</h1>
        <nav>
          <ul className="links">
            <li><Link className="link" to="#">Link1</Link></li>
            <li><Link className="link" to="#">Link2</Link></li>
            <li><Link className="link" to="#">Link3</Link></li>
            <li><Link className="link" to="#">Link4</Link></li>
          </ul>
        </nav>
        <div className="buttons">
          <Link className="link" to="/login">
            <button className="loginButn rounded-pill">
              LOGIN
            </button>
          </Link>
          <Link className="link" to="/signup">
            <button className="signUpButn rounded-pill">
              SIGNUP
            </button>
          </Link>
        </div>
      </header>
      <section className="landing">
        <div className="landing-image">
          <h1>Easy Trader</h1>
        </div>
        <div className="landing-text">
          <h1>Investing is simple here.</h1>
          <a href> <button className="landing-button rounded-pill">Get Started</button> </a>
        </div>
      </section>
      <section className="second">
        <div className="second-image">
          <h1>Easy Trader</h1>
        </div>
        <div className="second-text">
          <h1><div className="highlight">Investing</div> Start building your portfolio with just $1</h1>
          <p>Invest in stocks, options, and ETFs at your pace and commission-free.</p>
          <a href> <button className="second-button rounded-pill">Learn More</button> </a>
        </div>
      </section>
      <section className="circles">
        <div className="container p-5">
          <div className="row text-center">
            <div className="col">
              <h2 className="circles-title">Robinhood Protection Guarantee</h2>
              <button className="rounded-pill circles-button">Learn More About Our Commitments</button>
            </div>
          </div>
          <div className="row justify-content-center text-center">
            <div className="col-sm-12 col-md-6 col-lg-3 p-5">
              <img src="../src/images/mint-cookie.png" className="img-fluid .img-thumbnail rounded-circle" />
              <p className="p-2 circle-txt">We work hard to keep your data safe and secure.</p>
            </div>    
            <div className="col-sm-12 col-md-6 col-lg-3 p-5">
              <img src="../src/images/peanut-cookie.png" className="img-fluid .img-thumbnail rounded-circle" />
              <p className="p-2 circle-txt">We protect your account from unauthorized activity.</p>
            </div>
            <div className="col-sm-12 col-md-6 col-lg-3 p-5">
              <img src="../src/images/oatmeal-cookie.png" className="img-fluid .img-thumbnail rounded-circle" />
              <p className="p-2 circle-txt">We provide multi-factor authentication on all accounts.</p>
            </div>
            <div className="col-sm-12 col-md-6 col-lg-3 p-5">
              <img src="../src/images/chip-cookie.png" className="img-fluid .img-thumbnail rounded-circle" />
              <p className="p-2 circle-txt">We’ve got your back. We’re available to you 24/7.</p>
            </div>
          </div>
        </div>
      </section>
      <section className="third">
        <div className="third-image">
          <h1>Easy Trader</h1>
        </div>
        <div className="third-text">
          <h1><div className="highlight">Crypto</div> Dive right in without the commission fees</h1>
          <p>Other crypto exchanges charge up to 4% just to buy and sell crypto. We charge 0%. Get BTC, ETH, LTC, DOGE, and more with as little as $1.</p>
          <a href> <button className="third-button rounded-pill">Learn More About Crypto</button> </a>
        </div>
      </section>
      {/* <section class="circles">
      <div class="ciecles-text-btn">
          <h1>Robinhood Protection Guarantee</h1>
          <button>Learn More About Our Commitments</button>
      </div>
      <div class="circle-large-container">
          <div class="circle-small-container">
              <div class="circle">
                  <img src="/IMG_5091.JPG" alt="">
              </div>
              <div class="circle">
                  <img src="/IMG_5091.JPG" alt="">
              </div>
              <div class="circle">
                  <img src="/IMG_5091.JPG" alt="">
              </div>
              <div class="circle">
                  <img src="/IMG_5091.JPG" alt="">
              </div>
          </div>
      </div>
  </section> */}
      <section className="tickers">
        <div className="row text-center tickers-desc">
          <div className="col">
            <p>SECURELY BUY, SELL, STORE, SEND and TRACK</p>
            <h1 className="tickers-title">Buy stocks at true costs</h1>
            <p>Choose to buy and sell with live prices.</p>
          </div>
        </div>
        <div className="ticker-container">
          <div className="ticker-container-sm">
            <div className="ticker-container-2">
              <div className="ticker">
                <p className="ticker-name">Apple</p>
                <p className="ticker-symbol">APPL</p>
                <p className="ticker-price">$147.27</p>
                <p className="ticker-price-change">+3.88%</p>
                <p className="ticker-graph">*graph*</p>
                <button className="ticker-btn rounded-pill">Trade</button>
              </div>
              <div className="ticker">
                <p className="ticker-name">Amazon.com, Inc.</p>
                <p className="ticker-symbol">AMZN</p>
                <p className="ticker-price">$119.32</p>
                <p className="ticker-price-change">+4.07%</p>
                <p className="ticker-graph">*graph*</p>
                <button className="ticker-btn rounded-pill">Trade</button>
              </div>
              <div className="ticker">
                <p className="ticker-name">Snap Inc.	</p>
                <p className="ticker-symbol">SNAP</p>
                <p className="ticker-price">$7.76</p>
                <p className="ticker-price-change-neg">-3.03%</p>
                <p className="ticker-graph">*graph*</p>
                <button className="ticker-btn rounded-pill">Trade</button>
              </div>
              <div className="ticker">
                <p className="ticker-name">Tesla, Inc.</p>
                <p className="ticker-symbol">TSLA</p>
                <p className="ticker-price">$214.44</p>
                <p className="ticker-price-change">+7.16%</p>
                <p className="ticker-graph">*graph*</p>
                <button className="ticker-btn rounded-pill">Trade</button>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="joinNow">
        <div className="signUp-container">
          <h1>Ready to get started? Open an account today!</h1>
          <button className="rounded-pill">Sign Up</button>
        </div>
      </section>
      <footer>
        <div className="footer-left">
          <div className="footer-product">
            <p>Products</p>
            <ul>
              <li><a href>Link</a></li>
              <li><a href>Link</a></li>
              <li><a href>Link</a></li>
            </ul>
          </div>
          <div className="footer-contact">
            <p>Contacts</p>
            <ul>
              <li><a href>Link</a></li>
              <li><a href>Link</a></li>
              <li><a href>Link</a></li>
            </ul>
          </div>
          <div className="footer-rules">
            <p>Rules &amp; Regulations</p>
            <ul>
              <li><a href>Link</a></li>
              <li><a href>Link</a></li>
              <li><a href>Link</a></li>
            </ul>
          </div>
          <div className="footer-right">
            <p>All investing involves risk.</p>
            <p>Brokerage services are offered through Robinhood Financial LLC, (“RHF”) a registered broker dealer (member SIPC) and clearing services through Robinhood Securities, LLC, (“RHS”) a registered broker dealer (member SIPC). Cryptocurrency services are offered through Robinhood Crypto, LLC (“RHC”) (NMLS ID: 1702840). The Robinhood Money spending account is offered through Robinhood Money, LLC (“RHY”) (NMLS ID: 1990968), a licensed money transmitter. The Robinhood Cash Card is a prepaid card issued by Sutton Bank, Member FDIC, pursuant to a license from Mastercard® International Incorporated. RHF, RHY, RHC and RHS are affiliated entities and wholly owned subsidiaries of Robinhood Markets, Inc. RHF, RHY, RHC and RHS are not banks. Securities products offered by RHF are not FDIC insured and involve risk, including possible loss of principal. Cryptocurrencies held in RHC accounts are not covered by FDIC or SIPC protections and are not regulated by FINRA. RHY products are not subject to SIPC coverage but funds held in the Robinhood Money spending account and Robinhood Cash Card account may be eligible for FDIC pass-through insurance (see the Robinhood Cash Card Agreement and the Robinhood Spending Account Agreement).</p>
            <p>Commission-free trading of stocks, ETFs and options refers to $0 commissions for Robinhood Financial self-directed individual cash or margin brokerage accounts that trade U.S. listed securities and certain OTC securities electronically. Keep in mind, other fees such as trading (non-commission) fees, Gold subscription fees, wire transfer fees, and paper statement fees may apply to your brokerage account. Please see Robinhood Financial’s Fee Schedule to learn more.</p>
            <p>© 2022 Robinhood. All rights reserved.</p>
          </div>
        </div></footer>
    </div>
  );
}
export default LandingPage;