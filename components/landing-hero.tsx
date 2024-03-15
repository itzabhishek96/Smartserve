"use client";

import TypewriterComponent from "typewriter-effect";
import Link from "next/link";
import { useAuth } from "@clerk/nextjs";

import { Button } from "@/components/ui/button";

export const LandingHero = () => {
  const { isSignedIn } = useAuth();
    return (
      <div className="flex justify-center items-center min-h-screen">
        {/* Image */}
        <div className="w-1/2">
          <img src="/robo2.svg" alt="Robot" className="w-full animate-float" />
        </div>
        <div className="w-1/2 px-8">
          <div className="text-white text-center space-y-5">
            <div className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl space-y-5 font-extrabold">
              <h1>The Best AI Tool for</h1>
              <div className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
                <TypewriterComponent
                  options={{
                    strings: [
                      "Content Generation.",
                      "Code Generation.",
                      "Photo Generation.",
                      "Blog Writing.",
                      "Mail Writing.",
                      "Job Search.",
                      "Resume Building."
                    ],
                    autoStart: true,
                    loop: true,
                  }}
                />
              </div>
            </div>
            <div className="text-lg md:text-xl font-light text-gray-200">
              Create content using AI 10x faster.
            </div>
            <div>
              <Link href={""}>
                <Button className="md:text-lg p-4 md:p-6 rounded-full font-semibold bg-gradient-to-r from-pink-500 to-purple-500 hover:bg-gradient-to-r hover:from-pink-600 hover:to-purple-600 transition duration-300 ease-in-out">
                  Start Generating For Free
                </Button>
              </Link>
            </div>
            <div className="text-gray-400 text-xs md:text-sm font-normal">
              No credit card required.
            </div>
          </div>
        </div>
      </div>
    );
  };