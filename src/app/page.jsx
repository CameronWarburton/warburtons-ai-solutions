"use client";
import Image from "next/image";
import * as React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";

export default function Home() {
  const plugin = React.useRef(
    Autoplay({ delay: 5000, stopOnInteraction: true })
  );

  return (
    <main>
      <section id="hero" className="row">
        <div className="justify-between content-center items-center px-10 flex">
          <div>
            <h1 className="font-bold text-7xl pb-8">
              Your{" "}
              <span className="bg-gradient-to-r from-cyan-500 to-blue-500 bg-clip-text text-transparent">
                Launchpad
              </span>{" "}
              to an AI-Driven Future
            </h1>
            <p className="text-xl font-bold opacity-75 text-gray-900 max-w-150">
              We build smart AI solutions and modern websites that help your
              business stay ahead in the digital world.
            </p>
          </div>
          <Image
            src="/assets/undraw_vibe-coding.svg"
            alt="AI Agent Illustration"
            width={500}
            height={600}
            className="mt-10 pl-10"
          />
        </div>
      </section>

      <section id="services" className="row py-20">
        <h1 className="flex justify-center font-bold text-7xl pb-8">
          Services
        </h1>
        <div className="flex justify-center items-center">
          <Carousel
            className="w-full mx-auto"
            opts={{ loop: true }}
            plugins={[plugin.current]}
            onMouseEnter={plugin.current.stop}
            onMouseLeave={plugin.current.play}
          >
            <CarouselContent>
              <CarouselItem className="basis-1/2">
                <div className="p-8 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-md text-center">
                  <h2 className="text-2xl font-semibold mb-4 text-white">
                    Websites
                  </h2>
                  <p className="text-white">
                    We design and develop modern, responsive websites that are
                    visually engaging, easy to navigate, and optimized for
                    performance. From sleek portfolios to full-scale business
                    platforms, we ensure your online presence reflects your
                    brand and helps you connect with your audience effectively.
                  </p>
                </div>
              </CarouselItem>
              <CarouselItem className="basis-1/2">
                <div className="p-8 bg-gradient-to-r from-cyan-500 to-blue-500 font-white rounded-md text-center">
                  <h2 className="text-2xl font-semibold mb-4 text-white">
                    AI Solutions
                  </h2>
                  <p className="text-white">
                    We build custom AI tools and integrations tailored to your
                    business needs. Whether it's automating repetitive tasks,
                    analyzing large datasets, or creating smart customer
                    experiences, our AI solutions help you streamline workflows,
                    make better decisions, and stay ahead of the competition.
                  </p>
                </div>
              </CarouselItem>
              <CarouselItem className="basis-1/2">
                <div className="p-8 bg-gradient-to-r from-cyan-500 to-blue-500 font-white rounded-md text-center">
                  <h2 className="text-2xl font-semibold mb-4 text-white">
                    Consulting
                  </h2>
                  <p className="text-white">
                    We provide expert guidance on leveraging technology and AI
                    to drive growth and innovation. Through tailored consulting,
                    we help you identify opportunities, develop clear
                    strategies, and adopt the right solutions that align with
                    your business goals and set you up for long-term success.
                  </p>
                </div>
              </CarouselItem>
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>
      </section>
    </main>
  );
}
