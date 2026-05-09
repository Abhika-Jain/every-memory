import { useState, useRef } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import OpeningScreen from './components/OpeningScreen'
import Timeline from './components/Timeline'
import MyStory from './components/MyStory'
import MusicPlayer from './components/MusicPlayer'

export default function App() {
  // Scenes: 'opening' | 'timeline' | 'mystory'
  const [scene, setScene] = useState('opening')
  const audioRef = useRef(null)

  function startMusic() {
    if (audioRef.current) {
      audioRef.current.volume = 0.18
      audioRef.current.play().catch(() => {
        // autoplay blocked — user can unmute manually via the music button
      })
    }
  }

  function handleProfileSelect(profile) {
    console.log('[App] Profile selected:', profile) // ← debug log

    if (profile === 'mom') {
      setScene('timeline')
      startMusic()
    } else if (profile === 'me') {
      // FIX: was missing — "Me / My Story" card now opens correctly
      console.log('[App] Opening My Story scene')
      setScene('mystory')
      startMusic()
    }
  }

  function handleBackToOpening() {
    console.log('[App] Returning to opening screen')
    setScene('opening')
  }

  const showMusic = scene === 'timeline' || scene === 'mystory'

  return (
    <div className="relative min-h-screen" style={{ background: '#FDF8F3' }}>
      {/* ── Background music ──
          Place your audio file at: public/music/ambient.mp3 */}
      <audio
        ref={audioRef}
        src="/music/ambient.mp3"
        loop
        preload="auto"
        style={{ display: 'none' }}
      />

      {/* ── Music toggle (visible in timeline and mystory) ── */}
      {showMusic && <MusicPlayer audioRef={audioRef} />}

      {/* ── Scene transitions ── */}
      <AnimatePresence mode="wait">

        {scene === 'opening' && (
          <motion.div key="opening">
            <OpeningScreen onSelectProfile={handleProfileSelect} />
          </motion.div>
        )}

        {scene === 'timeline' && (
          <motion.div
            key="timeline"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.8, ease: 'easeInOut' }}
          >
            <Timeline />
          </motion.div>
        )}

        {scene === 'mystory' && (
          <motion.div
            key="mystory"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.8, ease: 'easeInOut' }}
          >
            <MyStory onBack={handleBackToOpening} />
          </motion.div>
        )}

      </AnimatePresence>
    </div>
  )
}
