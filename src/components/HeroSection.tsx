"use client";

import { useEffect, useRef } from "react";
import { FaLinkedinIn } from "react-icons/fa6";
import { motion } from "framer-motion";

const HeroSection = () => {
  const wordRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    if (!wordRef.current) return;

    const element = wordRef.current;

    const chars = "!<>-_\\/[]{}—=+*^?#________";
    let frameId: number;
    let timeoutId: ReturnType<typeof setTimeout>;
    let frame = 0;
    let currentText = element.innerText;
    let running = true;

    const randomChar = () =>
      chars[Math.floor(Math.random() * chars.length)];

    // Tuning knobs for the cascade effect
    const CHAR_STAGGER = 18; // frames between each character starting to scramble
    const SCRAMBLE_LENGTH = 40; // frames each character stays scrambling before locking in
    const GLITCH_SWAP_EVERY = 4; // swap the glitch character every N frames

    const scrambleTo = (newText: string): Promise<void> => {
      const oldText = currentText;
      const length = Math.max(oldText.length, newText.length);

      // Each character starts in sequence (index-based stagger) so the
      // resolve happens left-to-right instead of all at once.
      const queue = Array.from({ length }, (_, i) => {
        const from = oldText[i] || "";
        const to = newText[i] || "";
        const start = i * CHAR_STAGGER;
        const end = start + SCRAMBLE_LENGTH;

        return {
          from,
          to,
          start,
          end,
          char: "",
        };
      });

      frame = 0;

      return new Promise((resolve) => {
        const update = () => {
          // Bail out cleanly if the component unmounted mid-animation.
          if (!running) {
            resolve();
            return;
          }

          let output = "";
          let complete = 0;

          for (let i = 0; i < queue.length; i++) {
            const item = queue[i];

            if (frame >= item.end) {
              // Locked in on the final character for this position.
              complete++;
              if (item.to) {
                output += item.to;
              }
            } else if (frame >= item.start) {
              if (!item.char || frame % GLITCH_SWAP_EVERY === 0) {
                item.char = randomChar();
              }
              output += `<span class="scramble-glitch">${item.char}</span>`;
            } else {
              // Hasn't started scrambling yet — still showing the old char.
              if (item.from) {
                output += item.from;
              }
            }
          }

          element.innerHTML = output;

          if (complete === queue.length) {
            currentText = newText;
            element.innerText = newText;
            resolve();
            return;
          }

          frame++;
          frameId = requestAnimationFrame(update);
        };

        update();
      });
    };

    const words = ["Build", "Architect", "Scale"];
    let index = 0;

    const next = async () => {
      if (!running) return;

      await scrambleTo(words[index]);

      if (!running) return;

      index = (index + 1) % words.length;

      timeoutId = setTimeout(next, 1800);
    };

    next();

    return () => {
      running = false;
      cancelAnimationFrame(frameId);
      clearTimeout(timeoutId);
    };
  }, []);

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden"
    >
      {/* No local video here anymore — the app-level fixed video in App.tsx
          shows through behind this section and blurs/fades as the user
          scrolls past Home. This overlay just keeps the text readable
          against it. */}
      <div className="absolute inset-0 bg-black/40 sm:bg-black/45 md:bg-black/50 lg:bg-black/55" />

      <div className="relative z-10 w-full max-w-7xl px-6 text-left sm:px-10 lg:px-12">

        {/* Small role label */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="mb-6 text-sm font-medium tracking-[0.18em] text-zinc-300 uppercase"
        >
          AI Engineer · Backend
        </motion.div>

        {/* Main Hero */}
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.35, duration: 0.8, ease: "easeOut" }}
          className="max-w-5xl text-5xl font-semibold leading-[0.95] tracking-tight text-zinc-100 sm:text-6xl md:text-7xl lg:text-8xl"
        >
          <span className="block">
            I{" "}
            {/* aria-hidden + sr-only fallback: screen readers get the clean
                word list instead of scrambling glitch characters. */}
            <span
              ref={wordRef}
              aria-hidden="true"
              className="inline-block min-w-[10ch] bg-gradient-to-r from-cyan-300 via-sky-400 to-teal-300 bg-clip-text font-mono text-transparent"
            >
              Build
            </span>
            <span className="sr-only">Build, Architect, Scale</span>
          </span>

          <span className="block">
            Products
          </span>
        </motion.h1>

        {/* Existing description */}


        <div className="mt-11 flex flex-col items-start">
          {/* LinkedIn Button — untouched */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 1.5 }}
          >
            <motion.a
              href="https://www.linkedin.com/in/moinaktar-shaikh-7b3a33207/"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.98 }}
              className="relative inline-flex items-center justify-center gap-2 rounded-full px-8 text-white font-semibold cursor-pointer transition-all duration-300"
              style={{
                fontSize: "15px",
                fontWeight: 600,
                lineHeight: 1,
                letterSpacing: "-.02em",
                height: "36px",
                WebkitFontSmoothing: "antialiased",
                background: "#000000",
              }}
            >
              <span
                className="absolute rounded-full pointer-events-none"
                style={{
                  inset: "-1px -1px -1.3px -1px",
                  backgroundImage:
                    "linear-gradient(180deg, #fcc171, #c17c56 55%, #362821)",
                }}
              />

              <span
                className="absolute inset-0 rounded-full pointer-events-none"
                style={{ background: "#000000" }}
              />

              <span
                className="absolute left-1/2 -translate-x-1/2 rounded-full pointer-events-none"
                style={{
                  top: "-6px",
                  bottom: "20%",
                  width: "90%",
                  backgroundImage:
                    "radial-gradient(ellipse 40% 40% at 50% 10%, rgba(255,223,150,0.7) 10%, rgba(255,195,90,0.4) 50%, rgba(255,160,60,0.15) 80%, transparent 100%)",
                  mixBlendMode: "screen",
                  filter: "blur(1px)",
                }}
              />

              <FaLinkedinIn className="w-4 h-4 relative z-10" />
              <span className="relative z-10">Linkedin Profile</span>
            </motion.a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;