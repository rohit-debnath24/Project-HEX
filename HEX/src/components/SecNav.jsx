import React from "react"

const SecNav = () => {
  return (
    <>
      <div className=" grid grid-cols-[20px_1fr_20px] gap-0   py-1">
        <div className=" min-h-7 mt-4 sm:bg-[#231b17]"></div>
        <div className=" min-h-7  border-2    mt-4 py-1 flex justify-center sm:text-[10px] md:text-[15px] text-center items-center">
          <div className="sm:grid hidden  sm:grid-cols-12  min-h-7 w-full">
            <div className=" grid items-center sm:col-span-6  sm:text-[10px] md:text-[15px]  min-h-7 text-left pl-10 lg:text-3xl text-[#dad2ce] font-bold">An integrated workspace for analytics</div>
            <div className="   sm:col-span-2 grid justify-center sm:text-[10px] md:text-[15px] text-center items-center min-h-7 text-[#bea89d] ">I Dive-deep analysis</div>
            <div className="   sm:col-span-2 grid justify-center sm:text-[10px] md:text-[15px] text-center items-center min-h-7 text-[#bea89d] ">I Interactive data apps</div>
            <div className="   sm:col-span-2 grid justify-center sm:text-[10px] md:text-[15px] text-center items-center min-h-7 text-[#bea89d] ">I Self-serve exploration</div>


          </div>
        </div>
        <div className=" min-h-7  mt-4 sm:bg-[#231b17]"></div>
      </div>
    </>
  )
}

export default SecNav;