'use client';

import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section id="about" className="relative min-h-screen flex flex-col items-center justify-center pt-20 px-8">
      {/* Background decoration */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-brand/20 rounded-full blur-[120px] -z-10" />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center"
      >
        <span className="inline-block px-4 py-1.5 rounded-full border border-white/10 glass text-sm font-medium mb-6">
          Established in 2019
        </span>
        <h1 className="text-6xl md:text-8xl font-bold tracking-tighter mb-6 text-gradient">
          GOROCKET
        </h1>
        <p className="text-xl md:text-2xl text-gray-400 max-w-2xl mx-auto mb-10 leading-relaxed">
          고려대학교 IT 스타트업 학회 고로켓은 아이디어를 현실로 만드는 창업가들의 커뮤니티입니다.
        </p>

        <div className="flex items-center justify-center gap-4">
          <button className="px-8 py-3 bg-white text-black font-semibold rounded-full hover:bg-gray-200 transition-colors">
            Apply Now
          </button>
          <button className="px-8 py-3 border border-white/10 glass rounded-full hover:bg-white/5 transition-colors">
            View Projects
          </button>
        </div>
      </motion.div>
    </section>
  );
}
