'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';

export default function Navbar() {
  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-8 py-6 glass m-4 rounded-2xl"
    >
      <Link href="/" className="text-xl font-bold tracking-tighter">
        GOROCKET
      </Link>

      <div className="hidden md:flex items-center space-x-8 text-sm font-medium">
        <Link href="#about" className="hover:text-gray-400 transition-colors">About</Link>
        <Link href="#curriculum" className="hover:text-gray-400 transition-colors">Curriculum</Link>
        <Link href="#history" className="hover:text-gray-400 transition-colors">History</Link>
        <Link href="#members" className="hover:text-gray-400 transition-colors">Members</Link>
      </div>

      <div className="md:hidden">
        {/* Mobile menu could go here */}
      </div>
    </motion.nav>
  );
}
