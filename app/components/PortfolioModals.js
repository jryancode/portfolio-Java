const portfolios = [
  {
    id: 'ai-avatar',
    title: 'AI Conversational Avatar',
    company: 'HeyGen · WebRTC · LLM',
    tags: 'AI · WebRTC · LLM · Real-Time Streaming',
    description:
      'Real-time talking avatar built with the HeyGen Streaming API, WebRTC, and LLM integration. Users speak or type to a lifelike AI avatar that responds with synchronized lip movement, voice, and natural conversation, all streamed in real time through a browser-based interface.',
    results: [
      'Sub-second avatar response latency via WebRTC peer connection',
      'Integrated LLM for dynamic, context-aware conversational responses',
      'Deployed as a browser-based app with no plugin requirements',
    ],
    skills: 'JavaScript · HeyGen Streaming API · WebRTC · OpenAI · Node.js',
    video: '/assets/img/portfolio/ai-avatar/demo.mp4',
  },
  {
    id: 'ocr',
    title: 'OCR & Scene Text Recognition System',
    company: 'Computer Vision · OCR',
    tags: 'OCR · Computer Vision · Deep Learning · Multilingual',
    description:
      'Detecting and extracting text from images across multiple domains, including receipts, license plates, and natural scene signage, with bounding-box localization and multilingual character recognition. The system handles varied fonts, lighting conditions, and orientations, outputting structured text alongside the source image with localized annotations.',
    results: [
      'Accurately extracts structured data from receipts including items, totals, and timestamps',
      'Localizes and reads license plates from real-world vehicle photos',
      'Recognizes multilingual scene text from street signs with high accuracy',
    ],
    skills: 'Python · EasyOCR · OpenCV · PyTorch · Tesseract · NumPy',
    workflows: [
      { img: '/assets/img/portfolio/ocr/receipt.png', label: 'Receipt OCR - structured data extraction with side-by-side output' },
      { img: '/assets/img/portfolio/ocr/license-plate.png', label: 'License Plate Recognition - bounding-box detection on real vehicle photos' },
      { img: '/assets/img/portfolio/ocr/scene-text.png', label: 'Scene Text Recognition - multilingual street sign extraction' },
    ],
  },
  {
    id: 'linkedin-automation',
    title: 'LinkedIn Lead Generation Automation',
    company: 'Make.com · Airtable · PhantomBuster',
    tags: 'Make.com · Airtable · PhantomBuster · Lead Generation · Scraping',
    description:
      'Automated LinkedIn prospecting pipeline built in Make.com, pulling target profiles from Airtable and launching PhantomBuster agents via API to scrape and enrich lead data at scale. The pipeline handles profile discovery, data enrichment, and writes results back to Airtable automatically, turning a manual outreach process into a fully hands-off system.',
    results: [
      'Fully automated profile scraping and lead enrichment with zero manual steps',
      'PhantomBuster agents triggered dynamically from Airtable input records',
      'Enriched lead data written back to Airtable for seamless CRM handoff',
    ],
    skills: 'Make.com · Airtable · PhantomBuster API · LinkedIn · REST API · JSON',
    video: '/assets/img/portfolio/linkedin-automation/demo.mp4',
  },
  {
    id: 'workflow-automation',
    title: 'Workflow Automation & AI Agent Systems',
    company: 'n8n · LLM · No-Code',
    tags: 'n8n · Automation · AI Agents · CRM · API Integration',
    description:
      'Building no-code/low-code automation pipelines with n8n, integrating CRMs, APIs, LLMs, and business tools to eliminate manual work. Each workflow handles a distinct business process end-to-end, from deal syncing and invoice processing to AI-powered bots and scheduled reminders.',
    results: [
      'Eliminated manual data entry across CRM, billing, and communication tools',
      'Reduced invoice follow-up time with fully automated overdue reminder sequences',
      'Delivered AI image generation directly to Telegram with zero human intervention',
    ],
    skills: 'n8n · HubSpot · Gmail · AWS SES · OpenAI DALL·E · Telegram API · REST APIs',
    workflows: [
      { img: '/assets/img/portfolio/workflow-automation/hubspot-sync.png', label: 'End-to-End Sales Ops Automation (HubSpot → Multi-Tool Sync)' },
      { img: '/assets/img/portfolio/workflow-automation/invoice-pipeline.png', label: 'Invoice & Payment Processing Pipeline' },
      { img: '/assets/img/portfolio/workflow-automation/dalle-telegram.png', label: 'AI Image Generation Bot (DALL·E + Telegram)' },
      { img: '/assets/img/portfolio/workflow-automation/overdue-reminders.png', label: 'Automated Overdue Invoice Reminders' },
    ],
  },
  {
    id: 'ai-support-agent',
    title: 'AI Customer Support Agent (Gmail + Gemini)',
    company: 'Gmail · Gemini · LLM',
    tags: 'AI Agents · Gemini · Gmail · Inbox Automation · Memory',
    description:
      'A conversational AI agent that listens for incoming chat messages, reasons with Google Gemini, retains context via memory, and drafts and sends replies through Gmail. A self-contained AI assistant for inbox automation, the agent maintains conversation history across sessions and handles multi-turn dialogue without human intervention.',
    results: [
      'Fully automated end-to-end reply flow from inbox to sent message',
      'Persistent memory ensures contextually relevant multi-turn responses',
      'Integrates Google Gemini reasoning with Gmail API for seamless automation',
    ],
    skills: 'Python · Google Gemini API · Gmail API · LangChain · Memory · OAuth 2.0',
    video: '/assets/img/portfolio/ai-support-agent/demo.mp4',
  },
  {
    id: 'virtual-staging',
    title: 'AI Virtual Staging for Real Estate',
    company: 'AI Image Generation · Real Estate',
    tags: 'Generative AI · Real Estate · Image Generation · Before/After',
    description:
      'Transforms empty rooms into furnished, styled interiors using AI image generation. The tool takes a photo of a bare space and produces a fully staged version with furniture, lighting, and decor, complete with an interactive before/after comparison slider so clients can instantly see the transformation.',
    results: [
      'Reduces staging costs compared to physical furniture rental',
      'Interactive before/after slider for instant client presentation',
      'Supports multiple style presets: modern, minimalist, Scandinavian, and more',
    ],
    skills: 'Python · Stable Diffusion · ControlNet · JavaScript · REST API',
    video: '/assets/img/portfolio/virtual-staging/demo.mp4',
  },
  {
    id: 'img-to-video',
    title: 'AI Image-to-Video Generation Pipeline',
    company: 'ComfyUI · Wan Model',
    tags: 'Generative AI · ComfyUI · Wan · Prompt Engineering',
    description:
      'Animates still images into fluid video clips using ComfyUI and the Wan model. Built a node-based workflow with custom prompt engineering to control motion style, camera movement, and temporal consistency, turning a single frame into a dynamic, realistic video sequence.',
    results: [
      'Produced smooth, temporally consistent video from single still images',
      'Custom prompt engineering pipeline for controlled motion and style',
      'Node-based ComfyUI workflow enabling rapid iteration and non-destructive edits',
    ],
    skills: 'ComfyUI · Wan Model · Python · Prompt Engineering · Stable Diffusion',
    video: '/assets/img/portfolio/img-to-video/demo.mp4',
  },
  {
    id: 'object-detection',
    title: 'Object Detection',
    company: 'Computer Vision',
    tags: 'Computer Vision · Deep Learning · YOLO',
    description:
      'Real-time object detection system built with deep learning, capable of identifying and localizing multiple object classes across diverse environments, including factory floors, aerial views, highways, and crowded pedestrian scenes. Detects people, vehicles, and common objects with confidence scores displayed per bounding box.',
    results: [
      'Detects multiple object classes in real time across varied scenes',
      'Applied to factory worker monitoring, vehicle tracking, and pedestrian detection',
      'Works on both static images and live video streams',
    ],
    skills: 'Python · YOLOv8 · OpenCV · PyTorch · NumPy',
    images: [
      '/assets/img/portfolio/object-detection/od-1.jpg',
      '/assets/img/portfolio/object-detection/od-2.png',
      '/assets/img/portfolio/object-detection/od-3.png',
      '/assets/img/portfolio/object-detection/od-4.png',
      '/assets/img/portfolio/object-detection/od-5.png',
    ],
    video: '/assets/img/portfolio/object-detection/object_detect.mp4',
  },
  {
    id: 'leaseflow',
    title: 'LeaseFlow AI',
    company: 'Voice AI · LLM Agents · Real Estate',
    tags: 'AI Agents · Voice AI · Lead Qualification · Real Estate · Automation',
    description:
      'AI agent system that automates the real estate leasing process end-to-end: qualifying inbound leads, handling tenant communication, and answering phone calls with a voice AI agent. Replaces manual leasing-agent screening with always-on automation that engages prospects instantly, gathers qualification details, and routes ready-to-lease tenants to the property team.',
    results: [
      'Qualifies inbound leasing leads automatically without agent intervention',
      'Answers and handles tenant phone calls with real-time voice AI',
      'Automates tenant communication across the leasing funnel, reducing response time to seconds',
    ],
    skills: 'LLM Agents · Voice AI · Real Estate APIs · Automation · Python',
    video: '/assets/img/portfolio/leaseflow/demo.mp4',
    images: ['/assets/img/portfolio/leaseflow/dashboard.png'],
    github: 'https://github.com/jryancode/LeaseFlow',
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
          <div className="modal-dialog modal-dialog-scrollable modal-lg" role="document">
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

                        {portfolio.video && (
                          <div className="mt-4 mb-3">
                            <video
                              controls
                              style={{ width: '100%', borderRadius: '8px' }}
                              preload="metadata"
                            >
                              <source src={portfolio.video} type="video/mp4" />
                            </video>
                          </div>
                        )}

                        {portfolio.images && (
                          <div className="row mt-3">
                            {portfolio.images.map((img, i) => (
                              <div className="col-6 mb-3" key={i}>
                                <img
                                  src={img}
                                  alt={`${portfolio.title} ${i + 1}`}
                                  style={{ width: '100%', borderRadius: '6px', objectFit: 'cover' }}
                                />
                              </div>
                            ))}
                          </div>
                        )}

                        {portfolio.workflows && (
                          <div className="mt-3">
                            {portfolio.workflows.map((wf, i) => (
                              <div className="mb-4" key={i}>
                                <img
                                  src={wf.img}
                                  alt={wf.label}
                                  style={{ width: '100%', borderRadius: '6px', border: '1px solid #eee' }}
                                />
                                <p className="text-muted text-center mt-2 mb-0" style={{ fontSize: '13px' }}>
                                  <strong>{wf.label}</strong>
                                </p>
                              </div>
                            ))}
                          </div>
                        )}

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
                              {portfolio.github && (
                                <a
                                  href={portfolio.github}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="pill-button mt-3"
                                >
                                  <i className="lni-github-original mr-2"></i>
                                  View on GitHub
                                </a>
                              )}
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
