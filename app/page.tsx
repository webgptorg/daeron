"use client"

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Input } from '@/components/ui/input'
import { Checkbox } from '@/components/ui/checkbox'
import { AvatarCreationPopup } from '@/components/avatar-creation-popup'
import { TimeAllocationChart } from '@/components/time-allocation-chart'
import { AvatarExamples } from '@/components/avatar-examples'
import { 
  Brain, Clock, Shield, Code2, Mail, MessageSquare, 
  Phone, Bot, CheckCircle2, ArrowRight, Star,
  Github, Linkedin, MessageCircle, ExternalLink
} from 'lucide-react'

export default function Home() {
  const [isPopupOpen, setIsPopupOpen] = useState(false)
  const [email, setEmail] = useState('')
  const [consent, setConsent] = useState(false)

  console.log("Home page rendered", { isPopupOpen })

  const benefits = [
    {
      icon: Brain,
      title: "Truly Your AI Agent",
      description: "Speaks your language, has your voice, your style, and your way of thinking. Not vanilla generic content, but authentically YOURS."
    },
    {
      icon: Code2,
      title: "Multi-Platform Integration", 
      description: "Works across emails, social media, programming tools, and video calls. Runs in background performing tasks and providing reports."
    },
    {
      icon: Shield,
      title: "Complete Control",
      description: "See all interactions and data. Fine-tune behavior as needed. You create it, control what happens, and adjust as necessary."
    },
    {
      icon: MessageSquare,
      title: "Human Language Based",
      description: "Everything defined in 100% human language using our 'Book' technology and PromptBook Engine. No complex JSONs or configurations."
    },
    {
      icon: Clock,
      title: "Extremely Easy Start",
      description: "Import data from LinkedIn, Facebook, Google, or GitHub. Or create manually by filling out a simple form."
    },
    {
      icon: Code2,
      title: "Open Source & Portable",
      description: "Everything is open source and in plain text. Run on your own server or take your data with you anytime."
    }
  ]

  const integrations = [
    {
      title: "Website Chatbot",
      description: "Answer customer questions automatically",
      icon: MessageSquare,
      badge: "Free",
      badgeColor: "bg-green-100 text-green-800"
    },
    {
      title: "Email Management",
      description: "Handle replies and interactions",
      icon: Mail,
      badge: "Pro",
      badgeColor: "bg-blue-100 text-blue-800"
    },
    {
      title: "Social Media Manager", 
      description: "Manage posts and interactions",
      icon: MessageCircle,
      badge: "Pro",
      badgeColor: "bg-blue-100 text-blue-800"
    },
    {
      title: "Audio/Video Agent",
      description: "Clients can call and interact",
      icon: Phone,
      badge: "Pro", 
      badgeColor: "bg-blue-100 text-blue-800"
    },
    {
      title: "Agentic Mode",
      description: "Background tasks and reporting",
      icon: Bot,
      badge: "Pro",
      badgeColor: "bg-blue-100 text-blue-800"
    }
  ]

  const pricingPlans = [
    {
      name: "Free",
      price: "$0",
      period: "forever",
      description: "Perfect for getting started",
      features: [
        "Website chatbot integration",
        "Basic personality training", 
        "Community support",
        "Open source access"
      ],
      cta: "Get Started Free",
      popular: false
    },
    {
      name: "Pro",
      price: "$20",
      period: "per month",
      description: "For professionals and growing teams",
      features: [
        "Everything in Free",
        "Email integration",
        "Social media management",
        "Audio/video agent",
        "Agentic background mode",
        "Priority support",
        "Advanced customization"
      ],
      cta: "Start Pro Trial",
      popular: true
    },
    {
      name: "Enterprise",
      price: "Custom",
      period: "contact us",
      description: "For organizations with specific needs",
      features: [
        "Everything in Pro",
        "Custom integrations",
        "Dedicated support",
        "SLA guarantees",
        "On-premise deployment",
        "Advanced security",
        "White-label options"
      ],
      cta: "Contact Sales",
      popular: false
    }
  ]

  const footerSections = [
    {
      title: "Product",
      links: [
        { name: "Get started", href: "/" },
        { name: "Manifest", href: "https://ptbk.io/manifest" },
        { name: "Documentation", href: "https://github.com/webgptorg/promptbook" },
        { name: "Playground", href: "https://promptbook.studio/miniapps/new" }
      ]
    },
    {
      title: "Company", 
      links: [
        { name: "AI Web, LLC", href: "https://or-justice-cz.translate.goog/ias/ui/rejstrik-firma.vysledky?subjektId=1223693&typ=UPLNY&_x_tr_sl=cs&_x_tr_tl=en&_x_tr_hl=en-US&_x_tr_pto=wapp" },
        { name: "About Us", href: "https://ptbk.io/about" },
        { name: "Blog", href: "https://ptbk.io/blog" }
      ]
    },
    {
      title: "Connect",
      links: [
        { name: "GitHub", href: "https://github.com/webgptorg/promptbook", icon: Github },
        { name: "LinkedIn", href: "https://linkedin.com/company/promptbook", icon: Linkedin },
        { name: "Discord", href: "https://discord.gg/x3QWNaa89N", icon: MessageCircle },
        { name: "More", href: "/contact" }
      ]
    }
  ]

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Newsletter subscription:", { email, consent })
    // Handle newsletter subscription
  }

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-screen bg-nature-hero bg-cover bg-center bg-fixed flex items-center">
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-black/40" />
        
        <div className="relative z-10 container mx-auto px-6 text-center text-white">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto pt-20"
          >
            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
              Create Your
              <span className="gradient-text block text-transparent bg-gradient-to-r from-nature to-white bg-clip-text">
                AI Avatar
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl mb-8 text-gray-200 max-w-3xl mx-auto leading-relaxed">
              Stop spending 80% of your time on unimportant tasks. Let your AI avatar handle emails, meetings, and busy work while you focus on what truly matters.
            </p>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="mb-16"
            >
              <Button
                onClick={() => setIsPopupOpen(true)}
                size="lg"
                className="bg-nature hover:bg-nature-dark text-white px-12 py-6 text-xl font-semibold rounded-full shadow-2xl hover:shadow-nature/25 transition-all duration-300 transform hover:scale-105"
              >
                Create Your Avatar
                <ArrowRight className="ml-2" size={24} />
              </Button>
            </motion.div>
          </motion.div>
          
          {/* Avatar examples positioned below the main content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1 }}
            className="pb-20"
          >
            <AvatarExamples />
          </motion.div>
        </div>
      </section>

      {/* Time Allocation Section */}
      <section className="section-padding bg-gray-50">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 gradient-text">
              Flip the Script on Your Time
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Most people spend 80% of their time on unimportant tasks. We're here to flip those percentages and give you your life back.
            </p>
          </motion.div>
          
          <TimeAllocationChart />
        </div>
      </section>

      {/* Benefits Section */}
      <section className="section-padding">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Why Choose Our AI Avatar?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Unlike generic AI tools, our avatars are trained specifically on your data, communication style, and decision-making patterns.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -5 }}
              >
                <Card className="h-full hover:shadow-xl transition-all duration-300">
                  <CardHeader>
                    <div className="w-12 h-12 bg-nature/10 rounded-lg flex items-center justify-center mb-4">
                      <benefit.icon className="text-nature" size={24} />
                    </div>
                    <CardTitle className="text-xl">{benefit.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-gray-600 leading-relaxed">
                      {benefit.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Integration Options */}
      <section className="section-padding bg-gray-50">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Integration Options
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Your AI avatar works wherever you do. From websites to emails, social media to video calls.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {integrations.map((integration, index) => (
              <motion.div
                key={integration.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.02 }}
              >
                <Card className="h-full">
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <div className="w-12 h-12 bg-tech/10 rounded-lg flex items-center justify-center">
                        <integration.icon className="text-tech" size={24} />
                      </div>
                      <Badge className={integration.badgeColor}>
                        {integration.badge}
                      </Badge>
                    </div>
                    <CardTitle className="text-lg">{integration.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-gray-600">
                      {integration.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="section-padding">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Simple, Transparent Pricing
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Start free and scale as your needs grow. No hidden fees, no complex tiers.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {pricingPlans.map((plan, index) => (
              <motion.div
                key={plan.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className={`relative ${plan.popular ? 'scale-105' : ''}`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <Badge className="bg-nature text-white px-4 py-1">
                      <Star className="w-3 h-3 mr-1" />
                      Most Popular
                    </Badge>
                  </div>
                )}
                
                <Card className={`h-full ${plan.popular ? 'border-nature shadow-xl' : ''}`}>
                  <CardHeader className="text-center">
                    <CardTitle className="text-2xl font-bold">{plan.name}</CardTitle>
                    <div className="mt-4">
                      <span className="text-4xl font-bold">{plan.price}</span>
                      <span className="text-gray-500">/{plan.period}</span>
                    </div>
                    <CardDescription className="mt-2">{plan.description}</CardDescription>
                  </CardHeader>
                  
                  <CardContent className="space-y-4">
                    <ul className="space-y-3">
                      {plan.features.map((feature) => (
                        <li key={feature} className="flex items-center">
                          <CheckCircle2 className="text-nature w-5 h-5 mr-3 flex-shrink-0" />
                          <span className="text-gray-700">{feature}</span>
                        </li>
                      ))}
                    </ul>
                    
                    <Button 
                      className={`w-full mt-6 ${plan.popular 
                        ? 'bg-nature hover:bg-nature-dark text-white' 
                        : 'bg-gray-100 hover:bg-gray-200 text-gray-800'
                      }`}
                      size="lg"
                    >
                      {plan.cta}
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-forest text-white">
        <div className="container mx-auto px-6 py-16">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {footerSections.map((section) => (
              <div key={section.title}>
                <h3 className="font-semibold text-lg mb-4">{section.title}</h3>
                <ul className="space-y-2">
                  {section.links.map((link) => (
                    <li key={link.name}>
                      <a
                        href={link.href}
                        className="text-gray-300 hover:text-white transition-colors duration-200 flex items-center"
                        target={link.href.startsWith('http') ? '_blank' : undefined}
                        rel={link.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                      >
                        {link.icon && <link.icon size={16} className="mr-2" />}
                        {link.name}
                        {link.href.startsWith('http') && <ExternalLink size={12} className="ml-1" />}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
            
            <div>
              <h3 className="font-semibold text-lg mb-4">Stay Updated</h3>
              <form onSubmit={handleSubscribe} className="space-y-3">
                <Input
                  type="email"
                  placeholder="you@example.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="bg-white/10 border-white/20 text-white placeholder:text-gray-400"
                  required
                />
                <div className="flex items-start space-x-2">
                  <Checkbox
                    id="consent"
                    checked={consent}
                    onCheckedChange={(checked) => setConsent(checked as boolean)}
                    className="border-white/20 data-[state=checked]:bg-nature"
                    required
                  />
                  <label htmlFor="consent" className="text-sm text-gray-300 leading-tight">
                    I consent to receive news and updates via email *
                  </label>
                </div>
                <Button 
                  type="submit" 
                  className="w-full bg-nature hover:bg-nature-dark"
                  disabled={!consent || !email}
                >
                  Subscribe
                </Button>
              </form>
            </div>
          </div>
          
          <div className="border-t border-white/20 mt-12 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
              <p className="text-gray-300 text-sm">
                © 2025 Promptbook. All rights reserved.
              </p>
              
              <div className="text-center">
                <img
                  src="https://www.ptbk.io/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FCI-Technology-Incubation.6cc58993.png&w=828&q=75"
                  alt="Technology Incubation logo"
                  className="h-12 mx-auto mb-2"
                />
                <p className="text-xs text-gray-400 max-w-md">
                  This project was implemented with funding from the national budget via the Ministry of Industry and Trade of the Czech Republic within the CzechInvest Technology Incubation programme.
                </p>
              </div>
            </div>
          </div>
        </div>
      </footer>

      <AvatarCreationPopup 
        isOpen={isPopupOpen} 
        onClose={() => setIsPopupOpen(false)} 
      />
    </div>
  )
}
