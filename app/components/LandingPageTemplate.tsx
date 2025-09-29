'use client';

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';

// Data arrays
const segments = [
  {
    image: '/images/gastropub.jpg',
    title: 'Gastropubs & Inns',
    description: 'Where locals become family and Sunday roast is sacred. From village pubs to country inns, I capture the warmth, character and promise of comfort.',
    dream: 'Your Sunday roast deserves to be fully booked',
    url: '/gastropubs'
  },
  {
    image: '/images/restaurant.jpg',
    title: 'Restaurants & Bars',
    description: 'Where every plate is a canvas and every evening is an experience. From creative kitchens to cocktail bars, I showcase artistry that stops the scroll.',
    dream: 'Plates that stop scrolling. Evenings that sell out.',
    url: '/restaurants'
  },
  {
    image: '/images/hotel.jpg',
    title: 'Boutique Hotels',
    description: 'Where luxury meets personality and every room tells its own story. I capture the promise of perfect mornings and peaceful nights.',
    dream: 'Rooms that book themselves. Stories that travel.',
    url: '/hotels'
  },
  {
    image: '/images/cafe.jpg',
    title: 'Cafés',
    description: 'Where mornings begin and communities gather. I capture the steam, the warmth, the ritual of your perfect brew.',
    dream: 'Make them smell the coffee before they arrive',
    url: '/cafes'
  },
  {
    image: '/images/winery.jpg',
    title: 'Food & Drink Producers',
    description: 'Where tradition meets innovation and every bottle has a beginning. I tell your story from vine to glass, craft to celebration.',
    dream: 'Show the soul behind the bottle',
    url: '/wineries'
  }
];

const processSteps = [
  {
    title: "We'll have a proper chat",
    description: "Tell me about your venue, your dreams, your challenges. What makes you proud? What do guests love most? What story do you want to tell? This isn't about ticking boxes – it's about understanding what makes your place special."
  },
  {
    title: "I'll arrive when it suits you",
    description: "Early morning before service? Quiet Tuesday afternoon? I work around your schedule. I'll capture your space at its best – when the light is perfect and the atmosphere is just right. Your team can carry on as normal."
  },
  {
    title: "The magic happens quietly",
    description: "No massive crew, no disruption. Just me, finding the stories in your space. The way morning light hits your tables. Steam rising from a fresh dish. The warmth of your welcome captured in every frame."
  },
  {
    title: "Images that actually work for you",
    description: "Within 48 hours, you'll have a complete gallery. Images sized for your website, Instagram, booking platforms – everywhere you need them. No complicated downloads or confusing formats. Just beautiful, usable photography."
  }
];

const testimonials = [
  {
    text: "Rob didn't just photograph our pub – he captured its soul. The warmth, the welcome, that feeling you get on a cold day when you step inside. Our Sunday bookings haven't been the same since. Completely full, every week.",
    author: "Sarah & Tom Mitchell",
    business: "The Crown & Anchor, Cotswolds"
  },
  {
    text: "Finally, someone who understands that food photography is about emotion, not just pretty plates. Rob captured the passion we put into every dish. Our evening bookings increased by 40% in the first month.",
    author: "Chef Marco Rossi",
    business: "Rossi's Kitchen, Edinburgh"
  },
  {
    text: "We're a small family vineyard competing with big brands. Rob's photography tells our story – the early mornings, the careful craft, the celebration in every bottle. Online sales up 35% and climbing.",
    author: "James & Emily Chen",
    business: "Hillside Vineyard, Sussex"
  }
];

