import React, { useState } from 'react';
import { 
  FileText, 
  Download, 
  Calendar, 
  TrendingUp, 
  Activity, 
  Zap, 
  Cpu, 
  ArrowRight,
  ChevronRight,
  Clock,
  Filter,
  Share2,
  MoreVertical,
  AlertCircle
} from 'lucide-react';
import { motion } from 'motion/react';
import { useLanguage } from '../context/LanguageContext';

const reports = [
  { 
    id: 'REP-2024-001', 
    title: 'Weekly Strategic Pulse', 
    date: 'Mar 25 - Mar 31, 2024', 
    type: 'Weekly', 
    status: 'Generated',
    highlights: ['OKR-001 progress +4%', 'New market threat identified', '3 Decisions approved']
  },
  { 
    id: 'REP-2024-002', 
    title: 'Monthly Performance Audit', 
    date: 'March 2024', 
    type: 'Monthly', 
    status: 'Draft',
    highlights: ['Overall alignment 88%', 'Workforce efficiency peak', 'R&D budget reallocated']
  },
  { 
    id: 'REP-2024-003', 
    title: 'Quarterly Board Review', 
    date: 'Q1 2024', 
    type: 'Quarterly', 
    status: 'Scheduled',
    highlights: ['Strategic pivot summary', 'Long-term growth projection', 'Resource utilization audit']
  }
];

