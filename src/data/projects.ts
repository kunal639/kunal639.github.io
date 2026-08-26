export type ProjectImage = { src: string; alt: string; caption: string };
export type Project = {
  slug: string; number: string; title: string; eyebrow: string; problem: string; summary: string;
  technologies: string[]; github: string; contribution: string; outcome: string; flow: { label: string; detail: string }[];
  architecture: string[]; engineering: string[]; decisions: string[]; challenges: string[]; images?: ProjectImage[];
};

export const projects: Project[] = [
  {
    slug: 'observer-model', number: '01', title: 'ObserverModel', eyebrow: 'AI runtime observability',
    problem: 'AI coding-agent runs can be difficult to audit when execution behavior becomes inefficient or risky.',
    summary: 'A behavioral-intelligence platform for parsing AI coding-agent execution logs and surfacing anomalous patterns for human review.',
    contribution: 'Built the backend and cloud/data workflow around runtime logs, anomaly detection, model-assisted analysis, and human approval.',
    outcome: 'A cloud-native observability and audit-reporting workflow for AI coding-agent executions.',
    github: 'https://github.com/kunal639/ObserverModel-AIRuntimeIntelligence',
    technologies: ['Python', 'FastAPI', 'Gemini API', 'BigQuery', 'Cloud Storage', 'Cloud Run'],
    flow: [{ label: 'Run logs', detail: 'Execution traces from AI coding agents enter the analysis path.' }, { label: 'Behavior signals', detail: 'Logs are parsed into observable events and known patterns.' }, { label: 'Analysis', detail: 'Deterministic detection is paired with Gemini-powered root-cause analysis.' }, { label: 'Review & audit', detail: 'Recommendations are gated for human approval and retained for reporting.' }],
    architecture: ['Execution logs are parsed into observable events.', 'Deterministic detectors identify patterns such as retry loops, repeated reads, context growth, and secret access.', 'Gemini-powered analysis produces root-cause context behind a human-approval workflow.', 'BigQuery and Cloud Storage support historical analysis and audit reporting; Cloud Run hosts the service.'],
    engineering: ['Combines deterministic detection with model-assisted analysis instead of relying on an LLM alone.', 'Tracks token-cost attribution alongside behavioral signals for business-readable audit reports.', 'Uses a review gate before recommendations are surfaced.'],
    decisions: ['Rule-based detectors provide a checkable first pass for known execution patterns.', 'Human approval is retained before recommendations are surfaced, preserving operator control.'],
    challenges: ['Detector thresholds and formal evaluation methodology are not presented as project outcomes here.'],
  },
  {
    slug: 'multilingual-rag-chatbot', number: '02', title: 'Multilingual RAG Chatbot', eyebrow: 'SIH 2025 Grand Finalist · Team Lead',
    problem: 'Student-support information needs to be retrievable across multiple languages and from structured knowledge sources.',
    summary: 'A team-led multilingual student-support chatbot built around FastAPI workflows and Neo4j GraphRAG retrieval.',
    contribution: 'Led a six-member team and architected FastAPI backend workflows integrated with Neo4j GraphRAG pipelines.',
    outcome: 'Smart India Hackathon 2025 Grand Finalist project.',
    github: 'https://github.com/kunal639/Multi-Lingual-RAG-Chatbot-With-Human-In-The-Loop-Final',
    technologies: ['Python', 'FastAPI', 'Neo4j', 'GraphRAG', 'RAG pipelines'],
    flow: [{ label: 'Multilingual query', detail: 'A student-support question enters the chatbot workflow.' }, { label: 'Backend orchestration', detail: 'FastAPI coordinates the application request path.' }, { label: 'Graph retrieval', detail: 'Neo4j GraphRAG provides structured knowledge retrieval.' }, { label: 'Grounded response', detail: 'Retrieved context informs the multilingual answer.' }],
    architecture: ['Knowledge is ingested into a graph-oriented retrieval layer.', 'FastAPI orchestrates backend workflows between requests, retrieval, and responses.', 'The retrieval pipeline is designed around structured multilingual knowledge access.'],
    engineering: ['Led a six-member team during the Smart India Hackathon 2025 Grand Finale.', 'Architected backend workflows around Neo4j GraphRAG pipelines.', 'Designed retrieval and ingestion workflows focused on response relevance across languages.'],
    decisions: ['A graph-based retrieval approach was used for structured knowledge retrieval.', 'FastAPI provides a focused backend boundary for the chatbot workflows.'],
    challenges: ['No retrieval evaluation metrics, language coverage, or deployment claim is presented without repository confirmation.']
  },
  {
    slug: 'role-based-registration', number: '03', title: 'Role-Based Registration & Admin System', eyebrow: 'Backend platform',
    problem: 'A public registration workflow needs distinct participant paths and safe, practical administration without duplicating backend behavior.',
    summary: 'A unified REST backend for Founder and Audience registration, with role-aware workflows and admin-side operations.',
    contribution: 'Built backend APIs and administration workflows during a backend internship at Startly Innovations Pvt. Ltd.',
    outcome: 'Implemented as backend internship work at Startly Innovations Pvt. Ltd.',
    github: 'https://github.com/kunal639/role-based-registration-backend',
    technologies: ['Node.js', 'Express.js', 'MongoDB', 'REST APIs'],
    flow: [{ label: 'Registration request', detail: 'Founder and Audience paths enter a unified REST API.' }, { label: 'Input controls', detail: 'Validation, sanitization, duplicate detection, and IP-based limits protect public endpoints.' }, { label: 'Role-aware data', detail: 'Schema-level role management differentiates workflow behavior.' }, { label: 'Admin operations', detail: 'Search, filtering, deletion, and structured export support operations.' }],
    architecture: ['Public API endpoints handle role-specific registration through a unified service boundary.', 'Schema-level role management differentiates Founder and Audience workflows.', 'Admin APIs support filtering, search, deletion, and structured exports.', 'Validation, sanitization, duplicate detection, and IP-based rate limiting protect public-facing endpoints.'],
    engineering: ['Designed administration endpoints around common operational needs: search, filter, removal, and exports.', 'Built abuse-prevention controls into the public API path.', 'Applied role management at the schema level rather than splitting core backend flows.'],
    decisions: ['A unified REST API keeps shared registration logic centralized while preserving role-specific behavior.', 'Layered input controls address several common public-endpoint failure modes.'],
    challenges: ['Authentication, traffic volume, and deployment configuration are not claimed because they have not been verified.'],
  },
];

export const getProject = (slug: string) => projects.find((project) => project.slug === slug);
