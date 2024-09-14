import React from "react";
import { Button } from "@/components/ui/button";
import { LinkedinIcon, MailIcon, MapPinIcon, PhoneIcon } from "lucide-react";
import Link from "next/link";
import { Icon } from "@iconify/react/dist/iconify.js";

const Connect = () => {
  return (
    <section
      id="connect"
      className="w-full py-12 md:py-24 lg:py-32 border-t border-t-border"
    >
      <div className="container px-4 md:px-6">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl mb-8">
          Connect With Me
        </h2>
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
          <div className="space-y-4">
            <Link
              className="flex items-center space-x-2 hover:underline"
              href={"tel:+919352653929"}
            >
              <PhoneIcon className="w-5 h-5" />
              <span>+91 9352653929</span>
            </Link>
            <Link
              className="flex items-center space-x-2 hover:underline"
              href={"mailto:satyam1308mishra@gmail.com"}
            >
              <MailIcon className="w-5 h-5" />
              <span>satyam1308mishra@gmail.com</span>
            </Link>
            <Link
              className="flex items-center space-x-2 hover:underline"
              href={"https://maps.app.goo.gl/Xv3QTRqizGDqeo659"}
              target="_blank"
            >
              <MapPinIcon className="w-5 h-5" />
              <span>Jaipur, Rajasthan, India</span>
            </Link>
          </div>
          <div className="grid grid-cols-3 gap-4 w-full max-w-[300px]">
            <Link
              href="https://leetcode.com/satyam_mishra13"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button variant="outline" size="icon" className="w-full h-12">
                <Icon
                  icon="simple-icons:leetcode"
                  className="text-lg"
                  aria-hidden
                />
                <span className="sr-only">Leetcode</span>
              </Button>
            </Link>
            <Link
              href="https://www.linkedin.com/in/mishra-satyam"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button variant="outline" size="icon" className="w-full h-12">
                <LinkedinIcon className="h-5 w-5" />
                <span className="sr-only">LinkedIn</span>
              </Button>
            </Link>
            <Link
              href="https://github.com/satyam-mishra-pce"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button variant="outline" size="icon" className="w-full h-12">
                <Icon icon="mdi:github" className="text-lg" aria-hidden />
                <span className="sr-only">GitHub</span>
              </Button>
            </Link>
            <Link
              href="https://stackoverflow.com/users/17881188/satyam-mishra"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button variant="outline" size="icon" className="w-full h-12">
                <Icon
                  icon="cib:stackoverflow"
                  className="text-lg"
                  aria-hidden
                />
                <span className="sr-only">StackOverflow</span>
              </Button>
            </Link>
            <Link
              href="https://monkeytype.com/profile/satyam13"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button variant="outline" size="icon" className="w-full h-12">
                <Icon
                  icon="simple-icons:monkeytype"
                  className="text-lg"
                  aria-hidden
                />
                <span className="sr-only">MonkeyType</span>
              </Button>
            </Link>
            <Link
              href="https://x.com/Satyam_Mis"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button variant="outline" size="icon" className="w-full h-12">
                <Icon
                  icon="ri:twitter-x-line"
                  className="text-lg"
                  aria-hidden
                />
                <span className="sr-only">Twitter</span>
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Connect;
