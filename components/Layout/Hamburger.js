import { useState } from "react"; // import state
import Link from "next/link";

export default function Hamburger(props) {
  const [isNavOpen, setIsNavOpen] = useState(false); // initiate isNavOpen state with false

  return (
    <>
      <div
        className="flex items-start justify-end py-8 min-w-[150px] md:hidden absolute top-0 right-0 z-20 h-full"
        // className={
        //   isNavOpen
        //     ? "flex items-start justify-end py-8 min-w-[150px] md:hidden absolute top-0 right-0 z-20 h-full"
        //     : "flex items-start justify-end py-8 min-w-[150px] md:hidden absolute top-0 right-0 z-20"
        // }
      >
        <div
          className={isNavOpen ? "hidden" : "space-y-2 block mr-10"}
          onClick={() => setIsNavOpen((prev) => !prev)} // toggle isNavOpen state on click
        >
          <span className="block h-0.5 w-8 animate-pulse bg-gray-600"></span>
          <span className="block h-0.5 w-8 animate-pulse bg-gray-600"></span>
          <span className="block h-0.5 w-8 animate-pulse bg-gray-600"></span>
        </div>
      </div>
      <div
        className={
          isNavOpen
            ? "fixed top-0 right-0 z-50 block flex-col justify-start min-w-[200px] h-screen bg-dark"
            : "hidden"
        }
      >
        {" "}
        <div
          className="mt-[10px] pl-32 py-2"
          onClick={() => setIsNavOpen(false)} // change isNavOpen state to false to close the menu
        >
          <svg
            className="h-8 w-8 text-gray-600"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <line x1="18" y1="6" x2="6" y2="18" />
            <line x1="6" y1="6" x2="18" y2="18" />
          </svg>
        </div>
        <div>
          <ul className="MENU-LINK-MOBILE-OPEN flex flex-col space-y-8 items-center justify-between text-white">
            <li className="border-b border-gray-400 mt-6 uppercase hover:text-blue1 hover:border-blue1">
              <Link href="/gambling">Top 10 Casinos</Link>
            </li>
            <li className="border-b border-gray-400 uppercase hover:text-blue1 hover:border-blue1">
              <Link href="/casinos" className="">
                All Casinos
              </Link>
            </li>
            <li className="border-b border-gray-400 uppercase hover:text-blue1 hover:border-blue1">
              <Link href="/about">About</Link>
            </li>
            <li className="border-b border-gray-400 uppercase hover:text-blue1 hover:border-blue1">
              <Link href="/learn">Blog</Link>
            </li>
            <li className="border-b border-gray-400 uppercase hover:text-blue1 hover:border-blue1">
              <Link href="/profile">Profile</Link>
            </li>
            <li className="border-b border-gray-400 uppercase hover:text-blue1 hover:border-blue1">
              <Link href="/reviews">Review</Link>
            </li>
            <li className="border-b border-gray-400 uppercase hover:text-blue1 hover:border-blue1">
              <div onClick={props.onSignIn}>Sign in</div>
            </li>
            <li className="border-b border-gray-400 uppercase hover:text-blue1 hover:border-blue1">
              <div onClick={props.onSignUp}>Sign up</div>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}
