"use client";

import { useEffect, useRef, useState } from "react";
import { FaLinkedinIn } from "react-icons/fa6";
import { motion } from "framer-motion";
import gsap from "gsap";
import { TextPlugin } from "gsap/TextPlugin";

gsap.registerPlugin(TextPlugin);

const HeroSection = () => {
  const wordRef = useRef<HTMLSpanElement>(null);
  const [videoReady, setVideoReady] = useState(false);

  useEffect(() => {
    if (!wordRef.current) return;

    const words = ["Build", "Scale", "Architect"];
    const element = wordRef.current;

    const context = gsap.context(() => {
      const timeline = gsap.timeline({ repeat: -1, repeatDelay: 0.2 });

      words.forEach((word) => {
        timeline.to(element, {
          duration: 1.8,
          text: {
            value: word,
            delimiter: "",
          },
          ease: "none",
        });

        timeline.to({}, { duration: 1.5 });

        timeline.to(element, {
          duration: 0.6,
          text: {
            value: "01010#$%@",
            delimiter: "",
          },
          ease: "none",
        });

        timeline.to({}, { duration: 0.3 });
      });
    }, wordRef);

    return () => context.revert();
  }, []);

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden"
    >
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: "url('/background.png')" }}
      />
      <video
        aria-hidden="true"
        autoPlay
        loop
        muted
        playsInline
        poster="/background.png"
        onCanPlay={() => setVideoReady(true)}
        className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-1000 ease-out ${
          videoReady ? "opacity-100" : "opacity-0"
        }`}
      >
        <source src="/backgroundv.mp4" type="video/mp4" />
      </video>

      {/* Responsive overlay for better text readability */}
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
            <span
              ref={wordRef}
              className="inline-block min-w-[9ch] bg-gradient-to-r from-cyan-300 via-sky-400 to-teal-300 bg-clip-text font-mono text-transparent"
            >
              01010#$%@
            </span>
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