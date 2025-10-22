'use client'

import ComingSoon from '@/components/layout/ComingSoon'
import LightRays from '../components/LightRays'
import { useEffect, useState } from 'react'

export default function Home() {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setLoaded(true), 700)
    return () => clearTimeout(timer)
  }, []);

  return (
    <div className="relative flex items-center justify-center h-screen">
      <div className="absolute inset-0 z-0">
        <LightRays
          raysOrigin="top-center"
          raysColor="#c1121f"
          raysSpeed={1.5}
          lightSpread={1}
          rayLength={15}
          followMouse={true}
          mouseInfluence={0.1}
          noiseAmount={0.1}
          distortion={0.05}
          className="custom-rays"
        />
      </div>

      <div
        className={`relative z-10 flex items-center justify-center h-full transition-opacity duration-700 ${loaded ? 'opacity-100' : 'opacity-0'
          }`}
      >
        <ComingSoon />
      </div>
    </div>
  )
}
