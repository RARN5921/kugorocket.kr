'use client';

import { motion } from 'framer-motion';

const members = [
  { name: '김민수', role: 'President / Developer' },
  { name: '이영희', role: 'Vice President / Designer' },
  { name: '박철수', role: 'Tech Lead / Backend' },
  { name: '최지우', role: 'Marketing / Frontend' },
  { name: '강하늘', role: 'Business Strategist' },
  { name: '윤바다', role: 'Embedded Engineer' },
];

export default function Members() {
  return (
    <section id="members" className="py-32 px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tighter mb-4">Our Team</h2>
          <p className="text-gray-400">함께 고로켓을 이끌어가는 멤버들입니다.</p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {members.map((member, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="p-6 rounded-3xl glass text-center border border-white/5"
            >
              <div className="w-20 h-20 bg-gradient-to-br from-brand/20 to-brand/5 rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-2xl font-bold">{member.name[0]}</span>
              </div>
              <h3 className="text-xl font-bold mb-1">{member.name}</h3>
              <p className="text-gray-400 text-sm">{member.role}</p>
            </motion.div>
          ))}
        </div>

        <div className="mt-20 text-center">
          <p className="text-gray-500 italic">And more passionate members...</p>
        </div>
      </div>
    </section>
  );
}
