import React, { useState } from 'react';
import { 
  Upload, 
  FileText, 
  Database, 
  ArrowRight, 
  CheckCircle2, 
  AlertCircle, 
  X,
  ChevronRight,
  Search,
  Settings,
  Zap
} from 'lucide-react';
import { motion } from 'motion/react';
import { useLanguage } from '../context/LanguageContext';

import { Link } from 'react-router-dom';

const recentImports = [
  { id: 1, name: 'AO_Smith_China_Strategy_2024.xlsx', type: 'Excel', status: 'completed', date: '2h ago', nodes: 42 },
  { id: 2, name: 'Nanjing_Factory_Efficiency_Q1.pdf', type: 'PDF', status: 'processing', date: '15m ago', nodes: 0 },
  { id: 3, name: 'Water_Heater_Market_Share_China.csv', type: 'CSV', status: 'failed', date: '1h ago', nodes: 0 },
];

export const Imports: React.FC = () => {
  const { t } = useLanguage();
  const [isDragging, setIsDragging] = useState(false);

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="flex items-end justify-between">
        <div>
          <p className="label-micro mb-1">{t('imports.subtitle')}</p>
          <h2 className="text-3xl font-bold tracking-tight">{t('imports.title')}</h2>
          <p className="text-text-dim mt-2 max-w-2xl leading-relaxed">
            Upload and map strategy documents (Excel, CSV, PDF) into the organizational knowledge graph. 
            The agent will automatically extract entities, relationships, and strategic nodes.
          </p>
        </div>
        <div className="flex gap-3">
          <Link to="/knowledge" className="btn-secondary flex items-center gap-2 text-xs">
            <Database size={14} />
            {t('imports.view_knowledge')}
          </Link>
          <Link to="/okrs" className="btn-primary flex items-center gap-2 text-xs">
            <ChevronRight size={14} />
            {t('imports.go_okrs')}
          </Link>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Main Upload Area */}
        <div className="lg:col-span-2 space-y-6">
          {/* How it works */}
          <div className="card bg-accent/5 border-accent/20">
            <div className="flex items-center gap-3 mb-4">
              <Zap size={18} className="text-accent" />
              <h3 className="text-sm font-bold">How Data Ingestion links to OKRs</h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="space-y-2">
                <p className="text-[10px] font-bold text-accent uppercase tracking-widest">1. Upload</p>
                <p className="text-xs text-text-dim leading-relaxed">Drop your strategy Excel, CSV, or PDF documents into the ingestion zone.</p>
              </div>
              <div className="space-y-2">
                <p className="text-[10px] font-bold text-accent uppercase tracking-widest">2. Map & Extract</p>
                <p className="text-xs text-text-dim leading-relaxed">The AI Agent maps your document fields to Strategic Nodes in the Knowledge Graph.</p>
              </div>
              <div className="space-y-2">
                <p className="text-[10px] font-bold text-accent uppercase tracking-widest">3. Manage OKRs</p>
                <p className="text-xs text-text-dim leading-relaxed">Extracted OKRs appear instantly in the OKR Dashboard for tracking and refinement.</p>
              </div>
            </div>
          </div>

          <div 
            className={`card border-2 border-dashed flex flex-col items-center justify-center py-16 transition-all cursor-pointer ${
              isDragging ? 'border-accent bg-accent/5' : 'border-border hover:border-accent/50'
            }`}
            onDragOver={(e) => { e.preventDefault(); setIsDragging(true); }}
            onDragLeave={() => setIsDragging(false)}
            onDrop={(e) => { e.preventDefault(); setIsDragging(false); }}
          >
            <div className="w-16 h-16 bg-black/5 rounded-full flex items-center justify-center mb-6 border border-border group-hover:border-accent/30 transition-colors">
              <Upload size={32} className="text-text-dim group-hover:text-accent transition-colors" />
            </div>
            <h3 className="text-lg font-bold mb-2">Drop strategy documents here</h3>
            <p className="text-sm text-text-dim mb-6">or click to browse from your computer</p>
            <div className="flex gap-4">
              <div className="flex items-center gap-2 px-3 py-1.5 bg-black/5 border border-border rounded-sm text-[10px] font-bold text-text-dim">
                <FileText size={14} />
                EXCEL / CSV
              </div>
              <div className="flex items-center gap-2 px-3 py-1.5 bg-black/5 border border-border rounded-sm text-[10px] font-bold text-text-dim">
                <FileText size={14} />
                PDF / DOCX
              </div>
              <div className="flex items-center gap-2 px-3 py-1.5 bg-black/5 border border-border rounded-sm text-[10px] font-bold text-text-dim">
                <Database size={14} />
                SQL / API
              </div>
            </div>
          </div>

          {/* Mapping Configuration */}
          <div className="card">
            <div className="flex items-center justify-between mb-6 pb-4 border-b border-border">
              <h3 className="text-xs font-bold uppercase tracking-widest text-text-dim">{t('imports.mapping')}</h3>
              <button className="text-[10px] font-bold text-accent hover:underline">RESET DEFAULTS</button>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-4">
                <p className="text-[11px] font-bold text-text-dim uppercase tracking-wider">Source Fields</p>
                {['Objective Name', 'Key Result Title', 'Target Value', 'Owner Email'].map((field) => (
                  <div key={field} className="flex items-center justify-between p-2 bg-black/5 border border-border rounded-sm">
                    <span className="text-xs font-medium">{field}</span>
                    <ArrowRight size={14} className="text-text-dim" />
                  </div>
                ))}
              </div>
              <div className="space-y-4">
                <p className="text-[11px] font-bold text-text-dim uppercase tracking-wider">Strategic Nodes</p>
                {['Strategic_Objective', 'Key_Result', 'Metric_Target', 'Entity_Owner'].map((node) => (
                  <div key={node} className="flex items-center justify-between p-2 bg-accent/5 border border-accent/20 rounded-sm">
                    <span className="text-xs font-bold text-accent">{node}</span>
                    <Settings size={14} className="text-accent" />
                  </div>
                ))}
              </div>
            </div>
            <div className="mt-8 flex justify-end">
              <button className="btn-primary">{t('imports.initialize')}</button>
            </div>
          </div>
        </div>

        {/* Recent Imports Sidebar */}
        <div className="space-y-6">
          <div className="card">
            <h3 className="text-xs font-bold uppercase tracking-widest text-text-dim mb-6">{t('imports.recent')}</h3>
            <div className="space-y-4">
              {recentImports.map((item) => (
                <div key={item.id} className="p-3 bg-black/5 border border-border rounded-sm hover:bg-black/[0.08] transition-colors cursor-pointer group">
                  <div className="flex justify-between items-start mb-2">
                    <div className="flex items-center gap-2">
                      <FileText size={16} className="text-text-dim" />
                      <p className="text-xs font-bold truncate max-w-[120px]">{item.name}</p>
                    </div>
                    <span className={`text-[9px] font-bold uppercase px-1.5 py-0.5 rounded-sm ${
                      item.status === 'completed' ? 'bg-green-500/10 text-green-500' : 
                      item.status === 'processing' ? 'bg-blue-500/10 text-blue-500' : 'bg-orange-500/10 text-orange-500'
                    }`}>
                      {item.status}
                    </span>
                  </div>
                  <div className="flex items-center justify-between text-[10px] text-text-dim font-mono">
                    <span>{item.date} • {item.type}</span>
                    {item.nodes > 0 && (
                      <Link to="/okrs" className="text-accent hover:underline flex items-center gap-1 group/link">
                        {item.nodes} nodes extracted
                        <ChevronRight size={10} className="group-hover/link:translate-x-0.5 transition-transform" />
                      </Link>
                    )}
                  </div>
                  {item.status === 'processing' && (
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
            <button className="w-full mt-6 py-2 border border-border text-[10px] font-bold uppercase tracking-widest hover:bg-black/5 transition-all">
              {t('common.all')}
            </button>
          </div>

          {/* System Status */}
          <div className="card bg-surface/50 border-dashed">
            <h3 className="text-xs font-bold uppercase tracking-widest text-text-dim mb-4">Ingestion Engine</h3>
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
