'use client'

import React, { useState } from 'react'
import Link from 'next/link'

const GastropubsPage = () => {
  const [modalImage, setModalImage] = useState<string | null>(null)
  const [modalAlt, setModalAlt] = useState('')

  const openModal = (src: string, alt: string) => {
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
          background: linear-gradient(to bottom, #fafaf8, #fff);
        }

        .hero-content {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 60px;
          align-items: center;
        }

        .hero-text h1 {
          font-size: 48px;
          line-height: 1.2;
          color: #2c3e50;
          margin-bottom: 25px;
          font-weight: normal;
          font-family: Georgia, serif;
        }

        .hero-text p {
          font-size: 20px;
          color: #6b7280;
          margin-bottom: 35px;
        }

        .promise-box {
          background: #fff;
          padding: 30px;
          border-radius: 5px;
          box-shadow: 0 2px 10px rgba(0,0,0,0.05);
          border-left: 4px solid #8b7355;
        }

        .promise-box h2 {
          font-size: 24px;
          color: #2c3e50;
          margin-bottom: 15px;
          font-weight: normal;
          font-family: Georgia, serif;
        }

        .promise-box ul {
          list-style: none;
        }

        .promise-box li {
          padding: 8px 0;
          color: #3a3a3a;
        }

        .promise-box li:before {
          content: "✓ ";
          color: #8b7355;
          font-weight: bold;
          margin-right: 8px;
        }

        .hero-image {
          position: relative;
          overflow: hidden;
          border-radius: 5px;
          box-shadow: 0 10px 30px rgba(0,0,0,0.1);
          aspect-ratio: 6/7;
          background: #ddd;
          display: flex;
          align-items: center;
          justify-content: center;
          color: #888;
          font-size: 1.1em;
        }

        /* Introduction Section */
        .introduction {
          padding: 100px 0;
          background: #fff;
        }

        .intro-content {
          max-width: 800px;
          margin: 0 auto;
          text-align: center;
        }

        .intro-content h2 {
          font-size: 36px;
          color: #2c3e50;
          margin-bottom: 30px;
          font-weight: normal;
          font-family: Georgia, serif;
        }

        .intro-content p {
          font-size: 18px;
          color: #3a3a3a;
          margin-bottom: 25px;
          line-height: 1.7;
        }

        /* Benefits Section */
        .benefits {
          padding: 100px 0;
          background: #fafaf8;
        }

        .benefits h2 {
          font-size: 36px;
          text-align: center;
          color: #2c3e50;
          margin-bottom: 60px;
          font-weight: normal;
          font-family: Georgia, serif;
        }

        .benefits-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 40px;
        }

        .benefit-card {
          background: #fff;
          padding: 35px;
          border-radius: 5px;
          box-shadow: 0 2px 10px rgba(0,0,0,0.05);
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
          line-height: 1.7;
        }

        /* Process Section */
        .process {
          padding: 100px 0;
          background: #fff;
        }

        .process h2 {
          font-size: 36px;
          text-align: center;
          color: #2c3e50;
          margin-bottom: 20px;
          font-weight: normal;
          font-family: Georgia, serif;
        }

        .process-subtitle {
          text-align: center;
          font-size: 18px;
          color: #6b7280;
          margin-bottom: 60px;
        }

        .process-steps {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 30px;
        }

        .step {
          text-align: center;
        }

        .step-number {
          display: inline-block;
          width: 50px;
          height: 50px;
          line-height: 50px;
          background: #8b7355;
          color: #fff;
          border-radius: 50%;
          font-size: 20px;
          margin-bottom: 20px;
        }

        .step h3 {
          font-size: 20px;
          color: #2c3e50;
          margin-bottom: 10px;
          font-weight: normal;
          font-family: Georgia, serif;
        }

        .step p {
          color: #6b7280;
          font-size: 16px;
          line-height: 1.6;
        }

        /* Testimonial Section */
        .testimonial {
          padding: 100px 0;
          background: #fafaf8;
        }

        .testimonial-box {
          max-width: 900px;
          margin: 0 auto;
          background: #fff;
          padding: 60px;
          border-radius: 5px;
          box-shadow: 0 2px 20px rgba(0,0,0,0.08);
          text-align: center;
        }

        .testimonial-text {
          font-size: 24px;
          color: #2c3e50;
          line-height: 1.6;
          margin-bottom: 30px;
          font-style: italic;
          font-family: Georgia, serif;
        }

        .testimonial-author {
          font-size: 18px;
          color: #8b7355;
          font-family: Georgia, serif;
        }

        .testimonial-result {
          display: inline-block;
          margin-top: 25px;
          padding: 15px 30px;
          background: #f0fdf4;
          border-radius: 5px;
          color: #16a34a;
          font-weight: bold;
        }

        /* Gallery Preview */
        .gallery-preview {
          padding: 100px 0;
          background: #fff;
        }

        .gallery-preview h2 {
          font-size: 36px;
          text-align: center;
          color: #2c3e50;
          margin-bottom: 60px;
          font-weight: normal;
          font-family: Georgia, serif;
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
          aspect-ratio: 1;
          background: #f3f4f6;
          cursor: pointer;
          transition: transform 0.3s;
          display: flex;
          align-items: center;
          justify-content: center;
          color: #888;
          text-align: center;
          font-size: 0.9em;
        }

        .gallery-item:hover {
          transform: scale(1.05);
          box-shadow: 0 10px 30px rgba(0,0,0,0.15);
        }

        /* CTA Section */
        .cta-section {
          padding: 100px 0;
          background: linear-gradient(135deg, #8b7355, #6b5a45);
          color: #fff;
          text-align: center;
        }

        .cta-content h2 {
          font-size: 42px;
          margin-bottom: 20px;
          font-weight: normal;
          font-family: Georgia, serif;
        }

        .cta-content p {
          font-size: 20px;
          margin-bottom: 40px;
          opacity: 0.95;
          line-height: 1.6;
        }

        .cta-button {
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
          cursor: pointer;
        }

        .cta-button:hover {
          transform: translateY(-2px);
          box-shadow: 0 10px 30px rgba(0,0,0,0.2);
        }

        /* Mobile Responsive */
        @media (max-width: 768px) {
          .hero-content {
            grid-template-columns: 1fr;
            gap: 40px;
          }

          .hero-text h1 {
            font-size: 36px;
          }

          .benefits-grid {
            grid-template-columns: 1fr;
          }

          .process-steps {
            grid-template-columns: 1fr;
            gap: 50px;
          }

          .gallery-grid {
            grid-template-columns: repeat(2, 1fr);
          }

          .testimonial-box {
            padding: 40px 30px;
          }

          .testimonial-text {
            font-size: 20px;
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
              <div className="hero-text">
                <h1>Your Sunday roast deserves to be fully booked</h1>
                <p>One morning with your camera-shy pub. Images that fill tables every weekend.</p>

                <div className="promise-box">
                  <h2>What I promise:</h2>
                  <ul>
                    <li>Arrive when it suits you - early morning or quiet Tuesday</li>
                    <li>No disruption to service, no stressed staff</li>
                    <li>Images ready within 48 hours</li>
                    <li>Photos that actually work on your website and socials</li>
                  </ul>
                </div>
              </div>

              <div className="hero-image">
                <img
                  src="/images/gastropub.jpg"
                  alt="Inviting gastropub Sunday roast with Yorkshire pudding and all the trimmings"
                  style={{width: '100%', height: '100%', objectFit: 'cover', cursor: 'pointer', transition: 'transform 0.3s ease'}}
                  onClick={() => openModal('/images/gastropub.jpg', 'Inviting gastropub Sunday roast with Yorkshire pudding and all the trimmings')}
                  onMouseEnter={(e) => (e.target as HTMLElement).style.transform = 'scale(1.02)'}
                  onMouseLeave={(e) => (e.target as HTMLElement).style.transform = 'scale(1)'}
                  onError={(e) => {
                    e.currentTarget.style.display = 'none';
                    e.currentTarget.parentElement!.innerHTML = 'Inviting gastropub Sunday roast with Yorkshire pudding and all the trimmings';
                  }}
                />
              </div>
            </div>
          </div>
        </section>

        {/* Introduction */}
        <section className="introduction">
          <div className="container">
            <div className="intro-content">
              <h2>I understand gastropubs</h2>
              <p>I'm Rob, and I've spent the last decade working with independent pubs across the UK – from tiny village locals to destination gastropubs. I know you're not just serving food. You're the heart of the community, the Sunday tradition, the place where celebrations happen.</p>
              <p>You've built something special. My job is to help people feel it before they walk through your door. No gimmicks, no overselling – just honest images that show why locals love you and visitors seek you out.</p>
              <p>Because when someone's scrolling through options for Sunday lunch, you want them to stop at your roast and think: "That's the one."</p>
            </div>
          </div>
        </section>

        {/* Benefits */}
        <section className="benefits">
          <div className="container">
            <h2>What happens when your photos work harder</h2>
            <div className="benefits-grid">
              <div className="benefit-card">
                <h3>Sunday bookings fill up</h3>
                <p>When people can almost taste the gravy and feel the warmth of your fires, those Sunday slots book themselves. Week after week.</p>
              </div>
              <div className="benefit-card">
                <h3>Midweek tables get busier</h3>
                <p>Show them it's not just about Sunday. Your Tuesday pie night and Thursday steak deal suddenly look irresistible.</p>
              </div>
              <div className="benefit-card">
                <h3>Reviews improve naturally</h3>
                <p>When expectations match reality, guests arrive excited and leave happy. Better reviews follow without asking.</p>
              </div>
              <div className="benefit-card">
                <h3>Social media runs itself</h3>
                <p>A library of genuine images means no more phone snaps of half-eaten plates. Post confidently, consistently.</p>
              </div>
              <div className="benefit-card">
                <h3>Premium pricing feels right</h3>
                <p>Quality shows in photos. When your £16 pie looks worth every penny, nobody questions the price.</p>
              </div>
              <div className="benefit-card">
                <h3>Staff feel proud</h3>
                <p>When the website shows their hard work beautifully, the whole team stands a little taller. Pride is contagious.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Process */}
        <section className="process">
          <div className="container">
            <h2>How I work with gastropubs</h2>
            <p className="process-subtitle">No fuss, no disruption, just results</p>
            <div className="process-steps">
              <div className="step">
                <div className="step-number">1</div>
                <h3>We'll have a proper chat</h3>
                <p>Tell me about your best dishes, your busiest times, what makes you different. This isn't a sales call – it's planning that works.</p>
              </div>
              <div className="step">
                <div className="step-number">2</div>
                <h3>I arrive when it suits you</h3>
                <p>Early morning before prep? Quiet Tuesday afternoon? You choose. I work around your schedule, not the other way round.</p>
              </div>
              <div className="step">
                <div className="step-number">3</div>
                <h3>The magic happens quietly</h3>
                <p>No big lights, no drama. I capture real moments – steam rising from plates, afternoon light through windows, your team at work.</p>
              </div>
              <div className="step">
                <div className="step-number">4</div>
                <h3>Images that actually work</h3>
                <p>Within 48 hours, you'll have photos sized for everything – website heroes, Instagram posts, TripAdvisor galleries. Ready to use immediately.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonial */}
        <section className="testimonial">
          <div className="container">
            <div className="testimonial-box">
              <p className="testimonial-text">"Rob didn't just photograph our pub – he captured its soul. The Sunday roast photos alone have transformed our bookings. We're now fully booked every Sunday, three weeks in advance. The investment paid for itself in the first month."</p>
              <p className="testimonial-author">— Sarah & Tom Mitchell, The Crown & Anchor, Chipping Norton</p>
              <div className="testimonial-result">Sunday bookings up 85% • Now booking 3 weeks ahead</div>
            </div>
          </div>
        </section>

        {/* Gallery Preview */}
        <section className="gallery-preview">
          <div className="container">
            <h2>Gastropub photography that fills tables</h2>
            <div className="gallery-grid">
              <div className="gallery-item">
                <img
                  src="/images/gastropub.jpg"
                  alt="Perfect Sunday roast with Yorkshire pudding"
                  style={{width: '100%', height: '100%', objectFit: 'cover', cursor: 'pointer', transition: 'transform 0.3s ease'}}
                  onClick={() => openModal('/images/gastropub.jpg', 'Perfect Sunday roast with Yorkshire pudding')}
                  onMouseEnter={(e) => (e.target as HTMLElement).style.transform = 'scale(1.05)'}
                  onMouseLeave={(e) => (e.target as HTMLElement).style.transform = 'scale(1)'}
                  onError={(e) => {
                    e.currentTarget.style.display = 'none';
                    e.currentTarget.parentElement!.innerHTML = 'Perfect Sunday roast with Yorkshire pudding';
                  }}
                />
              </div>
              <div className="gallery-item">
                <img
                  src="/images/hero-venue.jpg"
                  alt="Cosy pub interior with roaring fire"
                  style={{width: '100%', height: '100%', objectFit: 'cover', cursor: 'pointer', transition: 'transform 0.3s ease'}}
                  onClick={() => openModal('/images/hero-venue.jpg', 'Cosy pub interior with roaring fire')}
                  onMouseEnter={(e) => (e.target as HTMLElement).style.transform = 'scale(1.05)'}
                  onMouseLeave={(e) => (e.target as HTMLElement).style.transform = 'scale(1)'}
                  onError={(e) => {
                    e.currentTarget.style.display = 'none';
                    e.currentTarget.parentElement!.innerHTML = 'Cosy pub interior with roaring fire';
                  }}
                />
              </div>
              <div className="gallery-item">
                <img
                  src="/images/restaurant.jpg"
                  alt="Craft beer and gourmet burger"
                  style={{width: '100%', height: '100%', objectFit: 'cover', cursor: 'pointer', transition: 'transform 0.3s ease'}}
                  onClick={() => openModal('/images/restaurant.jpg', 'Craft beer and gourmet burger')}
                  onMouseEnter={(e) => (e.target as HTMLElement).style.transform = 'scale(1.05)'}
                  onMouseLeave={(e) => (e.target as HTMLElement).style.transform = 'scale(1)'}
                  onError={(e) => {
                    e.currentTarget.style.display = 'none';
                    e.currentTarget.parentElement!.innerHTML = 'Craft beer and gourmet burger';
                  }}
                />
              </div>
              <div className="gallery-item">
                <img
                  src="/images/day.jpg"
                  alt="Chef plating signature dish"
                  style={{width: '100%', height: '100%', objectFit: 'cover', cursor: 'pointer', transition: 'transform 0.3s ease'}}
                  onClick={() => openModal('/images/day.jpg', 'Chef plating signature dish')}
                  onMouseEnter={(e) => (e.target as HTMLElement).style.transform = 'scale(1.05)'}
                  onMouseLeave={(e) => (e.target as HTMLElement).style.transform = 'scale(1)'}
                  onError={(e) => {
                    e.currentTarget.style.display = 'none';
                    e.currentTarget.parentElement!.innerHTML = 'Chef plating signature dish';
                  }}
                />
              </div>
              <div className="gallery-item">
                <img
                  src="/images/inn.jpg"
                  alt="Atmospheric evening exterior shot"
                  style={{width: '100%', height: '100%', objectFit: 'cover', cursor: 'pointer', transition: 'transform 0.3s ease'}}
                  onClick={() => openModal('/images/inn.jpg', 'Atmospheric evening exterior shot')}
                  onMouseEnter={(e) => (e.target as HTMLElement).style.transform = 'scale(1.05)'}
                  onMouseLeave={(e) => (e.target as HTMLElement).style.transform = 'scale(1)'}
                  onError={(e) => {
                    e.currentTarget.style.display = 'none';
                    e.currentTarget.parentElement!.innerHTML = 'Atmospheric evening exterior shot';
                  }}
                />
              </div>
              <div className="gallery-item">
                <img
                  src="/images/cafe.jpg"
                  alt="Fresh ingredients and daily specials board"
                  style={{width: '100%', height: '100%', objectFit: 'cover', cursor: 'pointer', transition: 'transform 0.3s ease'}}
                  onClick={() => openModal('/images/cafe.jpg', 'Fresh ingredients and daily specials board')}
                  onMouseEnter={(e) => (e.target as HTMLElement).style.transform = 'scale(1.05)'}
                  onMouseLeave={(e) => (e.target as HTMLElement).style.transform = 'scale(1)'}
                  onError={(e) => {
                    e.currentTarget.style.display = 'none';
                    e.currentTarget.parentElement!.innerHTML = 'Fresh ingredients and daily specials board';
                  }}
                />
              </div>
              <div className="gallery-item">
                <img
                  src="/images/hotel.jpg"
                  alt="Sticky toffee pudding with custard"
                  style={{width: '100%', height: '100%', objectFit: 'cover', cursor: 'pointer', transition: 'transform 0.3s ease'}}
                  onClick={() => openModal('/images/hotel.jpg', 'Sticky toffee pudding with custard')}
                  onMouseEnter={(e) => (e.target as HTMLElement).style.transform = 'scale(1.05)'}
                  onMouseLeave={(e) => (e.target as HTMLElement).style.transform = 'scale(1)'}
                  onError={(e) => {
                    e.currentTarget.style.display = 'none';
                    e.currentTarget.parentElement!.innerHTML = 'Sticky toffee pudding with custard';
                  }}
                />
              </div>
              <div className="gallery-item">
                <img
                  src="/images/winery.jpg"
                  alt="Busy Sunday service with happy diners"
                  style={{width: '100%', height: '100%', objectFit: 'cover', cursor: 'pointer', transition: 'transform 0.3s ease'}}
                  onClick={() => openModal('/images/winery.jpg', 'Busy Sunday service with happy diners')}
                  onMouseEnter={(e) => (e.target as HTMLElement).style.transform = 'scale(1.05)'}
                  onMouseLeave={(e) => (e.target as HTMLElement).style.transform = 'scale(1)'}
                  onError={(e) => {
                    e.currentTarget.style.display = 'none';
                    e.currentTarget.parentElement!.innerHTML = 'Busy Sunday service with happy diners';
                  }}
                />
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="cta-section">
          <div className="container">
            <div className="cta-content">
              <h2>Ready for Sundays that book themselves?</h2>
              <p>Let's talk about your pub. No pressure, no sales pitch.<br />Just an honest conversation about making your tables harder to resist.</p>
              <Link
                href="/booking"
                className="cta-button"
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
                  (e.target as HTMLElement).style.transform = 'translateY(-2px)';
                  (e.target as HTMLElement).style.boxShadow = '0 10px 30px rgba(0,0,0,0.2)';
                }}
                onMouseLeave={(e) => {
                  (e.target as HTMLElement).style.transform = 'translateY(0)';
                  (e.target as HTMLElement).style.boxShadow = 'none';
                }}
              >
                Let's Discuss Your Pub
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
                (e.target as HTMLElement).style.background = 'rgba(255, 255, 255, 0.2)';
              }}
              onMouseLeave={(e) => {
                (e.target as HTMLElement).style.background = 'transparent';
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

export default GastropubsPage