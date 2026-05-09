import { useEffect } from 'react'
import { motion } from 'framer-motion'

// ─── My Story ─────────────────────────────────────────────────────────────────
// The personal, reflective counterpart to Mom's timeline.
// Slower, more immersive, scrapbook-cinematic aesthetic.
//
// TO EDIT CONTENT: change the POLAROIDS and PARAGRAPHS arrays below.
// TO ADD PHOTOS: replace placeholderGradient with an actual src="/assets/..." img.
// ─────────────────────────────────────────────────────────────────────────────

// ── Editable content ────────────────────────────────────────────────────────

const POLAROIDS = [
  {
    id: 'p1',
    src: '/assets/mystory/poloroid1.jpeg', // Replace with: '/assets/mystory/polaroid1.jpg'
    placeholderGradient: 'linear-gradient(145deg, #FCE8EF 0%, #FFE8DA 100%)',
    placeholderIcon: '🌸',
    caption: 'somewhere, sometime',
    rotation: -4.5,
    floatDelay: 0,
    floatDuration: 7,
  },
  {
    id: 'p2',
    src: '/assets/mystory/poloroid2.jpeg', // Replace with: '/assets/mystory/polaroid2.jpg'
    placeholderGradient: 'linear-gradient(145deg, #FDF0D5 0%, #F9D0DF 100%)',
    placeholderIcon: '✨',
    caption: 'us, always',
    rotation: 3.2,
    floatDelay: 1.2,
    floatDuration: 9,
  },
  {
    id: 'p3',
    src: '/assets/mystory/poloroid3.jpeg',// Replace with: '/assets/mystory/polaroid3.jpg'
    placeholderGradient: 'linear-gradient(145deg, #FFF0E6 0%, #FCE8EF 100%)',
    placeholderIcon: '🕯️',
    caption: 'a memory kept',
    rotation: -2.1,
    floatDelay: 2.5,
    floatDuration: 8,
  },
]

const PARAGRAPHS = [
  {
    id: 'para-1',
    label: 'What I Know Now',
    text: `There are things you only understand about your mother after you've lived enough life to need her in the way she always needed you to be okay. I used to think love was something that just existed between people — automatic, easy, assumed. I didn't see the labor of it. The early mornings, the quiet worrying that never stopped even after I fell asleep. The way you would absorb my worst days like it was just what love did.`,
  },
  {
    id: 'para-2',
    label: 'What You Gave Me',
    text: `You gave me a template for how to move through the world — not in the form of instructions, but in the form of watching you. The way you stayed soft even when things were hard. The way you found something worth laughing about in weeks that didn't deserve it. I find myself doing those things now, without thinking, and I realize: that's you, living inside me, long after the conversation ended.`,
  },
  {
    id: 'para-3',
    label: 'What I Want You to Know',
    text: `I don't say it the right way, or often enough. But there is not a version of the person I've become that doesn't trace back to you — to being loved by you, held to something by you, believed in by you even during the years I didn't believe in myself. Whatever this is — this life I'm building — it began in you. It will always carry you.`,
  },
  {
    id: 'para-4',
    label: 'This Day',
    text: `Today, more than any other day, I want you to feel what you've meant. Not just as a mother — though that alone would be enough — but as a person. As someone who gave without keeping record. As someone who showed me what grace looks like when it has to work hard. I see you. I'm grateful. And I love you more than I know how to say — so I made this instead.`,
  },
]

// ── Component ────────────────────────────────────────────────────────────────

