import React, { useState } from 'react'
import { motion } from 'framer-motion'
import TransactionForm from './transactionform'
import TransactionList from './transactionlist'
import BalanceSummary from './balancesummary'

const TransactionManager = () => {
  const [transactions, setTransactions] = useState([])

  const addTransaction = (transaction) => {
    const newTransaction = {
      ...transaction,
      id: Date.now().toString(),
      date: new Date(),
    }
    setTransactions([...transactions, newTransaction])
  }

  return (
    <div className="max-w-6xl w-full px-4 mx-auto">
      <motion.h1
        className="text-3xl md:text-4xl font-bold text-center mb-10 text-gray-800"
        initial={{
          opacity: 0,
          y: 20,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          duration: 0.6,
        }}
      >
        Try It Now – Start Managing Instantly
      </motion.h1>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        <motion.div
          className="lg:col-span-5"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <TransactionForm onAddTransaction={addTransaction} />
          <BalanceSummary transactions={transactions} />
        </motion.div>

        <motion.div
          className="lg:col-span-7"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <TransactionList transactions={transactions} />
        </motion.div>
      </div>
    </div>
  )
}

export default TransactionManager
