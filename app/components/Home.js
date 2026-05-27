'use client';
import { useEffect } from 'react';
import Image from 'next/image';
import $ from 'jquery';
import Typed from 'typed.js';
import('owl.carousel');
import 'owl.carousel/dist/assets/owl.carousel.css';
import heroImg from '../assets/img/hero.jpg';
import slide1 from '../assets/img/slider-1.jpg';
import slide2 from '../assets/img/slider-2.jpg';
import slide3 from '../assets/img/slider-3.jpg';
import slide4 from '../assets/img/slider-4.jpg';
import slide5 from '../assets/img/slider-5.jpg';
import slide6 from '../assets/img/slider-6.jpg';
import slide7 from '../assets/img/slider-7.jpg';

const slides = [slide1, slide2, slide3, slide4, slide5, slide6, slide7];

export default function Home() {
  const sliderOwlCarousel = () => {
    if (!$('.hero .owl-carousel').owlCarousel) {
      return;
    }
    $('.hero .owl-carousel').owlCarousel({
      loop: true,
      items: 1,
      nav: false,
      dots: false,
      autoplay: true,
      touchDrag: true,
      smartSpeed: 5000,
      animateOut: 'fadeOut',
      autoplayHoverPause: true,
    });
    $('#hero-slider').on('translate.owl.carousel', function () {
      setTimeout(function () {
        $('.hero-slide').removeClass('zoom');
      }, 1000);
    });
    $('#hero-slider').on('translated.owl.carousel', function () {
      $('.owl-item.active .hero-slide').addClass('zoom');
    });
  };

  const typedJS = () => {
    const $element = $('.element');
    const cursors = $('.typed-cursor');
    if ($element.length && cursors.length === 0) {
      const options = {
        strings: $element.attr('data-elements').split(','),
        typeSpeed: 100,
        backDelay: 3000,
        backSpeed: 50,
        loop: true,
      };
      new Typed('.element', options);
    }
  };

  useEffect(() => {
    setTimeout(() => {
      sliderOwlCarousel();
    }, 1200);
    typedJS();
  }, []);
  return (
    <section
      className="section pp-scrollable hero hero-02 full-screen p-0 bg-dark"
      id="hero"
      data-navigation-color="#fff"
      data-navigation-tooltip="HOME"
    >
      <div className="container-fluid">
        <div className="title-small">
          <p className="text-dark">Home</p>
        </div>
        <div className="row justify-content-center" id="hero-slider">
          <div className="owl-carousel owl-theme">
            {slides.map((slide, index) => (
              <Image
                src={slide}
                key={index}
                alt={`slide-${index}`}
                className="hero-slide full-screen"
                loading="lazy"
              />
            ))}
          </div>
        </div>
        <div className="text-center hero-content">
          <div className="col-lg-12">
            <div className="hero-content text-center">
              <Image
                src={heroImg}
                alt="Photo"
                className="rounded-circle img-thumbnail"
              />
              <h3 className="text-dark mb-0 mt-3">I'm James Ryan</h3>
              <h1 className="text-dark text-capitalize mb-3">
                {/* <span className="base-color" style={{ marginRight: 10 }}>
                  A{' '}
                </span> */}
                <span
                  className="element"
                  data-elements="Senior Software Engineer, Enterprise Systems & Scalable APIs"
                ></span>
              </h1>
              <div>
                <ul className="list-inline social-icon mt-2">
                  {/* <li className="list-inline-item">
                    <a
                      href="https://www.linkedin.com/in/chriswu20/"
                      title="LinkedIn"
                      target="_blank"
                    >
                      <i className="lni-linkedin-original text-dark"></i>
                    </a>
                  </li> */}
                  <li className="list-inline-item">
                    <a
                      href="https://github.com/jryancode"
                      title="Github"
                      target="_blank"
                    >
                      <i className="lni-github-original text-dark"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="hero-icon">
          <a href="#about">
            <i className="lni-arrow-down text-dark size-sm"></i>
          </a>
        </div>
      </div>
    </section>
  );
}
