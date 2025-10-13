"use client";
import React from "react";
import { useForm, ValidationError } from "@formspree/react";

export default function Contact() {
  const [state, handleSubmit] = useForm("xldpbvnq");
  return (
    <section id="contact" className="row py-15">
      <h1 className="flex justify-center font-bold text-5xl md:text-7xl pb-8" data-aos="fade-up" data-aos-delay="200">
        Contact Us
      </h1>
      <div className="flex justify-center items-center">
        {state.succeeded ? (
          <p className="font-semibold px-2 md:px-0 text-xl md:text-2xl text-center text-green-600 md:pt-10" data-aos="fade-up">
            Thank you for your message! <br /> A member of the team will be in touch shortly.
          </p>
        ) : (
          <form
            onSubmit={handleSubmit}
            className="flex flex-col w-full max-w-2xl space-y-4 px-5 md:px-0"
          >
            <label htmlFor="name" className="font-semibold" data-aos="fade-right" data-aos-delay="300">
              Name
            </label>
            <input
              id="name"
              type="text"
              name="name"
              placeholder="John Smith"
              required
              className="border border-gray-300 rounded px-3 py-2 mb-10"
              data-aos="fade-left" data-aos-delay="300"
            />
            <ValidationError prefix="Name" field="name" errors={state.errors} />
            <label htmlFor="email" className="font-semibold pt-3" data-aos="fade-left" data-aos-delay="300">
              Email
            </label>
            <input
              id="email"
              type="email"
              name="email"
              placeholder="email@example.com"
              required
              className="border border-gray-300 rounded px-3 py-2 mb-10"
              data-aos="fade-right" data-aos-delay="300"
            />
            <ValidationError
              prefix="Email"
              field="email"
              errors={state.errors}
            />
            <label htmlFor="number" className="font-semibold pt-3" data-aos="fade-right" data-aos-delay="300">
              Contact Number
            </label>
            <div className="flex border border-gray-300 rounded mb-10" data-aos="fade-left" data-aos-delay="300">
              <span className="inline-flex items-center px-3 bg-gray-100 text-gray-700 select-none rounded-l">
                +44
              </span>
              <input
                id="number"
                type="tel"
                name="number"
                placeholder="123456789"
                onInput={(e) => {
                  e.target.value = e.target.value.replace(/\D/g, "");
                }}
                required
                className="flex-1 rounded-r px-3 py-2"
              />
            </div>
            <ValidationError
              prefix="Number"
              field="number"
              errors={state.errors}
            />
            <label htmlFor="businessName" className="font-semibold pt-3" data-aos="fade-left" data-aos-delay="200">
              Business Name
            </label>
            <input
              id="businessName"
              type="text"
              name="businessName"
              placeholder="I Need Your Services Ltd"
              className="border border-gray-300 rounded px-3 py-2 mb-10"
              data-aos="fade-right" data-aos-delay="200"
            />
            <ValidationError
              prefix="Business Name"
              field="businessName"
              errors={state.errors}
            />
            <label
              htmlFor="servicesInterestedIn"
              className="font-semibold pt-3"
              data-aos="fade-right" data-aos-delay="200"
            >
              Services Interested In
            </label>
            <textarea
              id="servicesInterestedIn"
              name="servicesInterestedIn"
              required
              rows="5"
              className="border border-gray-300 rounded px-3 py-2 resize-none"
              data-aos="fade-left" data-aos-delay="200"
            />
            <ValidationError
              prefix="Services Interested In"
              field="servicesInterestedIn"
              errors={state.errors}
            />
            <div className="pt-4"></div>
            <button
              type="submit"
              disabled={state.submitting}
              className="bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-semibold py-2 rounded hover:bg-gradient-to-r hover:from-cyan-600 hover:to-blue-600 transition cursor-pointer"
              data-aos="fade-up" data-aos-delay="200"
            >
              Send
            </button>
          </form>
        )}
      </div>
    </section>
  );
}