export default function MyStory({ onBack }) {
  // Debug: verify the component mounted
  useEffect(() => {
    console.log('[MyStory] Component mounted — My Story scene is rendering correctly')
  }, [])

  return (
    <div
      className="relative w-full overflow-x-hidden"
      style={{ background: 'linear-gradient(180deg, #FFF5EE 0%, #FDF8F3 30%, #FFF8F2 100%)', minHeight: '100vh' }}
    >
      {/* ── Ambient background glows ── */}
      <motion.div
        className="absolute pointer-events-none"
        style={{
          top: '5%', left: '5%',
          width: 600, height: 400,
          borderRadius: '50%',
          background: 'radial-gradient(ellipse, rgba(244,196,212,0.22) 0%, transparent 70%)',
        }}
        animate={{ opacity: [0.5, 0.8, 0.5], scale: [1, 1.06, 1] }}
        transition={{ duration: 9, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className="absolute pointer-events-none"
        style={{
          bottom: '10%', right: '0%',
          width: 500, height: 500,
          borderRadius: '50%',
          background: 'radial-gradient(ellipse, rgba(201,151,62,0.10) 0%, transparent 70%)',
        }}
        animate={{ opacity: [0.4, 0.7, 0.4] }}
        transition={{ duration: 11, repeat: Infinity, ease: 'easeInOut' }}
      />

      {/* ── Back button ── */}
      <motion.button
        initial={{ opacity: 0, x: -10 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.4 }}
        onClick={() => {
          console.log('[MyStory] Back button clicked')
          onBack()
        }}
        className="fixed flex items-center gap-2 outline-none cursor-pointer"
        style={{
          top: 24, left: 24, zIndex: 9999,
          background: 'rgba(253,248,243,0.85)',
          border: '1px solid rgba(201,151,62,0.25)',
          borderRadius: 40,
          padding: '8px 16px',
          backdropFilter: 'blur(12px)',
          color: '#8B6345',
          fontFamily: '"Lora", Georgia, serif',
          fontSize: '0.78rem',
          letterSpacing: '0.08em',
        }}
        whileHover={{ borderColor: 'rgba(201,151,62,0.55)', x: -2 }}
        whileTap={{ scale: 0.96 }}
      >
        ← Back
      </motion.button>

      {/* ── Page content ── */}
      <div
        className="relative mx-auto px-6 md:px-16"
        style={{ maxWidth: 1060, paddingTop: '9rem', paddingBottom: '10rem', zIndex: 2 }}
      >

        {/* ── Page header ── */}
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5, delay: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="mb-20"
        >
          <p
            className="font-body text-xs tracking-[0.5em] uppercase mb-5"
            style={{ color: '#C9973E' }}
          >
            My story
          </p>
          <h1
            className="font-cinematic italic"
            style={{
              fontSize: 'clamp(2.2rem, 5.5vw, 4.8rem)',
              color: '#3D2B1F',
              fontWeight: 400,
              lineHeight: 1.2,
              maxWidth: 660,
            }}
          >
            Everything I am,<br />I learned from watching you.
          </h1>
          <div
            style={{
              width: 64, height: 1, marginTop: '2.5rem',
              background: 'linear-gradient(to right, #C9973E, rgba(201,151,62,0.2))',
            }}
          />
        </motion.div>

        {/* ── Polaroid cluster ── */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.4, delay: 1.0 }}
          className="relative mb-28 flex flex-wrap justify-center md:justify-start"
          style={{ gap: '2.5rem', minHeight: 380 }}
        >
          {POLAROIDS.map((p, i) => (
            <Polaroid key={p.id} polaroid={p} index={i} />
          ))}
        </motion.div>

        {/* ── Emotional long-form text ── */}
        <div
          className="grid gap-16"
          style={{
            gridTemplateColumns: 'repeat(auto-fill, minmax(min(100%, 460px), 1fr))',
          }}
        >
          {PARAGRAPHS.map((para, i) => (
            <ParagraphBlock key={para.id} para={para} index={i} />
          ))}
        </div>

        {/* ── Closing signature ── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1.4, delay: 0.3 }}
          className="flex flex-col items-center text-center mt-28"
        >
          <div
            style={{
              width: 80, height: 1, marginBottom: '3rem',
              background: 'linear-gradient(to right, transparent, #C9973E, transparent)',
            }}
          />
          <p
            className="font-cinematic italic"
            style={{
              fontSize: 'clamp(1.1rem, 2.5vw, 1.6rem)',
              color: '#8B6345',
              maxWidth: 520,
              lineHeight: 1.7,
            }}
          >
            "With love deeper than I know how to measure —<br />
            <em style={{ color: '#B8956A', fontSize: '0.85em' }}>from the child you made possible.</em>"
          </p>
          <motion.div
            className="flex items-center gap-3 mt-8"
            animate={{ opacity: [0.4, 0.75, 0.4] }}
            transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
          >
            <span style={{ color: '#F4C4D4', fontSize: 20 }}>♡</span>
            <span style={{ color: '#F4C4D4', fontSize: 13 }}>♡</span>
            <span style={{ color: '#F4C4D4', fontSize: 20 }}>♡</span>
          </motion.div>
        </motion.div>
      </div>
    </div>
  )
}

// ─── Polaroid card ────────────────────────────────────────────────────────────

function Polaroid({ polaroid, index }) {
  const { src, placeholderGradient, placeholderIcon, caption, rotation, floatDelay, floatDuration } = polaroid

  return (
    <motion.div
      initial={{ opacity: 0, y: 40, rotate: rotation * 0.4, filter: 'blur(8px)' }}
      animate={{
        opacity: 1,
        y: 0,
        rotate: rotation,
        filter: 'blur(0px)',
      }}
      transition={{
        duration: 1.4,
        delay: 0.8 + index * 0.25,
        ease: [0.25, 0.46, 0.45, 0.94],
      }}
      style={{
        // Continuous gentle float
        originX: 0.5,
        originY: 1,
      }}
    >
      {/* Float wrapper — separate from entrance animation */}
      <motion.div
        animate={{
          y: [0, -12, 4, -8, 0],
          rotate: [rotation, rotation + 0.8, rotation - 0.5, rotation + 0.3, rotation],
        }}
        transition={{
          duration: floatDuration,
          delay: floatDelay,
          repeat: Infinity,
          ease: 'easeInOut',
          times: [0, 0.3, 0.55, 0.8, 1],
        }}
        whileHover={{ scale: 1.04, zIndex: 10 }}
        style={{ position: 'relative', cursor: 'default' }}
      >
        {/* Polaroid frame */}
        <div
          style={{
            background: '#FEFCF9',
            borderRadius: 4,
            padding: '12px 12px 44px 12px',
            width: 220,
            boxShadow: '0 8px 40px rgba(61,43,31,0.16), 0 2px 8px rgba(61,43,31,0.08), 0 0 0 1px rgba(201,151,62,0.12)',
          }}
        >
          {/* Photo area */}
          <div
            style={{
              width: '100%',
              aspectRatio: '1 / 1',
              borderRadius: 2,
              overflow: 'hidden',
              background: placeholderGradient,
              position: 'relative',
            }}
          >
            {src ? (
              <img
                src={src}
                alt={caption}
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              />
            ) : (
              <div
                style={{
                  width: '100%', height: '100%',
                  display: 'flex', flexDirection: 'column',
                  alignItems: 'center', justifyContent: 'center',
                  gap: 8,
                }}
              >
                <span style={{ fontSize: 32, opacity: 0.4 }}>{placeholderIcon}</span>
                <p
                  style={{
                    fontSize: '0.65rem',
                    fontFamily: '"Lora", Georgia, serif',
                    color: '#B8956A',
                    opacity: 0.55,
                    fontStyle: 'italic',
                  }}
                >
                  add photo
                </p>
              </div>
            )}

            {/* Soft inner vignette for depth */}
            <div
              style={{
                position: 'absolute', inset: 0,
                background: 'radial-gradient(ellipse at center, transparent 60%, rgba(61,43,31,0.08) 100%)',
                pointerEvents: 'none',
              }}
            />
          </div>

          {/* Caption beneath photo */}
          <p
            style={{
              marginTop: 10,
              textAlign: 'center',
              fontFamily: '"Lora", Georgia, serif',
              fontSize: '0.72rem',
              color: '#B8956A',
              fontStyle: 'italic',
              letterSpacing: '0.04em',
              lineHeight: 1.4,
            }}
          >
            {caption}
          </p>
        </div>

        {/* Warm glow beneath polaroid */}
        <div
          style={{
            position: 'absolute',
            bottom: -16, left: '50%',
            transform: 'translateX(-50%)',
            width: 160, height: 30,
            borderRadius: '50%',
            background: 'radial-gradient(ellipse, rgba(201,151,62,0.18), transparent 70%)',
            pointerEvents: 'none',
          }}
        />
      </motion.div>
    </motion.div>
  )
}

// ─── Paragraph block ──────────────────────────────────────────────────────────

function ParagraphBlock({ para, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 28, filter: 'blur(4px)' }}
      whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{
        duration: 1.3,
        delay: index * 0.12,
        ease: [0.25, 0.46, 0.45, 0.94],
      }}
    >
      {/* Label */}
      <p
        className="font-body text-xs tracking-[0.4em] uppercase mb-4"
        style={{ color: '#C9973E' }}
      >
        {para.label}
      </p>

      {/* Accent line */}
      <div
        style={{
          width: 36, height: 1, marginBottom: '1.5rem',
          background: 'linear-gradient(to right, #C9973E, transparent)',
        }}
      />

      {/* Body text */}
      <p
        className="font-body leading-loose"
        style={{
          fontSize: 'clamp(1rem, 1.6vw, 1.15rem)',
          color: '#5C3D2B',
          lineHeight: 1.95,
          fontWeight: 400,
        }}
      >
        {para.text}
      </p>
    </motion.div>
  )
}
