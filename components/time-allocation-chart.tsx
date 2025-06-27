"use client"

import { motion } from 'framer-motion'

export function TimeAllocationChart() {
  console.log("TimeAllocationChart component rendered")
  
  return (
    <div className="bg-white rounded-2xl shadow-xl p-8 max-w-4xl mx-auto">
      <h3 className="text-2xl font-bold text-center mb-8 text-gray-800">
        Transform How You Spend Your Time
      </h3>
      
      <div className="grid md:grid-cols-2 gap-8">
        {/* Before */}
        <div className="space-y-4">
          <h4 className="text-lg font-semibold text-red-600 text-center">Before: Current Reality</h4>
          
          <motion.div
            initial={{ scaleY: 0 }}
            whileInView={{ scaleY: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="relative h-64 bg-gray-100 rounded-lg overflow-hidden"
          >
            {/* 80% Unimportant tasks */}
            <motion.div 
              initial={{ height: 0 }}
              whileInView={{ height: '80%' }}
              transition={{ duration: 1, delay: 0.5 }}
              className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-red-500 to-red-400 flex items-end justify-center pb-4"
            >
              <span className="text-white font-bold text-lg">80%</span>
            </motion.div>
            
            {/* 20% Important tasks */}
            <motion.div 
              initial={{ height: 0 }}
              whileInView={{ height: '20%' }}
              transition={{ duration: 1, delay: 0.3 }}
              className="absolute top-0 left-0 right-0 bg-gradient-to-b from-green-500 to-green-400 flex items-center justify-center"
            >
              <span className="text-white font-bold">20%</span>
            </motion.div>
          </motion.div>
          
          <div className="space-y-2 text-sm">
            <div className="flex items-center">
              <div className="w-4 h-4 bg-red-500 rounded mr-2"></div>
              <span className="text-gray-600">Repetitive emails, mundane meetings, busy work</span>
            </div>
            <div className="flex items-center">
              <div className="w-4 h-4 bg-green-500 rounded mr-2"></div>
              <span className="text-gray-600">Strategic work, family time, personal growth</span>
            </div>
          </div>
        </div>
        
        {/* After */}
        <div className="space-y-4">
          <h4 className="text-lg font-semibold text-nature text-center">After: With AI Avatar</h4>
          
          <motion.div
            initial={{ scaleY: 0 }}
            whileInView={{ scaleY: 1 }}
            transition={{ duration: 1, delay: 0.8 }}
            className="relative h-64 bg-gray-100 rounded-lg overflow-hidden"
          >
            {/* 20% Automated tasks */}
            <motion.div 
              initial={{ height: 0 }}
              whileInView={{ height: '20%' }}
              transition={{ duration: 1, delay: 1.1 }}
              className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-tech to-tech-light flex items-center justify-center"
            >
              <span className="text-white font-bold">20%</span>
            </motion.div>
            
            {/* 80% Important tasks */}
            <motion.div 
              initial={{ height: 0 }}
              whileInView={{ height: '80%' }}
              transition={{ duration: 1, delay: 1.3 }}
              className="absolute top-0 left-0 right-0 bg-gradient-to-b from-nature to-nature-dark flex items-end justify-center pb-4"
            >
              <span className="text-white font-bold text-lg">80%</span>
            </motion.div>
          </motion.div>
          
          <div className="space-y-2 text-sm">
            <div className="flex items-center">
              <div className="w-4 h-4 bg-tech rounded mr-2"></div>
              <span className="text-gray-600">AI handles routine tasks automatically</span>
            </div>
            <div className="flex items-center">
              <div className="w-4 h-4 bg-nature rounded mr-2"></div>
              <span className="text-gray-600">You focus on what truly matters</span>
            </div>
          </div>
        </div>
      </div>
      
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="text-center mt-8"
      >
        <p className="text-lg font-semibold gradient-text">
          Flip the script. Reclaim your time.
        </p>
      </motion.div>
    </div>
  )
}