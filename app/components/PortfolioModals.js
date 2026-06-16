const portfolios = [
  {
    id: 'billing-ai',
    title: 'Patient Billing AI Assistant',
    company: 'Collectly',
    tags: 'RAG · Agents · Healthcare',
    description:
      'Agentic workflows on a patient billing platform that read statements, answer balance and insurance questions, and route edge cases to staff. Built a RAG layer over payer policies, billing codes, and account history so the assistant gives grounded answers with citations.',
    results: [
      'Cut manual review on routine tickets by ~45%',
      'Raised answer accuracy in internal evals from the high 70s to ~92%',
    ],
    skills: 'Python / FastAPI / LangGraph / OpenAI / pgvector / RAG / AWS Bedrock',
  },
  {
    id: 'doc-assistant',
    title: 'Financial Document Assistant',
    company: 'Helicap',
    tags: 'LLM · Fintech',
    description:
      'LLM-powered document assistant that pulls figures and terms out of financial PDFs for a lending and credit investment team. Uses structured output and function calling to extract deal-critical data with guardrails preventing unverified figures from being returned.',
    results: [
      'Reduced manual data entry time per deal by ~60%',
      'Added agent-style tool calling to query internal APIs for live numbers',
    ],
    skills: 'Python / FastAPI / OpenAI / Anthropic / Structured Output / LangChain',
  },
  {
    id: 'rag-research',
    title: 'RAG Research Assistant',
    company: 'Helicap',
    tags: 'RAG · Fintech',
    description:
      'Retrieval augmented generation system over company filings and internal memos that lets analysts find supporting context in seconds. Built on pgvector with semantic and hybrid search, reranking, and a FastAPI backend with full tracing per query.',
    results: [
      'Analysts surface context in seconds instead of digging through folders',
      'Set up cost dashboards tracking token usage, latency, and failure rates per feature',
    ],
    skills: 'Python / FastAPI / pgvector / PostgreSQL / LangChain / OpenAI / LangSmith',
  },
  {
    id: 'eval-pipeline',
    title: 'LLM Evaluation Pipeline',
    company: 'Collectly',
    tags: 'LLM · Evaluation · Healthcare',
    description:
      'End-to-end evaluation framework with a labeled regression set and automated scoring in CI so prompt and model changes are checked before release rather than after a customer complaint. Uses Ragas for answer quality scoring and LangSmith for tracing.',
    results: [
      'Prompt and model changes validated before every release',
      'Hallucination and safety checks built into the pipeline',
    ],
    skills: 'Python / Ragas / LangSmith / GitHub Actions / CI/CD / OpenAI',
  },
  {
    id: 'cost-optimizer',
    title: 'AI Cost & Latency Optimizer',
    company: 'Collectly',
    tags: 'LLM · Model Routing · Healthcare',
    description:
      'Model routing, retrieval caching, and request batching system that sends simpler LLM calls to smaller, cheaper models while routing complex reasoning to larger ones. Includes observability dashboards in Datadog tracking spend and latency per feature.',
    results: [
      'Dropped average response latency by ~35%',
      'Trimmed monthly LLM spend by ~30%',
    ],
    skills: 'Python / AWS Bedrock / OpenAI / Anthropic / Redis / Datadog / Sentry',
  },
  {
    id: 'support-ai',
    title: 'Generative AI Support Reply',
    company: 'Alliance Software',
    tags: 'LLM · Agents',
    description:
      'Early generative AI feature that drafts customer support replies from a knowledge base. Indexes support documentation and product FAQs for retrieval, then uses an LLM to compose contextually accurate draft replies for agents to review and send.',
    results: [
      'Pilot team cut average first response time by ~40%',
      'Deployed as a backend service in Python with a GitHub Actions CI pipeline',
    ],
    skills: 'Python / Node.js / OpenAI / RAG / PostgreSQL / GitHub Actions',
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
                  {portfolio.company}
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
                          <h2 className="text-dark mb-1">
                            <span className="base-color">
                              {portfolio.title}
                            </span>
                          </h2>
                          <small className="text-muted">{portfolio.tags}</small>
                          <p className="text-muted mt-3 max-width-450">
                            {portfolio.description}
                          </p>
                        </div>
                        <div className="row contact-info mt-4">
                          <div className="col-12 col-md-10 offset-md-1">
                            <div className="text-center">
                              <h6>Results:</h6>
                              <ul className="list-unstyled text-muted">
                                {portfolio.results.map((r, i) => (
                                  <li key={i}>• {r}</li>
                                ))}
                              </ul>
                              <h6 className="mt-3">Stack:</h6>
                              <p className="text-muted mb-0">{portfolio.skills}</p>
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
        </div>
      ))}
    </>
  );
}
