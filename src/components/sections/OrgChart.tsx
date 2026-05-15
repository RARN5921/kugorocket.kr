'use client';

import { motion } from 'framer-motion';

const orgData = [
  {
    title: '운영본부',
    teams: ['물품재무', '대외협력', '홍보미디어']
  },
  {
    title: '기술부',
    sections: [
      {
        name: '추진과',
        teams: ['모터팀', '연료팀']
      },
      {
        name: '제어과',
        teams: ['에비오닉스팀', '회수제어팀']
      },
      {
        name: '설계과',
        teams: ['유지보수팀', '구조설계팀']
      }
    ]
  }
];

export default function OrgChart() {
  return (
    <section className="py-32 px-8 bg-black/50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tighter mb-4">Organization</h2>
          <p className="text-gray-400">고로켓의 체계적인 조직 구성입니다.</p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {orgData.map((dept, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: i === 0 ? -20 : 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="p-8 rounded-3xl glass border border-white/5"
            >
              <h3 className="text-2xl font-bold mb-8 text-brand">{dept.title}</h3>

              {dept.teams ? (
                <div className="space-y-4">
                  {dept.teams.map((team, j) => (
                    <div key={j} className="p-4 rounded-xl bg-white/5 border border-white/5">
                      {team}
                    </div>
                  ))}
                </div>
              ) : (
                <div className="space-y-6">
                  {dept.sections?.map((section, j) => (
                    <div key={j} className="space-y-3">
                      <div className="text-lg font-bold text-gray-300">{section.name}</div>
                      <div className="grid grid-cols-2 gap-3">
                        {section.teams.map((team, k) => (
                          <div key={k} className="p-3 rounded-xl bg-white/5 border border-white/5 text-sm">
                            {team}
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
