"use client";
import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import { siteConfig } from '@/config/site'
import { buttonVariants } from '@/components/ui/button'
import { Icons } from '@/components/icons'
import { MainNav } from '@/components/main-nav'
import { ThemeToggle } from '@/components/theme-toggle'

export function SiteFooter() {
  
  const [isHydrated, setIsHydrated] = useState(false)

  useEffect(() => {
    setIsHydrated(true)
  }, [])

  return (
    <header className="bg-background bottom-0 z-40 w-full border-t">
      <div className="container flex flex-col md:flex-row h-16 items-center sm:justify-center sm:space-x-0">
        <MainNav items={siteConfig.mainNav} />
        
      </div>
    </header>
  )
}
