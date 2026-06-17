import HomeCapabilities from "@/components/pages/home/HomeCapabilities";
import HomeCTA from "@/components/pages/home/HomeCTA";
import HomeExperiencePreview from "@/components/pages/home/HomeExperiencePreview";
import HomeHero from "@/components/pages/home/HomeHero";
import HomeProcess from "@/components/pages/home/HomeProcess";
import HomeJournalPreview from "@/components/pages/home/HomeJournalPreview";
import WhyItMatters from "@/components/pages/home/WhyItMatters";

export default function HomePage() {
  return (
    <main>
      <HomeHero />
      <HomeCapabilities />
      <HomeExperiencePreview />
      <WhyItMatters />
      <HomeProcess />
      <HomeJournalPreview />
      <HomeCTA />
    </main>
  );
}
