import { useState } from 'react'
import { motion } from 'framer-motion'

// ─── Memory Card ──────────────────────────────────────────────────────────────
// Shows a photo or video.
// If the image file doesn't exist, falls back to the placeholderGradient color.
// Click the card to open the modal lightbox.
// ─────────────────────────────────────────────────────────────────────────────

export default function MemoryCard({ memory, index, onClick }) {
  const [imgError, setImgError] = useState(false)
  const [hovered, setHovered] = useState(false)

  const isVideo = memory.type === 'video'
  const hasMedia = !imgError && memory.src

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.9, delay: index * 0.15, ease: [0.25, 0.46, 0.45, 0.94] }}
      className="relative cursor-pointer overflow-hidden"
      style={{
        borderRadius: 16,
        aspectRatio: '3 / 4',
        boxShadow: '0 4px 30px rgba(61,43,31,0.09)',
      }}
      onClick={() => onClick(memory)}
      onHoverStart={() => setHovered(true)}
      onHoverEnd={() => setHovered(false)}
      whileHover={{ y: -6 }}
      whileTap={{ scale: 0.985 }}
    >
      {/* ── Media area ── */}
      {hasMedia && !isVideo ? (
        <img
          src={memory.src}
          alt={memory.caption}
          className="absolute inset-0 w-full h-full object-cover"
          onError={() => setImgError(true)}
        />
      ) : hasMedia && isVideo ? (
        <video
          src={memory.src}
          className="absolute inset-0 w-full h-full object-cover"
          muted
          playsInline
          onError={() => setImgError(true)}
        />
      ) : (
        /* Placeholder gradient shown when no photo is loaded yet */
        <div
          className="absolute inset-0 flex flex-col items-center justify-center"
          style={{ background: memory.placeholderGradient }}
        >
          <div
            className="mb-3 opacity-30"
            style={{ fontSize: 28 }}
          >
            🌸
          </div>
          <p
            className="font-body text-xs text-center px-4 opacity-40 leading-relaxed"
            style={{ color: '#8B6345', fontStyle: 'italic' }}
          >
            {memory.placeholderLabel || 'Add photo here'}
          </p>
        </div>
      )}

      {/* ── Hover overlay with text ── */}
      <motion.div
        className="absolute inset-0 flex flex-col justify-end p-5"
        style={{
          background: 'linear-gradient(to top, rgba(39,24,15,0.75) 0%, rgba(39,24,15,0.2) 50%, transparent 100%)',
        }}
        animate={{ opacity: hovered ? 1 : hasMedia ? 0.6 : 0.8 }}
        transition={{ duration: 0.4 }}
      >
        {/* Caption */}
        <motion.p
          className="font-body text-xs tracking-widest uppercase mb-1.5"
          style={{ color: 'rgba(248,217,152,0.85)', letterSpacing: '0.12em' }}
          animate={{ opacity: hovered ? 1 : 0.7 }}
        >
          {memory.caption}
        </motion.p>

        {/* Teaser text on hover */}
        <motion.p
          className="font-body text-sm leading-relaxed"
          style={{ color: 'rgba(255,248,240,0.9)', fontStyle: 'italic' }}
          initial={false}
          animate={{ opacity: hovered ? 1 : 0, y: hovered ? 0 : 8 }}
          transition={{ duration: 0.35 }}
        >
          {memory.text.length > 80
            ? memory.text.slice(0, 80) + '…'
            : memory.text}
        </motion.p>
      </motion.div>

      {/* ── Hover gold border ── */}
      <motion.div
        className="absolute inset-0 rounded-[16px] pointer-events-none"
        style={{ border: '1px solid rgba(201,151,62,0)' }}
        animate={{
          borderColor: hovered ? 'rgba(201,151,62,0.45)' : 'rgba(201,151,62,0)',
          boxShadow: hovered ? '0 0 24px rgba(201,151,62,0.12)' : '0 0 0px rgba(201,151,62,0)',
        }}
        transition={{ duration: 0.4 }}
      />

      {/* ── "View" pill on hover ── */}
      <motion.div
        className="absolute top-4 right-4"
        animate={{ opacity: hovered ? 1 : 0, y: hovered ? 0 : -4 }}
        transition={{ duration: 0.3 }}
      >
        <div
          className="font-body text-xs tracking-widest"
          style={{
            color: '#FDF8F3',
            background: 'rgba(201,151,62,0.7)',
            borderRadius: 20,
            padding: '3px 10px',
            backdropFilter: 'blur(4px)',
          }}
        >
          View
        </div>
      </motion.div>
    </motion.div>
  )
}
