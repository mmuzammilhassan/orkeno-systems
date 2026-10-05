"use client"

import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Card, CardContent } from '@/components/ui/card'
import { CardDecorator } from '@/components/ui/card-decorator'
import { Github, User, Palette, Layout, Crown } from 'lucide-react'

const values = [
  {
    icon: User,
    title: 'User First',
    description: 'We prioritize user experience and accessibility, ensuring our components are intuitive, responsive, and inclusive for all users.'
  },
  {
    icon: Palette,
    title: 'Design Excellence',
    description: 'Our components are crafted with a focus on aesthetics and usability, providing a visually appealing and cohesive design system for users.'
  },
  {
    icon: Layout,
    title: 'Robust Architecture',
    description: 'We build our components with a strong foundation, ensuring scalability, maintainability, and performance for long-term success.'
  },
  {
    icon: Crown,
    title: 'Premium Quality',
    description: 'Hand-crafted with attention to detail and performance optimization, ensuring exceptional user experience and accessibility.'
  }
]

export function AboutSection() {
  return (
    <section id="about" className="py-24 sm:py-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mx-auto max-w-4xl text-center mb-16">
          <Badge variant="outline" className="mb-4">
            About
          </Badge>
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-6">
            {/* Built for developers, by developers */}
            About Orkena Systems Company
          </h2>
          <p className="text-lg text-muted-foreground mb-8">
            We&apos;re  the top Web/Desktop, IOS and Android App Development Service in all across Pakistan and abroad. We offer attention-grabbing, user-friendly, and high-performance products, customized according to the client’s needs.
            Our mission is to accelerate development and help developers build beautiful admin interfaces faster.
          </p>
        </div>

        {/* Modern Values Grid with Enhanced Design */}
        <div className="grid grid-cols-1 gap-x-8 gap-y-12 sm:grid-cols-2 xl:grid-cols-4 mb-12">
          {values.map((value, index) => (
            <Card key={index} className='group shadow-xs py-2'>
              <CardContent className='p-8'>
                <div className='flex flex-col items-center text-center'>
                  <CardDecorator>
                    <value.icon className='h-6 w-6' aria-hidden />
                  </CardDecorator>
                  <h3 className='mt-6 font-medium text-balance'>{value.title}</h3>
                  <p className='text-muted-foreground mt-3 text-sm'>{value.description}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Call to Action */}
        {/* <div className="mt-16 text-center"> */}
        {/*   <div className="flex items-center justify-center gap-2 mb-6"> */}
        {/*     <span className="text-muted-foreground">❤️ Made with love for the developer community</span> */}
        {/*   </div> */}
        {/*   <div className="flex flex-col sm:flex-row gap-4 justify-center"> */}
        {/*     <Button size="lg" className="cursor-pointer" asChild> */}
        {/*       <a href="https://github.com/silicondeck/shadcn-dashboard-home-template" target="_blank" rel="noopener noreferrer"> */}
        {/*         <Github className="mr-2 h-4 w-4" /> */}
        {/*         Star on GitHub */}
        {/*       </a> */}
        {/*     </Button> */}
        {/*     <Button size="lg" variant="outline" className="cursor-pointer" asChild> */}
        {/*       <a href="https://discord.com/invite/XEQhPc9a6p" target="_blank" rel="noopener noreferrer"> */}
        {/*         Join Discord Community */}
        {/*       </a> */}
        {/*     </Button> */}
        {/*   </div> */}
        {/* </div> */}
      </div>
    </section>
  )
}
