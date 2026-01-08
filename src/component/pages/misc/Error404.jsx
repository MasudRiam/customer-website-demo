import React from "react";
import errorImg from "@/assets/img/pages/errorImg.png";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Error404 = () => {
  return (
    <main>
      {/* <div className="pointer-events-none absolute -right-24 -top-24 h-80 w-80 rounded-full bg-white/35 blur-2xl" />
      <div className="pointer-events-none absolute -left-28 bottom-[-7rem] h-96 w-96 rounded-full bg-white/35 blur-2xl" /> */}

      <section className="relative mx-auto my-12 flex w-full max-w-3xl flex-col items-center text-center">
        <img
          src={errorImg}
          alt="404 illustration"
          className="mb-8 w-auto max-w-[520px] select-none"
          draggable={false}
        />

        <h1 className="mb-4 text-4xl font-medium tracking-wide text-slate-700 md:text-5xl">
          404 - Page Not Found!
        </h1>

        {/* <p className="mb-10 max-w-xl text-xs leading-6 text-slate-500 md:text-sm">
          paraphonic unassessable foramination Caulopteris worr al Spirophyton
          encrimson esparcet aggregate chondrule restate whistler shallopy
          biosystematy area bertram plotting unstarting quarterstaff.
        </p> */}

        <Button
          asChild
          className="h-11 mt-8 min-w-[170px] rounded-md bg-gradient-to-r from-lime-400 to-green-500 px-8 text-white shadow-md"
        >
          <Link to="/">Go Back Home</Link>
        </Button>
      </section>
    </main>
  );
};

export default Error404;
