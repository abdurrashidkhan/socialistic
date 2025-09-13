'use client'
import { Button } from '@mui/material'
import Image from 'next/image'
import React from 'react'

export default function Navbar() {
  return (
       <header className="w-full flex justify-center px-4 py-4 bg-transparent">
      <nav className="w-full max-w-7xl flex items-center justify-between rounded-xl px-6 py-3 bg-[#0f172a]/80 backdrop-blur-md border border-white/10 shadow-md text-white">
        
        {/* Left: Logo */}
        <div className="flex items-center space-x-2 font-bold text-lg">
          {/* Replace with your own SVG or Image */}
          <Image src="/logo.svg" alt="Logo" width={24} height={24} />
          <span className="text-blue-400">Sitemark</span>
        </div>

        {/* Center: Menu Links (Hidden on small screens) */}
        <ul className="hidden md:flex items-center space-x-6 text-sm font-medium text-white/90">
          <li><a href="#">Features</a></li>
          <li><a href="#">Testimonials</a></li>
          <li><a href="#">Highlights</a></li>
          <li><a href="#">Pricing</a></li>
          <li><a href="#">FAQ</a></li>
          <li><a href="#">Blog</a></li>
        </ul>

        {/* Right: Auth Buttons */}
        <div className="flex items-center space-x-2">
          <Button variant="text" sx={{ color: '#fff' }}>Sign in</Button>
          <Button
            variant="contained"
            sx={{
              backgroundColor: '#fff',
              color: '#000',
              '&:hover': {
                backgroundColor: '#e2e8f0',
              },
              textTransform: 'none',
            }}
          >
            Sign up
          </Button>
        </div>
      </nav>
    </header>
  )
}
