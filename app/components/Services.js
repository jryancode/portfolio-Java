export default function Services() {
  return (
    <section
      id="services"
      className="section pp-scrollable services bg-dark"
      data-navigation-color="#fff"
      data-navigation-tooltip="SERVICES"
    >
      <div className="display-table">
        <div className="display-content">
          <div className="container">
            <div className="row">
              <div className="title-small">
                <p className="text-dark">My Services</p>
              </div>
              <div className="col-lg-12">
                <div className="text-left">
                  <h2 className="text-dark mb-3">
                    My <span className="base-color">Services</span>
                  </h2>
                  <p className="text-muted">Services I Offer To My Clients</p>
                </div>
              </div>
            </div>
            <div className="row mt-4">
              <div className="col-lg-4 text-left">
                <div className="services-item">
                  <div className="float-left mt-lg-1 d-inline-block services-icon">
                    <i className="lni-bulb size-md base-color"></i>
                  </div>
                  <div className="services-content">
                    <h5 className="mb-3">LLM Application Development</h5>
                  </div>
                  <p className="text-muted mb-0 mt-4">
                    I build production-grade LLM applications using OpenAI,
                    Anthropic, and AWS Bedrock APIs - with a focus on accuracy,
                    cost control, and safe integration into existing products.
                  </p>
                </div>
              </div>
              <div className="col-lg-4 text-left">
                <div className="services-item">
                  <div className="float-left mt-lg-1 d-inline-block services-icon">
                    <i className="lni-layers size-md base-color"></i>
                  </div>
                  <div className="services-content">
                    <h5 className="mb-3">RAG Pipeline Design</h5>
                  </div>
                  <p className="text-muted mb-0 mt-4">
                    I design retrieval augmented generation pipelines with
                    vector databases (pgvector, Pinecone), semantic and hybrid
                    search, chunking strategies, and reranking to maximize
                    answer grounding and traceability.
                  </p>
                </div>
              </div>

              <div className="col-lg-4 text-left">
                <div className="services-item">
                  <div className="float-left mt-lg-1 d-inline-block services-icon">
                    <i className="lni-code size-md base-color"></i>
                  </div>
                  <div className="services-content">
                    <h5 className="mb-3">AI Agent Development</h5>
                  </div>
                  <p className="text-muted mb-0 mt-4">
                    I build multi-step AI agents with tool calling and agent
                    orchestration (LangGraph, LangChain) that automate complex
                    workflows and integrate with internal APIs and databases.
                  </p>
                </div>
              </div>

              <div className="col-lg-4 text-left">
                <div className="services-item">
                  <div className="float-left mt-lg-1 d-inline-block services-icon">
                    <i className="lni-checkmark-circle size-md base-color"></i>
                  </div>
                  <div className="services-content">
                    <h5 className="mb-3">LLM Evaluation &amp; Guardrails</h5>
                  </div>
                  <p className="text-muted mb-0 mt-4">
                    I set up evaluation frameworks with Ragas and LangSmith,
                    build labeled regression sets, and add hallucination and
                    safety checks so model changes are caught before they reach
                    production.
                  </p>
                </div>
              </div>
              <div className="col-lg-4 text-left">
                <div className="services-item">
                  <div className="float-left mt-lg-1 d-inline-block services-icon">
                    <i className="lni-reload size-md base-color mb-0"></i>
                  </div>
                  <div className="services-content">
                    <h5 className="mb-3">AI Workflow Automation</h5>
                  </div>
                  <p className="text-muted mb-0 mt-4">
                    I automate data ingestion, indexing, and AI-driven
                    processing pipelines using n8n, webhooks, and API
                    integrations to reduce manual work and keep knowledge bases
                    fresh.
                  </p>
                </div>
              </div>
              <div className="col-lg-4 text-left">
                <div className="services-item">
                  <div className="float-left mt-lg-1 d-inline-block services-icon">
                    <i className="lni-cloud-network size-md base-color"></i>
                  </div>
                  <div className="services-content">
                    <h5 className="mb-3">Cloud &amp; Deployment</h5>
                  </div>
                  <p className="text-muted mb-0 mt-4">
                    I deploy AI systems on AWS (Bedrock, SageMaker, Lambda)
                    using Docker and GitHub Actions CI/CD, with observability
                    via Datadog and Sentry to monitor cost, latency, and
                    failure rates per feature.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