export const Reports: React.FC = () => {
  const { t } = useLanguage();
  const [selectedType, setSelectedType] = useState('All');

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="flex items-end justify-between">
        <div>
          <p className="label-micro mb-1">{t('reports.subtitle')}</p>
          <h2 className="text-3xl font-bold tracking-tight">{t('reports.title')}</h2>
          <p className="text-text-dim mt-2 max-w-2xl leading-relaxed">
            Automated, board-ready summaries of organizational performance, 
            strategic alignment, and autonomous agent activity.
          </p>
        </div>
        <div className="flex gap-3">
          <button className="btn-secondary flex items-center gap-2 text-xs">
            <Filter size={14} />
            {t('common.filter')}
          </button>
          <button className="btn-primary flex items-center gap-2 text-xs">
            <Plus size={14} />
            {t('reports.generate')}
          </button>
        </div>
      </div>

      {/* AO Smith China Context Banner */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 p-6 bg-accent/5 border border-accent/20 rounded-sm flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-accent/10 rounded-sm flex items-center justify-center text-accent">
              <FileText size={24} />
            </div>
            <div>
              <h4 className="text-lg font-bold">AO Smith China Operations</h4>
              <p className="text-[10px] text-text-dim uppercase tracking-widest">Active Workspace Context</p>
            </div>
          </div>
          <div className="flex gap-12">
            <div className="text-right">
              <p className="text-[10px] text-text-dim uppercase mb-1">Next Report</p>
              <p className="text-xs font-bold">April 7, 2024</p>
            </div>
            <div className="text-right">
              <p className="text-[10px] text-text-dim uppercase mb-1">Auto-Generation</p>
              <p className="text-xs font-bold text-green-500">ENABLED</p>
            </div>
          </div>
        </div>
        
        {/* Quick Action: Ask for Summary */}
        <div className="card bg-black/5 border-dashed flex flex-col justify-center p-6">
          <div className="flex items-center gap-2 mb-3">
            <Cpu size={16} className="text-accent" />
            <h3 className="text-[10px] font-bold uppercase tracking-widest text-accent">Ask XBrain Summary</h3>
          </div>
          <p className="text-[11px] text-text-dim mb-4">"Summarize the last 24 hours of Nanjing Factory efficiency."</p>
          <button className="btn-primary py-2 text-[10px] uppercase tracking-widest">Generate Flash Report</button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Executive Summary (New Section) */}
        <div className="lg:col-span-3 card bg-surface border-l-4 border-accent p-8">
          <div className="flex items-center justify-between mb-8">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-accent/10 rounded-sm flex items-center justify-center text-accent">
                <Zap size={20} />
              </div>
              <div>
                <h3 className="text-xl font-bold">AI-Generated Executive Summary</h3>
                <p className="text-text-dim text-xs font-mono uppercase tracking-tighter">Period: Mar 25 - Mar 31, 2024</p>
              </div>
            </div>
            <div className="flex gap-2">
              <button className="btn-secondary text-[10px] px-3 py-1.5 uppercase tracking-widest flex items-center gap-2">
                <Share2 size={12} /> {t('reports.share')}
              </button>
              <button className="btn-primary text-[10px] px-3 py-1.5 uppercase tracking-widest flex items-center gap-2">
                <Download size={12} /> {t('reports.download')}
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="space-y-4">
              <h4 className="text-[10px] font-bold uppercase tracking-[0.2em] text-accent border-b border-accent/20 pb-2">Strategic Health</h4>
              <p className="text-xs text-text-dim leading-relaxed">
                Overall strategic alignment is at <span className="text-text-primary font-bold">88.4%</span>. The primary driver is the <span className="text-text-primary font-bold">Nanjing Factory Efficiency</span> OKR, which exceeded targets by 2.4% this week.
              </p>
              <div className="flex items-center gap-2 text-[10px] text-green-500 font-bold">
                <TrendingUp size={12} /> +4.2% vs Last Week
              </div>
            </div>
            <div className="space-y-4">
              <h4 className="text-[10px] font-bold uppercase tracking-[0.2em] text-orange-500 border-b border-orange-500/20 pb-2">Critical Risks</h4>
              <p className="text-xs text-text-dim leading-relaxed">
                A potential <span className="text-orange-500 font-bold">Capability Gap</span> has been identified in "Predictive Maintenance" agents. This poses a risk to the Q3 Nanjing expansion targets.
              </p>
              <div className="flex items-center gap-2 text-[10px] text-orange-500 font-bold">
                <AlertCircle size={12} /> High Impact Risk
              </div>
            </div>
            <div className="space-y-4">
              <h4 className="text-[10px] font-bold uppercase tracking-[0.2em] text-text-dim border-b border-border pb-2">Recommended Actions</h4>
              <ul className="space-y-2">
                <li className="flex items-start gap-2 text-xs text-text-dim">
                  <div className="w-1 h-1 bg-accent rounded-full mt-1.5"></div>
                  Approve DEC-2024-012 for budget reallocation.
                </li>
                <li className="flex items-start gap-2 text-xs text-text-dim">
                  <div className="w-1 h-1 bg-accent rounded-full mt-1.5"></div>
                  Initiate "Predictive Maintenance" agent training.
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Reports List */}
        <div className="lg:col-span-2 space-y-6">
          <div className="flex items-center justify-between">
            <h3 className="text-xs font-bold uppercase tracking-widest text-text-dim">{t('reports.recent')}</h3>
            <div className="flex gap-4 text-[10px] font-bold">
              {['All', 'Weekly', 'Monthly', 'Quarterly'].map(type => (
                <span 
                  key={type}
                  onClick={() => setSelectedType(type)}
                  className={`${selectedType === type ? 'text-accent border-b border-accent' : 'text-text-dim'} pb-1 cursor-pointer transition-all`}
                >
                  {type === 'All' ? t('common.all') : t(`reports.${type.toLowerCase()}`).toUpperCase()}
                </span>
              ))}
            </div>
          </div>

          <div className="space-y-4">
            {reports.filter(r => selectedType === 'All' || r.type === selectedType).map((report, index) => (
              <motion.div 
                key={report.id}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                className="card hover:bg-black/[0.02] transition-colors group cursor-pointer"
              >
                <div className="flex gap-6">
                  <div className="flex-shrink-0 mt-1">
                    <div className={`w-12 h-12 rounded-sm flex items-center justify-center ${
                      report.status === 'Generated' ? 'bg-green-500/10 text-green-500' : 
                      report.status === 'Draft' ? 'bg-blue-500/10 text-blue-500' : 'bg-black/5 text-text-dim'
                    }`}>
                      <FileText size={24} />
                    </div>
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center gap-3">
                        <span className="text-[10px] font-mono font-bold text-text-dim uppercase">{report.id}</span>
                        <span className="text-[10px] text-text-dim">•</span>
                        <span className="text-[10px] text-text-dim font-mono">{report.date}</span>
                      </div>
                      <div className={`px-2 py-0.5 rounded-sm text-[9px] font-bold uppercase tracking-wider ${
                        report.status === 'Generated' ? 'bg-green-500/10 text-green-500' : 
                        report.status === 'Draft' ? 'bg-blue-500/10 text-blue-500' : 'bg-black/5 text-text-dim'
                      }`}>
                        {report.status}
                      </div>
                    </div>
                    <h4 className="text-lg font-bold mb-3 group-hover:text-accent transition-colors">{report.title}</h4>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {report.highlights.map(highlight => (
                        <span key={highlight} className="text-[10px] bg-black/5 border border-border px-2 py-1 rounded-sm text-text-dim">
                          {highlight}
                        </span>
                      ))}
                    </div>
                    <div className="flex items-center gap-4 pt-4 border-t border-border">
                      <button className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest text-accent hover:text-accent/80 transition-colors">
                        <Download size={14} />
                        {t('reports.download')}
                      </button>
                      <button className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest text-text-dim hover:text-text-primary transition-colors">
                        <Share2 size={14} />
                        {t('reports.share')}
                      </button>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Report Configuration */}
        <div className="space-y-8">
          <div className="card">
            <h3 className="text-xs font-bold uppercase tracking-widest text-text-dim mb-6">{t('reports.settings')}</h3>
            <div className="space-y-6">
              <div>
                <label className="text-[10px] font-bold text-text-dim uppercase mb-2 block">Frequency</label>
                <div className="grid grid-cols-2 gap-2">
                  <button className="p-2 bg-accent/10 border border-accent text-accent text-[10px] font-bold rounded-sm">{t('reports.weekly').toUpperCase()}</button>
                  <button className="p-2 bg-black/5 border border-border text-text-dim text-[10px] font-bold rounded-sm hover:bg-black/10">{t('reports.monthly').toUpperCase()}</button>
                </div>
              </div>
              <div>
                <label className="text-[10px] font-bold text-text-dim uppercase mb-2 block">Distribution List</label>
                <div className="space-y-2">
                  {['Executive Board', 'Regional Managers', 'Strategy Team'].map(list => (
                    <div key={list} className="flex items-center justify-between p-2 bg-black/5 rounded-sm">
                      <span className="text-xs">{list}</span>
                      <input type="checkbox" defaultChecked className="accent-accent" />
                    </div>
                  ))}
                </div>
              </div>
              <button className="w-full py-3 bg-accent text-white text-xs font-bold uppercase tracking-widest hover:bg-accent/90 transition-all rounded-sm">
                {t('common.save')}
              </button>
            </div>
          </div>

          <div className="card bg-black/5 border-dashed">
            <div className="flex items-center gap-2 mb-4">
              <Zap size={16} className="text-accent" />
              <h3 className="text-xs font-bold uppercase tracking-widest text-accent">AI Insights Engine</h3>
            </div>
            <p className="text-xs text-text-dim leading-relaxed mb-4">
              "I am currently analyzing the last 7 days of AO Smith China operations. The upcoming weekly report will highlight a 4.2% efficiency gain in the Nanjing facility."
            </p>
            <div className="flex items-center justify-between text-[10px] font-mono text-text-dim">
              <span>Status: Analyzing</span>
              <span>ETA: 14m</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const Plus = ({ size, className }: { size: number, className?: string }) => (
  <svg 
    width={size} 
    height={size} 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2" 
    strokeLinecap="round" 
    strokeLinejoin="round" 
    className={className}
  >
    <line x1="12" y1="5" x2="12" y2="19"></line>
    <line x1="5" y1="12" x2="19" y2="12"></line>
  </svg>
);
