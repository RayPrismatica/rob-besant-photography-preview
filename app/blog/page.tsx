'use client'

import React, { useState } from 'react'
import Link from 'next/link'

const BlogPage = () => {
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

  const blogPosts = [
    {
      id: 1,
      title: "The Art of Food Photography: Lighting Techniques That Make Dishes Irresistible",
      excerpt: "Discover the lighting secrets that transform ordinary dishes into extraordinary visual experiences that drive customer appetite and engagement.",
      date: "2024-01-15",
      readTime: "5 min read",
      category: "Photography Tips",
      image: "/images/blog-food-lighting.jpg"
    },
    {
      id: 2,
      title: "Brand Storytelling Through Visual Content: A Restaurant's Guide",
      excerpt: "How restaurants and hospitality brands can use photography to tell their unique story and connect with their ideal customers.",
      date: "2024-01-08",
      readTime: "7 min read",
      category: "Brand Strategy",
      image: "/images/blog-brand-storytelling.jpg"
    },
    {
      id: 3,
      title: "Behind the Scenes: Photographing Award-Winning Cocktail Bars",
      excerpt: "Take a look behind the camera as we capture the atmosphere and craft that makes upscale cocktail bars unforgettable.",
      date: "2024-01-01",
      readTime: "4 min read",
      category: "Behind the Scenes",
      image: "/images/blog-cocktail-bars.jpg"
    },
    {
      id: 4,
      title: "Why Professional Photography ROI Matters for Hospitality Brands",
      excerpt: "Understanding how quality photography investments translate into increased bookings, higher perceived value, and stronger brand recognition.",
      date: "2023-12-18",
      readTime: "6 min read",
      category: "Business Strategy",
      image: "/images/blog-photography-roi.jpg"
    },
    {
      id: 5,
      title: "Seasonal Menu Photography: Capturing the Essence of Each Season",
      excerpt: "Learn how seasonal photography campaigns can keep your brand fresh and relevant while showcasing your culinary creativity.",
      date: "2023-12-11",
      readTime: "5 min read",
      category: "Photography Tips",
      image: "/images/blog-seasonal-menus.jpg"
    },
    {
      id: 6,
      title: "The Complete Guide to Winery Photography: From Vineyard to Glass",
      excerpt: "Everything you need to know about creating compelling visual content for wineries and wine brands that tells your complete story.",
      date: "2023-12-04",
      readTime: "8 min read",
      category: "Industry Focus",
      image: "/images/blog-winery-guide.jpg"
    }
  ]

  return (
    <div style={{
      fontFamily: 'Georgia, serif',
      lineHeight: '1.7',
      color: '#3a3a3a',
      background: '#fafaf8'
    }}>
      {/* Hero Section */}
      <section style={{
        padding: '140px 20px 80px',
        textAlign: 'center',
        maxWidth: '800px',
        margin: '0 auto'
      }}>
        <h1 style={{
          fontSize: '3em',
          fontWeight: 'normal',
          marginBottom: '30px',
          color: '#2c3e50'
        }}>
          Insights & Stories
        </h1>
        <p style={{
          fontSize: '1.3em',
          color: '#5a5a5a',
          maxWidth: '600px',
          margin: '0 auto',
          lineHeight: '1.6'
        }}>
          Photography insights, brand storytelling tips, and behind-the-scenes stories from the world of hospitality photography.
        </p>
      </section>

      {/* Featured Post */}
      <section style={{
        maxWidth: '1200px',
        margin: '0 auto 80px',
        padding: '0 20px'
      }}>
        <div style={{
          background: 'white',
          borderRadius: '15px',
          overflow: 'hidden',
          boxShadow: '0 15px 40px rgba(0,0,0,0.1)',
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          minHeight: '400px'
        }}>
          <div
            style={{
              background: '#ddd',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: '#888',
              fontSize: '1.2em',
              cursor: 'pointer',
              transition: 'transform 0.3s ease'
            }}
            onClick={() => openModal(blogPosts[0].image, 'Featured Article Image')}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'scale(1.05)'
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'scale(1)'
            }}
          >
            Featured Article Image
          </div>
          <div style={{
            padding: '60px 50px',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center'
          }}>
            <div style={{
              background: '#e8c547',
              color: 'white',
              padding: '5px 15px',
              borderRadius: '20px',
              fontSize: '0.9em',
              alignSelf: 'flex-start',
              marginBottom: '20px'
            }}>
              Featured
            </div>
            <h2 style={{
              fontSize: '1.8em',
              fontWeight: 'normal',
              marginBottom: '20px',
              color: '#2c3e50',
              lineHeight: '1.3'
            }}>
              {blogPosts[0].title}
            </h2>
            <p style={{
              marginBottom: '25px',
              color: '#666',
              lineHeight: '1.6'
            }}>
              {blogPosts[0].excerpt}
            </p>
            <div style={{
              display: 'flex',
              alignItems: 'center',
              gap: '20px',
              marginBottom: '25px',
              fontSize: '0.9em',
              color: '#888'
            }}>
              <span>{blogPosts[0].date}</span>
              <span>•</span>
              <span>{blogPosts[0].readTime}</span>
            </div>
            <Link
              href={`/blog/${blogPosts[0].id}`}
              style={{
                display: 'inline-block',
                background: '#2c3e50',
                color: 'white',
                padding: '12px 30px',
                textDecoration: 'none',
                borderRadius: '25px',
                fontSize: '1em',
                transition: 'all 0.3s ease',
                alignSelf: 'flex-start'
              }}
            >
              Read Article
            </Link>
          </div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section style={{
        maxWidth: '1200px',
        margin: '0 auto',
        padding: '0 20px'
      }}>
        <h2 style={{
          fontSize: '2.2em',
          fontWeight: 'normal',
          marginBottom: '50px',
          color: '#2c3e50',
          textAlign: 'center'
        }}>
          Recent Articles
        </h2>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
          gap: '40px',
          marginBottom: '80px'
        }}>
          {blogPosts.slice(1).map((post) => (
            <article key={post.id} style={{
              background: 'white',
              borderRadius: '10px',
              overflow: 'hidden',
              boxShadow: '0 10px 25px rgba(0,0,0,0.08)',
              transition: 'transform 0.3s ease, box-shadow 0.3s ease',
              cursor: 'pointer'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-5px)'
              e.currentTarget.style.boxShadow = '0 15px 35px rgba(0,0,0,0.12)'
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateY(0)'
              e.currentTarget.style.boxShadow = '0 10px 25px rgba(0,0,0,0.08)'
            }}
            >
              <div
                style={{
                  height: '200px',
                  background: '#ddd',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#888',
                  fontSize: '1em',
                  cursor: 'pointer',
                  transition: 'transform 0.3s ease'
                }}
                onClick={() => openModal(post.image, `Article Image ${post.id}`)}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'scale(1.05)'
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'scale(1)'
                }}
              >
                Article Image {post.id}
              </div>
              <div style={{ padding: '30px' }}>
                <div style={{
                  background: '#f0f0f0',
                  color: '#666',
                  padding: '4px 12px',
                  borderRadius: '15px',
                  fontSize: '0.8em',
                  alignSelf: 'flex-start',
                  marginBottom: '15px',
                  display: 'inline-block'
                }}>
                  {post.category}
                </div>
                <h3 style={{
                  fontSize: '1.3em',
                  fontWeight: 'normal',
                  marginBottom: '15px',
                  color: '#2c3e50',
                  lineHeight: '1.4'
                }}>
                  {post.title}
                </h3>
                <p style={{
                  marginBottom: '20px',
                  color: '#666',
                  lineHeight: '1.6',
                  fontSize: '0.95em'
                }}>
                  {post.excerpt}
                </p>
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '15px',
                  marginBottom: '20px',
                  fontSize: '0.85em',
                  color: '#888'
                }}>
                  <span>{post.date}</span>
                  <span>•</span>
                  <span>{post.readTime}</span>
                </div>
                <Link
                  href={`/blog/${post.id}`}
                  style={{
                    color: '#2c3e50',
                    textDecoration: 'none',
                    fontWeight: 'normal',
                    fontSize: '0.95em',
                    borderBottom: '1px solid transparent',
                    transition: 'border-bottom 0.3s ease'
                  }}
                  onMouseEnter={(e) => {
                    e.target.style.borderBottom = '1px solid #2c3e50'
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.borderBottom = '1px solid transparent'
                  }}
                >
                  Read More →
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Newsletter Signup */}
      <section style={{
        background: '#2c3e50',
        color: 'white',
        padding: '80px 20px',
        textAlign: 'center'
      }}>
        <div style={{
          maxWidth: '600px',
          margin: '0 auto'
        }}>
          <h2 style={{
            fontSize: '2.2em',
            fontWeight: 'normal',
            marginBottom: '20px'
          }}>
            Stay Updated
          </h2>
          <p style={{
            fontSize: '1.1em',
            marginBottom: '40px',
            opacity: '0.9',
            lineHeight: '1.6'
          }}>
            Get photography insights, industry tips, and behind-the-scenes stories delivered to your inbox monthly.
          </p>
          <div style={{
            display: 'flex',
            gap: '15px',
            maxWidth: '400px',
            margin: '0 auto',
            flexWrap: 'wrap',
            justifyContent: 'center'
          }}>
            <input
              type="email"
              placeholder="Your email address"
              style={{
                flex: '1',
                minWidth: '200px',
                padding: '15px 20px',
                borderRadius: '25px',
                border: 'none',
                fontSize: '1em',
                outline: 'none'
              }}
            />
            <button style={{
              background: '#e8c547',
              color: 'white',
              padding: '15px 30px',
              border: 'none',
              borderRadius: '25px',
              fontSize: '1em',
              cursor: 'pointer',
              transition: 'background 0.3s ease'
            }}
            onMouseEnter={(e) => {
              e.target.style.background = '#d4b03a'
            }}
            onMouseLeave={(e) => {
              e.target.style.background = '#e8c547'
            }}
            >
              Subscribe
            </button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section style={{
        padding: '100px 20px',
        textAlign: 'center',
        background: '#fafaf8'
      }}>
        <div style={{
          maxWidth: '700px',
          margin: '0 auto'
        }}>
          <h2 style={{
            fontSize: '2.5em',
            fontWeight: 'normal',
            marginBottom: '25px',
            color: '#2c3e50'
          }}>
            Ready to Create Stunning Visuals?
          </h2>
          <p style={{
            fontSize: '1.2em',
            marginBottom: '40px',
            color: '#5a5a5a',
            lineHeight: '1.6'
          }}>
            Let's discuss how professional photography can elevate your hospitality brand and drive real business results.
          </p>
          <div style={{
            display: 'flex',
            gap: '20px',
            justifyContent: 'center',
            flexWrap: 'wrap'
          }}>
            <Link
              href="/booking"
              style={{
                display: 'inline-block',
                background: '#2c3e50',
                color: 'white',
                padding: '18px 40px',
                textDecoration: 'none',
                borderRadius: '30px',
                fontSize: '1.1em',
                transition: 'all 0.3s ease'
              }}
            >
              Book Consultation
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
            right: 0,
            bottom: 0,
            background: 'rgba(0, 0, 0, 0.9)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            zIndex: 1000,
            padding: '20px'
          }}
          onClick={closeModal}
        >
          <div style={{
            position: 'relative',
            maxWidth: '90vw',
            maxHeight: '90vh'
          }}>
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
              onClick={(e) => {
                e.stopPropagation()
                closeModal()
              }}
              style={{
                position: 'absolute',
                top: '10px',
                right: '10px',
                background: 'rgba(255, 255, 255, 0.2)',
                border: 'none',
                borderRadius: '50%',
                width: '40px',
                height: '40px',
                fontSize: '20px',
                color: 'white',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                transition: 'background 0.3s ease'
              }}
              onMouseEnter={(e) => {
                e.target.style.background = 'rgba(255, 255, 255, 0.3)'
              }}
              onMouseLeave={(e) => {
                e.target.style.background = 'rgba(255, 255, 255, 0.2)'
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

export default BlogPage