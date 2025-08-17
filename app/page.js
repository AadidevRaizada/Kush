'use client';

import { useState } from 'react';
import Link from 'next/link';
import Spline from '@splinetool/react-spline';
import GradientText from './GradientText';
import RotatingText from './RotatingText';
import ProfileCard from './ProfileCard';
import './space-theme.css';

// REPLACE WITH YOUR GOOGLE FORM URL
const GOOGLE_FORM_URL = "https://docs.google.com/forms/d/e/1FAIpQLScRdoYtRo91QO3hgkwsDNMEQH6RH27LveTCRlBfD_NZXOtu3A/viewform?usp=sharing&ouid=114094758128750284008";

const mockEvents = [
  {
    id: 'space-event-sept-7',
    title: 'Lunar Eclipse',
    date: 'September 7',
    description: 'An immersive journey through the cosmos',
    featured: true,
    detailsPath: '/events/space-event-sept-7'
  },
  {
    id: 'mars-exploration',
    title: 'Mars Exploration Workshop',
    date: 'October 15',
    description: 'Discover the red planet',
    detailsPath: null // No details page yet
  },
  {
    id: 'asteroid-mining',
    title: 'Asteroid Mining Symposium',
    date: 'November 22',
    description: 'The future of space resources',
    detailsPath: null // No details page yet
  }
];

export default function Home() {
  const [viewState, setViewState] = useState('spline');
  const [selectedPlanet, setSelectedPlanet] = useState(null);
  const [selectedEvent, setSelectedEvent] = useState(null);

  const handlePlanetClick = (planetName) => {
    console.log('planetClick:', planetName);
    setSelectedPlanet(planetName);
    setViewState('carousel');
  };

  const handleGlobalClick = () => {
    console.log('planetClick:', null);
    setSelectedPlanet(null);
    setViewState('carousel');
  };

  const handleEventSelect = (event) => {
    console.log('eventCardView:', event.id);
    console.log('eventSelect:', event.id);
    setSelectedEvent(event);
  };

  const handleRegisterClick = (event) => {
    console.log('externalFormOpened:', event.id);
    window.open(GOOGLE_FORM_URL, '_blank', 'noopener,noreferrer');
  };

  const handleBackToSpline = () => {
    setViewState('spline');
    setSelectedEvent(null);
  };

  const featuredEvent = mockEvents.find(event => event.featured);

  return (
    <main className="app-container">
      {/* Spline Landing - NO transitions, just display/none */}
      <div 
        className={`spline-view ${viewState !== 'spline' ? 'hidden' : ''}`}
        onClick={handleGlobalClick}
      >
        <Spline 
          scene="https://prod.spline.design/Anw0YQXiyB8JZ7KX/scene.splinecode"
          onPointerUp={(e) => {
            e.stopPropagation();
            if (e.target && e.target.name) {
              handlePlanetClick(e.target.name);
            } else {
              handleGlobalClick();
            }
          }}
        />
        
        <div className="spline-prompt">
          Click anywhere to explore events.
        </div>
      </div>

      {/* Booking Page */}
      <div className={`booking-view ${viewState !== 'carousel' ? 'hidden' : ''}`}>
        {/* Header */}
        <header className="booking-header">
          <div className="booking-logo">
            <div>
              <h1 className="booking-title">Space Events</h1>
              <p className="booking-subtitle">Cosmic Experiences</p>
            </div>
          </div>
          <button
            onClick={handleBackToSpline}
            className="back-button"
            aria-label="Back to solar system"
          >
            Back
          </button>
        </header>

        {/* Hero Section */}
        <section className="hero-section">
          <GradientText className="hero-title">
            Choose Your Space Event
          </GradientText>
          
          <div className="hero-kicker">
            <RotatingText
              texts={['Workshops', 'Talks', 'Experiences']}
              rotationInterval={2200}
            />
          </div>
        </section>

        {/* Featured Event */}
        {featuredEvent && (
          <section className="featured-section">
            <h2 className="section-title">Featured Experience</h2>
            <div className="featured-container">
              <ProfileCard
                name={`${featuredEvent.title} — ${featuredEvent.date}`}
                title="Featured Experience"
                handle="Hosted by Kush"
                status="Live soon"
                contactText="Register & Pay"
                onContactClick={() => {
                  console.log('externalFormOpened:', featuredEvent.id);
                  window.open(GOOGLE_FORM_URL, '_blank', 'noopener,noreferrer');
                }}
              />
            </div>
          </section>
        )}

        {/* Events Grid */}
        <section className="events-section">
          <h2 className="section-title">All Events</h2>
          <div className="events-grid">
            {mockEvents.map((event) => (
              <div
                key={event.id}
                className={`event-card ${selectedEvent?.id === event.id ? 'selected' : ''}`}
                onClick={() => handleEventSelect(event)}
                tabIndex={0}
                role="button"
                aria-label={`Select ${event.title} on ${event.date}`}
                onKeyPress={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    handleEventSelect(event);
                  }
                }}
              >
                <h3 className="event-title">{event.title}</h3>
                <p className="event-date">{event.date}</p>
                <p className="event-description">{event.description}</p>
                
                {/* Event Actions */}
                <div className="event-actions">
                  {event.detailsPath && (
                    <Link href={event.detailsPath} className="event-details-link">
                      View details
                    </Link>
                  )}
                </div>
                
                {selectedEvent?.id === event.id && (
                  <div className="event-selected-indicator">
                    Selected Event
                  </div>
                )}
              </div>
            ))}
          </div>
        </section>

        {/* Sticky Bottom CTA */}
        {selectedEvent && (
          <div className="sticky-cta">
            <div className="cta-container">
              <button
                onClick={() => handleRegisterClick(selectedEvent)}
                className="cta-button"
                aria-label={`Register & Pay for ${selectedEvent.title}`}
              >
                Register & Pay for {selectedEvent.title}
              </button>
            </div>
          </div>
        )}
      </div>
    </main>
  );
}