import React, { useState, useEffect } from 'react';
import { 
  Activity, 
  TrendingUp, 
  AlertCircle, 
  CheckCircle2, 
  Clock, 
  ArrowRight,
  MoreVertical,
  Cpu,
  Database,
  Search,
  Zap,
  Globe,
  MessageSquare,
  LineChart,
  Play
} from 'lucide-react';
import { motion } from 'motion/react';
import { ProvenanceModal } from '../components/ProvenanceModal';
import { useStrategicContext } from '../context/StrategicContext';

const feedItems = [
  {
    id: 1,
    type: 'intelligence',
    title: 'Market Shift Detected',
    description: 'Competitor X launched a new AI-driven supply chain optimizer. Strategic alignment impact: 12% deviation predicted.',
    time: '2m ago',
    agent: 'Market Sentinel',
    status: 'high',
    tags: ['Competitive', 'Supply Chain']
  },
  {
    id: 2,
    type: 'decision',
    title: 'Resource Reallocation Proposed',
    description: 'Agent suggests moving 15% of R&D budget from Project Alpha to Project Gamma based on Q1 performance metrics.',
    time: '15m ago',
    agent: 'Resource Allocator',
    status: 'medium',
    tags: ['Budget', 'R&D']
  },
  {
    id: 3,
    type: 'system',
    title: 'Knowledge Graph Updated',
    description: 'Successfully ingested 1,240 new data points from the Q1 Financial Report. Strategic nodes updated: 42.',
    time: '1h ago',
    agent: 'Data Ingester',
    status: 'low',
    tags: ['Data', 'Finance']
  },
  {
    id: 4,
    type: 'intelligence',
    title: 'Workforce Efficiency Peak',
    description: 'Autonomous workforce reached 98% utilization with zero reported errors in the last 4 hours.',
    time: '3h ago',
    agent: 'Workforce Monitor',
    status: 'low',
    tags: ['Efficiency', 'Workforce']
  }
];

import { useLanguage } from '../context/LanguageContext';

