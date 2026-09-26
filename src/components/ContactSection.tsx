import React from 'react';
import { motion } from 'framer-motion';
import { MapPin } from "lucide-react";
import {
  Clock,
  Globe,
} from 'lucide-react';
import { MdOutlineMarkEmailUnread } from 'react-icons/md';
import { FiMapPin } from 'react-icons/fi';
import { FaLinkedinIn } from 'react-icons/fa';

const ContactSection: React.FC = () => {
  const contactInfo = [
    {
      icon: MdOutlineMarkEmailUnread,
      label: 'Email',
      value: 'moinaktarshaikh@gmail.com',
      href: 'mailto:moinaktarshaikh@gmail.com',
    },
    {
      icon: FiMapPin,
      label: 'Location',
      value: 'Bengaluru, BTM Layout · Madiwala',
    },
    {
      icon: FaLinkedinIn,
      label: 'LinkedIn',
      value: 'Connect with me',
      href: 'https://www.linkedin.com/in/moinaktar-shaikh-7b3a33207/',
    },
  ];

  return (
    <section id="contact" className="py-20 md:py-30 relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute inset-0">
        <motion.div
          animate={{ y: [0, -20, 0], rotate: [0, 5, 0] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-20 right-10 w-16 h-16 bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-2xl backdrop-blur-sm"
        />
        <motion.div
          animate={{ y: [0, 15, 0], rotate: [0, -3, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          className="absolute bottom-40 left-10 w-12 h-12 bg-gradient-to-br from-green-500/10 to-blue-500/10 rounded-xl backdrop-blur-sm"
        />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto w-full px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-semibold tracking-tight text-gray-900 dark:text-white md:text-5xl mb-4">
            Let's Work Together
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-xl mx-auto">
            Have a project in mind, or just want to talk shop? Pick a slot below.
          </p>
        </motion.div>

        {/* Compact info row — email / location / linkedin, plus quick stats. */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid sm:grid-cols-3 gap-3"
        >
          {contactInfo.map((item) => {
            const content = (
              <div className="flex items-center gap-3 px-4 py-3 bg-white/20 dark:bg-gray-800/20 backdrop-blur-md rounded-2xl border border-white/30 dark:border-gray-700/40 h-full">
                <item.icon className="w-5 h-5 text-gray-700 dark:text-gray-300 shrink-0" />
                <div className="min-w-0">
                  <div className="text-xs text-gray-500 dark:text-gray-500">{item.label}</div>
                  <div className="text-sm font-medium text-gray-900 dark:text-white truncate">{item.value}</div>
                </div>
              </div>
            );

            return item.href ? (
              <a
                key={item.label}
                href={item.href}
                target={item.href.startsWith('http') ? '_blank' : undefined}
                rel={item.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                className="block hover:scale-[1.02] transition-transform duration-200"
              >
                {content}
              </a>
            ) : (
              <div key={item.label}>{content}</div>
            );
          })}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-4 grid grid-cols-3 gap-3"
        >
          <div className="text-center p-3 sm:p-4 bg-white/20 dark:bg-gray-800/20 backdrop-blur-md rounded-xl border border-white/30 dark:border-gray-700/40">
            <Clock className="w-6 h-6 sm:w-8 sm:h-8 text-blue-600 mx-auto mb-2" />
            <div className="text-lg sm:text-2xl font-bold text-gray-900 dark:text-white">24h</div>
            <div className="text-xs sm:text-sm text-gray-600 dark:text-gray-400">Response Time</div>
          </div>
          <div className="text-center p-3 sm:p-4 bg-white/20 dark:bg-gray-800/20 backdrop-blur-md rounded-xl border border-white/30 dark:border-gray-700/40">
            <Globe className="w-6 h-6 sm:w-8 sm:h-8 text-green-600 mx-auto mb-2" />
            <div className="text-lg sm:text-2xl font-bold text-gray-900 dark:text-white">Remote</div>
            <div className="text-xs sm:text-sm text-gray-600 dark:text-gray-400">Work Ready</div>
          </div>
          <div className="text-center p-3 sm:p-4 bg-white/20 dark:bg-gray-800/20 backdrop-blur-md rounded-xl border border-white/30 dark:border-gray-700/40">
            <MapPin className="w-6 h-6 sm:w-8 sm:h-8 text-purple-600 mx-auto mb-2" />
            <div className="text-lg sm:text-2xl font-bold text-gray-900 dark:text-white">Relocation</div>
            <div className="text-xs sm:text-sm text-gray-600 dark:text-gray-400">India & Global</div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
export default ContactSection;
