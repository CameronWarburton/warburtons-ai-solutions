export default function HowWeWork() {
  return (
    <section id="how-it-works" className="w-full py-16 px-10 2xl:px-20 bg-[#161616]">
      <div className="flex flex-col items-center justify-center">
        <h1
          className="font-bold text-5xl md:text-7xl flex justify-center pb-8 bg-gradient-to-r from-cyan-500 to-blue-500 bg-clip-text text-transparent text-center md:text-left"
          data-aos="fade-up"
        >
          How We Work
        </h1>
        <span className="bg-gradient-to-r from-cyan-500 to-blue-500 h-3 w-[15%]" data-aos="fade-up" data-aos-delay="150"></span>
        <p className="text-[#888888] text-[20px] text-center max-w-150 pt-10 pb-15" data-aos="fade-up" data-aos-delay="200">
          We keep our process simple, transparent, and actually enjoyable. Every
          step is built around clear communication and teamwork so you always
          know what’s happening, why it’s happening, and how it moves your
          project forward.
        </p>
      </div>

      <div className="flex flex-wrap lg:flex-nowrap justify-center gap-5 xl:gap-20" data-aos="fade-up" data-aos-delay="400">
        {/* Step 1 */}
        <div className="w-full lg:w-64 transition-all duration-600 hover:-translate-y-2 hover:translate-x-2 hover:bg-gradient-to-r from-blue-700 to-black p-[20px]">
          <h2 className="text-5xl font-semibold mb-2 leading-15 bg-cyan-500 bg-clip-text text-transparent opacity-65 text-center lg:text-left">
            1
          </h2>
          <h3 className="text-[25px] font-semibold mb-2 text-white text-center lg:text-left">
            Meet & Greet
          </h3>
          <p className="text-[20px] text-[#888888] text-center lg:text-left">
            We start by getting to know you, your business, and your goals. What
            do you want your website to achieve? This helps us tailor a plan
            that’s perfect for your needs.
          </p>
        </div>

        {/* Step 2 */}
        <div className="w-full lg:w-64 transition-all duration-600 hover:-translate-y-2 hover:translate-x-2 hover:bg-gradient-to-r from-blue-700 to-black p-[20px]">
          <h2 className="text-5xl font-semibold mb-2 leading-15 bg-cyan-500 bg-clip-text text-transparent opacity-65 text-center lg:text-left">
            2
          </h2>
          <h3 className="text-[25px] font-semibold mb-2 text-white text-center lg:text-left">
            Scope of Work
          </h3>
          <p className="text-[20px] text-[#888888] text-center lg:text-left">
            Next, we plan the project in detail. We outline what will be done,
            timelines, and deliverables. Once you approve the scope, we’re ready
            to go!
          </p>
        </div>

        {/* Step 3 */}
        <div className="w-full lg:w-64 transition-all duration-600 hover:-translate-y-2 hover:translate-x-2 hover:bg-gradient-to-r from-blue-700 to-black p-[20px]">
          <h2 className="text-5xl font-semibold mb-2 leading-15 bg-cyan-500 bg-clip-text text-transparent opacity-65 text-center lg:text-left">
            3
          </h2>
          <h3 className="text-[25px] font-semibold mb-2 text-white text-center lg:text-left">
            Testing & Collaboration
          </h3>
          <p className="text-[20px] text-[#888888] text-center lg:text-left">
            We work together through the testing phase to make sure everything
            works exactly how you want. Your feedback is important every step of
            the way.
          </p>
        </div>

        {/* Step 4 */}
        <div className="w-full lg:w-64 transition-all duration-600 hover:-translate-y-2 hover:translate-x-2 hover:bg-gradient-to-r from-blue-700 to-black p-[20px]">
          <h2 className="text-5xl font-semibold mb-2 leading-15 bg-cyan-500 bg-clip-text text-transparent opacity-65 text-center lg:text-left">
            4
          </h2>
          <h3 className="text-[25px] font-semibold mb-2 text-white text-center lg:text-left">Launch</h3>
          <p className="text-[20px] text-[#888888] text-center lg:text-left">
            After testing, your site goes live! We make sure it’s fully
            functional, fast, and ready for your audience.
          </p>
        </div>

        {/* Step 5 */}
        <div className="w-full lg:w-64 transition-all duration-600 hover:-translate-y-2 hover:translate-x-2 hover:bg-gradient-to-r from-blue-700 to-black p-[20px]">
          <h2 className="text-5xl font-semibold mb-2 leading-15 bg-cyan-500 bg-clip-text text-transparent opacity-65 text-center lg:text-left">
            5
          </h2>
          <h3 className="text-[25px] font-semibold mb-2  text-white text-center lg:text-left">
            Ongoing Support
          </h3>
          <p className="text-[20px] text-[#888888] text-center lg:text-left">
            After launch, we can continue helping with updates, tweaks, or new
            features. You can choose a subscription plan so your site stays
            fresh and evolving.
          </p>
        </div>
      </div>
    </section>
  );
}
