import React, { useState, useEffect } from 'react';
import { 
  Target, 
  TrendingUp, 
  AlertCircle, 
  CheckCircle2, 
  ArrowLeft,
  Share2,
  MoreVertical,
  Cpu,
  Database,
  Link as LinkIcon,
  Search,
  ChevronRight,
  Info,
  Activity,
  Plus,
  Filter,
  LayoutGrid,
  List,
  Zap,
  ChevronDown,
  X,
  Save,
  Upload,
  Play
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { Link } from 'react-router-dom';
import { useStrategicContext } from '../context/StrategicContext';
import { useLanguage } from '../context/LanguageContext';

const objectives = [
  {
    id: 'KR1-2026',
    title: 'Social Media Brand Building & High-Quality Traffic Growth',
    status: 'ON TRACK',
    description: 'Focusing on high-quality traffic growth through social media brand building and AI-driven lead generation to drive e-commerce and direct sales.',
    keyResults: [
      { 
        id: 'KR1.1', 
        title: 'E-commerce Referral Traffic Growth', 
        current: '35w', 
        target: '365w', 
        status: 'on-track', 
        progress: 10, 
        owner: 'Zong Yingli', 
        nextStep: 'Optimize Q2 social media conversion funnels for 618 festival.',
        quarters: [
          { label: 'Q1', target: '35w', actual: '35w', status: 'hit' },
          { label: 'Q2', target: '130w', actual: '-', status: 'pending' },
          { label: 'Q3', target: '90w', actual: '-', status: 'pending' },
          { label: 'Q4', target: '110w', actual: '-', status: 'pending' },
        ],
        indicators: [
          { id: 'LI1', title: 'Social Media Conversion Rate', current: '3.2%', target: '4.5%', owner: 'Li Na' },
        ]
      },
      { 
        id: 'KR1.2', 
        title: 'AI-Powered Direct Sales Lead Generation', 
        current: '0', 
        target: '200w', 
        status: 'on-track', 
        progress: 0, 
        owner: 'Wang Zhe', 
        nextStep: 'Initialize AI lead distribution system for regional direct sellers.',
        quarters: [
          { label: 'Q1', target: '0', actual: '0', status: 'pending' },
          { label: 'Q2', target: '40w', actual: '-', status: 'pending' },
          { label: 'Q3', target: '70w', actual: '-', status: 'pending' },
          { label: 'Q4', target: '90w', actual: '-', status: 'pending' },
        ],
        indicators: [
          { id: 'LI1', title: 'AI Agent Response Accuracy', current: '85%', target: '95%', owner: 'Zhang Wei' },
        ]
      },
    ],
    reasoning: [
      { step: '01', label: 'TRAFFIC ANALYSIS', text: 'Monitoring social media conversion rates vs. e-commerce jump targets.' },
      { step: '02', label: 'AI ENABLEMENT', text: 'Deploying AI agents to assist direct sellers in lead qualification.' },
    ]
  },
  {
    id: 'OBJ-2024-008',
    title: 'AO Smith China: Premium Market Leadership',
    status: 'ON TRACK',
    description: 'Consolidating leadership in the premium water heater and water purification segments through technological innovation, multi-channel integration, and AI-driven service excellence.',
    keyResults: [
      { 
        id: 'KR1', 
        title: 'Premium Segment Market Share (Tier 1 Cities)', 
        current: '28.5%', 
        target: '35.0%', 
        status: 'on-track', 
        progress: 45, 
        owner: 'Zhang Wei', 
        nextStep: 'Launch AI-Enabled Heat Pump series in Shanghai/Beijing.',
        quarters: [
          { label: 'Q1', target: '29%', actual: '28.5%', status: 'miss' },
          { label: 'Q2', target: '31%', actual: '-', status: 'pending' },
          { label: 'Q3', target: '33%', actual: '-', status: 'pending' },
          { label: 'Q4', target: '35%', actual: '-', status: 'pending' },
        ],
        indicators: [
          { id: 'LI1', title: 'High-End Retail Store Conversion', current: '12%', target: '18%', owner: 'Li Na' },
          { id: 'LI2', title: 'Digital Brand Sentiment Score', current: '88', target: '95', owner: 'Wang Fang' },
        ]
      },
      { 
        id: 'KR2', 
        title: 'Nanjing Smart Factory Efficiency', 
        current: '92.4%', 
        target: '98.0%', 
        status: 'on-track', 
        progress: 65, 
        owner: 'Chen Jun', 
        nextStep: 'Deploy 42 new autonomous quality inspection agents.',
        quarters: [
          { label: 'Q1', target: '93%', actual: '92.4%', status: 'miss' },
          { label: 'Q2', target: '95%', actual: '-', status: 'pending' },
          { label: 'Q3', target: '96%', actual: '-', status: 'pending' },
          { label: 'Q4', target: '98%', actual: '-', status: 'pending' },
        ],
        indicators: [
          { id: 'LI1', title: 'Manufacturing Lead Time (Days)', current: '4.2', target: '3.5', owner: 'Liu Yang' },
          { id: 'LI2', title: 'Zero-Defect Production Rate', current: '99.8%', target: '99.95%', owner: 'Sun Qiang' },
        ]
      },
    ],
    reasoning: [
      { step: '01', label: 'TRAFFIC ANALYSIS', text: 'Monitoring social media conversion rates vs. e-commerce jump targets.' },
      { step: '02', label: 'COP EFFICIENCY', text: 'Optimizing mid-platform lead distribution for Q2 peak.' },
      { step: '03', label: 'MARKET PENETRATION', text: 'Analyzing price segment expansion impact on online market share.' },
    ]
  },
  {
    id: 'OBJ-2024-007',
    title: 'Commercial Business Profitable Growth',
    status: 'ON TRACK',
    description: 'Driving profitability in the commercial HVAC sector by leveraging AI-LINK dual-energy systems and optimizing BOT sales models.',
    keyResults: [
      { 
        id: 'KR1', 
        title: 'BOT Model Sales Invoicing Contribution', 
        current: '32.3M', 
        target: '30M', 
        status: 'on-track', 
        progress: 100, 
        owner: 'Wu Xiaobo', 
        nextStep: '1.11 BG-H7 Henan, Hebei, Shandong regional installation...',
        quarters: [
          { label: 'Q1', target: '30M', actual: '32.3M', status: 'hit' },
          { label: 'Q2', target: '35M', actual: '-', status: 'pending' },
          { label: 'Q3', target: '40M', actual: '-', status: 'pending' },
          { label: 'Q4', target: '45M', actual: '-', status: 'pending' },
        ],
        indicators: [
          { id: 'LI1', title: 'Mentor Training & Certification', current: '136', target: '>=50%', owner: 'Guo Xin' },
        ]
      },
    ],
    reasoning: [
      { step: '01', label: 'MARKET ANALYSIS', text: 'Analyzing BOT model performance in Northern China regions.' },
      { step: '02', label: 'SYSTEM SYNERGY', text: 'Evaluating AI-LINK dual-energy adoption rates in commercial sectors.' },
    ]
  },
  {
    id: 'OBJ-2859310',
    title: 'Build and Develop Great Leaders',
    status: 'ON TRACK',
    description: 'Cultivating a robust leadership pipeline through systematic training, mentorship, and performance-based internal mobility.',
    keyResults: [
      { 
        id: 'KR1', 
        title: 'Leadership Training Completion Rate', 
        current: '65%', 
        target: '95%', 
        status: 'on-track', 
        progress: 68, 
        owner: 'Chen Wei', 
        nextStep: 'Launch Q2 Executive Leadership Workshop series.',
        quarters: [
          { label: 'Q1', target: '60%', actual: '65%', status: 'hit' },
          { label: 'Q2', target: '75%', actual: '-', status: 'pending' },
          { label: 'Q3', target: '85%', actual: '-', status: 'pending' },
          { label: 'Q4', target: '95%', actual: '-', status: 'pending' },
        ],
        indicators: [
          { id: 'LI1', title: 'Mentorship Program Participation', current: '42%', target: '60%', owner: 'Zhang Min' },
          { id: 'LI2', title: 'Leadership Competency Assessment Score', current: '3.8/5', target: '4.5/5', owner: 'Li Qiang' },
        ]
      },
    ],
    reasoning: [
      { step: '01', label: 'PIPELINE AUDIT', text: 'Identifying high-potential candidates for the 2024 leadership track.' },
      { step: '02', label: 'CURRICULUM REVIEW', text: 'Updating training modules to include AI-driven decision making.' },
    ]
  },
  {
    id: 'OBJ-2859842',
    title: 'Performance-Oriented Culture',
    status: 'AT RISK',
    description: 'Embedding a high-performance mindset by aligning individual OKRs with corporate strategy and enhancing recognition systems.',
    keyResults: [
      { 
        id: 'KR1', 
        title: 'OKR Alignment Across Departments', 
        current: '72%', 
        target: '100%', 
        status: 'at-risk', 
        progress: 72, 
        owner: 'Wang Lin', 
        nextStep: 'Conduct alignment audits for underperforming business units.',
        quarters: [
          { label: 'Q1', target: '80%', actual: '72%', status: 'miss' },
          { label: 'Q2', target: '90%', actual: '-', status: 'pending' },
          { label: 'Q3', target: '95%', actual: '-', status: 'pending' },
          { label: 'Q4', target: '100%', actual: '-', status: 'pending' },
        ],
        indicators: [
          { id: 'LI1', title: 'Bi-weekly OKR Check-in Frequency', current: '1.2', target: '2.0', owner: 'Liu Yang' },
          { id: 'LI2', title: 'Peer Recognition Platform Usage', current: '240', target: '500', owner: 'Zhao Lei' },
        ]
      },
    ],
    reasoning: [
      { step: '01', label: 'CULTURE SURVEY', text: 'Analyzing feedback from the Q1 employee engagement survey.' },
      { step: '02', label: 'ALIGNMENT GAP', text: 'Identifying disconnects between regional sales targets and global strategy.' },
    ]
  }
];

const leadingIndicatorStats = [
  { id: 1, name: 'Agent Reasoning Confidence', value: '0.94', trend: 'up', source: 'XBrain Core' },
  { id: 2, name: 'Data Ingestion Freshness', value: '14m', trend: 'down', source: 'Knowledge Graph' },
  { id: 3, name: 'Strategic Gap Closure Rate', value: '+12%', trend: 'up', source: 'Market Sentinel' },
];

export const OKRs: React.FC = () => {
  const { t } = useLanguage();
  const [objs, setObjs] = useState(objectives);
  const [activeObjId, setActiveObjId] = useState(objs[0].id);
  const [isObjSelectorOpen, setIsObjSelectorOpen] = useState(false);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const { openContext } = useStrategicContext();
  
  const activeObj = objs.find(o => o.id === activeObjId) || objs[0];

  useEffect(() => {
    if (activeObj) {
      openContext({
        title: activeObj.title,
        type: 'OKR',
        agentInsight: `Objective ${activeObj.id} is currently ${activeObj.status.toLowerCase()}. I recommend increasing resource allocation for Key Result 2 to ensure Q4 targets are met.`,
        relatedEntities: {
          agents: [
            { id: 'XB-002', name: 'Resource Allocator', status: 'active' },
            { id: 'XB-005', name: 'Strategic Planner', status: 'warning' }
          ],
          decisions: [
            { id: 'DEC-2024-012', title: 'Project Alpha Budget Pivot', impact: 'High' }
          ],
          knowledge: [
            { id: 'K-001', label: 'Q1 Strategic Plan', type: 'DOCUMENT' },
            { id: 'K-002', label: 'Market Analysis 2024', type: 'REPORT' }
          ]
        }
      });
    }
  }, [activeObjId]);

  // Edit Form State
  const [editForm, setEditForm] = useState({
    title: activeObj.title,
    description: activeObj.description
  });

  React.useEffect(() => {
    setEditForm({
      title: activeObj.title,
      description: activeObj.description
    });
  }, [activeObjId, activeObj.title, activeObj.description]);

  const handleSave = () => {
    setObjs(prev => prev.map(o => 
      o.id === activeObjId 
        ? { ...o, title: editForm.title, description: editForm.description }
        : o
    ));
    setIsEditModalOpen(false);
  };

  return (
    <div className="space-y-6">
      {/* Edit Strategy Modal */}
      <AnimatePresence>
        {isEditModalOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsEditModalOpen(false)}
              className="absolute inset-0 bg-black/60 backdrop-blur-sm"
            />
            <motion.div 
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="relative w-full max-w-2xl bg-surface border border-border p-8 shadow-2xl rounded-sm"
            >
              <button 
                onClick={() => setIsEditModalOpen(false)}
                className="absolute top-4 right-4 text-text-dim hover:text-text-primary"
              >
                <X size={20} />
              </button>
              
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 bg-accent/10 rounded-sm flex items-center justify-center text-accent">
                  <Target size={20} />
                </div>
                <div>
                  <h3 className="text-xl font-bold">Refine OKR</h3>
                  <p className="text-text-dim text-xs font-mono uppercase tracking-tighter">{activeObj.id}</p>
                </div>
              </div>

              <div className="space-y-6">
                <div className="space-y-2">
                  <label className="text-[10px] font-bold uppercase tracking-widest text-text-dim">Objective Title</label>
                  <input 
                    type="text" 
                    value={editForm.title}
                    onChange={(e) => setEditForm(prev => ({ ...prev, title: e.target.value }))}
                    className="w-full bg-black/5 border border-border rounded-sm px-4 py-3 text-sm focus:border-accent/50 focus:outline-none transition-colors"
                    placeholder="Enter objective title..."
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-[10px] font-bold uppercase tracking-widest text-text-dim">Strategic Description</label>
                  <textarea 
                    value={editForm.description}
                    onChange={(e) => setEditForm(prev => ({ ...prev, description: e.target.value }))}
                    rows={4}
                    className="w-full bg-black/5 border border-border rounded-sm px-4 py-3 text-sm focus:border-accent/50 focus:outline-none transition-colors resize-none"
                    placeholder="Describe the strategic intent..."
                  />
                </div>

                <div className="p-4 bg-accent/5 border border-accent/10 rounded-sm">
                  <div className="flex items-start gap-3">
                    <Cpu size={16} className="text-accent mt-0.5" />
                    <div>
                      <p className="text-[10px] font-bold text-accent uppercase tracking-widest mb-1">AI Recommendation</p>
                      <p className="text-xs text-text-dim leading-relaxed">
                        Based on current market signals and internal performance data, I recommend focusing on 
                        <span className="text-text-primary font-medium"> "Aggressive market share expansion"</span> 
                        in the description to align with the Q2 traffic influx targets.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="flex justify-end gap-3 mt-8">
                <button 
                  onClick={() => setIsEditModalOpen(false)}
                  className="btn-secondary px-6"
                >
                  Cancel
                </button>
                <button 
                  onClick={handleSave}
                  className="btn-primary px-6 flex items-center gap-2"
                >
                  <Save size={14} />
                  Save Changes
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* Top Navigation & Objective Selector */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-border/30 pb-6">
        <div className="flex items-center gap-4">
          <div className="relative">
            <button 
              onClick={() => setIsObjSelectorOpen(!isObjSelectorOpen)}
              className="flex items-center gap-3 px-4 py-2 bg-surface border border-border hover:border-accent transition-all group rounded-sm"
            >
              <div className="w-8 h-8 bg-accent/10 rounded-sm flex items-center justify-center text-accent">
                <Target size={18} />
              </div>
              <div className="text-left">
                <p className="text-[9px] font-mono font-bold text-text-dim uppercase tracking-tighter">{t('okrs.subtitle')}</p>
                <h2 className="text-sm font-bold truncate max-w-[200px]">{activeObj.title}</h2>
              </div>
              <ChevronDown size={16} className={`text-text-dim transition-transform ${isObjSelectorOpen ? 'rotate-180' : ''}`} />
            </button>

            {/* Dropdown Selector */}
            {isObjSelectorOpen && (
              <div className="absolute top-full left-0 mt-2 w-80 bg-surface border border-border shadow-2xl z-50 animate-in fade-in zoom-in-95 duration-200">
                <div className="p-2 border-b border-border/50">
                  <div className="relative">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-text-dim" size={14} />
                    <input 
                      type="text" 
                      placeholder="Search objectives..." 
                      className="w-full bg-black/5 border-none text-xs py-2 pl-9 focus:ring-1 focus:ring-accent/30 rounded-sm"
                    />
                  </div>
                </div>
                <div className="max-h-96 overflow-y-auto p-1">
                  {objs.map((obj) => (
                    <button
                      key={obj.id}
                      onClick={() => {
                        setActiveObjId(obj.id);
                        setIsObjSelectorOpen(false);
                      }}
                      className={`w-full text-left p-3 hover:bg-accent/5 rounded-sm transition-colors group ${
                        activeObjId === obj.id ? 'bg-accent/10 border-l-2 border-accent' : ''
                      }`}
                    >
                      <div className="flex justify-between items-start mb-1">
                        <div className="flex flex-col">
                          <span className="text-[9px] font-mono text-text-dim">{obj.id}</span>
                          <p className="text-xs font-bold truncate group-hover:text-accent transition-colors">{obj.title}</p>
                        </div>
                        <div className="flex flex-col items-end gap-1">
                          <span className={`text-[8px] font-bold px-1 rounded-sm ${
                            obj.status === 'ON TRACK' ? 'bg-green-500/10 text-green-500' : 'bg-orange-500/10 text-orange-500'
                          }`}>{obj.status}</span>
                          {obj.id === 'OBJ-2024-001' && (
                            <span className="text-[7px] font-bold text-orange-500 flex items-center gap-0.5">
                              <AlertCircle size={8} /> CAPABILITY GAP
                            </span>
                          )}
                        </div>
                      </div>
                    </button>
                  ))}
                </div>
                <div className="p-2 border-t border-border/50 bg-black/5 flex flex-col gap-1">
                  <button className="w-full py-2 flex items-center justify-center gap-2 text-[10px] font-bold text-accent hover:bg-accent/10 transition-all rounded-sm">
                    <Plus size={12} /> PROPOSE NEW OBJECTIVE
                  </button>
                  <Link 
                    to="/imports"
                    className="w-full py-2 flex items-center justify-center gap-2 text-[10px] font-bold text-text-dim hover:bg-black/5 transition-all rounded-sm"
                  >
                    <Upload size={12} /> {t('nav.imports')}
                  </Link>
                </div>
              </div>
            )}
          </div>

          <div className="h-8 w-[1px] bg-border/30 hidden md:block"></div>

          <div className="flex items-center gap-6">
            <div className="text-center">
              <p className="text-[9px] font-mono text-text-dim uppercase">{t('okrs.progress')}</p>
              <p className="text-sm font-bold font-mono">
                {Math.round(activeObj.keyResults.reduce((acc, kr) => acc + kr.progress, 0) / activeObj.keyResults.length)}%
              </p>
            </div>
            <div className="text-center">
              <p className="text-[9px] font-mono text-text-dim uppercase">{t('okrs.krs')}</p>
              <p className="text-sm font-bold font-mono">{activeObj.keyResults.length}</p>
            </div>
            <div className="text-center">
              <p className="text-[9px] font-mono text-text-dim uppercase">{t('okrs.indicators')}</p>
              <p className="text-sm font-bold font-mono">
                {activeObj.keyResults.reduce((acc, kr) => acc + (kr.indicators?.length || 0), 0)}
              </p>
            </div>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <button className="btn-secondary px-4 py-2 text-xs flex items-center gap-2 bg-orange-600/10 text-orange-600 border-orange-600/20 hover:bg-orange-600/20">
            <Play size={14} />
            {t('okrs.whatif')}
          </button>
          <Link to="/imports" className="btn-secondary px-4 py-2 text-xs flex items-center gap-2">
            <Upload size={14} />
            {t('nav.imports')}
          </Link>
          <button className="p-2 hover:bg-black/5 rounded-sm text-text-dim hover:text-text-primary transition-all"><Share2 size={18} /></button>
          <button className="p-2 hover:bg-black/5 rounded-sm text-text-dim hover:text-text-primary transition-all"><MoreVertical size={18} /></button>
          <button 
            onClick={() => setIsEditModalOpen(true)}
            className="btn-primary px-4 py-2 text-xs"
          >
            {t('okrs.refine')}
          </button>
        </div>
      </div>

      {/* Main OKR Display */}
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
        {/* Left: Strategy Cascade Tree */}
        <div className="lg:col-span-3 space-y-6">
          {/* Objective Context Card */}
          <div className="card p-6 bg-surface/50 border-accent/10">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-accent/5 border border-accent/20 rounded-sm flex items-center justify-center text-accent flex-shrink-0">
                <Target size={24} />
              </div>
              <div className="space-y-2">
                <div className="flex items-center gap-3">
                  <h1 className="text-2xl font-bold tracking-tight">{activeObj.title}</h1>
                  <span className={`px-2 py-0.5 text-[10px] font-bold rounded-sm border ${
                    activeObj.status === 'ON TRACK' ? 'bg-green-500/10 text-green-500 border-green-500/20' : 'bg-orange-500/10 text-orange-500 border-orange-500/20'
                  }`}>{activeObj.status}</span>
                </div>
                <p className="text-text-dim text-sm leading-relaxed max-w-4xl">
                  {activeObj.description}
                </p>
              </div>
            </div>
          </div>

          {/* Key Results & Indicators Tree */}
          <div className="space-y-4">
            <div className="flex items-center justify-between px-2">
              <h3 className="text-[10px] font-bold uppercase tracking-[0.2em] text-text-dim">{t('okrs.cascade')}</h3>
              <div className="flex items-center gap-4 text-[9px] font-mono text-text-dim">
                <span className="flex items-center gap-1.5"><div className="w-1.5 h-1.5 bg-green-500 rounded-full"></div> {t('okrs.hit')}</span>
                <span className="flex items-center gap-1.5"><div className="w-1.5 h-1.5 bg-orange-500 rounded-full"></div> {t('okrs.miss')}</span>
              </div>
            </div>

            <div className="space-y-6 relative">
              {/* Vertical line connecting KRs */}
              <div className="absolute left-6 top-4 bottom-4 w-[1px] bg-border/30"></div>

              {activeObj.keyResults.map((kr, krIdx) => (
                <div key={kr.id} className="relative pl-12 group">
                  {/* Connector line from main vertical line to KR */}
                  <div className="absolute left-6 top-8 w-6 h-[1px] bg-border/30"></div>
                  
                  {/* KR Card */}
                  <div className="card p-5 bg-surface/80 hover:border-accent/30 transition-all group/kr">
                    <div className="grid grid-cols-12 gap-6">
                      <div className="col-span-12 md:col-span-6">
                        <div className="flex items-center gap-3 mb-4">
                          <div className="w-8 h-8 rounded-sm bg-accent/10 flex items-center justify-center text-xs font-mono font-bold text-accent border border-accent/20">
                            KR{krIdx + 1}
                          </div>
                          <div>
                            <h4 className="text-sm font-bold group-hover/kr:text-accent transition-colors">{kr.title}</h4>
                            <p className="text-[10px] text-text-dim font-mono">{kr.owner} • {t('okrs.owner')}</p>
                          </div>
                        </div>
                        
                        {/* Quarterly Progress */}
                        <div className="flex gap-1.5">
                          {kr.quarters.map((q) => (
                            <div key={q.label} className="flex-1 p-1.5 bg-black/5 rounded-sm border border-border/20 text-center relative group/q">
                              <div className="flex justify-between items-center mb-0.5">
                                <span className="text-[7px] font-bold text-text-dim">{q.label}</span>
                                {q.status !== 'pending' && (
                                  <div className={`w-1 h-1 rounded-full ${q.status === 'hit' ? 'bg-green-500' : 'bg-orange-500'}`}></div>
                                )}
                              </div>
                              <p className="text-[9px] font-mono font-bold">{q.actual}</p>
                              
                              {/* Tooltip */}
                              <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 opacity-0 group-hover/q:opacity-100 transition-opacity pointer-events-none z-30">
                                <div className="bg-surface border border-border p-2 rounded-sm shadow-xl whitespace-nowrap text-[8px] font-mono">
                                  <span className="text-text-dim">Target:</span> {q.target}
                                </div>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>

                      <div className="col-span-6 md:col-span-3 flex flex-col justify-center border-l border-border/20 pl-6">
                        <p className="text-xl font-bold font-mono tracking-tighter">{kr.current}</p>
                        <p className="text-[9px] text-text-dim uppercase tracking-widest mb-2">Current / {kr.target}</p>
                        <div className="h-1 bg-black/10 rounded-full overflow-hidden">
                          <motion.div 
                            initial={{ width: 0 }}
                            animate={{ width: `${kr.progress}%` }}
                            className="h-full bg-accent"
                          />
                        </div>
                        <p className="text-[9px] font-mono font-bold text-accent mt-1">{kr.progress}% Completed</p>
                      </div>

                      <div className="col-span-6 md:col-span-3 flex flex-col justify-center border-l border-border/20 pl-6 bg-accent/[0.02] rounded-r-sm">
                        <div className="flex items-center gap-2 mb-1">
                          <Zap size={10} className="text-accent" />
                          <p className="text-[8px] font-bold text-accent uppercase tracking-widest">{t('okrs.next_action')}</p>
                        </div>
                        <p className="text-[10px] leading-tight text-text-primary line-clamp-3">{kr.nextStep}</p>
                      </div>
                    </div>
                  </div>

                  {/* Leading Indicators (Nested) */}
                  {kr.indicators && kr.indicators.length > 0 && (
                    <div className="mt-3 space-y-2 relative pl-8">
                      {/* Vertical line for indicators */}
                      <div className="absolute left-0 top-0 bottom-4 w-[1px] bg-border/20"></div>
                      
                      {kr.indicators.map((li) => (
                        <div key={li.id} className="relative flex items-center gap-3">
                          {/* Horizontal connector to indicator */}
                          <div className="absolute -left-8 w-8 h-[1px] bg-border/20"></div>
                          
                          <div className="flex-1 flex items-center justify-between p-3 bg-surface/30 border border-dashed border-border/50 rounded-sm hover:border-accent/20 hover:bg-accent/[0.01] transition-all group/li">
                            <div className="flex items-center gap-3">
                              <div className="w-1.5 h-1.5 rounded-full border border-accent/40 group-hover/li:bg-accent transition-all"></div>
                              <div>
                                <h5 className="text-xs font-bold group-hover/li:text-accent transition-colors">{li.title}</h5>
                                <p className="text-[8px] text-text-dim font-mono uppercase tracking-tighter">{li.id} • {li.owner}</p>
                              </div>
                            </div>
                            <div className="flex items-center gap-6">
                              <div className="text-right">
                                <p className="text-[10px] font-mono font-bold">{li.current}</p>
                                <p className="text-[7px] text-text-dim uppercase">{t('okrs.actual')}</p>
                              </div>
                              <div className="text-right">
                                <p className="text-[10px] font-mono font-bold text-text-dim">{li.target}</p>
                                <p className="text-[7px] text-text-dim uppercase">{t('okrs.target')}</p>
                              </div>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right: Intelligence & Context */}
        <div className="space-y-6">
          {/* Strategic Alignment Heatmap (Executive View) */}
          <div className="card p-5">
            <div className="flex items-center justify-between mb-5">
              <div className="flex items-center gap-2">
                <LayoutGrid size={14} className="text-text-dim" />
                <h3 className="text-[10px] font-bold uppercase tracking-widest text-text-dim">{t('okrs.heatmap')}</h3>
              </div>
              <span className="text-[9px] font-mono text-accent">{t('okrs.by_dept')}</span>
            </div>
            <div className="grid grid-cols-5 gap-1.5 mb-4">
              {Array.from({ length: 25 }).map((_, i) => {
                const colors = ['bg-green-500', 'bg-green-500/60', 'bg-orange-500/40', 'bg-green-500/80', 'bg-orange-500'];
                const color = colors[Math.floor(Math.random() * colors.length)];
                return (
                  <div 
                    key={i} 
                    className={`aspect-square rounded-sm ${color} opacity-80 hover:opacity-100 transition-opacity cursor-help`}
                    title={`Business Unit ${i + 1}: ${color.includes('green') ? 'Aligned' : 'At Risk'}`}
                  ></div>
                );
              })}
            </div>
            <div className="flex justify-between text-[8px] font-bold text-text-dim uppercase tracking-tighter">
              <span className="flex items-center gap-1"><div className="w-1.5 h-1.5 bg-orange-500 rounded-full"></div> Critical Gap</span>
              <span className="flex items-center gap-1"><div className="w-1.5 h-1.5 bg-green-500 rounded-full"></div> Optimized</span>
            </div>
          </div>

          {/* Agent Reasoning Trace */}
          <div className="card border-accent/20 bg-accent/[0.02] p-5">
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-2">
                <Cpu size={16} className="text-accent" />
                <h3 className="text-[10px] font-bold uppercase tracking-widest text-accent">{t('okrs.reasoning')}</h3>
              </div>
              <div className="w-1.5 h-1.5 bg-accent rounded-full animate-pulse"></div>
            </div>
            
            <div className="space-y-6 relative">
              <div className="absolute left-[5px] top-2 bottom-2 w-[1px] bg-gradient-to-b from-accent/30 via-accent/10 to-transparent"></div>
              
              {activeObj.reasoning.map((step, i) => (
                <div key={i} className="relative pl-6 group">
                  <div className="absolute left-0 top-1 w-2.5 h-2.5 bg-bg rounded-full border border-accent group-hover:scale-110 transition-transform">
                    <div className="absolute inset-0.5 bg-accent rounded-full"></div>
                  </div>
                  <p className="text-[9px] font-mono text-accent font-bold mb-1 tracking-tighter uppercase">{t('okrs.step')} {step.step}: {step.label}</p>
                  <p className="text-[11px] leading-relaxed text-text-primary">{step.text}</p>
                </div>
              ))}

              <div className="relative pl-6">
                <div className="absolute left-[1px] top-1 w-2 h-2 bg-black/5 rounded-full border border-dashed border-text-dim/30"></div>
                <p className="text-[9px] font-mono text-text-dim mb-1 tracking-tighter uppercase">{t('okrs.next_step')}</p>
                <p className="text-[11px] text-text-dim italic">Synthesizing Q2 signals...</p>
              </div>
            </div>
            
            <button className="w-full mt-8 py-2.5 bg-accent/5 border border-accent/10 text-accent text-[9px] font-bold uppercase tracking-widest hover:bg-accent/10 transition-all flex items-center justify-center gap-2 group">
              {t('okrs.view_logic')}
              <ChevronRight size={12} className="group-hover:translate-x-1 transition-transform" />
            </button>
          </div>

          {/* System Context Stats */}
          <div className="card p-5">
            <div className="flex items-center gap-2 mb-5">
              <Info size={14} className="text-text-dim" />
              <h3 className="text-[10px] font-bold uppercase tracking-widest text-text-dim">{t('okrs.system_context')}</h3>
            </div>
            <div className="space-y-4">
              {leadingIndicatorStats.map((indicator) => (
                <div key={indicator.id} className="p-3 bg-black/5 rounded-sm border border-border/20">
                  <div className="flex items-center justify-between mb-1">
                    <p className="text-[9px] text-text-dim uppercase font-bold">{indicator.name}</p>
                    <div className={indicator.trend === 'up' ? 'text-green-500' : 'text-orange-500'}>
                      <TrendingUp size={10} className={indicator.trend === 'down' ? 'rotate-180' : ''} />
                    </div>
                  </div>
                  <div className="flex items-end justify-between">
                    <p className="text-lg font-bold font-mono tracking-tighter leading-none">{indicator.value}</p>
                    <p className="text-[8px] text-text-dim font-mono opacity-60">{indicator.source}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
