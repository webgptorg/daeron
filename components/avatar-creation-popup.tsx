"use client"

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog'
import { Button } from '@/components/ui/button'
import { Progress } from '@/components/ui/progress'
import { CheckCircle2, Github, Linkedin, Facebook } from 'lucide-react'

interface AvatarCreationPopupProps {
  isOpen: boolean
  onClose: () => void
}

const platforms = [
  { name: 'LinkedIn', icon: Linkedin, color: 'bg-blue-600', description: 'Professional profile & connections' },
  { name: 'GitHub', icon: Github, color: 'bg-gray-800', description: 'Code repositories & contributions' },
  { name: 'Facebook', icon: Facebook, color: 'bg-blue-700', description: 'Social interactions & interests' },
  { name: 'Google', icon: CheckCircle2, color: 'bg-red-600', description: 'Search history & preferences' },
]

const scrapingSteps = [
  'Analyzing profile data...',
  'Processing communication patterns...',
  'Learning writing style...',
  'Training personality model...',
  'Finalizing avatar creation...'
]

export function AvatarCreationPopup({ isOpen, onClose }: AvatarCreationPopupProps) {
  const [selectedPlatforms, setSelectedPlatforms] = useState<string[]>([])
  const [isProcessing, setIsProcessing] = useState(false)
  const [currentStep, setCurrentStep] = useState(0)
  const [progress, setProgress] = useState(0)

  console.log("AvatarCreationPopup rendered:", { isOpen, selectedPlatforms, isProcessing })

  const togglePlatform = (platform: string) => {
    console.log("Toggling platform:", platform)
    setSelectedPlatforms(prev => 
      prev.includes(platform) 
        ? prev.filter(p => p !== platform)
        : [...prev, platform]
    )
  }

  const startProcessing = () => {
    console.log("Starting processing with platforms:", selectedPlatforms)
    setIsProcessing(true)
    setCurrentStep(0)
    setProgress(0)
    
    // Simulate processing steps
    const interval = setInterval(() => {
      setProgress(prev => {
        const newProgress = prev + 20
        if (newProgress >= 100) {
          clearInterval(interval)
          setTimeout(() => {
            console.log("Redirecting to ptbk.io")
            window.open('https://ptbk.io/agent-oC0c35', '_blank')
            onClose()
            setIsProcessing(false)
            setProgress(0)
            setCurrentStep(0)
            setSelectedPlatforms([])
          }, 1000)
          return 100
        }
        setCurrentStep(Math.floor(newProgress / 20))
        return newProgress
      })
    }, 1000)
  }

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold text-center gradient-text">
            Create Your AI Avatar
          </DialogTitle>
        </DialogHeader>
        
        <AnimatePresence mode="wait">
          {!isProcessing ? (
            <motion.div
              key="selection"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="space-y-6"
            >
              <p className="text-gray-600 text-center">
                Select platforms to import your data and create a personalized AI avatar
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {platforms.map((platform) => {
                  const isSelected = selectedPlatforms.includes(platform.name)
                  const Icon = platform.icon
                  
                  return (
                    <motion.div
                      key={platform.name}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <button
                        onClick={() => togglePlatform(platform.name)}
                        className={`w-full p-4 rounded-lg border-2 transition-all ${
                          isSelected 
                            ? 'border-nature bg-nature/10' 
                            : 'border-gray-200 hover:border-gray-300'
                        }`}
                      >
                        <div className="flex items-center space-x-3">
                          <div className={`p-2 rounded-lg ${platform.color} text-white`}>
                            <Icon size={24} />
                          </div>
                          <div className="text-left">
                            <h3 className="font-semibold">{platform.name}</h3>
                            <p className="text-sm text-gray-500">{platform.description}</p>
                          </div>
                          {isSelected && (
                            <CheckCircle2 className="ml-auto text-nature" size={20} />
                          )}
                        </div>
                      </button>
                    </motion.div>
                  )
                })}
              </div>
              
              <div className="flex justify-center pt-4">
                <Button
                  onClick={startProcessing}
                  disabled={selectedPlatforms.length === 0}
                  className="bg-nature hover:bg-nature-dark text-white px-8 py-3 text-lg"
                  size="lg"
                >
                  Import Data & Create Avatar
                </Button>
              </div>
            </motion.div>
          ) : (
            <motion.div
              key="processing"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="space-y-6 py-8"
            >
              <div className="text-center">
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                  className="w-16 h-16 border-4 border-nature border-t-transparent rounded-full mx-auto mb-4"
                />
                <h3 className="text-xl font-semibold mb-2">Processing Your Data</h3>
                <p className="text-gray-600">{scrapingSteps[currentStep]}</p>
              </div>
              
              <div className="space-y-2">
                <Progress value={progress} className="h-2" />
                <p className="text-center text-sm text-gray-500">{progress}% Complete</p>
              </div>
              
              <div className="bg-gray-50 rounded-lg p-4">
                <h4 className="font-medium mb-2">Selected Platforms:</h4>
                <div className="flex flex-wrap gap-2">
                  {selectedPlatforms.map(platform => (
                    <span
                      key={platform}
                      className="px-3 py-1 bg-nature/20 text-nature-dark rounded-full text-sm"
                    >
                      {platform}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </DialogContent>
    </Dialog>
  )
}