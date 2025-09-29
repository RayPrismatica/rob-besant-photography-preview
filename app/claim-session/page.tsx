'use client';

import React, { useEffect } from 'react';
// Using simple icons instead of lucide-react for now

const BookYourShootPage = () => {
  useEffect(() => {
    // Load Cal.com embed script
    const script = document.createElement('script');
    script.innerHTML = `
      (function (C, A, L) {
        let p = function (a, ar) { a.q.push(ar); };
        let d = C.document;
        C.Cal = C.Cal || function () {
          let cal = C.Cal;
          let ar = arguments;
          if (!cal.loaded) {
            cal.ns = {};
            cal.q = cal.q || [];
            d.head.appendChild(d.createElement("script")).src = A;
            cal.loaded = true;
          }
          if (ar[0] === L) {
            const api = function () { p(api, arguments); };
            const namespace = ar[1];
            api.q = api.q || [];
            if(typeof namespace === "string"){
              cal.ns[namespace] = cal.ns[namespace] || api;
              p(cal.ns[namespace], ar);
              p(cal, ["initNamespace", namespace]);
            } else p(cal, ar);
            return;
          }
          p(cal, ar);
        };
      })(window, "https://app.cal.com/embed/embed.js", "init");

      Cal("init", "shoot-day", {origin:"https://app.cal.com"});
      Cal.ns["shoot-day"]("inline", {
        elementOrSelector:"#my-cal-inline-shoot-day",
        config: {"layout":"month_view","theme":"light"},
        calLink: "raytarantino-jxkijd/shoot-day",
      });
      Cal.ns["shoot-day"]("ui", {
        "theme":"light",
        "cssVarsPerTheme":{"light":{"cal-brand":"#8b7355"}},
        "hideEventTypeDetails":false,
        "layout":"month_view"
      });
    `;
    document.body.appendChild(script);

    return () => {
      // Cleanup
      if (script.parentNode) {
        script.parentNode.removeChild(script);
      }
    };
  }, []);

  return (
    <div className="container">
      {/* Hero Section */}
      <section className="hero">
        <h1>Let's Find Your Perfect Day</h1>
        <p className="subtitle">
          Nothing's written in stone – let's just find the date that works with your venue. Then we'll chat, and if we're a good fit, we'll confirm it.
        </p>
      </section>

      {/* Value Props Bar */}
      <div className="value-props">
        <div className="prop">
          <span style={{color: '#8b7355', fontSize: '20px'}}>●</span>
          <span>Weekends -30%</span>
        </div>
        <div className="prop">
          <span style={{color: '#8b7355', fontSize: '20px'}}>●</span>
          <span>Work around your service</span>
        </div>
        <div className="prop">
          <span style={{color: '#8b7355', fontSize: '20px'}}>●</span>
          <span>No disruption</span>
        </div>
      </div>

      {/* Main Content Grid */}
      <div className="content-grid">
        {/* Left Column - Key Info */}
        <div className="info-column">
          <div className="info-card">
            <h3>How this works</h3>
            <ol className="steps-list">
              <li>Pick a date that actually suits you</li>
              <li>Tell me about your venue</li>
              <li>I'll call within 48 hours</li>
              <li>We confirm if we're a good fit</li>
              <li>Only then is it locked in</li>
            </ol>
            <p className="note">
              No commitment yet – about 70% of pencilled dates turn into shoots, but there's no pressure.
            </p>
          </div>

          <div className="info-card pricing-card">
            <h3>Hospitality-friendly pricing</h3>
            <div className="price-row weekend">
              <div>
                <strong>Weekends</strong>
                <span>You're busy, I'm free</span>
              </div>
              <span className="discount">-30%</span>
            </div>
            <div className="price-row">
              <div>
                <strong>Monday-Tuesday</strong>
                <span>Perfect for most venues</span>
              </div>
              <span className="standard">Best days</span>
            </div>
            <div className="price-row">
              <div>
                <strong>Wednesday-Friday</strong>
                <span>Good for both of us</span>
              </div>
              <span className="standard">Standard</span>
            </div>
          </div>

          <div className="testimonial">
            <p>"Rob didn't just photograph our pub – he captured its soul. And he worked around our Sunday service without anyone noticing!"</p>
            <cite>– Sarah, The Crown & Anchor</cite>
          </div>
        </div>

        {/* Right Column - Calendar */}
        <div className="calendar-column">
          <div className="calendar-wrapper">
            <div id="my-cal-inline-shoot-day" style={{width: '100%', height: '600px', overflow: 'auto'}}>
              {/* Cal.com calendar loads here */}
            </div>
          </div>

          <div className="calendar-note">
            <span style={{color: '#8b7355', fontSize: '16px'}}>●</span>
            <p>Other venues are viewing this calendar now – popular dates book quickly</p>
          </div>
        </div>
      </div>

      {/* Trust Section */}
      <section className="trust-section">
        <div className="trust-header">
          <h2>Why venues love this approach</h2>
          <p className="trust-subtitle">Real talk from real venue owners</p>
        </div>
        <div className="trust-grid">
          <div className="trust-card pressure">
            <div className="trust-icon">●</div>
            <h4>No sales pressure</h4>
            <p>Pick a date first, discuss details later. If we're not a fit, no worries at all.</p>
          </div>
          <div className="trust-card hospitality">
            <div className="trust-icon">●</div>
            <h4>I get hospitality</h4>
            <p>I know weekends are chaos. I work around your service, never through it.</p>
          </div>
          <div className="trust-card transparent">
            <div className="trust-icon">●</div>
            <h4>Transparent process</h4>
            <p>Clear pricing, honest chat, no hidden surprises. Just brilliant photos.</p>
          </div>
        </div>
      </section>

      <style jsx>{`
        .container {
          max-width: 1400px;
          margin: 0 auto;
          padding: 40px 20px;
          font-family: Georgia, serif;
          color: #3a3a3a;
          background: #fafaf8;
          min-height: 100vh;
        }

        .hero {
          text-align: center;
          margin-bottom: 40px;
        }

        .hero h1 {
          font-size: 48px;
          color: #2c3e50;
          margin-bottom: 15px;
          font-weight: normal;
          line-height: 1.2;
        }

        .subtitle {
          font-size: 22px;
          color: #6b7280;
          line-height: 1.6;
          max-width: 700px;
          margin: 0 auto;
        }

        .value-props {
          display: flex;
          justify-content: center;
          gap: 40px;
          padding: 25px;
          background: white;
          border-radius: 8px;
          margin-bottom: 40px;
          box-shadow: 0 2px 10px rgba(0,0,0,0.05);
        }

        .prop {
          display: flex;
          align-items: center;
          gap: 10px;
          color: #2c3e50;
          font-family: -apple-system, sans-serif;
          font-size: 15px;
        }

        .prop svg {
          color: #8b7355;
        }

        .content-grid {
          display: grid;
          grid-template-columns: 380px 1fr;
          gap: 40px;
          margin-bottom: 60px;
        }

        .info-column {
          display: flex;
          flex-direction: column;
          gap: 25px;
        }

        .info-card {
          background: white;
          padding: 25px;
          border-radius: 8px;
          box-shadow: 0 2px 10px rgba(0,0,0,0.05);
        }

        .info-card h3 {
          font-size: 22px;
          color: #2c3e50;
          margin-bottom: 20px;
          font-weight: normal;
        }

        .steps-list {
          margin: 0;
          padding-left: 20px;
          line-height: 1.8;
          color: #3a3a3a;
        }

        .steps-list li {
          margin-bottom: 10px;
        }

        .note {
          margin-top: 20px;
          padding: 15px;
          background: #fef3c7;
          border-radius: 5px;
          font-size: 14px;
          line-height: 1.6;
          color: #92400e;
        }

        .pricing-card {
          background: linear-gradient(to bottom, #fff, #fafaf8);
        }

        .price-row {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 15px 0;
          border-bottom: 1px solid #e5e7eb;
        }

        .price-row:last-child {
          border-bottom: none;
        }

        .price-row strong {
          display: block;
          font-size: 16px;
          color: #2c3e50;
          margin-bottom: 3px;
        }

        .price-row span {
          font-size: 13px;
          color: #6b7280;
          font-family: -apple-system, sans-serif;
        }

        .discount {
          background: #10b981;
          color: white !important;
          padding: 5px 12px;
          border-radius: 20px;
          font-weight: bold;
          font-size: 14px !important;
        }

        .standard {
          color: #8b7355 !important;
          font-weight: 600;
        }

        .weekend {
          background: #e6fffa;
          margin: 0 -25px;
          padding-left: 25px;
          padding-right: 25px;
        }

        .testimonial {
          background: white;
          padding: 25px;
          border-left: 4px solid #8b7355;
          border-radius: 5px;
        }

        .testimonial p {
          font-style: italic;
          font-size: 17px;
          line-height: 1.6;
          margin-bottom: 12px;
          color: #2c3e50;
        }

        .testimonial cite {
          font-style: normal;
          color: #6b7280;
          font-size: 14px;
        }

        .calendar-column {
          display: flex;
          flex-direction: column;
          gap: 20px;
        }

        .calendar-wrapper {
          background: white;
          border-radius: 8px;
          padding: 20px;
          box-shadow: 0 2px 10px rgba(0,0,0,0.05);
          min-height: 600px;
        }

        .calendar-note {
          display: flex;
          align-items: center;
          gap: 10px;
          padding: 15px 20px;
          background: #fee2e2;
          border-radius: 5px;
          animation: pulse 3s infinite;
        }

        .calendar-note p {
          margin: 0;
          font-size: 14px;
          color: #991b1b;
          font-family: -apple-system, sans-serif;
        }

        @keyframes pulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.8; }
        }

        .trust-section {
          margin-top: 80px;
          padding: 80px 0;
          background: linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%);
        }

        .trust-header {
          text-align: center;
          margin-bottom: 60px;
        }

        .trust-section h2 {
          font-size: 40px;
          color: #2c3e50;
          margin-bottom: 15px;
          font-weight: normal;
        }

        .trust-subtitle {
          font-size: 18px;
          color: #6b7280;
          font-style: italic;
          margin: 0;
        }

        .trust-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 40px;
          max-width: 1200px;
          margin: 0 auto;
        }

        .trust-card {
          background: white;
          padding: 40px 30px;
          border-radius: 15px;
          text-align: center;
          box-shadow: 0 8px 30px rgba(0,0,0,0.08);
          transition: all 0.3s ease;
          position: relative;
          overflow: hidden;
        }

        .trust-card::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 4px;
          background: var(--card-color);
        }

        .trust-card.pressure {
          --card-color: #10b981;
        }

        .trust-card.hospitality {
          --card-color: #8b7355;
        }

        .trust-card.transparent {
          --card-color: #3b82f6;
        }

        .trust-card:hover {
          transform: translateY(-8px);
          box-shadow: 0 15px 45px rgba(0,0,0,0.12);
        }

        .trust-icon {
          color: var(--card-color);
          font-size: 24px;
          margin-bottom: 20px;
        }

        .trust-card h4 {
          font-size: 22px;
          color: #2c3e50;
          margin-bottom: 15px;
          font-weight: 500;
        }

        .trust-card p {
          color: #6b7280;
          line-height: 1.7;
          font-size: 16px;
        }

        @media (max-width: 968px) {
          .content-grid {
            grid-template-columns: 1fr;
          }

          .info-column {
            order: 2;
          }

          .calendar-column {
            order: 1;
          }

          .value-props {
            flex-direction: column;
            gap: 15px;
          }

          .trust-grid {
            grid-template-columns: 1fr;
            gap: 30px;
          }

          .trust-section {
            padding: 60px 20px;
          }

          .trust-card {
            padding: 30px 25px;
          }

          .hero h1 {
            font-size: 36px;
          }

          .subtitle {
            font-size: 19px;
          }
        }

        @media (max-width: 480px) {
          .hero h1 {
            font-size: 28px;
          }

          .price-row {
            flex-direction: column;
            align-items: flex-start;
            gap: 10px;
          }
        }
      `}</style>
    </div>
  );
};

export default BookYourShootPage;