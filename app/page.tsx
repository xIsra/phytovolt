export const metadata = {
  title: "Phytovolt - Bioenergy from algae",
  description: "Phytovolt is a bioenergy company that uses algae to produce sustainable energy.",
};

import Hero from "@/components/hero-home";
// import AlgaeProblem from "@/components/algae-problem";
import OurSolution from "@/components/our-solution";
import LargeTestimonial from "@/components/large-testimonial";
import Cta from "@/components/cta";

export default function Home() {
  return (
    <>
      <Hero />
      {/*<AlgaeProblem />*/}
      <OurSolution />
      {/*<LargeTestimonial />*/}
      {/*<Cta />*/}
    </>
  );
}
