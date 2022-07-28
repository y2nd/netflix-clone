import { getProducts, Product } from "@stripe/firestore-stripe-payments";
import { GetStaticProps } from "next";
import Head from "next/head";
import Link from "next/link";
import useAuth from "../hooks/useAuth";
import useSubscription from "../hooks/useSubscription";
import payments from "../lib/stripe";

interface Props {
    products: Product[]
}

const account = ({ products }: Props) => {
  
  const { user, logout } = useAuth();
  const subscription = useSubscription(user);

  const array = products.filter( (product) => product.id === subscription?.product);
  console.log(array[0]?.name);

  return (
    <div>
      <Head>
        <title>Account Settings - Netflix clone</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header className="bg-[#141414]">
        <Link href={"/"}>
          <img
            src={"/Netflix_logo.svg"}
            alt="Netflix logo"
            width={120}
            height={120}
            className="cursor-pointer object-contain"
          />
        </Link>
      </header>

      <main className="pt-24 mx-auto max-w-6xl px-5 pb-12 transition-all">
        <div className="flex flex-col gap-x-4 md:flex-row md:items-center">
          <h1 className="text-xl md:text-4xl">Account</h1>
          <div className="-ml-0.5 flex items-center gap-x-1.5">
            <img
              src={"/member-since.svg"}
              alt="member since icon"
              className="h-7 w-7"
            />
            <p className="text-xs font-semibold text-[#555]">
              Member since {subscription?.created}
            </p>
          </div>
        </div>

        {/* <Membership /> */}

        <div className="account-grid">
          <h4>Plan Details</h4>
          {/* Find the current plan */}
          <div className="col-span-2">
            {
                products.filter( (product) => product.id === subscription?.product)[0]?.name
            }
          </div>
          <p className="cursor-pointer text-blue-500 hover:underline md:text-right">Change plan</p>
        </div>

        <div className="account-grid">
            <h4 className="text-lg text-[gray]">Settings</h4>
            <p className="col-span-3 cursor-pointer text-blue-500 hover:underline" onClick={logout}>Sign out of all devices</p>
        </div>
      </main>
    </div>
  );
};

export default account;

export const getStaticProps: GetStaticProps = async () => {
  const products = await getProducts(payments, {
    includePrices: true,
    activeOnly: true,
  })
    .then((res) => res)
    .catch((error) => console.log(error.message));

  return {
    props: {
      products,
    },
  };
};
