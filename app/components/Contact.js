'use client';

export default function Contact() {
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
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d63220.51823694878!2d122.06832!3d6.91057!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x325041c5a6b2c5e1%3A0x5e4a4e2b1f2e3c4d!2sZamboanga%20City%2C%20Philippines!5e0!3m2!1sen!2s!4v1700000000000!5m2!1sen!2s"
                  width="100%"
                  height="400"
                  style={{ border: 0, borderRadius: '8px' }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
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
