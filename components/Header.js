import Image from "next/image";
import { useRouter } from "next/router";
import React, { useRef } from "react";
import XMarkIcon from "@heroicons/react/24/solid/XMarkIcon";
import MicrophoneIcon from "@heroicons/react/24/solid/MicrophoneIcon";
import MagnifyingGlassIcon from "@heroicons/react/24/solid/MagnifyingGlassIcon";
import Avatar from "../components/Avatar";
import HeaderOptions from "./HeaderOptions";

const Header = () => {
  const router = useRouter();
  const searchInputRef = useRef(null);
  const search = (e) => {
    e.preventDefault();
    const term = searchInputRef.current.value;
    if(!term) return ;
    router.push(`/search?term=${term}`)
  }
  return (
    <header className="sticky top-0 bg-white " >
      <div className="flex w-full p-6 items-center " >
      <Image
        alt=""
        // src="https://www.freepnglogos.com/uploads/google-logo-png-hd-11.png"
src="https://pngimg.com/uploads/google/small/google_PNG19644.png"
        onClick={() => router.push("/")}
        width={120}
        height={40}
        className="cursor-pointer"
      />
      <form className="flex flex-grow border border-gray-200 rounded-full shadow-lg max-w-3xl items-center px-6 py-3 ml-10 mr-5">
        <input
          className="flex-grow w-full focus:outline-none"
          ref={searchInputRef}
          type="text"
        />
        <XMarkIcon
          className="h-7 text-gray-500 cursor-pointer transition duration-100 transform hover:scale-125 sm:mr-3"
          onClick={() => (searchInputRef.current.value = "")}
        />
        <MicrophoneIcon className="h-6 mr-3 hidden sm:inline-flex text-blue-500 border-l-2 pl-4 border-r-gray-300 " />
        <MagnifyingGlassIcon className="h-6 text-blue-500 hidden sm:inline-flex" />
     <button hidden type="submit" onClick={search} >Search</button>
      </form>
      <Avatar
      className="ml-auto"
            url={
              "https://www.bing.com/th?id=OIP.nOhGSkOV-SpFPuFHpBjzlwHaEo&w=187&h=185&c=8&rs=1&qlt=90&o=6&pid=3.1&rm=2"
            }
          />
      </div>
      <HeaderOptions/>
    </header>
  );
};

export default Header;
