"use client"

import { motion } from 'framer-motion'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Badge } from '@/components/ui/badge'

const avatarExamples = [
  {
    name: "Max Kozlov",
    role: "Tech Founder & CEO", 
    image: "https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop",
    traits: ["Visionary", "Strategic", "Results-driven"],
    description: "Handles investor meetings, strategic planning, and executive communications",
    linkedin: "https://www.linkedin.com/in/themaxkozlov/"
  },
  {
    name: "Pavol Hejný",
    role: "Senior Software Engineer",
    image: "https://images.pexels.com/photos/30767572/pexels-photo-30767572.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop", 
    traits: ["Technical", "Innovative", "Problem-solver"],
    description: "Manages code reviews, technical documentation, and developer communications",
    linkedin: "https://www.linkedin.com/in/hejny/"
  },
  {
    name: "Jiří Jahn",
    role: "Business Development Director",
    image: "https://images.pexels.com/photos/30767577/pexels-photo-30767577.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop",
    traits: ["Relationship-focused", "Strategic", "Growth-oriented"],
    description: "Handles client outreach, partnership negotiations, and business communications",
    linkedin: "https://www.linkedin.com/in/jirkajahn/"
  }
]

export function AvatarExamples() {
  console.log("AvatarExamples component rendered")
  
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto">
      {avatarExamples.map((avatar, index) => (
        <motion.div
          key={avatar.name}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.1 }}
          whileHover={{ y: -5 }}
          className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300"
        >
          <div className="flex flex-col items-center text-center space-y-4">
            <Avatar className="w-16 h-16">
              <AvatarImage src={avatar.image} alt={avatar.name} />
              <AvatarFallback>{avatar.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
            </Avatar>
            
            <div>
              <h3 className="font-semibold text-lg">{avatar.name}</h3>
              <p className="text-gray-600 text-sm">{avatar.role}</p>
              <a 
                href={avatar.linkedin} 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-xs text-blue-600 hover:text-blue-800 underline mt-1 block"
              >
                View LinkedIn Profile
              </a>
            </div>
            
            <div className="flex flex-wrap gap-1 justify-center">
              {avatar.traits.map(trait => (
                <Badge key={trait} variant="secondary" className="text-xs">
                  {trait}
                </Badge>
              ))}
            </div>
            
            <p className="text-sm text-gray-500 leading-relaxed">
              {avatar.description}
            </p>
          </div>
        </motion.div>
      ))}
    </div>
  )
}