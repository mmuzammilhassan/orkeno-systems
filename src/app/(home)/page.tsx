import type { Metadata } from 'next'
import { HomePageContent } from './home-page-content'

// Metadata for the home page
export const metadata: Metadata = {
  title: 'Orkena Systems - A Modern Solutions Company for Web Development and Software Solutions',
  description: 'Orkena Systems Company is a leading provider of innovative technology solutions, specializing in software development, IT consulting, and digital transformation services. Our mission is to empower businesses with cutting-edge technology to drive growth and efficiency.',
  keywords: ['Orkena Systems', 'React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Radix UI', 'Admin Dashboard', 'Web Development', 'Software Solutions'],
  openGraph: {
    title: 'Orkena Systems - Modren development with React, Next.js, TypeScript.',
    description: 'Orkena Systems Company is a leading provider of innovative technology solutions, specializing in software development, IT consulting, and digital transformation services. Our mission is to empower businesses with cutting-edge technology to drive growth and efficiency.',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Orkena Systems - Modren development with React, Next.js, TypeScript.',
    description: 'Orkena Systems Company is a leading provider of innovative technology solutions, specializing in software development, IT consulting, and digital transformation services. Our mission is to empower businesses with cutting-edge technology to drive growth and efficiency.',
  },
}

export default function HomePage() {
  return <HomePageContent />
}
