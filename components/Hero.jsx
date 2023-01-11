import React from "react";
import Head from "next/head";
import Image from "next/image";
const Hero = () => {
  return (
    <section>
      <Head>
        <title>Log in | Movies+</title>
      </Head>
      <div className="relative min-h-[calc(100vh-72px)]">
        <Image
          className="object-cover"
          src="/images/hero-background.jpg"
          fill
        />
      </div>
      <div className="flex justify-center items-center">
        <div className="absolute flex flex-col space-y-3 top-1/4 w-full justify-center items-center max-w-screen-sm mx-auto p-8 -m-16">
          <Image
            className="object-contain"
            src="/images/cta-logo-one.svg"
            width={600}
            height={150}
          />
          <button className="bg-blue-600 uppercase text-xl tracking-wide font-extrabold py-4 px-6 w-full rounded hover:bg-[#0485ee]">
            Get all there
          </button>
          <p className="text-xs text-center">
            {""}
            Get premier Access to Raya and the Last Dragon for an additional fee
            with a Movie+ subscription. As of 03/26/21, the price of Movies+ and
            The Movies Bundle will increase by $
          </p>
          <Image
            className="object-contain"
            src="/images/cta-logo-two.png"
            width="600"
            height="70"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
