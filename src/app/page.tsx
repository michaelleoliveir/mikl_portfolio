"use client"

import AboutMe from '@/components/layout/AboutMe';
import Introduction from '@/components/layout/Introduction';
import Navbar from '@/components/ui/Navbar';

export default function Home() {

  return (
    <div className="relative flex flex-col items-center justify-center">
      <Navbar /> 
      <Introduction />
      <AboutMe />
    </div>
  )
}
