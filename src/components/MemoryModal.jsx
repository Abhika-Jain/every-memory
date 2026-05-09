import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

// ─── Memory Modal / Lightbox ──────────────────────────────────────────────────
// Opens when a MemoryCard is clicked.
// Shows full media on the left, emotional text on the right.
// Close with the X button, Escape key, or clicking outside.
// ─────────────────────────────────────────────────────────────────────────────

export default function MemoryModal({ memory, onClose }) {
  const [imgError, setImgError] = useState(false)

  // Close on Escape
  useEffect(() => {
    function handleKey(e) {
      if (e.key === 'Escape') onClose()
    }
    window.addEventListener('keydown', handleKey)
    return () => window.removeEventListener('keydown', handleKey)
  }, [onClose])

  if (!memory) return null
  const isVideo = memory.type === 'video'
  const hasMedia = !imgError && memory.src

  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 flex items-center justify-center"
        style={{ zIndex: 9990, padding: '24px' }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.4 }}
        onClick={onClose}
      >
        {/* Blurred backdrop */}
        <motion.div
          className="absolute inset-0"
          style={{ backdropFilter: 'blur(18px)', background: 'rgba(39,24,15,0.55)' }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
        />

        {/* Modal card */}
        <motion.div
          className="relative flex flex-col md:flex-row overflow-hidden"
          style={{
            maxWidth: 900,
            width: '100%',
            maxHeight: '90vh',
            borderRadius: 20,
            background: '#FDF8F3',
            boxShadow: '0 40px 100px rgba(39,24,15,0.4), 0 0 0 1px rgba(201,151,62,0.15)',
          }}
          initial={{ opacity: 0, scale: 0.93, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 10 }}
          transition={{ duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
          onClick={(e) => e.stopPropagation()}
        >
          {/* ── Left: Media ── */}
          <div
            className="relative flex-shrink-0"
            style={{
              width: '100%',
              maxWidth: 440,
              minHeight: 300,
              background: memory.placeholderGradient,
            }}
          >
            {hasMedia && !isVideo && (
              <img
                src={memory.src}
                alt={memory.caption}
                className="w-full h-full object-cover"
                style={{ maxHeight: '90vh' }}
                onError={() => setImgError(true)}
              />
            )}
            {hasMedia && isVideo && (
              <video
                src={memory.src}
                className="w-full h-full object-cover"
                controls
                autoPlay
                muted
                playsInline
                onError={() => setImgError(true)}
              />
            )}
            {!hasMedia && (
              <div className="absolute inset-0 flex items-center justify-center">
                <span style={{ fontSize: 48, opacity: 0.3 }}>🌸</span>
              </div>
            )}

            {/* Caption badge */}
            <div
              className="absolute bottom-4 left-4 right-4"
              style={{
                background: 'rgba(39,24,15,0.5)',
                backdropFilter: 'blur(8px)',
                borderRadius: 10,
                padding: '6px 14px',
              }}
            >
              <p
                className="font-body text-xs tracking-widest uppercase"
                style={{ color: 'rgba(248,217,152,0.9)' }}
              >
                {memory.caption}
              </p>
            </div>
          </div>

          {/* ── Right: Text ── */}
          <div
            className="flex flex-col justify-center p-10 md:p-12"
            style={{ flex: 1 }}
          >
            {/* Decorative top line */}
            <div
              style={{
                width: 40,
                height: 1,
                background: 'linear-gradient(to right, #C9973E, rgba(201,151,62,0.3))',
                marginBottom: '2rem',
              }}
            />

            {/* Year label */}
            <p
              className="font-body text-xs tracking-[0.35em] uppercase mb-4"
              style={{ color: '#C9973E' }}
            >
              {memory.id?.split('-').slice(0, 2).join('–') ?? 'Memory'}
            </p>

            {/* Emotional text */}
            <motion.p
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="font-cinematic leading-relaxed italic"
              style={{
                fontSize: 'clamp(1.05rem, 2vw, 1.35rem)',
                color: '#3D2B1F',
                fontWeight: 400,
              }}
            >
              "{memory.text}"
            </motion.p>

            {/* Decorative bottom line */}
            <div
              style={{
                width: 40,
                height: 1,
                background: 'linear-gradient(to right, #C9973E, rgba(201,151,62,0.3))',
                marginTop: '2.5rem',
              }}
            />
          </div>

          {/* ── Close button ── */}
          <motion.button
            className="absolute top-5 right-5 flex items-center justify-center outline-none cursor-pointer"
            style={{
              width: 36,
              height: 36,
              borderRadius: '50%',
              background: 'rgba(253,248,243,0.9)',
              border: '1px solid rgba(201,151,62,0.25)',
              color: '#8B6345',
              fontSize: 16,
              fontWeight: 300,
              backdropFilter: 'blur(8px)',
            }}
            onClick={onClose}
            whileHover={{ scale: 1.1, borderColor: 'rgba(201,151,62,0.6)' }}
            whileTap={{ scale: 0.95 }}
          >
            ✕
          </motion.button>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  )
}
