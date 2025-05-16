import React, { useMemo } from 'react'
import { motion } from 'framer-motion'

const BalanceSummary = ({ transactions }) => {
  const { income, expenses, balance } = useMemo(() => {
    const income = transactions
      .filter((t) => t.amount > 0)
      .reduce((sum, t) => sum + t.amount, 0)
    const expenses = transactions
      .filter((t) => t.amount < 0)
      .reduce((sum, t) => sum + Math.abs(t.amount), 0)
    const balance = income - expenses
    return {
      income,
      expenses,
      balance,
    }
  }, [transactions])

  return (
    <motion.div
      className="bg-white rounded-2xl p-6"
      style={{
        boxShadow:
          '9px 9px 16px rgb(163,177,198,0.6), -9px -9px 16px rgba(255,255,255, 0.5)',
      }}
      whileHover={{
        boxShadow:
          '12px 12px 20px rgb(163,177,198,0.7), -12px -12px 20px rgba(255,255,255, 0.8)',
      }}
      transition={{
        duration: 0.3,
      }}
    >
      <h2 className="text-xl font-semibold mb-4 text-gray-800">
        Balance Summary
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <motion.div
          className="bg-green-50 p-4 rounded-lg"
          whileHover={{
            scale: 1.03,
          }}
          transition={{
            duration: 0.2,
          }}
        >
          <div className="text-sm text-green-600 font-medium">Total Income</div>
          <div className="text-xl font-bold text-green-700">
            ${income.toFixed(2)}
          </div>
        </motion.div>

        <motion.div
          className="bg-red-50 p-4 rounded-lg"
          whileHover={{
            scale: 1.03,
          }}
          transition={{
            duration: 0.2,
          }}
        >
          <div className="text-sm text-red-600 font-medium">Total Expenses</div>
          <div className="text-xl font-bold text-red-700">
            ${expenses.toFixed(2)}
          </div>
        </motion.div>

        <motion.div
          className="bg-blue-50 p-4 rounded-lg"
          whileHover={{
            scale: 1.03,
          }}
          transition={{
            duration: 0.2,
          }}
        >
          <div className="text-sm text-blue-600 font-medium">Net Balance</div>
          <div
            className={`text-xl font-bold ${
              balance >= 0 ? 'text-blue-700' : 'text-red-700'
            }`}
          >
            ${balance.toFixed(2)}
          </div>
        </motion.div>
      </div>
    </motion.div>
  )
}

export default BalanceSummary
