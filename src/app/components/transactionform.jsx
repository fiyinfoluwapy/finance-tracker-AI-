'use client'
import React, { useState } from 'react';
import { PlusIcon } from 'lucide-react';
import { motion } from 'framer-motion';

const CATEGORIES = [
  'Food',
  'Rent',
  'Utilities',
  'Entertainment',
  'Transportation',
  'Shopping',
  'Healthcare',
  'Education',
  'Salary',
  'Investment',
  'Gift',
  'Other',
];

const TransactionForm = ({ onAddTransaction }) => {
  const [amount, setAmount] = useState('');
  const [description, setDescription] = useState('');
  const [category, setCategory] = useState(CATEGORIES[0]);
  const [transactionType, setTransactionType] = useState('Expense'); // 'Income' or 'Expense'

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!amount || !description) return;

    const parsedAmount = parseFloat(amount);
    const finalAmount = transactionType === 'Expense' ? -Math.abs(parsedAmount) : Math.abs(parsedAmount);

    onAddTransaction({
      amount: finalAmount,
      description,
      category,
    });

    setAmount('');
    setDescription('');
    setCategory(CATEGORIES[0]);
    setTransactionType('Expense');
  };

  return (
    <motion.div
      className="bg-white rounded-2xl p-6 mb-6"
      style={{
        boxShadow:
          '9px 9px 16px rgb(163,177,198,0.6), -9px -9px 16px rgba(255,255,255, 0.5)',
      }}
      whileHover={{
        boxShadow:
          '12px 12px 20px rgb(163,177,198,0.7), -12px -12px 20px rgba(255,255,255, 0.8)',
      }}
      transition={{ duration: 0.3 }}
    >
      <h2 className="text-xl font-semibold mb-4 text-gray-800">
        Add New Transaction
      </h2>
      <form onSubmit={handleSubmit}>
        {/* Transaction Type Toggle */}
        <div className="mb-4 flex space-x-2">
          {['Income', 'Expense'].map((type) => (
            <button
              type="button"
              key={type}
              onClick={() => setTransactionType(type)}
              className={`w-full px-4 py-2 rounded-lg font-medium ${
                transactionType === type
                  ? 'bg-blue-600 text-white'
                  : 'bg-gray-100 text-gray-700'
              } transition-all duration-150`}
            >
              {type}
            </button>
          ))}
        </div>

        {/* Amount Input */}
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Amount
          </label>
          <input
            type="number"
            step="0.01"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            placeholder="e.g., 5000"
            className="w-full px-4 py-2 rounded-lg bg-gray-50 border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 text-black"
            required
          />
        </div>

        {/* Description Input */}
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Description
          </label>
          <input
            type="text"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            placeholder="What's this transaction for?"
            className="w-full px-4 py-2 rounded-lg bg-gray-50 border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 text-black"
            required
          />
        </div>

        {/* Category Select */}
        <div className="mb-5">
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Category
          </label>
          <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="w-full px-4 py-2 rounded-lg bg-gray-50 border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 text-black"
          >
            {CATEGORIES.map((cat) => (
              <option key={cat} value={cat}>
                {cat}
              </option>
            ))}
          </select>
        </div>

        {/* Submit Button */}
        <motion.button
          type="submit"
          className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-lg flex items-center justify-center"
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
        >
          <PlusIcon size={18} className="mr-2" />
          Add Transaction
        </motion.button>
      </form>
    </motion.div>
  );
};

export default TransactionForm;
