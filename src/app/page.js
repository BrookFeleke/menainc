"use client";
import Image from "next/image";
import React, { useState } from "react";

export default function Home() {
  const [selectedButton, setSelectedButton] = useState("HOME");
  const buttonTitles = ["HOME", "ABOUT US", "PROGRAM", "CONTACT"];

  const handleButtonClick = (title) => {
    setSelectedButton(title);
    // You can also perform any other action you want when a button is clicked.
  };
  return (
    <main className="flex min-h-screen flex-col items-center  px-24 py-12">
      <nav className="items-center text-white pt-3 px-4  max-w-screen-xl sm:px-8 font-avenir ">
        {buttonTitles.map((title) => (
          <button
            key={title}
            className={` py-2 px-5 text-lg ${
              selectedButton === title
                ? "bg-black text-custom-dark-brown"
                : "bg-custom-dark-brown"
            }`}
            onClick={() => handleButtonClick(title)}
          >
            <a href="#">{title}</a>
          </button>
        ))}
      </nav>
      <div className="line left-line left-line-1"></div>
      <div className="line left-line left-line-2"></div>
      <div className="line right-line right-line-1"></div>
      {/* <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
        <p className="fixed left-0 top-0 flex w-full justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto  lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30">
          Get started by editing&nbsp;
          <code className="font-mono font-bold">src/app/page.js</code>
        </p>
        <div className="fixed bottom-0 left-0 flex h-48 w-full items-end justify-center bg-gradient-to-t from-white via-white dark:from-black dark:via-black lg:static lg:h-auto lg:w-auto lg:bg-none">
          <a
            className="pointer-events-none flex place-items-center gap-2 p-8 lg:pointer-events-auto lg:p-0"
            href="https://vercel.com?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            By{" "}
            <Image
              src="/vercel.svg"
              alt="Vercel Logo"
              className="dark:invert"
              width={100}
              height={24}
              priority
            />
          </a>
        </div>
      </div> */}
      <div className="w-5/6 my-10 mx-auto text-white  bg-cover bg-[url('/first/landing_photo.png')] rounded-3xl ">
        <div className="flex flex-col justify-evenly items-center w-full backdrop-brightness-50 rounded-3xl border-solid border-8 border-custom-lighter-brown">
          <Image src={"/mena_logo_white.png"} width={200} height={10}></Image>
          <h1 className="font-extrabold text-9xl font-avenir">WEDDING</h1>
          <h2 className="font-greatVibes text-9xl text-custom-lighter-brown -translate-y-20 -translate-x-5">
            Invitations
          </h2>
          <h4 className="text-xl">Beautiful Wedding Cards and more</h4>
          <button className="py-2 px-5 my-3 text-lg bg-custom-dark-brown font-avenir">
            READ MORE
          </button>
          <Image
            src={"/first/flowers_left.png"}
            className="absolute bottom-0 right-0 transform translate-x-[45%] translate-y-[20%]"
            width={300}
            height={200}
          ></Image>
          <Image
            src={"/first/flowers_right.png"}
            className="absolute bottom-0 left-0 transform translate-x-[-45%] translate-y-[20%]"
            width={300}
            height={200}
          ></Image>
        </div>
      </div>
      <div className="line left-line left-line-3"></div>
      <div className="line left-line left-line-4"></div>
      <div className="line right-line right-line-2"></div>
      <section className="py-14">
        <div className="mx-auto md:px-8">
          <div className="items-center gap-x-5 sm:px-4 md:px-0 lg:flex">
            <div className="flex-1 w-full h-full sm:hidden lg:block">
              <Image
                src={"/second/second_section_photo.png"}
                className="w-full md:max-w-lg sm:rounded-lg brightness-50"
                alt=""
                width={600}
                height={400}
              />
            </div>
            <div className="w-2/5 max-w-xl px-4 space-y-3 mt-6 sm:px-0 md:mt-0 lg:max-w-2xl text-right">
              <h1 className="font-extrabold text-7xl font-avenir">
                PLAN YOUR WEDDING
              </h1>
              <h2 className="font-greatVibes text-7xl text-custom-lighter-brown -translate-y-10 -translate-x-20">
                Invitations
              </h2>
              <p className="mt-3 text-gray-600">
                Duis aute irure dolor in reprehenderit in voluptate velit esse
                cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                cupidatat non proident, sunt in culpa qui officia deserunt
                mollit anim id est laborum, sed ut perspiciatis unde omnis iste
                natus error sit voluptatem accusantium doloremque laudantium
              </p>
            </div>
          </div>
        </div>
      </section>
      <div className="w-5/6 my-10 mx-auto text-white flex items-center">
        <div className="bg-custom-dark-brown max-w-fit mr-5">
          <Image src={"/mena_logo_white.png"} width={135} height={10}></Image>
        </div>
        <p className="font-avenir text-custom-dark-brown text-2xl">
          Most Popular
        </p>
      </div>
      <div className="w-5/6 my-10 mx-auto text-white  bg-cover bg-[url('/first/landing_photo.png')] rounded-3xl ">
        <div className="flex flex-col pt-36 pb-14 justify-evenly items-center w-full backdrop-brightness-50 rounded-3xl border-solid border-8 border-custom-lighter-brown">
          <h1 className="font-extrabold text-5xl font-avenir">
            WHERE LUXURY MEETS TRADITION
          </h1>
          <h2 className="font-greatVibes text-5xl text-custom-lighter-brown  -translate-x-5">
            Let us handle the Invitations
          </h2>

          <Image
            src={"/first/flowers_left.png"}
            className="absolute bottom-0 right-0 transform translate-x-[45%] translate-y-[20%]"
            width={300}
            height={200}
          ></Image>
          <Image
            src={"/first/flowers_right.png"}
            className="absolute bottom-0 left-0 transform translate-x-[-45%] translate-y-[20%]"
            width={300}
            height={200}
          ></Image>
        </div>
      </div>
      <div className="w-5/6 my-10 mx-auto text-center px-28">
        <p>
          Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
          dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
          proident, sunt in culpa qui officia deserunt mollit anim id est
          laborum,{" "}
        </p>
      </div>
      <div className="w-5/6 my-10 mx-auto text-white flex justify-center">
        <a
          href="https://www.facebook.com/profile.php?id=100072343419449&ref=xav_ig_profile_web"
          className="mx-2"
        >
          <Image
            width={35}
            height={35}
            src={"/third/facebook.png"}
            alt="Social Media 1"
          />
        </a>
        <a href="https://www.instagram.com/mena_inc" className="mx-2">
          <Image
            width={35}
            height={35}
            src={"/third/instagram.png"}
            alt="Social Media 2"
          />
        </a>
        <a href="https://t.me/mena_inc" className="mx-2">
          <Image
            width={35}
            height={35}
            src={"/telegram-black-icon.png"}
            alt="Social Media 3"
          />
        </a>
        <a href="https://www.tiktok.com/@mena_inc" className="mx-2">
          <Image
            width={30}
            height={30}
            src={"/tiktok-icon.png"}
            alt="Social Media 3"
          />
        </a>
      </div>
      {/* <div className="mb-32 grid text-center lg:max-w-5xl lg:w-full lg:mb-0 lg:grid-cols-4 lg:text-left">
        <a
          href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className={`mb-3 text-2xl font-semibold`}>
            Docs{" "}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
            Find in-depth information about Next.js features and API.
          </p>
        </a>

        <a
          href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800 hover:dark:bg-opacity-30"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className={`mb-3 text-2xl font-semibold`}>
            Learn{" "}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
            Learn about Next.js in an interactive course with&nbsp;quizzes!
          </p>
        </a>

        <a
          href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className={`mb-3 text-2xl font-semibold`}>
            Templates{" "}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
            Explore the Next.js 13 playground.
          </p>
        </a>

        <a
          href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className={`mb-3 text-2xl font-semibold`}>
            Deploy{" "}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
            Instantly deploy your Next.js site to a shareable URL with Vercel.
          </p>
        </a>
      </div> */}
    </main>
  );
}
