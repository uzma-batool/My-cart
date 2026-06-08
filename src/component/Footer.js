import React from 'react';

function Footer({ total }) {
  return (
    <footer className="app-footer">
      <div>Total Amount: ₹{total}</div>
    </footer>
  );
}

export default Footer;
