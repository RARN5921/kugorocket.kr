import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Hero from '@/components/sections/Hero';
import Curriculum from '@/components/sections/Curriculum';
import History from '@/components/sections/History';
import Members from '@/components/sections/Members';
import OrgChart from '@/components/sections/OrgChart';

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <Curriculum />
      <OrgChart />
      <History />
      <Members />
      <Footer />
    </main>
  );
}
