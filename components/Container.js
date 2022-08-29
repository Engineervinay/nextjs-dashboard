import React from "react";

export default function Container() {
  return (
    <div className="container-sm w-1/2 p-8 bg-white dark:bg-darkcontainer shadow-xl rounded-md">
      <div className="flex flex-row flex-wrap justify-items-center justify-center gap-8">
        <div className="container-sm dark:bg-darkhighlight px-6 w-52 py-5 shadow-md border border-fgcolor dark:border-none rounded-md">
          <div className="text-md dark:text-white">Total Income</div>
          <div className="font-bold text-lg text text-bgcolor">612.785</div>
        </div>
        <div className="container-sm dark:bg-darkhighlight  dark:text-white w-52 container-sm px-6 py-5 shadow-md dark:border-none border border-fgcolor rounded-md">
          <div className="text-md ">Residual Incomes</div>
          <div className=" font-bold text-lg text text-bgcolor">10.785</div>
        </div>
      </div>
      <button className="mx-2 mt-4 mb-0 bg-bgcolor w-full rounded-md text-white">
        Receive
      </button>
    </div>
  );
}
