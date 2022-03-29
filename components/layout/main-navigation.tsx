/* eslint-disable react/no-unknown-property */
import { useTheme } from "next-themes";
import { MoonIcon, SunIcon } from "@heroicons/react/solid";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { MdOutlineAdd } from "react-icons/md";


export default function MainNavigation(props: Any) {

  const { systemTheme, theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  useEffect(() => {
    setMounted(true);
  }, []);

  const renderThemeChanger = () => {
    if (!mounted) return null;
    const currentTheme = theme === "system" ? systemTheme : theme;

    if (currentTheme === "light") {
      return (
        <MoonIcon
          className="w-7 h-7"
          role="button"
          onClick={() => setTheme("dark")}
        />
      );
    } else {
      return (
        <SunIcon
          color="black"
          className="w-7 h-7"
          role="button"
          onClick={() => setTheme("light")}
        />
      );
    }
  };

  return (
    <header class="px-8 md:px-20 lg:px-48 xl:px-60 2xl:px-96 py-2 sm:py-4 md:py-8 justify-start md:justify-between flex-column sm:flex items-center mx-auto bg-gray-50 dark:bg-primary">
      <div>
        <Link href="/">
          <a>
            <Image
              alt="logo picture"
              src="/images/cards.png"
              width={35}
              height={35}
            />
          </a>
        </Link>
      </div>
      <div>
        <ul class="flex flex-row justify-end items-center">
          <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full mr-8 flex flex-row items-center">
            <MdOutlineAdd class="mr-2"/>
            New Card
          </button>
          <motion.li
            whileHover={{
              scale: 1.2,
              boxShadow: "0px 0px 10px rgb(255,255,255)",
            }}
            whileTap={{ scale: 0.9 }}
            class="pl-2 transform hover:scale-125 rounded-full h-8 w-11 justify-center bg-gray-300 dark:bg-gray-300"
          >
            {renderThemeChanger()}
          </motion.li>
        </ul>
      </div>
    </header>
  );
};
