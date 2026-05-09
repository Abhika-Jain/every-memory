import { useState } from 'react'
import { motion } from 'framer-motion'

// ─── Music Player ─────────────────────────────────────────────────────────────
// Fixed floating button to mute/unmute ambient music.
// Audio source: public/music/ambient.mp3
// Place any soft piano/ambient MP3 file there.
// ─────────────────────────────────────────────────────────────────────────────

export default function MusicPlayer({ audioRef }) {
  const [muted, setMuted] = useState(false)

  function toggleMute() {
    if (!audioRef.current) return
    audioRef.current.muted = !muted
    setMuted(!muted)
  }

  return (
    <motion.button
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.8, delay: 1 }}
      onClick={toggleMute}
      title={muted ? 'Unmute music' : 'Mute music'}
      className="fixed flex items-center gap-2 outline-none cursor-pointer"
      style={{
        top: 24,
        right: 24,
        zIndex: 9999,
        background: 'rgba(253,248,243,0.82)',
        border: '1px solid rgba(201,151,62,0.25)',
        borderRadius: 40,
        padding: '8px 14px 8px 10px',
        backdropFilter: 'blur(12px)',
        boxShadow: '0 4px 20px rgba(201,151,62,0.12)',
      }}
      whileHover={{
        boxShadow: '0 4px 24px rgba(201,151,62,0.2)',
        borderColor: 'rgba(201,151,62,0.5)',
      }}
      whileTap={{ scale: 0.95 }}
    >
      {/* Sound bars animation when playing */}
      <div className="flex items-end gap-[2px]" style={{ height: 14 }}>
        {[1, 2, 3].map((bar) => (
          <motion.div
            key={bar}
            style={{
              width: 2,
              borderRadius: 2,
              background: muted ? '#D4B896' : '#C9973E',
            }}
            animate={
              muted
                ? { height: 4 }
                : {
                    height: [4, 12, 6, 10, 4],
                    transition: {
                      duration: 1.2,
                      repeat: Infinity,
                      delay: bar * 0.2,
                      ease: 'easeInOut',
                    },
                  }
            }
          />
        ))}
      </div>

      <span
        className="font-body text-xs tracking-widest"
        style={{ color: muted ? '#B8956A' : '#8B6345', letterSpacing: '0.08em' }}
      >
        {muted ? 'Music off' : 'Music on'}
      </span>
    </motion.button>
  )
}
