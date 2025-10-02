import Image from "next/image";

export default function About() {
  return (
    <section
      id="about"
      className="py-10 bg-gradient-to-r from-cyan-500 to-blue-500"
    >
      <h1 className="flex justify-center font-bold text-white text-7xl pb-8 pt-10">
        About Us
      </h1>
      <div className="flex justify-center">
        <div className="flex flex-col items-center">
          <Image
            src="/assets/me.jpg"
            alt="Cameron Warburton's Portrait"
            width={420}
            height={350}
            className="rounded-full"
          />
          <h1 className="pt-3 text-2xl font-bold text-gray-100 opacity-85">
            Cameron Warburton
          </h1>
          <h1 className=" font-bold text-gray-100 opacity-80">
            Director & Founder
          </h1>
        </div>
        <div className="pl-20">
          <p className="text-white text-xl max-w-3xl">
            Hi, I'm Cameron <span className="wave">👋</span>
          </p>
          <p className="text-white text-xl max-w-3xl pt-5">
            Director and Founder of Warburtons AI Solutions Ltd. I’ve been
            diving into coding since 2023, constantly exploring new technologies
            and learning something new every day. My mission is to work closely
            with businesses to enhance their online presence and attract more
            visitors to their websites through smart, modern solutions.
          </p>
          <p className="text-white text-xl max-w-3xl pt-5">
            Travel is a huge part of who I am. I spent a year living on the Gold
            Coast in Australia, which is where I first got into coding through
            an online boot camp — a journey that set me on the path I’m on
            today. I love immersing myself in new cultures, putting myself in
            unfamiliar situations, and collecting experiences that inspire both
            my personal life and my work.
          </p>
          <p className="text-white text-xl max-w-3xl pt-5">
            Outside of tech, I’m big into sports like padel and football, and
            I’m very outgoing, I love meeting new people and staying active. I’m
            also a bit of a nerd when it comes to Apple products and services,
            always exploring the latest gadgets and software to see what’s
            possible.
          </p>
        </div>
      </div>
      <div className="flex justify-center pt-30 pb-20">
        <div className="pr-20">
          <p className="text-white text-xl max-w-3xl">Hi, I’m Sammii <span className="wave">👋</span> </p>
          <p className="text-white text-xl max-w-3xl pt-5">
            I’m the cofounder here and the marketing mind behind the brand. With
            a degree in Marketing and years of experience in events and account
            management, I’ve built up a real passion for helping businesses
            connect with their audiences in a way that feels genuine and
            impactful. I love turning ideas into strategies that actually work,
            whether that’s growing awareness, building relationships, or making
            sure clients feel supported every step of the way.
          </p>
          <p className="text-white text-xl max-w-3xl pt-5">
            I’ve always been a people-person at heart, which is probably why I
            naturally gravitated towards account management and events before
            stepping into this role. I thrive on communication, organisation,
            and finding creative ways to bring big visions to life. For me,
            marketing isn’t just about numbers and campaigns—it’s about making
            things click for people.
          </p>
          <p className="text-white text-xl max-w-3xl pt-5">
            Outside of work, I try to squeeze as much adventure into life as
            possible. I love to travel, stay active, and explore new places,
            whether that’s hopping on a plane or just finding hidden gems closer
            to home. And of course, a lot of my free time is happily taken up by
            our dog, who makes sure life is never boring.
          </p>
        </div>
        <div className="flex flex-col items-center">
          <Image
            src="/assets/Sammii.jpg"
            alt="Cameron Warburton's Portrait"
            width={420}
            height={350}
            className="rounded-full"
          />
          <h1 className="pt-3 text-2xl font-bold text-gray-100 opacity-85">
            Samantha Williams
          </h1>
          <h1 className=" font-bold text-gray-100 opacity-80">
            Director & Founder
          </h1>
        </div>
      </div>
    </section>
  );
}
