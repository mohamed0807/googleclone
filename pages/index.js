import Head from "next/head";
import Image from "next/image";
import Avatar from "../components/Avatar";
import TableCellsIcon from "@heroicons/react/24/outline/TableCellsIcon";
import MagnifyingGlassIcon from "@heroicons/react/20/solid/MagnifyingGlassIcon";
import MicrophoneIcon from "@heroicons/react/20/solid/MicrophoneIcon";
import Footer from "../components/Footer";
import { useRef } from "react";
import { useRouter } from "next/router";

const Home = () => {
  const searchInputRef = useRef(null);
  const router = useRouter();
  const Search = (e) => {
    e.preventDefault();
    const term = searchInputRef.current.value;
    if (!term) return;
    router.push(`/search?term=${term}`);
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <header className="flex w-full p-5 justify-between text-sm text-gray-700 ">
        <div className="flex space-x-4 items-center ">
          <p className="link">About</p>
          <p className="link">Store</p>
        </div>
        <div className="flex space-x-4 items-center">
          <p className="link">Gmail</p>
          <p className="link">Images</p>
          <TableCellsIcon className="h-10 w-10 p-2 rounded-full hover:bg-gray-100 cursor-pointer " />
          <Avatar
            url={
              "https://www.bing.com/th?id=OIP.nOhGSkOV-SpFPuFHpBjzlwHaEo&w=187&h=185&c=8&rs=1&qlt=90&o=6&pid=3.1&rm=2"
            }
          />
        </div>
      </header>
      <form className="flex  flex-col  items-center mt-44 flex-grow w-4/5">
        <Image
          alt="img"
          width={300}
          height={100}
          src="https://www.freepnglogos.com/uploads/google-logo-png-hd-11.png"
        />
        <div className="flex w-full mt-5 hover:shadow-lg focus-within:shadow-lg max-w-md rounded-full border border-gray-200 px-5 py-3 items-center sm:max-w-xl lg:max-w-2xl">
          <MagnifyingGlassIcon className="h-5 mr-3 text-gray-500" />
          <input
            ref={searchInputRef}
            className="flex-grow focus outline-none  "
            type="text"
          />
          <MicrophoneIcon className="h-5" />
        </div>
        <div className="flex flex-col w-1/2 space-y-2 justify-center mt-8 sm:space-y-0 sm:flex-row sm:space-x-4">
          <button onClick={Search} className="btn">
            Google Search
          </button>
          <button onClick={Search} className="btn">
            I'm Feeling Lucky
          </button>
        </div>
      </form>
      <Footer />
    </div>
  );
};

export default Home;
