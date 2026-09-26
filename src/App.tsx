import { motion, useScroll, useTransform } from 'framer-motion';
import Navigation from './components/Navigation';
import HeroSection from './components/HeroSection';
import ExperienceSection from './components/ExperienceSection';
import TechStackSection from './components/TechStackSection';
import AboutSection from './components/AboutSection';
import ProjectsSection from './components/ProjectsSection';
import AchievementsSection from './components/AchievementsSection';
import DevpostSection from './components/DevArena.tsx';
import BlogSection from './components/BlogSection';
import ContactSection from './components/ContactSection';
// import SplashCursor from "@/components/SplashCursor";


function App() {
  // Tracks page scroll position to drive the background video's blur/fade.
  const { scrollY } = useScroll();

  // Sharp + fully visible at the top (Home), progressively blurring and
  // fading out over the first ~900px of scroll (roughly one Hero section),
  // then holding steady as an ambient blurred backdrop for everything below.
  const videoBlur = useTransform(scrollY, [0, 900], [0, 18]);
  const videoBlurFilter = useTransform(videoBlur, (v) => `blur(${v}px)`);
  const videoOpacity = useTransform(scrollY, [0, 900], [1, 0.3]);

  return (
    <div className="relative">
      {/* Persistent fixed video background — sits behind the entire page,
          not just Hero, so the blur-on-scroll effect reads as one continuous
          surface instead of a hard cut when Hero ends. Deliberately NOT
          filtered directly (filter: blur() on a huge fixed element tiles
          into a visible grid/mesh in Chromium/WebKit at larger radii). */}
      <motion.video
        autoPlay
        loop
        muted
        playsInline
        preload="auto"
        style={{ opacity: videoOpacity }}
        className="fixed inset-0 h-full w-full object-cover bg-black"
      >
        <source src="/backgroundv.mp4" type="video/mp4" />
      </motion.video>

      {/* Blur is applied here instead, via backdrop-filter on a plain,
          viewport-sized (not oversized) overlay. This composites as one
          bounded layer rather than filtering a giant surface, which avoids
          the tiling artifact entirely. */}
      <motion.div
        aria-hidden="true"
        style={{ backdropFilter: videoBlurFilter, WebkitBackdropFilter: videoBlurFilter }}
        className="fixed inset-0 pointer-events-none"
      />

      <Navigation />

      <main className="relative z-10">
        <HeroSection />

        {/* background.png scoped to Experience → Contact only. Uses a real
            <img loading="lazy"> instead of a global CSS background-image so
            the browser defers fetching it until this block nears the
            viewport, instead of competing with the video for bandwidth on
            initial load. Sits above the blurred video for extra texture.
            NOTE: no CSS `filter` (brightness/contrast) here on purpose — a
            filter on an element this tall (spans Experience→Contact, way
            taller than any viewport) gets GPU-tiled into a visible mesh in
            Chromium/WebKit.
            The image itself has a hexagon mesh texture baked in — low
            opacity keeps it as a faint ambient texture instead of a loud,
            distracting pattern. A dark overlay (matching Hero's
            bg-black/40–55 responsive overlay) sits on top so this whole
            block reads as the same tone/darkness as Hero, instead of a
            visibly lighter or differently-toned block once you scroll past
            it. */}
        <div className="relative">
          <img
            src="/background.png"
            alt=""
            aria-hidden="true"
            loading="lazy"
            fetchPriority="low"
            className="pointer-events-none absolute inset-0 h-full w-full object-cover opacity-20"
          />
          <div className="pointer-events-none absolute inset-0 bg-black/40 sm:bg-black/45 md:bg-black/50 lg:bg-black/55" />

          <div className="relative z-10">
            <ExperienceSection />
            <ProjectsSection />
            <TechStackSection />
            <AchievementsSection />
            <DevpostSection />
            <BlogSection />
            <AboutSection />
            <ContactSection />
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="relative z-10 border-t border-white/20 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <p className="text-gray-600 dark:text-gray-400">
              © 2026 Moinaktar Shaikh. Crafted with passion and precision.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
