'use client';

import { motion } from 'framer-motion';
import { Lightbulb, Code, Rocket } from 'lucide-react';

const stages = [
  {
    title: 'Stage 1: Idea',
    icon: Lightbulb,
    description: '문제 해결을 위한 창의적인 아이디어를 도출하고 비즈니스 모델을 검증합니다.',
    color: 'bg-yellow-500/10 text-yellow-500'
  },
  {
    title: 'Stage 2: Build',
    icon: Code,
    description: 'MVP(Minimum Viable Product)를 직접 개발하며 기술적 역량을 키웁니다.',
    color: 'bg-blue-500/10 text-blue-500'
  },
  {
    title: 'Stage 3: Launch',
    icon: Rocket,
    description: '실제 시장에 제품을 런칭하고 사용자 피드백을 통해 성장합니다.',
    color: 'bg-brand/10 text-brand'
  }
];

export default function Curriculum() {
  return (
    <section id="curriculum" className="py-32 px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tighter mb-4">Our Curriculum</h2>
          <p className="text-gray-400">3단계를 거쳐 진정한 창업가로 거듭납니다.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {stages.map((stage, i) => (
            <motion.div
              key={i}
              whileHover={{ y: -10 }}
              className="p-8 rounded-3xl glass border border-white/5 flex flex-col items-center text-center"
            >
              <div className={`w-16 h-16 rounded-2xl ${stage.color} flex items-center justify-center mb-6`}>
                <stage.icon size={32} />
              </div>
              <h3 className="text-xl font-bold mb-4">{stage.title}</h3>
              <p className="text-gray-400 leading-relaxed">
                {stage.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
