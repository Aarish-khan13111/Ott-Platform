import Image from "next/image";
import Link from "next/link";
import React from "react";
import { HomeIcon } from "@heroicons/react/24/solid";
import { MagnifyingGlassIcon } from "@heroicons/react/24/solid";
import { PlusIcon } from "@heroicons/react/24/solid";
import { StarIcon } from "@heroicons/react/24/solid";
import { TvIcon } from "@heroicons/react/24/solid";
import { VideoCameraIcon } from "@heroicons/react/24/solid";
import { signIn } from "next-auth/react";

const Header = () => {
  return (
    <div className="sticky bg-[#040714] top-0 z-[1000] flex items-center px-10 h-[72px] md:px-12">
      <Link href="/">
        <Image src="/images/logo.svg" width={80} height={80} />
      </Link>
      <div className="hidden ml-10 md:flex items-center space-x-6">
        <a className="header-link group">
          <HomeIcon className="h-4" />
          <span className="span">Home</span>
        </a>
        <a className="header-link group">
          <MagnifyingGlassIcon className="h-4" />
          <span className="span">Search</span>
        </a>
        <a className="header-link group">
          <PlusIcon className="h-4" />
          <span className="span">Watch list</span>
        </a>
        <a className="header-link group">
          <StarIcon className="h-4" />
          <span className="span">Orignals</span>
        </a>
        <a className="header-link group">
          <VideoCameraIcon className="h-4" />
          <span className="span">Movies</span>
        </a>
        <a className="header-link group">
          <TvIcon className="h-4" />
          <span className="span">Series</span>
        </a>
      </div>
      <button
        onClick={signIn}
        className="ml-auto uppercase border px-4 py-1.5 rounded font-medium tracking-wide hover:bg-white hover:text-black transi duration-200">
        Login
      </button>
    </div>
  );
};

export default Header;
