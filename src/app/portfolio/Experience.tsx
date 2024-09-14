import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const Experience = () => {
  return (
    <section
      id="experience"
      className="w-full py-12 md:py-24 lg:py-32 bg-muted"
    >
      <div className="container px-4 md:px-6">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl mb-8">
          Professional Experience
        </h2>
        <div className="grid gap-6 md:grid-cols-2">
          <Card className="flex flex-col h-full">
            <CardHeader>
              <CardTitle className="text-xl sm:text-2xl break-words">
                <div className="flex flex-wrap">
                  <span className="mr-1">Samsung</span>
                  <span className="mr-1">Themes</span>
                  <span>(2022)</span>
                </div>
              </CardTitle>
            </CardHeader>
            <CardContent className="flex-grow">
              <p>
                Freelanced as a theme creator for the public. Used the Studio
                App provided by the company. Initial designs were crafted using
                Figma.
              </p>
            </CardContent>
          </Card>
          <Card className="flex flex-col h-full">
            <CardHeader>
              <CardTitle className="text-xl sm:text-2xl break-words">
                <div className="flex flex-wrap">
                  <span className="mr-1">Epoch</span>
                  <span className="mr-1">Protocol</span>
                  <span>(January 2024 - Current)</span>
                </div>
              </CardTitle>
            </CardHeader>
            <CardContent className="flex-grow">
              <p>
                Working as a React Developer for the Web3 based automation
                company. Creating wireframes for their dApps, and then
                implementing them.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Experience;
