import { motion } from 'framer-motion'

// ─── Ending Section ───────────────────────────────────────────────────────────
// The emotional finale of the timeline.
// Text is pulled from timeline.json → meta.endingMessage / meta.endingSubtext.
// ─────────────────────────────────────────────────────────────────────────────

export default function EndingSection({ meta }) {
  return (
    <section
      className="relative w-full overflow-hidden flex flex-col items-center justify-center text-center"
      style={{
        minHeight: '100vh',
        background: 'linear-gradient(160deg, #2A1A0F 0%, #1A0D07 40%, #2D1912 70%, #1E1008 100%)',
        paddingTop: '8rem',
        paddingBottom: '8rem',
        paddingLeft: '2rem',
        paddingRight: '2rem',
      }}
    >
      {/* ── Ambient glows ── */}
      <motion.div
        className="absolute pointer-events-none"
        style={{
          top: '10%',
          left: '50%',
          transform: 'translateX(-50%)',
          width: 800,
          height: 400,
          borderRadius: '50%',
          background: 'radial-gradient(ellipse, rgba(201,151,62,0.15) 0%, transparent 70%)',
        }}
        animate={{ opacity: [0.6, 1, 0.6], scale: [1, 1.05, 1] }}
        transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className="absolute pointer-events-none"
        style={{
          bottom: '15%',
          left: '50%',
          transform: 'translateX(-50%)',
          width: 600,
          height: 300,
          borderRadius: '50%',
          background: 'radial-gradient(ellipse, rgba(244,196,212,0.08) 0%, transparent 70%)',
        }}
        animate={{ opacity: [0.4, 0.7, 0.4] }}
        transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut' }}
      />

      {/* ── Floating particles in dark ── */}
      {[...Array(10)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full pointer-events-none"
          style={{
            left: `${10 + i * 9}%`,
            top: `${20 + (i % 3) * 25}%`,
            width: i % 2 === 0 ? 2 : 3,
            height: i % 2 === 0 ? 2 : 3,
            background: i % 3 === 0
              ? 'rgba(201,151,62,0.6)'
              : 'rgba(244,196,212,0.4)',
          }}
          animate={{
            opacity: [0, 0.8, 0],
            y: [0, -40, 0],
          }}
          transition={{
            duration: 6 + i,
            delay: i * 0.7,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
      ))}

      {/* ── Content ── */}
      <div className="relative" style={{ zIndex: 2, maxWidth: 700 }}>
        {/* Pre-label */}
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 0.6, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, delay: 0.2 }}
          className="font-body text-xs tracking-[0.5em] uppercase mb-10"
          style={{ color: '#C9973E' }}
        >
          Always &amp; forever
        </motion.p>

        {/* Divider top */}
        <motion.div
          initial={{ scaleX: 0, opacity: 0 }}
          whileInView={{ scaleX: 1, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, delay: 0.4 }}
          style={{
            width: 80,
            height: 1,
            background: 'linear-gradient(to right, transparent, rgba(201,151,62,0.6), transparent)',
            margin: '0 auto 3rem',
          }}
        />

        {/* Main emotional message */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1.5, delay: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="font-cinematic italic leading-relaxed"
          style={{
            fontSize: 'clamp(1.5rem, 4vw, 2.8rem)',
            color: '#FDF8F3',
            fontWeight: 400,
            marginBottom: '3rem',
            textShadow: '0 2px 40px rgba(201,151,62,0.25)',
          }}
        >
          "{meta?.endingMessage || 'No matter how much I grow, some part of me will always reach for you first.'}"
        </motion.p>

        {/* Subtext */}
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, delay: 0.9 }}
          className="font-body leading-relaxed"
          style={{
            fontSize: 'clamp(0.9rem, 1.8vw, 1.1rem)',
            color: 'rgba(184,149,106,0.85)',
            fontStyle: 'italic',
            marginBottom: '4rem',
          }}
        >
          {meta?.endingSubtext || 'Thank you for being the first place I ever felt safe.'}
        </motion.p>

        {/* Divider bottom */}
        <motion.div
          initial={{ scaleX: 0, opacity: 0 }}
          whileInView={{ scaleX: 1, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, delay: 1.1 }}
          style={{
            width: 80,
            height: 1,
            background: 'linear-gradient(to right, transparent, rgba(201,151,62,0.5), transparent)',
            margin: '0 auto 3.5rem',
          }}
        />

        {/* Closing signature */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.4, delay: 1.3 }}
        >
          <p
            className="font-elegant"
            style={{
              fontSize: 'clamp(0.85rem, 1.5vw, 1rem)',
              color: 'rgba(201,151,62,0.55)',
              letterSpacing: '0.25em',
              textTransform: 'uppercase',
            }}
          >
            Happy Mother's Day
          </p>
          <motion.div
            className="flex items-center justify-center mt-4 gap-2"
            animate={{ opacity: [0.5, 0.85, 0.5] }}
            transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
          >
            <span style={{ color: 'rgba(244,196,212,0.5)', fontSize: 18 }}>♡</span>
            <span style={{ color: 'rgba(244,196,212,0.5)', fontSize: 12 }}>♡</span>
            <span style={{ color: 'rgba(244,196,212,0.5)', fontSize: 18 }}>♡</span>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
