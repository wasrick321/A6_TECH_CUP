import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Tilt from 'react-parallax-tilt'
import { journeyData } from '../../data/devJourney'
import './PokedexHolo.css'

export function PokedexHolo() {
  const [activeId, setActiveId] = useState(1)
  const activeData = journeyData.find(d => d.id === activeId)!

  return (
    <div className="pokedex-terminal">
      {/* Background Noise/Grid */}
      <div className="scanlines"></div>

      <div className="terminal-layout">
        {/* LEFT SIDE: SELECTION MENU */}
        <div className="selection-panel">
          <div className="panel-header">
            <h3>TIMELINE_DB</h3>
            <div className="led-indicator"></div>
          </div>

          <div className="roster-grid">
            {journeyData.map((item) => (
              <motion.button
                key={item.id}
                className={`roster-slot ${activeId === item.id ? 'active' : ''}`}
                onClick={() => setActiveId(item.id)}
                whileHover={{ scale: 1.05, x: 10 }}
                whileTap={{ scale: 0.95 }}
              >
                <div className="pokeball-icon">
                  <div className="inner-ring"></div>
                </div>
                <div className="slot-info">
                  <span className="slot-id">{item.phase}</span>
                  <span className="slot-title">{item.title}</span>
                </div>
              </motion.button>
            ))}
          </div>

          <div className="system-logs">
            <p>&gt; SYSTEM: ONLINE</p>
            <p>&gt; RENDER: ULTRA_QUALITY</p>
            <p>&gt; FPS: 60</p>
          </div>
        </div>

        {/* RIGHT SIDE: MAIN HOLO STAGE */}
        <div className="main-stage">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeData.id}
              initial={{ opacity: 0, scale: 0.8, filter: 'blur(10px)' }}
              animate={{ opacity: 1, scale: 1, filter: 'blur(0px)' }}
              exit={{ opacity: 0, scale: 1.2, filter: 'blur(20px)' }}
              transition={{ duration: 0.5, type: 'spring' }}
              className="stage-center"
            >
              <Tilt
                className="holo-card"
                perspective={1000}
                glareEnable={true}
                glareMaxOpacity={0.6}
                glareColor={activeData.color}
                scale={1.05}
              >
                {/* The Glowing Border */}
                <div
                  className="neon-border"
                  style={{ borderColor: activeData.color }}
                ></div>

                <div className="card-vis">
                  <div className="holo-projector"></div>
                  <motion.img
                    src={activeData.pokemonImg}
                    alt="Pokemon"
                    className="pokemon-3d"
                    animate={{ y: [0, -20, 0] }}
                    transition={{ repeat: Infinity, duration: 4, ease: 'easeInOut' }}
                  />
                  <div className="shadow-platform"></div>
                </div>

                <div className="card-intel">
                  <h1 style={{ color: activeData.color }}>{activeData.title}</h1>
                  <div className="meta-row">
                    <span className="meta-badge">{activeData.date}</span>
                    <span className="meta-badge">CONFIDENTIAL</span>
                  </div>
                  <p className="description">{activeData.content}</p>

                  <div className="stack-grid">
                    {activeData.techStack.map((tech) => (
                      <span
                        key={tech}
                        className="tech-bit"
                        style={{ borderColor: activeData.color }}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </Tilt>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </div>
  )
}
