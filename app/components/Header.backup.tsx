'use client'

import React, { useState, useEffect } from 'react'
import Link from 'next/link'

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <>
      <style jsx>{`
        header {
          position: fixed;
          top: 0;
          width: 100%;
          background: rgba(255,255,255,0.98);
          backdrop-filter: blur(10px);
          z-index: 1000;
          padding: 18px 0;
          transition: all 0.3s ease;
          box-shadow: ${isScrolled ? '0 2px 10px rgba(0,0,0,0.05)' : 'none'};
        }

        .header-container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 20px;
          display: flex;
          justify-content: center;
          align-items: center;
          position: relative;
        }

        .header-cta {
          position: absolute;
          right: 20px;
          background: transparent;
          color: #2c3e50;
          padding: 10px 25px;
          text-decoration: none;
          border: 2px solid #2c3e50;
          border-radius: 25px;
          font-size: 14px;
          transition: all 0.3s ease;
          font-family: -apple-system, sans-serif;
          cursor: pointer;
        }

        .header-cta:hover {
          background: #2c3e50;
          color: white;
        }

        .header-portfolio {
          position: absolute;
          left: 20px;
          background: transparent;
          color: #2c3e50;
          padding: 10px 25px;
          text-decoration: none;
          border: 2px solid #2c3e50;
          border-radius: 25px;
          font-size: 14px;
          transition: all 0.3s ease;
          font-family: -apple-system, sans-serif;
          cursor: pointer;
        }

        .header-portfolio:hover {
          background: #2c3e50;
          color: white;
        }
      `}</style>

      <header>
        <div className="header-container">
          <a href="#portfolio" className="header-portfolio">
            Portfolio
          </a>

          <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
            <Link href="/">
              <img
                src="/images/xcvi-logo-wide.svg"
                alt="Rob Besant Photography Logo"
                style={{height: '26px', width: 'auto'}}
              />
            </Link>
            <Link
              href="/"
              style={{
                fontSize: '18px',
                fontWeight: 'normal',
                color: '#2c3e50',
                textDecoration: 'none',
                fontFamily: 'Georgia, serif',
                textTransform: 'uppercase',
                letterSpacing: '2px',
                marginTop: '5px'
              }}
            >
              Rob Besant Photography
            </Link>
          </div>

          <a href="#connect" className="header-cta">
            Let's Chat
          </a>
        </div>
      </header>
    </>
  )
}

export default Header