import Head from "next/head";
import Link from "next/link";
import useAuth from "../hooks/useAuth";
import useSubscription from "../hooks/useSubscription";

const account = () => {

    const {user} = useAuth();
    const subscription = useSubscription(user);

  return (
    <div>
        <Head>
            <title>Account Settings - Netflix clone</title>
            <link rel="icon" href="/favicon.ico" />
        </Head>

        <header className="bg-[#141414]">
            <Link href={'/'}>
                <img src={"/Netflix_logo.svg"} alt="Netflix logo" width={120} height={120} className="cursor-pointer object-contain" />
            </Link>
        </header>

        <main>
            <div className="pt-24">
                <h1 className="text-xl md:text-4xl">Account</h1>
                <div className="-ml-0.5 flex items-center gap-x-1.5">
                    <img src={"/member-since.svg"} alt="member since icon" className="h-7 w-7" />
                    <p className="text-xs font-semibold text-[#555]">Member since {subscription?.created}</p>
                </div>
            </div>

            {/* <Membership /> */}
        </main>
    </div>
  )
}

export default account;