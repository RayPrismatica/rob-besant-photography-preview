'use client'

import React, { useState } from 'react'
import Link from 'next/link'

const HotelsPage = () => {
  const [modalImage, setModalImage] = useState(null)
  const [modalAlt, setModalAlt] = useState('')

  const openModal = (src, alt) => {
    setModalImage(src)
    setModalAlt(alt)
  }

  const closeModal = () => {
    setModalImage(null)
    setModalAlt('')
  }
  return (
    <>
      <style jsx>{`
        .container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 20px;
        }

        .container-wide {
          max-width: 1400px;
          margin: 0 auto;
          padding: 0 20px;
        }

        /* Hero Section */
        .hero {
          padding: 150px 0 100px;
          background: linear-gradient(rgba(44, 62, 80, 0.4), rgba(44, 62, 80, 0.6)), url('/images/hotel.jpg') center/cover;
          color: #fff;
          min-height: 100vh;
          display: flex;
          align-items: center;
        }

        .hero-content {
          text-align: center;
          max-width: 900px;
          margin: 0 auto;
        }

        .hero h1 {
          font-size: 64px;
          line-height: 1.1;
          margin-bottom: 30px;
          font-weight: normal;
          text-shadow: 2px 2px 8px rgba(0,0,0,0.3);
          font-family: Georgia, serif;
        }

        .hero-subtitle {
          font-size: 24px;
          margin-bottom: 50px;
          opacity: 0.95;
          line-height: 1.5;
        }

        .trust-indicators {
          display: flex;
          justify-content: center;
          gap: 60px;
          margin-bottom: 50px;
        }

        .trust-item {
          text-align: center;
        }

        .trust-number {
          font-size: 42px;
          font-weight: normal;
          margin-bottom: 5px;
        }

        .trust-label {
          font-size: 14px;
          text-transform: uppercase;
          letter-spacing: 2px;
          opacity: 0.8;
        }

        .hero-cta {
          display: inline-block;
          padding: 20px 50px;
          background: #8b7355;
          color: #fff;
          text-decoration: none;
          border-radius: 5px;
          font-size: 18px;
          font-family: -apple-system, sans-serif;
          text-transform: uppercase;
          letter-spacing: 2px;
          transition: all 0.3s;
        }

        .hero-cta:hover {
          background: #6b5a45;
          transform: translateY(-2px);
          box-shadow: 0 10px 30px rgba(0,0,0,0.3);
        }

        /* Understanding Section */
        .understanding {
          padding: 100px 0;
          background: #fff;
        }

        .understanding-intro {
          max-width: 800px;
          margin: 0 auto 80px;
          text-align: center;
        }

        .understanding-intro h2 {
          font-size: 42px;
          color: #2c3e50;
          margin-bottom: 30px;
          font-weight: normal;
          line-height: 1.2;
          font-family: Georgia, serif;
        }

        .understanding-intro p {
          font-size: 20px;
          color: #6b7280;
          line-height: 1.7;
        }

        .challenges-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 50px;
          max-width: 1000px;
          margin: 0 auto;
        }

        .challenge-card {
          display: flex;
          gap: 30px;
          align-items: start;
        }

        .challenge-icon {
          width: 60px;
          height: 60px;
          background: linear-gradient(135deg, #8b7355, #6b5a45);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          color: #fff;
          font-size: 24px;
          flex-shrink: 0;
        }

        .challenge-icon::before {
          content: "★";
          font-size: 24px;
          color: white;
        }

        .challenge-content h3 {
          font-size: 24px;
          color: #2c3e50;
          margin-bottom: 12px;
          font-weight: normal;
          font-family: Georgia, serif;
        }

        .challenge-content p {
          color: #6b7280;
          line-height: 1.6;
        }

        /* Results Section */
        .results {
          padding: 100px 0;
          background: #fafaf8;
        }

        .results-header {
          text-align: center;
          max-width: 800px;
          margin: 0 auto 80px;
        }

        .results-header h2 {
          font-size: 42px;
          color: #2c3e50;
          margin-bottom: 20px;
          font-weight: normal;
          font-family: Georgia, serif;
        }

        .results-header p {
          font-size: 20px;
          color: #6b7280;
        }

        .metrics-showcase {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 40px;
          max-width: 1000px;
          margin: 0 auto;
        }

        .metric-card {
          background: #fff;
          padding: 40px;
          border-radius: 5px;
          box-shadow: 0 5px 20px rgba(0,0,0,0.08);
          text-align: center;
        }

        .metric-value {
          font-size: 48px;
          color: #8b7355;
          margin-bottom: 15px;
          font-weight: normal;
        }

        .metric-label {
          font-size: 18px;
          color: #2c3e50;
          margin-bottom: 15px;
          font-family: Georgia, serif;
        }

        .metric-context {
          font-size: 14px;
          color: #6b7280;
          line-height: 1.5;
        }

        /* Room Types Section */
        .room-types {
          padding: 100px 0;
          background: #fff;
        }

        .room-types h2 {
          font-size: 42px;
          text-align: center;
          color: #2c3e50;
          margin-bottom: 60px;
          font-weight: normal;
          font-family: Georgia, serif;
        }

        .room-showcase {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 30px;
        }

        .room-card {
          position: relative;
          overflow: hidden;
          border-radius: 5px;
          height: 400px;
          cursor: pointer;
          background: #f3f4f6;
        }

        .room-card img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.5s;
        }

        .room-card:hover img {
          transform: scale(1.1);
        }

        .room-fallback {
          display: flex;
          align-items: center;
          justify-content: center;
          height: 100%;
          color: #888;
          text-align: center;
          padding: 20px;
        }

        .room-overlay {
          position: absolute;
          bottom: 0;
          left: 0;
          right: 0;
          padding: 40px 30px 30px;
          background: linear-gradient(to top, rgba(0,0,0,0.9), transparent);
          color: #fff;
          transform: translateY(100px);
          transition: transform 0.3s;
        }

        .room-card:hover .room-overlay {
          transform: translateY(0);
        }

        .room-overlay h3 {
          font-size: 28px;
          margin-bottom: 10px;
          font-weight: normal;
          font-family: Georgia, serif;
        }

        .room-overlay p {
          font-size: 16px;
          opacity: 0.9;
          line-height: 1.5;
        }

        /* Process Section */
        .process {
          padding: 100px 0;
          background: #fafaf8;
        }

        .process h2 {
          font-size: 42px;
          text-align: center;
          color: #2c3e50;
          margin-bottom: 20px;
          font-weight: normal;
          font-family: Georgia, serif;
        }

        .process-intro {
          text-align: center;
          font-size: 20px;
          color: #6b7280;
          margin-bottom: 80px;
          max-width: 700px;
          margin-left: auto;
          margin-right: auto;
        }

        .process-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 40px;
          max-width: 1200px;
          margin: 0 auto;
        }

        .process-step {
          text-align: center;
        }

        .step-icon {
          width: 80px;
          height: 80px;
          margin: 0 auto 25px;
          background: #fff;
          border: 2px solid #8b7355;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 32px;
          color: #8b7355;
          font-weight: normal;
        }

        .process-step h3 {
          font-size: 22px;
          color: #2c3e50;
          margin-bottom: 15px;
          font-weight: normal;
          font-family: Georgia, serif;
        }

        .process-step p {
          color: #6b7280;
          line-height: 1.6;
          font-size: 16px;
        }

        /* Testimonials Section */
        .testimonials {
          padding: 100px 0;
          background: linear-gradient(135deg, #2c3e50, #1a1a1a);
          color: #fff;
        }

        .testimonials h2 {
          font-size: 42px;
          text-align: center;
          margin-bottom: 80px;
          font-weight: normal;
          font-family: Georgia, serif;
        }

        .testimonial-carousel {
          max-width: 1000px;
          margin: 0 auto;
        }

        .testimonial-slide {
          background: rgba(255,255,255,0.05);
          padding: 60px;
          border-radius: 5px;
          backdrop-filter: blur(10px);
          border: 1px solid rgba(255,255,255,0.1);
        }

        .testimonial-text {
          font-size: 24px;
          line-height: 1.6;
          margin-bottom: 40px;
          font-style: italic;
          font-family: Georgia, serif;
        }

        .testimonial-footer {
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .author-name {
          font-size: 20px;
          margin-bottom: 5px;
          font-family: Georgia, serif;
        }

        .author-hotel {
          font-size: 16px;
          opacity: 0.8;
        }

        .testimonial-result {
          padding: 12px 25px;
          background: #8b7355;
          border-radius: 5px;
          font-size: 14px;
          text-transform: uppercase;
          letter-spacing: 1px;
        }

        /* Gallery Section */
        .gallery {
          padding: 100px 0;
          background: #fff;
        }

        .gallery h2 {
          font-size: 42px;
          text-align: center;
          color: #2c3e50;
          margin-bottom: 20px;
          font-weight: normal;
          font-family: Georgia, serif;
        }

        .gallery-subtitle {
          text-align: center;
          font-size: 20px;
          color: #6b7280;
          margin-bottom: 60px;
        }

        .gallery-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 20px;
        }

        .gallery-item {
          position: relative;
          overflow: hidden;
          border-radius: 5px;
          aspect-ratio: 4/3;
          cursor: pointer;
          transition: all 0.3s;
          background: #f3f4f6;
        }

        .gallery-item img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.5s;
        }

        .gallery-item:hover img {
          transform: scale(1.1);
        }

        .gallery-fallback {
          display: flex;
          align-items: center;
          justify-content: center;
          color: #888;
          text-align: center;
          font-size: 0.9em;
          padding: 20px;
          height: 100%;
        }

        .gallery-item.wide {
          grid-column: span 2;
        }

        .gallery-item.tall {
          grid-row: span 2;
          aspect-ratio: 4/6;
        }

        .gallery-item:hover {
          transform: scale(1.02);
          box-shadow: 0 10px 30px rgba(0,0,0,0.15);
        }

        /* Investment Section */
        .investment {
          padding: 100px 0;
          background: #fafaf8;
        }

        .investment-content {
          max-width: 1000px;
          margin: 0 auto;
        }

        .investment h2 {
          font-size: 42px;
          text-align: center;
          color: #2c3e50;
          margin-bottom: 30px;
          font-weight: normal;
          font-family: Georgia, serif;
        }

        .investment-intro {
          text-align: center;
          font-size: 20px;
          color: #6b7280;
          margin-bottom: 80px;
          max-width: 700px;
          margin-left: auto;
          margin-right: auto;
        }

        .package-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 50px;
          margin-bottom: 60px;
        }

        .package {
          background: #fff;
          border-radius: 5px;
          overflow: hidden;
          box-shadow: 0 5px 30px rgba(0,0,0,0.08);
          transition: transform 0.3s;
        }

        .package:hover {
          transform: translateY(-5px);
          box-shadow: 0 10px 40px rgba(0,0,0,0.12);
        }

        .package.featured {
          border: 2px solid #8b7355;
        }

        .package-header {
          padding: 40px;
          background: linear-gradient(135deg, #8b7355, #6b5a45);
          color: #fff;
        }

        .package.featured .package-header {
          background: linear-gradient(135deg, #2c3e50, #1a1a1a);
        }

        .package-name {
          font-size: 32px;
          margin-bottom: 10px;
          font-weight: normal;
          font-family: Georgia, serif;
        }

        .package-tagline {
          font-size: 16px;
          opacity: 0.9;
        }

        .package-body {
          padding: 40px;
        }

        .package-features {
          list-style: none;
          margin-bottom: 40px;
        }

        .package-features li {
          padding: 15px 0;
          border-bottom: 1px solid #f3f4f6;
          color: #3a3a3a;
        }

        .package-features li:last-child {
          border-bottom: none;
        }

        .package-features li:before {
          content: "✓ ";
          color: #8b7355;
          font-weight: bold;
          margin-right: 10px;
        }

        .package-cta {
          text-align: center;
        }

        .package-btn {
          display: inline-block;
          padding: 15px 40px;
          background: #8b7355;
          color: #fff;
          text-decoration: none;
          border-radius: 5px;
          font-family: -apple-system, sans-serif;
          text-transform: uppercase;
          letter-spacing: 1px;
          transition: all 0.3s;
        }

        .package-btn:hover {
          background: #6b5a45;
          transform: translateY(-2px);
        }

        .custom-note {
          text-align: center;
          padding: 40px;
          background: #fff;
          border-radius: 5px;
          box-shadow: 0 2px 10px rgba(0,0,0,0.05);
        }

        .custom-note h3 {
          font-size: 28px;
          color: #2c3e50;
          margin-bottom: 15px;
          font-weight: normal;
          font-family: Georgia, serif;
        }

        .custom-note p {
          font-size: 18px;
          color: #6b7280;
          margin-bottom: 25px;
        }

        /* Final CTA */
        .final-cta {
          padding: 120px 0;
          background: url('/images/hero-venue.jpg') center/cover;
          position: relative;
        }

        .final-cta::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: rgba(44, 62, 80, 0.9);
        }

        .cta-content {
          position: relative;
          z-index: 2;
          text-align: center;
          color: #fff;
          max-width: 800px;
          margin: 0 auto;
        }

        .cta-content h2 {
          font-size: 48px;
          margin-bottom: 25px;
          font-weight: normal;
          font-family: Georgia, serif;
        }

        .cta-content p {
          font-size: 22px;
          margin-bottom: 50px;
          opacity: 0.95;
          line-height: 1.6;
        }

        .cta-buttons {
          display: flex;
          gap: 30px;
          justify-content: center;
        }

        .btn-primary {
          display: inline-block;
          padding: 20px 50px;
          background: #8b7355;
          color: #fff;
          text-decoration: none;
          border-radius: 5px;
          font-size: 18px;
          font-family: -apple-system, sans-serif;
          text-transform: uppercase;
          letter-spacing: 2px;
          transition: all 0.3s;
        }

        .btn-primary:hover {
          background: #6b5a45;
          transform: translateY(-2px);
          box-shadow: 0 10px 30px rgba(0,0,0,0.3);
        }

        .btn-secondary {
          display: inline-block;
          padding: 20px 50px;
          background: transparent;
          color: #fff;
          text-decoration: none;
          border: 2px solid #fff;
          border-radius: 5px;
          font-size: 18px;
          font-family: -apple-system, sans-serif;
          text-transform: uppercase;
          letter-spacing: 2px;
          transition: all 0.3s;
        }

        .btn-secondary:hover {
          background: rgba(255,255,255,0.1);
          transform: translateY(-2px);
        }

        /* Mobile Responsive */
        @media (max-width: 768px) {
          .hero h1 {
            font-size: 42px;
          }

          .trust-indicators {
            flex-direction: column;
            gap: 30px;
          }

          .challenges-grid,
          .metrics-showcase,
          .room-showcase,
          .package-grid {
            grid-template-columns: 1fr;
          }

          .process-grid {
            grid-template-columns: 1fr;
            gap: 60px;
          }

          .gallery-grid {
            grid-template-columns: repeat(2, 1fr);
          }

          .gallery-item.wide {
            grid-column: span 1;
          }

          .testimonial-slide {
            padding: 40px 30px;
          }

          .testimonial-footer {
            flex-direction: column;
            gap: 20px;
            text-align: center;
          }

          .cta-buttons {
            flex-direction: column;
            align-items: center;
          }
        }
      `}</style>

      <div style={{
        fontFamily: 'Georgia, serif',
        color: '#3a3a3a',
        backgroundColor: '#fafaf8',
        lineHeight: '1.7'
      }}>
        {/* Hero Section */}
        <section className="hero">
          <div className="container">
            <div className="hero-content">
              <h1>Rooms that book themselves.<br />Stories that travel.</h1>
              <p className="hero-subtitle">Stop competing on price. Start winning on desire.<br />Professional hotel photography that turns browsers into guests.</p>

              <div className="trust-indicators">
                <div className="trust-item">
                  <div className="trust-number">35%</div>
                  <div className="trust-label">Average ADR Increase</div>
                </div>
                <div className="trust-item">
                  <div className="trust-number">47</div>
                  <div className="trust-label">Boutique Hotels Shot</div>
                </div>
                <div className="trust-item">
                  <div className="trust-number">3x</div>
                  <div className="trust-label">More Direct Bookings</div>
                </div>
              </div>

              <a href="#process" className="hero-cta">See How I Work</a>
            </div>
          </div>
        </section>

        {/* Understanding Section */}
        <section className="understanding">
          <div className="container">
            <div className="understanding-intro">
              <h2>I understand boutique hotels</h2>
              <p>You're not selling beds. You're selling experiences, stories, escapes. But on OTAs, you're reduced to a price and star rating. That's not who you are.</p>
            </div>

            <div className="challenges-grid">
              <div className="challenge-card">
                <div className="challenge-icon"></div>
                <div className="challenge-content">
                  <h3>OTA commission is killing you</h3>
                  <p>Every booking through Booking.com costs 15-20%. You need direct bookings, but your website isn't converting because the photos don't show your true value.</p>
                </div>
              </div>

              <div className="challenge-card">
                <div className="challenge-icon"></div>
                <div className="challenge-content">
                  <h3>Instagram isn't just marketing</h3>
                  <p>It's your shop window. But without a library of stunning images, you're posting the same tired shots while competitors steal your spotlight.</p>
                </div>
              </div>

              <div className="challenge-card">
                <div className="challenge-icon"></div>
                <div className="challenge-content">
                  <h3>Press needs visuals</h3>
                  <p>Travel writers want to feature you, but they need magazine-quality images. Phone snaps don't make it into Sunday supplements.</p>
                </div>
              </div>

              <div className="challenge-card">
                <div className="challenge-icon"></div>
                <div className="challenge-content">
                  <h3>Premium positioning needs proof</h3>
                  <p>You've invested in beautiful interiors, exceptional service, unique experiences. If the photos don't show it, guests won't pay for it.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Results Section */}
        <section className="results">
          <div className="container">
            <div className="results-header">
              <h2>What professional photography delivers</h2>
              <p>Real results from boutique hotels I've worked with</p>
            </div>

            <div className="metrics-showcase">
              <div className="metric-card">
                <div className="metric-value">+35%</div>
                <div className="metric-label">Average Daily Rate</div>
                <div className="metric-context">Guests pay more when they can see the value</div>
              </div>

              <div className="metric-card">
                <div className="metric-value">3x</div>
                <div className="metric-label">Direct Bookings</div>
                <div className="metric-context">Website conversion when images tell your story</div>
              </div>

              <div className="metric-card">
                <div className="metric-value">52%</div>
                <div className="metric-label">Longer Stays</div>
                <div className="metric-context">When guests see more, they book more</div>
              </div>
            </div>
          </div>
        </section>

        {/* Room Types Section */}
        <section className="room-types">
          <div className="container-wide">
            <h2>Every space has a story</h2>

            <div className="room-showcase">
              <div className="room-card">
                <img
                  src="/images/hotel.jpg"
                  alt="Luxury suite with period features"
                  style={{cursor: 'pointer', transition: 'transform 0.3s ease'}}
                  onClick={() => openModal('/images/hotel.jpg', 'Luxury suite with period features')}
                  onMouseEnter={(e) => e.target.style.transform = 'scale(1.05)'}
                  onMouseLeave={(e) => e.target.style.transform = 'scale(1)'}
                  onError={(e) => {
                    e.currentTarget.style.display = 'none';
                    e.currentTarget.parentElement!.innerHTML = '<div class="room-fallback">Luxury suite with period features</div>';
                  }}
                />
                <div className="room-overlay">
                  <h3>Signature Suites</h3>
                  <p>Show why your best rooms command premium rates. Every detail, every texture, every view that justifies the price.</p>
                </div>
              </div>

              <div className="room-card">
                <img
                  src="/images/restaurant.jpg"
                  alt="Boutique hotel restaurant"
                  style={{cursor: 'pointer', transition: 'transform 0.3s ease'}}
                  onClick={() => openModal('/images/restaurant.jpg', 'Boutique hotel restaurant')}
                  onMouseEnter={(e) => e.target.style.transform = 'scale(1.05)'}
                  onMouseLeave={(e) => e.target.style.transform = 'scale(1)'}
                  onError={(e) => {
                    e.currentTarget.style.display = 'none';
                    e.currentTarget.parentElement!.innerHTML = '<div class="room-fallback">Boutique hotel restaurant</div>';
                  }}
                />
                <div className="room-overlay">
                  <h3>Restaurant & Bar</h3>
                  <p>Not just for guests. Show locals why your restaurant is a destination, not just a hotel dining room.</p>
                </div>
              </div>

              <div className="room-card">
                <img
                  src="/images/winery.jpg"
                  alt="Spa and wellness area"
                  style={{cursor: 'pointer', transition: 'transform 0.3s ease'}}
                  onClick={() => openModal('/images/winery.jpg', 'Spa and wellness area')}
                  onMouseEnter={(e) => e.target.style.transform = 'scale(1.05)'}
                  onMouseLeave={(e) => e.target.style.transform = 'scale(1)'}
                  onError={(e) => {
                    e.currentTarget.style.display = 'none';
                    e.currentTarget.parentElement!.innerHTML = '<div class="room-fallback">Spa and wellness area</div>';
                  }}
                />
                <div className="room-overlay">
                  <h3>Experiences & Amenities</h3>
                  <p>The spa, the garden, the library. These aren't add-ons – they're reasons to choose you over the chain hotel.</p>
                </div>
              </div>

              <div className="room-card">
                <img
                  src="/images/hero-venue.jpg"
                  alt="Hotel exterior at twilight"
                  style={{cursor: 'pointer', transition: 'transform 0.3s ease'}}
                  onClick={() => openModal('/images/hero-venue.jpg', 'Hotel exterior at twilight')}
                  onMouseEnter={(e) => e.target.style.transform = 'scale(1.05)'}
                  onMouseLeave={(e) => e.target.style.transform = 'scale(1)'}
                  onError={(e) => {
                    e.currentTarget.style.display = 'none';
                    e.currentTarget.parentElement!.innerHTML = '<div class="room-fallback">Hotel exterior at twilight</div>';
                  }}
                />
                <div className="room-overlay">
                  <h3>The Arrival</h3>
                  <p>First impressions matter. Show them the moment they'll fall in love with your hotel – before they even check in.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className="process" id="process">
          <div className="container">
            <h2>How I capture your hotel's essence</h2>
            <p className="process-intro">Minimal disruption, maximum impact. Here's how we create images that transform bookings.</p>

            <div className="process-grid">
              <div className="process-step">
                <div className="step-icon">1</div>
                <h3>Strategic Planning</h3>
                <p>We'll walk your property together, discussing your brand, your guests, your competition. This isn't just about pretty pictures – it's about business results.</p>
              </div>

              <div className="process-step">
                <div className="step-icon">2</div>
                <h3>Seamless Execution</h3>
                <p>I work around your occupancy, never disrupting guests. Early mornings for exteriors, quiet afternoons for interiors. Your operation continues smoothly.</p>
              </div>

              <div className="process-step">
                <div className="step-icon">3</div>
                <h3>Authentic Luxury</h3>
                <p>No over-styling or fake perfection. I capture the real experience – morning light through heritage windows, fresh flowers in the lobby, the warmth of your welcome.</p>
              </div>

              <div className="process-step">
                <div className="step-icon">4</div>
                <h3>Ready to Work</h3>
                <p>Within a week: website galleries, OTA uploads, Instagram content for months, press-ready images. Everything formatted, organised, ready to drive bookings.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="testimonials">
          <div className="container">
            <h2>Hotels that transformed their bookings</h2>

            <div className="testimonial-carousel">
              <div className="testimonial-slide">
                <p className="testimonial-text">"Rob understood immediately that we're selling more than rooms – we're selling an experience. His images capture the soul of our hotel. Direct bookings up 300%, average stay increased from 2 to 3.5 nights. The investment paid for itself in six weeks."</p>

                <div className="testimonial-footer">
                  <div className="testimonial-author">
                    <div className="author-name">James Chen, General Manager</div>
                    <div className="author-hotel">The Bloomsbury Boutique Hotel, London</div>
                  </div>
                  <div className="testimonial-result">ADR +35% • DIRECT BOOKINGS 3X</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Gallery Section */}
        <section className="gallery">
          <div className="container-wide">
            <h2>Boutique hotel photography portfolio</h2>
            <p className="gallery-subtitle">Every image designed to convert lookers into bookers</p>

            <div className="gallery-grid">
              <div className="gallery-item wide">
                <img
                  src="/images/hotel.jpg"
                  alt="Luxury hotel room with four-poster bed"
                  style={{cursor: 'pointer', transition: 'transform 0.3s ease'}}
                  onClick={() => openModal('/images/hotel.jpg', 'Luxury hotel room with four-poster bed')}
                  onMouseEnter={(e) => e.target.style.transform = 'scale(1.05)'}
                  onMouseLeave={(e) => e.target.style.transform = 'scale(1)'}
                  onError={(e) => {
                    e.currentTarget.style.display = 'none';
                    e.currentTarget.parentElement!.innerHTML = '<div class="gallery-fallback">Luxury hotel room with four-poster bed</div>';
                  }}
                />
              </div>
              <div className="gallery-item">
                <img
                  src="/images/restaurant.jpg"
                  alt="Afternoon tea service"
                  style={{cursor: 'pointer', transition: 'transform 0.3s ease'}}
                  onClick={() => openModal('/images/restaurant.jpg', 'Afternoon tea service')}
                  onMouseEnter={(e) => e.target.style.transform = 'scale(1.05)'}
                  onMouseLeave={(e) => e.target.style.transform = 'scale(1)'}
                  onError={(e) => {
                    e.currentTarget.style.display = 'none';
                    e.currentTarget.parentElement!.innerHTML = '<div class="gallery-fallback">Afternoon tea service</div>';
                  }}
                />
              </div>
              <div className="gallery-item">
                <img
                  src="/images/gastropub.jpg"
                  alt="Bathroom with freestanding bath"
                  style={{cursor: 'pointer', transition: 'transform 0.3s ease'}}
                  onClick={() => openModal('/images/gastropub.jpg', 'Bathroom with freestanding bath')}
                  onMouseEnter={(e) => e.target.style.transform = 'scale(1.05)'}
                  onMouseLeave={(e) => e.target.style.transform = 'scale(1)'}
                  onError={(e) => {
                    e.currentTarget.style.display = 'none';
                    e.currentTarget.parentElement!.innerHTML = '<div class="gallery-fallback">Bathroom with freestanding bath</div>';
                  }}
                />
              </div>
              <div className="gallery-item tall">
                <img
                  src="/images/day.jpg"
                  alt="Grand staircase"
                  style={{cursor: 'pointer', transition: 'transform 0.3s ease'}}
                  onClick={() => openModal('/images/day.jpg', 'Grand staircase')}
                  onMouseEnter={(e) => e.target.style.transform = 'scale(1.05)'}
                  onMouseLeave={(e) => e.target.style.transform = 'scale(1)'}
                  onError={(e) => {
                    e.currentTarget.style.display = 'none';
                    e.currentTarget.parentElement!.innerHTML = '<div class="gallery-fallback">Grand staircase</div>';
                  }}
                />
              </div>
              <div className="gallery-item">
                <img
                  src="/images/winery.jpg"
                  alt="Garden terrace"
                  style={{cursor: 'pointer', transition: 'transform 0.3s ease'}}
                  onClick={() => openModal('/images/winery.jpg', 'Garden terrace')}
                  onMouseEnter={(e) => e.target.style.transform = 'scale(1.05)'}
                  onMouseLeave={(e) => e.target.style.transform = 'scale(1)'}
                  onError={(e) => {
                    e.currentTarget.style.display = 'none';
                    e.currentTarget.parentElement!.innerHTML = '<div class="gallery-fallback">Garden terrace</div>';
                  }}
                />
              </div>
              <div className="gallery-item">
                <img
                  src="/images/cafe.jpg"
                  alt="Library lounge"
                  style={{cursor: 'pointer', transition: 'transform 0.3s ease'}}
                  onClick={() => openModal('/images/cafe.jpg', 'Library lounge')}
                  onMouseEnter={(e) => e.target.style.transform = 'scale(1.05)'}
                  onMouseLeave={(e) => e.target.style.transform = 'scale(1)'}
                  onError={(e) => {
                    e.currentTarget.style.display = 'none';
                    e.currentTarget.parentElement!.innerHTML = '<div class="gallery-fallback">Library lounge</div>';
                  }}
                />
              </div>
              <div className="gallery-item wide">
                <img
                  src="/images/hero-venue.jpg"
                  alt="Hotel exterior at golden hour"
                  style={{cursor: 'pointer', transition: 'transform 0.3s ease'}}
                  onClick={() => openModal('/images/hero-venue.jpg', 'Hotel exterior at golden hour')}
                  onMouseEnter={(e) => e.target.style.transform = 'scale(1.05)'}
                  onMouseLeave={(e) => e.target.style.transform = 'scale(1)'}
                  onError={(e) => {
                    e.currentTarget.style.display = 'none';
                    e.currentTarget.parentElement!.innerHTML = '<div class="gallery-fallback">Hotel exterior at golden hour</div>';
                  }}
                />
              </div>
              <div className="gallery-item">
                <img
                  src="/images/inn.jpg"
                  alt="Breakfast spread"
                  style={{cursor: 'pointer', transition: 'transform 0.3s ease'}}
                  onClick={() => openModal('/images/inn.jpg', 'Breakfast spread')}
                  onMouseEnter={(e) => e.target.style.transform = 'scale(1.05)'}
                  onMouseLeave={(e) => e.target.style.transform = 'scale(1)'}
                  onError={(e) => {
                    e.currentTarget.style.display = 'none';
                    e.currentTarget.parentElement!.innerHTML = '<div class="gallery-fallback">Breakfast spread</div>';
                  }}
                />
              </div>
              <div className="gallery-item">
                <img
                  src="/images/restaurant.jpg"
                  alt="Spa treatment room"
                  style={{cursor: 'pointer', transition: 'transform 0.3s ease'}}
                  onClick={() => openModal('/images/restaurant.jpg', 'Spa treatment room')}
                  onMouseEnter={(e) => e.target.style.transform = 'scale(1.05)'}
                  onMouseLeave={(e) => e.target.style.transform = 'scale(1)'}
                  onError={(e) => {
                    e.currentTarget.style.display = 'none';
                    e.currentTarget.parentElement!.innerHTML = '<div class="gallery-fallback">Spa treatment room</div>';
                  }}
                />
              </div>
              <div className="gallery-item">
                <img
                  src="/images/winery.jpg"
                  alt="Cocktail bar"
                  style={{cursor: 'pointer', transition: 'transform 0.3s ease'}}
                  onClick={() => openModal('/images/winery.jpg', 'Cocktail bar')}
                  onMouseEnter={(e) => e.target.style.transform = 'scale(1.05)'}
                  onMouseLeave={(e) => e.target.style.transform = 'scale(1)'}
                  onError={(e) => {
                    e.currentTarget.style.display = 'none';
                    e.currentTarget.parentElement!.innerHTML = '<div class="gallery-fallback">Cocktail bar</div>';
                  }}
                />
              </div>
            </div>
          </div>
        </section>

        {/* Investment Section */}
        <section className="investment">
          <div className="container">
            <div className="investment-content">
              <h2>Investment in your hotel's future</h2>
              <p className="investment-intro">Choose the package that matches your property and ambitions. Every option includes styling consultation, minimal disruption, and images that drive bookings.</p>

              <div className="package-grid">
                <div className="package featured">
                  <div className="package-header">
                    <h3 className="package-name">Full Story</h3>
                    <p className="package-tagline">Complete visual identity</p>
                  </div>
                  <div className="package-body">
                    <ul className="package-features">
                      <li>Two-day comprehensive shoot</li>
                      <li>All room categories captured</li>
                      <li>Restaurant & bar coverage</li>
                      <li>Spa, facilities & experiences</li>
                      <li>Exterior hero shots (dawn & dusk)</li>
                      <li>Lifestyle shots with models</li>
                      <li>150+ final images</li>
                      <li>Press kit included</li>
                      <li>6-month Instagram content</li>
                    </ul>
                    <div className="package-cta">
                      <Link href="/booking" className="package-btn">
                        Discuss Full Story
                      </Link>
                    </div>
                  </div>
                </div>

                <div className="package">
                  <div className="package-header">
                    <h3 className="package-name">Refresh</h3>
                    <p className="package-tagline">Update key areas</p>
                  </div>
                  <div className="package-body">
                    <ul className="package-features">
                      <li>One-day targeted shoot</li>
                      <li>New suites or renovations</li>
                      <li>Seasonal updates</li>
                      <li>Menu & restaurant refresh</li>
                      <li>50-75 final images</li>
                      <li>Quick turnaround</li>
                      <li>Social media package</li>
                      <li>Perfect for annual updates</li>
                    </ul>
                    <div className="package-cta">
                      <Link href="/booking" className="package-btn">
                        Book Refresh
                      </Link>
                    </div>
                  </div>
                </div>
              </div>

              <div className="custom-note">
                <h3>Larger properties?</h3>
                <p>Country house hotels, resorts, and multi-property groups – let's create a custom package that captures your full offering.</p>
                <Link href="/booking" className="package-btn">
                  Discuss Custom Package
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="final-cta">
          <div className="container">
            <div className="cta-content">
              <h2>Ready to stop competing on price?</h2>
              <p>Let's create images that show why your hotel is worth every penny. No clichés, no gimmicks – just authentic luxury that converts browsers into guests.</p>

              <div className="cta-buttons">
                <Link
                  href="/booking"
                  className="btn-primary"
                  style={{
                    display: 'inline-block',
                    padding: '20px 50px',
                    background: '#8b7355',
                    color: '#fff',
                    textDecoration: 'none',
                    borderRadius: '5px',
                    fontSize: '18px',
                    fontFamily: '-apple-system, sans-serif',
                    textTransform: 'uppercase',
                    letterSpacing: '2px',
                    transition: 'all 0.3s',
                    cursor: 'pointer'
                  }}
                  onMouseEnter={(e) => {
                    e.target.style.background = '#6b5a45'
                    e.target.style.transform = 'translateY(-2px)'
                    e.target.style.boxShadow = '0 10px 30px rgba(0,0,0,0.3)'
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.background = '#8b7355'
                    e.target.style.transform = 'translateY(0)'
                    e.target.style.boxShadow = 'none'
                  }}
                >
                  Start a Conversation
                </Link>
              </div>
            </div>
          </div>
        </section>
      </div>
      {/* Modal */}
      {modalImage && (
        <div
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            backgroundColor: 'rgba(0, 0, 0, 0.9)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            zIndex: 1000,
            padding: '20px'
          }}
          onClick={closeModal}
        >
          <div
            style={{
              position: 'relative',
              maxWidth: '90vw',
              maxHeight: '90vh',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={modalImage}
              alt={modalAlt}
              style={{
                maxWidth: '100%',
                maxHeight: '100%',
                objectFit: 'contain',
                borderRadius: '8px'
              }}
            />
            <button
              onClick={closeModal}
              style={{
                position: 'absolute',
                top: '-50px',
                right: '0px',
                background: 'transparent',
                border: 'none',
                color: 'white',
                fontSize: '30px',
                cursor: 'pointer',
                width: '40px',
                height: '40px',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                transition: 'background 0.3s ease'
              }}
              onMouseEnter={(e) => {
                e.target.style.background = 'rgba(255, 255, 255, 0.2)'
              }}
              onMouseLeave={(e) => {
                e.target.style.background = 'transparent'
              }}
            >
              ×
            </button>
          </div>
        </div>
      )}
    </>
  )
}

export default HotelsPage