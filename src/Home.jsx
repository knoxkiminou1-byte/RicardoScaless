
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div style={{
      minHeight: '100vh',
      backgroundColor: '#000000',
      color: 'white',
      fontFamily: "'Playfair Display', serif"
    }}>
      {/* Navigation Header */}
      <header className="home-header">
        <div className="home-nav-container">
          <div className="home-logo">
            <Link to="/" style={{ color: 'inherit', textDecoration: 'none' }}>Ricardo Scales</Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="home-desktop-nav">
            <Link to="/" style={{
              color: '#C28840',
              textDecoration: 'none',
              fontSize: '16px',
              fontWeight: '400',
              transition: 'color 0.3s ease'
            }}>Home</Link>
            <Link to="/bio" style={{
              color: 'white',
              textDecoration: 'none',
              fontSize: '16px',
              fontWeight: '400',
              transition: 'color 0.3s ease'
            }}>Bio</Link>
            <Link to="/music" style={{
              color: 'white',
              textDecoration: 'none',
              fontSize: '16px',
              fontWeight: '400',
              transition: 'color 0.3s ease'
            }}>Music</Link>
            <Link to="/contact" style={{
              color: 'white',
              textDecoration: 'none',
              fontSize: '16px',
              fontWeight: '400',
              transition: 'color 0.3s ease'
            }}>Contact</Link>
          </nav>

          {/* Mobile Hamburger Menu */}
          <button
            className="home-mobile-menu-btn"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            ☰
          </button>
        </div>

        {/* Mobile Navigation Menu */}
        {isMenuOpen && (
          <div className="home-mobile-nav">
            <nav className="home-mobile-nav-links">
              <Link to="/" style={{
                color: '#C28840',
                textDecoration: 'none',
                fontSize: '18px',
                fontWeight: '400',
                transition: 'color 0.3s ease',
                padding: '10px 0'
              }} onClick={() => setIsMenuOpen(false)}>Home</Link>
              <Link to="/bio" style={{
                color: 'white',
                textDecoration: 'none',
                fontSize: '18px',
                fontWeight: '400',
                transition: 'color 0.3s ease',
                padding: '10px 0'
              }} onClick={() => setIsMenuOpen(false)}>Bio</Link>
              <Link to="/music" style={{
                color: 'white',
                textDecoration: 'none',
                fontSize: '18px',
                fontWeight: '400',
                transition: 'color 0.3s ease',
                padding: '10px 0'
              }} onClick={() => setIsMenuOpen(false)}>Music</Link>
              <Link to="/contact" style={{
                color: 'white',
                textDecoration: 'none',
                fontSize: '18px',
                fontWeight: '400',
                transition: 'color 0.3s ease',
                padding: '10px 0'
              }} onClick={() => setIsMenuOpen(false)}>Contact</Link>
            </nav>
          </div>
        )}
      </header>

      {/* Hero Section */}
      <section style={{
        minHeight: '100vh',
        background: 'linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.8)), url("/attached_assets/Untitled design (50).png")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '100px 15px 0',
        textAlign: 'center'
      }}>
        <div style={{
          maxWidth: '900px',
          width: '100%'
        }}>
          <h1 style={{
            fontSize: 'clamp(2.5rem, 8vw, 6rem)',
            fontFamily: "'Playfair Display', serif",
            color: '#C28840',
            marginBottom: '20px',
            fontWeight: '400',
            lineHeight: '1.1'
          }}>
            Ricardo Scales
          </h1>
          <div style={{
            fontSize: 'clamp(1rem, 4vw, 1.5rem)',
            color: 'rgba(255,255,255,0.9)',
            marginBottom: '30px',
            fontStyle: 'italic'
          }}>
            "The Black Liberace" • "The Black Prince"
          </div>
          <div style={{
            fontSize: 'clamp(0.9rem, 2.5vw, 1.25rem)',
            color: '#C28840',
            fontWeight: '500',
            letterSpacing: '1px',
            marginBottom: '40px'
          }}>
            PIANIST • COMPOSER • CULTURAL AMBASSADOR
          </div>
          
          {/* Hero Buttons */}
          <div style={{
            display: 'flex',
            gap: '20px',
            justifyContent: 'center',
            flexWrap: 'wrap'
          }}>
            <Link to="/music" style={{
              backgroundColor: '#C28840',
              color: 'white',
              padding: '15px 30px',
              textDecoration: 'none',
              fontSize: 'clamp(14px, 3vw, 16px)',
              fontWeight: '500',
              borderRadius: '5px',
              transition: 'all 0.3s ease',
              minWidth: '120px',
              textAlign: 'center'
            }}>
              Listen Now
            </Link>
            <Link to="/contact" style={{
              backgroundColor: 'transparent',
              color: 'white',
              border: '2px solid white',
              padding: '15px 30px',
              textDecoration: 'none',
              fontSize: 'clamp(14px, 3vw, 16px)',
              fontWeight: '500',
              borderRadius: '5px',
              transition: 'all 0.3s ease',
              minWidth: '120px',
              textAlign: 'center'
            }}>
              Book Event
            </Link>
          </div>
        </div>
      </section>

      {/* Musical Journey Section */}
      <section style={{
        backgroundColor: '#000000',
        padding: '60px 15px'
      }}>
        <div style={{
          maxWidth: '1200px',
          margin: '0 auto'
        }}>
          <h2 style={{
            fontSize: 'clamp(2rem, 6vw, 3.5rem)',
            fontFamily: "'Playfair Display', serif",
            color: '#C28840',
            textAlign: 'center',
            marginBottom: '20px',
            fontWeight: '400'
          }}>
            A Musical Journey
          </h2>
          <p style={{
            fontSize: 'clamp(1rem, 3vw, 1.2rem)',
            textAlign: 'center',
            color: 'rgba(255,255,255,0.8)',
            marginBottom: '50px',
            lineHeight: '1.6'
          }}>
            Four decades of musical excellence, cultural impact, and artistic innovation
          </p>

          {/* Cards Grid - Mobile Optimized */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: '1fr',
            gap: '30px',
            width: '100%'
          }}>
            {/* Card 1 */}
            <div style={{
              backgroundColor: '#1a1a1a',
              borderRadius: '12px',
              overflow: 'hidden',
              border: '1px solid rgba(194, 136, 64, 0.2)'
            }}>
              <img 
                src="/attached_assets/IMG_5832_1754679855455.png" 
                alt="Early Virtuoso" 
                style={{
                  width: '100%',
                  height: '200px',
                  objectFit: 'cover'
                }}
              />
              <div style={{ padding: '25px' }}>
                <h3 style={{
                  fontSize: 'clamp(1.25rem, 4vw, 1.5rem)',
                  color: '#C28840',
                  marginBottom: '15px',
                  fontWeight: '500'
                }}>
                  Early Virtuoso (1980s)
                </h3>
                <p style={{
                  fontSize: 'clamp(0.9rem, 2.5vw, 1rem)',
                  color: 'rgba(255,255,255,0.9)',
                  lineHeight: '1.6'
                }}>
                  Rising from conservatory training to overcome a career-threatening hand injury at 19, Ricardo's determination and talent quickly established him as a formidable pianist in the competitive San Francisco music scene.
                </p>
              </div>
            </div>

            {/* Card 2 */}
            <div style={{
              backgroundColor: '#1a1a1a',
              borderRadius: '12px',
              overflow: 'hidden',
              border: '1px solid rgba(194, 136, 64, 0.2)'
            }}>
              <img 
                src="/attached_assets/IMG_5833_1754679855455.png" 
                alt="Third Stream Pioneer" 
                style={{
                  width: '100%',
                  height: '200px',
                  objectFit: 'cover'
                }}
              />
              <div style={{ padding: '25px' }}>
                <h3 style={{
                  fontSize: 'clamp(1.25rem, 4vw, 1.5rem)',
                  color: '#C28840',
                  marginBottom: '15px',
                  fontWeight: '500'
                }}>
                  Third Stream Pioneer (1990s)
                </h3>
                <p style={{
                  fontSize: 'clamp(0.9rem, 2.5vw, 1rem)',
                  color: 'rgba(255,255,255,0.9)',
                  lineHeight: '1.6'
                }}>
                  Throughout the 1990s, Ricardo established himself as a distinctive voice in contemporary jazz, releasing acclaimed albums and collaborating with industry luminaries while developing his characteristic fusion style.
                </p>
              </div>
            </div>

            {/* Card 3 */}
            <div style={{
              backgroundColor: '#1a1a1a',
              borderRadius: '12px',
              overflow: 'hidden',
              border: '1px solid rgba(194, 136, 64, 0.2)'
            }}>
              <img 
                src="/attached_assets/IMG_5834_1754679855454.png" 
                alt="Cultural Ambassador" 
                style={{
                  width: '100%',
                  height: '200px',
                  objectFit: 'cover'
                }}
              />
              <div style={{ padding: '25px' }}>
                <h3 style={{
                  fontSize: 'clamp(1.25rem, 4vw, 1.5rem)',
                  color: '#C28840',
                  marginBottom: '15px',
                  fontWeight: '500'
                }}>
                  Cultural Ambassador (2000s)
                </h3>
                <p style={{
                  fontSize: 'clamp(0.9rem, 2.5vw, 1rem)',
                  color: 'rgba(255,255,255,0.9)',
                  lineHeight: '1.6'
                }}>
                  The new millennium brought international recognition as Ricardo performed for U.S. Presidents and global leaders, cementing his role as America's musical ambassador to the world.
                </p>
              </div>
            </div>

            {/* Card 4 */}
            <div style={{
              backgroundColor: '#1a1a1a',
              borderRadius: '12px',
              overflow: 'hidden',
              border: '1px solid rgba(194, 136, 64, 0.2)'
            }}>
              <img 
                src="/attached_assets/IMG_5837_1754679855454.png" 
                alt="Living Legend" 
                style={{
                  width: '100%',
                  height: '200px',
                  objectFit: 'cover'
                }}
              />
              <div style={{ padding: '25px' }}>
                <h3 style={{
                  fontSize: 'clamp(1.25rem, 4vw, 1.5rem)',
                  color: '#C28840',
                  marginBottom: '15px',
                  fontWeight: '500'
                }}>
                  Living Legend (2010s-Present)
                </h3>
                <p style={{
                  fontSize: 'clamp(0.9rem, 2.5vw, 1rem)',
                  color: 'rgba(255,255,255,0.9)',
                  lineHeight: '1.6'
                }}>
                  Today, Ricardo continues to innovate and inspire, recently saving the Fillmore Jazz Festival and maintaining his position as San Francisco's most beloved cultural figure and musical treasure.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Legacy Section */}
      <section style={{
        backgroundColor: '#111111',
        padding: '60px 15px'
      }}>
        <div style={{
          maxWidth: '1200px',
          margin: '0 auto'
        }}>
          <div className="home-legacy-grid">
            <div>
              <blockquote className="legacy-blockquote">
                "I've dedicated my life to breaking down barriers through music. When they said a young Black pianist from San Francisco couldn't make it in the classical world, I proved them wrong. When they said my career was over after my hand injury, I came back stronger. Music isn't just what I do—it's who I am, and it's the bridge that connects us all."
              </blockquote>
              <cite className="legacy-cite">— Ricardo Scales</cite>
            </div>
            
            <div>
              <h2 className="legacy-title">A Legacy of Excellence</h2>
              <p className="legacy-paragraph">
                For over four decades, Ricardo Scales has redefined what it means to be a pianist in America. From his early days overcoming a devastating hand injury to becoming San Francisco's most celebrated cultural ambassador, his journey embodies the power of perseverance and artistic vision.
              </p>
              <p className="legacy-paragraph">
                His performances for U.S. Presidents, collaborations with international superstars, and recent heroic efforts to save the Fillmore Jazz Festival demonstrate that true artistry extends far beyond the concert hall—it builds communities and preserves culture for future generations.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer style={{
        backgroundColor: '#000000',
        borderTop: '1px solid rgba(194, 136, 64, 0.2)',
        padding: '40px 15px',
        color: 'white'
      }}>
        <div style={{
          maxWidth: '1200px',
          margin: '0 auto',
          textAlign: 'center'
        }}>
          <div style={{
            fontSize: 'clamp(24px, 6vw, 36px)',
            fontFamily: "'Alex Brush', cursive",
            color: '#C28840',
            marginBottom: '20px'
          }}>
            Ricardo Scales
          </div>

          <div style={{
            height: '1px',
            background: 'linear-gradient(to right, transparent, rgba(194, 136, 64, 0.3), transparent)',
            margin: '20px auto',
            maxWidth: '300px'
          }}></div>

          <div style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            gap: '20px',
            flexWrap: 'wrap',
            fontSize: 'clamp(12px, 2.5vw, 14px)',
            color: 'rgba(255,255,255,0.7)'
          }}>
            <p style={{ margin: 0 }}>
              © 2025 Ricardo Scales. All rights reserved.
            </p>
            <div style={{
              height: '15px',
              width: '1px',
              backgroundColor: 'rgba(194, 136, 64, 0.3)'
            }}></div>
            <p style={{ margin: 0, fontStyle: 'italic' }}>
              Designed by <span style={{ color: '#C28840' }}>Marchitechs</span>
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Home;
