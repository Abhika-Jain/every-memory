import { motion } from 'framer-motion'
import { useState } from 'react'

// ─── Profile Card ───────────────────────────────────────────────
// Replace placeholder avatar with a real photo by updating the
// `avatarSrc` prop or placing an image at: public/assets/profiles/mom.jpg
// ────────────────────────────────────────────────────────────────

export default function ProfileCard({ name, subtitle, emoji, onClick, delay = 0, avatarSrc }) {
  const [hovered, setHovered] = useState(false)

  return (
    <motion.button
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, delay, ease: [0.25, 0.46, 0.45, 0.94] }}
      onClick={onClick}
      onHoverStart={() => setHovered(true)}
      onHoverEnd={() => setHovered(false)}
      className="relative flex flex-col items-center cursor-pointer outline-none group"
      whileTap={{ scale: 0.97 }}
    >
      {/* Card shell */}
      <motion.div
        className="relative flex flex-col items-center p-8 rounded-2xl"
        animate={{
          boxShadow: hovered
            ? '0 0 0 1px rgba(201,151,62,0.5), 0 20px 60px rgba(201,151,62,0.15), 0 0 40px rgba(244,196,212,0.2)'
            : '0 0 0 1px rgba(201,151,62,0.2), 0 8px 30px rgba(201,151,62,0.06)',
          backgroundColor: hovered ? 'rgba(255,255,255,0.85)' : 'rgba(255,255,255,0.65)',
        }}
        transition={{ duration: 0.5 }}
        style={{ backdropFilter: 'blur(16px)', width: 160 }}
      >
        {/* Glow ring */}
        <motion.div
          className="absolute inset-0 rounded-2xl"
          style={{ background: 'radial-gradient(ellipse at 50% 0%, rgba(201,151,62,0.12), transparent 70%)' }}
          animate={{ opacity: hovered ? 1 : 0 }}
          transition={{ duration: 0.4 }}
        />

        {/* Avatar circle */}
        <motion.div
          className="relative mb-4 rounded-full overflow-hidden flex items-center justify-center"
          style={{
            width: 80,
            height: 80,
            background: avatarSrc
              ? 'transparent'
              : 'linear-gradient(135deg, #FCE8EF 0%, #FFE8DA 100%)',
            border: '2px solid rgba(201,151,62,0.3)',
          }}
          animate={{
            borderColor: hovered ? 'rgba(201,151,62,0.7)' : 'rgba(201,151,62,0.3)',
            boxShadow: hovered
              ? '0 0 20px rgba(201,151,62,0.25)'
              : '0 0 0px rgba(201,151,62,0)',
          }}
          transition={{ duration: 0.5 }}
        >
          {avatarSrc ? (
            <img
              src={avatarSrc}
              alt={name}
              className="w-full h-full object-cover"
            />
          ) : (
            <span style={{ fontSize: 32, lineHeight: 1 }}>{emoji}</span>
          )}
        </motion.div>

        {/* Name */}
        <p
          className="font-cinematic text-xl mb-1"
          style={{ color: '#3D2B1F', fontWeight: 600 }}
        >
          {name}
        </p>

        {/* Subtitle */}
        <p
          className="font-body text-xs tracking-widest uppercase"
          style={{ color: '#B8956A', letterSpacing: '0.15em' }}
        >
          {subtitle}
        </p>

        {/* Enter hint */}
        <motion.p
          className="font-body text-xs mt-3"
          style={{ color: '#C9973E' }}
          animate={{ opacity: hovered ? 1 : 0, y: hovered ? 0 : 4 }}
          transition={{ duration: 0.3 }}
        >
          Enter →
        </motion.p>
      </motion.div>
    </motion.button>
  )
}
