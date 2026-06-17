import { Activity, Cpu, Database, Network, ServerCrash, Shield, Workflow } from 'lucide-react';
import { agents } from '../data/mockData';
import { Badge } from './ui/badge';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';

export function AgentOrchestration() {
  return (
    <div className="flex flex-col gap-6">
      <div className="grid gap-4 md:grid-cols-3">
        <Card className="bg-card/50 backdrop-blur">
          <CardContent className="p-6 flex flex-row items-center gap-4">
             <div className="p-3 bg-blue-500/10 rounded-full text-blue-500">
               <Network className="w-6 h-6" />
             </div>
             <div>
                <p className="text-sm font-medium text-muted-foreground">Active Agents</p>
                <h3 className="text-2xl font-bold font-mono text-foreground">
                  {agents.filter(a => a.status === 'running').length} / {agents.length}
                </h3>
             </div>
          </CardContent>
        </Card>
        <Card className="bg-card/50 backdrop-blur">
          <CardContent className="p-6 flex flex-row items-center gap-4">
             <div className="p-3 bg-emerald-500/10 rounded-full text-emerald-500">
               <Workflow className="w-6 h-6" />
             </div>
             <div>
                <p className="text-sm font-medium text-muted-foreground">Orchestration Layer</p>
                <h3 className="text-2xl font-bold font-mono text-foreground">Healthy</h3>
             </div>
          </CardContent>
        </Card>
        <Card className="bg-card/50 backdrop-blur">
          <CardContent className="p-6 flex flex-row items-center gap-4">
             <div className="p-3 bg-purple-500/10 rounded-full text-purple-500">
               <Cpu className="w-6 h-6" />
             </div>
             <div>
                <p className="text-sm font-medium text-muted-foreground">Total Memory Usage</p>
                <h3 className="text-2xl font-bold font-mono text-foreground">9.4 GB</h3>
             </div>
          </CardContent>
        </Card>
      </div>

      <Card className="bg-card/50 backdrop-blur">
        <CardHeader>
          <CardTitle>Distributed AI Workforce</CardTitle>
          <CardDescription>Live status of specialized agents within the LangGraph orchestration framework.</CardDescription>
        </CardHeader>
        <CardContent>
           <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              {agents.map((agent) => (
                <div key={agent.id} className="relative group border border-border/60 rounded-xl p-5 bg-black/20 hover:bg-black/40 transition-all overflow-hidden flex flex-col gap-3">
                  <div className="absolute top-0 left-0 w-full h-1">
                     <div className={["h-full w-1/3",
                        agent.status === 'running' ? 'bg-blue-500 animate-pulse' :
                        agent.status === 'idle' ? 'bg-gray-500' :
                        agent.status === 'completed' ? 'bg-emerald-500' : 'bg-rose-500'
                     ].join(" ")} />
                  </div>
                  <div className="flex items-start justify-between">
                     <div>
                        <h4 className="font-semibold text-foreground tracking-tight">{agent.name}</h4>
                        <p className="text-xs text-muted-foreground font-mono mt-0.5">{agent.role}</p>
                     </div>
                     <Badge variant={
                        agent.status === 'running' ? 'default' :
                        agent.status === 'idle' ? 'outline' :
                        agent.status === 'completed' ? 'success' : 'destructive'
                     } className="capitalize flex gap-1.5 items-center">
                        {agent.status === 'running' && <Activity className="w-3 h-3 animate-pulse" />}
                        {agent.status}
                     </Badge>
                  </div>
                  
                  <div className="text-sm text-foreground/80 leading-relaxed min-h-[40px]">
                    {agent.currentTask || "Idle. Awaiting orchestration."}
                  </div>

                  <div className="flex items-center gap-4 mt-auto pt-4 border-t border-border/50">
                     <div className="flex items-center gap-1.5 text-xs text-muted-foreground font-mono">
                        <BrainCircuit className="w-3.5 h-3.5" />
                        {agent.llm}
                     </div>
                     <div className="flex items-center gap-1.5 text-xs text-muted-foreground font-mono ml-auto">
                        <Database className="w-3.5 h-3.5" />
                        {agent.memoryUsage}
                     </div>
                     {agent.status === 'failed' && (
                       <Shield className="w-3.5 h-3.5 text-rose-500 ml-auto" />
                     )}
                  </div>
                </div>
              ))}
           </div>
        </CardContent>
      </Card>
      
      <div className="grid gap-4 md:grid-cols-2">
         <Card className="bg-card/50 backdrop-blur">
            <CardHeader>
               <CardTitle className="text-base text-rose-400 flex items-center gap-2">
                 <ServerCrash className="w-4 h-4" /> Failover & Resilience Metrics
               </CardTitle>
            </CardHeader>
            <CardContent>
               <div className="space-y-4 font-mono text-sm">
                  <div className="flex justify-between border-b border-border/50 pb-2">
                     <span className="text-muted-foreground">GPT-4 Rate Limit Hits</span>
                     <span className="text-emerald-500">0 (healthy)</span>
                  </div>
                  <div className="flex justify-between border-b border-border/50 pb-2">
                     <span className="text-muted-foreground">Auto-Failover Events (Last 24h)</span>
                     <span className="text-amber-500">2 (Gemini {'->'} Claude fallback)</span>
                  </div>
                  <div className="flex justify-between border-b border-border/50 pb-2">
                     <span className="text-muted-foreground">API Circuit Breakers</span>
                     <span className="text-emerald-500">Target API: Closed</span>
                  </div>
                  <div className="flex justify-between border-border/50 pb-2">
                     <span className="text-muted-foreground">Event Bus Queue Size</span>
                     <span className="text-foreground">1,240 messages</span>
                  </div>
               </div>
            </CardContent>
         </Card>

         <Card className="bg-card/50 backdrop-blur flex justify-center items-center relative overflow-hidden group border-blue-500/20">
            <div className="absolute inset-0 bg-blue-500/5 transition-colors group-hover:bg-blue-500/10"></div>
            <CardContent className="relative z-10 text-center py-12">
               <Workflow className="w-12 h-12 text-blue-500 mx-auto mb-4 opacity-80" />
               <h3 className="text-lg font-semibold mb-2 tracking-tight">Enterprise Subsystems Validated</h3>
               <p className="text-sm text-muted-foreground max-w-sm mx-auto">
                 LangGraph Orchestration, Neo4j Knowledge Graph, PostgreSQL Active Store, and Vector Database are fully integrated.
               </p>
            </CardContent>
         </Card>
      </div>
    </div>
  );
}
