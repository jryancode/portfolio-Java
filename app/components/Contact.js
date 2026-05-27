'use client';
import { useEffect } from 'react';
import $ from 'jquery';

export default function Contact() {
  const mapInit = () => {
    const myMap = $('#my-map');

    if (myMap.length) {
      const lat = myMap.data('location-lat');
      const lng = myMap.data('location-lng');
      const options = {
        center: new google.maps.LatLng(lat, lng),
        zoom: 7,
        mapTypeControl: true,
        gestureHandling: 'cooperative',
        panControl: false,
        zoomControl: true,
        zoomControlOptions: {
          style: google.maps.ZoomControlStyle.DEFAULT,
          position: google.maps.ControlPosition.TOP_LEFT,
        },
        scaleControl: false,
        styles: [
          {
            featureType: 'water',
            elementType: 'geometry',
            stylers: [
              {
                color: '#576ee9',
              },
              {
                lightness: 17,
              },
            ],
          },
          {
            featureType: 'landscape',
            elementType: 'geometry',
            stylers: [
              {
                color: '#f5f5f5',
              },
              {
                lightness: 20,
              },
            ],
          },
          {
            featureType: 'road.highway',
            elementType: 'geometry.fill',
            stylers: [
              {
                color: '#ffffff',
              },
              {
                lightness: 17,
              },
            ],
          },
          {
            featureType: 'road.highway',
            elementType: 'geometry.stroke',
            stylers: [
              {
                color: '#ffffff',
              },
              {
                lightness: 29,
              },
              {
                weight: 0.2,
              },
            ],
          },
          {
            featureType: 'road.arterial',
            elementType: 'geometry',
            stylers: [
              {
                color: '#ffffff',
              },
              {
                lightness: 18,
              },
            ],
          },
          {
            featureType: 'road.local',
            elementType: 'geometry',
            stylers: [
              {
                color: '#ffffff',
              },
              {
                lightness: 18,
              },
            ],
          },
          {
            featureType: 'poi',
            elementType: 'geometry',
            stylers: [
              {
                color: '#f5f5f5',
              },
              {
                lightness: 21,
              },
            ],
          },
          {
            featureType: 'poi.park',
            elementType: 'geometry',
            stylers: [
              {
                color: '#d5d5d5',
              },
              {
                lightness: 21,
              },
            ],
          },
          {
            elementType: 'labels.text.stroke',
            stylers: [
              {
                visibility: 'on',
              },
              {
                color: '#f8f8f8',
              },
              {
                lightness: 25,
              },
            ],
          },
          {
            elementType: 'labels.text.fill',
            stylers: [
              {
                saturation: 36,
              },
              {
                color: '#222222',
              },
              {
                lightness: 30,
              },
            ],
          },
          {
            elementType: 'labels.icon',
            stylers: [
              {
                visibility: 'off',
              },
            ],
          },
          {
            featureType: 'transit',
            elementType: 'geometry',
            stylers: [
              {
                color: '#f5f5f5',
              },
              {
                lightness: 19,
              },
            ],
          },
          {
            featureType: 'administrative',
            elementType: 'geometry.fill',
            stylers: [
              {
                color: '#fefefe',
              },
              {
                lightness: 10,
              },
            ],
          },
          {
            featureType: 'administrative',
            elementType: 'geometry.stroke',
            stylers: [
              {
                color: '#fefefe',
              },
              {
                lightness: 17,
              },
              {
                weight: 1.2,
              },
            ],
          },
        ],
      };
      const map = new google.maps.Map(
        document.getElementById('my-map'),
        options
      );
      const marker1 = new google.maps.Marker({
        position: map.getCenter(),
        title: $('title').text(),
        icon: myMap.data('location-icon'),
        animation: google.maps.Animation.BOUNCE,
      });
      marker1.setMap(map);
    }
  };
  useEffect(() => {
    mapInit();
  }, []);
  return (
    <section
      id="contact"
      className="section pp-scrollable contact bg-dark"
      data-navigation-color="#fff"
      data-navigation-tooltip="CONTACT"
    >
      <div className="display-table">
        <div className="display-content">
          <div className="container">
            <div className="row">
              <div className="title-small">
                <p className="text-dark">Get in Touch</p>
              </div>
              <div className="col-lg-12">
                <div className="text-left">
                  <h2 className="text-dark mb-3">
                    Get <span className="base-color">In Touch</span>
                  </h2>
                  <p className="text-muted">
                    Feel Free To Contact Me Any Time!
                  </p>
                </div>
              </div>
            </div>
            <div className="row mt-5">
              <div className="col-lg-12">
                <div
                  id="my-map"
                  data-location-lat="6.93698"
                  data-location-lng="122.10015"
                  data-location-icon="assets/img/location-map.png"
                ></div>
              </div>
            </div>
            <div className="row mt-5">
              <div className="col-lg-6 text-left">
                <div className="contact-form">
                  <h6 className="font-weight-semibold">
                    Let’s Get Work With Me{' '}
                  </h6>
                  <p className="text-muted mt-3">
                    I always provide technical, creative and business insights
                    to all projects I work on. With my experience and
                    enthusiasm, I am sure I would be a great addition to your
                    team and be a key player in making your project successful!
                  </p>
                  <div className="mt-3 personal-info">
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
                          title="GitHub"
                          target="_blank"
                        >
                          <i className="lni-github-original text-dark"></i>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-lg-6 text-left">
                <p className="mt-2 font-weight-bold">
                  {' '}
                  Phone:{' '}
                  <span className="text-gray">
                    <a href="tel:+639757162763">+63 970 582 6674</a>
                  </span>
                </p>
                <p className="mt-2 font-weight-bold">
                  {' '}
                  Email:{' '}
                  <span className="text-gray">
                    <a href="mailto:james.ryan.pro81@gmail.com">
                      james.ryan.pro81@gmail.com
                    </a>
                  </span>
                </p>
                {/* <p className="mt-2 font-weight-bold">
                  {' '}
                  Skype:{' '}
                  <span className="text-gray">
                    <a href="skype:live:.cid.a268fac1b7dc443d?chat">
                      live:.cid.a268fac1b7dc443d
                    </a>
                  </span>
                </p> */}
                <a
                  href="mailto:james.ryan.pro81@gmail.com"
                  className="pill-button mt-2 mb-lg-0"
                >
                  Send Email
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
