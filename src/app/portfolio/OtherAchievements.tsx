import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Link from "next/link";

const Achievements = () => {
  return (
    <section id="achievements" className="w-full py-12 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl mb-8">
          Other Achievements
        </h2>
        <div className="grid gap-6 md:grid-cols-2">
          <Card>
            <CardHeader>
              <CardTitle>HackTheLeague 3.0 (2024)</CardTitle>
            </CardHeader>
            <CardContent>
              <p>Winner in the Polygon Bounty Track ($700 Prize Pool)</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Monkeytype</CardTitle>
            </CardHeader>
            <CardContent>
              <p>Max. typing Speed: 163WPM</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Leetcode</CardTitle>
            </CardHeader>
            <CardContent>
              <p>Max. rating: 1862, with current streak of 650+ days</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Open Source Contribution</CardTitle>
            </CardHeader>
            <CardContent>
              <p>
                Published package:{" "}
                <Link
                  className="text-blue-500 hover:underline"
                  href="https://www.npmjs.com/package/react-custom-clock"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  react-custom-clock
                </Link>
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Achievements;
