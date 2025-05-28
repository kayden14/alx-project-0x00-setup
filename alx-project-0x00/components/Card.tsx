import Image from "next/image";
import React from "react";
import Pill from "./Pill";

const Card: React.FC = () => {
  return (
    <div className="h-[422px] w-[378.56px] cursor-pointer hover:shadow-md hover:rounded-lg">
      <Image
        className="rounded-lg"
        src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80"
        width={379}
        height={299}
        alt="Beautiful house"
        priority
      />
      <div className="p-2 flex gap-2 mt-2">
        <Pill title="Top Villa" />
        <Pill title="Self CheckIn" />
        <Pill title="Free Reschedule" />
      </div>
      <div className="flex items-center justify-between mt-2">
        <div>
          <h3 className="font-semibold text-[22px]">Villa Arrecife Beach House</h3>
          <p className="font-medium text-[17px] text-[#929292]">Sideman, Bali, Indonesia</p>
        </div>
        {/* <div className="flex items-center">
          <Image
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/Plain_Yellow_Star.svg/1024px-Plain_Yellow_Star.svg.png"
            alt="Star rating"
            width={24}
            height={24}
          />
          <p className="font-medium text-[17px] ml-2">4.76</p>
        </div> */}
      </div>
      <div className="flex justify-between mt-4">
        <div className="grid grid-cols-3 border w-[156px] rounded-full px-2 py-1">
          {/* Replace this with actual SVG icons or text */}
          <p className="text-xs text-center col-span-3">4 beds • 2 baths • 4 guests</p>
        </div>
        <p className="text-[22px] font-semibold">
          $2,450<span className="text-[14px] text-[#787878]">/n</span>
        </p>
      </div>
    </div>
  );
};

export default Card;
