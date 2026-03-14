import Image from "next/image";
import Hero from "@/components/Hero";
import { FloatingNav } from "@/components/ui/floatingnav";
import  Grid  from "@/components/grid"
import { FaHome } from "react-icons/fa";
import RecentProjects from "@/components/recentprojects";
import { navItems } from "@/data";
import Clients from "@/components/clients";
import Experience from "@/components/experience";
import Approach from "@/components/approach";
import Footer from "@/components/footer";
export default function Home() {
  return (
    <main className="relative bg-black-100 flex justify-center items-center flex-col overflow-clip
    mx-auto sm:px-10 px-5">
      <div className="max-w-7xl w-full">
        <FloatingNav
        navItems={navItems}	
        />
        <Hero />
        <Grid />
        <RecentProjects />
        {/* <Clients /> */}
        {/* <Experience /> */}
        <Approach />
        <Footer />
      </div>
    </main>
  );
}
