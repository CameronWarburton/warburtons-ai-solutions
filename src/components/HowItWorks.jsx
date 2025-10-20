

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="row max-w-6xl mx-auto py-16 px-4">
      <h1 className="font-bold text-5xl md:text-7xl flex justify-center pb-8 bg-gradient-to-r from-cyan-500 to-blue-500 bg-clip-text text-transparent" data-aos="fade-up">How It Works</h1>

      {/* Step 1 */}
      <div className="mb-12">
        <h2 className="text-2xl font-semibold mb-2">1. Meet & Greet</h2>
        <p>
          We start by getting to know you, your business, and your goals. 
          What do you want your website to achieve? This helps us tailor a plan 
          that’s perfect for your needs.
        </p>
      </div>

      {/* Step 2 */}
      <div className="mb-12">
        <h2 className="text-2xl font-semibold mb-2">2. Scope of Work</h2>
        <p>
          Next, we plan the project in detail. We outline what will be done, 
          timelines, and deliverables. Once you approve the scope, we’re ready to go!
        </p>
      </div>

      {/* Step 3 */}
      <div className="mb-12">
        <h2 className="text-2xl font-semibold mb-2">3. Testing & Collaboration</h2>
        <p>
          We work together through the testing phase to make sure everything works exactly 
          how you want. Your feedback is important every step of the way.
        </p>
      </div>

      {/* Step 4 */}
      <div className="mb-12">
        <h2 className="text-2xl font-semibold mb-2">4. Launch</h2>
        <p>
          After testing, your site goes live! We make sure it’s fully functional, fast, 
          and ready for your audience.
        </p>
      </div>

      {/* Step 5 */}
      <div className="mb-12">
        <h2 className="text-2xl font-semibold mb-2">5. Ongoing Support</h2>
        <p>
          After launch, we can continue helping with updates, tweaks, or new features. 
          You can choose a subscription plan so your site stays fresh and evolving.
        </p>
      </div>
    </section>
  );
}