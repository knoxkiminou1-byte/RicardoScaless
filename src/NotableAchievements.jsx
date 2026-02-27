import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Footer from './Footer';

function NotableAchievements() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div style={{
      minHeight: '100vh',
      backgroundColor: '#000000',
      color: 'white',
      fontFamily: "'Playfair Display', serif"
    }}>
      <header className="home-header">
        <div className="home-nav-container">
          <div className="home-logo">
            <Link to="/" style={{
              color: '#C28840',
              textDecoration: 'none',
              fontFamily: "'Dancing Script', cursive",
              fontSize: '2rem',
              fontWeight: '600'
            }}>Ricardo Scales</Link>
          </div>

          <nav className="home-desktop-nav">
            <Link to="/" style={{
              color: 'white',
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
            <Link to="/achievements" style={{
              color: '#C28840',
              textDecoration: 'none',
              fontSize: '16px',
              fontWeight: '400',
              transition: 'color 0.3s ease'
            }}>Achievements</Link>
            <Link to="/contact" style={{
              color: 'white',
              textDecoration: 'none',
              fontSize: '16px',
              fontWeight: '400',
              transition: 'color 0.3s ease'
            }}>Contact</Link>
          </nav>

          <button
            className="home-mobile-menu-btn"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            ☰
          </button>
        </div>

        {isMenuOpen && (
          <div className="home-mobile-nav">
            <nav className="home-mobile-nav-links">
              <Link to="/" style={{
                color: 'white',
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
              <Link to="/achievements" style={{
                color: '#C28840',
                textDecoration: 'none',
                fontSize: '18px',
                fontWeight: '400',
                transition: 'color 0.3s ease',
                padding: '10px 0'
              }} onClick={() => setIsMenuOpen(false)}>Achievements</Link>
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

      <section style={{
        minHeight: '40vh',
        background: 'linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.9))',
        display: 'flex',
        alignItems: 'center',
        padding: '120px 40px 60px',
        position: 'relative'
      }}>
        <div style={{
          maxWidth: '1200px',
          margin: '0 auto',
          width: '100%',
          textAlign: 'center'
        }}>
          <h1 style={{
            fontSize: 'clamp(2.5rem, 6vw, 4.5rem)',
            fontFamily: "'Playfair Display', serif",
            color: '#C28840',
            marginBottom: '20px',
            fontWeight: '400',
            lineHeight: '1.2',
            letterSpacing: '-0.02em'
          }}>
            Notable Achievements
          </h1>
          <p style={{
            fontSize: '1.2rem',
            color: 'rgba(255,255,255,0.8)',
            maxWidth: '700px',
            margin: '0 auto',
            lineHeight: '1.6',
            fontStyle: 'italic'
          }}>
            Recognition and praise from the most prestigious venues and industry leaders
          </p>
        </div>
      </section>

      <section style={{
        backgroundColor: '#000000',
        padding: '40px 40px 80px'
      }}>
        <div style={{
          maxWidth: '900px',
          margin: '0 auto'
        }}>
          <div style={{
            height: '1px',
            background: 'linear-gradient(to right, transparent, #C28840, transparent)',
            margin: '0 auto 60px',
            maxWidth: '400px'
          }}></div>

          <div style={{
            backgroundColor: '#1a1a1a',
            padding: '50px',
            borderRadius: '12px',
            marginBottom: '60px',
            borderLeft: '4px solid #C28840'
          }}>
            <h2 style={{
              fontSize: '2.2rem',
              fontFamily: "'Playfair Display', serif",
              color: '#C28840',
              marginBottom: '15px',
              fontWeight: '400'
            }}>
              San Francisco Symphony
            </h2>
            <p style={{
              fontSize: '1rem',
              color: 'rgba(255,255,255,0.6)',
              marginBottom: '30px',
              fontStyle: 'italic'
            }}>
              Letter from Laura Bergmann, Senior Project Manager, Events & Volunteer Council Operations
            </p>
            <div style={{
              display: 'flex',
              justifyContent: 'center',
              marginBottom: '30px'
            }}>
              <img
                src="/attached_assets/SF_Symphony_ltr_3__1770859212367.jpg"
                alt="San Francisco Symphony letter praising Ricardo Scales"
                style={{
                  maxWidth: '100%',
                  height: 'auto',
                  borderRadius: '8px',
                  boxShadow: '0 8px 30px rgba(0,0,0,0.5)',
                  border: '1px solid rgba(194, 136, 64, 0.3)'
                }}
              />
            </div>
            <blockquote style={{
              fontSize: '1.3rem',
              fontStyle: 'italic',
              color: '#C28840',
              margin: '30px 0 15px 0',
              lineHeight: '1.5',
              textAlign: 'center'
            }}>
              "We absolutely LOVED Ricardo. He's incredible. I hope we can have him back (many times!) in the future."
            </blockquote>
            <cite style={{
              fontSize: '1rem',
              color: 'rgba(255,255,255,0.7)',
              fontStyle: 'normal',
              display: 'block',
              textAlign: 'center'
            }}>
              — Laura Bergmann, San Francisco Symphony
            </cite>
          </div>

          <div style={{
            textAlign: 'center',
            padding: '60px 0',
            borderTop: '1px solid rgba(194, 136, 64, 0.3)',
            borderBottom: '1px solid rgba(194, 136, 64, 0.3)'
          }}>
            <blockquote style={{
              fontSize: '1.5rem',
              fontStyle: 'italic',
              color: '#C28840',
              margin: '0 0 20px 0',
              lineHeight: '1.4'
            }}>
              "It was a delight and honor to listen to him play!"
            </blockquote>
            <cite style={{
              fontSize: '1.1rem',
              color: 'rgba(255,255,255,0.8)',
              fontStyle: 'normal'
            }}>
              — San Francisco Symphony
            </cite>
          </div>

          <div style={{
            backgroundColor: '#1a1a1a',
            padding: '50px',
            borderRadius: '12px',
            marginTop: '60px',
            marginBottom: '60px',
            borderLeft: '4px solid #C28840'
          }}>
            <h2 style={{
              fontSize: '2.2rem',
              fontFamily: "'Playfair Display', serif",
              color: '#C28840',
              marginBottom: '15px',
              fontWeight: '400'
            }}>
              African American Bay Area Legends
            </h2>
            <p style={{
              fontSize: '1rem',
              color: 'rgba(255,255,255,0.6)',
              marginBottom: '30px',
              fontStyle: 'italic'
            }}>
              Letter from Johnny Mathis via Amy Farrell, PR Director for Johnny Mathis & Jon Mat Records — January 2025
            </p>
            <div style={{
              backgroundColor: '#0d0d0d',
              padding: '40px',
              borderRadius: '8px',
              border: '1px solid rgba(194, 136, 64, 0.2)',
              marginBottom: '30px',
              lineHeight: '1.8',
              fontSize: '1.05rem',
              color: 'rgba(255,255,255,0.85)'
            }}>
              <p style={{ marginBottom: '20px', fontStyle: 'italic', color: 'rgba(255,255,255,0.6)', fontSize: '0.95rem' }}>
                To The Jones Memorial Methodist Men Honorees, and the Congregation of United Methodist Church:
              </p>
              <p style={{ marginBottom: '20px' }}>
                Johnny Mathis sends his sincere thanks to you all for this kind acknowledgement of appreciation & invitation to attend this wonderful celebration. He is truly humbled on this special occasion to be included as an Honorable Mention in such stellar company as these African American Bay Area Legends...
              </p>
              <p style={{
                textAlign: 'center',
                color: '#C28840',
                fontStyle: 'italic',
                fontSize: '1.1rem',
                margin: '30px 0',
                lineHeight: '1.6'
              }}>
                Jazz musician & composer Mr. John Handy, virtuoso pianist Mr. Ricardo Scales, composer & electronic musician Mr. Todd Cochran, and former San Francisco Mayor Mr. Willie Brown
              </p>
              <p style={{ marginBottom: '20px' }}>
                And so, whether his path has crossed with yours directly or not, Johnny Mathis is beyond grateful to be counted among these African American Bay Area Legends. He sends his deep thanks again for this acknowledgement, and his heartfelt congratulations to all the honorees on their inestimable & inspiring achievements.
              </p>
              <p style={{ marginBottom: '5px', fontStyle: 'italic' }}>All The Best,</p>
              <p style={{ color: 'rgba(255,255,255,0.6)', fontSize: '0.95rem', marginTop: '20px' }}>
                Via Amy Farrell<br />
                PR Director for Johnny Mathis & Jon Mat Records
              </p>
            </div>
            <blockquote style={{
              fontSize: '1.3rem',
              fontStyle: 'italic',
              color: '#C28840',
              margin: '30px 0 15px 0',
              lineHeight: '1.5',
              textAlign: 'center'
            }}>
              Honored as an African American Bay Area Legend alongside Johnny Mathis and former San Francisco Mayor Willie Brown
            </blockquote>
          </div>

          <div style={{
            textAlign: 'center',
            padding: '60px 0'
          }}>
            <h2 style={{
              fontSize: '2rem',
              fontFamily: "'Playfair Display', serif",
              color: '#C28840',
              marginBottom: '40px',
              fontWeight: '400'
            }}>
              Experience the Artistry
            </h2>
            <div style={{
              display: 'flex',
              justifyContent: 'center',
              gap: '30px',
              flexWrap: 'wrap'
            }}>
              <Link to="/contact" style={{
                backgroundColor: 'transparent',
                color: '#C28840',
                border: '2px solid #C28840',
                padding: '15px 30px',
                fontSize: '16px',
                fontWeight: '500',
                textDecoration: 'none',
                transition: 'all 0.3s ease',
                fontFamily: 'inherit'
              }}>
                Book Ricardo
              </Link>
              <Link to="/music" style={{
                backgroundColor: 'transparent',
                color: 'white',
                border: '2px solid white',
                padding: '15px 30px',
                fontSize: '16px',
                fontWeight: '500',
                textDecoration: 'none',
                transition: 'all 0.3s ease',
                fontFamily: 'inherit'
              }}>
                Listen to Music
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

export default NotableAchievements;