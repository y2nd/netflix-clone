import Head from "next/head";
import Image from "next/image";

const login = () => {
  return (
    <div className="relative flex h-screen w-screen flex-col bg-black md:items-center md:justify-center md:bg-transparent">
      <Head>
        <title>Netflix - login</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Image
        src={"/cover_image.jpg"}
        layout="fill"
        objectFit="cover"
        className="-z-10 !hidden opacity-60 sm:!inline"
      />

      <img
        src={"/mobile_image.svg"}
        alt="Netflix logo"
        height={150}
        width={150}
        className="absolute left-4 top-4 cursor-pointer object-contain md:left-10 md:top-6"
      />

      <form
        action=""
        className="relative mt-24 space-y-8 rounded bg-black/75 py-10 px-6 md:mt-0 md:max-w-md md:px-14"
      >
        <h1 className="text-4xl font-semibold">Sign In</h1>
        <div className="space-y-4">
          <label className="inline-block w-full">
            <input type="email" placeholder="Email..." className="input" />
          </label>
          <label className="inline-block w-full">
            <input
              type="password"
              placeholder="Password..."
              className="input"
            />
          </label>
        </div>

        <button className="w-full rounded bg-RED-PRIMARY py-3 font-semibold">
          Sign In
        </button>

        <div className="flex space-x-1 text-[gray]">
          <p>New to Netflix?</p>
          <button type="submit" className="text-white hover:underline">Sign Up now</button>
        </div>
      </form>
    </div>
  );
};

export default login;
