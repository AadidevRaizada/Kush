'use client';

export default function ProfileCard({
  name = "Event Name",
  title = "Featured Experience", 
  handle = "Hosted by Kush",
  status = "Live soon",
  contactText = "Register & Pay",
  onContactClick = () => {}
}) {
  return (
    <div className="profile-card">
      <div className="profile-card-content">
        <div className="profile-avatar-section">
          <div className="profile-avatar">
            🚀
          </div>
          <div className="profile-user-info">
            <h3 className="profile-event-name">{name}</h3>
            <p className="profile-event-title">{title}</p>
            <p className="profile-event-handle">{handle}</p>
            <span className="profile-event-status">{status}</span>
          </div>
        </div>
        
        <button 
          className="profile-contact-button focus-ring"
          onClick={onContactClick}
          aria-label={`${contactText} for ${name}`}
        >
          {contactText}
        </button>
      </div>
    </div>
  );
}