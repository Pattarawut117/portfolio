import React from "react";

export default function HomePage() {
  const cardContent = [
    {
      id: 1,
      title: "Game",
      price: 300,
    },
    {
      id: 2,
      title: "DLC1",
      price: 299,
    },
    {
      id: 3,
      title: "DLC2",
      price: 299,
    },
  ];

  return (
    <div className="bg-black text-white overflow-scroll">
      {/* Header */}
      <div className="flex justify-between px-2 py-4 border items-center h-[15vh]">
        <div className="space-y-2 ">
          <h1 className="text-4xl font-bold">AtomDev</h1>
          <p className="text-lg">FullStack Delveloper</p>
        </div>
        <div className="flex gap-2">
          <button className="bg-[#D8263E] px-2 py-1 rounded-sm cursor-pointer hover:bg-red-800">
            Home
          </button>
          <button className="bg-[#D8263E] px-2 py-1 rounded-sm cursor-pointer hover:bg-red-800">
            About
          </button>
          <button className="bg-[#D8263E] px-2 py-1 rounded-sm cursor-pointer hover:bg-red-800">
            Guide
          </button>
        </div>
      </div>
      <div className="h-[85vh] grid grid-cols-2 border-b-2">
        <div className="place-self-center border ">Picture</div>
        <div className="place-self-center">
          <div>
            <h2 className="text-xl font-bold">Recent Role</h2>
            <hr className="w-24" />
            <p>Lorem</p>
            <h2 className="text-xl font-bold mt-4">My Skills</h2>
            <hr className="w-36" />
            <div className="space-x-1.5 mt-2">
              <button className="bg-gray-100 text-black px-1 rounded-md hover:bg-gray-300">
                HTML
              </button>
              <button className="bg-gray-100 text-black px-1 rounded-md hover:bg-gray-300">
                CSS
              </button>
              <button className="bg-gray-100 text-black px-1 rounded-md hover:bg-gray-300">
                Javascript
              </button>
              <button className="bg-gray-100 text-black px-1 rounded-md hover:bg-gray-300">
                React.js
              </button>
              <button className="bg-gray-100 text-black px-1 rounded-md hover:bg-gray-300o">
                Node.js
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="h-screen grid grid-cols-2 border-b-2">
        <div className="place-self-center"></div>
        <div className="place-self-center">
          <h1 className="text-center text-5xl font-extrabold">
            RISK EVERYTHING AS HUNT CONSUMES YOU
          </h1>
          <hr className="mt-4 w-3xs text-red-700 " />
          <p className="text-center mt-4 text-sm font-bold text-gray-400">
            Hunt: Showdown 1896 is a competitive first-person PvP bounty hunting
            game with heavy PvE elements, from the makers of Crysis. Set in the
            darkest corners of the world, it packs the thrill of survival games
            into match-based format.
          </p>
        </div>
      </div>
      <div className="h-screen border-b">
        <div className="grid grid-cols-3 h-full">
          {cardContent.map((item) => {
            return (
              <div
                key={item.id}
                className="place-self-center border flex flex-col"
              >
                <div className="w-[241px] h-[297px]">
                  <img src="#" alt="pic1"></img>
                </div>
                <div className="w-[241px] h-[195px] flex flex-col justify-between items-center pb-6 bg-white">
                  <h1 className="text-4xl text-black font-extrabold">
                    - {item.title} -
                  </h1>
                  <h1 className="text-4xl text-black font-extrabold">
                    {item.price} $
                  </h1>
                  <button className="bg-[#D8263E] w- px-2 py-1 hover:bg-red-800">
                    BUY NOW
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <div className="h-screen">
        <div>Footer</div>
      </div>
    </div>
  );
}
