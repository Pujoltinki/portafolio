import React, { useState } from 'react';
import { MagicCard } from 'react-magic-motion';
import 'react-magic-motion/card.css';

function CloseFullscreenSvg() {
  return (
    <>
      <rect
        x="1"
        y="16"
        width="14"
        height="15"
        stroke="currentColor"
        strokeWidth="2"
      />
      <path
        d="M26 5L18 13"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <path
        d="M18 13H22"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <path
        d="M18 13V9"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <rect
        x="1"
        y="1"
        width="30"
        height="30"
        stroke="currentColor"
        strokeWidth="2"
      />
    </>
  );
}

function OpenFullscreenSvg() {
  return (
    <>
      <rect
        x="1"
        y="8"
        width="21"
        height="23"
        stroke="currentColor"
        strokeWidth="2"
      />
      <path
        d="M7 24L15 16"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <path
        d="M15 16H11"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <path
        d="M15 16V20"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <rect
        x="1"
        y="1"
        width="30"
        height="30"
        stroke="currentColor"
        strokeWidth="2"
      />
    </>
  );
}

const ExpandableCard = ({ title, imageUrl, text }) => {
  const [isCardExpanded, setIsCardExpanded] = useState(false);

  return (
    <MagicCard
      isCardExpanded={isCardExpanded}
      onBackgroundFadeClick={() => setIsCardExpanded(false)}
      transition={{ type: 'spring', stiffness: 200, damping: 20 }}
    >
      <div
        style={{
          width: '100%',
          maxWidth: isCardExpanded ? '40rem' : '20rem',
          gap: '1rem',
          display: 'flex',
          flexDirection: 'column',
          padding: '1.35rem',
          backgroundColor: isCardExpanded ? 'rgba(0, 0, 0, 0.8)' : 'white',
          color: isCardExpanded ? 'white' : 'black',
          border: '1px solid #ccc',
          borderRadius: '8px',
          boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
          transition: 'width 0.3s ease-in-out',
          margin: '10px auto', // Center the card
        }}
      >
        <h3 style={{ fontWeight: 600, fontSize: '1.4em' }}>{title}</h3>
        <img
          style={{
            width: '100%',
            height: 'auto',
            borderRadius: '4px',
          }}
          alt={title}
          src={imageUrl}
        />
        <p>{isCardExpanded ? text : text.split(' ').slice(0, 20).join(' ') + '...'}</p>
        <button
          style={{
            alignSelf: 'center',
            padding: '0.5rem 1rem',
            backgroundColor: '#007bff',
            color: 'white',
            border: 'none',
            borderRadius: '4px',
            cursor: 'pointer',
            marginTop: '1rem',
          }}
          onClick={() => setIsCardExpanded(!isCardExpanded)}
        >
          {isCardExpanded ? 'Leer menos' : 'Leer más'}
        </button>
      </div>
    </MagicCard>
  );
};

export default ExpandableCard;
