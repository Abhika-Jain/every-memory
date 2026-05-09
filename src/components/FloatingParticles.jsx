import { motion } from 'framer-motion'

// Soft floating dust particles for the opening screen
// Purely decorative, uses Framer Motion for natural movement
const PARTICLES = [
  { x: '12%', y: '20%', size: 3, delay: 0, duration: 9 },
  { x: '85%', y: '15%', size: 2, delay: 1.5, duration: 11 },
  { x: '40%', y: '8%',  size: 4, delay: 0.8, duration: 8 },
  { x: '70%', y: '35%', size: 2, delay: 2.2, duration: 13 },
  { x: '20%', y: '60%', size: 3, delay: 1,   duration: 10 },
  { x: '90%', y: '55%', size: 2, delay: 3,   duration: 9 },
  { x: '55%', y: '80%', size: 3, delay: 0.5, duration: 12 },
  { x: '8%',  y: '80%', size: 2, delay: 2,   duration: 11 },
  { x: '65%', y: '70%', size: 4, delay: 1.2, duration: 8 },
  { x: '30%', y: '45%', size: 2, delay: 3.5, duration: 14 },
  { x: '78%', y: '88%', size: 3, delay: 0.3, duration: 10 },
  { x: '48%', y: '30%', size: 2, delay: 2.8, duration: 9 },
  { x: '92%', y: '75%', size: 3, delay: 1.8, duration: 11 },
  { x: '25%', y: '90%', size: 2, delay: 0.7, duration: 13 },
  { x: '60%', y: '50%', size: 4, delay: 4,   duration: 10 },
  { x: '15%', y: '40%', size: 2, delay: 2.5, duration: 12 },
  { x: '82%', y: '30%', size: 3, delay: 1.1, duration: 9 },
  { x: '45%', y: '65%', size: 2, delay: 3.2, duration: 11 },
]

export default function FloatingParticles() {
  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden" style={{ zIndex: 1 }}>
      {PARTICLES.map((p, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full"
          style={{
            left: p.x,
            top: p.y,
            width: p.size,
            height: p.size,
            background: i % 3 === 0
              ? 'rgba(201, 151, 62, 0.55)'
              : i % 3 === 1
              ? 'rgba(244, 196, 212, 0.6)'
              : 'rgba(255, 190, 160, 0.5)',
            boxShadow: `0 0 ${p.size * 2}px rgba(201, 151, 62, 0.3)`,
          }}
          initial={{ opacity: 0, y: 0 }}
          animate={{
            opacity: [0, 0.8, 0.4, 0.9, 0],
            y: [0, -30, 10, -20, 0],
            x: [0, 8, -5, 12, 0],
          }}
          transition={{
            duration: p.duration,
            delay: p.delay,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
      ))}
    </div>
  )
}
