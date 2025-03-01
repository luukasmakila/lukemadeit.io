"use client"

import { useEffect, useState } from "react"

import { BasePage } from "../components/basePage"
import { Header } from "../components/header"
import { ProductCard } from "../components/ProductCard/productCard"
import { SkeletonLoader } from "../components/ProductCard/skeleton"
import { SectionBody } from "../components/sectionBody"
import { cameraGear, setupGear } from "./assets"

export default function Gear() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 1000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <Header />
      <BasePage>
        <SectionBody>
        <div className="flex flex-col gap-4">
          {isLoading
            ? <div className="h-6 bg-darkGray animate-pulse rounded w-36"></div>
            : <h1 className="text-xl">Camera Gear</h1>
          
          }
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {isLoading
              ? Array.from({ length: 6 }).map((_, index) => <SkeletonLoader key={index} />)
              : cameraGear.map((product, index) => <ProductCard key={index} {...product} />)
            }
          </ul>
          {!isLoading &&
            <>
              <h1 className="text-xl">Setup Gear</h1>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap34">
                {setupGear.map((product, index) => <ProductCard key={index} {...product} />)}
              </ul>
            </>
          }
        </div>
        </SectionBody>
      </BasePage>
    </>
  )
}
