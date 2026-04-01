import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { 
  LayoutDashboard, 
  Target, 
  Zap, 
  Cpu, 
  Share2, 
  Activity,
  Upload,
  Settings,
  Bell,
  Search,
  ChevronRight,
  Info,
  FileText,
  Globe,
  ChevronDown
} from 'lucide-react';
import { StrategicContext } from './StrategicContext';
import { useStrategicContext } from '../context/StrategicContext';
import { useLanguage } from '../context/LanguageContext';

const navItems = [
  { icon: LayoutDashboard, label: 'nav.dashboard', path: '/' },
  { icon: Target, label: 'nav.okrs', path: '/okrs' },
  { icon: Zap, label: 'nav.decisions', path: '/decisions' },
  { icon: Cpu, label: 'nav.workforce', path: '/workforce' },
  { icon: Share2, label: 'nav.knowledge', path: '/knowledge' },
  { icon: FileText, label: 'nav.reports', path: '/reports' },
  { icon: Activity, label: 'nav.dashboard', path: '/data-streams' }, // Reusing dashboard key for now or add new
  { icon: Upload, label: 'nav.imports', path: '/imports' },
];

export const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const location = useLocation();
  const { contextData, closeContext } = useStrategicContext();
  const { language, setLanguage, t } = useLanguage();

  return (
    <div className="flex h-screen bg-bg overflow-hidden">
      {/* Sidebar */}
      <aside className="w-64 border-r border-border flex flex-col bg-surface/50">
        <div className="p-6 flex items-center gap-3 border-b border-border">
          <div className="w-8 h-8 bg-accent rounded-sm flex items-center justify-center font-bold text-white">X</div>
          <div>
            <h1 className="text-sm font-bold tracking-tight">XBRAIN OS</h1>
            <p className="text-[10px] text-text-dim font-mono">v4.1.0-STABLE</p>
          </div>
        </div>

        <div className="px-6 py-4 border-b border-border">
          <div className="flex items-center justify-between mb-2">
            <p className="text-[10px] font-bold text-text-dim uppercase tracking-widest">{t('workspace.label')}</p>
            <ChevronDown size={12} className="text-text-dim" />
          </div>
          <div className="flex items-center gap-2 p-2 bg-accent/5 border border-accent/20 rounded-sm cursor-pointer hover:bg-accent/10 transition-colors">
            <div className="w-5 h-5 bg-accent/10 rounded-sm flex items-center justify-center text-accent">
              <Globe size={12} />
            </div>
            <span className="text-xs font-bold text-accent truncate">{t('workspace.name')}</span>
          </div>
        </div>

        <nav className="flex-1 py-6 px-3 space-y-1 overflow-y-auto">
          <p className="label-micro px-3 mb-4">{t('nav.core_management')}</p>
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = location.pathname === item.path;
            return (
              <Link
                key={item.path}
                to={item.path}
                className={`flex items-center gap-3 px-3 py-2 rounded-sm transition-all group ${
                  isActive 
                    ? 'bg-accent/10 text-accent border-l-2 border-accent' 
                    : 'text-text-dim hover:text-text-primary hover:bg-black/5'
                }`}
              >
                <Icon size={18} className={isActive ? 'text-accent' : 'group-hover:text-text-primary'} />
                <span className="text-sm font-medium">{t(item.label)}</span>
                {isActive && <ChevronRight size={14} className="ml-auto opacity-50" />}
              </Link>
            );
          })}
        </nav>

        <div className="p-4 border-t border-border">
          <div className="flex items-center gap-2 mb-4 px-3">
            <button 
              onClick={() => setLanguage('en')}
              className={`text-[10px] font-bold px-2 py-1 rounded-sm transition-all ${language === 'en' ? 'bg-accent text-white' : 'text-text-dim hover:text-text-primary'}`}
            >
              EN
            </button>
            <button 
              onClick={() => setLanguage('zh')}
              className={`text-[10px] font-bold px-2 py-1 rounded-sm transition-all ${language === 'zh' ? 'bg-accent text-white' : 'text-text-dim hover:text-text-primary'}`}
            >
              中文
            </button>
          </div>
          <Link 
            to="/settings"
            className={`flex items-center gap-3 px-3 py-2 rounded-sm transition-all group ${
              location.pathname === '/settings' 
                ? 'bg-accent/10 text-accent border-l-2 border-accent' 
                : 'text-text-dim hover:text-text-primary hover:bg-black/5'
            }`}
          >
            <Settings size={18} className={location.pathname === '/settings' ? 'text-accent' : 'group-hover:text-text-primary'} />
            <span className="text-sm font-medium">{t('nav.settings')}</span>
          </Link>
          <div className="mt-4 p-3 bg-accent/5 border border-accent/20 rounded-sm">
            <div className="flex items-center justify-between mb-1">
              <span className="text-[10px] font-bold text-accent uppercase tracking-wider">{t('nav.system_health')}</span>
              <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
            </div>
            <div className="w-full bg-black/5 h-1 rounded-full overflow-hidden">
              <div className="bg-accent h-full w-[92%]"></div>
            </div>
          </div>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 flex flex-col min-w-0">
        {/* Top Bar */}
        <header className="h-16 border-b border-border flex items-center justify-between px-8 bg-surface/30 backdrop-blur-sm">
          <div className="flex items-center gap-4 flex-1 max-w-xl">
            <div className="relative w-full">
              <Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-text-dim" />
              <input 
                type="text" 
                placeholder={t('common.search')} 
                className="w-full bg-black/5 border border-border rounded-sm py-1.5 pl-10 pr-4 text-sm focus:outline-none focus:border-accent/50 transition-colors"
              />
            </div>
          </div>

          <div className="flex items-center gap-6">
            <div className="flex items-center gap-2 px-3 py-1 bg-black/5 border border-border rounded-sm">
              <span className="w-2 h-2 bg-accent rounded-full"></span>
              <span className="text-[11px] font-mono font-bold">{t('nav.agent_active')}</span>
            </div>
            
            <div className="flex items-center gap-4">
              <button className="relative p-2 text-text-dim hover:text-text-primary transition-colors">
                <Bell size={20} />
                <span className="absolute top-1 right-1 w-2 h-2 bg-accent rounded-full border-2 border-bg"></span>
              </button>
              <div className="flex items-center gap-3 pl-4 border-l border-border">
                <div className="text-right">
                  <p className="text-xs font-bold">MIK ELI</p>
                  <p className="text-[10px] text-text-dim font-mono">{t('nav.user_role')}</p>
                </div>
                <div className="w-8 h-8 rounded-full bg-gradient-to-br from-accent to-orange-600 border border-white/20"></div>
              </div>
            </div>
          </div>
        </header>

        {/* Content Area */}
        <div className="flex-1 overflow-y-auto p-8 relative">
          {children}
          
          {/* Strategic Context Sidebar */}
          <StrategicContext 
            isOpen={contextData.isOpen}
            onClose={closeContext}
            title={contextData.title}
            type={contextData.type}
            relatedEntities={contextData.relatedEntities}
            agentInsight={contextData.agentInsight}
          />
        </div>
      </main>
    </div>
  );
};