export const Dashboard: React.FC = () => {
  const { t } = useLanguage();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedClaim, setSelectedClaim] = useState({
    title: 'Market Shift Detected',
    description: 'Competitor X launched a new AI-driven supply chain optimizer. Strategic alignment impact: 12% deviation predicted.',
    agent: 'Market Sentinel',
    confidence: 0.94
  });
  const { openContext } = useStrategicContext();

  const metrics = [
    { label: t('dashboard.metrics.health'), value: '92.4%', change: '+2.1%', status: 'optimal', icon: Activity },
    { label: t('dashboard.metrics.gaps'), value: '14', change: '-3', status: 'warning', icon: AlertCircle },
    { label: t('dashboard.metrics.pipeline'), value: '28', change: '+5', status: 'optimal', icon: Zap },
    { label: t('dashboard.metrics.workforce'), value: '1,242', change: '85%', status: 'optimal', icon: Cpu },
  ];

  const handleItemClick = (item: any) => {
    if (item.type === 'intelligence') {
      setSelectedClaim({
        title: item.title,
        description: item.description,
        agent: item.agent,
        confidence: 0.94
      });
      setIsModalOpen(true);
      
      openContext({
        title: item.title,
        type: 'KNOWLEDGE',
        agentInsight: `This intelligence event from ${item.agent} indicates a potential strategic deviation. I recommend reviewing the related OKRs and considering a budget pivot.`,
        relatedEntities: {
          okrs: [{ id: 'OBJ-2024-001', title: 'Expand Market Share in APAC', status: 'ON TRACK' }],
          agents: [{ id: 'XB-001', name: 'Market Sentinel', status: 'active' }],
          decisions: [{ id: 'DEC-2024-012', title: 'Project Alpha Budget Pivot', impact: 'High' }]
        }
      });
    } else if (item.type === 'decision') {
      openContext({
        title: item.title,
        type: 'DECISION',
        agentInsight: `A new decision has been proposed by ${item.agent}. Strategic alignment is estimated at 92%.`,
        relatedEntities: {
          okrs: [{ id: 'OBJ-2024-002', title: 'Optimize R&D Efficiency', status: 'ON TRACK' }],
          agents: [{ id: 'XB-002', name: 'Resource Allocator', status: 'active' }]
        }
      });
    }
  };

  return (
    <div className="space-y-8">
      <ProvenanceModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
        claim={selectedClaim} 
      />
      {/* Header */}
      <div className="flex items-end justify-between">
        <div>
          <p className="label-micro mb-1">{t('dashboard.subtitle')}</p>
          <h2 className="text-3xl font-bold tracking-tight">{t('dashboard.title')}</h2>
        </div>
        <div className="flex gap-3">
          <button className="btn-secondary flex items-center gap-2 text-xs">
            <LineChart size={14} />
            {t('dashboard.forecast')}
          </button>
          <button className="btn-primary flex items-center gap-2 text-xs bg-orange-600 hover:bg-orange-700 border-orange-700">
            <Play size={14} />
            {t('dashboard.whatif')}
          </button>
        </div>
      </div>

      {/* Metrics Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {metrics.map((metric, index) => {
          const Icon = metric.icon;
          return (
            <motion.div 
              key={metric.label}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="card group hover:border-accent/50 transition-all cursor-pointer"
            >
              <div className="flex justify-between items-start mb-4">
                <div className={`p-2 rounded-sm ${
                  metric.status === 'optimal' ? 'bg-green-500/10 text-green-500' : 'bg-orange-500/10 text-orange-500'
                }`}>
                  <Icon size={20} />
                </div>
                <span className={`text-[10px] font-mono font-bold px-1.5 py-0.5 rounded-sm ${
                  metric.status === 'optimal' ? 'bg-green-500/20 text-green-500' : 'bg-orange-500/20 text-orange-500'
                }`}>
                  {metric.change}
                </span>
              </div>
              <p className="text-text-dim text-xs font-medium mb-1">{metric.label}</p>
              <h3 className="text-2xl font-bold tracking-tight">{metric.value}</h3>
              <div className="mt-4 flex items-center gap-2 text-[10px] text-text-dim opacity-0 group-hover:opacity-100 transition-opacity">
                <span>{t('dashboard.view_details')}</span>
                <ArrowRight size={12} />
              </div>
            </motion.div>
          );
        })}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Main Feed */}
        <div className="lg:col-span-2 space-y-6">
          <div className="flex items-center justify-between">
            <h3 className="text-sm font-bold uppercase tracking-widest text-text-dim">{t('dashboard.activity.title')}</h3>
            <div className="flex gap-4 text-[10px] font-bold">
              <span className="text-accent border-b border-accent pb-1 cursor-pointer">{t('dashboard.activity.all')}</span>
              <span className="text-text-dim hover:text-text-primary cursor-pointer transition-colors">{t('dashboard.activity.intelligence')}</span>
              <span className="text-text-dim hover:text-text-primary cursor-pointer transition-colors">{t('dashboard.activity.decisions')}</span>
            </div>
          </div>

          <div className="space-y-4">
            {feedItems.map((item, index) => (
              <motion.div 
                key={item.id}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                onClick={() => handleItemClick(item)}
                className="card hover:bg-black/[0.02] transition-colors group relative overflow-hidden cursor-pointer"
              >
                {item.status === 'high' && (
                  <div className="absolute left-0 top-0 bottom-0 w-1 bg-accent"></div>
                )}
                <div className="flex gap-4">
                  <div className="flex-shrink-0 mt-1">
                    <div className={`w-8 h-8 rounded-sm flex items-center justify-center ${
                      item.type === 'intelligence' ? 'bg-blue-500/10 text-blue-500' : 
                      item.type === 'decision' ? 'bg-accent/10 text-accent' : 'bg-green-500/10 text-green-500'
                    }`}>
                      {item.type === 'intelligence' ? <Globe size={16} /> : 
                       item.type === 'decision' ? <Zap size={16} /> : <Database size={16} />}
                    </div>
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between mb-1">
                      <div className="flex items-center gap-2">
                        <span className="text-[10px] font-mono font-bold text-text-dim uppercase">{item.agent}</span>
                        <span className="text-[10px] text-text-dim">•</span>
                        <span className="text-[10px] text-text-dim font-mono">{item.time}</span>
                      </div>
                      <button className="text-text-dim hover:text-text-primary opacity-0 group-hover:opacity-100 transition-all">
                        <MoreVertical size={14} />
                      </button>
                    </div>
                    <h4 className="text-sm font-bold mb-1">{item.title}</h4>
                    <p className="text-xs text-text-dim leading-relaxed mb-3">{item.description}</p>
                    <div className="flex items-center gap-2">
                      {item.tags.map(tag => (
                        <span key={tag} className="text-[9px] font-bold bg-black/5 border border-border px-1.5 py-0.5 rounded-sm text-text-dim">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <button className="w-full py-3 border border-dashed border-border rounded-sm text-xs font-bold text-text-dim hover:text-text-primary hover:border-text-dim transition-all">
            {t('dashboard.activity.load_more')}
          </button>
        </div>

        {/* Sidebar Info */}
        <div className="space-y-8">
          {/* Strategic Forecast */}
          <div className="card">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-xs font-bold uppercase tracking-widest text-text-dim">{t('dashboard.forecast')} (Q2-Q4)</h3>
              <span className="text-[10px] font-mono text-accent">{t('dashboard.forecast.predictive')}</span>
            </div>
            <div className="space-y-6">
              <div className="relative h-32 flex items-end gap-2 px-2 border-b border-border/50 pb-2">
                {/* Historical */}
                {[45, 52, 48, 60].map((h, i) => (
                  <div key={`h-${i}`} className="flex-1 bg-text-dim/20 rounded-t-sm relative group">
                    <div className="absolute inset-0 bg-text-dim/10 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                    <div style={{ height: `${h}%` }} className="w-full bg-text-dim/30 rounded-t-sm"></div>
                  </div>
                ))}
                {/* Forecast */}
                {[65, 72, 85, 92].map((h, i) => (
                  <div key={`f-${i}`} className="flex-1 bg-accent/10 rounded-t-sm relative group border-x border-t border-accent/20 border-dashed">
                    <div className="absolute inset-0 bg-accent/5 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                    <div style={{ height: `${h}%` }} className="w-full bg-accent/40 rounded-t-sm"></div>
                    {i === 3 && <div className="absolute -top-6 left-1/2 -translate-x-1/2 text-[10px] font-bold text-accent">92%</div>}
                  </div>
                ))}
              </div>
              <div className="flex justify-between text-[9px] text-text-dim font-mono uppercase tracking-widest">
                <span>Q1 ({t('dashboard.forecast.actual')})</span>
                <span>Q4 ({t('dashboard.forecast.predicted')})</span>
              </div>
              <p className="text-[11px] text-text-dim leading-relaxed">
                <span className="text-accent font-bold">{t('dashboard.forecast.projection')}:</span> Based on current Nanjing factory efficiency gains and premium market penetration, we are on track to exceed Q4 targets by <span className="text-text-primary font-bold">12.4%</span>.
              </p>
            </div>
          </div>

          {/* Workforce Queue */}
          <div className="card">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-xs font-bold uppercase tracking-widest text-text-dim">{t('dashboard.workforce.queue')}</h3>
              <span className="text-[10px] font-mono text-accent">{t('dashboard.workforce.live')}</span>
            </div>
            <div className="space-y-4">
              {[1, 2, 3].map((i) => (
                <div key={i} className="flex items-center gap-3 p-2 rounded-sm hover:bg-black/5 transition-colors cursor-pointer group">
                  <div className="w-10 h-10 bg-black/5 rounded-sm flex items-center justify-center border border-border group-hover:border-accent/30 transition-colors">
                    <Cpu size={18} className="text-text-dim group-hover:text-accent transition-colors" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex justify-between mb-1">
                      <p className="text-xs font-bold truncate">Agent-X{i}04</p>
                      <span className="text-[9px] font-mono text-green-500">{t('common.active')}</span>
                    </div>
                    <div className="w-full bg-black/5 h-1 rounded-full overflow-hidden">
                      <div className="bg-accent h-full" style={{ width: `${Math.random() * 100}%` }}></div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <button className="w-full mt-6 py-2 bg-black/5 border border-border text-[10px] font-bold uppercase tracking-widest hover:bg-black/10 transition-colors">
              {t('dashboard.workforce.manage')}
            </button>
          </div>

          {/* Strategic Alignment */}
          <div className="card bg-accent/5 border-accent/20">
            <div className="flex items-center gap-2 mb-4">
              <TrendingUp size={16} className="text-accent" />
              <h3 className="text-xs font-bold uppercase tracking-widest text-accent">{t('dashboard.alignment.title')}</h3>
            </div>
            <div className="space-y-4">
              <div className="flex justify-between items-end">
                <p className="text-xs text-text-dim">{t('dashboard.alignment.score')}</p>
                <p className="text-2xl font-bold tracking-tight">88.4</p>
              </div>
              <div className="h-24 flex items-end gap-1 px-1">
                {[40, 65, 45, 80, 55, 90, 75, 85, 95, 88].map((h, i) => (
                  <div 
                    key={i} 
                    className="flex-1 bg-accent/20 rounded-t-sm hover:bg-accent transition-colors cursor-help"
                    style={{ height: `${h}%` }}
                    title={`Period ${i + 1}: ${h}%`}
                  ></div>
                ))}
              </div>
              <p className="text-[10px] text-text-dim leading-relaxed italic">
                "Alignment has increased by 4.2% since the last strategic pivot in Q4. Market Sentinel predicts continued stability."
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
