"use client";
import * as React from "react";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";

export default function Services() {
  const plugin = React.useRef(Autoplay({ delay: 5000, stopOnInteraction: true }));

  return (
    <section id="services" className="row py-20">
            <h2 className="flex justify-center font-bold text-5xl md:text-7xl pb-8" data-aos="fade-up" data-aos-delay="200">
              Services
            </h2>
            <div className="flex justify-center items-center" data-aos="fade-up" data-aos-delay="300">
              <Carousel
                className="w-full max-w-8xl mx-auto"
                opts={{ loop: true }}
                plugins={[plugin.current]}
                onMouseEnter={plugin.current.stop}
                onMouseLeave={plugin.current.play}
              >
                <CarouselContent className="flex items-stretch">
                  <CarouselItem className="md:basis-1/3 h-full">
                    <div className="p-8 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-md text-center min-h-[260px] flex flex-col">
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
                  <CarouselItem className="md:basis-1/3">
                    <div className="p-8 bg-gradient-to-r from-cyan-500 to-blue-500 font-white rounded-md text-center min-h-[260px] flex flex-col">
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
                  <CarouselItem className="md:basis-1/3">
                    <div className="p-8 bg-gradient-to-r from-cyan-500 to-blue-500 font-white rounded-md text-center min-h-[260px] flex flex-col">
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
                  <CarouselItem className="md:basis-1/3">
                    <div className="p-8 bg-gradient-to-r from-cyan-500 to-blue-500 font-white rounded-md text-center min-h-[260px] flex flex-col">
                      <h2 className="text-2xl font-semibold mb-4 text-white">
                        Small Business Websites
                      </h2>
                      <p className="text-white">
                        We build modern, user-friendly websites tailored for small
                        businesses. Our focus is on creating sites that not only
                        look professional but also help you connect with your
                        customers and grow your brand online. From clean designs and
                        easy navigation to mobile-friendly layouts and SEO best
                        practices, we make sure your website works as hard as you
                        do. Whether you’re starting fresh or refreshing your current
                        site, we keep the process simple and stress-free.
                      </p>
                    </div>
                  </CarouselItem>
                  <CarouselItem className="md:basis-1/3">
                    <div className="p-8 bg-gradient-to-r from-cyan-500 to-blue-500 font-white rounded-md text-center min-h-[260px] flex flex-col">
                      <h2 className="text-2xl font-semibold mb-4 text-white">
                        Medium Sized Business Websites
                      </h2>
                      <p className="text-white">
                        We build professional, scalable websites designed to support
                        the needs of growing businesses. With a focus on
                        performance, functionality, and design, we create sites that
                        can handle increased traffic, integrate with the tools you
                        rely on, and showcase your brand at a higher level. From
                        advanced features to tailored user experiences, we make sure
                        your website is built to grow alongside your business while
                        keeping the process straightforward and collaborative.
                      </p>
                    </div>
                  </CarouselItem>
                  <CarouselItem className="md:basis-1/3">
                    <div className="p-8 bg-gradient-to-r from-cyan-500 to-blue-500 font-white rounded-md text-center min-h-[260px] flex flex-col">
                      <h2 className="text-2xl font-semibold mb-4 text-white">
                        Large Business Websites
                      </h2>
                      <p className="text-white">
                        We design and deliver enterprise-level websites built for
                        scale, performance, and impact. For larger businesses, we
                        focus on creating powerful platforms that can support
                        complex requirements, integrate with existing systems, and
                        provide a seamless experience for both customers and teams.
                        Our approach combines strategy, design, and technology to
                        build websites that not only reflect your brand at the
                        highest level but also drive efficiency and long-term
                        growth.
                      </p>
                    </div>
                  </CarouselItem>
                  <CarouselItem className="md:basis-1/3">
                    <div className="p-8 bg-gradient-to-r from-cyan-500 to-blue-500 font-white rounded-md text-center min-h-[260px] flex flex-col">
                      <h2 className="text-2xl font-semibold mb-4 text-white">
                        Shopify Sites
                      </h2>
                      <p className="text-white">
                        We build Shopify sites that make it easy for your
                        customers to browse, shop, and buy with confidence. From
                        sleek product displays and secure checkouts to
                        mobile-friendly designs and seamless payment integrations,
                        we create online stores that not only look great but also
                        drive sales. Our goal is to give you a platform that’s
                        simple to manage, scalable as your business grows, and
                        designed to deliver a smooth shopping experience from start
                        to finish.
                      </p>
                    </div>
                  </CarouselItem>
                  <CarouselItem className="md:basis-1/3">
                    <div className="p-8 bg-gradient-to-r from-cyan-500 to-blue-500 font-white rounded-md text-center min-h-[260px] flex flex-col">
                      <h2 className="text-2xl font-semibold mb-4 text-white">
                        Web Applications
                      </h2>
                      <p className="text-white">
                        We develop custom web applications that solve problems,
                        streamline processes, and bring your ideas to life. Whether
                        you need a tool to improve internal workflows, a platform to
                        engage your customers, or something completely unique, we
                        design and build solutions that are scalable, secure, and
                        easy to use. By combining modern technologies with a focus
                        on user experience, we create web apps that work seamlessly
                        across devices and grow alongside your business.
                      </p>
                    </div>
                  </CarouselItem>
                </CarouselContent>
                <div className="hidden xl:flex">
                <CarouselPrevious className="cursor-pointer" />
                <CarouselNext className="cursor-pointer" />
                </div>
              </Carousel>
            </div>
          </section>
  );
}