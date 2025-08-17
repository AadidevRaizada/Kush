'use client';

export default function SplineLoadingPlaceholder() {
  return (
    <div className="spline-loading-container" aria-busy="true" role="img" aria-label="Loading scene...">
      <div className="spline-loading-content">
        <div className="spline-loading-spinner"></div>
        <p className="spline-loading-text">Loading cosmic scene...</p>
      </div>
      <div className="spline-loading-prompt">
        Preparing your space journey
      </div>
    </div>
  );
}