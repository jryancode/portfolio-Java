const portfolios = [
  {
    id: 'pubpeer',
    title: 'PubPeer',
    description:
      'PubPeer allows users to discuss and review scientific research. The site is one of many allowing academics to engage in post-publication peer review.',
    skills: 'JavaScript / Vue / PHP / Laravel / ElasticSearch / MySQL',
    image: 'pubpeer.png',
  },
  {
    id: 'edulastic',
    title: 'Edulastic',
    description:
      'Online assessment tools with technology-enhanced items like SBAC, AIR and PARCC give you a complete, instant view of student learning and growth.',
    skills: 'JavaScript / React / Node.js / AntDesign / ReChart',
    image: 'edu.jpg',
  },
  {
    id: 'elliot',
    title: 'Elliot',
    description:
      'Elliot is the only eCommerce where merchants from all 200+ countries can instantly sell, ship, and get paid out. No coding or credit card required!',
    skills:
      'JavaScript / TypeScript / React / UIKit / GraphQL / Python / Django',
    image: 'elliot.png',
  },
  {
    id: 'timeline-extension',
    title: 'Timeline',
    description:
      'Visual collaboration tools for devs, designers, and clients. It allows you to easily provide, collect, and review feedback on web development, web design, and etc.',
    skills: 'JavaScript / React / RESTful API / Rails / Web Extension API',
    image: 'timeline-extension.jpg',
  },
  {
    id: 'languagetool',
    title: 'LanguageTool',
    description:
      'LanguageTool is a free proofreading tool for English, German, Spanish, Russian, and more than 20 other languages.',
    skills: 'JavaScript / TypeScript / React / Gulp / Node / Laravel',
    image: 'languagetool.png',
  },
  {
    id: 'alicoupon',
    title: 'AliCoupon Finder',
    description: 'AliCoupon Finder finds discounts on AliExpress in autopilot.',
    skills: 'JavaScript / jQuery / XPath / API integration',
    image: 'alicoupon.jpg',
  },
  {
    id: 'expressvpn',
    title: 'ExpressVPN',
    description:
      'ExpressVPN is a virtual private network service offered by the British Virgin Islands-registered company Express VPN International Ltd. The software is marketed as a privacy and security tool that encrypts users’ web traffic and masks their IP addresses.',
    skills: 'JavaScript / Vue / Node.js / Java / Maven / Cucumber / Selenium',
    image: 'expressvpn.png',
  },
  {
    id: 'avail',
    title: 'Avail',
    description:
      'ExpressVPN is a virtual private network service offered by the British Virgin Islands-registered company Express VPN International Ltd. The software is marketed as a privacy and security tool that encrypts users’ web traffic and masks their IP addresses.',
    skills: 'JavaScript / Vue / Node.js / Java / Maven / Cucumber / Selenium',
    image: 'avail.png',
  },
  {
    id: 'boon',
    title: 'Boon',
    description:
      'ExpressVPN is a virtual private network service offered by the British Virgin Islands-registered company Express VPN International Ltd. The software is marketed as a privacy and security tool that encrypts users’ web traffic and masks their IP addresses.',
    skills: 'JavaScript / Vue / Node.js / Java / Maven / Cucumber / Selenium',
    image: 'boon.png',
  },
  {
    id: 'e360',
    title: 'eCommerce 360',
    description:
      'ExpressVPN is a virtual private network service offered by the British Virgin Islands-registered company Express VPN International Ltd. The software is marketed as a privacy and security tool that encrypts users’ web traffic and masks their IP addresses.',
    skills: 'JavaScript / Vue / Node.js / Java / Maven / Cucumber / Selenium',
    image: 'e360.png',
  },
  {
    id: 'fortuna',
    title: 'Fortuna',
    description:
      'ExpressVPN is a virtual private network service offered by the British Virgin Islands-registered company Express VPN International Ltd. The software is marketed as a privacy and security tool that encrypts users’ web traffic and masks their IP addresses.',
    skills: 'JavaScript / Vue / Node.js / Java / Maven / Cucumber / Selenium',
    image: 'fortuna.png',
  },
  {
    id: 'hawksearch',
    title: 'HawkSearch',
    description:
      'ExpressVPN is a virtual private network service offered by the British Virgin Islands-registered company Express VPN International Ltd. The software is marketed as a privacy and security tool that encrypts users’ web traffic and masks their IP addresses.',
    skills: 'JavaScript / Vue / Node.js / Java / Maven / Cucumber / Selenium',
    image: 'hawksearch.png',
  },
  {
    id: 'upful',
    title: 'Upful',
    description:
      'ExpressVPN is a virtual private network service offered by the British Virgin Islands-registered company Express VPN International Ltd. The software is marketed as a privacy and security tool that encrypts users’ web traffic and masks their IP addresses.',
    skills: 'JavaScript / Vue / Node.js / Java / Maven / Cucumber / Selenium',
    image: 'upful.png',
  },
  {
    id: 'vetster',
    title: 'Vetster',
    description:
      'ExpressVPN is a virtual private network service offered by the British Virgin Islands-registered company Express VPN International Ltd. The software is marketed as a privacy and security tool that encrypts users’ web traffic and masks their IP addresses.',
    skills: 'JavaScript / Vue / Node.js / Java / Maven / Cucumber / Selenium',
    image: 'vetster.png',
  },
  {
    id: 'woorank',
    title: 'WooRank',
    description:
      'ExpressVPN is a virtual private network service offered by the British Virgin Islands-registered company Express VPN International Ltd. The software is marketed as a privacy and security tool that encrypts users’ web traffic and masks their IP addresses.',
    skills: 'JavaScript / Vue / Node.js / Java / Maven / Cucumber / Selenium',
    image: 'woorank.png',
  },
];

export default function PortfolioModals() {
  return (
    <>
      {portfolios.map((portfolio) => (
        <div
          className="portfolio-single modal fade"
          id={`portfolio-${portfolio.id}`}
          key={portfolio.id}
          tabIndex="-1"
          role="dialog"
          aria-labelledby="portfolioModalScrollable"
          aria-hidden="true"
        >
          <div className="modal-dialog modal-dialog-scrollable" role="document">
            <div className="modal-content bg-white">
              <div className="modal-header">
                <h5 className="modal-title" id="portfolioModalScrollable">
                  Portfolio
                </h5>
                <button
                  type="button"
                  className="close text-muted"
                  data-dismiss="modal"
                  aria-label="Close"
                >
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div className="modal-body">
                <div className="pt-4 pb-5">
                  <div className="container">
                    <div className="row">
                      <div className="col-12 col-md-10 offset-md-1">
                        <div className="text-center">
                          <h2 className="text-dark mb-3">
                            <span className="base-color">
                              {portfolio.title}
                            </span>
                          </h2>
                          <p className="text-muted max-width-450">
                            {portfolio.description}
                          </p>
                        </div>
                        <div className="row contact-info mt-5">
                          <div className="col-12 col-md-10 offset-md-1">
                            <div className="text-center">
                              <div>
                                <h6>Skills:</h6>
                                <p className="text-muted mb-0">
                                  {portfolio.skills}
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="mt-5">
                          <div className="portfolio-single-item">
                            <img
                              src={`assets/img/portfolio/${portfolio.image}`}
                              className="d-block w-100 rounded"
                              alt="..."
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </>
  );
}