const LandingPage = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [activeTime, setActiveTime] = useState(0);
  const timelineRef = useRef(null);
  const [modalImage, setModalImage] = useState(null);
  const [modalAlt, setModalAlt] = useState('');

  const openModal = (src, alt) => {
    setModalImage(src);
    setModalAlt(alt);
  };

  const closeModal = () => {
    setModalImage(null);
    setModalAlt('');
  };

  const handleClose = () => {
    setIsExpanded(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  useEffect(() => {
    if (isExpanded && timelineRef.current) {
      setTimeout(() => {
        const yOffset = -100;
        const element = timelineRef.current;
        const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
        window.scrollTo({ top: y, behavior: 'smooth' });
      }, 100);
    }
  }, [isExpanded]);

  const timelineEvents = [
    {
      time: "7:30am",
      title: "I arrive quietly",
      description: "Before your team, before the stress. Just me with my gear, catching that perfect morning light streaming through your windows.",
      image: "/images/day.jpg",
      detail: "No disruption to prep, no crew to manage"
    },
    {
      time: "8:00am",
      title: "The details emerge",
      description: "Those little things that make your place special. The way you fold napkins. The patina on the bar. The view from table seven.",
      image: "/images/day.jpg",
      detail: "Working around your routine, never in the way"
    },
    {
      time: "9:00am",
      title: "Your signature dishes",
      description: "Plated by your chef, styled by their passion. I capture the steam, the colours, the care that goes into every element.",
      image: "/images/day.jpg",
      detail: "Using natural light whenever possible"
    },
    {
      time: "10:30am",
      title: "The human moments",
      description: "Your team at work, natural and relaxed. Maybe the chef's hands finishing a dish. The warmth of genuine hospitality.",
      image: "/images/day.jpg",
      detail: "Real moments, not staged poses"
    },
    {
      time: "11:30am",
      title: "I'm already gone",
      description: "Four hours, hundreds of shots, zero stress. You carry on with service while I head back to start the magic.",
      image: "/images/day.jpg",
      detail: "No lengthy goodbyes, just results coming soon"
    },
    {
      time: "Next Day",
      title: "First previews arrive",
      description: "A handful of edited highlights in your inbox. Something to share immediately while I perfect the full gallery.",
      image: "/images/day.jpg",
      detail: "Quick wins for your social media"
    },
    {
      time: "48 Hours",
      title: "Your complete gallery",
      description: "Every image edited, organised, and sized for different uses. Website heroes, Instagram squares, story formats - it's all there.",
      image: "/images/day.jpg",
      detail: "Typically 40-60 final images, all yours to keep"
    }
  ];

  return (
    <div className="landing-page">
      <style jsx global>{`

        .landing-page {
          min-height: 100vh;
        }


        /* Hero Section */
        .hero {
          margin-top: 0;
          padding: 100px 20px 80px;
          background: linear-gradient(180deg, #fafaf8 0%, #fff 100%);
          position: relative;
          overflow: hidden;
        }

        .hero-content {
          max-width: 1200px;
          margin: 0 auto;
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 80px;
          align-items: center;
        }

        .hero-text h1 {
          font-size: 52px;
          font-weight: 400;
          color: #2c3e50;
          margin-bottom: 25px;
          line-height: 1.15;
          letter-spacing: -1px;
        }

        .hero-text .subheadline {
          font-size: 20px;
          color: #6b7280;
          margin-bottom: 35px;
          font-weight: 300;
          line-height: 1.6;
          font-style: italic;
        }

        .hero-promise {
          background: #f9fafb;
          padding: 25px;
          border-left: 3px solid #8b7355;
          margin-bottom: 35px;
          border-radius: 25px;
        }

        .hero-promise p {
          font-size: 17px;
          color: #4b5563;
          line-height: 1.7;
          margin-bottom: 15px;
        }

        .hero-promise p:last-child {
          margin-bottom: 0;
          font-weight: 500;
          color: #2c3e50;
        }

        .cta-primary {
          display: inline-block;
          background: #8b7355;
          color: white;
          padding: 16px 36px;
          font-size: 16px;
          text-decoration: none;
          border-radius: 25px;
          transition: all 0.3s ease;
          font-family: -apple-system, sans-serif;
          letter-spacing: 0.5px;
          cursor: pointer;
          border: none;
        }

        .cta-primary:hover {
          background: #73614a;
          transform: translateY(-2px);
          box-shadow: 0 10px 25px rgba(139, 115, 85, 0.2);
        }

        .cta-text {
          display: block;
          color: #6b7280;
          font-size: 14px;
          margin-top: 18px;
          font-style: italic;
        }

        .dropdown-header {
          width: 100%;
          background: #8b7355;
          color: white;
          padding: 20px;
          display: flex;
          justify-content: center;
          align-items: center;
          cursor: pointer;
          font-size: 16px;
          font-family: -apple-system, sans-serif;
          letter-spacing: 0.5px;
          transition: all 0.3s ease;
          position: relative;
        }

        .dropdown-header:hover {
          background: #73614a;
        }

        .dropdown-header span:first-child {
          margin-right: auto;
          margin-left: auto;
        }

        .chevron {
          position: absolute;
          right: 20px;
          transition: transform 0.3s ease;
          font-size: 14px;
        }

        .chevron.expanded {
          transform: rotate(90deg);
        }

        .hero-image {
          position: relative;
        }

        .before-after {
          border-radius: 5px;
          overflow: hidden;
          box-shadow: 0 25px 50px rgba(0,0,0,0.1);
        }

        .before-after img {
          width: 100%;
          display: block;
        }

        /* Introduction Section */
        .introduction {
          padding: 100px 20px;
          background: white;
        }

        .intro-content {
          max-width: 800px;
          margin: 0 auto;
          text-align: center;
        }

        .intro-content h2 {
          font-size: 36px;
          font-weight: 400;
          color: #2c3e50;
          margin-bottom: 30px;
          line-height: 1.3;
        }

        .intro-content p {
          font-size: 18px;
          color: #6b7280;
          line-height: 1.8;
          margin-bottom: 25px;
        }

        .signature {
          font-style: italic;
          color: #8b7355;
          font-size: 20px;
          margin-top: 35px;
        }

        /* What I Capture Section */
        .segments {
          padding: 80px 20px;
          background: #fafaf8;
        }

        .container {
          max-width: 1200px;
          margin: 0 auto;
        }

        h2 {
          font-size: 38px;
          text-align: center;
          margin-bottom: 20px;
          color: #2c3e50;
          font-weight: 400;
        }

        .section-subtitle {
          text-align: center;
          font-size: 18px;
          color: #6b7280;
          max-width: 700px;
          margin: 0 auto 60px;
          line-height: 1.7;
          font-style: italic;
        }

        .segment-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 35px;
          max-width: 800px;
          margin: 0 auto;
        }

        .segment-grid .segment-card:last-child {
          grid-column: 1 / -1;
          max-width: 400px;
          margin: 0 auto;
        }

        .segment-card {
          background: white;
          border-radius: 5px;
          overflow: hidden;
          transition: all 0.3s ease;
          box-shadow: 0 2px 10px rgba(0,0,0,0.05);
          cursor: pointer;
        }

        .segment-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 15px 35px rgba(0,0,0,0.1);
        }

        .segment-image {
          height: 220px;
          overflow: hidden;
          display: flex;
          align-items: center;
          justify-content: center;
          background: #f3f4f6;
          position: relative;
        }

        .segment-image img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: center;
          transition: transform 0.3s ease;
          display: block;
        }

        .segment-card:hover .segment-image img {
          transform: scale(1.05);
        }

        .segment-content {
          padding: 30px;
        }

        .segment-title {
          font-size: 24px;
          font-weight: 400;
          margin-bottom: 12px;
          color: #2c3e50;
        }

        .segment-description {
          color: #6b7280;
          margin-bottom: 18px;
          line-height: 1.7;
          font-size: 16px;
        }

        .segment-dream {
          color: #8b7355;
          font-style: italic;
          font-size: 15px;
        }

        /* Process Section */
        .process {
          padding: 100px 20px;
          background: white;
        }

        .process-content {
          max-width: 900px;
          margin: 0 auto;
        }

        .process-steps {
          margin-top: 60px;
        }

        .step {
          display: flex;
          align-items: flex-start;
          margin-bottom: 45px;
          gap: 30px;
        }

        .step-number {
          flex-shrink: 0;
          width: 50px;
          height: 50px;
          background: transparent;
          color: #8b7355;
          border: 2px solid #8b7355;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 20px;
          font-weight: 400;
        }

        .step-content h3 {
          font-size: 22px;
          margin-bottom: 12px;
          color: #2c3e50;
          font-weight: 400;
        }

        .step-content p {
          color: #6b7280;
          line-height: 1.7;
          font-size: 16px;
        }

        /* Testimonials */
        .testimonials {
          padding: 100px 20px;
          background: #fafaf8;
        }

        .testimonial-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
          gap: 40px;
          margin-top: 60px;
        }

        .testimonial {
          background: white;
          padding: 35px;
          border-radius: 5px;
          position: relative;
        }

        .testimonial-text {
          font-size: 17px;
          color: #4b5563;
          margin-bottom: 25px;
          font-style: italic;
          line-height: 1.8;
        }

        .testimonial-author {
          font-weight: 500;
          color: #2c3e50;
          font-style: normal;
        }

        .testimonial-business {
          color: #8b7355;
          font-size: 14px;
          margin-top: 5px;
        }

        /* Final CTA */
        .final-cta {
          padding: 120px 20px;
          background: #2c3e50;
          text-align: center;
          color: white;
        }

        .final-cta h2 {
          color: white;
          margin-bottom: 25px;
          font-size: 42px;
        }

        .final-cta p {
          font-size: 18px;
          margin-bottom: 40px;
          opacity: 0.9;
          line-height: 1.7;
          max-width: 600px;
          margin-left: auto;
          margin-right: auto;
        }

        .cta-white {
          display: inline-block;
          background: white;
          color: #2c3e50;
          padding: 16px 36px;
          font-size: 16px;
          text-decoration: none;
          border-radius: 25px;
          transition: all 0.3s ease;
          font-family: -apple-system, sans-serif;
          cursor: pointer;
          border: none;
        }

        .cta-white:hover {
          transform: translateY(-2px);
          box-shadow: 0 10px 25px rgba(255,255,255,0.2);
        }

        /* Timeline Expansion */
        .timeline-wrapper {
          overflow: hidden;
          transition: all 0.6s cubic-bezier(0.4, 0, 0.2, 1);
          max-height: ${isExpanded ? '4000px' : '0'};
          opacity: ${isExpanded ? '1' : '0'};
        }

        .timeline-section {
          padding: 60px 20px;
          background: linear-gradient(180deg, #fafaf8 0%, white 50%, #fafaf8 100%);
          margin-top: 20px;
        }

        .timeline-header {
          text-align: center;
          max-width: 700px;
          margin: 0 auto 60px;
        }

        .timeline-header h3 {
          font-size: 32px;
          color: #2c3e50;
          margin-bottom: 15px;
          font-weight: 400;
          font-family: Georgia, serif;
        }

        .timeline-header p {
          font-size: 18px;
          color: #6b7280;
          font-style: italic;
          line-height: 1.6;
        }

        .timeline-track {
          max-width: 1000px;
          margin: 0 auto;
          position: relative;
        }

        .timeline-line {
          position: absolute;
          left: 50%;
          top: 0;
          bottom: 0;
          width: 2px;
          background: #e5e7eb;
          transform: translateX(-50%);
        }

        .timeline-progress {
          position: absolute;
          left: 50%;
          top: 0;
          width: 2px;
          background: #8b7355;
          transform: translateX(-50%);
          height: ${(activeTime / 6) * 100}%;
          transition: height 0.3s ease;
        }

        .timeline-event {
          display: flex;
          align-items: center;
          margin-bottom: 100px;
          position: relative;
          cursor: pointer;
          transition: all 0.3s ease;
          min-height: 120px;
        }

        .timeline-event:nth-child(even) {
          flex-direction: row-reverse;
        }

        .timeline-event:hover {
          transform: scale(1.02);
        }

        .timeline-content {
          flex: 1;
          padding: 0 60px;
          max-width: 45%;
        }

        .timeline-event:nth-child(even) .timeline-content {
          text-align: right;
        }

        .timeline-time {
          color: #8b7355;
          font-size: 14px;
          font-weight: 500;
          text-transform: uppercase;
          letter-spacing: 1px;
          margin-bottom: 10px;
        }

        .timeline-title {
          font-size: 24px;
          color: #2c3e50;
          margin-bottom: 12px;
          font-weight: 400;
        }

        .timeline-description {
          color: #6b7280;
          line-height: 1.7;
          margin-bottom: 10px;
        }

        .timeline-detail {
          font-size: 14px;
          color: #8b7355;
          font-style: italic;
        }

        .timeline-dot {
          width: 16px;
          height: 16px;
          background: white;
          border: 3px solid #e5e7eb;
          border-radius: 50%;
          position: absolute;
          left: 50%;
          top: 50%;
          transform: translate(-50%, -50%);
          transition: all 0.3s ease;
          z-index: 20;
        }

        .timeline-event.active .timeline-dot {
          background: #8b7355;
          border-color: #8b7355;
          transform: translate(-50%, -50%) scale(1.2);
        }

        .timeline-image {
          flex: 1;
          max-width: 400px;
          opacity: 0.3;
          transition: opacity 0.3s ease;
          border-radius: 5px;
          overflow: hidden;
        }

        .timeline-event.active .timeline-image {
          opacity: 1;
        }

        .timeline-image img {
          width: 100%;
          height: 250px;
          object-fit: cover;
          display: block;
        }

        .timeline-cta {
          text-align: center;
          margin-top: 60px;
          padding: 40px;
          background: #f9fafb;
          border-radius: 5px;
        }

        .timeline-cta h4 {
          font-size: 28px;
          color: #2c3e50;
          margin-bottom: 15px;
          font-weight: 400;
        }

        .timeline-cta p {
          color: #6b7280;
          margin-bottom: 25px;
          font-size: 17px;
        }

        .book-button {
          display: inline-block;
          background: #8b7355;
          color: white;
          padding: 16px 40px;
          font-size: 16px;
          border: none;
          border-radius: 25px;
          cursor: pointer;
          transition: all 0.3s ease;
          font-family: -apple-system, sans-serif;
          text-decoration: none;
        }

        .book-button:hover {
          background: #73614a;
          transform: translateY(-2px);
          box-shadow: 0 10px 25px rgba(139, 115, 85, 0.2);
        }

        .timeline-close-section {
          text-align: center;
          margin-top: 40px;
          padding: 30px;
        }

        .close-timeline-button {
          background: transparent;
          color: #6b7280;
          padding: 14px 32px;
          font-size: 15px;
          border: 2px solid #d1d5db;
          border-radius: 30px;
          cursor: pointer;
          transition: all 0.3s ease;
          font-family: -apple-system, sans-serif;
        }

        .close-timeline-button:hover {
          border-color: #8b7355;
          color: #8b7355;
          transform: translateY(-2px);
        }

        .close-hint {
          display: block;
          margin-top: 15px;
          color: #9ca3af;
          font-size: 14px;
          font-style: italic;
        }

        .floating-close {
          position: fixed;
          top: 50%;
          right: 30px;
          transform: translateY(-50%);
          background: #8b7355;
          width: 40px;
          height: 40px;
          border-radius: 50%;
          border: none;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          transition: all 0.3s ease;
          z-index: 100;
          box-shadow: 0 10px 25px rgba(139, 115, 85, 0.2);
        }

        .floating-close:hover {
          background: #73614a;
          transform: translateY(-50%) scale(1.1);
          box-shadow: 0 15px 35px rgba(139, 115, 85, 0.3);
        }

        .floating-close span {
          color: white;
          font-size: 20px;
          font-weight: 300;
        }

        @media (max-width: 768px) {
          .hero-content {
            grid-template-columns: 1fr;
          }

          .hero-text h1 {
            font-size: 36px;
          }

          .segment-grid {
            grid-template-columns: 1fr;
            max-width: 100%;
          }

          .segment-grid .segment-card:last-child {
            grid-column: 1;
            max-width: 100%;
          }

          .testimonial-grid {
            grid-template-columns: 1fr;
          }

          .timeline-line,
          .timeline-progress {
            left: 30px;
          }

          .timeline-event,
          .timeline-event:nth-child(even) {
            flex-direction: column;
            text-align: left;
          }

          .timeline-event:nth-child(even) .timeline-content {
            text-align: left;
          }

          .timeline-dot {
            left: 30px;
          }

          .timeline-content {
            padding-left: 60px;
            padding-right: 20px;
          }

          .timeline-image {
            max-width: 100%;
            margin-top: 20px;
          }

          .timeline-wrapper {
            max-height: ${isExpanded ? '4500px' : '0'};
          }

          .floating-close {
            right: 15px;
            width: 35px;
            height: 35px;
          }
        }
      `}</style>

      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <div className="hero-text">
            <h1>Your venue has a story.<br />I help people feel it.</h1>
            <p className="subheadline">Before they even walk through your door.</p>

            <div className="hero-promise">
              <p>You know that moment when a guest walks in and their face lights up? When they immediately pull out their phone to capture your beautiful space?</p>
              <p>That's the feeling I capture. The warmth of your welcome, the care in your cooking, the soul of your space.</p>
              <p><strong>Photos that don't just show your venue – they make people long to be there.</strong></p>
            </div>

            <Link href="/claim-session" className="cta-primary">Claim Your Session</Link>
            <span className="cta-text">Currently booking for February & March</span>
          </div>
          <div className="hero-image">
            <div className="before-after">
              <img
                src="/images/hero-venue.jpg"
                alt="Cosy pub interior with fireplace"
                style={{ cursor: 'pointer', transition: 'transform 0.3s ease' }}
                onClick={() => openModal('/images/hero-venue.jpg', 'Cosy pub interior with fireplace')}
                onMouseEnter={(e) => e.target.style.transform = 'scale(1.02)'}
                onMouseLeave={(e) => e.target.style.transform = 'scale(1)'}
              />
            </div>
          </div>
        </div>
      </section>

      {/* See How I Work Dropdown Header */}
      <div className="dropdown-header" onClick={() => setIsExpanded(!isExpanded)}>
        <span>See What A Session Looks Like</span>
        <span className={`chevron ${isExpanded ? 'expanded' : ''}`}>►</span>
      </div>

      {/* Floating close button - only visible when timeline is expanded */}
      <div
        className="floating-close"
        onClick={handleClose}
        title="Close timeline"
        style={{
          opacity: isExpanded ? '1' : '0',
          pointerEvents: isExpanded ? 'auto' : 'none'
        }}
      >
        <span>×</span>
      </div>

      {/* Expanding Timeline Section */}
      <div className="timeline-wrapper" ref={timelineRef}>
        <div className="timeline-section">
          <div className="timeline-header">
            <h3>A Day with Rob</h3>
            <p>From arrival to gallery delivery – here's exactly how our collaboration unfolds</p>
          </div>

          <div className="timeline-track">
            <div className="timeline-line"></div>
            <div className="timeline-progress"></div>

            {timelineEvents.map((event, index) => (
              <div
                key={index}
                className={`timeline-event ${index <= activeTime ? 'active' : ''}`}
                onClick={() => setActiveTime(index)}
                onMouseEnter={() => setActiveTime(index)}
              >
                <div className="timeline-content">
                  <div className="timeline-time">{event.time}</div>
                  <h4 className="timeline-title">{event.title}</h4>
                  <p className="timeline-description">{event.description}</p>
                  <p className="timeline-detail">{event.detail}</p>
                </div>
                <div className="timeline-dot"></div>
                <div className="timeline-image">
                  <img
                    src={event.image}
                    alt={event.title}
                    style={{ cursor: 'pointer' }}
                    onClick={() => openModal(event.image, event.title)}
                    onError={(e) => {
                      e.currentTarget.style.display = 'none';
                      e.currentTarget.parentElement.style.background = '#f3f4f6';
                      e.currentTarget.parentElement.style.display = 'flex';
                      e.currentTarget.parentElement.style.alignItems = 'center';
                      e.currentTarget.parentElement.style.justifyContent = 'center';
                      e.currentTarget.parentElement.style.height = '250px';
                      e.currentTarget.parentElement.innerHTML = '<span style="color: #9ca3af; font-size: 14px;">Image coming soon</span>';
                    }}
                  />
                </div>
              </div>
            ))}
          </div>

          <div className="timeline-cta">
            <h4>Like what you see?</h4>
            <p>Let's create this story for your venue. No disruption, just beautiful results.</p>
            <Link href="/claim-session" className="book-button">Claim Your Session</Link>
          </div>

          {/* Close button at bottom */}
          <div className="timeline-close-section">
            <button
              className="close-timeline-button"
              onClick={handleClose}
            >
              Close Timeline
            </button>
            <span className="close-hint">or keep scrolling to explore more</span>
          </div>
        </div>
      </div>

      {/* Introduction */}
      <section className="introduction">
        <div className="intro-content">
          <h2>Every plate tells a story.<br />Every room holds a promise.</h2>
          <p>I'm Rob, and I've spent the last decade working with independent venues across the UK – from tiny village pubs to boutique hotels, family vineyards to neighbourhood cafés.</p>
          <p>What I've learned is simple: people don't just book a table or a room. They're booking an experience, a feeling, a memory waiting to happen.</p>
          <p>My job? To capture that magic and share it with the world. To show the steam rising from a perfect Sunday roast, the afternoon light dancing through your windows, the careful details that make your venue unlike any other.</p>
          <div className="signature">Let's show them why they belong at your place.</div>
        </div>
      </section>

      {/* Segments */}
      <section className="segments">
        <div className="container">
          <h2>I Understand Your World</h2>
          <p className="section-subtitle">Every venue type has its own rhythm, its own magic. I know how to find and capture yours.</p>

          <div className="segment-grid">
            {segments.map((segment, index) => (
              <Link key={index} href={segment.url} className="segment-card">
                <div className="segment-image">
                  <img
                    src={segment.image}
                    alt={segment.title}
                    onError={(e) => {
                      e.currentTarget.style.display = 'none';
                      e.currentTarget.parentElement!.innerHTML = `<div style="display: flex; align-items: center; justify-content: center; height: 100%; color: #9ca3af; font-size: 14px; text-align: center; padding: 20px;">Image not found:<br/>${segment.image}</div>`;
                    }}
                  />
                </div>
                <div className="segment-content">
                  <h3 className="segment-title">{segment.title}</h3>
                  <p className="segment-description">{segment.description}</p>
                  <p className="segment-dream">"{segment.dream}"</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="process">
        <div className="process-content">
          <h2>How We'll Work Together</h2>
          <p className="section-subtitle">No disruption, no stress. Just a relaxed morning creating images that work as hard as you do.</p>

          <div className="process-steps">
            {processSteps.map((step, index) => (
              <div key={index} className="step">
                <div className="step-number">{index + 1}</div>
                <div className="step-content">
                  <h3>{step.title}</h3>
                  <p>{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA after segments */}
        <div className="container" style={{textAlign: 'center', paddingTop: '40px'}}>
          <Link href="/claim-session" className="cta-primary">Claim Your Session</Link>
        </div>
      </section>

      {/* Testimonials */}
      <section className="testimonials">
        <div className="container">
          <h2>Stories From The Field</h2>
          <p className="section-subtitle">Real venues, real results, real relationships</p>

          <div className="testimonial-grid">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="testimonial">
                <p className="testimonial-text">"{testimonial.text}"</p>
                <div className="testimonial-author">{testimonial.author}</div>
                <div className="testimonial-business">{testimonial.business}</div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA after testimonials */}
        <div className="container" style={{textAlign: 'center', paddingTop: '40px'}}>
          <Link href="/claim-session" className="cta-primary">Claim Your Session</Link>
        </div>
      </section>

      {/* Final CTA */}
      <section className="final-cta" id="connect">
        <div className="container">
          <h2>Ready to show the world<br />what makes your venue special?</h2>
          <p>I only take on a handful of venues each month, ensuring each one gets the attention it deserves. If you're ready to invest in photography that actually works for your business, let's talk.</p>

          <button className="cta-white">Start a Conversation</button>

          <div style={{ marginTop: '30px', fontSize: '16px', opacity: 0.8 }}>
            <p>Prefer to chat? Call or WhatsApp: 07XXX XXX XXX</p>
            <p style={{ marginTop: '10px' }}>Or simply reply "PUB", "HOTEL", or "RESTAURANT" for instant info</p>
          </div>
        </div>
      </section>

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
    </div>
  );
};

export default LandingPage;