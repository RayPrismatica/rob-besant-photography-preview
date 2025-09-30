'use client'

import React, { useState, useEffect } from 'react'
import Link from 'next/link'

const CafesPage = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0)

  const testimonials = [
    {
      quote: "Rob captured our morning energy perfectly. The queue outside has doubled since we updated our Instagram with his shots.",
      author: "Emma Chen",
      venue: "The Daily Grind, Brighton"
    },
    {
      quote: "Finally, photos that show we're not just another coffee shop. Our community feels it, and the till shows it.",
      author: "Marcus Williams",
      venue: "Corner & Co, Bristol"
    },
    {
      quote: "One morning with Rob gave us six months of Instagram content. Best £500 we've spent.",
      author: "Sophie Martinez",
      venue: "Bean There, Manchester"
    }
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length)
    }, 5000)

    return () => clearInterval(interval)
  }, [])

  return (
    <div style={{
      fontFamily: 'Georgia, serif',
      lineHeight: '1.7',
      color: '#3a3a3a',
      background: '#fafaf8'
    }}>
      {/* Hero Section */}
      <section style={{
        position: 'relative',
        height: '100vh',
        minHeight: '700px',
        background: 'linear-gradient(rgba(0,0,0,0.2), rgba(0,0,0,0.3)), url("/images/restaurant.jpg")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        marginTop: '-80px',
        paddingTop: '80px'
      }}>
        <div style={{ maxWidth: '800px', padding: '0 30px' }}>
          <h1 style={{
            fontSize: 'clamp(40px, 5vw, 60px)',
            color: 'white',
            marginBottom: '20px',
            fontWeight: 'normal',
            lineHeight: '1.2'
          }}>
            Make them smell the coffee before they arrive
          </h1>
          <p style={{
            fontSize: '20px',
            color: 'rgba(255, 255, 255, 0.9)',
            marginBottom: '40px'
          }}>
            Transform casual browsers into morning regulars
          </p>
          <div style={{
            background: 'rgba(255, 255, 255, 0.95)',
            padding: '30px',
            borderRadius: '5px',
            maxWidth: '500px',
            margin: '0 auto 40px',
            boxShadow: '0 10px 40px rgba(0,0,0,0.1)'
          }}>
            <h3 style={{
              color: '#8b7355',
              fontSize: '18px',
              marginBottom: '15px',
              letterSpacing: '2px',
              textTransform: 'uppercase'
            }}>
              The Promise
            </h3>
            <p style={{
              color: '#3a3a3a',
              fontSize: '18px',
              lineHeight: '1.6'
            }}>
              One crisp photo of your signature flat white pays for itself in a day's extra customers. I can give you fifty in a single morning shoot.
            </p>
          </div>
          <Link
            href="/booking"
            style={{
              display: 'inline-block',
              background: '#8b7355',
              color: 'white',
              padding: '18px 40px',
              textDecoration: 'none',
              fontSize: '16px',
              letterSpacing: '1px',
              textTransform: 'uppercase',
              transition: 'all 0.3s ease',
              fontFamily: '-apple-system, sans-serif',
              borderRadius: '3px',
              cursor: 'pointer'
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
            Let's Discuss Your Café
          </Link>
        </div>
      </section>

      {/* Intro Section */}
      <section style={{
        padding: '100px 30px',
        background: 'white',
        textAlign: 'center'
      }}>
        <div style={{
          maxWidth: '1000px',
          margin: '0 auto'
        }}>
          <h2 style={{
            fontSize: '36px',
            color: '#2c3e50',
            marginBottom: '30px',
            fontWeight: 'normal'
          }}>
            Your café is more than coffee
          </h2>
          <p style={{
            fontSize: '20px',
            lineHeight: '1.8',
            color: '#3a3a3a',
            marginBottom: '20px'
          }}>
            I'm Rob, and I've spent mornings in hundreds of independent cafés across the UK. From the first batch brew at dawn to the last cappuccino before close, I understand the rhythm of your day.
          </p>
          <p style={{
            fontSize: '20px',
            lineHeight: '1.8',
            color: '#3a3a3a',
            marginBottom: '20px'
          }}>
            <span style={{
              color: '#8b7355',
              fontStyle: 'italic'
            }}>You know that moment when a regular walks in and you start their usual before they've even reached the counter?</span> That's the feeling of belonging I capture. The warmth that turns first-timers into daily fixtures.
          </p>
          <p style={{
            fontSize: '20px',
            lineHeight: '1.8',
            color: '#3a3a3a',
            marginBottom: '20px'
          }}>
            Because your café isn\'t competing on price or convenience. You\'re selling morning rituals, afternoon refuges, and the best bloody coffee in the neighbourhood. Let\'s make sure your photos show that.
          </p>
        </div>
      </section>

      {/* Benefits Section */}
      <section style={{
        padding: '100px 30px',
        background: '#fafaf8'
      }}>
        <div style={{
          maxWidth: '1000px',
          margin: '0 auto'
        }}>
          <h2 style={{
            textAlign: 'center',
            fontSize: '36px',
            color: '#2c3e50',
            marginBottom: '20px',
            fontWeight: 'normal'
          }}>
            I understand your world
          </h2>
          <p style={{
            textAlign: 'center',
            fontSize: '18px',
            color: '#6b7280',
            marginBottom: '60px'
          }}>
            Working with cafés every week means I know exactly what you need
          </p>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '40px',
            marginTop: '60px'
          }}>
            {[
              {
                title: 'Morning magic, captured',
                description: 'That golden hour light through your windows, steam rising from fresh cups, the satisfying pour of a V60 – these are the moments that stop the scroll.'
              },
              {
                title: 'Six months of content',
                description: 'Not just hero shots – I\'ll capture details, processes, and atmosphere shots that keep your Instagram fresh without you having to think about it.'
              },
              {
                title: 'No disruption',
                description: 'I arrive early or work during your quiet spell. Your regulars won\'t even notice I\'m there, and service continues as normal.'
              },
              {
                title: 'Prices that make sense',
                description: 'Starting from £350 for a two-hour mini session. That\'s less than you\'d spend on a week\'s worth of promoted posts, but the images last all year.'
              },
              {
                title: 'Local connection',
                description: 'Your neighbourhood chose you for a reason. I\'ll capture what makes you their café, not just another coffee shop.'
              },
              {
                title: 'Ready to post',
                description: 'Images delivered in formats perfect for Instagram stories, posts, and your Google Business profile. Plus a simple guide on what to post when.'
              }
            ].map((benefit, index) => (
              <div key={index} style={{ textAlign: 'center' }}>
                <div style={{
                  width: '60px',
                  height: '60px',
                  background: '#8b7355',
                  borderRadius: '50%',
                  margin: '0 auto 20px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '24px',
                  color: 'white',
                  position: 'relative'
                }}>
                  <div style={{
                    width: '0',
                    height: '0',
                    borderLeft: '8px solid transparent',
                    borderRight: '8px solid transparent',
                    borderBottom: '12px solid white',
                    position: 'absolute',
                    top: '18px'
                  }} />
                  <div style={{
                    width: '0',
                    height: '0',
                    borderLeft: '8px solid transparent',
                    borderRight: '8px solid transparent',
                    borderTop: '12px solid white',
                    position: 'absolute',
                    bottom: '18px'
                  }} />
                </div>
                <h3 style={{
                  fontSize: '22px',
                  color: '#2c3e50',
                  marginBottom: '15px',
                  fontWeight: 'normal'
                }}>
                  {benefit.title}
                </h3>
                <p style={{
                  fontSize: '16px',
                  lineHeight: '1.7',
                  color: '#6b7280'
                }}>
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section style={{
        padding: '100px 30px',
        background: 'white'
      }}>
        <div style={{
          maxWidth: '1000px',
          margin: '0 auto'
        }}>
          <h2 style={{
            textAlign: 'center',
            fontSize: '36px',
            color: '#2c3e50',
            marginBottom: '60px',
            fontWeight: 'normal'
          }}>
            How this works (spoiler: it's simple)
          </h2>
          <div style={{ display: 'grid', gap: '50px' }}>
            {[
              {
                number: '1',
                title: 'We\'ll have a quick chat',
                description: 'Pop round when it\'s quiet, or we\'ll talk on the phone. I\'ll ask about your bestsellers, your vibe, and what makes your regulars loyal. This isn\'t a sales pitch – it\'s about understanding your café.'
              },
              {
                number: '2',
                title: 'I\'ll arrive when it suits you',
                description: 'Early morning for that beautiful light? Tuesday afternoon lull? You tell me what works. I\'ll slip in quietly with minimal kit – no massive lights or disruption.'
              },
              {
                number: '3',
                title: 'The magic happens naturally',
                description: 'I\'ll capture your signature drinks, your pastries at their freshest, your space when it feels most inviting. If you want, we can stage a few hero shots. But mostly, I\'m documenting the authentic energy of your café.'
              },
              {
                number: '4',
                title: 'Images ready to work for you',
                description: 'Within days, you\'ll have a gallery of images sized for every platform. Plus, I\'ll suggest which shots work best for different purposes – hero images for your website, process shots for stories, detail shots for posts.'
              }
            ].map((step, index) => (
              <div key={index} style={{
                display: 'grid',
                gridTemplateColumns: '80px 1fr',
                gap: '30px',
                alignItems: 'start'
              }}>
                <div style={{
                  width: '80px',
                  height: '80px',
                  background: '#fafaf8',
                  border: '2px solid #8b7355',
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '32px',
                  color: '#8b7355'
                }}>
                  {step.number}
                </div>
                <div>
                  <h3 style={{
                    fontSize: '24px',
                    color: '#2c3e50',
                    marginBottom: '10px',
                    fontWeight: 'normal'
                  }}>
                    {step.title}
                  </h3>
                  <p style={{
                    fontSize: '17px',
                    lineHeight: '1.7',
                    color: '#3a3a3a'
                  }}>
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section style={{
        padding: '100px 30px',
        background: '#fafaf8',
        textAlign: 'center'
      }}>
        <div style={{
          maxWidth: '1000px',
          margin: '0 auto'
        }}>
          <h2 style={{
            fontSize: '36px',
            color: '#2c3e50',
            marginBottom: '60px',
            fontWeight: 'normal'
          }}>
            Cafés love working with me
          </h2>
          <div style={{
            background: 'white',
            padding: '50px',
            borderRadius: '5px',
            boxShadow: '0 2px 10px rgba(0,0,0,0.05)',
            maxWidth: '700px',
            margin: '0 auto',
            minHeight: '250px',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center'
          }}>
            <p style={{
              fontSize: '22px',
              lineHeight: '1.7',
              color: '#3a3a3a',
              marginBottom: '30px',
              fontStyle: 'italic'
            }}>
              "{testimonials[currentTestimonial].quote}"
            </p>
            <div>
              <div style={{
                fontSize: '16px',
                color: '#8b7355',
                fontWeight: 'normal'
              }}>
                {testimonials[currentTestimonial].author}
              </div>
              <div style={{
                fontSize: '14px',
                color: '#6b7280',
                marginTop: '5px'
              }}>
                {testimonials[currentTestimonial].venue}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Preview */}
      <section style={{
        background: 'white',
        padding: '100px 0'
      }}>
        <h2 style={{
          textAlign: 'center',
          fontSize: '36px',
          color: '#2c3e50',
          marginBottom: '60px',
          fontWeight: 'normal'
        }}>
          A taste of what's possible
        </h2>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
          gap: '20px',
          padding: '0 30px',
          maxWidth: '1200px',
          margin: '0 auto'
        }}>
          {[
            { src: '/images/restaurant.jpg', alt: 'Perfect latte art' },
            { src: '/images/gastropub.jpg', alt: 'Morning pastry selection' },
            { src: '/images/hotel.jpg', alt: 'Barista at work' },
            { src: '/images/venue-space.jpg', alt: 'Cosy window seating' },
            { src: '/images/hero-venue.jpg', alt: 'Breakfast special' },
            { src: '/images/winery.jpg', alt: 'Fresh roasted beans' },
            { src: '/images/restaurant.jpg', alt: 'Afternoon atmosphere' },
            { src: '/images/gastropub.jpg', alt: 'Homemade cake selection' }
          ].map((item, index) => (
            <div key={index} style={{
              position: 'relative',
              paddingBottom: '100%',
              background: '#f0f0f0',
              borderRadius: '3px',
              overflow: 'hidden',
              cursor: 'pointer',
              transition: 'transform 0.3s ease'
            }}>
              <img
                src={item.src}
                alt={item.alt}
                style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover'
                }}
                onError={(e) => {
                  (e.target as HTMLElement).style.display = 'none';
                  ((e.target as HTMLElement).nextSibling as HTMLElement).style.display = 'flex';
                }}
              />
              <div style={{
                display: 'none',
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#888',
                fontSize: '0.9em',
                background: '#f0f0f0'
              }}>
                {item.alt}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ROI Section */}
      <section style={{
        padding: '100px 30px',
        background: '#fafaf8',
        textAlign: 'center'
      }}>
        <div style={{
          maxWidth: '1000px',
          margin: '0 auto'
        }}>
          <h2 style={{
            fontSize: '36px',
            color: '#2c3e50',
            marginBottom: '30px',
            fontWeight: 'normal'
          }}>
            Let's talk about the real impact
          </h2>
          <div style={{
            maxWidth: '700px',
            margin: '0 auto'
          }}>
            <p style={{
              fontSize: '19px',
              lineHeight: '1.8',
              color: '#3a3a3a',
              marginBottom: '20px'
            }}>
              I know you\'re not running a café to become Instagram famous. You\'re here to build a sustainable business doing what you love. But here\'s the thing – great photos aren\'t just nice to have anymore. They\'re how new customers find you.
            </p>
            <p style={{
              fontSize: '19px',
              lineHeight: '1.8',
              color: '#3a3a3a',
              marginBottom: '20px'
            }}>
              When someone searches "coffee near me" on their phone, they\'re choosing based on images. When they\'re scrolling Instagram on Sunday morning, deciding where to go for brunch, it\'s your photos that make them choose you over the place down the road.
            </p>
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(3, 1fr)',
              gap: '40px',
              margin: '60px 0',
              padding: '40px',
              background: 'white',
              borderRadius: '5px',
              boxShadow: '0 2px 10px rgba(0,0,0,0.05)'
            }}>
              <div style={{ textAlign: 'center' }}>
                <div style={{
                  fontSize: '42px',
                  color: '#8b7355',
                  marginBottom: '10px'
                }}>
                  73%
                </div>
                <div style={{
                  fontSize: '14px',
                  color: '#6b7280',
                  textTransform: 'uppercase',
                  letterSpacing: '1px'
                }}>
                  Choose based on photos
                </div>
              </div>
              <div style={{ textAlign: 'center' }}>
                <div style={{
                  fontSize: '42px',
                  color: '#8b7355',
                  marginBottom: '10px'
                }}>
                  2x
                </div>
                <div style={{
                  fontSize: '14px',
                  color: '#6b7280',
                  textTransform: 'uppercase',
                  letterSpacing: '1px'
                }}>
                  More engagement
                </div>
              </div>
              <div style={{ textAlign: 'center' }}>
                <div style={{
                  fontSize: '42px',
                  color: '#8b7355',
                  marginBottom: '10px'
                }}>
                  5
                </div>
                <div style={{
                  fontSize: '14px',
                  color: '#6b7280',
                  textTransform: 'uppercase',
                  letterSpacing: '1px'
                }}>
                  Days to break even
                </div>
              </div>
            </div>
            <p style={{
              fontSize: '19px',
              lineHeight: '1.8',
              color: '#3a3a3a',
              marginBottom: '20px'
            }}>
              My café clients typically see the investment pay for itself within a week. After that, every extra customer those photos bring in is pure profit. No ongoing fees, no complicated contracts – just images that keep working for you, day after day.
            </p>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section style={{
        background: 'white',
        textAlign: 'center',
        padding: '120px 30px'
      }}>
        <h2 style={{
          fontSize: '42px',
          color: '#2c3e50',
          marginBottom: '20px',
          fontWeight: 'normal'
        }}>
          Ready to fill those morning tables?
        </h2>
        <p style={{
          fontSize: '20px',
          color: '#3a3a3a',
          marginBottom: '40px',
          maxWidth: '600px',
          marginLeft: 'auto',
          marginRight: 'auto',
          lineHeight: '1.7'
        }}>
          Let's have a proper chat about your café. No pressure, no hard sell – just a conversation about how we can show the world what makes your place special. First coffee's on me.
        </p>
        <Link
          href="/booking"
          style={{
            display: 'inline-block',
            background: '#8b7355',
            color: 'white',
            padding: '18px 40px',
            textDecoration: 'none',
            fontSize: '16px',
            letterSpacing: '1px',
            textTransform: 'uppercase',
            transition: 'all 0.3s ease',
            fontFamily: '-apple-system, sans-serif',
            borderRadius: '3px',
            cursor: 'pointer'
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
          Start a Conversation
        </Link>
        <p style={{
          marginTop: '30px',
          fontSize: '16px',
          color: '#6b7280'
        }}>
          Or drop me a message on Instagram @robbesantphoto – I love discovering new cafés
        </p>
      </section>
    </div>
  )
}

export default CafesPage