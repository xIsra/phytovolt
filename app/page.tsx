export const metadata = {
    // description: "Phytovolt is a bioenergy company that uses algae to produce sustainable energy.",
    icons: {
        icon: '/favicon.ico', // Default favicon
        shortcut: '/favicon-16x16.png', // Shortcut icon (optional)
        apple: '/apple-touch-icon.png', // Apple touch icon
        other: [
            {
                rel: 'icon',
                url: '/favicon-32x32.png',
                sizes: '32x32',
                type: 'image/png',
            },
            {
                rel: 'icon',
                url: '/android-chrome-192x192.png',
                sizes: '192x192',
                type: 'image/png',
            },
            {
                rel: 'icon',
                url: '/android-chrome-512x512.png',
                sizes: '512x512',
                type: 'image/png',
            },
        ],
    },
};

import Hero from "@/components/hero-home";
// import AlgaeProblem from "@/components/algae-problem";
import OurSolution from "@/components/our-solution";
import HeroContact from "@/components/hero-contact";

export default function Home() {
    return (
        <>
            <Hero/>
            {/*<AlgaeProblem />*/}
            <OurSolution/>
            {/*<LargeTestimonial />*/}
            {/*<Cta />*/}
            <HeroContact />
        </>
    );
}
