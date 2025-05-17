import React, { useMemo } from 'react'
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Legend,
} from 'recharts'

const SpendingChart = ({ transactions }) => {
  // Group expenses by category
  const data = useMemo(() => {
    const categoryTotals = {}

    transactions.forEach((t) => {
      if (t.amount < 0) {
        const cat = t.category || 'Uncategorized'
        categoryTotals[cat] = (categoryTotals[cat] || 0) + Math.abs(t.amount)
      }
    })

    return Object.entries(categoryTotals).map(([category, total]) => ({
      category,
      total,
    }))
  }, [transactions])

  if (data.length === 0) return null // Don't render if no expenses

  return (
    <div className="bg-white p-6 rounded-2xl mt-10 shadow-md">
      <h3 className="text-xl font-semibold text-gray-800 mb-4">
        Spending by Category
      </h3>
      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="category" />
          <YAxis />
          <Tooltip formatter={(value) => `$${value.toFixed(2)}`} />
          <Legend />
          <Bar dataKey="total" fill="#D24715" name="Amount Spent" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  )
}

export default SpendingChart
