import HomeCapabilities from "@/components/pages/home/HomeCapabilities";
import HomeCTA from "@/components/pages/home/HomeCTA";
import HomeExperiencePreview from "@/components/pages/home/HomeExperiencePreview";
import HomeHero from "@/components/pages/home/HomeHero";
import HomeProcess from "@/components/pages/home/HomeProcess";
import HomeJournalPreview from "@/components/pages/home/HomeJournalPreview";
import WhyItMatters from "@/components/pages/home/WhyItMatters";
import Immersive from "@/components/sections/Immersive";

export default function HomePage() {
  return (
    <main>
      <HomeHero />
      <HomeCapabilities />
      <HomeExperiencePreview />
      <WhyItMatters />
      <Immersive />
      <HomeProcess />
      <HomeJournalPreview />
      <HomeCTA />
    </main>
  );
}
