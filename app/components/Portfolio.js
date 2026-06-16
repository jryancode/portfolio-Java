import Image from 'next/image';

import tile1 from '../assets/img/portfolio/vetster-tile.jpg';
import tile2 from '../assets/img/portfolio/fortuna-tile.jpg';
import tile3 from '../assets/img/portfolio/hawksearch-tile.jpg';
import tile4 from '../assets/img/portfolio/avail-tile.jpg';
import tile5 from '../assets/img/portfolio/boon-tile.jpg';
import tile6 from '../assets/img/portfolio/edu-tile.jpg';

const portfolios = [
  {
    title: 'Patient Billing AI Assistant',
    tileImg: tile1,
    target: '#portfolio-billing-ai',
    filter: 'rag agents healthcare',
    company: 'Collectly',
  },
  {
    title: 'Financial Document Assistant',
    tileImg: tile2,
    target: '#portfolio-doc-assistant',
    filter: 'llm fintech',
    company: 'Helicap',
  },
  {
    title: 'RAG Research Assistant',
    tileImg: tile3,
    target: '#portfolio-rag-research',
    filter: 'rag fintech',
    company: 'Helicap',
  },
  {
    title: 'LLM Evaluation Pipeline',
    tileImg: tile4,
    target: '#portfolio-eval-pipeline',
    filter: 'llm healthcare',
    company: 'Collectly',
  },
  {
    title: 'AI Cost & Latency Optimizer',
    tileImg: tile5,
    target: '#portfolio-cost-optimizer',
    filter: 'llm agents healthcare',
    company: 'Collectly',
  },
  {
    title: 'Generative AI Support Reply',
    tileImg: tile6,
    target: '#portfolio-support-ai',
    filter: 'llm agents',
    company: 'Alliance Software',
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
                    AI <span className="base-color">Projects</span>
                  </h2>
                  <p className="text-muted mx-auto section-subtitle mt-3">
                    Production AI systems I built across healthcare, fintech, and billing
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
                  <a href="#" data-filter=".rag" className="my-1">
                    RAG
                  </a>
                </li>
                <li className="list-inline-item">
                  <a href="#" data-filter=".agents" className="my-1">
                    Agents
                  </a>
                </li>
                <li className="list-inline-item">
                  <a href="#" data-filter=".llm" className="my-1">
                    LLM
                  </a>
                </li>
                <li className="list-inline-item">
                  <a href="#" data-filter=".healthcare" className="my-1">
                    Healthcare
                  </a>
                </li>
                <li className="list-inline-item">
                  <a href="#" data-filter=".fintech" className="my-1">
                    Fintech
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
