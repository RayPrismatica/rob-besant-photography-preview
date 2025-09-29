'use client'

import React, { useState } from 'react'
import Link from 'next/link'

const RestaurantsPage = () => {
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

        /* Hero Section */
        .hero {
          padding: 100px 0;
          background: linear-gradient(135deg, #1a1a1a 0%, #2c3e50 100%);
          color: #fff;
          position: relative;
          overflow: hidden;
        }

        .hero::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: url('/images/restaurant.jpg') center/cover;
          opacity: 0.3;
        }

        .hero-content {
          position: relative;
          z-index: 2;
          text-align: center;
          max-width: 900px;
          margin: 0 auto;
        }

        .hero h1 {
          font-size: 56px;
          line-height: 1.2;
          margin-bottom: 25px;
          font-weight: normal;
          text-shadow: 2px 2px 4px rgba(0,0,0,0.3);
          font-family: Georgia, serif;
        }

        .hero-subtitle {
          font-size: 24px;
          margin-bottom: 45px;
          opacity: 0.95;
        }

        .hero-cta {
          display: inline-block;
          padding: 18px 45px;
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

        /* Introduction */
        .introduction {
          padding: 100px 0;
          background: #fff;
        }

        .intro-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 80px;
          align-items: center;
        }

        .intro-text h2 {
          font-size: 42px;
          color: #2c3e50;
          margin-bottom: 30px;
          font-weight: normal;
          line-height: 1.2;
          font-family: Georgia, serif;
        }

        .intro-text p {
          font-size: 18px;
          color: #3a3a3a;
          margin-bottom: 25px;
          line-height: 1.7;
        }

        .intro-highlight {
          padding: 25px;
          background: #fafaf8;
          border-left: 4px solid #8b7355;
          margin-top: 35px;
          font-style: italic;
          color: #2c3e50;
        }

        .intro-image {
          position: relative;
          aspect-ratio: 3/4;
          border-radius: 5px;
          box-shadow: 0 20px 60px rgba(0,0,0,0.15);
          overflow: hidden;
        }

        .intro-image img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        /* Chef's Reality Section */
        .chef-reality {
          padding: 100px 0;
          background: #fafaf8;
        }

        .reality-content {
          max-width: 800px;
          margin: 0 auto;
          text-align: center;
        }

        .reality-content h2 {
          font-size: 36px;
          color: #2c3e50;
          margin-bottom: 50px;
          font-weight: normal;
          font-family: Georgia, serif;
        }

        .reality-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 40px;
          text-align: left;
        }

        .reality-item {
          background: #fff;
          padding: 35px;
          border-radius: 5px;
          box-shadow: 0 2px 10px rgba(0,0,0,0.05);
        }

        .reality-item h3 {
          font-size: 22px;
          color: #8b7355;
          margin-bottom: 15px;
          font-weight: normal;
          font-family: Georgia, serif;
        }

        .reality-item p {
          color: #6b7280;
          line-height: 1.7;
        }

        /* Benefits Section */
        .benefits {
          padding: 100px 0;
          background: #fff;
        }

        .benefits h2 {
          font-size: 42px;
          text-align: center;
          color: #2c3e50;
          margin-bottom: 20px;
          font-weight: normal;
          font-family: Georgia, serif;
        }

        .benefits-subtitle {
          text-align: center;
          font-size: 20px;
          color: #6b7280;
          margin-bottom: 60px;
        }

        .benefits-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 40px;
        }

        .benefit-card {
          text-align: center;
          padding: 30px;
        }

        .benefit-icon {
          width: 80px;
          height: 80px;
          margin: 0 auto 25px;
          background: linear-gradient(135deg, #8b7355, #6b5a45);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          color: #fff;
        }

        .benefit-icon::before {
          content: "★";
          font-size: 36px;
          color: white;
        }

        .benefit-card h3 {
          font-size: 24px;
          color: #2c3e50;
          margin-bottom: 15px;
          font-weight: normal;
          font-family: Georgia, serif;
        }

        .benefit-card p {
          color: #6b7280;
          line-height: 1.6;
        }

        /* Process Section */
        .process {
          padding: 100px 0;
          background: linear-gradient(to bottom, #2c3e50, #1a1a1a);
          color: #fff;
        }

        .process h2 {
          font-size: 42px;
          text-align: center;
          margin-bottom: 60px;
          font-weight: normal;
          font-family: Georgia, serif;
        }

        .process-timeline {
          max-width: 900px;
          margin: 0 auto;
        }

        .process-step {
          display: grid;
          grid-template-columns: 100px 1fr;
          gap: 40px;
          margin-bottom: 60px;
          position: relative;
        }

        .process-step:not(:last-child)::after {
          content: '';
          position: absolute;
          left: 50px;
          top: 80px;
          width: 2px;
          height: 80px;
          background: rgba(255,255,255,0.2);
        }

        .step-marker {
          width: 100px;
          height: 100px;
          background: #8b7355;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 32px;
          font-weight: normal;
        }

        .step-content h3 {
          font-size: 28px;
          margin-bottom: 15px;
          font-weight: normal;
          font-family: Georgia, serif;
        }

        .step-content p {
          font-size: 18px;
          line-height: 1.7;
          opacity: 0.9;
        }

        /* Social Proof Section */
        .social-proof {
          padding: 100px 0;
          background: #fafaf8;
        }

        .proof-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 60px;
          max-width: 1000px;
          margin: 0 auto;
        }

        .testimonial-card {
          background: #fff;
          padding: 45px;
          border-radius: 5px;
          box-shadow: 0 5px 20px rgba(0,0,0,0.08);
        }

        .testimonial-text {
          font-size: 20px;
          color: #2c3e50;
          line-height: 1.6;
          margin-bottom: 30px;
          font-style: italic;
          font-family: Georgia, serif;
        }

        .testimonial-author {
          font-size: 16px;
          color: #8b7355;
          font-weight: normal;
          font-family: Georgia, serif;
        }

        .testimonial-role {
          font-size: 14px;
          color: #6b7280;
          margin-top: 5px;
        }

        .result-badge {
          display: inline-block;
          margin-top: 20px;
          padding: 10px 20px;
          background: #f0fdf4;
          border-radius: 5px;
          color: #16a34a;
          font-weight: bold;
          font-size: 14px;
        }

        /* Gallery Section */
        .gallery-showcase {
          padding: 100px 0;
          background: #fff;
        }

        .gallery-showcase h2 {
          font-size: 42px;
          text-align: center;
          color: #2c3e50;
          margin-bottom: 60px;
          font-weight: normal;
          font-family: Georgia, serif;
        }

        .gallery-masonry {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 20px;
        }

        .gallery-item {
          position: relative;
          overflow: hidden;
          border-radius: 5px;
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

        .gallery-item:nth-child(1),
        .gallery-item:nth-child(6) {
          grid-row: span 2;
        }

        .gallery-item:hover {
          transform: scale(1.02);
          box-shadow: 0 10px 30px rgba(0,0,0,0.15);
        }

        .gallery-overlay {
          position: absolute;
          bottom: 0;
          left: 0;
          right: 0;
          padding: 30px 20px 20px;
          background: linear-gradient(to top, rgba(0,0,0,0.8), transparent);
          color: #fff;
          opacity: 0;
          transition: opacity 0.3s;
        }

        .gallery-item:hover .gallery-overlay {
          opacity: 1;
        }

        /* Investment Section */
        .investment {
          padding: 100px 0;
          background: #fafaf8;
        }

        .investment-content {
          max-width: 900px;
          margin: 0 auto;
          text-align: center;
        }

        .investment h2 {
          font-size: 42px;
          color: #2c3e50;
          margin-bottom: 30px;
          font-weight: normal;
          font-family: Georgia, serif;
        }

        .investment-intro {
          font-size: 20px;
          color: #6b7280;
          margin-bottom: 60px;
        }

        .package-options {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 40px;
        }

        .package-card {
          background: #fff;
          padding: 45px 35px;
          border-radius: 5px;
          box-shadow: 0 5px 20px rgba(0,0,0,0.08);
          transition: transform 0.3s;
        }

        .package-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 10px 40px rgba(0,0,0,0.12);
        }

        .package-card.featured {
          border: 2px solid #8b7355;
          position: relative;
        }

        .package-card.featured::before {
          content: 'MOST POPULAR';
          position: absolute;
          top: -12px;
          left: 50%;
          transform: translateX(-50%);
          background: #8b7355;
          color: #fff;
          padding: 5px 20px;
          border-radius: 3px;
          font-size: 12px;
          letter-spacing: 1px;
          font-family: -apple-system, sans-serif;
        }

        .package-name {
          font-size: 24px;
          color: #2c3e50;
          margin-bottom: 20px;
          font-family: Georgia, serif;
        }

        .package-description {
          color: #6b7280;
          margin-bottom: 30px;
          line-height: 1.6;
        }

        .package-features {
          list-style: none;
          margin-bottom: 30px;
        }

        .package-features li {
          padding: 10px 0;
          color: #3a3a3a;
          border-bottom: 1px solid #f3f4f6;
        }

        .package-features li:before {
          content: "✓ ";
          color: #8b7355;
          font-weight: bold;
          margin-right: 8px;
        }

        /* Final CTA */
        .final-cta {
          padding: 120px 0;
          background: linear-gradient(135deg, #8b7355 0%, #6b5a45 100%);
          color: #fff;
          text-align: center;
        }

        .final-cta h2 {
          font-size: 48px;
          margin-bottom: 25px;
          font-weight: normal;
          font-family: Georgia, serif;
        }

        .final-cta p {
          font-size: 22px;
          margin-bottom: 45px;
          max-width: 700px;
          margin-left: auto;
          margin-right: auto;
          opacity: 0.95;
          line-height: 1.6;
        }

        .cta-button-group {
          display: flex;
          gap: 25px;
          justify-content: center;
        }

        .cta-primary {
          display: inline-block;
          padding: 18px 45px;
          background: #fff;
          color: #8b7355;
          text-decoration: none;
          border-radius: 5px;
          font-size: 18px;
          font-family: -apple-system, sans-serif;
          text-transform: uppercase;
          letter-spacing: 2px;
          transition: all 0.3s;
        }

        .cta-primary:hover {
          transform: translateY(-2px);
          box-shadow: 0 10px 30px rgba(0,0,0,0.2);
        }

        .cta-secondary {
          display: inline-block;
          padding: 18px 45px;
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

        .cta-secondary:hover {
          background: rgba(255,255,255,0.1);
          transform: translateY(-2px);
        }

        /* Mobile Responsive */
        @media (max-width: 768px) {
          .hero h1 {
            font-size: 36px;
          }

          .hero-subtitle {
            font-size: 18px;
          }

          .intro-grid {
            grid-template-columns: 1fr;
            gap: 40px;
          }

          .reality-grid,
          .proof-grid {
            grid-template-columns: 1fr;
          }

          .benefits-grid {
            grid-template-columns: 1fr;
          }

          .gallery-masonry {
            grid-template-columns: 1fr;
          }

          .gallery-item:nth-child(1),
          .gallery-item:nth-child(6) {
            grid-row: span 1;
          }

          .package-options {
            grid-template-columns: 1fr;
          }

          .cta-button-group {
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
              <h1>Plates that stop scrolling.<br />Evenings that sell out.</h1>
              <p className="hero-subtitle">Your creativity deserves more than a phone snap. Let's create images that do your food justice.</p>
              <a href="#process" className="hero-cta">See How I Work</a>
            </div>
          </div>
        </section>

        {/* Introduction */}
        <section className="introduction">
          <div className="container">
            <div className="intro-grid">
              <div className="intro-text">
                <h2>Your kitchen is creating art. Your photos should show it.</h2>
                <p>I'm Rob. I've spent years in restaurant kitchens – not as a chef, but as the photographer who understands what you're trying to achieve. Every plate that leaves your pass tells a story. Every cocktail is crafted with intention.</p>
                <p>But here's what I've learned: brilliant food means nothing if nobody sees it properly. That perfectly balanced dish, that signature cocktail that took months to perfect – they're getting lost in a sea of mediocre food photos.</p>
                <p>You didn't become a chef to serve average food. So why settle for average photos?</p>
                <div className="intro-highlight">
                  "The difference between a half-empty restaurant and a three-week wait list? Photos that make people hungry before they've even left their sofa."
                </div>
              </div>
              <div className="intro-image">
                <img
                  src="/images/day.jpg"
                  alt="Chef plating signature dish with precision"
                  style={{width: '100%', height: '100%', objectFit: 'cover', cursor: 'pointer', transition: 'transform 0.3s ease'}}
                  onClick={() => openModal('/images/day.jpg', 'Chef plating signature dish with precision')}
                  onMouseEnter={(e) => e.target.style.transform = 'scale(1.05)'}
                  onMouseLeave={(e) => e.target.style.transform = 'scale(1)'}
                  onError={(e) => {
                    e.currentTarget.style.display = 'none';
                    e.currentTarget.parentElement!.innerHTML = 'Chef plating signature dish with precision';
                  }}
                />
              </div>
            </div>
          </div>
        </section>

        {/* Chef's Reality Section */}
        <section className="chef-reality">
          <div className="container">
            <div className="reality-content">
              <h2>I know your reality</h2>
              <div className="reality-grid">
                <div className="reality-item">
                  <h3>Menu changes are constant</h3>
                  <p>Seasonal ingredients, new ideas, special events. You need photos that keep up without breaking the budget or disrupting service.</p>
                </div>
                <div className="reality-item">
                  <h3>Time is everything</h3>
                  <p>You can't close the kitchen for a photo shoot. I work around your prep schedule, your quiet periods, your reality.</p>
                </div>
                <div className="reality-item">
                  <h3>Authenticity matters</h3>
                  <p>No fake steam, no glycerine drops, no inedible props. Real food, captured at its genuine best, because your reputation depends on it.</p>
                </div>
                <div className="reality-item">
                  <h3>Competition is fierce</h3>
                  <p>Every restaurant has an Instagram. But scroll-stopping images that actually drive bookings? That's what separates the packed from the empty.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="benefits">
          <div className="container">
            <h2>What happens with the right images</h2>
            <p className="benefits-subtitle">Real results from real restaurants</p>
            <div className="benefits-grid">
              <div className="benefit-card">
                <div className="benefit-icon"></div>
                <h3>Bookings increase 40%</h3>
                <p>When people can see the care in every detail, they book. Average increase across my restaurant clients in the first three months.</p>
              </div>
              <div className="benefit-card">
                <div className="benefit-icon"></div>
                <h3>Reviews improve naturally</h3>
                <p>When expectations match reality, guests arrive excited and leave delighted. Better photos mean better reviews without asking.</p>
              </div>
              <div className="benefit-card">
                <div className="benefit-icon"></div>
                <h3>Premium pricing justified</h3>
                <p>Quality shows. When your £28 main course looks worth every penny, nobody questions the price. They just book.</p>
              </div>
              <div className="benefit-card">
                <div className="benefit-icon"></div>
                <h3>Social media runs itself</h3>
                <p>A library of professional shots means consistent, confident posting. No more scrambling for content or relying on customer photos.</p>
              </div>
              <div className="benefit-card">
                <div className="benefit-icon"></div>
                <h3>Press coverage happens</h3>
                <p>Food critics and bloggers need images. Give them professional shots and watch the features roll in.</p>
              </div>
              <div className="benefit-card">
                <div className="benefit-icon"></div>
                <h3>Team pride soars</h3>
                <p>When the website shows their work beautifully, your whole team stands taller. Pride in presentation spreads to every service.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className="process" id="process">
          <div className="container">
            <h2>How I capture your creative kitchen</h2>
            <div className="process-timeline">
              <div className="process-step">
                <div className="step-marker">1</div>
                <div className="step-content">
                  <h3>We talk food, not photography</h3>
                  <p>Tell me about your signature dishes, your inspiration, what makes you different. This isn't a tech chat – it's understanding your vision so the photos reflect it perfectly.</p>
                </div>
              </div>
              <div className="process-step">
                <div className="step-marker">2</div>
                <div className="step-content">
                  <h3>I work around your kitchen</h3>
                  <p>Early morning before prep? Quiet afternoon? Between lunch and dinner? Your schedule drives mine. No disruption, no stress, no compromise on service.</p>
                </div>
              </div>
              <div className="process-step">
                <div className="step-marker">3</div>
                <div className="step-content">
                  <h3>Real food, real moments</h3>
                  <p>I capture dishes as they're meant to be served – hot, fresh, perfect. Plus the energy of service, the focus of your team, the atmosphere that makes your restaurant special.</p>
                </div>
              </div>
              <div className="process-step">
                <div className="step-marker">4</div>
                <div className="step-content">
                  <h3>Images ready to work immediately</h3>
                  <p>Within 48 hours: hero website shots, Instagram content for weeks, images for press, everything formatted and ready. Start using them straight away.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Social Proof Section */}
        <section className="social-proof">
          <div className="container">
            <div className="proof-grid">
              <div className="testimonial-card">
                <p className="testimonial-text">"Finally, someone who understands food photography is about emotion, not just aesthetics. Rob captured the soul of our menu. Evening bookings up 40% in two months."</p>
                <p className="testimonial-author">Chef Marco Rossi</p>
                <p className="testimonial-role">Rossi's Kitchen, Soho</p>
                <span className="result-badge">BOOKINGS +40%</span>
              </div>
              <div className="testimonial-card">
                <p className="testimonial-text">"Our tasting menu is complex and personal. Rob made it accessible without dumbing it down. We're now booked solid for six weeks ahead."</p>
                <p className="testimonial-author">Helena Chen</p>
                <p className="testimonial-role">The Modern Table, Bristol</p>
                <span className="result-badge">6 WEEK WAIT LIST</span>
              </div>
            </div>
          </div>
        </section>

        {/* Gallery Section */}
        <section className="gallery-showcase">
          <div className="container">
            <h2>Food photography that fills tables</h2>
            <div className="gallery-masonry">
              <div className="gallery-item">
                <img
                  src="/images/restaurant.jpg"
                  alt="Elegant fine dining plate with microgreens"
                  style={{width: '100%', height: '100%', objectFit: 'cover', cursor: 'pointer', transition: 'transform 0.3s ease'}}
                  onClick={() => openModal('/images/restaurant.jpg', 'Elegant fine dining plate with microgreens')}
                  onMouseEnter={(e) => e.target.style.transform = 'scale(1.05)'}
                  onMouseLeave={(e) => e.target.style.transform = 'scale(1)'}
                  onError={(e) => {
                    e.currentTarget.style.display = 'none';
                    e.currentTarget.parentElement!.innerHTML = '<div class="gallery-fallback">Elegant fine dining plate with microgreens - The Modern Table</div>';
                  }}
                />
                <div className="gallery-overlay">
                  <p>Tasting menu course - The Modern Table</p>
                </div>
              </div>
              <div className="gallery-item">
                <img
                  src="/images/winery.jpg"
                  alt="Signature cocktail with dramatic smoke effect"
                  style={{width: '100%', height: '100%', objectFit: 'cover', cursor: 'pointer', transition: 'transform 0.3s ease'}}
                  onClick={() => openModal('/images/winery.jpg', 'Signature cocktail with dramatic smoke effect')}
                  onMouseEnter={(e) => e.target.style.transform = 'scale(1.05)'}
                  onMouseLeave={(e) => e.target.style.transform = 'scale(1)'}
                  onError={(e) => {
                    e.currentTarget.style.display = 'none';
                    e.currentTarget.parentElement!.innerHTML = '<div class="gallery-fallback">Signature cocktail with dramatic smoke effect - Bar Noir</div>';
                  }}
                />
                <div className="gallery-overlay">
                  <p>Signature cocktail - Bar Noir</p>
                </div>
              </div>
              <div className="gallery-item">
                <img
                  src="/images/day.jpg"
                  alt="Chef at work during service"
                  style={{width: '100%', height: '100%', objectFit: 'cover', cursor: 'pointer', transition: 'transform 0.3s ease'}}
                  onClick={() => openModal('/images/day.jpg', 'Chef at work during service')}
                  onMouseEnter={(e) => e.target.style.transform = 'scale(1.05)'}
                  onMouseLeave={(e) => e.target.style.transform = 'scale(1)'}
                  onError={(e) => {
                    e.currentTarget.style.display = 'none';
                    e.currentTarget.parentElement!.innerHTML = '<div class="gallery-fallback">Chef at work during service - Friday night energy</div>';
                  }}
                />
                <div className="gallery-overlay">
                  <p>Friday night service energy</p>
                </div>
              </div>
              <div className="gallery-item">
                <img
                  src="/images/gastropub.jpg"
                  alt="Seasonal dessert with fresh berries"
                  style={{width: '100%', height: '100%', objectFit: 'cover', cursor: 'pointer', transition: 'transform 0.3s ease'}}
                  onClick={() => openModal('/images/gastropub.jpg', 'Seasonal dessert with fresh berries')}
                  onMouseEnter={(e) => e.target.style.transform = 'scale(1.05)'}
                  onMouseLeave={(e) => e.target.style.transform = 'scale(1)'}
                  onError={(e) => {
                    e.currentTarget.style.display = 'none';
                    e.currentTarget.parentElement!.innerHTML = '<div class="gallery-fallback">Seasonal dessert with fresh berries - Summer special</div>';
                  }}
                />
                <div className="gallery-overlay">
                  <p>Summer berry dessert special</p>
                </div>
              </div>
              <div className="gallery-item">
                <img
                  src="/images/hero-venue.jpg"
                  alt="Restaurant interior at golden hour"
                  style={{width: '100%', height: '100%', objectFit: 'cover', cursor: 'pointer', transition: 'transform 0.3s ease'}}
                  onClick={() => openModal('/images/hero-venue.jpg', 'Restaurant interior at golden hour')}
                  onMouseEnter={(e) => e.target.style.transform = 'scale(1.05)'}
                  onMouseLeave={(e) => e.target.style.transform = 'scale(1)'}
                  onError={(e) => {
                    e.currentTarget.style.display = 'none';
                    e.currentTarget.parentElement!.innerHTML = '<div class="gallery-fallback">Restaurant interior at golden hour - Perfect ambience</div>';
                  }}
                />
                <div className="gallery-overlay">
                  <p>Golden hour ambience</p>
                </div>
              </div>
              <div className="gallery-item">
                <img
                  src="/images/hotel.jpg"
                  alt="Signature main course plating"
                  style={{width: '100%', height: '100%', objectFit: 'cover', cursor: 'pointer', transition: 'transform 0.3s ease'}}
                  onClick={() => openModal('/images/hotel.jpg', 'Signature main course plating')}
                  onMouseEnter={(e) => e.target.style.transform = 'scale(1.05)'}
                  onMouseLeave={(e) => e.target.style.transform = 'scale(1)'}
                  onError={(e) => {
                    e.currentTarget.style.display = 'none';
                    e.currentTarget.parentElement!.innerHTML = '<div class="gallery-fallback">Signature main course plating - Rossi\'s lamb dish</div>';
                  }}
                />
                <div className="gallery-overlay">
                  <p>Signature lamb dish - Rossi's</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Investment Section */}
        <section className="investment">
          <div className="container">
            <div className="investment-content">
              <h2>Investment options for creative kitchens</h2>
              <p className="investment-intro">Choose what works for your restaurant. Every package includes styling guidance, quick turnaround, and images that actually drive bookings.</p>

              <div className="package-options">
                <div className="package-card">
                  <h3 className="package-name">Menu Launch</h3>
                  <p className="package-description">Perfect for seasonal menu changes or new openings</p>
                  <ul className="package-features">
                    <li>Half-day shoot</li>
                    <li>15-20 hero dishes</li>
                    <li>Cocktails included</li>
                    <li>48-hour delivery</li>
                    <li>Web & social formats</li>
                  </ul>
                </div>

                <div className="package-card featured">
                  <h3 className="package-name">Quarterly Package</h3>
                  <p className="package-description">Stay current with seasonal menu updates</p>
                  <ul className="package-features">
                    <li>4 shoots per year</li>
                    <li>Aligned with menu changes</li>
                    <li>Includes events & specials</li>
                    <li>Priority scheduling</li>
                    <li>20% saving vs single shoots</li>
                    <li>Instagram story content</li>
                  </ul>
                </div>

                <div className="package-card">
                  <h3 className="package-name">Full Story</h3>
                  <p className="package-description">Complete visual identity for your restaurant</p>
                  <ul className="package-features">
                    <li>Two-day immersive shoot</li>
                    <li>Full menu coverage</li>
                    <li>Team & atmosphere shots</li>
                    <li>Interior & exterior</li>
                    <li>Press-ready package</li>
                    <li>6-month content library</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="final-cta">
          <div className="container">
            <h2>Ready for photos that match your ambition?</h2>
            <p>Your food deserves better than a rushed phone snap. Let's create images that show the world what you're really capable of.</p>
            <div className="cta-button-group">
              <Link
                href="/booking"
                className="cta-primary"
                style={{
                  display: 'inline-block',
                  padding: '18px 45px',
                  background: '#fff',
                  color: '#8b7355',
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
                  e.target.style.transform = 'translateY(-2px)'
                  e.target.style.boxShadow = '0 10px 30px rgba(0,0,0,0.2)'
                }}
                onMouseLeave={(e) => {
                  e.target.style.transform = 'translateY(0)'
                  e.target.style.boxShadow = 'none'
                }}
              >
                Start a Conversation
              </Link>
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

export default RestaurantsPage