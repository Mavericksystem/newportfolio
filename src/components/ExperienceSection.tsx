import React from "react";
import { motion } from "framer-motion";
import { Calendar, MapPin, CheckCircle } from "lucide-react";
import { MdOutlineWorkHistory } from "react-icons/md";
import iitDharwadImage from "../../assets/IIT DHARWAD.tuxpi.jpg";

const ExperienceSection: React.FC = () => {
  const highlights = [
    "Implemented the wav2vec 2.0 architecture in Fairseq & PyTorch and built an end-to-end speech translation pipeline for processing 10M+ raw audio samples.",
    "Improved the pipeline's BLEU score from 2 to 5, iterating across data preprocessing, feature extraction, model training, and inference to improve translation quality.",
  ];

  return (
    <section id="experience" className="relative overflow-hidden py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 text-center text-4xl font-bold text-white sm:text-5xl"
        >
          Work <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Experience</span>
        </motion.h2>

        <motion.article
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          whileHover={{ y: -8, scale: 1.01 }}
          className="group relative overflow-visible rounded-3xl border border-white/10 bg-black shadow-2xl"
        >
          <div className="absolute -top-6 left-8 z-30">
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-gray-800 to-gray-600 shadow-lg">
              <MdOutlineWorkHistory className="h-6 w-6 text-white" />
            </div>
          </div>

          <div className="hidden overflow-hidden rounded-3xl md:grid md:grid-cols-2">
            <div className="flex flex-col justify-center p-8 lg:p-10">
              <h3 className="text-3xl font-bold text-white">ML Intern</h3>
              <p className="mt-1 text-lg font-semibold text-white/70">IIT Dharwad</p>
              <div className="my-7 flex flex-wrap gap-5 text-sm text-white/55">
                <span className="flex items-center gap-2"><Calendar className="h-4 w-4" />2nd Feb 2024 - 30 Jan 2025</span>
                <span className="flex items-center gap-2"><MapPin className="h-4 w-4" />IIT Dharwad</span>
              </div>
              <div className="space-y-4">
                {highlights.map((highlight) => <div key={highlight} className="flex items-start gap-3"><CheckCircle className="mt-0.5 h-5 w-5 shrink-0 text-white/45" /><p className="text-sm leading-relaxed text-white/75">{highlight}</p></div>)}
              </div>
            </div>
            <div className="relative min-h-[520px] overflow-hidden bg-black">
              <img src={iitDharwadImage} alt="IIT Dharwad" className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" />
            </div>
          </div>

          <div className="min-h-[560px] rounded-3xl bg-black p-6 md:hidden sm:p-8">
            <div className="flex h-full min-h-[500px] flex-col justify-end">
              <h3 className="text-3xl font-bold text-white">ML Intern</h3>
              <p className="mt-1 text-lg font-semibold text-white/70">IIT Dharwad</p>
              <div className="my-6 space-y-3 text-sm text-white/60"><p className="flex items-center gap-2"><Calendar className="h-4 w-4" />2nd Feb 2024 - 2 Sep 2024</p><p className="flex items-center gap-2"><MapPin className="h-4 w-4" />IIT Dharwad</p></div>
              <div className="space-y-4">{highlights.map((highlight) => <div key={highlight} className="flex items-start gap-3"><CheckCircle className="mt-0.5 h-5 w-5 shrink-0 text-white/50" /><p className="text-sm leading-relaxed text-white/75">{highlight}</p></div>)}</div>
            </div>
          </div>
        </motion.article>
      </div>
    </section>
  );
};

export default ExperienceSection;