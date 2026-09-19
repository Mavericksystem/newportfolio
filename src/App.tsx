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
  return (
    <div className="relative">

      <div
        aria-hidden="true"
        className="fixed inset-0 z-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/background.png')" }}
      />

      <Navigation />

      <main className="relative z-10">
        <HeroSection />
        <ExperienceSection />
        <ProjectsSection />
        <TechStackSection />
        <AchievementsSection />
        <DevpostSection />
        <BlogSection />
        <AboutSection />
        <ContactSection />
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