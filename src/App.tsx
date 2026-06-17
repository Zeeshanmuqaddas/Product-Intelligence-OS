import { BrainCircuit, Command, LayoutDashboard, Settings, ShieldCheck, Sparkles, Workflow } from 'lucide-react';
import { useState } from 'react';
import { AgentOrchestration } from './components/AgentOrchestration';
import { Dashboard } from './components/Dashboard';

type View = 'dashboard' | 'agents' | 'intelligence' | 'fraud' | 'settings';

export default function App() {
  const [activeView, setActiveView] = useState<View>('dashboard');

  return (
    <div className="flex h-screen bg-[#09090b] text-foreground overflow-hidden selection:bg-blue-500/30">
      {/* Sidebar */}
      <aside className="w-64 border-r border-border/40 bg-[#09090b]/95 backdrop-blur flex flex-col hidden md:flex z-10 relative">
        <div className="h-16 flex items-center px-6 border-b border-border/40">
           <div className="flex items-center gap-2.5 text-foreground font-semibold tracking-tight">
             <div className="bg-blue-500 rounded p-1">
               <Command className="w-4 h-4 text-white" />
             </div>
             PI-OS <span className="text-muted-foreground font-mono text-xs opacity-50 ml-1">v2.4.0</span>
           </div>
        </div>
        
        <div className="flex-1 overflow-y-auto py-6 px-4 space-y-8">
           <div>
             <div className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-3 px-2">Core OS</div>
             <nav className="space-y-1">
               <NavItem active={activeView === 'dashboard'} onClick={() => setActiveView('dashboard')} icon={LayoutDashboard} label="Mission Control" />
               <NavItem active={activeView === 'agents'} onClick={() => setActiveView('agents')} icon={Workflow} label="Agent Swarm" />
             </nav>
           </div>
           
           <div>
             <div className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-3 px-2">Intelligence Modules</div>
             <nav className="space-y-1">
               <NavItem onClick={() => setActiveView('intelligence')} icon={BrainCircuit} label="Product Graph" />
               <NavItem onClick={() => setActiveView('fraud')} icon={ShieldCheck} label="Anomaly Detection" />
               <NavItem onClick={() => {}} icon={Sparkles} label="Personalization" />
             </nav>
           </div>
        </div>

        <div className="p-4 border-t border-border/40">
           <NavItem active={activeView === 'settings'} onClick={() => setActiveView('settings')} icon={Settings} label="System Configuration" />
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 flex flex-col relative overflow-hidden bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-blue-900/10 via-[#09090b] to-[#09090b]">
        {/* Header */}
        <header className="h-16 border-b border-border/40 bg-[#09090b]/50 backdrop-blur-md flex items-center justify-between px-6 z-10">
           <div className="flex items-center gap-4">
              <h1 className="text-lg font-heading font-semibold tracking-tight">
                {activeView === 'dashboard' && 'Mission Control'}
                {activeView === 'agents' && 'Distributed AI Workforce'}
                {activeView === 'intelligence' && 'Semantic Product Knowledge'}
                {activeView === 'fraud' && 'Anomaly & Fraud Watch'}
                {activeView === 'settings' && 'System Configuration'}
              </h1>
           </div>
           <div className="flex items-center gap-4">
             <div className="hidden sm:flex items-center gap-2 px-3 py-1.5 bg-emerald-500/10 border border-emerald-500/20 rounded-full text-emerald-500 text-xs font-mono">
               <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></div>
               SYSTEM HEALTHY
             </div>
             <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-blue-500 to-purple-500 flex items-center justify-center text-xs font-bold text-white shadow-sm ring-1 ring-white/10">
               OP
             </div>
           </div>
        </header>

        {/* Scrollable View Area */}
        <div className="flex-1 overflow-y-auto p-6 relative z-10">
           <div className="max-w-[1400px] mx-auto">
             {activeView === 'dashboard' && <Dashboard />}
             {activeView === 'agents' && <AgentOrchestration />}
             {['intelligence', 'fraud', 'settings'].includes(activeView) && (
                <div className="flex flex-col items-center justify-center h-[50vh] text-center border border-border/50 border-dashed rounded-xl bg-card/10">
                   <Workflow className="w-10 h-10 text-muted-foreground mb-4 opacity-50" />
                   <h2 className="text-lg font-semibold mb-2">Module Loading</h2>
                   <p className="text-sm text-muted-foreground max-w-sm">
                     The {activeView} module is currently performing a massive data ingestion pipeline and constructing Neo4j sub-graphs. Please wait.
                   </p>
                </div>
             )}
           </div>
        </div>
      </main>
    </div>
  );
}

function NavItem({ icon: Icon, label, active, onClick }: { icon: any, label: string, active?: boolean, onClick: () => void }) {
  const activeClass = "bg-blue-500/10 text-blue-500";
  const inactiveClass = "text-muted-foreground hover:bg-white/5 hover:text-foreground";
  
  return (
    <button
      onClick={onClick}
      className={["w-full flex items-center gap-3 px-3 py-2 rounded-lg text-sm font-medium transition-all group", active ? activeClass : inactiveClass].join(" ")}
    >
      <Icon className={["w-4 h-4", active ? "text-blue-500" : "text-muted-foreground group-hover:text-foreground"].join(" ")} />
      {label}
    </button>
  );
}
