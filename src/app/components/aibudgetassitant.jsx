'use client'
import React, { useState } from 'react'
import AiResponseCard from './airesponsecard'
import ChatInput from './chatinput'
import { motion, AnimatePresence } from 'framer-motion'

const AiBudgetAssistant = () => {
  const [messages, setMessages] = useState([
    {
      role: 'assistant',
      content: 'Hi! I’m your budgeting assistant. How can I help you today?',
    },
  ])
  const [isLoading, setIsLoading] = useState(false)

  const sendMessage = async (userInput) => {
    const newMessages = [...messages, { role: 'user', content: userInput }]
    setMessages(newMessages)
    setIsLoading(true)

    try {
      const res = await fetch('/api/budget-ai', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ messages: newMessages }),
      })

      const data = await res.json()

      if (data?.reply) {
        setMessages((prev) => [...prev, { role: 'assistant', content: data.reply }])
      } else {
        setMessages((prev) => [
          ...prev,
          { role: 'assistant', content: 'Sorry, something went wrong.' },
        ])
      }
    } catch (error) {
      setMessages((prev) => [
        ...prev,
        { role: 'assistant', content: 'Error connecting to the assistant.' },
      ])
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="flex flex-col h-[500px] md:h-[600px] border rounded-2xl overflow-hidden shadow bg-white">
      <div className="flex-1 overflow-y-auto p-4 space-y-3">
        <AnimatePresence initial={false}>
          {messages.map((msg, index) => (
            <motion.div key={index} className="flex flex-col">
              <span
                className={`text-xs mb-1 ${
                  msg.role === 'user' ? 'text-blue-500 text-right' : 'text-gray-500 text-left'
                }`}
              >
                {msg.role === 'user' ? 'You' : 'AI Assistant'}
              </span>
              <AiResponseCard role={msg.role} content={msg.content} />
            </motion.div>
          ))}
        </AnimatePresence>
        {isLoading && (
          <motion.div
            className="text-sm text-gray-500 italic"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            Thinking...
          </motion.div>
        )}
      </div>

      <ChatInput onSend={sendMessage} />
    </div>
  )
}

export default AiBudgetAssistant
