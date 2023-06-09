import React from "react";
import Link from "next/link";
import ThemeChanger from "./ThemeChanger";
import { getCookie } from "cookies-next";

const Header = () => {
  let usercookiestring = getCookie("user");
  
  return (
    <div className="flex justify-between px-4 pt-4">
      <Link
        href="/dashboard/chats"
        type="Link"
        className="inline-flex items-center px-5 py-2.5 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
      >
        Messages
        <span className="inline-flex items-center justify-center w-4 h-4 ml-2 text-xs font-semibold text-blue-800 bg-blue-200 rounded-full">
          2
        </span>
      </Link>
      <h2>Welcome Back, {usercookiestring}</h2>
      <ThemeChanger />
    </div>
  );
};

export default Header;
