import Image from "next/image";
import Link from "next/link";
import React from "react";

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b">
      <div className="container flex h-16 max-w-screen-2xl items-center px-4">
        <Link className="flex items-center justify-center" href="#">
          <span className="sr-only italic">Satyam Mishra</span>
          <Image
            src={"/assets/media/profile.png"}
            height={40}
            width={40}
            alt="Satyam Mishra"
            className="h-10 w-10 rounded-full object-cover object-center border border-border"
          />
        </Link>
        <nav className="ml-auto flex gap-4 sm:gap-6">
          <Link
            className="text-sm font-medium hover:underline underline-offset-4"
            href="#skills"
          >
            Skills
          </Link>
          <Link
            className="text-sm font-medium hover:underline underline-offset-4"
            href="#projects"
          >
            Projects
          </Link>
          <Link
            className="text-sm font-medium hover:underline underline-offset-4"
            href="#experience"
          >
            Experience
          </Link>
          <Link
            className="text-sm font-medium hover:underline underline-offset-4"
            href="#connect"
          >
            Connect
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
