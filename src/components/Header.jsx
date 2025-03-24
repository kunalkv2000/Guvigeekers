import React from "react";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <nav class="bg-white border-gray-200 py-2.5">
      <div class="flex flex-wrap items-center justify-between max-w-screen-xl px-4 mx-auto">
        <a href="/Home" class="flex items-center">
          <img
            src="https://raw.githubusercontent.com/kunalkv2000/Guvigeekers/refs/heads/main/src/assets/logo.png"
            class="h-14 w-auto mr-3"
            alt="Landwind Logo"
          />
        </a>
        <div class="flex items-center lg:order-2">
          <div class="hidden mt-2 mr-4 sm:inline-block">
            <span></span>
          </div>
          <a
            href="/Movies"
            class="text-white bg-[#099f4e] hover:bg-[#01632f] focus:ring-4 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 sm:mr-2 lg:mr-0"
          >
            Download
          </a>
          <button
            data-collapse-toggle="mobile-menu-2"
            type="button"
            class="inline-flex items-center p-2 ml-1 text-sm text-gray-500 rounded-lg lg:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200"
            aria-controls="mobile-menu-2"
            aria-expanded="true"
          >
            <span class="sr-only">Open main menu</span>
            <svg
              class="w-6 h-6"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                clip-rule="evenodd"
              ></path>
            </svg>
            <svg
              class="hidden w-6 h-6"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                clip-rule="evenodd"
              ></path>
            </svg>
          </button>
        </div>
        <div
          class="items-center justify-between w-full lg:flex lg:w-auto lg:order-1"
          id="mobile-menu-2"
        >
          <ul class="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
            <li>
              <Link to="/Home">
                <a
                  href=""
                  class="block py-2 pl-3 pr-4 text-black lg:p-0 border-b-white hover:border-b-[#099f4e] border-b-2 "
                  aria-current="page"
                >
                  Home
                </a>
              </Link>
            </li>
            <li>
              <Link to="/Movies">
                <a
                  href="#"
                  class="block py-2 pl-3 pr-4 text-black border-gray-100 hover:bg-gray-50 lg:p-0  border-b-white hover:border-b-[#099f4e] border-b-2"
                >
                  Movies
                </a>
              </Link>
            </li>
            <li>
              <Link to="/Favs">
                <a
                  href="#"
                  class="block py-2 pl-3 pr-4 text-black border-gray-100 hover:bg-gray-50 lg:p-0 border-b-white hover:border-b-[#099f4e] border-b-2"
                >
                  Favourites
                </a>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
