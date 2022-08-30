import React from "react";
import Image from "next/image";
import Bitcoin from "./images/bitcoin.png";
export default function ContainerReferal() {
  return (
    <div className="container-sm w-5/12 p-8 pb-0 pt-4 bg-white dark:bg-darkcontainer  shadow-xl rounded-md">
      <div className="flex dark:text-white flex-column flex-wrap  text-left  gap-5">
        <div className=" text-left  font-bold h-2 "> Referal System:</div>
        <div className="text-sm text-left">
          {" "}
          Earn 10% direct refferals and 5% for indirect referrals
        </div>
        <div className="w-64 m-auto h-auto  justify-center">
          <Image
            src={Bitcoin}
            alt="Picture of the author"
            layout="responsive"
            objectFit="cover"
            className="rounded-full"
          />
        </div>
      </div>
    </div>
  );
}
