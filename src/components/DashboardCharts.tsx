"use client";

import { 
  PieChart, Pie, Cell, Tooltip, ResponsiveContainer, 
  BarChart, Bar, XAxis, YAxis, CartesianGrid,
  Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis
} from 'recharts';

interface DashboardChartsProps {
  distributionData: { name: string; value: number }[];
  assessmentData: { name: string; count: number }[];
  certData: { name: string; count: number }[];
  projectStatusData: { name: string; value: number; fill?: string }[];
  topTechData: { name: string; count: number }[];
  certIssuerData: { name: string; value: number }[];
}

const COLORS = ['#3b82f6', '#8b5cf6', '#f59e0b', '#10b981', '#ec4899', '#06b6d4'];

export default function DashboardCharts({ 
  distributionData, 
  assessmentData, 
  certData, 
  projectStatusData,
  topTechData,
  certIssuerData
}: DashboardChartsProps) {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-10">
      
      {/* 1. Top Technologies Radar Chart */}
      <div className="bg-white dark:bg-white/5 border border-gray-200 dark:border-white/5 rounded-2xl p-6 shadow-sm">
        <h2 className="text-sm font-bold text-gray-800 dark:text-white mb-6 uppercase tracking-widest">Top Technologies</h2>
        <div className="h-[300px] w-full">
          <ResponsiveContainer width="100%" height="100%">
            <RadarChart cx="50%" cy="50%" outerRadius="70%" data={topTechData}>
              <PolarGrid stroke="rgba(255,255,255,0.1)" />
              <PolarAngleAxis dataKey="name" tick={{ fill: '#888', fontSize: 12 }} />
              <PolarRadiusAxis angle={30} domain={[0, 'dataMax']} tick={false} axisLine={false} />
              <Radar name="Projects" dataKey="count" stroke="#3b82f6" fill="#3b82f6" fillOpacity={0.5} />
              <Tooltip 
                contentStyle={{ 
                  borderRadius: '16px', 
                  border: '1px solid rgba(255,255,255,0.1)',
                  backgroundColor: 'rgba(10, 10, 20, 0.9)',
                  color: '#fff',
                  backdropFilter: 'blur(10px)'
                }}
              />
            </RadarChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* 2. Certificates by Issuer */}
      <div className="bg-white dark:bg-white/5 border border-gray-200 dark:border-white/5 rounded-2xl p-6 shadow-sm">
        <h2 className="text-sm font-bold text-gray-800 dark:text-white mb-6 uppercase tracking-widest">Certificates by Issuer</h2>
        <div className="h-[300px] w-full">
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={certIssuerData}
                cx="50%"
                cy="50%"
                innerRadius={60}
                outerRadius={100}
                paddingAngle={3}
                dataKey="value"
                stroke="none"
              >
                {certIssuerData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} className="hover:opacity-80 transition-opacity outline-none" />
                ))}
              </Pie>
              <Tooltip 
                contentStyle={{ 
                  borderRadius: '16px', 
                  border: '1px solid rgba(255,255,255,0.1)',
                  backgroundColor: 'rgba(10, 10, 20, 0.9)',
                  color: '#fff',
                  backdropFilter: 'blur(10px)'
                }}
              />
            </PieChart>
          </ResponsiveContainer>
        </div>
        {/* Custom Legend */}
        <div className="flex flex-wrap justify-center gap-3 mt-4">
          {certIssuerData.map((entry, index) => (
            <div key={entry.name} className="flex items-center gap-2 text-[10px] font-semibold text-gray-500 dark:text-gray-400">
              <span className="w-2 h-2 rounded-full" style={{ backgroundColor: COLORS[index % COLORS.length] }}></span>
              {entry.name} ({entry.value})
            </div>
          ))}
        </div>
      </div>

      {/* 3. Project Deployments Chart */}
      <div className="bg-white dark:bg-white/5 border border-gray-200 dark:border-white/5 rounded-2xl p-6 shadow-sm">
        <h2 className="text-sm font-bold text-gray-800 dark:text-white mb-6 uppercase tracking-widest">Project Deployments</h2>
        <div className="h-[300px] w-full">
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={projectStatusData}
                cx="50%"
                cy="50%"
                innerRadius={0}
                outerRadius={110}
                paddingAngle={2}
                dataKey="value"
                stroke="none"
              >
                {projectStatusData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.fill || COLORS[index % COLORS.length]} className="hover:opacity-80 transition-opacity outline-none" />
                ))}
              </Pie>
              <Tooltip 
                contentStyle={{ 
                  borderRadius: '16px', 
                  border: '1px solid rgba(255,255,255,0.1)',
                  backgroundColor: 'rgba(10, 10, 20, 0.9)',
                  color: '#fff',
                  backdropFilter: 'blur(10px)'
                }}
              />
            </PieChart>
          </ResponsiveContainer>
        </div>
        {/* Custom Legend */}
        <div className="flex flex-wrap justify-center gap-4 mt-4">
          {projectStatusData.map((entry, index) => (
            <div key={entry.name} className="flex items-center gap-2 text-xs font-semibold text-gray-500 dark:text-gray-400">
              <span className="w-3 h-3 rounded-full" style={{ backgroundColor: entry.fill || COLORS[index % COLORS.length] }}></span>
              {entry.name} ({entry.value})
            </div>
          ))}
        </div>
      </div>

      {/* 4. Assessment Categories Bar Chart */}
      <div className="bg-white dark:bg-white/5 border border-gray-200 dark:border-white/5 rounded-2xl p-6 shadow-sm">
        <h2 className="text-sm font-bold text-gray-800 dark:text-white mb-6 uppercase tracking-widest">Assessments by Category</h2>
        <div className="h-[300px] w-full">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart
              data={assessmentData}
              margin={{ top: 20, right: 30, left: -20, bottom: 5 }}
            >
              <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="rgba(255,255,255,0.1)" />
              <XAxis 
                dataKey="name" 
                tick={{ fill: '#888', fontSize: 12, fontWeight: 600 }} 
                axisLine={false}
                tickLine={false}
                dy={10}
              />
              <YAxis 
                tick={{ fill: '#888', fontSize: 12 }}
                axisLine={false}
                tickLine={false}
                allowDecimals={false}
              />
              <Tooltip
                cursor={{ fill: 'rgba(255,255,255,0.05)' }}
                contentStyle={{ 
                  borderRadius: '16px', 
                  border: '1px solid rgba(255,255,255,0.1)',
                  backgroundColor: 'rgba(10, 10, 20, 0.9)',
                  color: '#fff',
                  backdropFilter: 'blur(10px)'
                }}
              />
              <Bar 
                dataKey="count" 
                fill="#8b5cf6" 
                radius={[6, 6, 0, 0]}
                barSize={40}
              />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* 5. Certificates by Category Bar Chart */}
      <div className="bg-white dark:bg-white/5 border border-gray-200 dark:border-white/5 rounded-2xl p-6 shadow-sm">
        <h2 className="text-sm font-bold text-gray-800 dark:text-white mb-6 uppercase tracking-widest">Certificates by Category</h2>
        <div className="h-[300px] w-full">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart
              data={certData}
              margin={{ top: 20, right: 30, left: -20, bottom: 5 }}
            >
              <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="rgba(255,255,255,0.1)" />
              <XAxis 
                dataKey="name" 
                tick={{ fill: '#888', fontSize: 12, fontWeight: 600 }} 
                axisLine={false}
                tickLine={false}
                dy={10}
              />
              <YAxis 
                tick={{ fill: '#888', fontSize: 12 }}
                axisLine={false}
                tickLine={false}
                allowDecimals={false}
              />
              <Tooltip
                cursor={{ fill: 'rgba(255,255,255,0.05)' }}
                contentStyle={{ 
                  borderRadius: '16px', 
                  border: '1px solid rgba(255,255,255,0.1)',
                  backgroundColor: 'rgba(10, 10, 20, 0.9)',
                  color: '#fff',
                  backdropFilter: 'blur(10px)'
                }}
              />
              <Bar 
                dataKey="count" 
                fill="#f59e0b" 
                radius={[6, 6, 0, 0]}
                barSize={40}
              />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* 6. Content Distribution Doughnut Chart */}
      <div className="bg-white dark:bg-white/5 border border-gray-200 dark:border-white/5 rounded-2xl p-6 shadow-sm">
        <h2 className="text-sm font-bold text-gray-800 dark:text-white mb-6 uppercase tracking-widest">Content Distribution</h2>
        <div className="h-[300px] w-full">
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={distributionData}
                cx="50%"
                cy="50%"
                innerRadius={80}
                outerRadius={110}
                paddingAngle={5}
                dataKey="value"
                stroke="none"
              >
                {distributionData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} className="hover:opacity-80 transition-opacity outline-none" />
                ))}
              </Pie>
              <Tooltip 
                contentStyle={{ 
                  borderRadius: '16px', 
                  border: '1px solid rgba(255,255,255,0.1)',
                  backgroundColor: 'rgba(10, 10, 20, 0.9)',
                  color: '#fff',
                  backdropFilter: 'blur(10px)'
                }}
              />
            </PieChart>
          </ResponsiveContainer>
        </div>
        {/* Custom Legend */}
        <div className="flex flex-wrap justify-center gap-4 mt-4">
          {distributionData.map((entry, index) => (
            <div key={entry.name} className="flex items-center gap-2 text-xs font-semibold text-gray-500 dark:text-gray-400">
              <span className="w-3 h-3 rounded-full" style={{ backgroundColor: COLORS[index % COLORS.length] }}></span>
              {entry.name} ({entry.value})
            </div>
          ))}
        </div>
      </div>

    </div>
  );
}
