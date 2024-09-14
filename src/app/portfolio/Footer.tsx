"use client";
import { Switch } from "@/components/ui/switch";
import Link from "next/link";
import React, { useCallback, useEffect, useState } from "react";
import useLocalStorage from "use-local-storage";

const Footer = () => {
  const [localStorageDarkMode, setLocalStorageDarkMode] = useLocalStorage<
    "true" | "false"
  >("isDarkMode", "true");
  const parseLocalStorageValue = useCallback(() => {
    if (localStorageDarkMode === "true" || localStorageDarkMode === "false") {
      const val = JSON.parse(localStorageDarkMode) as boolean;
      return val;
    }
    return true;
  }, [localStorageDarkMode]);
  const [isDarkMode, setDarkMode] = useState(parseLocalStorageValue());

  useEffect(() => {
    if (isDarkMode) {
      setLocalStorageDarkMode("true");
    } else {
      setLocalStorageDarkMode("false");
    }
    if (!document) return;
    if (isDarkMode) {
      document.body.classList.add("dark");
    } else {
      document.body.classList.remove("dark");
    }
  }, [isDarkMode]);
  return (
    <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t">
      <p className="text-xs text-muted-foreground">
        © {new Date().getFullYear()} Satyam Mishra. All rights reserved.
      </p>
      <nav className="sm:ml-auto flex gap-4 sm:gap-6">
        <div className="text-xs flex items-center gap-2 mr-4">
          <Switch
            checked={isDarkMode}
            onCheckedChange={(val) => setDarkMode(val)}
            id="dark-mode-switch"
          />
          <label htmlFor="dark-mode-switch">Dark</label>
        </div>
        <Link
          className="text-xs hover:underline underline-offset-4"
          href="#skills"
        >
          Skills
        </Link>
        <Link
          className="text-xs hover:underline underline-offset-4"
          href="#projects"
        >
          Projects
        </Link>
        <Link
          className="text-xs hover:underline underline-offset-4"
          href="#experience"
        >
          Experience
        </Link>
      </nav>
    </footer>
  );
};

export default Footer;
