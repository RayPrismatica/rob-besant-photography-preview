'use client'

import React, { useState, useEffect } from 'react'
import Link from 'next/link'

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

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
          padding: 22px 0 0 0;
          transition: all 0.3s ease;
          box-shadow: ${isScrolled ? '0 2px 10px rgba(0,0,0,0.05)' : 'none'};
        }

        .header-container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 20px 18px 20px;
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


        .nav-strip {
          width: 100%;
          background: #2c3e50;
          padding: 10px 0;
        }

        .nav-strip-container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 20px;
          display: flex;
          justify-content: center;
          gap: 20px;
          position: relative;
        }

        .nav-strip-link {
          color: white !important;
          text-decoration: none;
          font-size: 10px;
          font-family: -apple-system, sans-serif;
          padding: 5px 8px;
          transition: all 0.3s ease;
          opacity: 1;
          text-transform: uppercase !important;
          font-weight: 500;
        }

        .nav-strip-link:hover {
          opacity: 1;
          background: rgba(255,255,255,0.1);
          border-radius: 3px;
        }

        .nav-strip-link.active {
          opacity: 1;
          font-weight: 500;
          background: rgba(255,255,255,0.15);
          border-radius: 3px;
        }

        .mobile-menu-toggle {
          display: none;
          background: transparent;
          border: none;
          color: white;
          font-size: 18px;
          cursor: pointer;
          padding: 5px;
        }

        @media (max-width: 768px) {
          .nav-strip-container {
            flex-direction: column;
            align-items: center;
          }

          .mobile-menu-toggle {
            display: block;
            position: absolute;
            right: 20px;
            top: 50%;
            transform: translateY(-50%);
          }

          .nav-links {
            display: ${isMobileMenuOpen ? 'flex' : 'none'};
            flex-direction: column;
            width: 100%;
            gap: 0;
            background: #2c3e50;
            padding-top: 10px;
          }

          .nav-strip-link {
            padding: 12px 20px;
            border-bottom: 1px solid rgba(255,255,255,0.1);
            width: 100%;
            text-align: center;
          }
        }

        @media (min-width: 769px) {
          .nav-links {
            display: flex !important;
            gap: 20px;
          }
        }
      `}</style>

      <header>
        <div className="header-container">
          <Link
            href="/"
            style={{
              fontSize: '18px',
              fontWeight: 'normal',
              color: '#2c3e50',
              textDecoration: 'none',
              fontFamily: 'Georgia, serif',
              textTransform: 'uppercase',
              letterSpacing: '2px'
            }}
          >
            Rob Besant Photography
          </Link>
        </div>

        {/* Navigation Strip */}
        <div className="nav-strip">
          <div className="nav-strip-container">
            <button
              className="mobile-menu-toggle"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              ☰
            </button>

            <div className="nav-links">
              <Link
                href="/"
                className="nav-strip-link"
                style={{
                  color: 'white',
                  textDecoration: 'none',
                  fontSize: '10px',
                  fontFamily: '-apple-system, sans-serif',
                  padding: '5px 8px',
                  textTransform: 'uppercase',
                  fontWeight: '500'
                }}
              >
                Home
              </Link>
              <Link
                href="/gastropubs"
                className="nav-strip-link"
                style={{
                  color: 'white',
                  textDecoration: 'none',
                  fontSize: '10px',
                  fontFamily: '-apple-system, sans-serif',
                  padding: '5px 8px',
                  textTransform: 'uppercase',
                  fontWeight: '500'
                }}
              >
                Gastropubs & Inns
              </Link>
              <Link
                href="/restaurants"
                className="nav-strip-link"
                style={{
                  color: 'white',
                  textDecoration: 'none',
                  fontSize: '10px',
                  fontFamily: '-apple-system, sans-serif',
                  padding: '5px 8px',
                  textTransform: 'uppercase',
                  fontWeight: '500'
                }}
              >
                Restaurants & Bars
              </Link>
              <Link
                href="/hotels"
                className="nav-strip-link"
                style={{
                  color: 'white',
                  textDecoration: 'none',
                  fontSize: '10px',
                  fontFamily: '-apple-system, sans-serif',
                  padding: '5px 8px',
                  textTransform: 'uppercase',
                  fontWeight: '500'
                }}
              >
                Boutique Hotels
              </Link>
              <Link
                href="/cafes"
                className="nav-strip-link"
                style={{
                  color: 'white',
                  textDecoration: 'none',
                  fontSize: '10px',
                  fontFamily: '-apple-system, sans-serif',
                  padding: '5px 8px',
                  textTransform: 'uppercase',
                  fontWeight: '500'
                }}
              >
                Cafés
              </Link>
              <Link
                href="/wineries"
                className="nav-strip-link"
                style={{
                  color: 'white',
                  textDecoration: 'none',
                  fontSize: '10px',
                  fontFamily: '-apple-system, sans-serif',
                  padding: '5px 8px',
                  textTransform: 'uppercase',
                  fontWeight: '500'
                }}
              >
                Food & Drink Producers
              </Link>
              <Link
                href="/blog"
                className="nav-strip-link"
                style={{
                  color: 'white',
                  textDecoration: 'none',
                  fontSize: '10px',
                  fontFamily: '-apple-system, sans-serif',
                  padding: '5px 8px',
                  textTransform: 'uppercase',
                  fontWeight: '500'
                }}
              >
                Blog
              </Link>
              <Link
                href="/booking"
                className="nav-strip-link"
                style={{
                  color: 'white',
                  textDecoration: 'none',
                  fontSize: '10px',
                  fontFamily: '-apple-system, sans-serif',
                  padding: '5px 8px',
                  textTransform: 'uppercase',
                  fontWeight: '500'
                }}
              >
                Book Session
              </Link>
            </div>
          </div>
        </div>
      </header>
    </>
  )
}

export default Header