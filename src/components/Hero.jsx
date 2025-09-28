import Image from "next/image";

export default function Hero() {
  return (
    <section id="hero" className="row">
      <div className="justify-between content-center items-center px-10 flex">
        <div>
          <h1 className="font-bold text-7xl pb-8">
            Your <span className="bg-gradient-to-r from-cyan-500 to-blue-500 bg-clip-text text-transparent">Launchpad</span> to an AI-Driven Future
          </h1>
          <p className="text-xl font-bold opacity-75 text-gray-900 max-w-150">
            We build smart AI solutions and modern websites that help your business stay ahead in the digital world.
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
  );
}