import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Link from "next/link";

const Projects = () => {
  return (
    <section id="projects" className="w-full py-12 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl mb-8">
          Personal Projects
        </h2>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          <Card className="flex flex-col h-full">
            <CardHeader>
              <CardTitle>npm react-custom-clock</CardTitle>
            </CardHeader>
            <CardContent className="flex-grow">
              <p>An NPM package for Custom Analog Clocks in react apps.</p>
              <Link
                className="text-sm text-blue-500 hover:underline mt-2 inline-block"
                href="https://clockworks-rcc.vercel.app"
                target="_blank"
                rel="noopener noreferrer"
              >
                View Project
              </Link>
            </CardContent>
          </Card>
          <Card className="flex flex-col h-full">
            <CardHeader>
              <CardTitle>Cryptophile Beta</CardTitle>
            </CardHeader>
            <CardContent className="flex-grow">
              <p>A secure 256-bit encrypted password manager application.</p>
              <Link
                className="text-sm text-blue-500 hover:underline mt-2 inline-block"
                href="https://cryptophile.web.app/"
                target="_blank"
                rel="noopener noreferrer"
              >
                View Project
              </Link>
            </CardContent>
          </Card>
          <Card className="flex flex-col h-full">
            <CardHeader>
              <CardTitle>Cryptofund</CardTitle>
            </CardHeader>
            <CardContent className="flex-grow">
              <p>Create and apply in funding campaigns using cryptocurrency.</p>
              <Link
                className="text-sm text-blue-500 hover:underline mt-2 inline-block"
                href="https://cryptofund-next.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
              >
                View Project
              </Link>
            </CardContent>
          </Card>
          <Card className="flex flex-col h-full">
            <CardHeader>
              <CardTitle>Sorting Visualizer</CardTitle>
            </CardHeader>
            <CardContent className="flex-grow">
              <p>Visualize multiple sorting algorithms like never before.</p>
              <Link
                className="text-sm text-blue-500 hover:underline mt-2 inline-block"
                href="https://sorting-visualizer-react.web.app/"
                target="_blank"
                rel="noopener noreferrer"
              >
                View Project
              </Link>
            </CardContent>
          </Card>
          <Card className="flex flex-col h-full">
            <CardHeader>
              <CardTitle>BingoStreaks</CardTitle>
            </CardHeader>
            <CardContent className="flex-grow">
              <p>
                First ever multiplayer bingo game without user registrations.
              </p>
              <Link
                className="text-sm text-blue-500 hover:underline mt-2 inline-block"
                href="https://bingostreaks.web.app/"
                target="_blank"
                rel="noopener noreferrer"
              >
                View Project
              </Link>
            </CardContent>
          </Card>
          <Card className="flex flex-col h-full">
            <CardHeader>
              <CardTitle>Routiner</CardTitle>
            </CardHeader>
            <CardContent className="flex-grow">
              <p>
                Create, modify, delete and play routines using TextToSpeech.
              </p>
              <Link
                className="text-sm text-blue-500 hover:underline mt-2 inline-block"
                href="https://react-routiner.web.app/"
                target="_blank"
                rel="noopener noreferrer"
              >
                View Project
              </Link>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Projects;
