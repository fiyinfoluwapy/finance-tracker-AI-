import React from 'react'
import { motion } from 'framer-motion'

const AiResponseCard = ({ role, content }) => {
  const isUser = role === 'user'

  return (
    <motion.div
      className={`p-3 rounded-xl w-fit max-w-xs ${
        isUser
          ? 'bg-blue-100 ml-auto text-right'
          : 'bg-gray-100 mr-auto text-left'
      }`}
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
    >
      <p className="text-sm text-gray-800 whitespace-pre-line">{content}</p>
    </motion.div>
  )
}

export default AiResponseCard
