'use client';

import { useRouter } from 'next/navigation';
import './event-details.css';

// REPLACE WITH YOUR GOOGLE FORM URL
const GOOGLE_FORM_URL = "https://docs.google.com/forms/d/e/1FAIpQLScRdoYtRo91QO3hgkwsDNMEQH6RH27LveTCRlBfD_NZXOtu3A/viewform";

// Schedule data for timetable
const scheduleData = [
  { time: "7:00 – 8:00 PM", session: "Welcome, Introduction & Telescope setup" },
  { time: "8:00 – 9:00 PM", session: "Lunar surface observation" },
  { time: "9:30 PM", session: "Penumbral contact begins" },
  { time: "10:00 PM", session: "Umbral ingress (Earth's shadow covers the Moon)" },
  { time: "11:30 PM", session: "Totality – The Moon turns deep red!" },
  { time: "12:45 AM", session: "Umbral egress" },
  { time: "1:15 AM", session: "Eclipse ends" },
  { time: "2:30 AM", session: "Closing session & group photo" }
];

export default function SpaceEventDetails() {
  const router = useRouter();

  const handleBackClick = () => {
    // Safe fallback navigation
    if (typeof window !== 'undefined' && document.referrer && document.referrer.includes(window.location.origin)) {
      router.back();
    } else {
      router.push('/');
    }
  };

  const handleRegisterClick = () => {
    console.log('externalFormOpened', 'space-event-sept-7');
    window.open(GOOGLE_FORM_URL, '_blank', 'noopener,noreferrer');
  };

  return (
    <main className="event-details-container">
      {/* Header */}
      <header className="event-header">
        <div className="header-content">
          <button onClick={handleBackClick} className="back-button" aria-label="Back to events">
            ← Back
          </button>
          
          <div className="event-title-section">
            <h1 className="event-main-title">TOTAL LUNAR ECLIPSE – OBSERVATION NIGHT</h1>
            <div className="event-meta">
              <p className="event-date-location">September 7, 2025 — Goregaon West, Mumbai</p>
              <p className="event-timings">Event Timings: 7:00 PM – 2:30 AM</p>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <div className="event-content">
        <div className="content-grid">
          {/* Left Column - Photo & Host */}
          <div className="left-column">
            <div className="event-photo-container">
              <div className="event-photo-placeholder">
                <span>🌙</span>
                <p>Event Photo</p>
              </div>
            </div>
            
            <div className="host-info">
              <h3 className="host-title">Hosted by:</h3>
              <div className="host-details">
                <div className="host-avatar">K</div>
                <div className="host-content">
                  <h4 className="host-name">Kush</h4>
                  <p className="host-label">Astronomy Enthusiast & Event Organizer</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Event Details */}
          <div className="right-column">
            {/* Intro */}
            <section className="event-section">
              <p className="intro-text">
                Join us for an unforgettable celestial experience as we witness one of the rarest total lunar eclipses visible from Mumbai in the next 5 years!
              </p>
            </section>

            {/* Telescopic Observation */}
            <section className="event-section">
              <h2 className="section-heading">🔭 Public Telescopic Observation</h2>
              <p className="section-text">
                Featuring a 10-inch Dobsonian & 5-inch Newtonian Reflector Telescope for breathtaking views of the Moon, Saturn, and deep-sky wonders.
              </p>
            </section>

            {/* Event Schedule Timetable */}
            <section className="event-section">
              <div className="timetable-header">
                <h2 className="section-heading sticky-header">Event Highlights & Schedule</h2>
                <span className="visually-hidden">Event timetable</span>
              </div>
              <div className="timetable-wrapper" role="table" aria-label="Event schedule">
                {scheduleData.map((item, index) => (
                  <div key={index} className="timetable-row" role="row">
                    <div className="timetable-time" role="cell">
                      {item.time}
                    </div>
                    <div className="timetable-session" role="cell">
                      {item.session}
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Fee & Policy */}
            <section className="event-section">
              <h3 className="subsection-heading">Fee & Policy</h3>
              <p className="fee-text">Entry Fee: ₹100 per person | Free for children under 10</p>
              <p className="policy-text">Event is weather-dependent. Full refunds if cancelled.</p>
            </section>

            {/* Note for Believers */}
            <section className="event-section">
              <h3 className="subsection-heading">Note for Believers</h3>
              <p className="note-text">
                We respect traditional practices around eclipses. Please be assured, through our reflecting telescopes you are not looking directly at the Moon, but only at its safe reflected image.
              </p>
            </section>

            {/* Registration Steps */}
            <section className="event-section">
              <h3 className="subsection-heading">Registration (Now Open!)</h3>
              <ol className="registration-steps">
                <li>DM us to register.</li>
                <li>You will receive a payment link.</li>
                <li>After payment, we'll share a Google Form for your details.</li>
                <li>Once completed, you'll receive your Registration ID for entry.</li>
              </ol>
            </section>
          </div>
        </div>
      </div>

      {/* Sticky CTA */}
      <div className="event-sticky-cta">
        <div className="cta-container">
          <button
            onClick={handleRegisterClick}
            className="register-button"
            aria-label="Register and pay for Total Lunar Eclipse event"
          >
            Register & Pay
          </button>
        </div>
      </div>
    </main>
  );
}