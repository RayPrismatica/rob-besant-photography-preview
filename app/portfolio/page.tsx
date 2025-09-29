'use client'

import React, { useEffect } from 'react'

const PortfolioPage = () => {
  useEffect(() => {
    // Redirect to external portfolio
    window.location.href = 'https://robbesantphotography.com'
  }, [])

  return (
    <div style={{
      fontFamily: 'Georgia, serif',
      lineHeight: '1.7',
      color: '#3a3a3a',
      background: '#fafaf8',
      padding: '140px 20px 80px',
      textAlign: 'center',
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }}>
      <div style={{
        maxWidth: '600px',
        margin: '0 auto'
      }}>
        <h1 style={{
          fontSize: '3em',
          fontWeight: 'normal',
          marginBottom: '30px',
          color: '#2c3e50'
        }}>
          Portfolio
        </h1>

        <p style={{
          fontSize: '1.3em',
          marginBottom: '40px',
          color: '#5a5a5a',
          lineHeight: '1.6'
        }}>
          Redirecting you to our complete portfolio showcase...
        </p>

        <div style={{
          marginBottom: '40px'
        }}>
          <div style={{
            width: '50px',
            height: '50px',
            border: '4px solid #f3f3f3',
            borderTop: '4px solid #2c3e50',
            borderRadius: '50%',
            animation: 'spin 1s linear infinite',
            margin: '0 auto'
          }} />
        </div>

        <p style={{
          fontSize: '1em',
          color: '#888',
          marginBottom: '30px'
        }}>
          If you are not redirected automatically,{' '}
          <a
            href="https://robbesantphotography.com"
            style={{
              color: '#2c3e50',
              textDecoration: 'underline'
            }}
          >
            click here to view our portfolio
          </a>
        </p>

        <style jsx>{`
          @keyframes spin {
            0% { transform: rotate(0deg); }
            100% { transform: rotate(360deg); }
          }
        `}</style>
      </div>
    </div>
  )
}

export default PortfolioPage