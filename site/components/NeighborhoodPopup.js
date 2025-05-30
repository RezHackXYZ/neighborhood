import { useEffect, useRef } from 'react';

export default function NeighborhoodPopup({ onClose }) {
  const audioRef = useRef(null);

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.play();
    }
  }, []);

  return (
    <div className="popup-overlay">
      <div className="popup-content">
        <div className="shader-background" />
        <div className="content-wrapper">
          <audio ref={audioRef} src="/banjo.mp3" />
          <h2>Exploration isn't open yet!</h2>
          <p>We will open the Neighborhood server after our kickoff call at 7:30 PM EST on May 9th! From that launch on, you'll be able to explore the Neighborhood with other Hack Clubbers.</p>
          <button onClick={onClose} className="close-button">
            alrighty!
          </button>
        </div>
      </div>
      <style jsx>{`
        .popup-overlay {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background-color: rgba(0, 0, 0, 0.7);
          display: flex;
          justify-content: center;
          align-items: center;
          z-index: 1000;
          animation: fadeIn 0.3s ease-in-out;
        }

        .popup-content {
          position: relative;
          background-color: #007C74;
          padding: 2rem;
          border-radius: 8px;
          max-width: 500px;
          color: #FFF9E6;
          font-family: "M PLUS Rounded 1c";
          animation: slideIn 0.3s ease-out;
          overflow: hidden;
        }

        .shader-background {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: linear-gradient(
            45deg,
            #fff 25%,
            transparent 25%,
            transparent 75%,
            #fff 75%
          );
          background-size: 20px 400px;
          opacity: 0.1;
          animation: wave 10s cubic-bezier(0.4, 0, 0.2, 1) infinite;
        }

        .shader-background:before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: linear-gradient(
            -45deg,
            #68B893 25%,
            transparent 25%,
            transparent 75%,
            #68B893 75%
          );
          background-size: 20px 400px;
          opacity: 0.1;
          animation: wave 10s cubic-bezier(0.4, 0, 0.2, 1) infinite reverse;
        }

        .content-wrapper {
          position: relative;
          z-index: 1;
        }

        .popup-content h2 {
          margin-top: 0;
          color: #FCEA64;
          font-size: 24px;
        }

        .popup-content p {
          margin: 1rem 0;
          line-height: 1.5;
        }

        .close-button {
          background-color: #FCEA64;
          color: #007C74;
          border: none;
          padding: 8px 16px;
          border-radius: 4px;
          cursor: pointer;
          font-family: "M PLUS Rounded 1c";
          font-weight: bold;
          transition: transform 0.2s;
        }

        .close-button:hover {
          transform: scale(1.05);
        }

        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }

        @keyframes slideIn {
          from { transform: translateY(-20px); opacity: 0; }
          to { transform: translateY(0); opacity: 1; }
        }

        @keyframes wave {
          0% {
            background-position: 0 0;
          }
          50% {
            background-position: 20px 200px;
          }
          100% {
            background-position: 0 0;
          }
        }
      `}</style>
    </div>
  );
} 