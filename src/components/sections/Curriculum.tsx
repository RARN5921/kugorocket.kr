'use client';

import { motion } from 'framer-motion';
import { Lightbulb, Code, Rocket } from 'lucide-react';

const stages = [
  {
    title: 'Stage 1: Design',
    icon: Lightbulb,
    description: '기초 이론을 학습하고, 해석 소프트웨어를 통해 로켓의 비행 안정성과 성능을 설계합니다.',
    color: 'bg-yellow-500/10 text-yellow-500'
  },
  {
    title: 'Stage 2: Fabrication',
    icon: Code,
    description: '설계한 도면을 바탕으로 추진기관, 제어 시스템, 기체 구조를 직접 제작하고 조립합니다.',
    color: 'bg-blue-500/10 text-blue-500'
  },
  {
    title: 'Stage 3: Flight',
    icon: Rocket,
    description: '제작된 로켓을 발사하여 비행 데이터를 수집하고, 분석을 통해 기술을 고도화합니다.',
    color: 'bg-brand/10 text-brand'
  }
];

export default function Curriculum() {
  return (
    <section id="curriculum" className="py-32 px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tighter mb-4">Our Curriculum</h2>
          <p className="text-gray-400">설계부터 발사까지, 실전적인 로켓 공학을 경험합니다.</p>
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
