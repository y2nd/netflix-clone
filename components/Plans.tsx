import { CheckIcon } from "@heroicons/react/solid";
import Table from "../components/Table";
import { Product } from "@stripe/firestore-stripe-payments";
import Head from "next/head";
import Link from "next/link";
import React, { useState } from "react";
import useAuth from "../hooks/useAuth";

interface Props {
  products: Product[];
}

const Plans = ({ products }: Props) => {
  const { logout } = useAuth();
  const [selectedPlan, setSelectedPlan] = useState<Product | null>(products[2]);

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

      <main className="mx-auto max-w-5xl px-5 pt-28 pb-12 transition-all md:px-10">
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
            {products.map( (product) => (
              <div
              className={`plan-box cursor-pointer ${
                selectedPlan?.id === product.id ? 'opacity-100' : 'opacity-60'
              }`}
              key={product.id}
              onClick={() => setSelectedPlan(product)}
              
            >
              {product.name}
            </div>
            ))}
          </div>

          <Table products={products} selectedPlan={selectedPlan} />
          <button>Susbcribe</button>
        </div>
      </main>
    </div>
  );
};

export default Plans;
