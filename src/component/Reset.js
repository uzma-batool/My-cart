import React from 'react';

function Reset({ onReset }) {
  return (
    <div className="reset-container">
      <button className="btn btn-secondary" onClick={onReset}>
        Reset quantities
      </button>
    </div>
  );
}

export default Reset;
