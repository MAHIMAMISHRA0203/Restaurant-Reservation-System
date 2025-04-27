import React, { useEffect } from 'react';
import './OverlayBlocker.css';

const OverlayBlocker = () => {
  useEffect(() => {
    // Function to remove Cascade overlays
    const removeOverlays = () => {
      const overlays = document.querySelectorAll('[style*="position: fixed"][style*="bottom: 0"], [style*="position: fixed"][style*="right: 0"]');
      overlays.forEach(overlay => {
        if (overlay.parentNode) {
          overlay.parentNode.removeChild(overlay);
        }
      });
    };

    // Run immediately
    removeOverlays();

    // Set up an observer to watch for new elements
    const observer = new MutationObserver((mutations) => {
      removeOverlays();
    });

    // Start observing
    observer.observe(document.body, {
      childList: true,
      subtree: true
    });

    // Cleanup
    return () => observer.disconnect();
  }, []);

  return <div className="overlay-blocker" />;
};

export default OverlayBlocker;
