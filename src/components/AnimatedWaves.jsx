import { motion } from 'framer-motion';

const AnimatedWaves = () => {
  return (
    <div className="absolute inset-0 overflow-hidden" style={{ filter: 'blur(0.5px)' }}>
      {/* Wave Layer 1 - Primary wave */}
      <motion.div
        animate={{
          x: [-60, 60, -60],
          scale: [1, 1.15, 1],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute inset-0 opacity-50"
        style={{ width: '120%', left: '-10%' }}
      >
        <svg
          viewBox="0 0 1200 320"
          className="absolute bottom-0 w-full h-full"
          preserveAspectRatio="none"
        >
          <path
            fill="url(#gradient1)"
            d="M0,160L60,144C120,128,240,96,360,101.3C480,107,600,149,720,160C840,171,960,149,1080,138.7C1200,128,1320,128,1380,128L1440,128L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"
          />
          <defs>
            <linearGradient id="gradient1" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#374151" stopOpacity="0.5" />
              <stop offset="50%" stopColor="#4b5563" stopOpacity="0.7" />
              <stop offset="100%" stopColor="#1f2937" stopOpacity="0.9" />
            </linearGradient>
          </defs>
        </svg>
      </motion.div>

      {/* Wave Layer 2 - Secondary wave */}
      <motion.div
        animate={{
          x: [80, -100, 80],
          scale: [1.1, 0.95, 1.1],
        }}
        transition={{
          duration: 16,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2,
        }}
        className="absolute inset-0 opacity-30"
        style={{ width: '120%', left: '-10%' }}
      >
        <svg
          viewBox="0 0 1200 320"
          className="absolute bottom-0 w-full h-full"
          preserveAspectRatio="none"
        >
          <path
            fill="url(#gradient2)"
            d="M0,192L80,197.3C160,203,320,213,480,197.3C640,181,800,139,960,144C1120,149,1280,203,1360,229.3L1440,256L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"
          />
          <defs>
            <linearGradient id="gradient2" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#6b7280" stopOpacity="0.4" />
              <stop offset="50%" stopColor="#374151" stopOpacity="0.6" />
              <stop offset="100%" stopColor="#111827" stopOpacity="0.8" />
            </linearGradient>
          </defs>
        </svg>
      </motion.div>

      {/* Wave Layer 3 - Tertiary wave */}
      <motion.div
        animate={{
          x: [-50, 90, -50],
          scale: [1, 1.08, 1],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 4,
        }}
        className="absolute inset-0 opacity-20"
        style={{ width: '120%', left: '-10%' }}
      >
        <svg
          viewBox="0 0 1200 320"
          className="absolute bottom-0 w-full h-full"
          preserveAspectRatio="none"
        >
          <path
            fill="url(#gradient3)"
            d="M0,256L40,234.7C80,213,160,171,240,165.3C320,160,400,192,480,213.3C560,235,640,245,720,234.7C800,224,880,192,960,181.3C1040,171,1120,181,1200,192C1280,203,1360,213,1400,218.7L1440,224L1440,320L1400,320C1360,320,1280,320,1200,320C1120,320,1040,320,960,320C880,320,800,320,720,320C640,320,560,320,480,320C400,320,320,320,240,320C160,320,80,320,40,320L0,320Z"
          />
          <defs>
            <linearGradient id="gradient3" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#9ca3af" stopOpacity="0.3" />
              <stop offset="50%" stopColor="#6b7280" stopOpacity="0.45" />
              <stop offset="100%" stopColor="#374151" stopOpacity="0.6" />
            </linearGradient>
          </defs>
        </svg>
      </motion.div>

      {/* Wave Layer 4 - Foreground subtle wave */}
      <motion.div
        animate={{
          x: [40, -80, 40],
          scale: [1.03, 0.97, 1.03],
        }}
        transition={{
          duration: 24,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 6,
        }}
        className="absolute inset-0 opacity-15"
        style={{ width: '120%', left: '-10%' }}
      >
        <svg
          viewBox="0 0 1200 320"
          className="absolute bottom-0 w-full h-full"
          preserveAspectRatio="none"
        >
          <path
            fill="url(#gradient4)"
            d="M0,288L48,277.3C96,267,192,245,288,229.3C384,213,480,203,576,208C672,213,768,235,864,240C960,245,1056,235,1152,213.3C1248,192,1344,160,1392,144L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
          />
          <defs>
            <linearGradient id="gradient4" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#d1d5db" stopOpacity="0.25" />
              <stop offset="100%" stopColor="#9ca3af" stopOpacity="0.4" />
            </linearGradient>
          </defs>
        </svg>
      </motion.div>

      {/* Floating particles */}
      {[...Array(15)].map((_, i) => (
        <motion.div
          key={i}
          animate={{
            y: [-40, -120, -40],
            x: [-20, 20, -20],
            opacity: [0.1, 0.4, 0.1],
            scale: [0.6, 1.2, 0.6],
          }}
          transition={{
            duration: 8 + i * 2,
            repeat: Infinity,
            ease: "easeInOut",
            delay: i * 0.5,
          }}
          className="absolute rounded-full blur-sm"
          style={{
            width: `${3 + (i % 4) * 2}px`,
            height: `${3 + (i % 4) * 2}px`,
            left: `${3 + i * 6}%`,
            bottom: `${5 + (i % 5) * 18}%`,
            backgroundColor: i % 3 === 0 ? '#9ca3af' : i % 3 === 1 ? '#6b7280' : '#4b5563',
          }}
        />
      ))}
    </div>
  );
};

export default AnimatedWaves;