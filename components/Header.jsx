import Image from "next/image";
import Link from "next/link";
import React from "react";
import {
  VideoCameraIcon,
  TvIcon,
  StarIcon,
  PlusIcon,
  HomeIcon,
  MagnifyingGlassIcon,
} from "@heroicons/react/24/solid";
import { signIn, signOut, useSession } from "next-auth/react";
import { useRouter } from "next/router";

const Header = () => {
  const { data: session } = useSession();
  const router = useRouter();
  return (
    <header className="sticky bg-[#040714] top-0 z-[1000] flex items-center px-10 h-[72px] md:px-12">
      <Link href="/">
        <Image src="/images/logo.svg" width={80} height={80} />
      </Link>
      {session && (
        <div className="hidden ml-10  md:flex items-center space-x-6">
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
      )}
      {!session ? (
        <button
          onClick={signIn}
          className="ml-auto uppercase border px-4 py-1.5 rounded font-medium tracking-wide hover:bg-white hover:text-black transi duration-200">
          Login
        </button>
      ) : (
        <img
          className="ml-auto h-12 w-12 rounded-full object-cover cursor-pointer"
          src={session.user.image}
          width={10}
          height={10}
          alt=""
          onClick={signOut}
        />
      )}
    </header>
  );
};

export default Header;
