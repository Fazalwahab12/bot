import React from "react";
import Image from "next/image";
import bg from "@/public/images/2.jpg";
import g1 from "@/public/images/g1.png";
import g2 from "@/public/images/g2.png";
import g3 from "@/public/images/g3.png";
import g4 from "@/public/images/g4.png";

const list = [
  {
    icon: g1,
    title: "Trade Around the Clock",
    text: "EazyBot trades 24/7 on your behalf, constantly scanning the market for new opportunities.",
  },
  {
    icon: g2,
    title: "Quickly Open & Close Trades",
    text: "When your trade hits a winning position, EazyBot closes it instantly and opens a new trade at the next opportunity!",
  },
  {
    icon: g3,
    title: "Save Valuable Time",
    text: "For seasoned traders, EazyBot automates your trade entries and exits, freeing you from spending hours on signals and timing.",
  },
  {
    icon: g4,
    title: "Improve Results Over Time",
    text: "EazyBot continuously learns and evolves, getting smarter with every trade. The smarter your bot, the better your results!",
  },
];

const AutomatedTrading = () => {
  return (
    <div
      id="main"
      className="flex flex-col justify-center items-center bg-cover bg-center py-20 relative"
      style={{ backgroundImage: `url(${bg.src})` }}
    >
      <div
        id="second_main"
        className="flex flex-col justify-center items-center space-y-8 px-4 lg:px-20"
      >
        <div className="flex flex-col justify-center items-center space-y-10 mt-20">
          <div className="text-center text-4xl leading-normal">
            Tap into the Power of {""}
            <span className="font-semibold text-blue-600">
              Automated
              <br /> Crypto Trading
            </span>
          </div>
          <div className="text-center tracking-wide leading-6 font-light text-sm">
            EazyBot simplifies crypto trading, delivering consistent results
            <br />
            with its {""}
            <span className="font-semibold text-blue-600">
              pre-programmed, tested strategies {""}
            </span>
            and intelligent AI that handles all your trades.
            <br /> And there is even more.
          </div>

          <div className="text-center tracking-wide leading-6 font-semibold text-md">
            EazyBot offers many more amazing benefits just for you...
          </div>
        </div>

        <div
          id="grid"
          className="grid grid-cols-1 md:grid-cols-2 gap-8 px-4 lg:px-0 mx-auto max-w-7xl"
        >
          {list.map((value, iteration) => (
            <div
              key={iteration}
              className="flex flex-col items-center md:items-start justify-center space-y-4 py-4 px-4"
            >
              <Image src={value.icon} alt="icon" width={50} height={50} />
              <div className="text-lg font-semibold">{value.title}</div>
              <div className="text-center md:text-start tracking-wide leading-6 font-light text-sm">
                {value.text}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AutomatedTrading;
