import { motion } from 'framer-motion'
import FloatingParticles from './FloatingParticles'
import ProfileCard from './ProfileCard'

// ─── Opening Screen ───────────────────────────────────────────────────────────
// The first thing seen when the app loads.
// Background images / gradients can be changed via the inline style props below.
// ─────────────────────────────────────────────────────────────────────────────

export default function OpeningScreen({ onSelectProfile }) {
  return (
    <motion.div
      className="relative w-screen h-screen overflow-hidden flex flex-col items-center justify-center"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, scale: 1.04 }}
      transition={{ duration: 1.8, ease: 'easeInOut' }}
      style={{
        background: 'radial-gradient(ellipse at 25% 20%, #FFE8DA 0%, #FDF8F3 45%, #FCE8EF 80%, #FDF8F3 100%)',
      }}
    >
      {/* ── Ambient blobs ── */}
      <motion.div
        className="absolute rounded-full pointer-events-none"
        style={{
          top: '-12%', left: '-8%',
          width: 480, height: 480,
          background: 'radial-gradient(circle, rgba(244,196,212,0.35), transparent 70%)',
        }}
        animate={{ x: [0, 18, 0], y: [0, 14, 0] }}
        transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className="absolute rounded-full pointer-events-none"
        style={{
          bottom: '-10%', right: '-8%',
          width: 420, height: 420,
          background: 'radial-gradient(circle, rgba(255,190,160,0.3), transparent 70%)',
        }}
        animate={{ x: [0, -16, 0], y: [0, -18, 0] }}
        transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className="absolute rounded-full pointer-events-none"
        style={{
          top: '35%', right: '15%',
          width: 300, height: 300,
          background: 'radial-gradient(circle, rgba(248,217,152,0.25), transparent 70%)',
        }}
        animate={{ x: [0, 22, 0], y: [0, -12, 0] }}
        transition={{ duration: 14, repeat: Infinity, ease: 'easeInOut' }}
      />

      {/* ── Floating particles ── */}
      <FloatingParticles />

      {/* ── Main content ── */}
      <div className="relative flex flex-col items-center text-center px-6" style={{ zIndex: 10 }}>

        {/* Pre-title label */}
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 0.55, y: 0 }}
          transition={{ duration: 1.4, delay: 0.6, ease: 'easeOut' }}
          className="font-body text-xs tracking-[0.45em] uppercase mb-8"
          style={{ color: '#C9973E' }}
        >
          A tribute, with love
        </motion.p>

        {/* Main headline */}
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.6, delay: 0.9, ease: [0.25, 0.46, 0.45, 0.94] }}
        >
          <h1
            className="font-cinematic leading-tight"
            style={{
              fontSize: 'clamp(2.6rem, 7vw, 6.5rem)',
              color: '#3D2B1F',
              fontWeight: 400,
              textShadow: '0 2px 50px rgba(200,150,60,0.12)',
            }}
          >
            Every memory
          </h1>
          <h1
            className="font-cinematic leading-tight italic"
            style={{
              fontSize: 'clamp(2.6rem, 7vw, 6.5rem)',
              color: '#3D2B1F',
              fontWeight: 400,
            }}
          >
            begins with you.
          </h1>
        </motion.div>

        {/* Decorative divider */}
        <motion.div
          initial={{ scaleX: 0, opacity: 0 }}
          animate={{ scaleX: 1, opacity: 1 }}
          transition={{ duration: 1.2, delay: 2.0 }}
          style={{
            width: 96,
            height: 1,
            background: 'linear-gradient(to right, transparent, #C9973E, transparent)',
            margin: '2.5rem auto',
          }}
        />

        {/* Choose prompt */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 2.4 }}
        >
          <p
            className="font-body text-xs tracking-[0.4em] uppercase mb-10"
            style={{ color: '#B8956A' }}
          >
            Choose perspective
          </p>

          <div className="flex gap-6 md:gap-10 flex-wrap justify-center">
            {/* ── Mom profile ─────────────────────────────────────────
                Replace emoji with avatarSrc="/assets/profiles/mom.jpg"
                once you have a photo ready.
             ── */}
            <ProfileCard
              name="Mom"
              subtitle="Her story"
              emoji="🌸"
              onClick={() => onSelectProfile('mom')}
              delay={2.7}
              avatarSrc="/assets/profiles/mom.jpg"
              
            />

            {/* ── Me profile ──────────────────────────────────────────
                Replace emoji with avatarSrc="/assets/profiles/me.jpg"
             ── */}
            <ProfileCard
              name="Me"
              subtitle="My story"
              emoji="✨"
              onClick={() => onSelectProfile('me')}
              delay={2.9}
              avatarSrc="/assets/profiles/me.jpeg"
            />
          </div>
        </motion.div>

        {/* Hint text at bottom */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.35 }}
          transition={{ duration: 1.2, delay: 4 }}
          className="font-body text-xs mt-16"
          style={{ color: '#B8956A', fontStyle: 'italic' }}
        >
          Scroll gently. Take your time.
        </motion.p>
      </div>
    </motion.div>
  )
}
