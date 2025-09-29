'use client'

import React from 'react'

const LegalPage = () => {
  return (
    <div style={{
      fontFamily: 'Georgia, serif',
      lineHeight: '1.7',
      color: '#3a3a3a',
      background: '#fafaf8',
      padding: '120px 20px 80px',
      maxWidth: '800px',
      margin: '0 auto'
    }}>
      <h1 style={{
        fontSize: '2.5em',
        fontWeight: 'normal',
        marginBottom: '40px',
        color: '#2c3e50',
        textAlign: 'center'
      }}>
        Legal & Privacy
      </h1>

      {/* Privacy Policy */}
      <section style={{ marginBottom: '60px' }}>
        <h2 style={{
          fontSize: '1.8em',
          fontWeight: 'normal',
          marginBottom: '25px',
          color: '#2c3e50'
        }}>
          Privacy Policy
        </h2>

        <h3 style={{
          fontSize: '1.3em',
          fontWeight: 'normal',
          marginBottom: '15px',
          color: '#2c3e50'
        }}>
          Information We Collect
        </h3>
        <p style={{ marginBottom: '20px' }}>
          When you contact us or book a consultation through our website, we may collect:
        </p>
        <ul style={{ marginBottom: '25px', paddingLeft: '20px' }}>
          <li>Name and contact information (email, phone number)</li>
          <li>Business information and project details</li>
          <li>Communication preferences</li>
          <li>Website usage data through analytics</li>
        </ul>

        <h3 style={{
          fontSize: '1.3em',
          fontWeight: 'normal',
          marginBottom: '15px',
          color: '#2c3e50'
        }}>
          How We Use Your Information
        </h3>
        <ul style={{ marginBottom: '25px', paddingLeft: '20px' }}>
          <li>To respond to your inquiries and provide photography services</li>
          <li>To schedule consultations and photography sessions</li>
          <li>To send project updates and deliver final images</li>
          <li>To improve our website and services</li>
          <li>To send occasional updates about our work (with your permission)</li>
        </ul>

        <h3 style={{
          fontSize: '1.3em',
          fontWeight: 'normal',
          marginBottom: '15px',
          color: '#2c3e50'
        }}>
          Information Sharing
        </h3>
        <p style={{ marginBottom: '25px' }}>
          We do not sell, trade, or share your personal information with third parties except:
        </p>
        <ul style={{ marginBottom: '25px', paddingLeft: '20px' }}>
          <li>With your explicit consent</li>
          <li>When required by law</li>
          <li>With trusted service providers (hosting, email services) who help us operate our business</li>
        </ul>

        <h3 style={{
          fontSize: '1.3em',
          fontWeight: 'normal',
          marginBottom: '15px',
          color: '#2c3e50'
        }}>
          Data Security
        </h3>
        <p style={{ marginBottom: '25px' }}>
          We implement appropriate security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction.
        </p>

        <h3 style={{
          fontSize: '1.3em',
          fontWeight: 'normal',
          marginBottom: '15px',
          color: '#2c3e50'
        }}>
          Your Rights
        </h3>
        <p style={{ marginBottom: '25px' }}>
          You have the right to:
        </p>
        <ul style={{ marginBottom: '25px', paddingLeft: '20px' }}>
          <li>Request access to your personal information</li>
          <li>Request correction of inaccurate information</li>
          <li>Request deletion of your information</li>
          <li>Opt out of marketing communications</li>
        </ul>
      </section>

      {/* Terms of Service */}
      <section style={{ marginBottom: '60px' }}>
        <h2 style={{
          fontSize: '1.8em',
          fontWeight: 'normal',
          marginBottom: '25px',
          color: '#2c3e50'
        }}>
          Terms of Service
        </h2>

        <h3 style={{
          fontSize: '1.3em',
          fontWeight: 'normal',
          marginBottom: '15px',
          color: '#2c3e50'
        }}>
          Photography Services
        </h3>
        <p style={{ marginBottom: '20px' }}>
          All photography services are provided subject to a separate photography agreement that will be executed before any work begins. This agreement will detail:
        </p>
        <ul style={{ marginBottom: '25px', paddingLeft: '20px' }}>
          <li>Scope of work and deliverables</li>
          <li>Timeline and scheduling</li>
          <li>Pricing and payment terms</li>
          <li>Usage rights and licensing</li>
          <li>Cancellation and rescheduling policies</li>
        </ul>

        <h3 style={{
          fontSize: '1.3em',
          fontWeight: 'normal',
          marginBottom: '15px',
          color: '#2c3e50'
        }}>
          Copyright and Usage Rights
        </h3>
        <p style={{ marginBottom: '25px' }}>
          Rob Besant Photography retains copyright to all images created during photography sessions. Usage rights are granted to clients as specified in individual photography agreements. Unauthorized use, reproduction, or distribution of images is prohibited.
        </p>

        <h3 style={{
          fontSize: '1.3em',
          fontWeight: 'normal',
          marginBottom: '15px',
          color: '#2c3e50'
        }}>
          Website Use
        </h3>
        <p style={{ marginBottom: '25px' }}>
          By using this website, you agree to:
        </p>
        <ul style={{ marginBottom: '25px', paddingLeft: '20px' }}>
          <li>Use the site for lawful purposes only</li>
          <li>Not attempt to gain unauthorized access to any part of the site</li>
          <li>Not reproduce, distribute, or create derivative works from site content without permission</li>
          <li>Respect the intellectual property rights of all content displayed</li>
        </ul>

        <h3 style={{
          fontSize: '1.3em',
          fontWeight: 'normal',
          marginBottom: '15px',
          color: '#2c3e50'
        }}>
          Limitation of Liability
        </h3>
        <p style={{ marginBottom: '25px' }}>
          Rob Besant Photography shall not be liable for any indirect, incidental, special, or consequential damages arising from the use of this website or our services. Our total liability shall not exceed the amount paid for services rendered.
        </p>
      </section>

      {/* Cookies Policy */}
      <section style={{ marginBottom: '60px' }}>
        <h2 style={{
          fontSize: '1.8em',
          fontWeight: 'normal',
          marginBottom: '25px',
          color: '#2c3e50'
        }}>
          Cookies Policy
        </h2>

        <p style={{ marginBottom: '20px' }}>
          This website uses cookies to enhance your browsing experience and analyze site traffic. We use:
        </p>
        <ul style={{ marginBottom: '25px', paddingLeft: '20px' }}>
          <li><strong>Essential Cookies:</strong> Required for basic website functionality</li>
          <li><strong>Analytics Cookies:</strong> Help us understand how visitors use our site</li>
          <li><strong>Performance Cookies:</strong> Improve site speed and performance</li>
        </ul>

        <p style={{ marginBottom: '25px' }}>
          You can control cookie preferences through your browser settings. Disabling certain cookies may affect website functionality.
        </p>
      </section>

      {/* Contact Information */}
      <section style={{
        background: '#f8f8f6',
        padding: '40px',
        borderRadius: '10px',
        textAlign: 'center'
      }}>
        <h2 style={{
          fontSize: '1.8em',
          fontWeight: 'normal',
          marginBottom: '20px',
          color: '#2c3e50'
        }}>
          Questions About This Policy?
        </h2>
        <p style={{ marginBottom: '25px' }}>
          If you have any questions about our privacy policy, terms of service, or how we handle your information, please don't hesitate to contact us.
        </p>
        <div style={{
          display: 'flex',
          gap: '20px',
          justifyContent: 'center',
          flexWrap: 'wrap'
        }}>
          <a
            href="mailto:rob@robbesantphotography.com"
            style={{
              display: 'inline-block',
              background: '#2c3e50',
              color: 'white',
              padding: '12px 30px',
              textDecoration: 'none',
              borderRadius: '25px',
              fontSize: '1em',
              transition: 'all 0.3s ease',
              cursor: 'pointer'
            }}
          >
            Email Us
          </a>
        </div>
      </section>

      <footer style={{
        textAlign: 'center',
        marginTop: '60px',
        padding: '20px 0',
        borderTop: '1px solid #eee',
        fontSize: '0.9em',
        color: '#666'
      }}>
        <p>Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</p>
        <p style={{ marginTop: '10px' }}>© {new Date().getFullYear()} Rob Besant Photography. All rights reserved.</p>
      </footer>
    </div>
  )
}

export default LegalPage