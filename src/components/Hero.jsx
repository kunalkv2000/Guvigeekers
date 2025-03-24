import React from "react";
import dash from "../assets/hero.png";
import { Link } from "react-router-dom";

export default function Hero() {
  return (
    <section class="pt-8 lg:pt-32 bg-gradient-to-b from-white to-[#099f4e] bg-center bg-cover">
      <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative text-center">
        <div class="border border-[#099f4e] p-1 w-60 mx-auto rounded-full flex items-center justify-between mb-4">
          <span class="font-inter text-xs font-medium text-gray-900 ml-3">
            India's #1 Ticket Selling Brand.
          </span>
          <a
            href=""
            class="w-8 h-8 rounded-full flex justify-center items-center bg-[#099f4e]"
          >
            <svg
              width="17"
              height="16"
              viewBox="0 0 17 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M2.83398 8.00019L12.9081 8.00019M9.75991 11.778L13.0925 8.44541C13.3023 8.23553 13.4073 8.13059 13.4073 8.00019C13.4073 7.86979 13.3023 7.76485 13.0925 7.55497L9.75991 4.22241"
                stroke="white"
                stroke-width="1.6"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </a>
        </div>
        <h1 class="max-w-2xl mx-auto text-center font-manrope font-bold text-4xl text-gray-900 mb-5 md:text-5xl leading-[50px]">
          Spend your Weekends with your
          <span class="text-[#099f4e]"> family</span>
        </h1>
        <p class="max-w-sm mx-auto text-center text-base font-semibold leading-7 text-black mb-9">
          Book for 3 get 1 free. Get 15% OFF on every booking using our app.
        </p>

        <Link to="/Movies">
          <a
            href="javascript:;"
            class="w-full md:w-auto mb-14 inline-flex items-center justify-center py-3 px-7 text-base font-semibold text-center text-white rounded-full bg-[#099f4e] shadow-xs hover:bg-[#057538] transition-all duration-500"
          >
            Explore Now
            <svg
              class="ml-2 text-white"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="none"
              viewBox="0 0 24 24"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="m8 7 4 4 4-4m-8 6 4 4 4-4"
              />
            </svg>
          </a>
        </Link>
        <div class="flex justify-center">
          <img src={dash} alt="Dashboard image" />
        </div>
      </div>
    </section>
  );
}
