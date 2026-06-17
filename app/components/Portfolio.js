import Image from 'next/image';

import tile1 from '../assets/img/portfolio/object-detection-tile.jpg';
import tile2 from '../assets/img/portfolio/workflow-automation-tile.png';
import tile3 from '../assets/img/portfolio/ocr-tile.png';

const portfolios = [
  {
    title: 'Object Detection',
    tileImg: tile1,
    target: '#portfolio-object-detection',
    filter: 'cv deeplearning',
    company: 'Computer Vision',
  },
  {
    title: 'AI Conversational Avatar',
    tileVideo: '/assets/img/portfolio/ai-avatar/demo.mp4',
    target: '#portfolio-ai-avatar',
    filter: 'ai webrtc',
    company: 'HeyGen · WebRTC · LLM',
  },
  {
    title: 'AI Image-to-Video Generation Pipeline',
    tileVideo: '/assets/img/portfolio/img-to-video/demo.mp4',
    target: '#portfolio-img-to-video',
    filter: 'ai generative',
    company: 'ComfyUI · Wan Model',
  },
  {
    title: 'AI Virtual Staging for Real Estate',
    tileVideo: '/assets/img/portfolio/virtual-staging/demo.mp4',
    target: '#portfolio-virtual-staging',
    filter: 'ai generative realestate',
    company: 'AI Image Generation · Real Estate',
  },
  {
    title: 'AI Customer Support Agent',
    tileVideo: '/assets/img/portfolio/ai-support-agent/demo.mp4',
    target: '#portfolio-ai-support-agent',
    filter: 'ai agents',
    company: 'Gmail · Gemini · LLM',
  },
  {
    title: 'Workflow Automation & AI Agent Systems',
    tileImg: tile2,
    target: '#portfolio-workflow-automation',
    filter: 'ai agents automation',
    company: 'n8n · LLM · No-Code',
  },
  {
    title: 'LinkedIn Lead Generation Automation',
    tileVideo: '/assets/img/portfolio/linkedin-automation/demo.mp4',
    target: '#portfolio-linkedin-automation',
    filter: 'automation agents',
    company: 'Make.com · Airtable · PhantomBuster',
  },
  {
    title: 'OCR & Scene Text Recognition System',
    tileImg: tile3,
    target: '#portfolio-ocr',
    filter: 'cv deeplearning',
    company: 'Computer Vision · OCR',
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
                    My <span className="base-color">Projects</span>
                  </h2>
                  <p className="text-muted mx-auto section-subtitle mt-3">
                    Computer vision and deep learning projects
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
                  <a href="#" data-filter=".cv" className="my-1">
                    Computer Vision
                  </a>
                </li>
                <li className="list-inline-item">
                  <a href="#" data-filter=".deeplearning" className="my-1">
                    Deep Learning
                  </a>
                </li>
                <li className="list-inline-item">
                  <a href="#" data-filter=".ai" className="my-1">
                    AI
                  </a>
                </li>
                <li className="list-inline-item">
                  <a href="#" data-filter=".webrtc" className="my-1">
                    WebRTC
                  </a>
                </li>
                <li className="list-inline-item">
                  <a href="#" data-filter=".generative" className="my-1">
                    Generative AI
                  </a>
                </li>
                <li className="list-inline-item">
                  <a href="#" data-filter=".realestate" className="my-1">
                    Real Estate
                  </a>
                </li>
                <li className="list-inline-item">
                  <a href="#" data-filter=".agents" className="my-1">
                    Agents
                  </a>
                </li>
                <li className="list-inline-item">
                  <a href="#" data-filter=".automation" className="my-1">
                    Automation
                  </a>
                </li>
              </ul>
            </div>
            <div className="portfolio-items mt-4 row">
              {portfolios.map((portfolio) => (
                <div
                  className={`col-lg-4 col-md-6 portfolio-item my-3 ${portfolio.filter}`}
                  key={portfolio.target}
                >
                  <div
                    className="portfolio-item-content rounded"
                    style={{ height: '220px', overflow: 'hidden' }}
                  >
                    {portfolio.tileVideo ? (
                      <video
                        src={portfolio.tileVideo}
                        autoPlay
                        muted
                        loop
                        playsInline
                        style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
                      />
                    ) : (
                      <Image
                        src={portfolio.tileImg}
                        alt={portfolio.title}
                        fill
                        style={{ objectFit: 'cover' }}
                        sizes="(max-width: 768px) 100vw, 33vw"
                        loading="lazy"
                      />
                    )}
                    <div className="img-overlay text-center">
                      <div className="img-overlay-content">
                        <div className="portfolio-icon">
                          <button
                            type="button"
                            data-toggle="modal"
                            data-target={portfolio.target}
                          >
                            <i className="lni-link"></i>
                          </button>
                        </div>
                        <h5 className="text-white mt-3 mb-0">
                          {portfolio.title}
                        </h5>
                        <small className="text-white opacity-75">
                          {portfolio.company}
                        </small>
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
