import { Agent, Metric, ProductInsight } from '../types';

export const agents: Agent[] = [
  { id: '1', name: 'CEO Orchestrator', role: 'Master Coordinator', status: 'running', currentTask: 'Orchestrating daily intelligence sweep across 5 categories', llm: 'GPT-4o', uptime: '99.9%', memoryUsage: '450MB' },
  { id: '2', name: 'Product Discovery', role: 'Data Acquisition', status: 'running', currentTask: 'Scraping Shopify competitor stores for new SKUs', llm: 'Mistral Large', uptime: '99.5%', memoryUsage: '1.2GB' },
  { id: '3', name: 'Review Intelligence', role: 'Sentiment Analysis', status: 'running', currentTask: 'Analyzing 25k recent Amazon reviews for sentiment shifts', llm: 'Gemini 1.5 Pro', uptime: '99.8%', memoryUsage: '800MB' },
  { id: '4', name: 'Competitor Intelligence', role: 'Market Position', status: 'idle', currentTask: 'Awaiting discovery completion', llm: 'GPT-4o', uptime: '99.9%', memoryUsage: '200MB' },
  { id: '5', name: 'Contextual Personalization', role: 'User Insights', status: 'running', currentTask: 'Generating personalized recommendations for beta cohort', llm: 'Claude 3.5 Sonnet', uptime: '99.7%', memoryUsage: '600MB' },
  { id: '6', name: 'Multi-Modal Intelligence', role: 'Audio/Video/Image', status: 'completed', currentTask: 'Analyzed 500 product demonstration videos', llm: 'Gemini 1.5 Pro', uptime: '99.8%', memoryUsage: '2.5GB' },
  { id: '7', name: 'Workflow Automation', role: 'Task Ops', status: 'running', currentTask: 'Managing retries for failed Target API endpoints', llm: 'Mistral Large', uptime: '99.9%', memoryUsage: '150MB' },
  { id: '8', name: 'Benchmarking', role: 'Industry Standard Comparison', status: 'running', currentTask: 'Calculating category averages for smart home devices', llm: 'GPT-4o', uptime: '99.6%', memoryUsage: '350MB' },
  { id: '9', name: 'Knowledge Graph', role: 'Semantic Relations', status: 'running', currentTask: 'Updating Neo4j with new feature relationships', llm: 'Claude 3.5 Sonnet', uptime: '99.9%', memoryUsage: '3.1GB' },
  { id: '10', name: 'Anomaly Detection', role: 'Fraud Watch', status: 'running', currentTask: 'Scanning for review farms on recent product launches', llm: 'Gemini 1.5 Pro', uptime: '99.9%', memoryUsage: '900MB' },
  { id: '11', name: 'Lifecycle Management', role: 'Stage Tracking', status: 'idle', currentTask: 'Awaiting end-of-quarter sales data', llm: 'Claude 3.5 Sonnet', uptime: '99.5%', memoryUsage: '120MB' },
  { id: '12', name: 'Compliance & Policy', role: 'Risk Validation', status: 'completed', currentTask: 'Validated GDPR and PCI DSS compliance for merchant profiles', llm: 'GPT-4o', uptime: '99.9%', memoryUsage: '250MB' },
  { id: '13', name: 'LLM Router', role: 'Task Traversal & Failover', status: 'running', currentTask: 'Routing requests dynamically', llm: 'Router', uptime: '100%', memoryUsage: '80MB' },
];

export const metrics: Metric[] = [
  { title: 'Products Tracked', value: '1.2M', change: 12.5, trend: 'up' },
  { title: 'Anomalies Blocked', value: '4,302', change: 4.1, trend: 'up' },
  { title: 'Sentiment Index', value: '84.2', change: -1.2, trend: 'down' },
  { title: 'Compliance Violations', value: '12', change: -50, trend: 'down' },
];

export const products: ProductInsight[] = [
  { id: 'P001', name: 'AeroMax Pro Headphones', brand: 'SonicTech', category: 'Electronics', sentimentScore: 92, fraudRisk: 5, complianceStatus: 'compliant', lifecycleStage: 'growth', benchmarkScore: 88, price: 299.99 },
  { id: 'P002', name: 'VitaBlend Smart Juicer', brand: 'NutriLife', category: 'Home Appliances', sentimentScore: 75, fraudRisk: 42, complianceStatus: 'warning', lifecycleStage: 'maturity', benchmarkScore: 72, price: 149.50 },
  { id: 'P003', name: 'Quantum Core Router', brand: 'NetSphere', category: 'Networking', sentimentScore: 61, fraudRisk: 88, complianceStatus: 'non-compliant', lifecycleStage: 'launch', benchmarkScore: 65, price: 199.00 },
  { id: 'P004', name: 'EcoTread Running Shoes', brand: 'Stride', category: 'Apparel', sentimentScore: 88, fraudRisk: 2, complianceStatus: 'compliant', lifecycleStage: 'maturity', benchmarkScore: 91, price: 120.00 },
  { id: 'P005', name: 'Lumina Desk Lamp', brand: 'BrightSpaces', category: 'Home Office', sentimentScore: 81, fraudRisk: 12, complianceStatus: 'compliant', lifecycleStage: 'decline', benchmarkScore: 78, price: 45.00 },
];
