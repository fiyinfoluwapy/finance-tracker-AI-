import React from 'react'
import {
  ArrowRightIcon,
  PiggyBankIcon,
  LineChartIcon,
} from 'lucide-react'

const Hero = () => {
  return (
    <div className="relative w-full overflow-hidden bg-gradient-to-b from-indigo-50 via-white to-blue-50">
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-100 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
        <div className="absolute top-1/3 right-1/4 w-64 h-64 bg-purple-100 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-8 left-1/2 w-64 h-64 bg-pink-100 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
      </div>

      <div className="relative container mx-auto px-4 pt-20 pb-24 md:pt-28 md:pb-32">
        <div className="flex flex-col items-center text-center max-w-5xl mx-auto">
          {/* Main Content */}
          <div className="flex items-center space-x-2 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-full shadow-sm mb-8">
            <span className="flex h-2 w-2 rounded-full bg-green-500"></span>
            <span className="text-sm font-medium text-gray-600">
              Smart Money Management
            </span>
          </div>

          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            Master Your Money,
            <span className="block bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
              Shape Your Future
            </span>
          </h1>

          <p className="text-xl text-gray-600 mb-10 max-w-2xl">
            Take control of your financial journey with intelligent expense
            tracking, personalized insights, and smart saving strategies.
          </p>

          {/* CTA Section */}
          <div className="flex flex-col sm:flex-row gap-4 mb-16">
            <button className="flex items-center justify-center px-8 py-4 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-xl font-semibold hover:opacity-90 transition-all group">
              Start Saving Now
              <ArrowRightIcon className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="px-8 py-4 bg-white/80 backdrop-blur-sm text-gray-700 rounded-xl font-semibold hover:bg-white/90 transition-all border border-gray-200">
              Watch Demo
            </button>
          </div>

          {/* Feature Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-4xl">
            <div className="bg-white/80 backdrop-blur-sm p-6 rounded-2xl border border-gray-100 hover:shadow-lg transition-all">
              <div className="bg-blue-100 w-12 h-12 rounded-xl flex items-center justify-center mb-4">
                {/* Add your icon here, if needed */}
                <LineChartIcon className="h-6 w-6 text-blue-600" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">
                Smart Analytics
              </h3>
              <p className="text-gray-600">
                Track your spending patterns with intelligent insights
              </p>
            </div>

            <div className="bg-white/80 backdrop-blur-sm p-6 rounded-2xl border border-gray-100 hover:shadow-lg transition-all">
              <div className="bg-green-100 w-12 h-12 rounded-xl flex items-center justify-center mb-4">
                <PiggyBankIcon className="h-6 w-6 text-green-600" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Saving Goals</h3>
              <p className="text-gray-600">
                Set and achieve your financial milestones
              </p>
            </div>

            <div className="bg-white/80 backdrop-blur-sm p-6 rounded-2xl border border-gray-100 hover:shadow-lg transition-all">
              <div className="bg-purple-100 w-12 h-12 rounded-xl flex items-center justify-center mb-4">
                <LineChartIcon className="h-6 w-6 text-purple-600" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Smart Tips</h3>
              <p className="text-gray-600">
                Get personalized advice to optimize savings
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Floating Elements */}
      <div className="absolute top-1/4 -left-16 w-32 h-32 bg-yellow-100 rounded-full opacity-50 blur-2xl"></div>
      <div className="absolute bottom-1/4 -right-16 w-32 h-32 bg-blue-100 rounded-full opacity-50 blur-2xl"></div>
    </div>
  )
}

export default Hero
