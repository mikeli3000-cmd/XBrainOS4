import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Target, 
  Cpu, 
  Zap, 
  Share2, 
  X, 
  ChevronRight,
  Link as LinkIcon,
  Activity,
  ShieldCheck
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';

interface StrategicContextProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  type: 'OKR' | 'AGENT' | 'DECISION' | 'KNOWLEDGE';
  relatedEntities: {
    okrs?: { id: string; title: string; status: string }[];
    agents?: { id: string; name: string; status: string }[];
    decisions?: { id: string; title: string; impact: string }[];
    knowledge?: { id: string; label: string; type: string }[];
  };
  agentInsight?: string;
}

export const StrategicContext: React.FC<StrategicContextProps> = ({ 
  isOpen, 
  onClose, 
  title, 
  type, 
  relatedEntities,
  agentInsight 
}) => {
  const { t } = useLanguage();

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ x: '100%' }}
          animate={{ x: 0 }}
          exit={{ x: '100%' }}
          transition={{ type: 'spring', damping: 25, stiffness: 200 }}
          className="fixed top-0 right-0 bottom-0 w-80 bg-surface border-l border-border z-50 shadow-2xl flex flex-col"
        >
          {/* Header */}
          <div className="p-6 border-b border-border flex items-center justify-between bg-black/5">
            <div>
              <p className="label-micro mb-1 text-accent uppercase tracking-widest">{type} {t('context.title')}</p>
              <h3 className="text-sm font-bold truncate max-w-[180px]">{title}</h3>
            </div>
            <button 
              onClick={onClose}
              className="p-2 hover:bg-black/5 rounded-sm text-text-dim hover:text-text-primary transition-all"
            >
              <X size={18} />
            </button>
          </div>

          {/* Content */}
          <div className="flex-1 overflow-y-auto p-6 space-y-8">
            {/* AI Agent Insight */}
            {agentInsight && (
              <div className="p-4 bg-accent/5 border border-accent/20 rounded-sm relative overflow-hidden group">
                <div className="absolute top-0 right-0 p-2 opacity-10 group-hover:opacity-20 transition-opacity">
                  <Cpu size={48} />
                </div>
                <div className="flex items-center gap-2 mb-3">
                  <div className="w-2 h-2 bg-accent rounded-full animate-pulse"></div>
                  <span className="text-[10px] font-bold text-accent uppercase tracking-widest">{t('context.agent_insight')}</span>
                </div>
                <p className="text-xs text-text-primary leading-relaxed italic">
                  "{agentInsight}"
                </p>
              </div>
            )}

            {/* Related OKRs */}
            {relatedEntities.okrs && relatedEntities.okrs.length > 0 && (
              <div className="space-y-3">
                <div className="flex items-center gap-2 text-text-dim">
                  <Target size={14} />
                  <span className="text-[10px] font-bold uppercase tracking-widest">{t('context.related_okrs')}</span>
                </div>
                <div className="space-y-2">
                  {relatedEntities.okrs.map(okr => (
                    <Link 
                      key={okr.id} 
                      to="/okrs" 
                      className="block p-3 bg-black/5 border border-border rounded-sm hover:border-accent/30 transition-all group"
                    >
                      <div className="flex justify-between items-start mb-1">
                        <span className="text-[9px] font-mono text-text-dim">{okr.id}</span>
                        <span className="text-[8px] font-bold px-1 bg-green-500/10 text-green-500 rounded-sm">{okr.status}</span>
                      </div>
                      <p className="text-xs font-bold truncate group-hover:text-accent transition-colors">{okr.title}</p>
                    </Link>
                  ))}
                </div>
              </div>
            )}

            {/* Related Agents */}
            {relatedEntities.agents && relatedEntities.agents.length > 0 && (
              <div className="space-y-3">
                <div className="flex items-center gap-2 text-text-dim">
                  <Cpu size={14} />
                  <span className="text-[10px] font-bold uppercase tracking-widest">{t('context.assigned_agents')}</span>
                </div>
                <div className="space-y-2">
                  {relatedEntities.agents.map(agent => (
                    <Link 
                      key={agent.id} 
                      to="/workforce" 
                      className="block p-3 bg-black/5 border border-border rounded-sm hover:border-accent/30 transition-all group"
                    >
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 bg-accent/10 rounded-sm flex items-center justify-center text-accent">
                          <Cpu size={16} />
                        </div>
                        <div>
                          <p className="text-xs font-bold group-hover:text-accent transition-colors">{agent.name}</p>
                          <p className="text-[9px] text-text-dim font-mono uppercase">{agent.status}</p>
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            )}

            {/* Related Decisions */}
            {relatedEntities.decisions && relatedEntities.decisions.length > 0 && (
              <div className="space-y-3">
                <div className="flex items-center gap-2 text-text-dim">
                  <Zap size={14} />
                  <span className="text-[10px] font-bold uppercase tracking-widest">{t('context.impactful_decisions')}</span>
                </div>
                <div className="space-y-2">
                  {relatedEntities.decisions.map(dec => (
                    <Link 
                      key={dec.id} 
                      to="/decisions" 
                      className="block p-3 bg-black/5 border border-border rounded-sm hover:border-accent/30 transition-all group"
                    >
                      <div className="flex justify-between items-start mb-1">
                        <span className="text-[9px] font-mono text-text-dim">{dec.id}</span>
                        <span className="text-[8px] font-bold px-1 bg-accent/10 text-accent rounded-sm">{dec.impact} IMPACT</span>
                      </div>
                      <p className="text-xs font-bold truncate group-hover:text-accent transition-colors">{dec.title}</p>
                    </Link>
                  ))}
                </div>
              </div>
            )}

            {/* Knowledge Nodes */}
            {relatedEntities.knowledge && relatedEntities.knowledge.length > 0 && (
              <div className="space-y-3">
                <div className="flex items-center gap-2 text-text-dim">
                  <Share2 size={14} />
                  <span className="text-[10px] font-bold uppercase tracking-widest">{t('context.knowledge_context')}</span>
                </div>
                <div className="space-y-2">
                  {relatedEntities.knowledge.map(node => (
                    <Link 
                      key={node.id} 
                      to="/knowledge" 
                      className="block p-3 bg-black/5 border border-border rounded-sm hover:border-accent/30 transition-all group"
                    >
                      <div className="flex items-center gap-2 mb-1">
                        <span className="text-[9px] font-mono text-accent uppercase tracking-tighter">{node.type}</span>
                      </div>
                      <p className="text-xs font-bold truncate group-hover:text-accent transition-colors">{node.label}</p>
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Footer */}
          <div className="p-6 border-t border-border bg-black/5">
            <button className="w-full btn-primary py-2 text-xs flex items-center justify-center gap-2">
              <Activity size={14} />
              {t('context.open_graph')}
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
