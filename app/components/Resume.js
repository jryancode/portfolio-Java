'use client';

const skillsLeft = [
  { name: 'LLM App Development / RAG / AI Agents', percent: '100%' },
  { name: 'Agent Orchestration (LangGraph / LangChain)', percent: '95%' },
  { name: 'Prompt Engineering / Structured Output / Function Calling', percent: '95%' },
  { name: 'OpenAI / Anthropic / AWS Bedrock APIs', percent: '95%' },
  { name: 'Vector Databases (pgvector / Pinecone)', percent: '90%' },
  { name: 'LLM Evaluation / Ragas / LangSmith', percent: '90%' },
  { name: 'Workflow Automation (n8n) / AI Pipelines', percent: '90%' },
];

const skillsRight = [
  { name: 'Python / TypeScript / SQL', percent: '95%' },
  { name: 'FastAPI / Node.js / REST APIs', percent: '90%' },
  { name: 'PostgreSQL / MySQL / MongoDB', percent: '90%' },
  { name: 'Redis / Elasticsearch', percent: '85%' },
  { name: 'AWS (Bedrock / SageMaker / Lambda)', percent: '85%' },
  { name: 'Docker / CI/CD (GitHub Actions)', percent: '85%' },
  { name: 'Datadog / Sentry / Observability', percent: '80%' },
];

const experiences = [
  {
    role: 'Senior AI Engineer',
    timeline: '06/2025 – Present',
    company: 'Collectly · United States, Remote',
    details: [
      'Lead AI engineering on a patient billing platform, building agentic workflows that read statements, answer balance and insurance questions, and route edge cases to staff - cutting manual review on routine tickets by ~45%.',
      'Designed a RAG layer over payer policies, billing codes, and account history so the assistant gives grounded answers with citations, raising answer accuracy in internal evals from the high 70s to ~92%.',
      'Implemented a labeled regression set and automated scoring in CI so prompt and model changes are checked before release.',
      'Tuned retrieval, caching, and model routing to send simpler calls to smaller models, dropping average response latency by ~35% and trimming monthly LLM spend by ~30%.',
      'Mentor two engineers on prompt design, eval practices, and safe rollout patterns for AI features.',
    ],
  },
  {
    role: 'AI Engineer',
    timeline: '01/2024 – 05/2025',
    company: 'Helicap · Singapore, Remote',
    details: [
      'Built LLM tools for a lending and credit investment team, including a document assistant that extracts figures and terms from financial PDFs - reducing manual data entry time per deal by ~60%.',
      'Shipped a RAG-based research assistant over company filings and internal memos using pgvector and FastAPI, letting analysts surface context in seconds instead of digging through folders.',
      'Added agent-style tool calling so the assistant could query internal APIs and databases for live numbers, with guardrails to prevent returning unverified figures.',
      'Set up tracing and cost dashboards for every LLM call to surface token usage, latency, and failure rates per feature.',
    ],
  },
  {
    role: 'Software Engineer',
    timeline: '05/2022 – 12/2023',
    company: 'Alliance Software Inc. · Manila, Philippines',
    details: [
      'Built and maintained backend services in Python and Node.js for client-facing web products, owning API design, database work, and third-party integrations.',
      'Delivered an early generative AI feature that drafted customer support replies from a knowledge base, helping a pilot team cut average first response time by ~40%.',
      'Improved a slow reporting endpoint by reworking queries and adding caching, reducing a common request from several seconds to under 400ms.',
      'Added a test suite and GitHub Actions pipeline to a service that had none, noticeably reducing bugs reaching production.',
    ],
  },
  {
    role: 'Junior Software Engineer',
    timeline: '08/2021 – 04/2022',
    company: 'VintaSoft Inc. · Zamboanga City, Philippines',
    details: [
      'Wrote backend features and bug fixes in Python for internal business tools, learning the codebase through tickets and code review.',
      'Built REST endpoints and database queries for a document processing tool and added input validation that reduced bad data getting saved.',
      'Wrote unit tests and helped move part of the team toward consistent testing practices.',
    ],
  },
];

