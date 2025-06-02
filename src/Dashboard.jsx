import React from 'react';
import { motion } from 'framer-motion';
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';

const data = [
  { name: 'Week 1', revenue: 4200 },
  { name: 'Week 2', revenue: 5300 },
  { name: 'Week 3', revenue: 6100 },
  { name: 'Week 4', revenue: 4800 },
];

export default function Dashboard() {
  return (
    <div className="min-h-screen bg-gray-100 p-6 font-sans">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">Secure Pay Service Dashboard</h1>
        <div className="flex gap-4 items-center">
          <span className="text-gray-600">🔔</span>
          <span className="text-gray-600">⚙️</span>
          <span className="text-gray-600">👤</span>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
        {[
          { label: 'Monthly Revenue', value: '$20,400' },
          { label: 'Processing Fees', value: '$1,070' },
          { label: 'Pending Payouts', value: '$3,200' },
          { label: 'Chargebacks', value: '2' },
        ].map((item, i) => (
          <div key={i} className="bg-white shadow rounded-2xl p-4">
            <h2 className="text-sm text-gray-500">{item.label}</h2>
            <p className="text-xl font-semibold">{item.value}</p>
          </div>
        ))}
      </div>

      <div className="bg-white p-4 rounded-2xl shadow mb-6">
        <h2 className="text-lg font-semibold mb-4">Revenue Overview</h2>
        <ResponsiveContainer width="100%" height={250}>
          <BarChart data={data}>
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Bar dataKey="revenue" fill="#4F46E5" radius={[4, 4, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </div>

      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}>
        <div className="flex flex-wrap gap-4">
          <button className="bg-indigo-600 text-white px-4 py-2 rounded-xl shadow">New Client</button>
          <button className="border border-gray-400 text-gray-700 px-4 py-2 rounded-xl">Manual Entry</button>
          <button className="bg-gray-100 text-gray-800 px-4 py-2 rounded-xl">Export Report</button>
        </div>
      </motion.div>
    </div>
  );
}