import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import timelineData from '../content/timeline.json'
import TimelineSection from './TimelineSection'
import EndingSection from './EndingSection'
import MemoryModal from './MemoryModal'

// ─── Timeline ─────────────────────────────────────────────────────────────────
// Orchestrates all sections and the modal lightbox.
// All content comes from src/content/timeline.json — edit there.
// ─────────────────────────────────────────────────────────────────────────────

export default function Timeline() {
  const [activeModal, setActiveModal] = useState(null)

  function openModal(memory) {
    setActiveModal(memory)
    document.body.style.overflow = 'hidden'
  }

  function closeModal() {
    setActiveModal(null)
    document.body.style.overflow = ''
  }

  return (
    <div className="relative" style={{ background: '#FDF8F3' }}>

      {/* ── Sticky top bar ── */}
      <motion.header
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.5 }}
        className="sticky top-0 flex items-center justify-center"
        style={{
          zIndex: 100,
          height: 56,
          background: 'rgba(253,248,243,0.88)',
          backdropFilter: 'blur(16px)',
          borderBottom: '1px solid rgba(201,151,62,0.12)',
        }}
      >
        <p
          className="font-elegant tracking-[0.35em] uppercase text-xs"
          style={{ color: '#B8956A' }}
        >
          {timelineData.meta.title}
        </p>
      </motion.header>

      {/* ── Hero intro banner ── */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2 }}
        className="flex flex-col items-center justify-center text-center"
        style={{
          minHeight: '70vh',
          background: 'linear-gradient(180deg, #FFF5EE 0%, #FDF8F3 100%)',
          padding: '6rem 2rem',
        }}
      >
        {/* Ambient glow */}
        <div
          className="absolute pointer-events-none"
          style={{
            top: 0,
            left: '50%',
            transform: 'translateX(-50%)',
            width: 700,
            height: 350,
            borderRadius: '50%',
            background: 'radial-gradient(ellipse, rgba(244,196,212,0.2) 0%, transparent 70%)',
          }}
        />

        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 0.6, y: 0 }}
          transition={{ duration: 1.2, delay: 0.8 }}
          className="font-body text-xs tracking-[0.5em] uppercase mb-8"
          style={{ color: '#C9973E' }}
        >
          A love letter in memories
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.6, delay: 1, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="font-cinematic italic"
          style={{
            fontSize: 'clamp(2rem, 5.5vw, 5rem)',
            color: '#3D2B1F',
            fontWeight: 400,
            lineHeight: 1.25,
            maxWidth: 680,
          }}
        >
          {timelineData.meta.subtitle}
        </motion.h1>

        <motion.div
          initial={{ scaleX: 0, opacity: 0 }}
          animate={{ scaleX: 1, opacity: 1 }}
          transition={{ duration: 1.2, delay: 2.0 }}
          style={{
            width: 64,
            height: 1,
            background: 'linear-gradient(to right, transparent, #C9973E, transparent)',
            margin: '3rem auto 0',
          }}
        />

        {/* Scroll invitation */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 2.5 }}
          className="flex flex-col items-center mt-12"
        >
          <p
            className="font-body text-xs tracking-widest mb-3"
            style={{ color: 'rgba(184,149,106,0.6)', fontStyle: 'italic' }}
          >
            Scroll to begin
          </p>
          <motion.div
            animate={{ y: [0, 6, 0] }}
            transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
            style={{
              width: 1,
              height: 36,
              background: 'linear-gradient(to bottom, #C9973E, transparent)',
            }}
          />
        </motion.div>
      </motion.div>

      {/* ── Timeline sections (from JSON) ── */}
      {timelineData.sections.map((section, index) => (
        <TimelineSection
          key={section.id}
          section={section}
          index={index}
          onCardClick={openModal}
        />
      ))}

      {/* ── Emotional ending ── */}
      <EndingSection meta={timelineData.meta} />

      {/* ── Memory lightbox modal ── */}
      <AnimatePresence>
        {activeModal && (
          <MemoryModal memory={activeModal} onClose={closeModal} />
        )}
      </AnimatePresence>
    </div>
  )
}
