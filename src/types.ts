export type Status = 'active' | 'idle' | 'warning' | 'error' | 'pending' | 'approved' | 'rejected' | 'ON TRACK' | 'AT RISK' | 'BEHIND';

export interface Objective {
  id: string;
  title: string;
  description: string;
  status: 'ON TRACK' | 'AT RISK' | 'BEHIND';
  progress: number;
  owner: string;
  keyResults: KeyResult[];
  relatedAgents?: string[]; // Agent IDs
  relatedDecisions?: string[]; // Decision IDs
  relatedKnowledge?: string[]; // Knowledge Node IDs
}

export interface KeyResult {
  id: string;
  title: string;
  progress: number;
  target: string;
  current: string;
}

export interface Agent {
  id: string;
  name: string;
  status: 'active' | 'idle' | 'warning';
  task: string;
  load: number;
  health: number;
  skills: string[];
  connectors: string[];
  assignedOKRs?: string[]; // Objective IDs
}

export interface Decision {
  id: string;
  title: string;
  description: string;
  impact: 'High' | 'Medium' | 'Low';
  alignment: number;
  status: 'pending' | 'approved' | 'rejected';
  agentId: string; // Agent ID
  targetOKRId?: string; // Objective ID
  time: string;
}

export interface KnowledgeNode {
  id: string;
  label: string;
  type: string;
  description: string;
  relatedOKRs?: string[];
  relatedDecisions?: string[];
}
