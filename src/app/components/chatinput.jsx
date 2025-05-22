'use client'
import React, { useState } from 'react'
import { FiSend } from 'react-icons/fi'

const ChatInput = ({ onSend }) => {
  const [input, setInput] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!input.trim()) return
    onSend(input)
    setInput('')
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="flex items-center gap-2 p-3 border-t bg-white"
    >
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Ask a question..."
        className="flex-1 px-4 py-2 rounded-full bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm text-black"
      />
      <button
        type="submit"
        className="p-2 rounded-full bg-[#0E4574] text-white hover:bg-[#0c3c63] transition"
      >
        <FiSend size={18} />
      </button>
    </form>
  )
}

export default ChatInput
