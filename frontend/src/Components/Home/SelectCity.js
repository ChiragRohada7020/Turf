import React from "react";
import Turf from "../Turf";
import { Outlet, Link } from "react-router-dom";

const Initial = () => {
  return (
    <div className=" bg-center  bg-no-repeat bg-[url('https://flowbite.s3.amazonaws.com/docs/jumbotron/conference.jpg')] bg-gray-700 bg-blend-multiply">
      <section class="justify-center pt-10 px-20 md:pt-32 md:pb-40 md:px-52  flex flex-col md:flex-row gap-10 ">
        <city class="max-w-sm bg-white border   border-black rounded-lg shadow dark:bg-black dark:border-gray-700">
          <a href="#">
            <img
              className="p-2 rounded-lg"
              src="https://i.pinimg.com/originals/af/23/dd/af23dd03798ec42de3e1c950d30b7c8d.png"
              alt=""
            />
          </a>
          <div class="p-2 text-center ">
            <a href="text-center    ">
              <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                Mumbai
              </h5>
            </a>
            <Link to="/city/Mumbai">
              <a
                href="#"
                class="inline-flex w-52 items-center px-3 py-2 text-lg font-medium justify-center text-white bg-blue-700 rounded-md hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                Book
              </a>
            </Link>
          </div>
        </city>
        <city class="max-w-sm bg-white border   border-white rounded-lg shadow dark:bg-black dark:border-gray-700">
          <a href="#">
            <img
              className="p-2 rounded-lg"
              src="https://i.pinimg.com/originals/af/23/dd/af23dd03798ec42de3e1c950d30b7c8d.png"
              alt=""
            />
          </a>
          <div class="p-2 text-center ">
            <a href="text-center    ">
              <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                Nagpur
              </h5>
            </a>
            <Link to="/city/Nagpur">
              <a
                href="#"
                class="inline-flex w-52 items-center px-3 py-2 text-lg font-medium justify-center text-white bg-blue-700 rounded-md hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                Book
              </a>
            </Link>
          </div>
        </city>
        <city class="max-w-sm bg-white border   border-white rounded-lg shadow dark:bg-black dark:border-gray-700">
          <a href="#">
            <img
              className="p-2 rounded-lg"
              src="https://i.pinimg.com/originals/af/23/dd/af23dd03798ec42de3e1c950d30b7c8d.png"
              alt=""
            />
          </a>
          <div class="p-2 text-center ">
            <a href="text-center    ">
              <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                Pachora
              </h5>
            </a>
            <Link to="/city/Mumbai">
              <a
                href="#"
                class="inline-flex w-52 items-center px-3 py-2 text-lg font-medium justify-center text-white bg-blue-700 rounded-md hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                Book
              </a>
            </Link>
          </div>
        </city>
      </section>
    </div>
  );
};

export default Initial;
