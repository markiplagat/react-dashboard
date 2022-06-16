import React from "react";
import { Button } from "../components";
import { earningData } from "../data/dummy";

const Ecommerce = () => {
  return (
    <div className="mt-12">
      <div className="flex flex-wrap lg:flex-nowrap justify-center">
        <div
          className="bg-white dark:text-gray-200 dark:bg-secondary-dark-bg h-44 rounded-xl
         w-full lg:w-800 p-8 pt-9 m-3 bg-hero-pattern bg-no-repeat bg-cover bg-center"
        >
          <div className="flex justify-between items-center">
            <div>
              <p className="font-bold text-gray-400">Earnings</p>
              <p className="text-2xl">KSH 45,849.99</p>
            </div>
          </div>
          <div className="mt-6">
            <Button
              color="white"
              bgColor="blue"
              text="Download"
              borderRadius="10px"
            />
          </div>
        </div>
        <div className="flex m-3 flex-wrap justify-center gap-1 items-center">
          {earningData.map((earning) => (
            <div
              key={earning.title}
              className="bg-white dark:text-gray-200 dark:bg-secondary-dark-bg md:w-56 p-4 pt-9 rounded-2xl"
            >
              <button
                type="button"
                style={{
                  color: earning.iconColor,
                  backgroundColor: earning.iconBg,
                }}
                className="text-2xl opacity-0.9 rounded-full p-4 hover:drop-shadow-xl"
              >
                {earning.icon}
              </button>
              <p className="mt-3">
                <span className="text-lg font-semibold">{earning.amount}</span>
                <span className={`text-sm text-${earning.pcColor} ml-2`}>
                  {earning.percentage}
                </span>
              </p>
              <p className="text-sm text-gray-400 mt-1">{earning.title}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Ecommerce;
