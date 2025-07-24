
import React from 'react';
import './App.css';

function App() {
  return (
    <div style={{
      minHeight: '100vh',
      backgroundColor: '#000000',
      color: 'white',
      fontFamily: "'Inter', sans-serif"
    }}>
      {/* Navigation Header */}
      <header style={{
        position: 'fixed',
        top: 0,
        width: '100%',
        backgroundColor: 'rgba(0,0,0,0.9)',
        backdropFilter: 'blur(10px)',
        borderBottom: '1px solid rgba(194, 136, 64, 0.2)',
        zIndex: 1000,
        padding: '20px 0'
      }}>
        <div style={{
          maxWidth: '1200px',
          margin: '0 auto',
          padding: '0 40px',
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
          <nav style={{
            display: 'flex',
            gap: '40px'
          }}>
            <a href="#story" style={{
              color: 'white',
              textDecoration: 'none',
              fontSize: '16px',
              transition: 'color 0.3s ease'
            }}>My Story</a>
            <a href="#tour" style={{
              color: 'white',
              textDecoration: 'none',
              fontSize: '16px',
              transition: 'color 0.3s ease'
            }}>Final Tour</a>
            <a href="#bookings" style={{
              color: 'white',
              textDecoration: 'none',
              fontSize: '16px',
              transition: 'color 0.3s ease'
            }}>Bookings</a>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section style={{
        minHeight: '100vh',
        background: 'linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.7)), url("data:image/svg+xml,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' width=\'100\' height=\'100\' viewBox=\'0 0 100 100\'%3E%3Cg fill-opacity=\'0.03\'%3E%3Cpath d=\'M11 18c3.866 0 7-3.133 7-7s-3.134-7-7-7-7 3.133-7 7 3.134 7 7 7zm48 25c3.866 0 7-3.133 7-7s-3.134-7-7-7-7 3.133-7 7 3.134 7 7 7zm-43-7c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm63 31c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM34 90c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm56-76c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM12 86c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm28-65c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm23-11c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-6 60c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm29 22c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zM32 63c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm57-13c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-9-21c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM60 91c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM35 41c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM12 60c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2z\'/%3E%3C/g%3E%3C/svg%3E")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        display: 'flex',
        alignItems: 'center',
        padding: '0 40px',
        position: 'relative'
      }}>
        <div style={{
          maxWidth: '1200px',
          margin: '0 auto',
          width: '100%'
        }}>
          <div style={{
            maxWidth: '800px'
          }}>
            <h1 style={{
              fontSize: 'clamp(2.5rem, 5vw, 4rem)',
              fontFamily: "'Playfair Display', serif",
              color: '#C28840',
              marginBottom: '30px',
              fontWeight: '400',
              lineHeight: '1.2',
              letterSpacing: '-0.02em'
            }}>
              Ricardo Scales: Composer, Civic Virtuoso, Cultural Pillar
            </h1>
            
            <p style={{
              fontSize: '1.125rem',
              color: 'rgba(255,255,255,0.9)',
              marginBottom: '40px',
              lineHeight: '1.6',
              maxWidth: '600px'
            }}>
              Experience the timeless artistry of Ricardo Scales, whose musical genius transcends genres and transforms spaces. 
              His compositions blend classical precision with jazz improvisation, creating unforgettable musical journeys that 
              captivate audiences worldwide.
            </p>

            <div style={{
              display: 'flex',
              gap: '20px',
              flexWrap: 'wrap'
            }}>
              <button style={{
                backgroundColor: 'transparent',
                color: 'white',
                border: '2px solid white',
                padding: '15px 30px',
                fontSize: '16px',
                fontWeight: '500',
                cursor: 'pointer',
                transition: 'all 0.3s ease',
                fontFamily: 'inherit'
              }}
              onMouseEnter={(e) => {
                e.target.style.backgroundColor = 'white';
                e.target.style.color = 'black';
              }}
              onMouseLeave={(e) => {
                e.target.style.backgroundColor = 'transparent';
                e.target.style.color = 'white';
              }}>
                Book an Event
              </button>
              
              <button style={{
                backgroundColor: 'transparent',
                color: '#C28840',
                border: '2px solid #C28840',
                padding: '15px 30px',
                fontSize: '16px',
                fontWeight: '500',
                cursor: 'pointer',
                transition: 'all 0.3s ease',
                fontFamily: 'inherit'
              }}
              onMouseEnter={(e) => {
                e.target.style.backgroundColor = '#C28840';
                e.target.style.color = 'white';
              }}
              onMouseLeave={(e) => {
                e.target.style.backgroundColor = 'transparent';
                e.target.style.color = '#C28840';
              }}>
                Explore Music
              </button>
            </div>
          </div>
        </div>

        {/* Decorative overlay */}
        <div style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: 'radial-gradient(circle at 70% 30%, rgba(194, 136, 64, 0.1) 0%, transparent 50%)',
          pointerEvents: 'none'
        }}></div>
      </section>
    </div>
  );
}

export default App;
