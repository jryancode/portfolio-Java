'use client';

const skillsLeft = [
  { name: 'Java / Python', percent: '100%' },
  { name: 'JavaScript / TypeScript', percent: '100%' },
  { name: 'Spring Boot / Spring Security / Spring Data JPA', percent: '100%' },
  { name: 'Node.js / Django', percent: '90%' },
  { name: 'React.js / Next.js / Tailwind CSS', percent: '90%' },
  { name: 'Git / GitHub / Jira', percent: '90%' },
  { name: 'OpenAI API / LLM Integrations / AI Workflow Automation', percent: '85%' }
];

const skillsRight = [
  { name: 'PostgreSQL / MySQL', percent: '100%' },
  { name: 'MongoDB', percent: '90%' },
  { name: 'Redis / Elasticsearch', percent: '85%' },
  { name: 'RESTful APIs / Authentication & Authorization', percent: '90%' },
  { name: 'Scalability Optimization / Event-Driven Processing', percent: '90%' },
  { name: 'Workflow Automation / Cloud Deployment', percent: '90%' },
  { name: 'AWS / Azure / Docker', percent: '85%' },
  { name: 'Kubernetes / CI/CD', percent: '90%' },
];

const experiences = [
  {
    role: 'Senior Software Engineer',
    timeline: 'Feb 2024 - Apr 2026',
    company: 'o9 Solutions, Inc. · USA | Remote',
    details: [
      'Developed scalable backend services and enterprise workflow systems supporting healthcare operational processes and patient data management.',
      'Built dashboard interfaces and workflow tools used by doctors and hospital staff for managing daily operational activities across multiple departments.',
      'Developed backend APIs, authentication systems, business logic, and database integrations for patient and operational data processing.',
      'Contributed to decision-support workflows that processed patient history and diagnosis data to improve case review efficiency within operational dashboards.',
      'Improved system scalability and performance by optimizing queries, reducing unnecessary API calls, improving data-loading workflows, and restructuring parts of the database design for high-concurrency environments.'
    ],
  },
  {
    role: 'Software Engineer',
    timeline: 'Jun 2021 - Jan 2024',
    company: 'Hawksearch · USA | Remote',
    details: [
      'Developed backend systems and integration workflows supporting ecommerce operations, marketplace platforms, and large-scale transactional environments.',
      'Built operational workflows for payment processing, tax handling, order management, delivery coordination, and external platform synchronization.',
      'Supported internal dashboards and operational tools used by merchants and operations teams for workflow and business management.',
      'Improved reliability of distributed systems by implementing retry handling, background processing, reconciliation workflows, logging, and event-driven processing for external integrations.',
      'Worked on scalable backend architectures handling webhook failures, delayed events, rate limits, and real-time operational data across production environments.'
    ],
  },
  {
    role: 'Junior Software Engineer',
    timeline: 'Jan 2020 - May 2021',
    company: 'Technigami · USA | Remote',
    details: [
      'Developed frontend and backend features for web and mobile applications using TypeScript, React.js, and Node.js.',
      'Built and maintained browser extensions for Chrome, Firefox, Edge, and Safari platforms.',
      'Gained hands-on experience with APIs, frontend architecture, and remote agile development practices.'
    ],
  },
  {
    role: 'Software Engineer Intern',
    timeline: 'May 2018 - Dec 2019',
    company: 'DataStax · Singapore | Onsite',
    details: [
      'Supported development of internal web applications using React.js, and Spring Boot.',
      'Worked on backend APIs, database integration, and frontend feature implementation across internal tools.',
      'Learned cloud deployment and containerization workflows using AWS and Docker while working with senior engineers.'
    ],
  },
];

const education = [
  {
    degree: 'Bachelor of Science in Computer Science',
    school: 'Singapore Management University',
    // timeline: 'Sep 2012 - May 2016',
    location: 'Singapore',
  },
];

const certifications = [
  {
    name: 'Microsoft Azure AI Fundamentals (AI-900)',
    issuer: 'Microsoft',
    year: '2024'
  },
  {
    name: 'Docker Certified Associate',
    issuer: 'Docker',
    year: '2023'
  },
  {
    name: 'Amazon Web Services AWS Certified Developer – Associate',
    issuer: 'Amazon Web Services',
    year: '2022'
  }
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
                    Senior Software Engineer with experience building scalable business platforms, workflow-driven enterprise systems, ecommerce integrations, and AI-powered applications. Skilled in backend architecture, cloud infrastructure, APIs, distributed systems, and scalable frontend applications using React, Node.js, Python, and cloud-native technologies.
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
                  <ul className="timeline">
                    {education.map((edu, index) => (
                      <li key={index}>
                        <h6 className="base-color mb-0">{edu.school}</h6>
                        <small className="text-muted">{edu.timeline} · {edu.location}</small>
                        <p className="text-dark py-3">{edu.degree}</p>
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
                  <ul className="timeline">
                    {certifications.map((cert, index) => (
                      <li key={index}>
                        <h6 className="base-color mb-0">{cert.name}</h6>
                        <span className="text-dark">{cert.issuer}</span>
                        <small className="text-muted" style={{ marginLeft: 8 }}>{cert.year}</small>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
