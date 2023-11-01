"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";

export default function Home() {
  const [selectedButton, setSelectedButton] = useState("HOME");
  const buttonTitles = ["HOME", "ABOUT US", "PROGRAM", "CONTACT"];
  const [navbarVisible, setNavbarVisible] = useState(false);

  const handleButtonClick = (title) => {
    setSelectedButton(title);
    // You can also perform any other action you want when a button is clicked.
  };
  useEffect(() => {}, []);
  return (
    <>
      <nav className="flex flex-col border-b-rose-950 border-b-2 sm:w-full mx-auto bg-custom-lighter-brown sm:border-none sm:bg-inherit sm:flex-row justify-center align-middle items-center text-white py-3 px-4  max-w-screen-xl sm:px-8 font-avenir ">
        <div className="flex flex-row mx-auto w-full justify-between items-center sm:hidden">
          <a
            href="#"
            className="sm:hidden p-0 m-0  flex gap-x-2 items-center text-slate-800 font-avenir"
          >
            <Image
              src={"/mena-logo.png"}
              className=""
              width={35}
              height={35}
              alt="logo"
            ></Image>{" "}
            <span className="p-0 m-0"> Mena Inc</span>
          </a>
          <button
            onClick={() => setNavbarVisible(!navbarVisible)}
            className="block sm:hidden sm:text-black self-end"
          >
            {/* <i className="uil uil-bars"></i> */}
            <Image src={"/bars.svg"} width={20} height={20} alt="fd" />
          </button>
        </div>
        <div
          className={` flex sm:mx-auto flex-col w-full sm:w-fit  sm:bg-inherit bg-custom-dark-brown sm:block sm:flex-row  justify-center items-center text-white pt-3 px-4  max-w-screen-xl sm:px-8 font-avenir ${
            navbarVisible ? "block" : "hidden "
          }`}
        >
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
              <a href={`${title === "CONTACT" ? "#social_media_links" : "#"}`}>
                {title}
              </a>
            </button>
          ))}
        </div>
      </nav>
      <div className="line left-line left-line-3"></div>
      <div className="line left-line left-line-4"></div>
      <div className="line right-line right-line-1"></div>
      {/* <nav className="flex flex-col w-full bg-custom-dark-brown items-center text-white pt-3 px-4  max-w-screen-xl sm:px-8 font-avenir ">
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
      </nav> */}
      <main className="container mx-auto overflow-x-clip py-5">
        {" "}
        <div className="w-full md:w-5/6 my-10 mx-auto text-white  bg-cover bg-[url('/first/landing_photo.png')] rounded-3xl ">
          <div className="flex flex-col justify-evenly items-center w-full backdrop-brightness-50 rounded-3xl border-solid border-8 border-custom-lighter-brown">
            <Image src={"/mena_logo_white.png"} width={200} height={10}></Image>
            <h1 className="font-extrabold text-3xl md:text-9xl font-avenir">
              WEDDING
            </h1>
            <h2 className="font-greatVibes text-3xl md:text-9xl text-custom-lighter-brown xl:-translate-y-20 xl:-translate-x-5">
              Invitations
            </h2>
            <h4 className="text-xl">Beautiful Wedding Cards and more</h4>
            <button className="py-2 px-3 md:py-2 md:px-5 my-3 text-lg bg-custom-dark-brown font-avenir">
              READ MORE
            </button>
            <img
              src={"/first/flowers_left.png"}
              className="w-20 lg:w-56 absolute bottom-1 right-0 transform translate-x-[45%] translate-y-[20%]"
              height={100}
            ></img>
            <img
              src={"/first/flowers_right.png"}
              className="w-20 lg:w-56 absolute bottom-0 left-0 transform translate-x-[-45%] translate-y-[20%]"
            ></img>
          </div>
        </div>
      </main>
      <div className="w-full overflow-clip">
        <div className=" w-72 border-solid border-t-4  h-5 border-custom-dark-brown transform translate-x-[40%] ">
          &nbsp;
        </div>
        <div className=" w-3/4 border-solid border-b-4  h-1 border-custom-dark-brown transform -translate-x-[40%] ">
          &nbsp;
        </div>
        <div className=" px-4 border-solid border-b-4 border-custom-dark-brown transform translate-x-[40%] ">
          &nbsp;
        </div>
      </div>

      <main className="container mx-auto overflow-clip">
        <div className="w-full lg:my-20 md:w-5/6 my-10 mx-auto flex flex-col lg:flex-row items-center md:px-0 lg:flex justify-center ">
          <div className="w-full p-0 m-0 md:w-5/6 my-10 mx-auto text-white   rounded-3xl ">
            <div className="flex flex-col justify-evenly md:h-4/5 items-center lg:w-5/6  backdrop-brightness-50 rounded-3xl border-solid border-8 border-custom-lighter-brown">
              {/* <h2 className="m-32 lg:m-64 font-greatVibes text-3xl md:text-9xl text-custom-lighter-brown xl:-translate-y-20 xl:-translate-x-5">
                    &nbsp;
                  </h2> */}
              <img
                className="w-full h-full  rounded-2xl brightness-50"
                src={"/first/landing_photo.png"}
                alt="pretty"
                height={500}
              ></img>
              <img
                src={"/first/flowers_left.png"}
                className="w-20 lg:w-56 absolute top-0 right-0 transform translate-x-[45%] translate-y-[-30%]"
                alt="flower"
              ></img>
              <img
                src={"/first/flowers_right.png"}
                className="w-20 lg:w-56 absolute bottom-0 left-0 transform translate-x-[-45%] translate-y-[20%]"
                alt="flower"
              ></img>
            </div>
          </div>
          <div className="text-left md:w-2/5 max-w-xl px-4 space-y-3 mt-6 sm:px-0 md:mt-0 lg:max-w-2xl md:text-right">
            <h1 className="font-extrabold text-xl  xl:text-7xl font-avenir">
              PLAN YOUR WEDDING
            </h1>
            <h2 className="text-5xl font-extrabold font-greatVibes md:text-7xl text-custom-lighter-brown lg:-translate-y-10 lg:-translate-x-20">
              Invitations
            </h2>
            <p className="mt-3 text-gray-600">
              At Mena Inc, we understand that your wedding day is a momentous
              occasion that you have been dreaming about for a long time. The
              planning process can be both exciting and overwhelming, but our
              mission is to help you make your dreams a reality. We believe that
              the key to a memorable wedding lies in the details, and one of
              those crucial details is the wedding invitation.
            </p>
          </div>
        </div>
      </main>
      <div className="w-full overflow-clip">
        <div className=" w-4/5  border-solid border-t-4  h-5 border-custom-dark-brown transform translate-x-[70%] ">
          &nbsp;
        </div>
        <div className=" w-2/4 border-solid border-b-4  h-1 border-custom-dark-brown transform translate-x-[40%] ">
          &nbsp;
        </div>
        <div className="w-4/5 px-4 border-solid border-b-4 border-custom-dark-brown transform translate-x-[90%] ">
          &nbsp;
        </div>
      </div>
      <main className="container mx-auto overflow-clip">
        <div className="w-5/6 px-10 my-7 mx-auto text-white flex items-center   md:px-24 md:py-10">
          <div className="bg-custom-dark-brown max-w-fit mr-5">
            <Image src={"/mena_logo_white.png"} width={135} height={10}></Image>
          </div>
          <p className="font-avenir text-custom-dark-brown text-2xl">
            Most Popular
          </p>
        </div>
        <div className="w-full md:w-5/6  mb-36 mx-auto text-white  bg-cover bg-[url('/first/landing_photo.png')] rounded-3xl  ">
          <div className="flex flex-col justify-evenly items-center w-full py-24 backdrop-brightness-50 rounded-3xl border-solid border-8 border-custom-lighter-brown">
            <h1 className="text-center text-2xl font-extrabold lg:text-5xl font-avenir">
              WHERE LUXURY MEETS TRADITION
            </h1>
            <h2 className="text-center text-3xl font-greatVibes md:text-5xl text-custom-lighter-brown  -translate-x-5">
              Let us handle the Invitations
            </h2>

            <img
              src={"/first/flowers_left.png"}
              className="w-20 lg:w-56 absolute bottom-0 right-0 transform translate-x-[45%] translate-y-[20%]"
            ></img>
            <img
              src={"/first/flowers_right.png"}
              className="w-20 lg:w-56 absolute bottom-0 left-0 transform translate-x-[-45%] md:translate-y-[20%]"
            ></img>
          </div>
        </div>
        <div className="w-5/6 my-10 mx-auto text-center md:px-28">
          <p>
            Explore our gallery of enchanting past creations and find
            inspiration for your dream wedding. Visit our preferred social media
            platforms to see more love stories come to life at the touch of a
            button!{" "}
          </p>
        </div>
        {/* Footer starts here 🐾 */}
        <div
          id="social_media_links"
          className="border-custom-dark-brown border-solid w-2/6 border-t-4 pt-8 mt-24  my-10 mx-auto text-white flex justify-center"
        >
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
      </main>
    </>
  );
}
