import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { 
  Users, 
  Cpu, 
  Activity, 
  ShieldCheck, 
  Zap, 
  AlertCircle, 
  MoreVertical, 
  ArrowRight,
  Search,
  Settings,
  Terminal,
  Clock,
  Plus,
  Link as LinkIcon,
  Code,
  Box,
  Check,
  ExternalLink
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { useStrategicContext } from '../context/StrategicContext';
import { useLanguage } from '../context/LanguageContext';

const agents = [
  { id: 'XB-001', name: 'China Market Sentinel', status: 'active', task: 'Monitoring JD.com & Tmall pricing', load: 68, health: 98, skills: ['Market Analysis', 'Web Scraping'], connectors: ['Slack', 'Tmall API'] },
  { id: 'XB-002', name: 'Nanjing Factory Optimizer', status: 'active', task: 'Optimizing production line 4', load: 42, health: 100, skills: ['Industrial IoT', 'Optimization'], connectors: ['SAP', 'IoT Hub'] },
  { id: 'XB-003', name: 'Supply Chain Risk Agent', status: 'idle', task: 'Waiting for logistics update', load: 0, health: 95, skills: ['Risk Assessment', 'Logistics'], connectors: ['S3', 'Custom ERP'] },
  { id: 'XB-004', name: 'Quality Compliance Bot', status: 'active', task: 'Auditing ISO 9001 logs', load: 85, health: 99, skills: ['Anomaly Detection', 'Compliance'], connectors: ['Datadog'] },
  { id: 'XB-005', name: 'Strategic Growth Planner', status: 'warning', task: 'Simulating Tier-3 city expansion', load: 92, health: 78, skills: ['Scenario Planning', 'Forecasting'], connectors: ['Tableau', 'Salesforce'] },
];

const skillsRegistry = [
  { name: 'Market Analysis', category: 'Intelligence', description: 'Extract and synthesize market trends from public data.' },
  { name: 'Financial Modeling', category: 'Finance', description: 'Build complex NPV and ROI models for strategic projects.' },
  { name: 'ETL', category: 'Data', description: 'Extract, transform, and load data from disparate sources.' },
  { name: 'Scenario Planning', category: 'Strategy', description: 'Run Monte Carlo simulations for business outcomes.' },
];

const mcpServers = [
  { name: 'PostgreSQL Tool', status: 'connected', endpoint: 'mcp://db-prod:8080', tools: 12 },
  { name: 'GitHub Integration', status: 'connected', endpoint: 'mcp://github-proxy:3000', tools: 8 },
  { name: 'Local File System', status: 'offline', endpoint: 'mcp://localhost:4000', tools: 4 },
];

const connectors = [
  { name: 'Slack', type: 'Communication', status: 'active' },
  { name: 'Salesforce', type: 'CRM', status: 'active' },
  { name: 'SAP', type: 'ERP', status: 'pending' },
  { name: 'Jira', type: 'Project Management', status: 'active' },
];

const auditLogs = [
  { time: '10:42:15', agent: 'XB-001', action: 'Detected 5% price drop in Competitor Y', status: 'info' },
  { time: '10:40:02', agent: 'XB-004', action: 'Completed hourly system health audit', status: 'success' },
  { time: '10:35:48', agent: 'XB-005', action: 'Simulation failure: Insufficient data for APAC', status: 'error' },
  { time: '10:30:12', agent: 'XB-002', action: 'Proposed budget pivot DEC-2024-012', status: 'info' },
];

export const Workforce: React.FC = () => {
  const { t } = useLanguage();
  const [activeTab, setActiveTab] = useState<'agents' | 'capabilities'>('agents');
  const [capTab, setCapTab] = useState<'skills' | 'mcp' | 'connectors'>('skills');
  const [selectedAgent, setSelectedAgent] = useState<typeof agents[0] | null>(null);
  const { openContext } = useStrategicContext();

  useEffect(() => {
    if (selectedAgent) {
      openContext({
        title: selectedAgent.name,
        type: 'AGENT',
        agentInsight: `Agent ${selectedAgent.id} is currently ${selectedAgent.status}. It is primarily supporting OKR-2024-001 and has proposed 3 strategic pivots in the last 24 hours.`,
        relatedEntities: {
          okrs: [
            { id: 'OBJ-2024-001', title: 'Expand Market Share in APAC', status: 'ON TRACK' }
          ],
          decisions: [
            { id: 'DEC-2024-012', title: 'Project Alpha Budget Pivot', impact: 'High' }
          ],
          knowledge: [
            { id: 'K-003', label: 'Competitor Pricing Data', type: 'DATASET' }
          ]
        }
      });
    }
  }, [selectedAgent]);

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="flex items-end justify-between">
        <div>
          <p className="label-micro mb-1">{t('workforce.subtitle')}</p>
          <h2 className="text-3xl font-bold tracking-tight">{t('workforce.title')}</h2>
          <p className="text-text-dim mt-2 max-w-2xl leading-relaxed">
            Oversee and manage the autonomous agent network. Configure skills, 
            Model Context Protocol (MCP) servers, and external system connectors.
          </p>
        </div>
        <div className="flex gap-3">
          <button className="btn-secondary flex items-center gap-2 text-xs">
            <ShieldCheck size={14} />
            {t('workforce.audit')}
          </button>
          <button className="btn-primary flex items-center gap-2 text-xs">
            <Plus size={14} />
            {t('workforce.deploy')}
          </button>
        </div>
      </div>

      {/* Navigation Tabs */}
      <div className="flex gap-8 border-b border-border">
        <button 
          onClick={() => setActiveTab('agents')}
          className={`pb-4 text-xs font-bold uppercase tracking-widest transition-all relative ${
            activeTab === 'agents' ? 'text-accent' : 'text-text-dim hover:text-text-primary'
          }`}
        >
          {t('workforce.agents')}
          {activeTab === 'agents' && <motion.div layoutId="activeTab" className="absolute bottom-0 left-0 right-0 h-0.5 bg-accent" />}
        </button>
        <button 
          onClick={() => setActiveTab('capabilities')}
          className={`pb-4 text-xs font-bold uppercase tracking-widest transition-all relative ${
            activeTab === 'capabilities' ? 'text-accent' : 'text-text-dim hover:text-text-primary'
          }`}
        >
          {t('workforce.capabilities')}
          {activeTab === 'capabilities' && <motion.div layoutId="activeTab" className="absolute bottom-0 left-0 right-0 h-0.5 bg-accent" />}
        </button>
      </div>

      <AnimatePresence mode="wait">
        {activeTab === 'agents' ? (
          <motion.div 
            key="agents"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="grid grid-cols-1 lg:grid-cols-3 gap-8"
          >
            {/* Agent List */}
            <div className="lg:col-span-2 space-y-6">
              <div className="flex items-center justify-between">
                <h3 className="text-xs font-bold uppercase tracking-widest text-text-dim">{t('common.active')}</h3>
                <div className="relative">
                  <Search size={14} className="absolute left-3 top-1/2 -translate-y-1/2 text-text-dim" />
                  <input 
                    type="text" 
                    placeholder={t('common.search')} 
                    className="bg-black/5 border border-border rounded-sm py-1 pl-9 pr-4 text-xs focus:outline-none focus:border-accent/50"
                  />
                </div>
              </div>

              <div className="space-y-3">
                {agents.map((agent) => (
                  <div 
                    key={agent.id} 
                    onClick={() => setSelectedAgent(agent)}
                    className={`card hover:bg-black/[0.02] transition-colors group cursor-pointer border-l-4 ${
                      selectedAgent?.id === agent.id ? 'border-accent bg-accent/[0.02]' : 'border-transparent'
                    }`}
                  >
                    <div className="flex items-center gap-4">
                      <div className={`w-10 h-10 rounded-sm flex items-center justify-center ${
                        agent.status === 'active' ? 'bg-green-500/10 text-green-500' : 
                        agent.status === 'warning' ? 'bg-orange-500/10 text-orange-500' : 'bg-black/5 text-text-dim'
                      }`}>
                        <Cpu size={20} />
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-3 mb-1">
                          <h4 className="text-sm font-bold">{agent.name}</h4>
                          <span className="text-[10px] font-mono text-text-dim uppercase">{agent.id}</span>
                        </div>
                        <p className="text-xs text-text-dim truncate">{agent.task}</p>
                      </div>
                      <div className="flex items-center gap-8">
                        <div className="text-right hidden sm:block">
                          <p className="text-[10px] text-text-dim uppercase mb-1">{t('decisions.impact')}</p>
                          <p className="text-xs font-bold text-accent">{agent.load > 60 ? 'High' : 'Medium'}</p>
                        </div>
                        <div className="text-right hidden sm:block">
                          <p className="text-[10px] text-text-dim uppercase mb-1">{t('workforce.load')}</p>
                          <p className="text-xs font-bold">{agent.load}%</p>
                        </div>
                        <div className="text-right hidden sm:block">
                          <p className="text-[10px] text-text-dim uppercase mb-1">{t('workforce.health')}</p>
                          <p className={`text-xs font-bold ${agent.health < 80 ? 'text-orange-500' : 'text-green-500'}`}>{agent.health}%</p>
                        </div>
                        <button className="text-text-dim hover:text-text-primary">
                          <MoreVertical size={16} />
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Agent Configuration Panel */}
            <div className="space-y-6">
              {selectedAgent ? (
                <motion.div 
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  className="card border-accent/30 bg-accent/[0.01]"
                >
                  <div className="flex items-center justify-between mb-6">
                    <h3 className="text-xs font-bold uppercase tracking-widest text-accent">Agent Configuration</h3>
                    <button onClick={() => setSelectedAgent(null)} className="text-text-dim hover:text-text-primary">
                      <Plus size={14} className="rotate-45" />
                    </button>
                  </div>
                  
                  <div className="space-y-6">
                    <div>
                      <p className="text-[10px] font-bold text-text-dim uppercase mb-3">Assigned Skills</p>
                      <div className="flex flex-wrap gap-2">
                        {selectedAgent.skills.map(skill => (
                          <span key={skill} className="px-2 py-1 bg-accent/10 text-accent text-[10px] font-bold rounded-sm border border-accent/20">
                            {skill}
                          </span>
                        ))}
                        <button className="p-1 border border-dashed border-border rounded-sm text-text-dim hover:text-accent hover:border-accent">
                          <Plus size={12} />
                        </button>
                      </div>
                    </div>

                    <div>
                      <p className="text-[10px] font-bold text-text-dim uppercase mb-3">Active Connectors</p>
                      <div className="space-y-2">
                        {selectedAgent.connectors.map(conn => (
                          <div key={conn} className="flex items-center justify-between p-2 bg-black/5 rounded-sm border border-border">
                            <span className="text-xs font-medium">{conn}</span>
                            <div className="flex items-center gap-2">
                              <span className="w-1.5 h-1.5 bg-green-500 rounded-full"></span>
                              <Settings size={12} className="text-text-dim cursor-pointer hover:text-text-primary" />
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="p-3 bg-accent/5 border border-accent/20 rounded-sm space-y-2">
                      <div className="flex items-center justify-between">
                        <span className="text-[10px] font-bold text-accent uppercase tracking-wider">Policy Compliance</span>
                        <ShieldCheck size={14} className="text-accent" />
                      </div>
                      <p className="text-[10px] text-text-dim italic leading-tight">
                        Operating under <span className="font-bold text-text-primary">Global Autonomy Policy v2.4</span>. 
                        Confidence floor: 0.85.
                      </p>
                      <Link 
                        to="/settings" 
                        className="text-[10px] text-accent font-bold uppercase tracking-widest flex items-center gap-1 hover:underline mt-2"
                      >
                        View Guardrails <ArrowRight size={10} />
                      </Link>
                    </div>

                    <div className="pt-4 border-t border-border">
                      <button className="w-full btn-primary py-2 text-xs">Update Parameters</button>
                    </div>
                  </div>
                </motion.div>
              ) : (
                <div className="card border-dashed flex flex-col items-center justify-center py-12 text-center">
                  <Cpu size={32} className="text-text-dim mb-4 opacity-20" />
                  <p className="text-xs text-text-dim">Select an agent to view and<br />configure its capabilities.</p>
                </div>
              )}

              {/* Capability Audit (Executive View) */}
              <div className="card bg-orange-500/5 border-orange-500/20">
                <div className="flex items-center gap-2 mb-4">
                  <AlertCircle size={16} className="text-orange-500" />
                  <h3 className="text-xs font-bold uppercase tracking-widest text-orange-500">Capability Gaps</h3>
                </div>
                <div className="space-y-4">
                  <div className="p-2 bg-black/5 rounded-sm border border-border/50">
                    <div className="flex justify-between mb-1">
                      <span className="text-[10px] font-bold">Predictive Maintenance</span>
                      <span className="text-[10px] text-orange-500 font-bold">CRITICAL</span>
                    </div>
                    <p className="text-[9px] text-text-dim leading-tight">Required for Nanjing Factory OKR. No active agents with this skill.</p>
                  </div>
                  <div className="p-2 bg-black/5 rounded-sm border border-border/50">
                    <div className="flex justify-between mb-1">
                      <span className="text-[10px] font-bold">Local Market Sentiment</span>
                      <span className="text-[10px] text-accent font-bold">LOW</span>
                    </div>
                    <p className="text-[9px] text-text-dim leading-tight">Currently handled by generic Sentinel. Recommend specialized China-NLP agent.</p>
                  </div>
                  <button className="w-full py-2 bg-orange-500/10 border border-orange-500/30 text-[9px] font-bold uppercase tracking-widest text-orange-500 hover:bg-orange-500/20 transition-colors">
                    Acquire New Capabilities
                  </button>
                </div>
              </div>

              {/* Audit Trail (Mini) */}
              <div className="card">
                <h3 className="text-xs font-bold uppercase tracking-widest text-text-dim mb-4">{t('workforce.logs')}</h3>
                <div className="space-y-3">
                  {auditLogs.slice(0, 3).map((log, i) => (
                    <div key={i} className="text-[10px] flex gap-2">
                      <span className="text-text-dim font-mono">{log.time}</span>
                      <span className="text-text-primary truncate">{log.action}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        ) : (
          <motion.div 
            key="capabilities"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="grid grid-cols-1 lg:grid-cols-4 gap-8"
          >
            {/* Sidebar Tabs */}
            <div className="space-y-6">
              <div className="space-y-1">
                {[
                  { id: 'skills', label: t('workforce.skills'), icon: Zap },
                  { id: 'mcp', label: t('workforce.mcp'), icon: Code },
                  { id: 'connectors', label: t('workforce.connectors'), icon: LinkIcon },
                ].map((tab) => (
                  <button 
                    key={tab.id}
                    onClick={() => setCapTab(tab.id as any)}
                    className={`w-full flex items-center gap-3 px-3 py-2 rounded-sm transition-all ${
                      capTab === tab.id 
                        ? 'bg-accent/10 text-accent border-l-2 border-accent' 
                        : 'text-text-dim hover:text-text-primary hover:bg-black/5'
                    }`}
                  >
                    <tab.icon size={18} />
                    <span className="text-sm font-medium">{tab.label}</span>
                  </button>
                ))}
              </div>

              <div className="p-4 bg-black/5 border border-border rounded-sm space-y-4">
                <div className="flex items-center gap-2 text-accent">
                  <Activity size={14} />
                  <span className="text-[10px] font-bold uppercase tracking-wider">Integration Architecture</span>
                </div>
                
                <div className="space-y-3">
                  <div>
                    <p className="text-[10px] font-bold text-text-primary mb-1">MCP Servers</p>
                    <p className="text-[10px] text-text-dim leading-relaxed">
                      Standardized protocol for exposing <span className="text-text-primary font-medium">tools, prompts, and resources</span> directly to the AI model. 
                      Enables agents to perform specific technical actions (e.g., query SQL, browse files).
                    </p>
                  </div>
                  
                  <div>
                    <p className="text-[10px] font-bold text-text-primary mb-1">Connectors</p>
                    <p className="text-[10px] text-text-dim leading-relaxed">
                      High-level <span className="text-text-primary font-medium">system-to-system integrations</span>. 
                      Handles authentication and data synchronization with enterprise platforms (e.g., Salesforce, Slack, SAP).
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Content Area */}
            <div className="lg:col-span-3">
              <AnimatePresence mode="wait">
                {capTab === 'skills' && (
                  <motion.div 
                    key="skills"
                    initial={{ opacity: 0, x: 10 }}
                    animate={{ opacity: 1, x: 0 }}
                    className="space-y-6"
                  >
                    <div className="flex items-center justify-between">
                      <h3 className="text-sm font-bold">Skills Registry</h3>
                      <button className="btn-primary py-1 px-3 text-[10px] flex items-center gap-2">
                        <Plus size={12} />
                        Register Skill
                      </button>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {skillsRegistry.map(skill => (
                        <div key={skill.name} className="card group hover:border-accent/30 transition-all">
                          <div className="flex justify-between items-start mb-2">
                            <h4 className="text-sm font-bold">{skill.name}</h4>
                            <span className="text-[10px] font-mono text-accent bg-accent/10 px-1.5 py-0.5 rounded-sm">{skill.category}</span>
                          </div>
                          <p className="text-xs text-text-dim mb-4">{skill.description}</p>
                          <div className="flex items-center justify-between pt-4 border-t border-border">
                            <span className="text-[10px] text-text-dim">Used by 4 agents</span>
                            <Settings size={14} className="text-text-dim group-hover:text-text-primary cursor-pointer" />
                          </div>
                        </div>
                      ))}
                    </div>
                  </motion.div>
                )}

                {capTab === 'mcp' && (
                  <motion.div 
                    key="mcp"
                    initial={{ opacity: 0, x: 10 }}
                    animate={{ opacity: 1, x: 0 }}
                    className="space-y-6"
                  >
                    <div className="flex items-center justify-between">
                      <h3 className="text-sm font-bold">Model Context Protocol (MCP)</h3>
                      <button className="btn-primary py-1 px-3 text-[10px] flex items-center gap-2">
                        <Plus size={12} />
                        Add Server
                      </button>
                    </div>
                    <div className="space-y-3">
                      {mcpServers.map(server => (
                        <div key={server.name} className="card flex items-center justify-between">
                          <div className="flex items-center gap-4">
                            <div className={`p-2 rounded-sm ${server.status === 'connected' ? 'bg-green-500/10 text-green-500' : 'bg-black/5 text-text-dim'}`}>
                              <Box size={20} />
                            </div>
                            <div>
                              <h4 className="text-sm font-bold">{server.name}</h4>
                              <p className="text-[10px] font-mono text-text-dim">{server.endpoint}</p>
                            </div>
                          </div>
                          <div className="flex items-center gap-8">
                            <div className="text-right">
                              <p className="text-[10px] text-text-dim uppercase mb-1">Tools</p>
                              <p className="text-xs font-bold">{server.tools}</p>
                            </div>
                            <div className="flex items-center gap-2 px-3 py-1 bg-black/5 border border-border rounded-sm">
                              <span className={`w-1.5 h-1.5 rounded-full ${server.status === 'connected' ? 'bg-green-500' : 'bg-orange-500'}`}></span>
                              <span className="text-[10px] font-bold uppercase">{server.status}</span>
                            </div>
                            <Settings size={16} className="text-text-dim cursor-pointer hover:text-text-primary" />
                          </div>
                        </div>
                      ))}
                    </div>
                  </motion.div>
                )}

                {capTab === 'connectors' && (
                  <motion.div 
                    key="connectors"
                    initial={{ opacity: 0, x: 10 }}
                    animate={{ opacity: 1, x: 0 }}
                    className="space-y-6"
                  >
                    <div className="flex items-center justify-between">
                      <h3 className="text-sm font-bold">External Connectors</h3>
                      <button className="btn-primary py-1 px-3 text-[10px] flex items-center gap-2">
                        <LinkIcon size={12} />
                        New Integration
                      </button>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      {connectors.map(conn => (
                        <div key={conn.name} className="card text-center flex flex-col items-center">
                          <div className={`w-12 h-12 rounded-full flex items-center justify-center mb-4 ${
                            conn.status === 'active' ? 'bg-accent/10 text-accent' : 'bg-black/5 text-text-dim'
                          }`}>
                            <ExternalLink size={24} />
                          </div>
                          <h4 className="text-sm font-bold mb-1">{conn.name}</h4>
                          <p className="text-[10px] text-text-dim uppercase mb-4">{conn.type}</p>
                          <div className="w-full pt-4 border-t border-border flex justify-between items-center">
                            <span className={`text-[10px] font-bold uppercase ${conn.status === 'active' ? 'text-green-500' : 'text-orange-500'}`}>
                              {conn.status}
                            </span>
                            <Settings size={14} className="text-text-dim cursor-pointer hover:text-text-primary" />
                          </div>
                        </div>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

