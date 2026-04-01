import React, { useState, useEffect } from 'react';
import { 
  Zap, 
  TrendingUp, 
  AlertCircle, 
  CheckCircle2, 
  ArrowRight,
  MoreVertical,
  Cpu,
  Database,
  Search,
  Globe,
  MessageSquare,
  ChevronRight,
  Info,
  ShieldCheck,
  ShieldAlert,
  Activity
} from 'lucide-react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { useStrategicContext } from '../context/StrategicContext';
import { useLanguage } from '../context/LanguageContext';

const decisions = [
  { 
    id: 'DEC-2024-012', 
    title: 'Project Alpha Budget Pivot', 
    description: 'Reallocate 15% of R&D budget from Project Alpha to Project Gamma based on Q1 performance metrics.',
    impact: 'High',
    alignment: 92,
    status: 'pending',
    agent: 'Resource Allocator',
    time: '2h ago'
  },
  { 
    id: 'DEC-2024-011', 
    title: 'Supply Chain Diversification', 
    description: 'Onboard secondary supplier for rare earth minerals to mitigate 12% predicted deviation in supply chain stability.',
    impact: 'Medium',
    alignment: 88,
    status: 'approved',
    agent: 'Market Sentinel',
    time: '5h ago'
  },
  { 
    id: 'DEC-2024-010', 
    title: 'Strategic Hiring Freeze', 
    description: 'Pause all non-critical hiring in the APAC region to preserve cash flow for upcoming market expansion.',
    impact: 'Low',
    alignment: 95,
    status: 'rejected',
    agent: 'Finance Monitor',
    time: '1d ago'
  },
];

