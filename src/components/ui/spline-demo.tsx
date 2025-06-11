'use client'

import { SplineScene } from "@/components/ui/spline";
 
export function SplineSceneBasic() {
  return (
    <div className="w-full h-full bg-black/[0.96] relative overflow-hidden">
      <div className="w-full h-full">
        <SplineScene 
          scene="https://prod.spline.design/kZDDjO5HuC9GJUM2/scene.splinecode"
          className="w-full h-full"
        />
      </div>
    </div>
  )
} 