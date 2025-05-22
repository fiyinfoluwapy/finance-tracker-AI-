'use client'

import React, { useState } from 'react'
import AiBudgetAssistant from './components/aibudgetassitant'

export default function Home() {
  return (
    <main className="min-h-screen p-6 sm:p-10 bg-[#f9f9f9] dark:bg-[#0e0e0e] text-gray-800 dark:text-gray-100 flex flex-col items-center justify-start gap-8">
      <section className="w-full max-w-2xl">
        <h1 className="text-2xl sm:text-3xl font-bold text-center mb-4">
          💬 AI Budget Assistant
        </h1>
        <p className="text-center text-sm sm:text-base text-gray-600 dark:text-gray-400 mb-6">
          Ask financial questions, get personalized insights, and manage your budget smarter.
        </p>
        <AiBudgetAssistant />
      </section>
    </main>
  )
}
