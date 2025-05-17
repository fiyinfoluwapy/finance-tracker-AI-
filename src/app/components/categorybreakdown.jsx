import React, { useMemo } from 'react'
import { PieChart, Pie, Cell, Tooltip, Legend, ResponsiveContainer } from 'recharts'
import { motion } from 'framer-motion'

const COLORS = [
  '#0088FE',
  '#00C49F',
  '#FFBB28',
  '#FF8042',
  '#A28AFF',
  '#FF6F91',
  '#FF9671',
  '#FFC75F',
]

const CategoryBreakdown = ({ transactions }) => {
  // To group expenses by category and sum amounts
  const data = useMemo(() => {
    const expenseTransactions = transactions.filter((t) => t.amount < 0)
    const categoryMap = {}

    expenseTransactions.forEach(({ category, amount }) => {
      if (!category) return // skip if no category
      if (!categoryMap[category]) categoryMap[category] = 0
      categoryMap[category] += Math.abs(amount)
    })

    return Object.entries(categoryMap).map(([category, value]) => ({
      name: category,
      value,
    }))
  }, [transactions])

  if (data.length === 0) {
    return (
      <div className="text-center text-gray-500 mt-8">
        No expense data to display in category breakdown.
      </div>
    )
  }

  return (
    <motion.div
      className="bg-white rounded-2xl p-6 shadow-md mt-8"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <h3 className="text-xl font-semibold mb-4 text-gray-800 text-center">
        Expense Ratio by Category
      </h3>
      <ResponsiveContainer width="100%" height={300}>
        <PieChart>
          <Pie
            data={data}
            dataKey="value"
            nameKey="name"
            cx="50%"
            cy="50%"
            outerRadius={100}
            fill="#8884d8"
            label={(entry) => entry.name}
          >
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
          <Tooltip formatter={(value) => `$${value.toFixed(2)}`} />
          <Legend verticalAlign="bottom" height={36} />
        </PieChart>
      </ResponsiveContainer>
    </motion.div>
  )
}

export default CategoryBreakdown
