import React, { useState, useEffect } from "react";
import axios from "axios";
import ImageComp from "./Image";
import { toast } from "react-toastify";

const Home = () => {
  const [loading, setLoading] = useState(false);
  const [email, setEmail] = useState("");

  const handleNotify = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      const response = await axios.post(
        "https://koi-api-production.up.railway.app/api/v1/public/submit",
        {
          email,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      toast.success(response.data?.message);
      setEmail("");
      setLoading(false);
    } catch (error) {
      toast.error(error?.response?.data?.message);
      setLoading(false);
    }
  };

  const calculateTimeLeft = () => {
    const difference = +new Date("2024-9-05") - +new Date();
    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }

    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearTimeout(timer);
  });

  const timerComponents = [];

  Object.keys(timeLeft).forEach((interval) => {
    if (!timeLeft[interval]) {
      return;
    }

    timerComponents.push(
      <span key={interval} className="text-5xl sm:text-6xl font-bold mx-2">
        {timeLeft[interval]}{" "}
        <span className="text-lg sm:text-2xl">{interval.toUpperCase()}</span>
      </span>
    );
  });

  const media = [
    {
      image: "/images/linkedin.svg",
      path: "https://www.linkedin.com/in/ko-inflation-8563b1268/",
      alt: "linkedin logo",
    },
    {
      image: "/images/youtube.svg",
      path: "https://www.youtube.com/@MissKOI-VirtualIP",
      alt: "youtube logo",
    },
    {
      image: "/images/instagram.svg",
      path: " https://www.instagram.com/nft_mskoi/",
      alt: "instagram logo",
    },
    {
      image: "/images/facebook.svg",
      path: "https://www.facebook.com/people/KOI-Mobilize/100090738491053/",
      alt: "facebook logo",
    },
    {
      image: "/images/telegram.svg",
      path: "https://t.me/MSKOIWEB3",
      alt: "telegram logo",
    },
    {
      image: "/images/twitter.svg",
      path: "https://twitter.com/koi_inflation",
      alt: "twitter logo",
    },
  ];

  return (
    <section className="w-full bg-home-bg h-screen bg-cover bg-no-repeat flex flex-col justify-between items-center">
      <header className="flex w-full flex-col sm:flex-row justify-between  items-center px-2 pt-6 pb-2 md:px-[104px]">
        <ImageComp
          image="/images/logo.svg"
          alt="KOI MOBILIZE"
          className="h-16"
          width={90}
          height={78}
        />
        <div className="flex space-x-4">
          {media.map((item, index) => (
            <a
              href={item?.path}
              className="text-white bg-[#FFFFFF33] rounded-[5px] p-2 cursor-pointer"
              key={index}
              target="_blank"
              rel="noopener noreferrer"
            >
              <ImageComp image={item?.image} alt={item?.alt} />
            </a>
          ))}
        </div>
      </header>

      <div className="flex flex-col justify-center items-center text-center text-white space-y-8 md:space-y-[100px]">
        <div className="">
          <h1 className="text-3xl sm:text-app-5xl font-bold font-molde-700 text-transparent bg-clip-text bg-gradient-to-r from-[#A759FF] via-[#F05615] to-[#FFA515] mb-0 pb-0">
            COMING SOON
          </h1>
          <p className="text-base sm:text-2xl text-gray-300 custom-outline-text font-molde-400">
            Get Ready For Something Big!
          </p>
        </div>

        <div className="flex  space-x-1 sm:space-x-4 items-center">
          {Object.keys(timeLeft).map((interval, index) => (
            <React.Fragment key={index}>
              <div className="text-center">
                <span className="text-[10px] sm:text-2xl font-molde-400 custom-outline-text">
                  {interval.toUpperCase()}
                </span>
                <span className="block text-2xl sm:text-app-10xl font-bold">
                  {timeLeft[interval] || "00"}
                </span>
              </div>
              {index < Object.keys(timeLeft).length - 1 && (
                <span className="text-2xl sm:text-app-10xl font-bold">:</span>
              )}
            </React.Fragment>
          ))}
        </div>

        <form className="sm:max-w-[512px] w-full" onSubmit={handleNotify}>
          <p className="text-sm sm:text-base font-molde-400 mb-6 text-[#FFFFFFCC] custom-outline-text">
            *We promise not to spam your mail.
          </p>
          <div className="border border-white mb-2 p-1 rounded-[50px] flex justify-between items-center w-full">
            <input
              className="bg-transparent placeholder:text-white text-white font-molde-400 placeholder:text-app-sm p-2 sm:p-4 outline-none rounded-[5px] sm:w-full"
              placeholder="Enter Email Address"
              disabled={loading}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              type="email"
              required
            />
            <button
              className="hidden sm:block px-4 sm:px-[30.5px] py-2 sm:py-4 text-white bg-gradient-to-r from-[#A759FF] via-[#F05615] to-[#FFA515]  rounded-[50px] text-xs sm:text-app-sm shadow-lg hover:opacity-90 transition-opacity duration-300 text-nowrap font-molde-700 "
              disabled={loading}
              type="submit"
            >
              {loading ? "Loading..." : "Notify Me"}
            </button>
          </div>
          <button
            className="sm:hidden px-4 sm:px-[30.5px] py-2 sm:py-4 text-white bg-gradient-to-r from-[#A759FF] via-[#F05615] to-[#FFA515]  rounded-[50px] text-xs sm:text-app-sm shadow-lg hover:opacity-90 transition-opacity duration-300 text-nowrap font-molde-700"
            disabled={loading}
            type="submit"
          >
            {loading ? "Loading..." : "Notify Me"}
          </button>
        </form>
      </div>

      <footer className="w-full text-center text-white mt-6 pb-4">
        <p className="text-app-sm">
          Copyright by <span className="font-medium">KOI MOBILIZE</span>
        </p>
      </footer>
    </section>
  );
};

export default Home;
