import React from "react";
import Turf from "../Turf";
import { Outlet, Link } from "react-router-dom";

const Initial = () => {
  return (
    <div className="w-full h-full bg-black">
      <section class="bg-center  bg-no-repeat bg-[url('https://flowbite.s3.amazonaws.com/docs/jumbotron/conference.jpg')] bg-gray-700 bg-blend-multiply">
        <div class="px-4 mx-auto max-w-screen-xl text-center py-24 lg:py-56">
          <h1 class="mb-4 text-4xl font-extrabold tracking-tight leading-none text-white md:text-5xl lg:text-6xl">
            Book Your Own World
          </h1>
          <p class="mb-8 text-lg font-normal text-gray-300 lg:text-xl sm:px-16 lg:px-48">
            Turf Bookings Online is a web application that revolutionizes the
            way people book and manage turf fields for various sports
            activities. This platform provides a seamless and user-friendly
            experience for sports enthusiasts, enabling them to easily find and
            reserve turf fields for their games or practice sessions.
          </p>
          <div class="flex flex-col space-y-4 sm:flex-row sm:justify-center sm:space-y-0 sm:space-x-4">
            {" "}
            <Link to="/city">
              {" "}
              <a
                href="#"
                class="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-white rounded-lg bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-900"
              >
                Get started
                <svg
                  class="w-3.5 h-3.5 ml-2"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 14 10"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M1 5h12m0 0L9 1m4 4L9 9"
                  />
                </svg>
              </a>
            </Link>
            <a
              href="#"
              class="inline-flex justify-center hover:text-gray-900 items-center py-3 px-5 text-base font-medium text-center text-white rounded-lg border border-white hover:bg-gray-100 focus:ring-4 focus:ring-gray-400"
            >
              Learn more
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Initial;
