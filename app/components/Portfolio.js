import Image from 'next/image';

import pubpeerTile from '../assets/img/portfolio/pubpeer-tile.jpg'
import vetsterTile from '../assets/img/portfolio/vetster-tile.jpg'
import eduTile from '../assets/img/portfolio/edu-tile.jpg'
import timelineExtensionTile from '../assets/img/portfolio/timeline-extension-tile.jpg'
import languagetoolTile from '../assets/img/portfolio/languagetool-tile.jpg'
import expressvpnTile from '../assets/img/portfolio/expressvpn-tile.png'
import alicouponTile from '../assets/img/portfolio/alicoupon-tile.jpg'
import availTile from '../assets/img/portfolio/avail-tile.jpg'
import boonTile from '../assets/img/portfolio/boon-tile.jpg'
import e360Tile from '../assets/img/portfolio/e360-tile.jpg'
import fortunaTile from '../assets/img/portfolio/fortuna-tile.jpg'
import hawksearchTile from '../assets/img/portfolio/hawksearch-tile.jpg'
import upfulTile from '../assets/img/portfolio/upful-tile.jpg'
import elliotTile from '../assets/img/portfolio/elliot-tile.jpg'
import woorankTile from '../assets/img/portfolio/woorank-tile.jpg'

const portfolios = [
  {
    title: 'PubPeer',
    tileImg: pubpeerTile,
    img: 'pubpeer.png',
    target: '#portfolio-pubpeer',
    filter: 'frontend backend extensions',
    link: 'https://pubpeer.com/',
  },
  {
    title: 'Vetster',
    tileImg: vetsterTile,
    img: 'vetster.png',
    target: '#portfolio-vetster',
    filter: 'frontend backend devops',
    link: 'https://vetster.com/',
  },
  {
    title: 'Edulastic',
    tileImg: eduTile,
    img: 'edu.jpg',
    target: '#portfolio-edulastic',
    filter: 'frontend',
    link: 'https://edulastic.com/',
  },
  {
    title: 'Timeline',
    tileImg: timelineExtensionTile,
    img: 'timeline-extension.gif',
    target: '#portfolio-timeline-extension',
    filter: 'frontend extensions',
    link: 'https://timeline.io/',
  },
  {
    title: 'LanguageTool',
    tileImg: languagetoolTile,
    img: 'languagetool.png',
    target: '#portfolio-languagetool',
    filter: 'frontend backend extensions devops',
    link: 'https://languagetool.org/',
  },
  {
    title: 'ExpressVPN',
    tileImg: expressvpnTile,
    img: 'expressvpn.png',
    target: '#portfolio-expressvpn',
    filter: 'frontend backend extensions devops',
    link: 'https://www.expressvpn.com/',
  },
  {
    title: 'AliCoupon Finder',
    tileImg: alicouponTile,
    img: 'alicoupon.jpg',
    target: '#portfolio-alicoupon',
    filter: 'extensions',
    link: 'https://chrome.google.com/webstore/detail/aliexpress-coupon-finder/adanomdlalebngcphfbknoglbcdcbchb',
  },
  {
    title: 'Avail',
    tileImg: availTile,
    img: 'avail.png',
    target: '#portfolio-avail',
    filter: 'frontend backend',
    link: 'https://availcarsharing.com/',
  },
  {
    title: 'Boon',
    tileImg: boonTile,
    img: 'boon.png',
    target: '#portfolio-boon',
    filter: 'frontend backend devops',
    link: 'https://goboon.co/',
  },
  {
    title: 'eCommerce 360',
    tileImg: e360Tile,
    img: 'e360.png',
    target: '#portfolio-e360',
    filter: 'frontend backend devops',
    link: 'https://e360.bridgeline.com/',
  },
  {
    title: 'Fortuna',
    tileImg: fortunaTile,
    img: 'fortuna.png',
    target: '#portfolio-fortuna',
    filter: 'frontend backend extensions devops',
    link: 'https://www.fortuna.ai/',
  },
  {
    title: 'HawkSearch',
    tileImg: hawksearchTile,
    img: 'hawksearch.png',
    target: '#portfolio-hawksearch',
    filter: 'frontend backend devops',
    link: 'https://hawksearch.com/',
  },
  {
    title: 'Upful',
    tileImg: upfulTile,
    img: 'upful.png',
    target: '#portfolio-upful',
    filter: 'frontend extensions',
    link: 'https://www.upful.ai/',
  },
  {
    title: 'Elliot',
    tileImg: elliotTile,
    img: 'elliot.png',
    target: '#portfolio-elliot',
    filter: 'frontend backend',
  },
  {
    title: 'WooRank',
    tileImg: woorankTile,
    img: 'woorank.png',
    target: '#portfolio-woorank',
    filter: 'frontend backend devops',
    link: 'https://woorank.com/',
  },
];

export default function Portfolio() {
  return (
    <section
      id="portfolio"
      className="section pp-scrollable portfolio bg-dark"
      data-navigation-color="#fff"
      data-navigation-tooltip="PORTFOLIO"
    >
      <div className="display-table">
        <div className="display-content">
          <div className="container">
            <div className="row">
              <div className="title-small">
                <p className="text-dark">Portfolio</p>
              </div>
              <div className="col-lg-12">
                <div className="text-left">
                  <h2 className="text-dark">
                    Creative <span className="base-color">Works</span>
                  </h2>
                  <p className="text-muted mx-auto section-subtitle mt-3">
                    Meet My Awesome Works and Enjoy
                  </p>
                </div>
              </div>
            </div>
            <div className="row mt-4">
              <ul
                id="portfolio-filter"
                className="list-unstyled list-inline mb-0 col-lg-12 text-left portfolio-filter"
              >
                <li className="list-inline-item">
                  <a href="#" data-filter="*" className="active my-1">
                    All
                  </a>
                </li>
                <li className="list-inline-item">
                  <a href="#" data-filter=".frontend" className="my-1">
                    Frontend
                  </a>
                </li>
                <li className="list-inline-item">
                  <a href="#" data-filter=".backend" className="my-1">
                    Backend
                  </a>
                </li>
                <li className="list-inline-item">
                  <a href="#" data-filter=".devops" className="my-1">
                    DevOps
                  </a>
                </li>
                <li className="list-inline-item">
                  <a href="#" data-filter=".extensions" className="my-1">
                    Extensions
                  </a>
                </li>
              </ul>
            </div>
            <div className="portfolio-items mt-4 row">
              {portfolios.map((portfolio) => (
                <div
                  className={`col-lg-4 portfolio-item my-3 ${portfolio.filter}`}
                  key={portfolio.target}
                >
                  <div className="portfolio-item-content rounded">
                    <Image
                      src={portfolio.tileImg}
                      alt={portfolio.title}
                      loading="lazy"
                    />
                    <div className="img-overlay text-center">
                      <div className="img-overlay-content">
                        <div className="portfolio-icon">
                          {portfolio.link ? (
                            <a
                              href={portfolio.link}
                              target="_blank"
                            >
                              <i className="lni-link"></i>
                            </a>
                          ) : (
                            <button
                              type="button"
                              data-toggle="modal"
                              data-target={portfolio.target}
                            >
                              <i className="lni-link"></i>
                            </button>
                          )}

                          <a
                            href={`assets/img/portfolio/${portfolio.img}`}
                            className="js-zoom-gallery"
                          >
                            <i className="lni-search"></i>
                          </a>
                        </div>
                        <h5 className="text-white mt-3 mb-0">
                          {portfolio.title}
                        </h5>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
