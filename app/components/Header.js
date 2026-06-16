'use client';
import $ from 'jquery';

export default function Header() {
  const handleMenuToggle = (e) => {
    e.stopPropagation();
    $('.overlay-menu').toggleClass('show');
  };
  return (
    <header>
      <div className="logo-area">
        <a href="./" className="logo">
          <span className="size-sm mb-0 font-weight-bold pl-3 text-dark text-left">
            J<span className="base-color">R</span>
          </span>
        </a>
      </div>
      <div className="header-info-area" onClick={handleMenuToggle}>
        <a className="overlay-menu-toggler lni-menu size-md"></a>
        <div className="overlay-menu bg-blue py-3 px-4 text-center center-item">
          <div id="scrollspy" className="overlay-menu-list">
            <div className="container">
              <div className="row">
                <div className="col-lg-8 offset-lg-2 overlay-nav">
                  <ul className="list-group text-left" id="myMenu">
                    <li data-menuanchor="hero" className="list-group-item">
                      <a href="#hero">Home</a>
                    </li>
                    <li data-menuanchor="about" className="list-group-item">
                      <a href="#about">About me</a>
                    </li>
                    <li data-menuanchor="resume" className="list-group-item">
                      <a href="#resume">Resume</a>
                    </li>
                    <li data-menuanchor="services" className="list-group-item">
                      <a href="#services">Services</a>
                    </li>
                    <li data-menuanchor="portfolio" className="list-group-item">
                      <a href="#portfolio">Portfolio</a>
                    </li>
                    <li data-menuanchor="contact" className="list-group-item">
                      <a href="#contact">Contact</a>
                    </li>
                  </ul>
                  <ul className="list-group contact-info text-left mb-0">
                    <li className="list-group-item">
                      <span>Contact Info</span>
                    </li>
                    <li className="list-group-item"></li>
                    <li className="list-group-item">
                      <span>
                        <i className="lni-phone"></i> +63 970 582 6674
                      </span>
                    </li>
                    <li className="list-group-item">
                      <span>
                        <i className="lni-envelope"></i> james.ryan.pro81@gmail.com
                        {/* <a
                          href="mailto:james.ryan.pro81@gmail.com"
                          style={{ paddingLeft: 0 }}
                        > */}
                        {/* </a> */}
                      </span>
                    </li>
                    {/* <li className="list-group-item">
                      <span>Follow me:</span>
                    </li> */}
                    {/* <li className="list-group-item">
                      <ul className="list-inline socails">
                        <li className="list-inline-item">
                          <a
                            href=""
                            title="LinkedIn"
                            target="_blank"
                          >
                            <i className="lni-linkedin-original"></i>
                          </a>
                        </li>
                        <li className="list-inline-item">
                          <a
                            href="https://github.com/jryancode"
                            title="GitHub"
                            target="_blank"
                          >
                            <i className="lni-github-original"></i>
                          </a>
                        </li>
                      </ul>
                    </li> */}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
