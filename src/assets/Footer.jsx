import React from 'react';

export default function Footer() {
  return (
    <div style={{
      position: 'fixed',
      bottom: 0,
      width: '100%',
      backgroundColor: '#343a40', // Dark background
      color: '#ffffff', // White text for contrast
      textAlign: 'center',
      padding: '5px',
      fontSize: '14px',
      borderTop: '1px solid #444'
    }}>
      <h6 style={{ margin: 0 }}>© 2024 Your Company</h6>
    </div>
  );
}
