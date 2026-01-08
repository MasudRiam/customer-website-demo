import React, { useState } from "react";
import sellsfieLogo from "../assets/logo/sellsfie-logo.png";
import { GoSearch } from "react-icons/go";
import { FiMenu, FiShoppingBag, FiUser } from "react-icons/fi";
import { IoMdClose } from "react-icons/io";
import bodymainImage from "../assets/img/coconut.jpg";
import cosmeticsProduct from "../assets/img/product/cosmetics.png";
import pizzaproduct from "../assets/img/product/pizza.png";
import plasticbottol from "../assets/img/product/plastic-bottol.jpg";
import flowerpot from "../assets/img/product/flower-pot.jpg";
import sllsfieShortLogo from "../assets/logo/sellfie-logo-80-80.png";

const HomePage = () => {
  const [open, setOpen] = useState(false);

  const categories = [
    "OFFER ZONE",
    "Best Seller",
    "Oil",
    "Ghee (ঘি)",
    "Dates (খেজুর)",
    "খেজুর গুড়",
    "Honey",
    "Masala",
    "Nuts & Seeds",
    "Tea/Coffee",
    "Honeycomb",
    "Organic Zone",
    "Pickle",
  ];

  const collections = [
    { title: "Organic Oil", img: cosmeticsProduct },
    { title: "HONEY (মধু)", img: plasticbottol },
    { title: "Ghee (ঘি)", img: pizzaproduct },
    { title: "Dates (খেজুর)", img: cosmeticsProduct },
    { title: "Tea/Snacks (চা-নাস্তা)", img: flowerpot },
    { title: "Tea/Snacks (চা-নাস্তা)", img: flowerpot },
  ];
  return (
    <>
      <header className="w-full border-b border-gray-200">
        <div className="flex items-center justify-between px-4 py-3 md:hidden">
          <FiMenu
            className="text-2xl text-fren cursor-pointer"
            onClick={() => setOpen(true)}
          />

          <div className="flex justify-center items-center gap-2">
            <img src={sellsfieLogo} alt="Logo" className="h-8" />
          </div>

          <div className="flex items-center gap-4">
            <GoSearch className="text-xl text-fren" />
            <div className="relative">
              <FiShoppingBag className="text-xl text-fren" />
              <span className="absolute -top-2 -right-2 bg-fren text-white text-xs rounded-full px-1">
                9
              </span>
            </div>
          </div>
        </div>

        <div
          className={`fixed inset-0 z-50 md:hidden transition-all duration-300 ${
            open ? "visible" : "invisible"
          }`}
        >
          <div
            className={`absolute inset-0 bg-black/40 transition-opacity duration-300 ${
              open ? "opacity-100" : "opacity-0"
            }`}
            onClick={() => setOpen(false)}
          />

          <div
            className={`absolute left-0 top-0 h-full w-64 bg-white p-5
              transform transition-transform duration-300 ease-in-out
              ${open ? "translate-x-0" : "-translate-x-full"}`}
          >
            <button
              className="text-fren mb-4 font-medium"
              onClick={() => setOpen(false)}
            >
              <IoMdClose size={19} />
            </button>

            <ul className="space-y-4 text-sm">
              {categories.map((item, index) => (
                <li
                  key={index}
                  className="cursor-pointer fren:hover"
                  onClick={() => setOpen(false)}
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="hidden md:flex items-center justify-between px-12 py-4">
          <GoSearch className="text-xl text-fren cursor-pointer" />
          <div className="flex items-center gap-2">
            <img src={sellsfieLogo} alt="Logo" className="h-10" />
          </div>

          <div className="flex items-center gap-6">
            <FiUser className="text-xl text-fren cursor-pointer" />
            <div className="relative">
              <FiShoppingBag className="text-xl text-fren cursor-pointer" />
              <span className="absolute -top-2 -right-2 bg-fren text-white text-xs rounded-full px-1">
                9
              </span>
            </div>
          </div>
        </div>

        <nav className="hidden md:block bg-gray-100">
          <ul className="flex flex-wrap justify-center gap-6 px-6 py-3 text-sm">
            {categories.map((item, index) => (
              <li
                key={index}
                className={`cursor-pointer bg-robinhood:hover ${
                  item === "খেজুর গুড়"
                    ? "border-b-2 text-robinhood font-medium"
                    : ""
                }`}
              >
                {item}
              </li>
            ))}
          </ul>
        </nav>
      </header>

      {/* banner image */}
      <div className="">
        <img src={bodymainImage} alt="Main Body" className="w-full h-auto" />
      </div>

      {/* body section  */}
      <div className="mx-auto max-w-[1280px] px-4 py-10">
        <h1 className="text-center text-3xl tracking-wide font-normal mb-7 uppercase">
          All Product
        </h1>

        <section className="mx-auto w-full max-w-[1280px] px-1 py-4 sm:px-3 sm:py-8">
          <div className="grid grid-cols-2  md:grid-cols-3 2xl:grid-cols-5 gap-5 items-stretch">
            <div className="border border-gray-300 bg-white p-4 text-center hover:shadow-md transition h-full min-h-[320px] sm:min-h-[380px] lg:min-h-[420px] flex flex-col">
              <img
                src={cosmeticsProduct}
                alt="Product"
                className="mx-auto h-37 sm:h-42 lg:h-55 object-contain"
              />
              <div className="mt-auto">
                <p className="mt-3 sm:mt-4 text-sm whitespace-normal break-words overflow-hidden leading-5 max-h-10">
                  দেশি সরিষার তেল cdfvgbhnjcfvgbhnmk,cdfvgbhnmk
                </p>
                <p className="mt-4 font-semibold">Tk 1,550.00</p>
                <button className="mt-4 w-full rounded bg-robinhood py-2 text-sm text-white">
                  Quick Add
                </button>
              </div>
            </div>

            <div className="border border-gray-300 bg-white p-4 text-center hover:shadow-md transition h-full min-h-[320px] sm:min-h-[380px] lg:min-h-[420px] flex flex-col">
              <img
                src={pizzaproduct}
                alt="Product"
                className="mx-auto h-37 sm:h-42 lg:h-55 object-contain"
              />
              <div className="mt-auto">
                <p className="mt-3 sm:mt-4 text-sm whitespace-normal break-words overflow-hidden leading-5 max-h-10">
                  Gawa Ghee / ঘি
                </p>
                <p className="mt-4 font-semibold">Tk 1,800.00</p>
                <button className="mt-4 w-full rounded bg-robinhood py-2 text-sm text-white">
                  Quick Add
                </button>
              </div>
            </div>

            <div className="border border-gray-300 bg-white p-4 text-center hover:shadow-md transition h-full min-h-[320px] sm:min-h-[380px] lg:min-h-[420px] flex flex-col relative">
              <span className="absolute top-3 left-3 rounded-full bg-green-100 px-3 py-1 text-xs text-green-700">
                ON SALE
              </span>
              <img
                src={cosmeticsProduct}
                alt="Product"
                className="mx-auto h-37 sm:h-42 lg:h-55 object-contain"
              />
              <div className="mt-auto">
                <p className="mt-3 sm:mt-4 text-sm whitespace-normal break-words overflow-hidden leading-5 max-h-10">
                  Natural Honeycomb 1kg
                </p>
                <p className="mt-4 font-semibold">
                  Tk 2,250.00{" "}
                  <span className="ml-2 text-sm text-gray-400 line-through">
                    Tk 2,500.00
                  </span>
                </p>
                <button className="mt-4 w-full rounded bg-robinhood py-2 text-sm text-white">
                  Quick Add
                </button>
              </div>
            </div>

            <div className="border border-gray-300 bg-white p-4 text-center hover:shadow-md transition h-full min-h-[320px] sm:min-h-[380px] lg:min-h-[420px] flex flex-col">
              <img
                src={pizzaproduct}
                alt="Product"
                className="mx-auto h-37 sm:h-42 lg:h-55 object-contain"
              />
              <div className="mt-auto">
                <p className="mt-3 sm:mt-4 text-sm whitespace-normal break-words overflow-hidden leading-5 max-h-10">
                  Honey Nuts
                </p>
                <p className="mt-4 font-semibold">Tk 1,500.00</p>
                <button className="mt-4 w-full rounded bg-robinhood py-2 text-sm text-white">
                  Quick Add
                </button>
              </div>
            </div>

            <div className="border border-gray-300 bg-white p-4 text-center hover:shadow-md transition h-full min-h-[320px] sm:min-h-[380px] lg:min-h-[420px] flex flex-col">
              <img
                src={plasticbottol}
                alt="Product"
                className="mx-auto h-37 sm:h-42 lg:h-55 object-contain"
              />
              <div className="mt-auto">
                <p className="mt-3 sm:mt-4 text-sm whitespace-normal break-words overflow-hidden leading-5 max-h-10">
                  Honey Nuts
                </p>
                <p className="mt-4 font-semibold">Tk 1,500.00</p>
                <button className="mt-4 w-full rounded bg-robinhood py-2 text-sm text-white">
                  Quick Add
                </button>
              </div>
            </div>

            <div className="border border-gray-300 bg-white p-4 text-center hover:shadow-md transition h-full min-h-[320px] sm:min-h-[380px] lg:min-h-[420px] flex flex-col">
              <img
                src={cosmeticsProduct}
                alt="Product"
                className="mx-auto h-37 sm:h-42 lg:h-55 object-contain"
              />
              <div className="mt-auto">
                <p className="mt-3 sm:mt-4 text-sm whitespace-normal break-words overflow-hidden leading-5 max-h-10">
                  Honey Nuts
                </p>
                <p className="mt-4 font-semibold">Tk 1,500.00</p>
                <button className="mt-4 w-full rounded bg-robinhood py-2 text-sm text-white">
                  Quick Add
                </button>
              </div>
            </div>

            <div className="border border-gray-300 bg-white p-4 text-center hover:shadow-md transition h-full min-h-[320px] sm:min-h-[380px] lg:min-h-[420px] flex flex-col">
              <img
                src={flowerpot}
                alt="Product"
                className="mx-auto h-37 sm:h-42 lg:h-55 object-contain"
              />
              <div className="mt-auto">
                <p className="mt-3 sm:mt-4 text-sm whitespace-normal break-words overflow-hidden leading-5 max-h-10">
                  Flower Pot
                </p>
                <p className="mt-4 font-semibold">Tk 190.00</p>
                <button className="mt-4 w-full rounded bg-robinhood py-2 text-sm text-white">
                  Quick Add
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* collection section  */}
        <section className="mx-auto max-w-[1280px]  pt-6 pb-16">
          <h2 className="text-center text-3xl tracking-wide font-normal mb-10 uppercase">
            Collection
          </h2>

          <div className="mx-auto max-w-[900px] grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-y-7 gap-x-2 justify-items-center">
            {collections.map((item, idx) => (
              <div key={idx} className="text-center">
                <div className="relative w-40 h-40 sm:w-36 sm:h-36 bg-white border border-green-200 flex items-center justify-center">
                  <img
                    src={sllsfieShortLogo}
                    alt="Sellfie Logo"
                    className="absolute top-2 left-2 w-3 h-3"
                  />

                  <img
                    src={item.img}
                    alt={item.title}
                    className="max-h-[70%] max-w-[70%] object-contain"
                  />
                </div>

                <p className="mt-4 text-base text-gray-700 whitespace-normal break-words">
                  {item.title}
                </p>
              </div>
            ))}
          </div>
        </section>
      </div>

      {/* footer section  */}
      <footer>
        <div className="mx-auto px-4 py-4 sm:py-3">
          <div className="grid grid-cols-1 gap-10 md:grid-cols-3">
            <div>
              <div className="flex items-center gap-3">
                <img src={sellsfieLogo} alt="Logo" className="h-10" />
              </div>

              <h3 className="mt-4 text-lg font-semibold text-gray-900">
                Sellsfie: Your Trusted Source for Shopping &amp; Healthy Living
              </h3>

              <p className="mt-3 text-sm leading-6 text-gray-600">
                Sellsfie is a leading e-commerce platform committed to
                delivering safe, healthy, and organic food products across
                Bangladesh. Renowned for its dedication to quality, Sellsfie
                offers a diverse range of health-focused items, including
                premium mustard oil, pure ghee, organic honey, dates, chia
                seeds, and an assortment of nuts.
              </p>

              <p className="mt-4 text-sm leading-6 text-gray-600">
                With a focus on convenience, Sellsfie operates primarily online,
                bringing the goodness of nature straight to your doorstep.
              </p>
            </div>

            <div className="md:justify-self-center">
              <h4 className="text-sm font-semibold tracking-wide text-robinhood uppercase">
                Company
              </h4>
              <ul className="mt-4 space-y-3 text-sm text-gray-700">
                <li>
                  <a href="/" className="text-black-cus hover:underline">About Us</a>
                </li>
                <li>
                  <a href="/" className="text-black-cus hover:underline">Return Policy</a>
                </li>
                <li>
                  <a href="/" className="text-black-cus hover:underline">Refund Policy</a>
                </li>
              </ul>
            </div>

            <div className="md:justify-self-end md:text-right">
              <h4 className="text-sm font-semibold tracking-wide text-robinhood uppercase">
                Quick Help
              </h4>
              <ul className="mt-4 space-y-3 text-sm text-gray-700">
                <li>
                  <a href="/" className="text-black-cus hover:underline">
                    গ্রাহক সেবা
                  </a>
                </li>
                <li>
                  <a href="/" className="text-black-cus hover:underline">
                    Contact
                  </a>
                </li>
              </ul>

              <p className="mt-6 text-sm font-semibold text-gray-900">
                DBID ID : <span className="font-bold">437361334</span>
              </p>
            </div>
          </div>
        </div>

        <div className="lg:align-middle">
          <div className="mx-auto px-4 py-4 text-left text-sm text-gray-500">
            COPYRIGHT &copy; 2026{" "}
            <a href="/" className="text-robinhood hover:underline font-semibold">
              Sellsfie
            </a>
            , All rights reserved
          </div>
        </div>
      </footer>
    </>
  );
};

export default HomePage;
