import React, { useState } from 'react';
import './DropArea.css';

export const DropArea = ({ onDrop }) => {
  const [showDrop, setShowDrop] = useState(false);

  return (
    <section
      onDragEnter={() => setShowDrop(true)}
      onDragLeave={() => setShowDrop(false)}
      onDrop={(e) => {
        e.preventDefault(); // Prevent default browser behavior
        if (onDrop) {
          onDrop(); // Call the passed onDrop function
        }
        setShowDrop(false);
      }}
      onDragOver={(e) => e.preventDefault()} // This is necessary to allow dropping
      className={showDrop ? 'drop_area' : 'hide_drop'}
    >
      Drop Here
    </section>
  );
};
