import { motion } from 'framer-motion'
import MemoryCard from './MemoryCard'

// ─── Timeline Section ─────────────────────────────────────────────────────────
// Renders one chapter of the timeline.
// The background gradient, accent colors, and all text come from timeline.json.
// ─────────────────────────────────────────────────────────────────────────────

export default function TimelineSection({ section, index, onCardClick }) {
  const isEven = index % 2 === 0
  const isClimax = section.mood === 'climax'

  return (
    <section
      className="relative w-full overflow-hidden"
      style={{
        background: `linear-gradient(180deg, ${section.gradientFrom} 0%, ${section.gradientTo} 100%)`,
        paddingTop: '10rem',
        paddingBottom: '10rem',
      }}
    >
      {/* ── Ambient side glow ── */}
      <motion.div
        className="absolute pointer-events-none"
        style={{
          [isEven ? 'left' : 'right']: '-8%',
          top: '20%',
          width: 500,
          height: 500,
          borderRadius: '50%',
          background: `radial-gradient(circle, ${section.accentColor}22, transparent 70%)`,
        }}
        animate={{
          scale: [1, 1.08, 1],
          opacity: [0.5, 0.7, 0.5],
        }}
        transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
      />

      {/* ── Chapter index number (decorative) ── */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, margin: '-100px' }}
        transition={{ duration: 1.2 }}
        className="absolute pointer-events-none"
        style={{
          [isEven ? 'left' : 'right']: '4%',
          top: '6%',
          fontFamily: '"Playfair Display", serif',
          fontSize: 'clamp(5rem, 14vw, 13rem)',
          fontWeight: 700,
          lineHeight: 1,
          color: `${section.accentColor}14`,
          userSelect: 'none',
        }}
      >
        {String(index + 1).padStart(2, '0')}
      </motion.div>

      <div
        className="relative mx-auto px-6 md:px-16"
        style={{ maxWidth: 1100, zIndex: 2 }}
      >
        {/* ── Section header ── */}
        <div className="mb-20">
          {/* Year range */}
          <motion.p
            initial={{ opacity: 0, x: isEven ? -20 : 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 1, ease: 'easeOut' }}
            className="font-body tracking-[0.5em] uppercase mb-4"
            style={{
              fontSize: '0.72rem',
              color: section.accentColor,
            }}
          >
            {section.years}
          </motion.p>

          {/* Chapter title */}
          <motion.h2
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 1.2, delay: 0.1, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="font-cinematic mb-6"
            style={{
              fontSize: 'clamp(2.4rem, 6vw, 5.5rem)',
              color: '#3D2B1F',
              fontWeight: isClimax ? 600 : 400,
              lineHeight: 1.1,
              fontStyle: isClimax ? 'italic' : 'normal',
            }}
          >
            {section.title}
          </motion.h2>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 1, delay: 0.2 }}
            className="font-body mb-8"
            style={{
              fontSize: '0.9rem',
              color: '#B8956A',
              letterSpacing: '0.06em',
            }}
          >
            {section.subtitle}
          </motion.p>

          {/* Divider */}
          <motion.div
            initial={{ scaleX: 0, opacity: 0 }}
            whileInView={{ scaleX: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.1, delay: 0.3 }}
            style={{
              width: 64,
              height: 1,
              background: `linear-gradient(to right, ${section.accentColor}, transparent)`,
              transformOrigin: 'left',
              marginBottom: '2.5rem',
            }}
          />

          {/* Section quote */}
          <motion.blockquote
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, delay: 0.35 }}
            className="font-cinematic italic"
            style={{
              fontSize: 'clamp(1.1rem, 2.5vw, 1.6rem)',
              color: '#8B6345',
              fontWeight: 400,
              maxWidth: 640,
              lineHeight: 1.65,
            }}
          >
            "{section.quote}"
          </motion.blockquote>
        </div>

        {/* ── Memory card grid ── */}
        <div
          className="grid gap-6 md:gap-8"
          style={{
            gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))',
          }}
        >
          {section.memories.map((memory, i) => (
            <MemoryCard
              key={memory.id}
              memory={memory}
              index={i}
              onClick={onCardClick}
            />
          ))}
        </div>
      </div>

      {/* ── Bottom gradient fade into next section ── */}
      <div
        className="absolute bottom-0 left-0 right-0 pointer-events-none"
        style={{
          height: 80,
          background: `linear-gradient(to bottom, transparent, ${section.gradientTo})`,
        }}
      />
    </section>
  )
}