export const Decisions: React.FC = () => {
  const { t } = useLanguage();
  const [selectedDecisionId, setSelectedDecisionId] = useState<string | null>(null);
  const { openContext } = useStrategicContext();

  useEffect(() => {
    if (selectedDecisionId) {
      const decision = decisions.find(d => d.id === selectedDecisionId);
      if (decision) {
        openContext({
          title: decision.title,
          type: 'DECISION',
          agentInsight: `This decision was proposed by ${decision.agent}. It has a ${decision.impact} impact on the organization and aligns 92% with the current strategic objectives.`,
          relatedEntities: {
            okrs: [
              { id: 'OBJ-2024-001', title: 'Expand Market Share in APAC', status: 'ON TRACK' }
            ],
            agents: [
              { id: 'XB-001', name: 'Market Sentinel', status: 'active' }
            ],
            knowledge: [
              { id: 'K-004', label: 'Supply Chain Risk Report', type: 'ANALYSIS' }
            ]
          }
        });
      }
    }
  }, [selectedDecisionId]);
  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="flex items-end justify-between">
        <div>
          <p className="label-micro mb-1">{t('decisions.subtitle')}</p>
          <h2 className="text-3xl font-bold tracking-tight">{t('decisions.title')}</h2>
          <p className="text-text-dim mt-2 max-w-2xl leading-relaxed">
            Review and approve strategic pivots proposed by the XBrain agent network. 
            Each decision is backed by real-time data and strategic alignment simulations.
          </p>
        </div>
        <div className="flex gap-3">
          <button className="btn-secondary flex items-center gap-2 text-xs">
            <ShieldCheck size={14} />
            {t('common.audit')}
          </button>
          <button className="btn-primary flex items-center gap-2 text-xs">
            <Zap size={14} />
            {t('decisions.propose')}
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Main Decisions List */}
        <div className="lg:col-span-2 space-y-6">
          <div className="flex items-center justify-between">
            <h3 className="text-xs font-bold uppercase tracking-widest text-text-dim">{t('decisions.pending')}</h3>
            <div className="flex gap-4 text-[10px] font-bold">
              <span className="text-accent border-b border-accent pb-1 cursor-pointer">{t('common.all')}</span>
              <span className="text-text-dim hover:text-text-primary cursor-pointer transition-colors">{t('decisions.approved')}</span>
              <span className="text-text-dim hover:text-text-primary cursor-pointer transition-colors">{t('decisions.rejected')}</span>
            </div>
          </div>

          <div className="space-y-4">
            {decisions.map((decision, index) => (
              <motion.div 
                key={decision.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className={`card hover:bg-black/[0.02] transition-colors group relative overflow-hidden cursor-pointer ${
                  selectedDecisionId === decision.id ? 'border-accent bg-accent/[0.02]' : ''
                }`}
                onClick={() => setSelectedDecisionId(decision.id)}
              >
                {decision.status === 'pending' && (
                  <div className="absolute left-0 top-0 bottom-0 w-1 bg-accent"></div>
                )}
                <div className="flex gap-6">
                  <div className="flex-shrink-0 mt-1">
                    <div className={`w-12 h-12 rounded-sm flex items-center justify-center ${
                      decision.impact === 'High' ? 'bg-accent/10 text-accent' : 
                      decision.impact === 'Medium' ? 'bg-blue-500/10 text-blue-500' : 'bg-green-500/10 text-green-500'
                    }`}>
                      <Zap size={24} />
                    </div>
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center gap-3">
                        <span className="text-[10px] font-mono font-bold text-accent uppercase">{decision.id}</span>
                        <span className="text-[10px] text-text-dim">•</span>
                        <span className="text-[10px] text-text-dim font-mono">{decision.time}</span>
                        <span className="text-[10px] text-text-dim">•</span>
                        <span className="text-[10px] text-text-dim font-mono uppercase">Agent: {decision.agent}</span>
                      </div>
                      <div className={`px-2 py-0.5 rounded-sm text-[9px] font-bold uppercase tracking-wider ${
                        decision.status === 'approved' ? 'bg-green-500/10 text-green-500' : 
                        decision.status === 'rejected' ? 'bg-orange-500/10 text-orange-500' : 'bg-blue-500/10 text-blue-500'
                      }`}>
                        {decision.status}
                      </div>
                    </div>
                    <h4 className="text-lg font-bold mb-2 group-hover:text-accent transition-colors">{decision.title}</h4>
                    <p className="text-sm text-text-dim leading-relaxed mb-4">{decision.description}</p>
                    
                    {decision.status === 'pending' && (
                      <div className="mb-6 p-3 bg-accent/5 border border-accent/20 rounded-sm">
                        <div className="flex items-center gap-2 mb-2">
                          <Activity size={12} className="text-accent" />
                          <span className="text-[10px] font-bold text-accent uppercase tracking-widest">Simulated Outcome</span>
                        </div>
                        <div className="flex items-center gap-4">
                          <div className="flex-1">
                            <div className="flex justify-between text-[9px] mb-1">
                              <span className="text-text-dim">Strategic Alignment</span>
                              <span className="text-text-primary font-bold">+{decision.alignment - 80}%</span>
                            </div>
                            <div className="w-full bg-black/5 h-1 rounded-full overflow-hidden">
                              <div className="bg-accent h-full w-[92%]"></div>
                            </div>
                          </div>
                          <div className="text-right">
                            <p className="text-[9px] text-text-dim uppercase">{t('decisions.confidence')}</p>
                            <p className="text-xs font-bold text-green-500">0.94</p>
                          </div>
                        </div>
                      </div>
                    )}
                    
                    <div className="flex items-center justify-between pt-4 border-t border-border">
                      <div className="flex items-center gap-6">
                        <div className="flex flex-col">
                          <span className="label-micro mb-1">{t('decisions.impact')}</span>
                          <span className={`text-xs font-bold ${
                            decision.impact === 'High' ? 'text-accent' : 
                            decision.impact === 'Medium' ? 'text-blue-500' : 'text-green-500'
                          }`}>{decision.impact}</span>
                        </div>
                        <div className="flex flex-col">
                          <span className="label-micro mb-1">{t('okrs.progress')}</span>
                          <span className="text-xs font-bold">{decision.alignment}%</span>
                        </div>
                      </div>
                      <div className="flex gap-2">
                        <button className="btn-secondary text-xs px-3 py-1.5">{t('common.view_details')}</button>
                        {decision.status === 'pending' && (
                          <>
                            <button className="btn-secondary text-xs px-3 py-1.5 text-orange-500 border-orange-500/30 hover:bg-orange-500/10">{t('common.reject')}</button>
                            <button className="btn-primary text-xs px-3 py-1.5">{t('common.approve')}</button>
                          </>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Sidebar: Pipeline Stats */}
        <div className="space-y-8">
          {/* Decision Pipeline */}
          <div className="card">
            <h3 className="text-xs font-bold uppercase tracking-widest text-text-dim mb-6">Pipeline Velocity</h3>
            <div className="space-y-6">
              <div className="flex items-end justify-between">
                <div>
                  <p className="text-[10px] text-text-dim font-mono uppercase mb-1">Avg. Latency</p>
                  <p className="text-2xl font-bold tracking-tight">12.4h</p>
                </div>
                <div className="text-right">
                  <p className="text-[10px] text-green-500 font-mono uppercase mb-1">-15%</p>
                  <p className="text-xs text-text-dim">vs Last Month</p>
                </div>
              </div>
              <div className="space-y-2">
                <div className="flex justify-between text-[10px] font-bold uppercase tracking-widest">
                  <span>Approval Rate</span>
                  <span>78%</span>
                </div>
                <div className="w-full bg-black/5 h-1.5 rounded-full overflow-hidden">
                  <div className="bg-accent h-full w-[78%]"></div>
                </div>
              </div>
            </div>
          </div>

          {/* Strategic Gaps */}
          <div className="card border-orange-500/20 bg-orange-500/[0.02]">
            <div className="flex items-center gap-2 mb-4">
              <ShieldAlert size={16} className="text-orange-500" />
              <h3 className="text-xs font-bold uppercase tracking-widest text-orange-500">Critical Strategic Gaps</h3>
            </div>
            <div className="space-y-4">
              {[
                { label: 'Supply Chain Resilience', score: 62 },
                { label: 'Market Expansion APAC', score: 45 },
                { label: 'R&D Innovation Velocity', score: 58 }
              ].map(gap => (
                <div key={gap.label} className="space-y-1">
                  <div className="flex justify-between text-[10px] font-medium">
                    <span className="text-text-dim">{gap.label}</span>
                    <span className="text-orange-500">{gap.score}%</span>
                  </div>
                  <div className="w-full bg-black/5 h-1 rounded-full overflow-hidden">
                    <div className="bg-orange-500 h-full" style={{ width: `${gap.score}%` }}></div>
                  </div>
                </div>
              ))}
            </div>
            <button className="w-full mt-6 py-2 bg-orange-500/10 border border-orange-500/20 text-orange-500 text-[10px] font-bold uppercase tracking-widest hover:bg-orange-500/20 transition-colors">
              Address Gaps
            </button>
          </div>

          {/* Simulation Engine */}
          <div className="card">
            <h3 className="text-xs font-bold uppercase tracking-widest text-text-dim mb-4">Simulation Engine</h3>
            <div className="p-4 bg-black/5 border border-border rounded-sm">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-accent/10 border border-accent/20 rounded-sm flex items-center justify-center text-accent">
                  <Cpu size={20} />
                </div>
                <div>
                  <p className="text-xs font-bold">XBrain Simulator v2.1</p>
                  <p className="text-[10px] text-text-dim font-mono">READY FOR INPUT</p>
                </div>
              </div>
              <p className="text-[10px] text-text-dim leading-relaxed mb-4 italic">
                "Run a Monte Carlo simulation on proposed pivots to predict strategic alignment impact over a 12-month horizon."
              </p>
              <button className="w-full py-2 bg-accent text-white text-[10px] font-bold uppercase tracking-widest hover:opacity-90 transition-opacity">
                Run Simulation
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
