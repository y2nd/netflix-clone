import Head from "next/head";
import Image from "next/image";


const login = () => {
  return (
    <div className="relative flex h-screen w-screen flex-col bg-black md:items-center md:justify-center md:bg-transparent">
      <Head>
        <title>Netflix - login</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Image src={"/cover_image.jpg"} layout="fill" objectFit="cover" className="-z-10 !hidden opacity-60 sm:!inline"/>

      <img src={"/mobile_image.svg"} alt="Netflix logo" height={150} width={150} className="absolute left-4 top-4 cursor-pointer object-contain md:left-10 md:top-6" />
    </div>
  );
};

export default login;
