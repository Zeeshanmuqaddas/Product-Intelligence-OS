export type AgentStatus = 'idle' | 'running' | 'completed' | 'failed' | 'retrying';

export interface Agent {
  id: string;
  name: string;
  role: string;
  status: AgentStatus;
  currentTask?: string;
  llm: string;
  memoryUsage?: string;
  uptime?: string;
}

export interface Metric {
  title: string;
  value: string | number;
  change: number;
  trend: 'up' | 'down' | 'neutral';
}

export interface ProductInsight {
  id: string;
  name: string;
  brand: string;
  category: string;
  sentimentScore: number; 
  fraudRisk: number; 
  complianceStatus: 'compliant' | 'warning' | 'non-compliant';
  lifecycleStage: 'launch' | 'growth' | 'maturity' | 'decline';
  benchmarkScore: number;
  price: number;
}
