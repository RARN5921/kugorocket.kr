'use client';

import { motion } from 'framer-motion';

const staff = [
  { role: '회장', name: '도기현', dept: '기계 24' },
  { role: '부회장', name: '김유한', dept: '기계 22' },
  { role: '홍보팀장', name: '김수민', dept: '기계 24' },
  { role: '총무', name: '양조은', dept: '기계 24' },
  { role: '추진과장', name: '정혁준', dept: '기계 21' },
  { role: '제어과장', name: '박하민', dept: '전전 22' },
  { role: '설계과장', name: '박승준', dept: '기계 25' },
];

const stats = [
  { label: '총 멤버', value: '73명' },
  { label: '정회원', value: '33명' },
  { label: '준회원', value: '40명' },
  { label: '명예회원', value: '24명' },
];

export default function Members() {
  return (
    <section id="members" className="py-32 px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tighter mb-4">Our Team</h2>
          <p className="text-gray-400 mb-12">고로켓을 이끌어가는 운영진과 현황입니다. (2026.02 기준)</p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto">
            {stats.map((stat, i) => (
              <div key={i} className="p-4 rounded-2xl glass border border-white/5">
                <div className="text-brand font-bold text-2xl mb-1">{stat.value}</div>
                <div className="text-xs text-gray-500 uppercase tracking-wider">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {staff.map((member, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="p-6 rounded-3xl glass text-center border border-white/5 relative overflow-hidden group"
            >
              <div className="absolute inset-0 bg-brand/5 opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="w-16 h-16 bg-gradient-to-br from-brand/20 to-brand/5 rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-xl font-bold">{member.name[0]}</span>
              </div>
              <div className="text-xs text-brand font-bold mb-1 uppercase tracking-widest">{member.role}</div>
              <h3 className="text-xl font-bold mb-1">{member.name}</h3>
              <p className="text-gray-500 text-sm">{member.dept}</p>
            </motion.div>
          ))}
        </div>

        <div className="mt-20 p-8 rounded-3xl glass border border-white/5 text-center">
          <h4 className="text-lg font-bold mb-2">활동 공간</h4>
          <p className="text-gray-400">고려대학교 창의관 5층 518A호</p>
        </div>
      </div>
    </section>
  );
}
