// "use client"

// import * as React from "react"
// import { cn } from "@/lib/utils"

// interface SketchyPanelProps extends React.HTMLAttributes<HTMLDivElement> {
//   children: React.ReactNode
//   borderWidth?: number
//   roughness?: number
// }

// export function SketchyPanel({ children, className, borderWidth = 2, roughness = 0.8, ...props }: SketchyPanelProps) {
//   const id = React.useId()
//   const filterId = `sketchy-filter-${id}`
//   const noiseFreq = 0.04 * roughness

//   return (
//     <div className={cn("relative", className)} {...props}>
//       <svg className="pointer-events-none absolute h-0 w-0" aria-hidden="true">
//         <defs>
//           <filter id={filterId}>
//             {/* Base turbulence for the sketchy effect */}
//             <feTurbulence type="fractalNoise" baseFrequency={noiseFreq} numOctaves="3" result="noise" />
//             {/* Displacement map for the noise */}
//             <feDisplacementMap in="SourceGraphic" in2="noise" scale={borderWidth} result="displacedNoise" />
//             {/* Thicken the lines */}
//             <feMorphology operator="dilate" radius={borderWidth / 2} in="displacedNoise" result="thickened" />
//             {/* Smooth out the roughness slightly */}
//             <feGaussianBlur stdDeviation={borderWidth / 6} in="thickened" result="smoothed" />
//           </filter>
//         </defs>
//       </svg>

//       <div
//         className="absolute inset-0 rounded-lg border-2 border-black"
//         style={{
//           filter: `url(#${filterId})`,
//         }}
//         aria-hidden="true"
//       />
//       <div className="relative m-4">{children}</div>
//     </div>
//   )
// }

// import Image from "next/image"
// import { SketchyPanel } from "@/components/sketchy-panel"

// export default function Page() {
//   return (
//     <div className="min-h-screen bg-white p-8">
//       <div className="mx-auto grid max-w-4xl gap-4 md:grid-cols-2">
//         <SketchyPanel className="aspect-square">
//           <Image
//             src="/placeholder.svg?height=400&width=400"
//             alt="Manga panel 1"
//             width={400}
//             height={400}
//             className="h-full w-full object-cover"
//           />
//         </SketchyPanel>
