import Hero from "./core-components/Hero";
import Destinations from "./core-components/Destinations";
import Testominals from "./core-components/Testominals";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-zinc-50 dark:bg-black">
      {/* hero Section */}
      <Hero />
      {/* Desitantions Sections */}
      <Destinations />
      {/* Testominals Sections */}
      <Testominals />
    </div>
  );
}
