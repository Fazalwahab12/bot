"use client";
import React from "react";
import Image from "next/image";
import One from "@/public/images/01.png";
import Two from "@/public/images/02.png";
import Three from "@/public/images/03.png";

const StartLearning = () => {
  return (
    <div className="flex flex-col justify-center items-center space-y-16 bg-white pt-40 pb-20 xl:px-40">
      <div className="text-center w-full sm:text-2xl font-bold lg:text-4xl md:font-semibold leading-normal">
        Start <span className=" text-blue-600">Earning</span> Automated Passive
        <br /> Income in Just 3 Easy Steps
      </div>
      <div className="text-center font-normal text-sm leading-6 tracking-wide">
        <span className="font-semibold text-blue-600">
          In under 10 minutes,
        </span>{" "}
        with just
        <span className="font-semibold text-blue-600">3 simple steps,</span>
        <br /> you well have your bots set up and ready to go.
      </div>

      <div>
        <BottomGrid />
      </div>
      <div className="flex justify-center items-center">
        <button className="text-white leading-6 font-basex  bg-blue-600 text-sm tracking-wide px-14 py-3 rounded-full shadow-2xl shadow-hcolor">
          Learn more
        </button>
      </div>
    </div>
  );
};

export default StartLearning;

const BottomGrid = () => {
  return (
    <div className="w-full">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        <div className="flex flex-col gap-y-4 items-center text-center shadow-xl shadow-[#EDF1F9] py-10 px-5 rounded-3xl bg-white">
          <Image src={One} alt="One" width={50} height={50} />
          <h3 className="font-semibold">Get Started</h3>
          <p className="text-gray-500 font-normal text-sm leading-6 tracking-wide">
            Create your account and
            <br /> set up your bots.
          </p>
        </div>
        <div className="flex flex-col gap-y-4 items-center text-center shadow-xl shadow-[#EDF1F9] py-10 px-5 rounded-3xl bg-white">
          <Image src={Two} alt="Two" width={50} height={50} />
          <h3 className="font-semibold">Configure Your Bots</h3>
          <p className="text-gray-500 font-normal text-sm leading-6 tracking-wide">
            Set up your bots with our proven strategies or customize them with
            your own.
          </p>
        </div>
        <div className="flex flex-col gap-y-4 items-center text-center shadow-xl row-span-1 md:col-span-2 lg:col-span-1 shadow-[#EDF1F9] py-10 px-5 rounded-3xl bg-white">
          <Image src={Three} alt="Three" width={50} height={50} />
          <h3 className="font-semibold">Deploy Your Bots</h3>
          <p className="text-gray-500 font-normal text-sm leading-6 tracking-wide">
            After deployment, your bots will trade around the clock using your
            chosen settings.
            <br /> Now, sit back and let your{" "}
            <span className=" text-blue-600">AI-powered</span> bots handle the
            trading for you.
          </p>
        </div>
      </div>
    </div>
  );
};
