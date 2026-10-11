"use client"

import { CircleHelp } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'
import { Badge } from '@/components/ui/badge'

type FaqItem = {
  value: string
  question: string
  answer: string
}

const faqItems: FaqItem[] = [
  {
    value: 'item-1',
    question: 'What services does Orkena Systems provides?',
    answer: 'Orkena Systems provides dedicated development services globally. We have vast pool of vetted resources to work with your team.',
  },
  {
    value: 'item-2',
    question: 'What\'s the difference between Monthly or Annual Price?',
    answer:
      'The monthly price is a recurring subscription that allows you to access our components and templates on a month-to-month basis. The annual price is a one-time payment that provides access for a full year, often at a discounted rate compared to the monthly subscription. Both options include updates and support during the subscription period.',
  },
  {
    value: 'item-3',
    question: 'Are Orkena Systems good for E-Commerce, Web & Mobile App Development?',
    answer:
      'Yes! Orkena Systems is a leading E-Commerce, Web & Mobile App Development Company that specializes in building innovative, scalable, and high-performance applications. Our team of experienced developers and designers work closely with clients to understand their unique needs and deliver solutions that exceed expectations.',
  },
  {
    value: 'item-4',
    question: 'Do you provide support and updates?',
    answer:
      'Yes! We provide support and updates for our E-Commerce and WebSites. Our team is dedicated to ensuring that our products remain up-to-date with the latest technologies and best practices. We offer support through various channels, including email, chat, and community forums, to assist you with any questions or issues you may encounter.',
  },
  {
    value: 'item-5',
    question: 'What frameworks and tools do you support?',
    answer:
      'Our components work with React 18+, Next.js 13+, and Vite. We use TypeScript, Tailwind CSS, and follow conventions. Components are tested with popular tools like React Hook Form, TanStack Query, and Zustand for state management.',
  },
  {
    value: 'item-6',
    question: 'Will Orkena Systems outsource my project further to any third party? ',
    answer: 'No, we strictly follow "work from office" policy and each and every developer is our full time employee. Each developer works under a dedicated team of Project Manager and a QA specialist.',
  },
]

const FaqSection = () => {
  return (
    <section id="faq" className="py-24 sm:py-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mx-auto max-w-2xl text-center mb-16">
          <Badge variant="outline" className="mb-4">FAQ</Badge>
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-lg text-muted-foreground">
            Everything you need to know about Orkena Systems and our components, templates, and support.
          </p>
        </div>

        {/* FAQ Content */}
        <div className="max-w-4xl mx-auto">
          <div className='bg-transparent'>
            <div className='p-0'>
              <Accordion type='single' collapsible className='space-y-5'>
                {faqItems.map(item => (
                  <AccordionItem key={item.value} value={item.value} className='rounded-md !border bg-transparent'>
                    <AccordionTrigger className='cursor-pointer items-center gap-4 rounded-none bg-transparent py-2 ps-3 pe-4 hover:no-underline data-[state=open]:border-b'>
                      <div className='flex items-center gap-4'>
                        <div className='bg-primary/10 text-primary flex size-9 shrink-0 items-center justify-center rounded-full'>
                          <CircleHelp className='size-5' />
                        </div>
                        <span className='text-start font-semibold'>{item.question}</span>
                      </div>
                    </AccordionTrigger>
                    <AccordionContent className='p-4 bg-transparent'>{item.answer}</AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </div>

          {/* Contact Support CTA */}
          <div className="text-center mt-12">
            <p className="text-muted-foreground mb-4">
              Still have questions? We&apos;re here to help.
            </p>
            <Button className='cursor-pointer' asChild>
              <a href="#contact">
                Contact Support
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}

export { FaqSection }
