import Image from "next/image";

export default function Hero() {
  return (
    <section id="hero" className="row">
      <div className="justify-between content-center items-center px-10 flex flex-col lg:flex-row">
        <div>
          <h1 className="font-bold text-5xl md:text-7xl pb-8" data-aos="fade-up">
            Your <span className="bg-gradient-to-r from-cyan-500 to-blue-500 bg-clip-text text-transparent transition-colors duration-300 hover:from-blue-500 hover:to-cyan-500">Launchpad</span> to an AI-Driven Future
          </h1>
          <p className="text-xl font-bold text-gray-800/65 max-w-150" data-aos="fade-up" data-aos-delay="200">
            We build smart AI solutions and modern websites that help your business stay ahead in the digital world.
          </p>
        </div>
        <div>
        <Image
          src="/assets/undraw_vibe-coding.svg"
          alt="AI Agent Illustration"
          width={500}
          height={600}
          className="mt-10 md:pl-10 transform-gpu transition-transform duration-1200 ease-in-out hover:scale-105"
          data-aos="fade-up"
          data-aos-delay="400"
        />
        </div>
      </div>
    </section>
  );
}