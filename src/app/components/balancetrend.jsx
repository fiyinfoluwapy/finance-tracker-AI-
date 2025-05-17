import React, { useMemo } from 'react'
import {
  ResponsiveContainer,
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
} from 'recharts'

const BalanceTrend = ({ transactions }) => {
  // Prepare data: sort by date and calculate cumulative balance
  const data = useMemo(() => {
    // Sort transactions by date ascending
    const sorted = [...transactions].sort(
      (a, b) => new Date(a.date) - new Date(b.date)
    )

    let cumulative = 0
    // Build array with date and cumulative balance
    return sorted.map((tx) => {
      cumulative += tx.amount
      return {
        date: new Date(tx.date).toLocaleDateString('en-US', {
          month: 'short',
          day: 'numeric',
        }),
        balance: cumulative,
      }
    })
  }, [transactions])

  return (
    <div className="bg-white p-6 rounded-2xl shadow-lg mt-8">
      <h3 className="text-xl font-semibold mb-4 text-gray-800">Balance Over Time</h3>
      {data.length === 0 ? (
        <p className="text-gray-500">No transactions yet</p>
      ) : (
        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={data} margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="date" />
            <YAxis />
            <Tooltip
              formatter={(value) => `$${value.toFixed(2)}`}
              labelStyle={{ color: '#555' }}
            />
            <Line
              type="monotone"
              dataKey="balance"
              stroke="#3b82f6" 
              strokeWidth={3}
              dot={{ r: 4 }}
              activeDot={{ r: 6 }}
              animationDuration={800}
            />
          </LineChart>
        </ResponsiveContainer>
      )}
    </div>
  )
}

export default BalanceTrend
