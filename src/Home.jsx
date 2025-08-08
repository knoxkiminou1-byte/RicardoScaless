
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div>
      {/* Navigation Header */}
      <header style={{
        position: 'fixed',
        top: 0,
        width: '100%',
        backgroundColor: 'rgba(0, 0, 0, 0.9)',
        backdropFilter: 'blur(10px)',
        zIndex: 1000,
        padding: '20px 0'
      }}>
        <div style={{
          maxWidth: '1200px',
          margin: '0 auto',
          padding: '0 20px',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center'
        }}>
          <div style={{
            fontSize: '28px',
            fontFamily: "'Playfair Display', serif",
            color: '#C28840',
            fontWeight: '600'
          }}>
            Ricardo Scales
          </div>
          
          {/* Desktop Navigation */}
          <nav style={{
            display: 'flex',
            gap: '40px'
          }}>
            <Link to="/" style={{
              color: '#C28840',
              textDecoration: 'none',
              fontSize: '16px',
              fontWeight: '500',
              transition: 'color 0.3s ease'
            }}>Home</Link>
            <Link to="/bio" style={{
              color: 'white',
              textDecoration: 'none',
              fontSize: '16px',
              fontWeight: '500',
              transition: 'color 0.3s ease'
            }}>Bio</Link>
            <Link to="/music" style={{
              color: 'white',
              textDecoration: 'none',
              fontSize: '16px',
              fontWeight: '500',
              transition: 'color 0.3s ease'
            }}>Music</Link>
            <Link to="/contact" style={{
              color: 'white',
              textDecoration: 'none',
              fontSize: '16px',
              fontWeight: '500',
              transition: 'color 0.3s ease'
            }}>Contact</Link>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="home-mobile-menu-btn"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            style={{
              background: 'none',
              border: 'none',
              color: 'white',
              fontSize: '24px',
              cursor: 'pointer'
            }}
          >
            ☰
          </button>
        </div>

        {/* Mobile Navigation Menu */}
        {isMenuOpen && (
          <div style={{
            backgroundColor: 'rgba(0, 0, 0, 0.95)',
            padding: '20px',
            position: 'absolute',
            top: '100%',
            left: 0,
            right: 0
          }}>
            <nav style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '20px',
              alignItems: 'center'
            }}>
              <Link to="/" style={{
                color: '#C28840',
                textDecoration: 'none',
                fontSize: '18px',
                fontWeight: '500'
              }} onClick={() => setIsMenuOpen(false)}>Home</Link>
              <Link to="/bio" style={{
                color: 'white',
                textDecoration: 'none',
                fontSize: '18px',
                fontWeight: '500'
              }} onClick={() => setIsMenuOpen(false)}>Bio</Link>
              <Link to="/music" style={{
                color: 'white',
                textDecoration: 'none',
                fontSize: '18px',
                fontWeight: '500'
              }} onClick={() => setIsMenuOpen(false)}>Music</Link>
              <Link to="/contact" style={{
                color: 'white',
                textDecoration: 'none',
                fontSize: '18px',
                fontWeight: '500'
              }} onClick={() => setIsMenuOpen(false)}>Contact</Link>
            </nav>
          </div>
        )}
      </header>

      {/* Hero Section */}
      <section style={{
        height: '100vh',
        backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.6)), url("/attached_assets/ricardo upsclaed_1753392463500.png")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: 'white',
        textAlign: 'center'
      }}>
        <div style={{
          maxWidth: '800px',
          padding: '0 20px'
        }}>
          <h1 style={{
            fontSize: 'clamp(3rem, 8vw, 6rem)',
            fontFamily: "'Playfair Display', serif",
            marginBottom: '20px',
            fontWeight: '400',
            lineHeight: '1.1'
          }}>
            Ricardo Scales:
          </h1>
          <h2 style={{
            fontSize: 'clamp(1.5rem, 4vw, 2.5rem)',
            fontFamily: "'Playfair Display', serif",
            color: '#C28840',
            marginBottom: '30px',
            fontWeight: '400'
          }}>
            Composer, Civic Virtuoso, Cultural Pillar
          </h2>
          <p style={{
            fontSize: 'clamp(1rem, 2vw, 1.2rem)',
            lineHeight: '1.6',
            marginBottom: '40px',
            color: 'rgba(255,255,255,0.9)'
          }}>
            Experience the timeless artistry of Ricardo Scales, whose musical genius transcends genres and transforms spaces. His compositions blend classical precision with jazz improvisation, creating unforgettable musical journeys that captivate audiences worldwide.
          </p>
          <div style={{
            display: 'flex',
            gap: '20px',
            justifyContent: 'center',
            flexWrap: 'wrap'
          }}>
            <Link to="/contact" style={{
              backgroundColor: 'transparent',
              color: 'white',
              border: '2px solid white',
              padding: '15px 30px',
              textDecoration: 'none',
              fontSize: '16px',
              fontWeight: '500',
              borderRadius: '5px',
              transition: 'all 0.3s ease'
            }}>
              Book an Event
            </Link>
            <Link to="/music" style={{
              backgroundColor: '#C28840',
              color: 'white',
              padding: '15px 30px',
              textDecoration: 'none',
              fontSize: '16px',
              fontWeight: '500',
              borderRadius: '5px',
              transition: 'all 0.3s ease'
            }}>
              Explore Music
            </Link>
          </div>
        </div>
      </section>

      {/* Legacy Section with Three Cards */}
      <section style={{
        backgroundColor: '#C28840',
        padding: '80px 20px'
      }}>
        <div style={{
          maxWidth: '1200px',
          margin: '0 auto',
          textAlign: 'center'
        }}>
          <h2 style={{
            fontSize: 'clamp(2.5rem, 6vw, 4rem)',
            fontFamily: "'Playfair Display', serif",
            color: 'white',
            marginBottom: '60px',
            fontWeight: '400'
          }}>
            A Legacy of Musical Excellence
          </h2>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
            gap: '40px',
            marginBottom: '60px'
          }}>
            {/* Card 1: The Hand That Wouldn't Quit */}
            <div style={{
              backgroundColor: 'rgba(255, 255, 255, 0.1)',
              borderRadius: '15px',
              padding: '40px 30px',
              backdropFilter: 'blur(10px)',
              border: '1px solid rgba(255, 255, 255, 0.2)',
              textAlign: 'left'
            }}>
              <h3 style={{
                fontSize: '1.5rem',
                fontFamily: "'Playfair Display', serif",
                color: 'white',
                marginBottom: '20px',
                fontWeight: '600'
              }}>
                The Hand That Wouldn't Quit
              </h3>
              <p style={{
                fontSize: '1rem',
                color: 'rgba(255,255,255,0.9)',
                lineHeight: '1.6',
                marginBottom: '15px'
              }}>
                When a devastating accident threatened to end his career, Ricardo defied medical expectations and the limitations of traditional recovery.
              </p>
              <p style={{
                fontSize: '1rem',
                color: 'rgba(255,255,255,0.9)',
                lineHeight: '1.6'
              }}>
                Through sheer determination and innovative techniques, he not only returned to the piano but emerged stronger, proving that true artistry transcends physical boundaries.
              </p>
            </div>

            {/* Card 2: Where Legends Come to Play */}
            <div style={{
              backgroundColor: 'rgba(255, 255, 255, 0.1)',
              borderRadius: '15px',
              padding: '40px 30px',
              backdropFilter: 'blur(10px)',
              border: '1px solid rgba(255, 255, 255, 0.2)',
              textAlign: 'left'
            }}>
              <h3 style={{
                fontSize: '1.5rem',
                fontFamily: "'Playfair Display', serif",
                color: 'white',
                marginBottom: '20px',
                fontWeight: '600'
              }}>
                Where Legends Come to Play
              </h3>
              <p style={{
                fontSize: '1rem',
                color: 'rgba(255,255,255,0.9)',
                lineHeight: '1.6',
                marginBottom: '15px'
              }}>
                From San Francisco's prestigious Redwood Room to the iconic Top of the Mark, Ricardo transformed venues into magnetic destinations.
              </p>
              <p style={{
                fontSize: '1rem',
                color: 'rgba(255,255,255,0.9)',
                lineHeight: '1.6'
              }}>
                Touring superstars like Billy Joel, Harry Connick Jr., and Liza Minnelli would abandon their hotel rooms to join him for impromptu musical collaborations.
              </p>
            </div>

            {/* Card 3: The Presidential Pianist */}
            <div style={{
              backgroundColor: 'rgba(255, 255, 255, 0.1)',
              borderRadius: '15px',
              padding: '40px 30px',
              backdropFilter: 'blur(10px)',
              border: '1px solid rgba(255, 255, 255, 0.2)',
              textAlign: 'left'
            }}>
              <h3 style={{
                fontSize: '1.5rem',
                fontFamily: "'Playfair Display', serif",
                color: 'white',
                marginBottom: '20px',
                fontWeight: '600'
              }}>
                The Presidential Pianist
              </h3>
              <p style={{
                fontSize: '1rem',
                color: 'rgba(255,255,255,0.9)',
                lineHeight: '1.6',
                marginBottom: '15px'
              }}>
                When President Obama visited San Francisco, there was only one pianist the city trusted to represent its musical soul.
              </p>
              <p style={{
                fontSize: '1rem',
                color: 'rgba(255,255,255,0.9)',
                lineHeight: '1.6'
              }}>
                Ricardo's performance became a defining moment, showcasing how music serves as the ultimate ambassador of culture and community.
              </p>
            </div>
          </div>

          {/* Quote Section */}
          <div style={{
            maxWidth: '800px',
            margin: '0 auto',
            padding: '40px',
            backgroundColor: 'rgba(255, 255, 255, 0.1)',
            borderRadius: '15px',
            backdropFilter: 'blur(10px)',
            border: '1px solid rgba(255, 255, 255, 0.2)'
          }}>
            <blockquote style={{
              fontSize: '1.4rem',
              fontStyle: 'italic',
              color: 'white',
              lineHeight: '1.6',
              margin: '0 0 20px 0',
              textAlign: 'center'
            }}>
              "Music is what I do; it's who I am. Each note carries the story of our collective journey, the rhythm of our shared humanity."
            </blockquote>
            <cite style={{
              fontSize: '1.1rem',
              color: 'white',
              fontWeight: '600'
            }}>
              — Ricardo Scales
            </cite>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;
