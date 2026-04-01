import React from 'react';
import { 
  Activity, 
  Link as LinkIcon, 
  RefreshCw, 
  Database, 
  ArrowRight, 
  CheckCircle2, 
  AlertCircle, 
  MoreVertical, 
  Search,
  Settings,
  Clock,
  Zap,
  Cpu,
  Globe
} from 'lucide-react';
import { motion } from 'motion/react';

const dataStreams = [
  { id: 'DS-001', name: 'Internal Performance API', status: 'active', frequency: 'Real-time', latency: '14ms', health: 98 },
  { id: 'DS-002', name: 'Market Intelligence Feed', status: 'active', frequency: 'Hourly', latency: '1.2s', health: 100 },
  { id: 'DS-003', name: 'Financial Report Ingester', status: 'idle', frequency: 'Quarterly', latency: 'N/A', health: 95 },
  { id: 'DS-004', name: 'Competitor Pricing Scraper', status: 'warning', frequency: 'Daily', latency: '5.4s', health: 78 },
];

const metrics = [
  { id: 'M-001', name: 'Strategic Alignment Score', current: '88.4', target: '95.0', status: 'on-track', progress: 88 },
  { id: 'M-002', name: 'Decision Latency', current: '12h', target: '7.2h', status: 'at-risk', progress: 45 },
  { id: 'M-003', name: 'Resource Efficiency', current: '62%', target: '80%', status: 'on-track', progress: 77 },
];

export const DataStreams: React.FC = () => {
  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="flex items-end justify-between">
        <div>
          <p className="label-micro mb-1">Data Infrastructure</p>
          <h2 className="text-3xl font-bold tracking-tight">Live Streams</h2>
          <p className="text-text-dim mt-2 max-w-2xl leading-relaxed">
            Manage external data connections and map them to strategic leading indicators. 
            Configure update cadences and monitor stream health.
          </p>
        </div>
        <div className="flex gap-3">
          <button className="btn-secondary flex items-center gap-2 text-xs">
            <RefreshCw size={14} />
            Refresh All
          </button>
          <button className="btn-primary flex items-center gap-2 text-xs">
            <LinkIcon size={14} />
            Link New Stream
          </button>
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        {[
          { label: 'Active Streams', value: '12 / 16', icon: LinkIcon, color: 'text-accent' },
          { label: 'Avg. Latency', value: '14ms', icon: Clock, color: 'text-blue-500' },
          { label: 'Stream Health', value: '98.4%', icon: Activity, color: 'text-green-500' },
          { label: 'Total Ingested', value: '1.2 TB', icon: Database, color: 'text-orange-500' },
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
        {/* Data Streams List */}
        <div className="lg:col-span-2 space-y-6">
          <div className="flex items-center justify-between">
            <h3 className="text-xs font-bold uppercase tracking-widest text-text-dim">Active Data Streams</h3>
            <div className="relative">
              <Search size={14} className="absolute left-3 top-1/2 -translate-y-1/2 text-text-dim" />
              <input 
                type="text" 
                placeholder="Search data streams..." 
                className="bg-black/5 border border-border rounded-sm py-1 pl-9 pr-4 text-xs focus:outline-none focus:border-accent/50"
              />
            </div>
          </div>

          <div className="space-y-3">
            {dataStreams.map((stream) => (
              <div key={stream.id} className="card hover:bg-black/[0.02] transition-colors group cursor-pointer">
                <div className="flex items-center gap-4">
                  <div className={`w-10 h-10 rounded-sm flex items-center justify-center ${
                    stream.status === 'active' ? 'bg-green-500/10 text-green-500' : 
                    stream.status === 'warning' ? 'bg-orange-500/10 text-orange-500' : 'bg-black/5 text-text-dim'
                  }`}>
                    <Globe size={20} />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-3 mb-1">
                      <h4 className="text-sm font-bold">{stream.name}</h4>
                      <span className="text-[10px] font-mono text-text-dim uppercase">{stream.id}</span>
                    </div>
                    <p className="text-xs text-text-dim truncate">Update Frequency: {stream.frequency}</p>
                  </div>
                  <div className="flex items-center gap-8">
                    <div className="text-right">
                      <p className="text-[10px] text-text-dim uppercase mb-1">Latency</p>
                      <p className="text-xs font-bold">{stream.latency}</p>
                    </div>
                    <div className="text-right">
                      <p className="text-[10px] text-text-dim uppercase mb-1">Health</p>
                      <p className={`text-xs font-bold ${stream.health < 80 ? 'text-orange-500' : 'text-green-500'}`}>{stream.health}%</p>
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

        {/* Strategic Metrics Sidebar */}
        <div className="space-y-8">
          {/* Strategic Metrics */}
          <div className="card">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-xs font-bold uppercase tracking-widest text-text-dim">Strategic Metrics</h3>
              <button className="text-[10px] font-bold text-accent hover:underline">VIEW ALL</button>
            </div>
            <div className="space-y-6">
              {metrics.map((metric) => (
                <div key={metric.id} className="space-y-2">
                  <div className="flex justify-between items-end">
                    <div>
                      <p className="text-[10px] text-text-dim font-mono uppercase mb-1">{metric.name}</p>
                      <p className="text-lg font-bold tracking-tight">{metric.current}</p>
                    </div>
                    <div className="text-right">
                      <p className={`text-[10px] font-mono uppercase mb-1 ${
                        metric.status === 'on-track' ? 'text-green-500' : 'text-orange-500'
                      }`}>{metric.status}</p>
                      <p className="text-xs text-text-dim">Target: {metric.target}</p>
                    </div>
                  </div>
                  <div className="w-full bg-black/5 h-1.5 rounded-full overflow-hidden">
                    <motion.div 
                      initial={{ width: 0 }}
                      animate={{ width: `${metric.progress}%` }}
                      transition={{ duration: 1, ease: "easeOut" }}
                      className={`h-full rounded-full ${
                        metric.status === 'on-track' ? 'bg-green-500' : 'bg-orange-500'
                      }`}
                    ></motion.div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Data Infrastructure Status */}
          <div className="card bg-surface/50 border-dashed">
            <h3 className="text-xs font-bold uppercase tracking-widest text-text-dim mb-4">Infrastructure Status</h3>
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
