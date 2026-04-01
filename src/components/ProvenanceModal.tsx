import React from 'react';
import { 
  X, 
  ChevronRight, 
  Database, 
  FileText, 
  Globe, 
  Cpu, 
  ShieldCheck,
  ExternalLink,
  Info
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface ProvenanceModalProps {
  isOpen: boolean;
  onClose: () => void;
  claim: {
    title: string;
    description: string;
    agent: string;
    confidence: number;
  };
}

export const ProvenanceModal: React.FC<ProvenanceModalProps> = ({ isOpen, onClose, claim }) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-black/80 backdrop-blur-sm"
          />
          <motion.div 
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            className="relative w-full max-w-4xl bg-surface border border-border rounded-sm overflow-hidden shadow-2xl"
          >
            {/* Header */}
            <div className="flex items-center justify-between p-6 border-b border-border bg-black/[0.02]">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-accent/10 border border-accent/20 rounded-sm flex items-center justify-center text-accent">
                  <ShieldCheck size={24} />
                </div>
                <div>
                  <h3 className="text-lg font-bold tracking-tight">Provenance & Logic Path</h3>
                  <p className="text-[10px] text-text-dim font-mono uppercase tracking-widest">Verification ID: PRV-2024-882-XB</p>
                </div>
              </div>
              <button 
                onClick={onClose}
                className="p-2 text-text-dim hover:text-text-primary hover:bg-black/5 rounded-sm transition-all"
              >
                <X size={20} />
              </button>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2">
              {/* Left: Logic Path */}
              <div className="p-8 border-r border-border space-y-8">
                <section>
                  <h4 className="label-micro mb-4">The Claim</h4>
                  <div className="p-4 bg-accent/5 border border-accent/20 rounded-sm">
                    <p className="text-sm font-bold mb-2">{claim.title}</p>
                    <p className="text-xs text-text-dim leading-relaxed">{claim.description}</p>
                  </div>
                </section>

                <section>
                  <h4 className="label-micro mb-4">Logic Path</h4>
                  <div className="space-y-6 relative">
                    <div className="absolute left-[7px] top-2 bottom-2 w-[1px] bg-accent/20"></div>
                    
                    <div className="relative pl-6">
                      <div className="absolute left-0 top-1.5 w-3.5 h-3.5 bg-accent rounded-full border-4 border-bg"></div>
                      <p className="text-[10px] font-mono text-text-dim mb-1">OBSERVATION</p>
                      <p className="text-xs font-medium">Competitor Y pricing dropped by 5% across 12 key SKUs.</p>
                    </div>

                    <div className="relative pl-6">
                      <div className="absolute left-0 top-1.5 w-3.5 h-3.5 bg-accent rounded-full border-4 border-bg"></div>
                      <p className="text-[10px] font-mono text-text-dim mb-1">INFERENCE</p>
                      <p className="text-xs font-medium">Historical patterns suggest this precedes a broader market pivot.</p>
                    </div>

                    <div className="relative pl-6">
                      <div className="absolute left-0 top-1.5 w-3.5 h-3.5 bg-accent rounded-full border-4 border-bg"></div>
                      <p className="text-[10px] font-mono text-text-dim mb-1">CORRELATION</p>
                      <p className="text-xs font-medium">Internal supply chain logs show 8% surplus in related components.</p>
                    </div>
                  </div>
                </section>
              </div>

              {/* Right: Source Evidence */}
              <div className="p-8 bg-black/5 space-y-8">
                <section>
                  <div className="flex items-center justify-between mb-4">
                    <h4 className="label-micro">Source Evidence</h4>
                    <span className="text-[10px] font-mono text-green-500">3 VERIFIED SOURCES</span>
                  </div>
                  <div className="space-y-3">
                    {[
                      { icon: Globe, name: 'Competitor Y Public API', type: 'External Data', confidence: 0.98 },
                      { icon: FileText, name: 'Market Analysis Q1.pdf', type: 'Document', confidence: 0.92 },
                      { icon: Database, name: 'Internal Sales Graph', type: 'System Data', confidence: 1.0 }
                    ].map((source, i) => (
                      <div key={i} className="p-3 bg-black/5 border border-border rounded-sm hover:border-accent/30 transition-all cursor-pointer group">
                        <div className="flex items-center justify-between mb-2">
                          <div className="flex items-center gap-3">
                            <source.icon size={14} className="text-text-dim" />
                            <span className="text-xs font-bold">{source.name}</span>
                          </div>
                          <ExternalLink size={12} className="text-text-dim opacity-0 group-hover:opacity-100 transition-opacity" />
                        </div>
                        <div className="flex items-center justify-between">
                          <span className="text-[9px] text-text-dim uppercase font-mono">{source.type}</span>
                          <span className="text-[9px] font-bold text-accent">CONFIDENCE: {source.confidence * 100}%</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </section>

                <section>
                  <h4 className="label-micro mb-4">Agent Confidence</h4>
                  <div className="card bg-surface/50">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-xs font-bold">Overall Confidence Score</span>
                      <span className="text-lg font-bold text-accent">{claim.confidence * 100}%</span>
                    </div>
                    <div className="w-full bg-black/5 h-2 rounded-full overflow-hidden">
                      <motion.div 
                        initial={{ width: 0 }}
                        animate={{ width: `${claim.confidence * 100}%` }}
                        transition={{ duration: 1, ease: "easeOut" }}
                        className="bg-accent h-full"
                      ></motion.div>
                    </div>
                    <p className="text-[10px] text-text-dim mt-4 leading-relaxed italic">
                      "The high confidence is driven by direct API correlation and historical pattern matching. Risk of hallucination is estimated at &lt;0.01%."
                    </p>
                  </div>
                </section>
              </div>
            </div>

            {/* Footer */}
            <div className="p-4 border-t border-border bg-black/[0.02] flex justify-end gap-3">
              <button onClick={onClose} className="btn-secondary text-xs">Close Trace</button>
              <button className="btn-primary text-xs flex items-center gap-2">
                <Cpu size={14} />
                Re-run Verification
              </button>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};
