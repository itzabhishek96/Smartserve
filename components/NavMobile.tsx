"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import ToggleTheme from "./Reusable/ToggleTheme";
import Link from "next/link";

const NavMobile = () => {
  const [open, setOpen] = useState(false);
  const toggle = () => setOpen((isOpen) => !isOpen);

  return (
    <motion.div className="sticky top-0 z-50">
      <nav className="padding-layout flex h-70 items-center justify-between border border-transparent border-b-natural-5  bg-white dark:border-b-darkBG-3 dark:bg-darkBG-1">
        {open ? (
          <Image
            src={"/img/company-logo/jobit.svg"}
            width={80}
            height={80}
            alt={"hamburger logo"}
          />
        ) : (
          <Image
            src={"/img/iconography/hamburger-menu.svg"}
            width={30}
            height={30}
            alt={"hamburger logo"}
            onClick={toggle}
          />
        )}

        {open ? (
          <Image
            src={"/img/iconography/outline.svg"}
            width={20}
            height={20}
            alt={"close icon"}
            onClick={toggle}
          />
        ) : (
          <ToggleTheme />
        )}
      </nav>
      <AnimatePresence mode="sync">
        {open && (
          <motion.div
            className="absolute right-0 flex h-screen w-[262px] items-center bg-white dark:bg-darkBG-1"
            initial="hide"
            animate="show"
            exit="hide"
          >
            <div className="flex w-full flex-col items-start justify-center bg-white dark:bg-darkBG-1">
              <div className="absolute right-[262px] h-full w-[600px] bg-black opacity-20 dark:bg-white dark:opacity-5"></div>
              <div className="mb-6 pl-5">
                <ul>
                  <li className=" py-3 pl-4 pr-32 font-bold text-natural-7 hover:rounded-md hover:border-primary hover:bg-natural-1 hover:text-primary active:border-b-primary dark:hover:bg-darkBG-3">
                    <Link href="/">Overview</Link>
                  </li>
                  <li className=" py-3 pl-4 pr-32 font-bold text-natural-7 hover:rounded-md hover:border-primary hover:bg-natural-1 hover:text-primary active:border-b-primary dark:hover:bg-darkBG-3">
                    <Link href="/jobsearch">Job Search</Link>
                  </li>
                  <li className="py-3 pl-4 font-bold text-natural-7 hover:rounded-md hover:border-primary hover:bg-natural-1 hover:text-primary active:border-b-primary dark:hover:bg-darkBG-3">
                    <Link href="/estimatedsalaries">Estimated Salaries</Link>
                  </li>
                </ul>
              </div>
              <div className="pl-8">
                <ToggleTheme />
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default NavMobile;
