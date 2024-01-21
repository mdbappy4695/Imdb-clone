"use client";
import { useTheme } from "next-themes";
import React, { useEffect, useState } from "react";
import { BsMoonStarsFill } from "react-icons/bs";
import { MdLightMode } from "react-icons/md";
const DarkMode = () => {
  const { systemTheme, theme, setTheme } = useTheme();
  const [mount, setmount] = useState(false);
  const currentthem = theme === "system" ? systemTheme : theme;
  useEffect(() => {
    setmount(true);
  }, []);

  return (
    <>
      {mount && currentthem === "dark" ? (
        <MdLightMode
          onClick={() => setTheme("Light")}
          className="text-xl cursor-pointer hover:text-amber-500"
        />
      ) : (
        <BsMoonStarsFill
          onClick={() => setTheme("dark")}
          className="text-xl cursor-pointer hover:text-amber-500"
        />
      )}
    </>
  );
};

export default DarkMode;
