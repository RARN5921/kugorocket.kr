'use client';

import { motion } from 'framer-motion';

const timeline = [
  { year: '2019', items: ['GOROCKET 창립', '모델 로켓 ANAM-I 발사', '와부고 교육용 로켓 발사'] },
  { year: '2020', items: ['전국항공우주과학경진대회 동상 수상'] },
  { year: '2021', items: ['에어로켓 evian-I 제작', '모델 로켓 ANAM-II 발사'] },
  { year: '2022', items: ['안드로이드 기반 로켓 제어 소프트웨어 개발', 'ANAM-III 발사'] },
  { year: '2023', items: ['엔진 내부 점화 시스템 개발', 'ANAM-IV 발사', 'LINC 3.0 KU 창업동아리 선정'] },
  { year: '2024', items: ['시스템 엔지니어링(SE) 도입', 'ANAM-V 제작', '제1회 소형로켓 경진대회'] },
  { year: '2025', items: ['ANAM-VI 제작', '2025 Space Challenger 우주동아리 선정', 'ANAM-VII 개발 및 발사'] },
];

export default function History() {
  return (
    <section id="history" className="py-32 px-8 bg-white/[0.02]">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold tracking-tighter mb-20 text-center">History</h2>

        <div className="space-y-12">
          {timeline.map((entry, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="flex gap-8 md:gap-16"
            >
              <div className="w-20 pt-1">
                <span className="text-2xl font-bold text-brand">{entry.year}</span>
              </div>
              <div className="flex-1 space-y-3 pb-8 border-l border-white/10 pl-8 relative">
                <div className="absolute top-3 -left-1.5 w-3 h-3 rounded-full bg-brand" />
                {entry.items.map((item, j) => (
                  <p key={j} className="text-gray-300 text-lg">{item}</p>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
