'use client'

import { useState } from 'react'

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  const faqs = [
    {
      question: "What is ShopOS Cowork?",
      answer: "A desktop AI assistant built for brands. It connects to your store, learns your voice, and does actual work—research, copywriting, image generation, catalog updates."
    },
    {
      question: "Is it open source?",
      answer: "Parts of the system are open source. The core AI workflows and integrations are proprietary, but we're committed to transparency and will be releasing components of the system over time."
    },
    {
      question: "Does my data stay private?",
      answer: "Yes. Cowork runs on your Mac. Your store data stays on your computer unless you explicitly choose to sync or share it. We don't upload your data to the cloud without your permission."
    },
    {
      question: "What models does it use?",
      answer: "Cowork uses a combination of state-of-the-art language models and custom-trained models specifically for commerce tasks. The system is model-agnostic and we continuously update to use the best available models."
    },
    {
      question: "Can it actually change things in my store?",
      answer: "Yes, but only with your permission. Cowork asks before making any changes that could impact your store—price updates, publishing products, bulk edits. You always have final approval."
    },
    {
      question: "What's the difference between this and ChatGPT?",
      answer: "ChatGPT is a conversational AI. Cowork is an autonomous agent system that connects to your store, learns your brand, and actually executes tasks. It's built specifically for commerce, not general conversation."
    },
    {
      question: "What if I'm not technical?",
      answer: "You don't need to be. Cowork is designed for merchants, not developers. You talk to it in natural language, and it handles the technical work. No coding required."
    },
    {
      question: "Does it work with platforms other than Shopify?",
      answer: "Yes. Cowork works with Shopify, WooCommerce, BigCommerce, and any platform with an API. We're adding more integrations regularly, including Amazon Seller Central."
    },
    {
      question: "Who built this?",
      answer: "Cowork is built by ShopOS, an AI-native operating system for ecommerce. We're a team of engineers, designers, and merchants who believe AI should do real work, not just generate content."
    }
  ]

  return (
    <section className="py-20 px-6 bg-white">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">
            Frequently asked questions
          </h2>
          <p className="text-xl text-gray-600">
            Everything you need to know about the product and billing.
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div 
              key={index}
              className="border border-gray-200 rounded-2xl overflow-hidden transition-all"
            >
              <button
                className="w-full px-6 py-5 flex items-center justify-between text-left hover:bg-gray-50 transition-colors"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              >
                <span className="font-display font-semibold text-lg pr-8">
                  {faq.question}
                </span>
                <svg 
                  className={`w-6 h-6 flex-shrink-0 transition-transform ${openIndex === index ? 'rotate-180' : ''}`}
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              
              {openIndex === index && (
                <div className="px-6 pb-5 text-gray-600 leading-relaxed animate-slide-up">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
