import Image from "next/image";
import Link from "next/link";
import React from "react";

const Hero = () => {
  return (
    <section className="relative w-full min-h-screen flex flex-col items-center lg:justify-center bg-grid-black/10 dark:bg-grid-white/10">
      <div className="absolute pointer-events-none inset-0 top-[-100%] flex items-center justify-center dark:bg-black bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_10%,black)]"></div>
      <div className="absolute top-0 bottom-0 left-[50%] translate-x-[-50%] w-full max-w-7xl flex items-end justify-center md:justify-end overflow-hidden">
        <Image
          alt="Satyam Mishra"
          className=" md:h-[calc(100%_-_200px)] lg:h-[calc(100%_-_100px)] object-cover md:-mr-32"
          height="1080"
          src="/assets/media/portrait.png"
          width="960"
        />
      </div>
      <div className="w-full max-w-7xl px-8 relative z-10 mt-40 lg:mt-0 ">
        <div className="grid gap-6 md:grid-cols-[420px_auto] md:gap-12">
          <div className="flex flex-col items-center md:items-start justify-center space-y-4">
            <div className="space-y-4 flex flex-col items-center md:items-start">
              <h1 className="text-3xl text-center md:text-left font-bold tracking-tighter sm:text-5xl xl:text-6xl/none bg-gradient-to-b from-foreground to-foreground/60 block text-transparent bg-clip-text">
                Satyam Mishra
              </h1>
              <strong className="text-xl block mt-2 text-muted-foreground text-center md:text-left">
                Front-End Designer and Web Developer
              </strong>
            </div>
            <p className="max-w-[600px] text-muted-foreground py-2 text-center md:text-left">
              I specialize in designing and building custom components, and
              working with states in a web-application. Proficient in problem
              solving skills and knowledge of Data Structures, I have gained
              valuable hands-on experience through internships and personal
              projects.
            </p>
            <div className="flex flex-col gap-2 min-[400px]:flex-row">
              <Link
                className="inline-flex h-10 items-center justify-center rounded-md bg-primary px-8 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                href="#connect"
              >
                Connect
              </Link>
              <Link
                className="inline-flex h-10 items-center justify-center rounded-md border border-input bg-background px-8 text-sm font-medium shadow-sm transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                href="#projects"
              >
                View Projects
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
