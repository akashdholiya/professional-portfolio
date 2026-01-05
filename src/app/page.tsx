import { Hero } from "@/components/Hero";
import { ProjectList } from "@/components/ProjectList";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-white dark:bg-black text-black dark:text-white font-sans selection:bg-black selection:text-white dark:selection:bg-white dark:selection:text-black transition-colors duration-300">
      <Header />
      <main>
        <Hero />
        <ProjectList limit={5} layout="alternating" showViewMore={true} />
      </main>
      <Footer />
    </div>
  );
}
