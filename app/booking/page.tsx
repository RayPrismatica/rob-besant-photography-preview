'use client'

import React, { useState } from 'react'
import Link from 'next/link'

const BookingPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    venue: '',
    email: '',
    phone: '',
    message: ''
  })
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

  const handleSubmit = () => {
    console.log('Form submitted:', formData)
    alert('Thanks for your message! Rob will be in touch within 24 hours.')
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  return (
    <div style={{
      fontFamily: 'Georgia, serif',
      lineHeight: '1.7',
      color: '#3a3a3a',
      background: '#fafaf8',
      minHeight: '100vh',
      paddingTop: '80px'
    }}>
      {/* Hero Section */}
      <section style={{
        background: 'white',
        padding: '100px 30px',
        textAlign: 'center'
      }}>
        <div style={{
          maxWidth: '800px',
          margin: '0 auto'
        }}>
          <h1 style={{
            fontSize: 'clamp(36px, 5vw, 48px)',
            color: '#2c3e50',
            marginBottom: '25px',
            fontWeight: 'normal',
            lineHeight: '1.2'
          }}>
            Let's have a proper conversation about your venue
          </h1>
          <p style={{
            fontSize: '22px',
            color: '#3a3a3a',
            marginBottom: '40px',
            lineHeight: '1.6'
          }}>
            No sales pitch. No pressure. Just{' '}
            <span style={{
              color: '#8b7355',
              fontStyle: 'italic'
            }}>
              a chat about how beautiful photography can transform your business
            </span>
            . Pick a date that works for you, and I'll give you a call.
          </p>
        </div>
      </section>

      {/* Rob Section */}
      <section style={{
        background: '#fafaf8',
        padding: '80px 0'
      }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr 2fr',
          gap: '60px',
          maxWidth: '1000px',
          margin: '0 auto',
          padding: '0 30px',
          alignItems: 'start'
        }}>
          <div style={{ position: 'relative' }}>
            <img
              src="/images/rob.jpg"
              alt="Rob Besant - Professional Food & Hospitality Photographer"
              style={{
                width: '100%',
                height: 'auto',
                aspectRatio: '4/5',
                objectFit: 'cover',
                borderRadius: '5px',
                boxShadow: '0 10px 30px rgba(0,0,0,0.1)',
                cursor: 'pointer',
                transition: 'transform 0.3s ease'
              }}
              onClick={() => openModal('/images/rob.jpg', 'Rob Besant Photography - About the photographer')}
              onMouseEnter={(e) => (e.target as HTMLElement).style.transform = 'scale(1.02)'}
              onMouseLeave={(e) => (e.target as HTMLElement).style.transform = 'scale(1)'}
            />
          </div>
          <div>
            <h2 style={{
              fontSize: '32px',
              color: '#2c3e50',
              marginBottom: '25px',
              fontWeight: 'normal'
            }}>
              A bit about me (and why I care about your success)
            </h2>
            <p style={{
              fontSize: '18px',
              lineHeight: '1.8',
              color: '#3a3a3a',
              marginBottom: '20px'
            }}>
              I'm Rob. I've been photographing food and hospitality venues across the UK for over a decade. But here's the thing – this isn't just my profession, it's in my blood.
            </p>
            <p style={{
              fontSize: '18px',
              lineHeight: '1.8',
              color: '#3a3a3a',
              marginBottom: '20px'
            }}>
              Food and hospitality run through my family like a golden thread. Growing up surrounded by the rhythms of service, the craft of cooking, and the art of making people feel at home, I learned what really makes venues special. I know the stress of a quiet Tuesday, the chaos of a fully-booked Saturday, and the pride you feel when everything just works.
            </p>
            <p style={{
              fontSize: '18px',
              lineHeight: '1.8',
              color: '#3a3a3a',
              marginBottom: '20px'
            }}>
              This deep connection to hospitality is why I don't just take pretty pictures. I create images that capture the soul of your venue, speak to your ideal customers, and actually drive bookings. Because hospitality isn't just what I photograph – it's who I am.
            </p>
            <p style={{
              fontSize: '18px',
              lineHeight: '1.8',
              color: '#3a3a3a',
              marginBottom: '20px'
            }}>
              <span style={{
                color: '#8b7355',
                fontStyle: 'italic'
              }}>
                Every venue has a story worth telling properly.
              </span>{' '}
              Let's make sure yours gets heard.
            </p>
          </div>
        </div>
      </section>

      {/* Form and Calendar Section */}
      <section style={{
        background: 'white',
        padding: '80px 30px'
      }}>
        <div style={{
          maxWidth: '1200px',
          margin: '0 auto',
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: '80px'
        }}>
          <div style={{ maxWidth: '500px' }}>
            <h2 style={{
              fontSize: '32px',
              color: '#2c3e50',
              marginBottom: '20px',
              fontWeight: 'normal'
            }}>
              Start with a quick hello
            </h2>
            <p style={{
              fontSize: '18px',
              color: '#3a3a3a',
              marginBottom: '40px',
              lineHeight: '1.7'
            }}>
              Drop me your details and a bit about your venue. I'll get back to you within a day – usually with a few initial thoughts on how we could work together.
            </p>
            <div style={{
              display: 'grid',
              gap: '25px'
            }}>
              <div style={{
                display: 'grid',
                gridTemplateColumns: '1fr 1fr',
                gap: '20px'
              }}>
                <div style={{
                  display: 'grid',
                  gap: '8px'
                }}>
                  <label style={{
                    fontSize: '15px',
                    color: '#6b7280',
                    textTransform: 'uppercase',
                    letterSpacing: '1px'
                  }}>
                    Your Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Jane Smith"
                    style={{
                      width: '100%',
                      padding: '15px',
                      border: '1px solid #e5e5e5',
                      borderRadius: '3px',
                      fontFamily: 'Georgia, serif',
                      fontSize: '16px',
                      color: '#3a3a3a',
                      background: 'white',
                      transition: 'all 0.3s ease'
                    }}
                    onFocus={(e) => {
                      (e.target as HTMLElement).style.borderColor = '#8b7355';
                      (e.target as HTMLElement).style.boxShadow = '0 0 0 3px rgba(139, 115, 85, 0.1)'
                    }}
                    onBlur={(e) => {
                      (e.target as HTMLElement).style.borderColor = '#e5e5e5';
                      (e.target as HTMLElement).style.boxShadow = 'none';
                    }}
                  />
                </div>
                <div style={{
                  display: 'grid',
                  gap: '8px'
                }}>
                  <label style={{
                    fontSize: '15px',
                    color: '#6b7280',
                    textTransform: 'uppercase',
                    letterSpacing: '1px'
                  }}>
                    Venue Name
                  </label>
                  <input
                    type="text"
                    name="venue"
                    value={formData.venue}
                    onChange={handleChange}
                    placeholder="The Red Lion"
                    style={{
                      width: '100%',
                      padding: '15px',
                      border: '1px solid #e5e5e5',
                      borderRadius: '3px',
                      fontFamily: 'Georgia, serif',
                      fontSize: '16px',
                      color: '#3a3a3a',
                      background: 'white',
                      transition: 'all 0.3s ease'
                    }}
                    onFocus={(e) => {
                      (e.target as HTMLElement).style.borderColor = '#8b7355';
                      (e.target as HTMLElement).style.boxShadow = '0 0 0 3px rgba(139, 115, 85, 0.1)'
                    }}
                    onBlur={(e) => {
                      (e.target as HTMLElement).style.borderColor = '#e5e5e5';
                      (e.target as HTMLElement).style.boxShadow = 'none';
                    }}
                  />
                </div>
              </div>
              <div style={{
                display: 'grid',
                gridTemplateColumns: '1fr 1fr',
                gap: '20px'
              }}>
                <div style={{
                  display: 'grid',
                  gap: '8px'
                }}>
                  <label style={{
                    fontSize: '15px',
                    color: '#6b7280',
                    textTransform: 'uppercase',
                    letterSpacing: '1px'
                  }}>
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="jane@redlion.co.uk"
                    style={{
                      width: '100%',
                      padding: '15px',
                      border: '1px solid #e5e5e5',
                      borderRadius: '3px',
                      fontFamily: 'Georgia, serif',
                      fontSize: '16px',
                      color: '#3a3a3a',
                      background: 'white',
                      transition: 'all 0.3s ease'
                    }}
                    onFocus={(e) => {
                      (e.target as HTMLElement).style.borderColor = '#8b7355';
                      (e.target as HTMLElement).style.boxShadow = '0 0 0 3px rgba(139, 115, 85, 0.1)'
                    }}
                    onBlur={(e) => {
                      (e.target as HTMLElement).style.borderColor = '#e5e5e5';
                      (e.target as HTMLElement).style.boxShadow = 'none';
                    }}
                  />
                </div>
                <div style={{
                  display: 'grid',
                  gap: '8px'
                }}>
                  <label style={{
                    fontSize: '15px',
                    color: '#6b7280',
                    textTransform: 'uppercase',
                    letterSpacing: '1px'
                  }}>
                    Phone (Optional)
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="07890 123456"
                    style={{
                      width: '100%',
                      padding: '15px',
                      border: '1px solid #e5e5e5',
                      borderRadius: '3px',
                      fontFamily: 'Georgia, serif',
                      fontSize: '16px',
                      color: '#3a3a3a',
                      background: 'white',
                      transition: 'all 0.3s ease'
                    }}
                    onFocus={(e) => {
                      (e.target as HTMLElement).style.borderColor = '#8b7355';
                      (e.target as HTMLElement).style.boxShadow = '0 0 0 3px rgba(139, 115, 85, 0.1)'
                    }}
                    onBlur={(e) => {
                      (e.target as HTMLElement).style.borderColor = '#e5e5e5';
                      (e.target as HTMLElement).style.boxShadow = 'none';
                    }}
                  />
                </div>
              </div>
              <div style={{
                display: 'grid',
                gap: '8px'
              }}>
                <label style={{
                  fontSize: '15px',
                  color: '#6b7280',
                  textTransform: 'uppercase',
                  letterSpacing: '1px'
                }}>
                  Tell me a bit about your venue
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="We're a gastropub in the Cotswolds, struggling to show how special our Sunday roasts are online..."
                  style={{
                    width: '100%',
                    padding: '15px',
                    border: '1px solid #e5e5e5',
                    borderRadius: '3px',
                    fontFamily: 'Georgia, serif',
                    fontSize: '16px',
                    color: '#3a3a3a',
                    background: 'white',
                    transition: 'all 0.3s ease',
                    minHeight: '120px',
                    resize: 'vertical'
                  }}
                  onFocus={(e) => {
                    (e.target as HTMLElement).style.borderColor = '#8b7355';
                    (e.target as HTMLElement).style.boxShadow = '0 0 0 3px rgba(139, 115, 85, 0.1)'
                  }}
                  onBlur={(e) => {
                    (e.target as HTMLElement).style.borderColor = '#e5e5e5';
                    (e.target as HTMLElement).style.boxShadow = 'none';
                  }}
                />
              </div>
              <button
                onClick={handleSubmit}
                style={{
                  background: '#8b7355',
                  color: 'white',
                  padding: '18px 40px',
                  border: 'none',
                  borderRadius: '3px',
                  fontSize: '16px',
                  fontFamily: '-apple-system, sans-serif',
                  textTransform: 'uppercase',
                  letterSpacing: '1px',
                  cursor: 'pointer',
                  transition: 'all 0.3s ease',
                  marginTop: '10px'
                }}
                onMouseEnter={(e) => {
                  (e.target as HTMLElement).style.background = '#75614d';
                  (e.target as HTMLElement).style.transform = 'translateY(-2px)';
                  (e.target as HTMLElement).style.boxShadow = '0 5px 20px rgba(139, 115, 85, 0.3)';
                }}
                onMouseLeave={(e) => {
                  (e.target as HTMLElement).style.background = '#8b7355';
                  (e.target as HTMLElement).style.transform = 'translateY(0)';
                  (e.target as HTMLElement).style.boxShadow = 'none';
                }}
              >
                Send Message
              </button>
            </div>

            {/* Claim Session Option */}
            <div style={{
              marginTop: '40px',
              padding: '30px',
              background: '#f8f9fa',
              borderRadius: '8px',
              border: '1px solid #e9ecef',
              textAlign: 'center'
            }}>
              <h3 style={{
                fontSize: '24px',
                color: '#2c3e50',
                marginBottom: '15px',
                fontWeight: 'normal'
              }}>
                Or browse available dates
              </h3>
              <p style={{
                fontSize: '16px',
                color: '#5a5a5a',
                lineHeight: '1.6',
                marginBottom: '25px'
              }}>
                Browse the calendar and claim your perfect session moment. Nothing's set in stone - we'll confirm it fits your venue after we chat. Think of it as holding your ideal date.
              </p>
              <Link
                href="/claim-session"
                style={{
                  display: 'inline-block',
                  background: '#e8c547',
                  color: 'white',
                  padding: '15px 35px',
                  textDecoration: 'none',
                  borderRadius: '25px',
                  fontSize: '16px',
                  fontFamily: '-apple-system, sans-serif',
                  fontWeight: '500',
                  transition: 'all 0.3s ease',
                  boxShadow: '0 4px 15px rgba(232, 197, 71, 0.3)'
                }}
                onMouseEnter={(e) => {
                  (e.target as HTMLElement).style.background = '#d4b03a';
                  (e.target as HTMLElement).style.transform = 'translateY(-2px)';
                  (e.target as HTMLElement).style.boxShadow = '0 6px 20px rgba(232, 197, 71, 0.4)';
                }}
                onMouseLeave={(e) => {
                  (e.target as HTMLElement).style.background = '#e8c547';
                  (e.target as HTMLElement).style.transform = 'translateY(0)';
                  (e.target as HTMLElement).style.boxShadow = '0 4px 15px rgba(232, 197, 71, 0.3)';
                }}
              >
                Find Your Perfect Day →
              </Link>
              <p style={{
                fontSize: '14px',
                color: '#888',
                marginTop: '15px',
                fontStyle: 'italic'
              }}>
                Just penciling it in • Weekend dates are 30% off • We'll confirm after our chat
              </p>
            </div>
          </div>

          <div style={{ maxWidth: '500px' }}>
            <h2 style={{
              fontSize: '32px',
              color: '#2c3e50',
              marginBottom: '20px',
              fontWeight: 'normal'
            }}>
              Or pencil in a chat
            </h2>
            <p style={{
              fontSize: '18px',
              color: '#3a3a3a',
              marginBottom: '40px',
              lineHeight: '1.7'
            }}>
              No commitment needed. Just pick a time that works for you and I'll give you a call. We'll talk about your venue, your challenges, and whether we're a good fit to work together.
            </p>
            <div style={{
              background: '#fafaf8',
              border: '2px solid #8b7355',
              borderRadius: '5px',
              padding: '20px',
              minHeight: '400px'
            }}>
              <iframe
                src="https://calendar.google.com/calendar/appointments/schedules/AcZssZ3guYoxS4NORG7I8Nv-N3h9Eli0WLBvtFXCHolrSvqYjMfC12lBk_df3BE3ICHBnl3W_OXUhdCZ?gv=true"
                style={{
                  border: 'none',
                  width: '100%',
                  height: '600px',
                  borderRadius: '3px'
                }}
                frameBorder="0"
                scrolling="no"
                title="Book a consultation with Rob Besant Photography"
              ></iframe>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Signals */}
      <section style={{
        background: '#fafaf8',
        padding: '60px 30px',
        textAlign: 'center'
      }}>
        <div style={{
          maxWidth: '1000px',
          margin: '0 auto'
        }}>
          <h3 style={{
            fontSize: '28px',
            color: '#2c3e50',
            marginBottom: '40px',
            fontWeight: 'normal'
          }}>
            What to expect when we talk
          </h3>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
            gap: '40px'
          }}>
            {[
              {
                title: 'Just a conversation',
                description: "No hard sell, no pressure. If we're not right for each other, I'll tell you honestly."
              },
              {
                title: 'Free initial thoughts',
                description: "I'll share a few quick ideas about your current photos and what could work better."
              },
              {
                title: 'Transparent pricing',
                description: "No hidden fees, no surprises. I'll tell you exactly what things cost and why."
              },
              {
                title: 'Your timeline',
                description: "We'll work around your schedule. Quiet mornings, midweek lulls – whatever suits you."
              }
            ].map((item, index) => (
              <div key={index} style={{ textAlign: 'center' }}>
                <div style={{
                  width: '60px',
                  height: '60px',
                  margin: '0 auto 15px',
                  background: 'white',
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '24px',
                  position: 'relative'
                }}>
                  <div style={{
                    width: '0',
                    height: '0',
                    borderLeft: '8px solid transparent',
                    borderRight: '8px solid transparent',
                    borderBottom: '12px solid #8b7355',
                    position: 'absolute',
                    top: '18px'
                  }} />
                  <div style={{
                    width: '0',
                    height: '0',
                    borderLeft: '8px solid transparent',
                    borderRight: '8px solid transparent',
                    borderTop: '12px solid #8b7355',
                    position: 'absolute',
                    bottom: '18px'
                  }} />
                </div>
                <h4 style={{
                  fontSize: '18px',
                  color: '#2c3e50',
                  marginBottom: '10px',
                  fontWeight: 'normal'
                }}>
                  {item.title}
                </h4>
                <p style={{
                  fontSize: '15px',
                  color: '#6b7280',
                  lineHeight: '1.6'
                }}>
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final Message */}
      <section style={{
        background: 'white',
        padding: '80px 30px',
        textAlign: 'center'
      }}>
        <div style={{
          maxWidth: '700px',
          margin: '0 auto'
        }}>
          <h2 style={{
            fontSize: '36px',
            color: '#2c3e50',
            marginBottom: '25px',
            fontWeight: 'normal'
          }}>
            Not ready for a call? No problem.
          </h2>
          <p style={{
            fontSize: '20px',
            color: '#3a3a3a',
            lineHeight: '1.7',
            marginBottom: '20px'
          }}>
            Sometimes you just want to think things over. I get it. Feel free to follow me on Instagram @robbesantphoto where I share tips, behind-the-scenes shots, and plenty of food photography to make you hungry.
          </p>
          <p style={{
            fontSize: '20px',
            color: '#3a3a3a',
            lineHeight: '1.7',
            marginBottom: '20px'
          }}>
            Or if you've got a quick question, just want to say hello, or prefer to start with an email – I'm always happy to chat.
          </p>
          <div style={{
            marginTop: '40px',
            paddingTop: '40px',
            borderTop: '1px solid #e5e5e5'
          }}>
            <p style={{
              fontSize: '17px',
              color: '#6b7280'
            }}>
              Drop me a line:{' '}
              <a href="mailto:hello@robbesant.com" style={{
                color: '#8b7355',
                textDecoration: 'none'
              }}>
                hello@robbesant.com
              </a>
              <br/>
              Or if you prefer a quick text:{' '}
              <a href="tel:07890123456" style={{
                color: '#8b7355',
                textDecoration: 'none'
              }}>
                07890 123456
              </a>
            </p>
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
    </div>
  )
}

export default BookingPage