'use client'
import React from 'react'
import { motion } from 'framer-motion'
import {
  NotebookPen,
  Filter,
  BarChart3,
  Bot,
} from 'lucide-react'

const features = [
  {
    icon: <NotebookPen className="h-6 w-6 text-indigo-600" />,
    title: 'Manual Tracking',
    description: 'Add your income and expenses quickly with ease.',
  },
  {
    icon: <Filter className="h-6 w-6 text-emerald-600" />,
    title: 'Smart Categories',
    description: 'Organize and filter your finances intuitively.',
  },
  {
    icon: <BarChart3 className="h-6 w-6 text-blue-600" />,
    title: 'Data Visualizations',
    description: 'See charts that explain your spending habits clearly.',
  },
  {
    icon: <Bot className="h-6 w-6 text-pink-600" />,
    title: 'AI Budget Assistant',
    description: 'Get smart, personalized advice for budgeting better.',
  },
]

const FeaturesSection = () => {
  return (
    <section className="relative z-10 py-20 px-6 md:px-12 bg-[#f2f4f8]">
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-12"
      >
        Why Choose <span className="text-indigo-600">MoneyMind?</span>
      </motion.h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
        {features.map((feature, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            viewport={{ once: true }}
            className="p-6 rounded-3xl bg-[#f2f4f8] shadow-[8px_8px_16px_#d1d9e6,-8px_-8px_16px_#ffffff] transition-all hover:scale-[1.02] hover:shadow-[inset_4px_4px_8px_#d1d9e6,inset_-4px_-4px_8px_#ffffff]"
          >
            <div className="flex items-center justify-center w-12 h-12 mb-4 rounded-full bg-white shadow-inner">
              {feature.icon}
            </div>
            <h3 className="text-lg font-semibold text-gray-800 mb-2">{feature.title}</h3>
            <p className="text-gray-600 text-sm">{feature.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  )
}

export default FeaturesSection
