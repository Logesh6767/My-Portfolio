import { useEffect, useState } from 'react';

// CSS keyframe animations run on the browser compositor thread
// — they don't block JS interactions unlike Framer Motion infinite loops.
const waveStyles = `
  @keyframes wave1 {
    0%, 100% { transform: translateX(-1%) scaleX(1); }
    50%       { transform: translateX(1%)  scaleX(1.01); }
  }
  @keyframes wave2 {
    0%, 100% { transform: translateX(1.5%) scaleX(1.01); }
    50%       { transform: translateX(-1.5%) scaleX(0.99); }
  }
  @keyframes wave3 {
    0%, 100% { transform: translateX(-1%) scaleX(1); }
    50%       { transform: translateX(2%)  scaleX(1.015); }
  }
  @keyframes wave4 {
    0%, 100% { transform: translateX(1%) scaleX(1.005); }
    50%       { transform: translateX(-1.5%) scaleX(0.995); }
  }
  @keyframes floatParticle {
    0%, 100% { transform: translateY(0px)   translateX(0px);   opacity: 0.1; }
    50%       { transform: translateY(-60px) translateX(15px);  opacity: 0.35; }
  }
  @media (prefers-reduced-motion: reduce) {
    .wave-layer, .float-particle { animation: none !important; }
  }
`;

const PARTICLES = [
  { size: 3,  left: '5%',  bottom: '10%', duration: '6s',  delay: '0s'    },
  { size: 5,  left: '20%', bottom: '30%', duration: '8s',  delay: '1s'    },
  { size: 4,  left: '38%', bottom: '18%', duration: '7s',  delay: '2s'    },
  { size: 6,  left: '55%', bottom: '40%', duration: '9s',  delay: '0.5s'  },
  { size: 3,  left: '72%', bottom: '22%', duration: '6.5s',delay: '1.5s'  },
  { size: 5,  left: '88%', bottom: '35%', duration: '8.5s',delay: '3s'    },
];

const AnimatedWaves = () => {
  const [showParticles, setShowParticles] = useState(false);

  useEffect(() => {
    // Only show particles on desktop — they add no value on mobile
    // and hurt performance on low-end devices.
    setShowParticles(window.innerWidth >= 1024);
  }, []);

  return (
    <>
      <style>{waveStyles}</style>
      <div className="absolute inset-0 overflow-hidden">

        {/* Wave Layer 1 */}
        <div
          className="wave-layer absolute inset-0 opacity-50"
          style={{ width: '120%', left: '-10%', animation: 'wave1 5s ease-in-out infinite' }}
        >
          <svg viewBox="0 0 1440 320" className="absolute bottom-0 w-full h-full" preserveAspectRatio="none">
            <defs>
              <linearGradient id="wg1" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%"   stopColor="#374151" stopOpacity="0.5" />
                <stop offset="50%"  stopColor="#4b5563" stopOpacity="0.7" />
                <stop offset="100%" stopColor="#1f2937" stopOpacity="0.9" />
              </linearGradient>
            </defs>
            <path fill="url(#wg1)" d="M0,160L60,144C120,128,240,96,360,101.3C480,107,600,149,720,160C840,171,960,149,1080,138.7C1200,128,1320,128,1380,128L1440,128L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z" />
          </svg>
        </div>

        {/* Wave Layer 2 */}
        <div
          className="wave-layer absolute inset-0 opacity-30"
          style={{ width: '120%', left: '-10%', animation: 'wave2 6s ease-in-out infinite 1.5s' }}
        >
          <svg viewBox="0 0 1440 320" className="absolute bottom-0 w-full h-full" preserveAspectRatio="none">
            <defs>
              <linearGradient id="wg2" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%"   stopColor="#6b7280" stopOpacity="0.4" />
                <stop offset="50%"  stopColor="#374151" stopOpacity="0.6" />
                <stop offset="100%" stopColor="#111827" stopOpacity="0.8" />
              </linearGradient>
            </defs>
            <path fill="url(#wg2)" d="M0,192L80,197.3C160,203,320,213,480,197.3C640,181,800,139,960,144C1120,149,1280,203,1360,229.3L1440,256L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z" />
          </svg>
        </div>

        {/* Wave Layer 3 */}
        <div
          className="wave-layer absolute inset-0 opacity-20"
          style={{ width: '120%', left: '-10%', animation: 'wave3 7s ease-in-out infinite 3s' }}
        >
          <svg viewBox="0 0 1440 320" className="absolute bottom-0 w-full h-full" preserveAspectRatio="none">
            <defs>
              <linearGradient id="wg3" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%"   stopColor="#9ca3af" stopOpacity="0.3" />
                <stop offset="50%"  stopColor="#6b7280" stopOpacity="0.45" />
                <stop offset="100%" stopColor="#374151" stopOpacity="0.6" />
              </linearGradient>
            </defs>
            <path fill="url(#wg3)" d="M0,256L40,234.7C80,213,160,171,240,165.3C320,160,400,192,480,213.3C560,235,640,245,720,234.7C800,224,880,192,960,181.3C1040,171,1120,181,1200,192C1280,203,1360,213,1400,218.7L1440,224L1440,320L1400,320C1360,320,1280,320,1200,320C1120,320,1040,320,960,320C880,320,800,320,720,320C640,320,560,320,480,320C400,320,320,320,240,320C160,320,80,320,40,320L0,320Z" />
          </svg>
        </div>

        {/* Wave Layer 4 */}
        <div
          className="wave-layer absolute inset-0 opacity-15"
          style={{ width: '120%', left: '-10%', animation: 'wave4 8s ease-in-out infinite 4.5s' }}
        >
          <svg viewBox="0 0 1440 320" className="absolute bottom-0 w-full h-full" preserveAspectRatio="none">
            <defs>
              <linearGradient id="wg4" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%"   stopColor="#d1d5db" stopOpacity="0.25" />
                <stop offset="100%" stopColor="#9ca3af" stopOpacity="0.4" />
              </linearGradient>
            </defs>
            <path fill="url(#wg4)" d="M0,288L48,277.3C96,267,192,245,288,229.3C384,213,480,203,576,208C672,213,768,235,864,240C960,245,1056,235,1152,213.3C1248,192,1344,160,1392,144L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z" />
          </svg>
        </div>

        {/* Particles — desktop only, no blur (blur is expensive without GPU) */}
        {showParticles && PARTICLES.map((p, i) => (
          <div
            key={i}
            className="float-particle absolute rounded-full"
            style={{
              width:  p.size,
              height: p.size,
              left:   p.left,
              bottom: p.bottom,
              backgroundColor: i % 3 === 0 ? '#9ca3af' : i % 3 === 1 ? '#6b7280' : '#4b5563',
              animation: `floatParticle ${p.duration} ease-in-out infinite ${p.delay}`,
            }}
          />
        ))}
      </div>
    </>
  );
};

export default AnimatedWaves;