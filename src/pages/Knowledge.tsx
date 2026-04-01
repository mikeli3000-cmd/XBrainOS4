import React, { useState } from 'react';
import { 
  BookOpen, 
  Database, 
  Search, 
  Plus, 
  Settings, 
  Activity, 
  ShieldCheck, 
  Zap, 
  AlertCircle, 
  MoreVertical, 
  ArrowRight,
  FileText,
  Globe,
  Cpu,
  RefreshCw,
  X,
  Upload,
  Link as LinkIcon
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { useLanguage } from '../context/LanguageContext';

const vectorStores = [
  { id: 'VS-001', name: 'China Operations Graph', status: 'active', size: '1.2 GB', nodes: 14242, health: 98 },
  { id: 'VS-002', name: 'Water Heater Market Intel', status: 'active', size: '4.5 GB', nodes: 85000, health: 100 },
  { id: 'VS-003', name: 'Nanjing Factory Performance', status: 'active', size: '0.8 GB', nodes: 8500, health: 95 },
  { id: 'VS-004', name: 'Premium Segment Analysis', status: 'warning', size: '2.1 GB', nodes: 24000, health: 78 },
];

const knowledgeSources = [
  { id: 'KS-001', name: 'AO Smith China 2024 Strategy.pdf', type: 'PDF', date: '2h ago', status: 'indexed' },
  { id: 'KS-002', name: 'Nanjing Production Logs Q1.xlsx', type: 'Excel', date: '15m ago', status: 'processing' },
  { id: 'KS-003', name: 'Competitor Pricing China.csv', type: 'CSV', date: '1h ago', status: 'failed' },
  { id: 'KS-004', name: 'IoT Device Telemetry API', type: 'API', date: '3h ago', status: 'indexed' },
];

export const Knowledge: React.FC = () => {
  const { t } = useLanguage();
  const [isReindexing, setIsReindexing] = useState(false);
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [sources, setSources] = useState(knowledgeSources);

  const handleReindex = () => {
    setIsReindexing(true);
    setTimeout(() => {
      setIsReindexing(false);
    }, 3000);
  };

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="flex items-end justify-between">
        <div>
          <div className="flex items-center gap-2 mb-1">
            <p className="label-micro">{t('knowledge.subtitle')}</p>
            <span className="text-[10px] text-text-dim">•</span>
            <p className="label-micro text-accent">AO SMITH CHINA</p>
          </div>
          <h2 className="text-3xl font-bold tracking-tight">{t('knowledge.title')}</h2>
          <p className="text-text-dim mt-2 max-w-2xl leading-relaxed">
            Manage the organizational truth. Oversee vector stores, ingest new data, 
            and monitor the health of the Retrieval-Augmented Generation (RAG) system.
          </p>
        </div>
        <div className="flex gap-3">
          <button 
            onClick={handleReindex}
            disabled={isReindexing}
            className={`btn-secondary flex items-center gap-2 text-xs ${isReindexing ? 'opacity-50 cursor-not-allowed' : ''}`}
          >
            <RefreshCw size={14} className={isReindexing ? 'animate-spin' : ''} />
            {isReindexing ? t('knowledge.reindexing') : t('knowledge.reindex')}
          </button>
          <button 
            onClick={() => setIsAddModalOpen(true)}
            className="btn-primary flex items-center gap-2 text-xs"
          >
            <Plus size={14} />
            {t('knowledge.add')}
          </button>
        </div>
      </div>

      {/* Add Knowledge Source Modal */}
      <AnimatePresence>
        {isAddModalOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsAddModalOpen(false)}
              className="absolute inset-0 bg-black/60 backdrop-blur-sm"
            />
            <motion.div 
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="relative w-full max-w-lg bg-surface border border-border p-8 shadow-2xl rounded-sm"
            >
              <button 
                onClick={() => setIsAddModalOpen(false)}
                className="absolute top-4 right-4 text-text-dim hover:text-text-primary"
              >
                <X size={20} />
              </button>
              
              <h3 className="text-xl font-bold mb-2">{t('knowledge.add')}</h3>
              <p className="text-text-dim text-sm mb-8">Ingest new data into the organizational knowledge graph.</p>
              
              <div className="grid grid-cols-2 gap-4 mb-8">
                <button className="flex flex-col items-center justify-center p-6 border border-dashed border-border hover:border-accent hover:bg-accent/5 transition-all group rounded-sm">
                  <Upload size={24} className="text-text-dim group-hover:text-accent mb-3" />
                  <span className="text-xs font-bold">Upload File</span>
                  <span className="text-[10px] text-text-dim mt-1">PDF, Excel, CSV, JSON</span>
                </button>
                <button className="flex flex-col items-center justify-center p-6 border border-dashed border-border hover:border-accent hover:bg-accent/5 transition-all group rounded-sm">
                  <Globe size={24} className="text-text-dim group-hover:text-accent mb-3" />
                  <span className="text-xs font-bold">Web URL</span>
                  <span className="text-[10px] text-text-dim mt-1">Crawl website or documentation</span>
                </button>
                <button className="flex flex-col items-center justify-center p-6 border border-dashed border-border hover:border-accent hover:bg-accent/5 transition-all group rounded-sm">
                  <Database size={24} className="text-text-dim group-hover:text-accent mb-3" />
                  <span className="text-xs font-bold">Database</span>
                  <span className="text-[10px] text-text-dim mt-1">Connect SQL or NoSQL source</span>
                </button>
                <button className="flex flex-col items-center justify-center p-6 border border-dashed border-border hover:border-accent hover:bg-accent/5 transition-all group rounded-sm">
                  <LinkIcon size={24} className="text-text-dim group-hover:text-accent mb-3" />
                  <span className="text-xs font-bold">API Connector</span>
                  <span className="text-[10px] text-text-dim mt-1">Custom REST/GraphQL endpoint</span>
                </button>
              </div>
              
              <div className="flex justify-end gap-3">
                <button 
                  onClick={() => setIsAddModalOpen(false)}
                  className="btn-secondary px-6"
                >
                  {t('common.cancel')}
                </button>
                <button className="btn-primary px-6">
                  {t('common.save')}
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        {[
          { label: t('knowledge.nodes'), value: '131,984', icon: Database, color: 'text-accent' },
          { label: t('knowledge.vector_stores'), value: '4 / 4', icon: BookOpen, color: 'text-blue-500' },
          { label: 'Ingestion Rate', value: '1.2 GB/s', icon: Activity, color: 'text-green-500' },
          { label: t('knowledge.latency'), value: '14ms', icon: Zap, color: 'text-orange-500' },
        ].map((stat, index) => (
          <div key={stat.label} className="card">
            <div className="flex items-center justify-between mb-4">
              <div className={`p-2 rounded-sm bg-black/5 ${stat.color}`}>
                <stat.icon size={18} />
              </div>
              <span className="text-[10px] font-mono text-text-dim">LIVE</span>
            </div>
            <p className="text-text-dim text-xs font-medium mb-1">{stat.label}</p>
            <h3 className="text-2xl font-bold tracking-tight">{stat.value}</h3>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Vector Stores */}
        <div className="lg:col-span-2 space-y-8">
          {/* Strategic Insights (Executive View) */}
          <div className="card bg-accent/5 border-accent/20 p-6">
            <div className="flex items-center gap-2 mb-6">
              <Cpu size={18} className="text-accent" />
              <h3 className="text-xs font-bold uppercase tracking-widest text-accent">Strategic Insights Synthesis</h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-3">
                <div className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 bg-accent rounded-full"></div>
                  <h4 className="text-xs font-bold uppercase tracking-tighter">Market Sentiment Shift</h4>
                </div>
                <p className="text-[11px] text-text-dim leading-relaxed">
                  Cross-referencing <span className="text-text-primary font-medium">Tmall reviews</span> with <span className="text-text-primary font-medium">competitor pricing logs</span> indicates a 15% increase in demand for "Smart Eco" features in Tier-2 cities.
                </p>
                <div className="flex items-center gap-2 text-[9px] font-mono text-accent">
                  <span>Confidence: 0.92</span>
                  <span>•</span>
                  <span>Sources: 124</span>
                </div>
              </div>
              <div className="space-y-3">
                <div className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 bg-orange-500 rounded-full"></div>
                  <h4 className="text-xs font-bold uppercase tracking-tighter">Production Bottleneck Risk</h4>
                </div>
                <p className="text-[11px] text-text-dim leading-relaxed">
                  IoT telemetry from <span className="text-text-primary font-medium">Nanjing Line 4</span> shows a recurring vibration pattern. Predicted failure within 14 days if current load persists.
                </p>
                <div className="flex items-center gap-2 text-[9px] font-mono text-orange-500">
                  <span>Risk Level: High</span>
                  <span>•</span>
                  <span>Impact: OKR-KR2</span>
                </div>
              </div>
            </div>
            <button className="w-full mt-6 py-2 border border-dashed border-accent/30 text-[10px] font-bold uppercase tracking-widest text-accent hover:bg-accent/10 transition-all">
              Generate Deep-Dive Analysis
            </button>
          </div>

          <div className="space-y-6">
            <div className="flex items-center justify-between">
              <h3 className="text-xs font-bold uppercase tracking-widest text-text-dim">{t('knowledge.vector_stores')}</h3>
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
            {vectorStores.map((store) => (
              <div key={store.id} className="card hover:bg-black/[0.02] transition-colors group cursor-pointer">
                <div className="flex items-center gap-4">
                  <div className={`w-10 h-10 rounded-sm flex items-center justify-center ${
                    store.status === 'active' ? 'bg-green-500/10 text-green-500' : 
                    store.status === 'warning' ? 'bg-orange-500/10 text-orange-500' : 'bg-black/5 text-text-dim'
                  }`}>
                    <Database size={20} />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-3 mb-1">
                      <h4 className="text-sm font-bold">{store.name}</h4>
                      <span className="text-[10px] font-mono text-text-dim uppercase">{store.id}</span>
                    </div>
                    <p className="text-xs text-text-dim truncate">{store.nodes} nodes indexed</p>
                  </div>
                  <div className="flex items-center gap-8">
                    <div className="text-right">
                      <p className="text-[10px] text-text-dim uppercase mb-1">Size</p>
                      <p className="text-xs font-bold">{store.size}</p>
                    </div>
                    <div className="text-right">
                      <p className="text-[10px] text-text-dim uppercase mb-1">Health</p>
                      <p className={`text-xs font-bold ${store.health < 80 ? 'text-orange-500' : 'text-green-500'}`}>{store.health}%</p>
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
      </div>

      {/* Knowledge Sources Sidebar */}
        <div className="space-y-8">
          {/* Recent Knowledge Sources */}
          <div className="card">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-xs font-bold uppercase tracking-widest text-text-dim">{t('knowledge.sources')}</h3>
              <button className="text-[10px] font-bold text-accent hover:underline">{t('common.all')}</button>
            </div>
            <div className="space-y-4">
              {sources.map((source) => (
                <div key={source.id} className="p-3 bg-black/5 border border-border rounded-sm hover:bg-black/[0.08] transition-colors cursor-pointer group">
                  <div className="flex justify-between items-start mb-2">
                    <div className="flex items-center gap-2">
                      <FileText size={16} className="text-text-dim" />
                      <p className="text-xs font-bold truncate max-w-[120px]">{source.name}</p>
                    </div>
                    <span className={`text-[9px] font-bold uppercase px-1.5 py-0.5 rounded-sm ${
                      source.status === 'indexed' ? 'bg-green-500/10 text-green-500' : 
                      source.status === 'processing' ? 'bg-blue-500/10 text-blue-500' : 'bg-orange-500/10 text-orange-500'
                    }`}>
                      {source.status}
                    </span>
                  </div>
                  <div className="flex items-center justify-between text-[10px] text-text-dim font-mono">
                    <span>{source.date} • {source.type}</span>
                  </div>
                  {source.status === 'processing' && (
                    <div className="mt-3 w-full bg-black/5 h-1 rounded-full overflow-hidden">
                      <motion.div 
                        initial={{ width: 0 }}
                        animate={{ width: '65%' }}
                        transition={{ duration: 2, repeat: Infinity }}
                        className="bg-blue-500 h-full"
                      ></motion.div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* RAG Engine Status */}
          <div className="card bg-surface/50 border-dashed">
            <h3 className="text-xs font-bold uppercase tracking-widest text-text-dim mb-4">RAG Engine Status</h3>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-xs text-text-dim">Active Workers</span>
                <span className="text-xs font-bold">12 / 16</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-xs text-text-dim">Throughput</span>
                <span className="text-xs font-bold">1.2 GB/s</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-xs text-text-dim">Error Rate</span>
                <span className="text-xs font-bold text-green-500">0.02%</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