const education = [
  {
    degree: 'Bachelor of Science in Computer Science',
    school: 'Western Mindanao State University',
    timeline: '2017 – 2021',
    location: 'Zamboanga City, Philippines',
  },
];

const certifications = [
  {
    name: 'Deep Learning',
    issuer: 'TestDome',
    image: '/assets/img/certification1.png',
  },
  {
    name: 'Machine Learning',
    issuer: 'TestDome',
    image: '/assets/img/certification2.png',
  },
  {
    name: 'AWS Certified Developer',
    issuer: 'TestDome',
    image: '/assets/img/certification3.png',
  },
  {
    name: 'Problem Solving',
    issuer: 'HackerRank',
    image: '/assets/img/certification4.png',
  },
  {
    name: 'Python',
    issuer: 'HackerRank',
    image: '/assets/img/certification5.png',
  },
];

export default function Resume() {
  return (
    <section
      id="resume"
      className="section pp-scrollable resume bg-dark"
      data-navigation-color="#fff"
      data-navigation-tooltip="RESUME"
    >
      <div className="display-table">
        <div className="display-content">
          <div className="container">
            <div className="row">
              <div className="title-small">
                <p className="text-dark">Resume</p>
              </div>
              <div className="col-lg-12">
                <div className="text-left">
                  <h2 className="text-dark mb-3">
                    My <span className="base-color">Resume</span>
                  </h2>
                  <p className="text-muted">
                    AI Engineer with around six years of experience building and shipping production software, the last few focused on LLM applications. I design retrieval augmented generation pipelines, build AI agents that handle multi-step tasks, and integrate generative AI into existing products without breaking what already works. Most of my recent work has been in healthcare, fintech, and billing - where accuracy and traceability matter - so I care a lot about evaluation, guardrails, and keeping cost and latency under control.
                  </p>
                </div>
              </div>
            </div>
            <div className="row pt-5 ml-0">
              <h3 className="text-dark mb-5">
                <i className="lni-construction-hammer base-color"></i>Skill
              </h3>
            </div>
            <div className="row">
              <div className="col-lg-6">
                <div className="skill-box pt-4 pt-lg-0 mt-4 mt-lg-0">
                  {skillsLeft.map((skill) => (
                    <div
                      className="skillbar clearfix mt-6"
                      data-percent={skill.percent}
                      key={skill.name}
                    >
                      <div className="skillbar-title">
                        <span>{skill.name}</span>
                      </div>
                      <div
                        className="skillbar-bar"
                        style={{ width: skill.percent }}
                      ></div>
                      <div className="skill-bar-percent">{skill.percent}</div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="col-lg-6">
                <div className="skill-box pt-4 pt-lg-0 mt-4 mt-lg-0">
                  {skillsRight.map((skill) => (
                    <div
                      className="skillbar clearfix mt-6"
                      data-percent={skill.percent}
                      key={skill.name}
                    >
                      <div className="skillbar-title">
                        <span>{skill.name}</span>
                      </div>
                      <div
                        className="skillbar-bar"
                        style={{ width: skill.percent }}
                      ></div>
                      <div className="skill-bar-percent">{skill.percent}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className="row pt-5">
              <div className="col-lg-12">
                <h3 className="text-dark mb-0 mt-5 mt-lg-0">
                  <i className="lni-write base-color"></i>Experience
                </h3>
                <ul className="timeline">
                  {experiences.map((exp, index) => (
                    <li key={index}>
                      <h6 className="base-color mb-0">{exp.role}</h6>
                      <span className="text-dark">{exp.company}</span>
                      <small className="text-muted" style={{ marginLeft: 8 }}>
                        {exp.timeline}
                      </small>
                      <ul className="pl-3" style={{ listStyleType: 'circle' }}>
                        {exp.details.map((detail, detailIndex) => (
                          <li key={detailIndex}>{detail}</li>
                        ))}
                      </ul>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="col-lg-12 pt-6">
                <div className="pb-1">
                  <h3 className="text-dark mb-2">
                    <i className="lni-graduation base-color"></i>Education
                  </h3>
                  <ul className="list-unstyled">
                    {education.map((edu, index) => (
                      <li key={index} style={{ display: 'flex', alignItems: 'center', gap: '16px', paddingTop: '16px' }}>
                        <img
                          src="/assets/img/wmsu-logo.png"
                          alt="WMSU"
                          style={{ width: '56px', height: '56px', objectFit: 'contain', flexShrink: 0 }}
                        />
                        <div style={{ flex: 1 }}>
                          <h6 className="base-color mb-0">{edu.school}</h6>
                          <small className="text-muted">{edu.timeline} &middot; {edu.location}</small>
                          <p className="text-dark py-3">{edu.degree}</p>
                        </div>
                        <div style={{ flexShrink: 0, position: 'relative', borderRadius: '12px', overflow: 'hidden', boxShadow: '0 8px 32px rgba(0,0,0,0.4)', border: '2px solid rgba(255,255,255,0.1)' }}
                          onMouseEnter={e => {
                            e.currentTarget.querySelector('img').style.transform = 'scale(1.08)';
                            e.currentTarget.style.boxShadow = '0 12px 40px rgba(0,0,0,0.6)';
                            e.currentTarget.style.borderColor = 'rgba(255,255,255,0.25)';
                          }}
                          onMouseLeave={e => {
                            e.currentTarget.querySelector('img').style.transform = 'scale(1)';
                            e.currentTarget.style.boxShadow = '0 8px 32px rgba(0,0,0,0.4)';
                            e.currentTarget.style.borderColor = 'rgba(255,255,255,0.1)';
                          }}
                        >
                          <img
                            src="/assets/img/graduation.png"
                            alt="Graduation"
                            style={{ width: '220px', height: '220px', objectFit: 'cover', display: 'block', transition: 'transform 0.4s ease' }}
                          />
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <div className="col-lg-12 pt-6">
                <div className="pb-1">
                  <h3 className="text-dark mb-2">
                    <i className="lni-certificate base-color"></i>Certifications
                  </h3>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '20px', paddingTop: '20px' }}>
                    {certifications.map((cert, index) => (
                      <div
                        key={index}
                        style={{
                          display: 'flex',
                          flexDirection: 'column',
                          alignItems: 'center',
                          textAlign: 'center',
                          width: '160px',
                          background: 'rgba(255,255,255,0.04)',
                          border: '1px solid rgba(255,255,255,0.08)',
                          borderRadius: '12px',
                          padding: '20px 16px',
                          transition: 'transform 0.2s ease, box-shadow 0.2s ease, border-color 0.2s ease',
                          cursor: 'default',
                        }}
                        onMouseEnter={e => {
                          e.currentTarget.style.transform = 'translateY(-4px)';
                          e.currentTarget.style.boxShadow = '0 8px 24px rgba(0,0,0,0.3)';
                          e.currentTarget.style.borderColor = 'rgba(255,255,255,0.2)';
                          e.currentTarget.querySelector('img').style.transform = 'scale(1.15)';
                        }}
                        onMouseLeave={e => {
                          e.currentTarget.style.transform = 'translateY(0)';
                          e.currentTarget.style.boxShadow = 'none';
                          e.currentTarget.style.borderColor = 'rgba(255,255,255,0.08)';
                          e.currentTarget.querySelector('img').style.transform = 'scale(1)';
                        }}
                      >
                        <img
                          src={cert.image}
                          alt={cert.name}
                          style={{ width: '120px', height: '120px', objectFit: 'contain', borderRadius: '6px', marginBottom: '14px', transition: 'transform 0.3s ease' }}
                        />
                        <h6 className="base-color mb-1" style={{ fontSize: '13px', lineHeight: '1.3' }}>{cert.name}</h6>
                        <span style={{ fontSize: '11px', color: 'rgba(255,255,255,0.45)', letterSpacing: '0.5px', textTransform: 'uppercase' }}>{cert.issuer}</span>
                      </div>
                    ))}
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
