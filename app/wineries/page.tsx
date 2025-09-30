'use client'

import React, { useState } from 'react'
import Link from 'next/link'

const WineriesPage = () => {
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
    <div style={{
      fontFamily: 'Georgia, serif',
      lineHeight: '1.7',
      color: '#3a3a3a',
      background: '#fafaf8'
    }}>
      {/* Hero Section */}
      <section style={{
        padding: '150px 20px 100px',
        background: '#fafaf8',
        position: 'relative',
        overflow: 'hidden'
      }}>
        <div style={{
          maxWidth: '1200px',
          margin: '0 auto',
          position: 'relative',
          zIndex: 2,
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: '80px',
          alignItems: 'center'
        }}>
          <div>
            <h1 style={{
              fontSize: '52px',
              lineHeight: '1.2',
              color: '#2c3e50',
              marginBottom: '25px',
              fontWeight: 'normal'
            }}>
              Show the soul behind the bottle
            </h1>
            <p style={{
              fontSize: '22px',
              color: '#3a3a3a',
              marginBottom: '35px',
              lineHeight: '1.6'
            }}>
              Your craft deserves more than a product shot. Let's capture the passion, process, and people that make your brand worth choosing over the supermarket shelf.
            </p>

            <div style={{
              background: '#fff',
              padding: '30px',
              borderRadius: '5px',
              boxShadow: '0 10px 30px rgba(0,0,0,0.1)',
              borderTop: '4px solid #8b7355'
            }}>
              <h2 style={{
                fontSize: '20px',
                color: '#2c3e50',
                marginBottom: '20px',
                fontWeight: 'normal'
              }}>
                One shoot delivers:
              </h2>
              <ul style={{ listStyle: 'none', padding: 0 }}>
                {[
                  'E-commerce shots that convert browsers to buyers',
                  'Story images for About pages and press',
                  'Social content that builds loyal followers',
                  'Wholesale deck images that open doors'
                ].map((item, index) => (
                  <li key={index} style={{
                    padding: '10px 0',
                    color: '#3a3a3a',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '12px'
                  }}>
                    <span style={{
                      color: '#8b7355',
                      fontWeight: 'bold',
                      fontSize: '20px'
                    }}>→</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div style={{ position: 'relative' }}>
            <img
              src="/images/restaurant.jpg"
              alt="Artisan winemaker examining wine in cellar"
              style={{
                width: '100%',
                borderRadius: '5px',
                boxShadow: '0 20px 60px rgba(0,0,0,0.15)',
                cursor: 'pointer',
                transition: 'transform 0.3s ease'
              }}
              onClick={() => openModal('/images/restaurant.jpg', 'Artisan winemaker examining wine in cellar')}
              onMouseEnter={(e) => {
                (e.target as HTMLElement).style.transform = 'scale(1.02)';
              }}
              onMouseLeave={(e) => {
                (e.target as HTMLElement).style.transform = 'scale(1)';
              }}
              onError={(e) => {
                (e.target as HTMLElement).style.display = 'none';
                ((e.target as HTMLElement).nextSibling as HTMLElement).style.display = 'flex';
              }}
            />
            <div style={{
              display: 'none',
              width: '100%',
              height: '400px',
              background: '#ddd',
              borderRadius: '5px',
              alignItems: 'center',
              justifyContent: 'center',
              color: '#888',
              fontSize: '1.1em'
            }}>
              Artisan winemaker examining wine in cellar
            </div>
            <div style={{
              position: 'absolute',
              bottom: '30px',
              right: '30px',
              background: '#fff',
              padding: '20px 30px',
              borderRadius: '5px',
              boxShadow: '0 10px 30px rgba(0,0,0,0.1)',
              textAlign: 'center'
            }}>
              <div style={{
                fontSize: '36px',
                color: '#8b7355',
                fontWeight: 'normal'
              }}>+35%</div>
              <div style={{
                fontSize: '14px',
                color: '#6b7280',
                textTransform: 'uppercase',
                letterSpacing: '1px'
              }}>D2C Sales Increase</div>
            </div>
          </div>
        </div>
      </section>

      {/* Understanding Section */}
      <section style={{
        padding: '100px 20px',
        background: '#fff'
      }}>
        <div style={{
          maxWidth: '900px',
          margin: '0 auto'
        }}>
          <h2 style={{
            fontSize: '42px',
            textAlign: 'center',
            color: '#2c3e50',
            marginBottom: '30px',
            fontWeight: 'normal',
            lineHeight: '1.2'
          }}>
            I know what you're up against
          </h2>
          <p style={{
            textAlign: 'center',
            fontSize: '20px',
            color: '#6b7280',
            marginBottom: '60px',
            lineHeight: '1.7'
          }}>
            You're not competing on price – you can't. You're competing on story, quality, and connection. But without the right images, nobody sees the difference between your craft and mass production.
          </p>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(2, 1fr)',
            gap: '40px'
          }}>
            {[
              {
                title: 'Small budget, big ambitions',
                description: 'Every pound counts when you\'re bootstrapping. You need photos that work across your website, wholesale pitches, farmers\' markets, and social media – without breaking the bank.'
              },
              {
                title: 'The supermarket squeeze',
                description: 'They\'ve got marketing budgets you can\'t match. But you\'ve got something they don\'t – a real story, real people, real passion. We just need to show it.'
              },
              {
                title: 'Direct sales are everything',
                description: 'Every customer who buys direct means better margins and a real relationship. But they need to trust you first – and trust starts with professional imagery.'
              },
              {
                title: 'Time is your scarcest resource',
                description: 'You\'re making the product, running the business, doing the accounts. A photo shoot needs to be efficient, effective, and actually deliver usable assets.'
              }
            ].map((card, index) => (
              <div key={index} style={{
                padding: '35px',
                background: '#fafaf8',
                borderRadius: '5px',
                borderLeft: '4px solid #8b7355'
              }}>
                <h3 style={{
                  fontSize: '24px',
                  color: '#2c3e50',
                  marginBottom: '15px',
                  fontWeight: 'normal'
                }}>
                  {card.title}
                </h3>
                <p style={{
                  color: '#6b7280',
                  lineHeight: '1.6'
                }}>
                  {card.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Battle Section */}
      <section style={{
        padding: '100px 20px',
        background: 'linear-gradient(to bottom, #fafaf8, #fff)'
      }}>
        <div style={{
          maxWidth: '1200px',
          margin: '0 auto',
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: '80px',
          alignItems: 'center'
        }}>
          <div>
            <h2 style={{
              fontSize: '36px',
              color: '#2c3e50',
              marginBottom: '30px',
              fontWeight: 'normal',
              lineHeight: '1.2'
            }}>
              Level the playing field with imagery that punches above its weight
            </h2>

            <div style={{
              background: '#fff',
              borderRadius: '5px',
              overflow: 'hidden',
              boxShadow: '0 5px 20px rgba(0,0,0,0.08)'
            }}>
              <div style={{
                display: 'grid',
                gridTemplateColumns: '1fr 1fr'
              }}>
                <div style={{
                  background: '#2c3e50',
                  color: '#fff',
                  padding: '20px',
                  textAlign: 'center',
                  fontSize: '18px'
                }}>Big Brands</div>
                <div style={{
                  background: '#8b7355',
                  color: '#fff',
                  padding: '20px',
                  textAlign: 'center',
                  fontSize: '18px'
                }}>Your Craft Brand</div>
              </div>
              {[
                ['Generic, soulless', 'Authentic story'],
                ['Mass produced', 'Handcrafted quality'],
                ['Faceless corporation', 'Real people, real passion'],
                ['Focus groups decide', 'Your vision drives it']
              ].map((row, index) => (
                <div key={index} style={{
                  display: 'grid',
                  gridTemplateColumns: '1fr 1fr',
                  borderBottom: index < 3 ? '1px solid #f3f4f6' : 'none'
                }}>
                  <div style={{
                    padding: '20px',
                    textAlign: 'center',
                    fontSize: '16px',
                    background: '#fef2f2',
                    color: '#991b1b'
                  }}>
                    {row[0]}
                  </div>
                  <div style={{
                    padding: '20px',
                    textAlign: 'center',
                    fontSize: '16px',
                    background: '#f0fdf4',
                    color: '#16a34a',
                    fontWeight: 'bold'
                  }}>
                    {row[1]}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div>
            <img
              src="/images/gastropub.jpg"
              alt="Craft brewery founder with their signature beer"
              style={{
                width: '100%',
                borderRadius: '5px',
                boxShadow: '0 20px 60px rgba(0,0,0,0.12)',
                cursor: 'pointer',
                transition: 'transform 0.3s ease'
              }}
              onClick={() => openModal('/images/gastropub.jpg', 'Craft brewery founder with their signature beer')}
              onMouseEnter={(e) => {
                (e.target as HTMLElement).style.transform = 'scale(1.02)';
              }}
              onMouseLeave={(e) => {
                (e.target as HTMLElement).style.transform = 'scale(1)';
              }}
              onError={(e) => {
                (e.target as HTMLElement).style.display = 'none';
                ((e.target as HTMLElement).nextSibling as HTMLElement).style.display = 'flex';
              }}
            />
            <div style={{
              display: 'none',
              width: '100%',
              height: '400px',
              background: '#ddd',
              borderRadius: '5px',
              alignItems: 'center',
              justifyContent: 'center',
              color: '#888',
              fontSize: '1.1em'
            }}>
              Craft brewery founder with their signature beer
            </div>
          </div>
        </div>
      </section>

      {/* Solutions Section */}
      <section style={{
        padding: '100px 20px',
        background: '#fff'
      }}>
        <div style={{
          maxWidth: '1200px',
          margin: '0 auto'
        }}>
          <h2 style={{
            fontSize: '42px',
            textAlign: 'center',
            color: '#2c3e50',
            marginBottom: '20px',
            fontWeight: 'normal'
          }}>
            Photography that grows your business
          </h2>
          <p style={{
            textAlign: 'center',
            fontSize: '20px',
            color: '#6b7280',
            marginBottom: '80px',
            maxWidth: '700px',
            margin: '0 auto 80px'
          }}>
            Every image designed to solve a real business challenge
          </p>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: '40px'
          }}>
            {[
              {
                title: 'E-commerce that sells',
                description: 'Clean, consistent product shots on white backgrounds for your online shop. Plus lifestyle shots that show your products in use – because people buy experiences, not just products.'
              },
              {
                title: 'Your story, visualised',
                description: 'The vineyard at sunrise. Hands crafting. The moment of perfection. Images that make people care about who you are, not just what you sell.'
              },
              {
                title: 'Wholesale pitch deck',
                description: 'Professional images that get you into shops, delis, and restaurants. Show buyers you\'re serious, reliable, and worth the shelf space.'
              },
              {
                title: 'Social media library',
                description: 'Months of content from one shoot. Product reveals, behind-the-scenes, process shots – everything you need to stay consistent and professional online.'
              },
              {
                title: 'Seasonal campaigns',
                description: 'Christmas hampers, summer picnics, harvest celebrations. Timely shots that tap into buying moments throughout the year.'
              },
              {
                title: 'Award submissions',
                description: 'Great taste deserves recognition. Professional photos for competition entries, press releases, and winner announcements.'
              }
            ].map((solution, index) => (
              <div key={index} style={{
                background: '#fafaf8',
                padding: '40px 30px',
                borderRadius: '5px',
                textAlign: 'center',
                transition: 'all 0.3s'
              }}>
                <div style={{
                  width: '80px',
                  height: '80px',
                  margin: '0 auto 25px',
                  background: 'linear-gradient(135deg, #8b7355, #6b5a45)',
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '36px',
                  color: '#fff',
                  position: 'relative'
                }}>
                  <div style={{
                    width: '0',
                    height: '0',
                    borderLeft: '12px solid transparent',
                    borderRight: '12px solid transparent',
                    borderBottom: '18px solid white',
                    position: 'absolute',
                    top: '24px'
                  }} />
                  <div style={{
                    width: '0',
                    height: '0',
                    borderLeft: '12px solid transparent',
                    borderRight: '12px solid transparent',
                    borderTop: '18px solid white',
                    position: 'absolute',
                    bottom: '24px'
                  }} />
                </div>
                <h3 style={{
                  fontSize: '24px',
                  color: '#2c3e50',
                  marginBottom: '15px',
                  fontWeight: 'normal'
                }}>
                  {solution.title}
                </h3>
                <p style={{
                  color: '#6b7280',
                  lineHeight: '1.6'
                }}>
                  {solution.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section style={{
        padding: '100px 20px',
        background: '#fafaf8'
      }}>
        <div style={{
          maxWidth: '1200px',
          margin: '0 auto'
        }}>
          <h2 style={{
            fontSize: '42px',
            textAlign: 'center',
            color: '#2c3e50',
            marginBottom: '60px',
            fontWeight: 'normal'
          }}>
            How I work with producers like you
          </h2>

          <div style={{
            maxWidth: '1000px',
            margin: '0 auto',
            display: 'grid',
            gridTemplateColumns: 'repeat(4, 1fr)',
            gap: '40px'
          }}>
            {[
              {
                step: '1',
                title: 'Understanding your craft',
                description: 'We\'ll chat about your process, your customers, your competition. What makes you special? What do people not understand yet?'
              },
              {
                step: '2',
                title: 'Smart scheduling',
                description: 'One efficient day covering products, process, and people. We\'ll work around production schedules, using your space and natural light.'
              },
              {
                step: '3',
                title: 'Capture everything',
                description: 'Clean product shots for e-commerce. Atmospheric process shots. Founder portraits. Lifestyle scenes. Maximum value from minimal time.'
              },
              {
                step: '4',
                title: 'Ready to use',
                description: 'Within 72 hours: e-commerce images sized and optimised, social media content scheduled for months, print-ready files for packaging.'
              }
            ].map((process, index) => (
              <div key={index} style={{ textAlign: 'center', position: 'relative' }}>
                <div style={{
                  width: '80px',
                  height: '80px',
                  margin: '0 auto 25px',
                  background: '#fff',
                  border: '3px solid #8b7355',
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '28px',
                  color: '#8b7355',
                  fontWeight: 'normal'
                }}>
                  {process.step}
                </div>
                <h3 style={{
                  fontSize: '22px',
                  color: '#2c3e50',
                  marginBottom: '15px',
                  fontWeight: 'normal'
                }}>
                  {process.title}
                </h3>
                <p style={{
                  color: '#6b7280',
                  lineHeight: '1.6',
                  fontSize: '16px'
                }}>
                  {process.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ROI Section */}
      <section style={{
        padding: '100px 20px',
        background: 'linear-gradient(135deg, #2c3e50, #1a1a1a)',
        color: '#fff'
      }}>
        <div style={{
          maxWidth: '1000px',
          margin: '0 auto',
          textAlign: 'center'
        }}>
          <h2 style={{
            fontSize: '42px',
            marginBottom: '30px',
            fontWeight: 'normal'
          }}>
            The maths makes sense
          </h2>
          <p style={{
            fontSize: '20px',
            marginBottom: '60px',
            opacity: '0.9'
          }}>
            Based on actual results from producers I work with
          </p>

          <div style={{
            background: 'rgba(255,255,255,0.1)',
            padding: '50px',
            borderRadius: '5px',
            backdropFilter: 'blur(10px)',
            border: '1px solid rgba(255,255,255,0.2)'
          }}>
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(3, 1fr)',
              gap: '40px',
              marginBottom: '40px'
            }}>
              {[
                { value: '£1,500', label: 'Average investment' },
                { value: '35%', label: 'Online sales increase' },
                { value: '8 weeks', label: 'Typical payback period' }
              ].map((metric, index) => (
                <div key={index} style={{ textAlign: 'center' }}>
                  <div style={{
                    fontSize: '42px',
                    marginBottom: '10px',
                    color: '#8b7355'
                  }}>
                    {metric.value}
                  </div>
                  <div style={{
                    fontSize: '16px',
                    opacity: '0.9'
                  }}>
                    {metric.label}
                  </div>
                </div>
              ))}
            </div>

            <div style={{
              paddingTop: '30px',
              borderTop: '1px solid rgba(255,255,255,0.2)'
            }}>
              <p style={{
                fontSize: '24px',
                color: '#8b7355',
                fontStyle: 'italic'
              }}>
                "The photos paid for themselves with our first wholesale order"
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section style={{
        padding: '100px 20px',
        background: '#fff'
      }}>
        <div style={{
          maxWidth: '1200px',
          margin: '0 auto'
        }}>
          <h2 style={{
            fontSize: '42px',
            textAlign: 'center',
            color: '#2c3e50',
            marginBottom: '60px',
            fontWeight: 'normal'
          }}>
            Producers seeing real results
          </h2>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(2, 1fr)',
            gap: '50px',
            maxWidth: '1100px',
            margin: '0 auto'
          }}>
            {[
              {
                text: 'Small family vineyard competing with big brands. Rob understood immediately – we needed to show our story, not just our bottles. Online sales up 35% in three months, and we just landed Waitrose.',
                author: 'Emily Chen',
                business: 'Hillside Vineyard, Sussex',
                result: 'SALES +35%'
              },
              {
                text: 'We make craft gin but looked amateur online. One day with Rob gave us a year\'s worth of content. Website conversion doubled, and our Instagram finally looks like a premium brand.',
                author: 'James Morrison',
                business: 'Morrison\'s Gin, Edinburgh',
                result: '2X CONVERSION'
              }
            ].map((testimonial, index) => (
              <div key={index} style={{
                background: '#fafaf8',
                padding: '45px',
                borderRadius: '5px',
                position: 'relative'
              }}>
                <div style={{
                  position: 'absolute',
                  top: '20px',
                  left: '30px',
                  fontSize: '80px',
                  color: '#8b7355',
                  opacity: '0.2',
                  fontFamily: 'Georgia, serif'
                }}>
                  "
                </div>
                <p style={{
                  fontSize: '18px',
                  color: '#3a3a3a',
                  lineHeight: '1.7',
                  marginBottom: '30px',
                  fontStyle: 'italic',
                  position: 'relative',
                  zIndex: 2
                }}>
                  {testimonial.text}
                </p>
                <div style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center'
                }}>
                  <div>
                    <div style={{
                      fontSize: '16px',
                      color: '#2c3e50'
                    }}>
                      {testimonial.author}
                    </div>
                    <div style={{
                      fontSize: '14px',
                      color: '#6b7280',
                      marginTop: '5px'
                    }}>
                      {testimonial.business}
                    </div>
                  </div>
                  <div style={{
                    background: '#f0fdf4',
                    padding: '8px 16px',
                    borderRadius: '3px',
                    color: '#16a34a',
                    fontWeight: 'bold',
                    fontSize: '14px'
                  }}>
                    {testimonial.result}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section style={{
        padding: '100px 20px',
        background: '#fafaf8'
      }}>
        <div style={{
          maxWidth: '1400px',
          margin: '0 auto'
        }}>
          <h2 style={{
            fontSize: '42px',
            textAlign: 'center',
            color: '#2c3e50',
            marginBottom: '20px',
            fontWeight: 'normal'
          }}>
            Craft photography that sells
          </h2>
          <p style={{
            textAlign: 'center',
            fontSize: '20px',
            color: '#6b7280',
            marginBottom: '60px'
          }}>
            From hero shots to harvest moments
          </p>

          <div style={{
            display: 'flex',
            justifyContent: 'center',
            gap: '20px',
            marginBottom: '50px'
          }}>
            {['All Work', 'Wine & Spirits', 'Food Products', 'Process & People'].map((tab, index) => (
              <button key={index} style={{
                padding: '10px 25px',
                background: index === 0 ? '#8b7355' : '#fff',
                border: '2px solid #8b7355',
                color: index === 0 ? '#fff' : '#8b7355',
                borderRadius: '5px',
                fontSize: '16px',
                cursor: 'pointer',
                transition: 'all 0.3s',
                fontFamily: 'Georgia, serif'
              }}>
                {tab}
              </button>
            ))}
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: '25px'
          }}>
            {[
              { src: '/images/winery.jpg', caption: 'Hillside Vineyard - Cellar collection', hero: true },
              { src: '/images/restaurant.jpg', caption: 'Valley Farm Cheese - Product range' },
              { src: '/images/gastropub.jpg', caption: 'Morrison\'s Gin - Distillation' },
              { src: '/images/hotel.jpg', caption: 'Kent Hops - Harvest season' },
              { src: '/images/venue-space.jpg', caption: 'Sussex Gold - Hero product shot' },
              { src: '/images/hero-venue.jpg', caption: 'Origin Coffee - Roasting process' },
              { src: '/images/restaurant.jpg', caption: 'Garden Preserves - Full range' },
              { src: '/images/gastropub.jpg', caption: 'Craft Collective - Founder portrait' }
            ].map((item, index) => (
              <div key={index} style={{
                position: 'relative',
                overflow: 'hidden',
                borderRadius: '5px',
                aspectRatio: item.hero ? '1' : '4/3',
                gridColumn: item.hero ? 'span 2' : 'span 1',
                gridRow: item.hero ? 'span 2' : 'span 1',
                cursor: 'pointer',
                transition: 'all 0.3s',
                background: '#f3f4f6'
              }}>
                <img
                  src={item.src}
                  alt={item.caption}
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    transition: 'transform 0.5s',
                    cursor: 'pointer'
                  }}
                  onClick={() => openModal(item.src, item.caption)}
                  onError={(e) => {
                    (e.target as HTMLElement).style.display = 'none';
                    ((e.target as HTMLElement).nextSibling as HTMLElement).style.display = 'flex';
                  }}
                />
                <div style={{
                  display: 'none',
                  width: '100%',
                  height: '100%',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#888',
                  fontSize: '1em'
                }}>
                  {item.caption}
                </div>
                <div style={{
                  position: 'absolute',
                  bottom: 0,
                  left: 0,
                  right: 0,
                  padding: '20px',
                  background: 'linear-gradient(to top, rgba(0,0,0,0.8), transparent)',
                  color: '#fff',
                  transform: 'translateY(100%)',
                  transition: 'transform 0.3s'
                }}>
                  <p>{item.caption}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Packages Section */}
      <section style={{
        padding: '100px 20px',
        background: '#fff'
      }}>
        <div style={{
          maxWidth: '1100px',
          margin: '0 auto'
        }}>
          <h2 style={{
            fontSize: '42px',
            textAlign: 'center',
            color: '#2c3e50',
            marginBottom: '30px',
            fontWeight: 'normal'
          }}>
            Investment options for independent producers
          </h2>
          <p style={{
            textAlign: 'center',
            fontSize: '20px',
            color: '#6b7280',
            marginBottom: '80px',
            maxWidth: '700px',
            margin: '0 auto 80px'
          }}>
            Designed for small businesses that need maximum impact from every pound spent
          </p>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: '40px'
          }}>
            {[
              {
                name: 'Starter Pack',
                price: '£750',
                frequency: 'Half-day shoot',
                features: [
                  '5-8 product shots on white',
                  'Basic lifestyle scenes',
                  'E-commerce ready files',
                  '10 social media images',
                  '48-hour turnaround'
                ],
                popular: false,
                cta: 'Get Started'
              },
              {
                name: 'Full Story',
                price: '£1,500',
                frequency: 'Full day',
                features: [
                  'Complete product range shots',
                  'Process & production images',
                  'Founder/team portraits',
                  'Lifestyle & usage scenes',
                  'Venue/location shots',
                  '50+ final images',
                  'Wholesale pitch deck images',
                  '3-month social calendar'
                ],
                popular: true,
                cta: 'Most Popular'
              },
              {
                name: 'Seasonal Bundle',
                price: '£2,500',
                frequency: '4x mini shoots/year',
                features: [
                  'Quarterly 3-hour shoots',
                  'Seasonal products & campaigns',
                  'Christmas, Easter, Summer, Harvest',
                  'Fresh content year-round',
                  'Priority scheduling',
                  '20% saving vs single shoots'
                ],
                popular: false,
                cta: 'Plan Ahead'
              }
            ].map((pkg, index) => (
              <div key={index} style={{
                background: '#fafaf8',
                borderRadius: '5px',
                overflow: 'hidden',
                transition: 'all 0.3s',
                border: pkg.popular ? '2px solid #8b7355' : '2px solid transparent',
                position: 'relative'
              }}>
                {pkg.popular && (
                  <div style={{
                    position: 'absolute',
                    top: '15px',
                    right: '-30px',
                    background: '#8b7355',
                    color: '#fff',
                    padding: '5px 40px',
                    transform: 'rotate(45deg)',
                    fontSize: '12px',
                    letterSpacing: '1px',
                    zIndex: 10
                  }}>
                    MOST POPULAR
                  </div>
                )}
                <div style={{
                  padding: '35px 30px',
                  background: '#fff',
                  borderBottom: '1px solid #e5e7eb'
                }}>
                  <h3 style={{
                    fontSize: '28px',
                    color: '#2c3e50',
                    marginBottom: '10px',
                    fontWeight: 'normal'
                  }}>
                    {pkg.name}
                  </h3>
                  <div style={{
                    fontSize: '20px',
                    color: '#8b7355',
                    marginBottom: '10px'
                  }}>
                    {pkg.price}
                  </div>
                  <div style={{
                    fontSize: '14px',
                    color: '#6b7280'
                  }}>
                    {pkg.frequency}
                  </div>
                </div>
                <div style={{ padding: '30px' }}>
                  <ul style={{ listStyle: 'none', padding: 0 }}>
                    {pkg.features.map((feature, idx) => (
                      <li key={idx} style={{
                        padding: '12px 0',
                        color: '#3a3a3a',
                        display: 'flex',
                        alignItems: 'start',
                        gap: '10px'
                      }}>
                        <span style={{
                          color: '#8b7355',
                          fontWeight: 'bold',
                          marginTop: '2px'
                        }}>✓</span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
                <div style={{ padding: '0 30px 30px' }}>
                  <Link
                    href="/booking"
                    style={{
                      display: 'block',
                      width: '100%',
                      padding: '15px',
                      background: '#8b7355',
                      color: '#fff',
                      textAlign: 'center',
                      textDecoration: 'none',
                      borderRadius: '5px',
                      fontFamily: '-apple-system, sans-serif',
                      textTransform: 'uppercase',
                      letterSpacing: '1px',
                      transition: 'all 0.3s',
                      cursor: 'pointer'
                    }}
                    onMouseEnter={(e) => {
                      (e.target as HTMLElement).style.background = '#6b5a45';
                      (e.target as HTMLElement).style.transform = 'translateY(-2px)';
                    }}
                    onMouseLeave={(e) => {
                      (e.target as HTMLElement).style.background = '#8b7355';
                      (e.target as HTMLElement).style.transform = 'translateY(0)';
                    }}
                  >
                    {pkg.cta}
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section style={{
        padding: '120px 20px',
        background: 'linear-gradient(rgba(139, 115, 85, 0.9), rgba(107, 90, 69, 0.9)), url("/images/winery.jpg")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        color: '#fff',
        textAlign: 'center'
      }}>
        <div style={{
          maxWidth: '1200px',
          margin: '0 auto'
        }}>
          <h2 style={{
            fontSize: '48px',
            marginBottom: '25px',
            fontWeight: 'normal',
            maxWidth: '800px',
            margin: '0 auto 25px'
          }}>
            Ready to compete with the big brands?
          </h2>
          <p style={{
            fontSize: '22px',
            marginBottom: '50px',
            maxWidth: '700px',
            margin: '0 auto 50px',
            opacity: '0.95'
          }}>
            You've got the quality. You've got the story. Now let's give you the images that show the world why your craft is worth choosing.
          </p>

          <div style={{
            display: 'flex',
            gap: '30px',
            justifyContent: 'center',
            flexWrap: 'wrap'
          }}>
            <Link
              href="/booking"
              style={{
                display: 'inline-block',
                padding: '20px 50px',
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
              Let's Talk Strategy
            </Link>
            <Link
              href="/blog"
              style={{
                display: 'inline-block',
                padding: '20px 50px',
                background: 'transparent',
                color: '#fff',
                textDecoration: 'none',
                border: '2px solid #fff',
                borderRadius: '5px',
                fontSize: '18px',
                fontFamily: '-apple-system, sans-serif',
                textTransform: 'uppercase',
                letterSpacing: '2px',
                transition: 'all 0.3s',
                cursor: 'pointer'
              }}
              onMouseEnter={(e) => {
                (e.target as HTMLElement).style.background = 'rgba(255,255,255,0.1)';
                (e.target as HTMLElement).style.transform = 'translateY(-2px)';
              }}
              onMouseLeave={(e) => {
                (e.target as HTMLElement).style.background = 'transparent';
                (e.target as HTMLElement).style.transform = 'translateY(0)';
              }}
            >
              See More Work
            </Link>
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

export default WineriesPage