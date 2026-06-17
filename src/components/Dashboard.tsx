import { Activity, AlertTriangle, ArrowDownRight, ArrowUpRight, BarChart3, Box, BrainCircuit, CheckCircle2, Factory, Globe2, ScanFace, TrendingUp } from 'lucide-react';
import { Area, AreaChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';
import { metrics, products } from '../data/mockData';
import { Badge } from './ui/badge';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';

const chartData = [
  { name: 'Mon', anomalies: 120, discoveries: 4000 },
  { name: 'Tue', anomalies: 300, discoveries: 3000 },
  { name: 'Wed', anomalies: 200, discoveries: 5000 },
  { name: 'Thu', anomalies: 278, discoveries: 3908 },
  { name: 'Fri', anomalies: 189, discoveries: 4800 },
  { name: 'Sat', anomalies: 239, discoveries: 3800 },
  { name: 'Sun', anomalies: 349, discoveries: 4300 },
];

export function Dashboard() {
  return (
    <div className="flex flex-col gap-6">
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {metrics.map((metric) => (
          <Card key={metric.title} className="bg-card/50 backdrop-blur">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">{metric.title}</CardTitle>
              {metric.trend === 'up' ? <TrendingUp className="h-4 w-4 text-emerald-500" /> : <Activity className="h-4 w-4 text-rose-500" />}
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{metric.value}</div>
              <p className="text-xs text-muted-foreground mt-1 flex items-center gap-1">
                <span className={metric.change > 0 ? "text-emerald-500 flex items-center" : "text-rose-500 flex items-center"}>
                  {metric.change > 0 ? <ArrowUpRight className="h-3 w-3" /> : <ArrowDownRight className="h-3 w-3" />}
                  {Math.abs(metric.change)}%
                </span>
                from last week
              </p>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7 border border-border/50 rounded-xl bg-card/20 p-1">
        <Card className="lg:col-span-4 bg-transparent border-none shadow-none">
          <CardHeader>
            <CardTitle>Global Intelligence Activity</CardTitle>
            <CardDescription>Live telemetry from agent swarm discovery & anomaly detection.</CardDescription>
          </CardHeader>
          <CardContent className="pl-2">
            <div className="h-[300px] w-full mt-4">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={chartData} margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
                  <defs>
                    <linearGradient id="colorDiscoveries" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#3b82f6" stopOpacity={0.3}/>
                      <stop offset="95%" stopColor="#3b82f6" stopOpacity={0}/>
                    </linearGradient>
                    <linearGradient id="colorAnomalies" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#f43f5e" stopOpacity={0.3}/>
                      <stop offset="95%" stopColor="#f43f5e" stopOpacity={0}/>
                    </linearGradient>
                  </defs>
                  <XAxis dataKey="name" stroke="#52525b" fontSize={12} tickLine={false} axisLine={false} />
                  <YAxis stroke="#52525b" fontSize={12} tickLine={false} axisLine={false} tickFormatter={(value) => String(value)} />
                  <Tooltip contentStyle={{ backgroundColor: '#18181b', borderColor: '#27272a', borderRadius: '8px' }} />
                  <Area type="monotone" dataKey="discoveries" stroke="#3b82f6" strokeWidth={2} fillOpacity={1} fill="url(#colorDiscoveries)" />
                  <Area type="monotone" dataKey="anomalies" stroke="#f43f5e" strokeWidth={2} fillOpacity={1} fill="url(#colorAnomalies)" />
                </AreaChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>
        
        <Card className="lg:col-span-3 bg-transparent border-none shadow-none overflow-hidden flex flex-col">
          <CardHeader>
            <CardTitle>Semantic Reasoning Engine</CardTitle>
            <CardDescription>Live updates from Knowledge Graph</CardDescription>
          </CardHeader>
          <CardContent className="flex-1 overflow-y-auto">
             <div className="space-y-4">
                {[
                  { icon: Factory, text: "Mapped 400 new features for 'Home Appliances' category.", time: "2 min ago", color: "text-blue-500", bg: "bg-blue-500/10" },
                  { icon: AlertTriangle, text: "Detected synthetic review farm originating from Region 4.", time: "12 min ago", color: "text-rose-500", bg: "bg-rose-500/10" },
                  { icon: BrainCircuit, text: "Generated 1.2k new personalized embeddings.", time: "45 min ago", color: "text-purple-500", bg: "bg-purple-500/10" },
                  { icon: Globe2, text: "Synced compliance models with latest EU regulations.", time: "1 hr ago", color: "text-emerald-500", bg: "bg-emerald-500/10" },
                  { icon: ScanFace, text: "Completed multi-modal analysis on 5k new video reviews.", time: "2 hrs ago", color: "text-amber-500", bg: "bg-amber-500/10" }
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-4 p-3 rounded-lg hover:bg-white/5 transition-colors">
                    <div className={["p-2 rounded-md", item.bg].join(" ")}>
                      <item.icon className={["w-4 h-4", item.color].join(" ")} />
                    </div>
                    <div className="flex-1 space-y-1">
                      <p className="text-sm text-foreground/90 leading-tight">{item.text}</p>
                      <p className="text-xs text-muted-foreground">{item.time}</p>
                    </div>
                  </div>
                ))}
             </div>
          </CardContent>
        </Card>
      </div>

      <Card className="bg-card/50 backdrop-blur">
        <CardHeader>
          <CardTitle>Tracked Products Intelligence Matrix</CardTitle>
          <CardDescription>Real-time analytics fetched across global e-commerce ecosystems.</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="rounded-md border border-border/50 overflow-hidden">
            <table className="w-full text-sm text-left">
              <thead className="text-xs text-muted-foreground bg-muted/50 uppercase">
                <tr>
                  <th className="px-4 py-3 font-medium">Product / Brand</th>
                  <th className="px-4 py-3 font-medium">Category</th>
                  <th className="px-4 py-3 font-medium">Sent. Score</th>
                  <th className="px-4 py-3 font-medium">Fraud Risk</th>
                  <th className="px-4 py-3 font-medium">Compliance</th>
                  <th className="px-4 py-3 font-medium">Lifecycle</th>
                  <th className="px-4 py-3 font-medium">Benchmark</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border/50">
                {products.map((product) => (
                  <tr key={product.id} className="hover:bg-muted/30 transition-colors">
                    <td className="px-4 py-3">
                      <div className="font-medium text-foreground">{product.name}</div>
                      <div className="text-xs text-muted-foreground">{product.brand}</div>
                    </td>
                    <td className="px-4 py-3 text-muted-foreground">{product.category}</td>
                    <td className="px-4 py-3">
                      <div className="flex items-center gap-2">
                        <div className="h-2 w-16 bg-muted rounded-full overflow-hidden">
                          <div className={["h-full", product.sentimentScore > 80 ? 'bg-emerald-500' : product.sentimentScore > 60 ? 'bg-amber-500' : 'bg-rose-500'].join(" ")} style={{ width: product.sentimentScore + "%" }} />
                        </div>
                        <span className="text-xs text-muted-foreground">{product.sentimentScore}</span>
                      </div>
                    </td>
                    <td className="px-4 py-3">
                      <Badge variant={product.fraudRisk > 50 ? 'destructive' : product.fraudRisk > 20 ? 'warning' : 'outline'} className="font-mono">
                        {product.fraudRisk}%
                      </Badge>
                    </td>
                    <td className="px-4 py-3">
                       <Badge variant={product.complianceStatus === 'compliant' ? 'success' : product.complianceStatus === 'warning' ? 'warning' : 'destructive'}>
                          {product.complianceStatus === 'compliant' && <CheckCircle2 className="w-3 h-3 mr-1 inline" />}
                          {product.complianceStatus === 'warning' && <AlertTriangle className="w-3 h-3 mr-1 inline" />}
                          {product.complianceStatus}
                       </Badge>
                    </td>
                    <td className="px-4 py-3 capitalize text-muted-foreground">
                      <span className={["inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium",
                        product.lifecycleStage === 'launch' ? 'bg-blue-500/10 text-blue-500' : 
                        product.lifecycleStage === 'growth' ? 'bg-emerald-500/10 text-emerald-500' : 
                        product.lifecycleStage === 'maturity' ? 'bg-purple-500/10 text-purple-500' : 
                        'bg-gray-500/10 text-gray-400'
                      ].join(" ")}>
                        {product.lifecycleStage}
                      </span>
                    </td>
                    <td className="px-4 py-3 font-mono text-muted-foreground">{product.benchmarkScore}/100</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
