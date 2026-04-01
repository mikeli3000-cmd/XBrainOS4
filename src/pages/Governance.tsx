import React from 'react';
import { 
  Settings as SettingsIcon, 
  Shield, 
  Cpu, 
  Database, 
  Bell, 
  Save,
  RefreshCw,
  Lock,
  Eye,
  EyeOff
} from 'lucide-react';
import { motion } from 'motion/react';

export const Governance: React.FC = () => {
  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="flex items-end justify-between">
        <div>
          <p className="label-micro mb-1">Strategic Oversight</p>
          <h2 className="text-3xl font-bold tracking-tight">Governance & Guardrails</h2>
          <p className="text-text-dim mt-2 max-w-2xl leading-relaxed">
            Define the operational boundaries and ethical constraints for XBrain OS. 
            While the Digital Workforce Console manages tactical execution, this hub 
            sets the global policies that ensure strategic alignment and safety.
          </p>
        </div>
        <div className="flex gap-3">
          <button className="btn-secondary flex items-center gap-2 text-xs">
            <RefreshCw size={14} />
            Reset Policies
          </button>
          <button className="btn-primary flex items-center gap-2 text-xs">
            <Save size={14} />
            Apply Guardrails
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Navigation Tabs (Simulated) */}
        <div className="space-y-1">
          <p className="label-micro px-3 mb-2">Policy Domains</p>
          {[
            { icon: Cpu, label: 'Autonomy Guardrails', active: true },
            { icon: Database, label: 'Knowledge Integrity', active: false },
            { icon: Shield, label: 'Security & Compliance', active: false },
            { icon: Bell, label: 'Escalation Protocols', active: false },
          ].map((item) => (
            <button 
              key={item.label}
              className={`w-full flex items-center gap-3 px-3 py-2 rounded-sm transition-all ${
                item.active 
                  ? 'bg-accent/10 text-accent border-l-2 border-accent' 
                  : 'text-text-dim hover:text-text-primary hover:bg-black/5'
              }`}
            >
              <item.icon size={18} />
              <span className="text-sm font-medium">{item.label}</span>
            </button>
          ))}
        </div>

        {/* Settings Content */}
        <div className="lg:col-span-2 space-y-6">
          <div className="card">
            <h3 className="text-sm font-bold mb-6 flex items-center gap-2">
              <Cpu size={16} className="text-accent" />
              Global Agent Autonomy Policies
            </h3>
            
            <div className="space-y-6">
              <div className="space-y-2">
                <div className="flex justify-between">
                  <label className="text-xs font-bold uppercase tracking-wider text-text-dim">Global Confidence Floor</label>
                  <span className="text-xs font-mono text-accent">0.85</span>
                </div>
                <input type="range" className="w-full h-1 bg-black/10 rounded-full appearance-none cursor-pointer accent-accent" min="0" max="1" step="0.01" defaultValue="0.85" />
                <p className="text-[10px] text-text-dim italic">The absolute minimum confidence score required for any agent in the Digital Workforce to propose a strategic pivot.</p>
              </div>

              <div className="space-y-2">
                <div className="flex justify-between">
                  <label className="text-xs font-bold uppercase tracking-wider text-text-dim">Human-in-the-Loop Threshold</label>
                  <span className="text-xs font-mono text-accent">High Sensitivity</span>
                </div>
                <select className="w-full bg-black/5 border border-border rounded-sm py-1.5 px-3 text-sm focus:outline-none focus:border-accent/50">
                  <option>High Sensitivity (Strict Oversight)</option>
                  <option>Balanced (Standard Operations)</option>
                  <option>High Autonomy (Experimental)</option>
                </select>
              </div>

              <div className="flex items-center justify-between p-3 bg-black/5 border border-border rounded-sm">
                <div>
                  <p className="text-xs font-bold">Automatic Strategic Rollbacks</p>
                  <p className="text-[10px] text-text-dim">Automatically revert agent decisions if strategic alignment drops below 70% within 24 hours.</p>
                </div>
                <div className="w-10 h-5 bg-accent rounded-full relative cursor-pointer">
                  <div className="absolute right-1 top-1 w-3 h-3 bg-white rounded-full"></div>
                </div>
              </div>
            </div>
          </div>

          <div className="card">
            <h3 className="text-sm font-bold mb-6 flex items-center gap-2">
              <Lock size={16} className="text-accent" />
              API & Integration Keys
            </h3>
            
            <div className="space-y-4">
              {[
                { label: 'Strategic Graph API', key: 'xb_live_8234...9283', status: 'active' },
                { label: 'Workforce Controller', key: 'wc_prod_1293...1029', status: 'active' },
              ].map((api) => (
                <div key={api.label} className="p-3 border border-border rounded-sm space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-text-dim">{api.label}</span>
                    <span className="text-[10px] font-mono text-green-500 uppercase">{api.status}</span>
                  </div>
                  <div className="flex gap-2">
                    <div className="flex-1 bg-black/5 border border-border rounded-sm px-3 py-1.5 font-mono text-xs text-text-dim flex items-center justify-between">
                      {api.key}
                      <Eye size={14} className="cursor-pointer hover:text-text-primary" />
                    </div>
                    <button className="btn-secondary text-[10px] py-1 px-3">Rotate</button>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="card border-orange-500/20 bg-orange-500/5">
            <h3 className="text-sm font-bold mb-2 flex items-center gap-2 text-orange-600">
              <Shield size={16} />
              Danger Zone
            </h3>
            <p className="text-xs text-text-dim mb-4">Critical system operations that can cause irreversible data loss or agent de-synchronization.</p>
            <div className="flex gap-3">
              <button className="px-3 py-1.5 border border-orange-500/30 text-orange-600 text-[10px] font-bold uppercase tracking-wider rounded-sm hover:bg-orange-500/10 transition-colors">
                Purge Knowledge Graph
              </button>
              <button className="px-3 py-1.5 border border-orange-500/30 text-orange-600 text-[10px] font-bold uppercase tracking-wider rounded-sm hover:bg-orange-500/10 transition-colors">
                Reset Agent Network
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
