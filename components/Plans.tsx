import { CheckIcon } from "@heroicons/react/solid";
import Head from "next/head";
import Link from "next/link";
import React from "react";
import useAuth from "../hooks/useAuth";

const Plans = () => {
  const { logout } = useAuth();

  const iconStyles = "h-7 w-7 text-[#E50914]";
  const liStyles = "flex items-center gap-x-2 text-lg";

  return (
    <div>
      <Head>
        <title>Netflix clone </title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header className="border-b border-white/10 bg-[#141414]">
        <Link href={"/"}>
          <img
            src="/Netflix_logo.svg"
            alt="Netflix logo"
            width={150}
            height={90}
            className="cursor-pointer object-contain"
          />
        </Link>
        <button className="text-lg font-md hover:underline" onClick={logout}>
          Sign Out
        </button>
      </header>

      <main className="pt-28">
        <h1 className="mb-3 text-3xl font-medium">
          Choose the plan that's right for you
        </h1>
        <ul>
          <li className={liStyles}>
            <CheckIcon className={iconStyles} /> Watch all you want. Ad-free.
          </li>
          <li className={liStyles}>
            <CheckIcon className={iconStyles} /> Recommendations just for you.
          </li>
          <li className={liStyles}>
            <CheckIcon className={iconStyles} /> Change or cancel your plan
            anytime.
          </li>
        </ul>

        <div className="mt-4 flex flex-col space-y-4">
          <div className="flex w-full items-center justify-end self-end md:w-3/5">
            <div className="plan-box">standard</div>
            <div className="plan-box">standard</div>
            <div className="plan-box">standard</div>
          </div>

          {/* <Table /> */}
          <button>Susbcribe</button>
        </div>
      </main>
    </div>
  );
};

export default Plans;
