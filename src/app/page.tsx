import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Skills from "@/components/Skills";

export default function Home() {
  return (
    <div className="mx-3 md:mx-0">
      <Header/>
      <Hero/>
      <Skills/>
    </div>
  );
}
