'use client';
import { useEffect } from 'react';
import Image from 'next/image';
import $ from 'jquery';
import('jquery-countto');
import aboutImg from '../assets/img/about.jpg';

export default function About() {
  const countup = () => {
    if (!$('.timer').countTo) {
      return;
    }
    $('.timer').countTo();
    $('.count-number').removeClass('timer');
  };
  useEffect(() => {
    setTimeout(() => {
      countup();
    }, 1200);
  }, []);
  return (
    <section
      id="about"
      className="section pp-scrollable about text-dark bg-dark"
      data-navigation-color="#fff"
      data-navigation-tooltip="ABOUT ME"
    >
      <div className="display-table">
        <div className="display-content">
          <div className="container">
            <div className="row">
              <div className="title-small">
                <p className="text-dark">About me</p>
              </div>
            </div>
            <div className="row mt-4">
              <div className="col-lg-6">
                <Image
                  src={aboutImg}
                  alt="/"
                  className="rounded img-thumbnail w-100"
                />
              </div>
              <div className="col-lg-6 personal-item mb-4 mb-lg-0">
                <h2 className="text-dark mb-2">
                  About <span className="base-color">Me</span>
                </h2>
                <h5 className="text-dark mb-3">Hello, I'm James Ryan - AI Engineer</h5>
                <div className="row">
                  <div className="col-lg-10 col-sm-12 personal-info">
                    <p className="text-dark">
                      {`Degree: `}
                      <span className="text-gray">
                        {' '}
                        Bachelor of Science (BS)
                      </span>
                    </p>
                    <p className="text-dark">
                      {`Email: `}
                      <span className="text-gray">
                        <a href="mailto:james.ryan.pro81@gmail.com">
                          james.ryan.pro81@gmail.com
                        </a>
                      </span>
                    </p>
                    <p className="text-dark">
                      {`Phone: `}
                      <span className="text-gray">
                        <a href="tel:+639757162763">+63 970 582 6674</a>
                      </span>
                    </p>
                  </div>
                </div>
                <div className="row">
                  <div className="col-12">
                    <a
                      href="https://drive.google.com/file/d/1WDRWiRE--y8ji0B0YxR6A7UXujgr8uvY/view?usp=drive_link"
                      className="pill-button mt-3 mb-lg-0 mr-4"
                      target="_blank"
                    >
                      Download Resume
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div id="count-up" className="text-center">
              <div className="container">
                <div className="row mt-4">
                  <div className="col-6 col-md-3 mt-5 mb-md-0 count-item">
                    <div className="count-icon">
                      <i className="lni-alarm-clock size-md"></i>
                    </div>
                    <div className="count-content">
                      <span
                        className="timer count-number"
                        data-from="0"
                        data-to="6"
                        data-speed="5000"
                      >
                        6
                      </span>
                    </div>
                    <p className="mb-0">Years Experience</p>
                  </div>
                  <div className="col-6 col-md-3 mt-5 mb-md-0 count-item">
                    <div className="count-icon">
                      <i className="lni-cup size-md"></i>
                    </div>
                    <div className="count-content">
                      <span
                        className="timer count-number"
                        data-from="0"
                        data-to="4"
                        data-speed="5000"
                      >
                        4
                      </span>
                    </div>
                    <p className="mb-0">Companies</p>
                  </div>
                  <div className="col-6 col-md-3 mt-5 mb-md-0 count-item">
                    <div className="count-icon">
                      <i className="lni-medall size-md"></i>
                    </div>
                    <div className="count-content">
                      <span
                        className="timer count-number"
                        data-from="0"
                        data-to="5"
                        data-speed="5000"
                      >
                        5
                      </span>
                    </div>
                    <p className="mb-0">Certifications</p>
                  </div>
                  <div className="col-6 col-md-3 mt-5 mb-md-0 count-item">
                    <div className="count-icon">
                      <i className="lni-emoji-smile size-md"></i>
                    </div>
                    <div className="count-content">
                      <span
                        className="timer count-number"
                        data-from="0"
                        data-to="3"
                        data-speed="5000"
                      >
                        3
                      </span>
                    </div>
                    <p className="mb-0">Industries</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
