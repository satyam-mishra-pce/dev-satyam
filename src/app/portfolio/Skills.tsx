import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { BrainIcon, Code2Icon, GitBranchIcon, LayoutIcon } from "lucide-react";
import React from "react";
import { Icon } from "@iconify/react";

const Skills = () => {
  return (
    <section id="skills" className="w-full py-12 md:py-24 lg:py-32 bg-muted">
      <div className="container px-4 md:px-6">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl mb-8">
          Skills
        </h2>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Code2Icon className="mr-2 h-6 w-6" />
                Frontend Development
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="list-none space-y-2">
                <li className="flex items-center">
                  <Icon
                    icon="icon-park-outline:html-five"
                    className="text-lg h-4 w-4 mr-2"
                  />
                  HTML, CSS, JavaScript
                </li>
                <li className="flex items-center">
                  <Icon icon="mdi:react" className="text-lg h-4 w-4 mr-2" />
                  ReactJS, NextJS
                </li>
                <li className="flex items-center">
                  <Icon
                    icon="teenyicons:typescript-outline"
                    className="text-lg h-4 w-4 mr-2"
                  />
                  TypeScript
                </li>
              </ul>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Icon
                  icon="mdi:paint-outline"
                  className="text-lg h-6 w-6 mr-2"
                />
                UI/UX Design
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="list-none space-y-2">
                <li className="flex items-center">
                  <LayoutIcon className="mr-2 h-4 w-4" />
                  Wireframing
                </li>
                <li className="flex items-center">
                  <Icon
                    icon="hugeicons:figma"
                    className="text-lg h-4 w-4 mr-2"
                  />
                  Figma
                </li>
              </ul>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Icon
                  icon="hugeicons:git-fork"
                  className="text-lg h-6 w-6 mr-2"
                />
                Version Control
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="list-none space-y-2">
                <li className="flex items-center">
                  <GitBranchIcon className="mr-2 h-4 w-4" />
                  Git
                </li>
                <li className="flex items-center">
                  <Icon icon="lucide:github" className="text-lg h-4 w-4 mr-2" />
                  GitHub
                </li>
              </ul>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <BrainIcon className="mr-2 h-6 w-6" />
                Problem Solving
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="list-none space-y-2">
                <li className="flex items-center">
                  <Code2Icon className="mr-2 h-4 w-4" />
                  Data Structures
                </li>
                <li className="flex items-center">
                  <Icon
                    icon="hugeicons:algorithm"
                    className="text-lg h-4 w-4 mr-2"
                  />
                  Algorithms
                </li>
              </ul>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Icon
                  icon="iconoir:mac-os-window"
                  className="text-lg h-6 w-6 mr-2"
                />
                Operating Systems
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="list-none space-y-2">
                <li className="flex items-center">
                  <Icon icon="ph:linux-logo" className="text-lg h-4 w-4 mr-2" />
                  Linux
                </li>
              </ul>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Icon
                  icon="icon-park-outline:other"
                  className="text-lg h-6 w-6 mr-2"
                />
                Others
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="list-none space-y-2">
                <li className="flex items-center">
                  <Icon
                    icon="hugeicons:blockchain-02"
                    className="text-lg h-4 w-4 mr-2"
                  />
                  Web 3
                </li>
                <li className="flex items-center">
                  <Icon icon="mage:keyboard" className="text-lg h-4 w-4 mr-2" />
                  Typing
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Skills;
