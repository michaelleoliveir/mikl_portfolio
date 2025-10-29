"use client"

import AboutMe from '@/components/layout/AboutMe';
import Experience from '@/components/layout/Experience';
import Introduction from '@/components/layout/Introduction';
import Footer from '@/components/ui/Footer';
import Navbar from '@/components/ui/Navbar';

export default function Home() {

  return (
    <div className="relative flex flex-col items-center justify-center">
        <div className='w-[90%]'>
          <Navbar />
          <Introduction />
          <Experience />
          {/* <AboutMe /> */}
        </div>
      <Footer />
    </div>
  )
}
