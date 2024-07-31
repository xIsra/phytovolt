import Image from "next/image";
import PageIllustration from "@/components/page-illustration";
import Avatar01 from "@/public/images/avatar-01.jpg";
import Avatar02 from "@/public/images/avatar-02.jpg";
import Avatar03 from "@/public/images/avatar-03.jpg";
import Avatar04 from "@/public/images/avatar-04.jpg";
import Avatar05 from "@/public/images/avatar-05.jpg";
import Avatar06 from "@/public/images/avatar-06.jpg";

export default function HeroHome() {
  return (
    <section className="relative h-screen">
      {/*<PageIllustration />*/}
      <img src={'/images/algae/algae-pool.jpg'} alt="algae pool" className="absolute inset-0 object-cover w-full h-full opacity-40 filter blur-[4px]" />
      <div className="mx-auto max-w-7xl h-full flex flex-col justify-center">
        {/* Hero content */}
        {/*<div className="pb-12 pt-50 md:pb-20 md:pt-40">*/}
        <div className="">
          {/* Section header */}
          <div className="pb-12 text-center md:pb-16">
            <h1
              className="mb-6 text-6xl font-lexend font-extralight"
              data-aos="zoom-y-out"
              data-aos-delay={150}
            >
              Revolutionizing Renewable Energy <br className="max-lg:hidden" />
              Through Algae-Based Power Systems
            </h1>
            <div className="mx-auto max-w-3xl">
              <p
                className="mb-8 text-lg text-gray-700"
                data-aos="zoom-y-out"
                data-aos-delay={300}
              >
                Phytovolt is a renewable energy company that specializes in
                creating algae-based power systems. Our mission is to provide
                sustainable energy solutions that are both eco-friendly and
                cost-effective.
              </p>
              <div className="relative before:absolute before:inset-0 before:[border-image:linear-gradient(to_right,transparent,theme(colors.slate.300/.8),transparent)1]">
                <div
                  className="mx-auto max-w-xs sm:flex sm:max-w-none sm:justify-center"
                  data-aos="zoom-y-out"
                  data-aos-delay={450}
                >
                  <a
                    className="btn group text-xl font-extralight mb-4 w-full bg-gradient-to-t from-green-600 to-green-500 bg-[length:100%_100%] bg-[bottom] text-white shadow hover:bg-[length:100%_150%] sm:mb-0 sm:w-auto"
                    href="#0"
                  >
                    <span className="relative inline-flex items-center">
                      Sign to our newsletter
                      <span className="ml-1 tracking-normal text-green-50 transition-transform group-hover:translate-x-0.5">
                        -&gt;
                      </span>
                    </span>
                  </a>
                  <a
                    className="btn text-xl font-extralight w-full bg-green-50 text-gray-800 shadow hover:bg-green-100 sm:ml-4 sm:w-auto"
                    href="#0"
                  >
                    Learn More
                  </a>
                </div>
              </div>
            </div>
          </div>
          {/* Hero image */}
        </div>
      </div>
    </section>
  );
}
