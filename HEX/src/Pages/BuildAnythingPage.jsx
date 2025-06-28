import React from 'react'

const BuildAnythingPage = () => {
  return (
    <>
      <div class="text-7xl font-semibold text-center text-amber-100">Build anything <br />with data</div> <div class="font-thin leading-5 pt-8 text-center text-amber-50 mb-14">Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa minus rem dolore nostrum reiciendis recusandae est in neque, doloribus soluta. Quiuga, perferendis accusamus quo nostrum aut laborum dolor</div>
      <div className=" flex flex-cols-3 gap-0  overflow-x-auto py-1">
        <div className="w-7 lg:h-[1640px]   bg-[#231b17]"></div>
        <div className="w-screen ">

          <div class=" min-w-300 lg:h-[1640px] text-2xl grid grid-cols-4  grid-rows-24 gap-x-5   ">

            <div class=" col-span-1 border-l-2 border-r-2 border-amber-50 row-span-4 row-start-1 border-dashed"></div>
            <div class=" col-span-1 bg-amber-600 border-2 border-amber-50 row-span-7 row-start-5">1</div>
            <div class=" row-span-5 bg-amber-100 border-2 border-amber-50 col-span-1 row-start-12">2</div>
            <div class=" col-span-1  border-r-2 border-l-2 border-amber-50 row-span-8 border-b-2 row-start-17 border-dashed"></div>

            <div class=" col-span-1  border-l-2 border-amber-50 row-span-1 row-start-6 border-dashed"></div>
            <div class=" col-span-1 bg-amber-700 border-2 border-amber-50 row-span-9 row-start-7">3</div>
            <div class=" row-span-4 bg-amber-200 border-2 border-amber-50 col-span-1 row-start-16">4</div>
            <div class=" col-span-1  border-r-2 border-l-2 border-amber-50 row-span-5 border-b-2 row-start-20 border-dashed"></div>
            {/* <div class=" col-span-1   border-l-2 border-r-2 border-amber-50 row-span-5 row-start-1"></div> */}
            <div class=" col-span-2   border-l-2 border-r-2 border-amber-50 row-span-5 row-start-1 text-wrap border-dashed text-white"><div class="text-7xl font-semibold text-center text-transparent">Build anything <br />with data</div> <div class="font-thin leading-5 pt-8 text-center text-transparent"> Quiuga, perferendis accusamus quo nostrum aut laborum dolor</div></div>
            <div class=" col-span-1 bg-amber-600 border-2 border-amber-50 row-span-8 row-start-6">5</div>
            <div class=" row-span-8 bg-amber-300 border-2 border-amber-50 col-span-1 row-start-14">6</div>
            <div class=" col-span-1  border-r-2 border-l-2 border-amber-50 row-span-3 border-b-2 row-start-22 border-dashed"></div>
            <div class=" col-span-1   border-l-2 border-r-2 border-amber-50 row-span-3 row-start-1 border-dashed"></div>
            <div class=" col-span-1 bg-amber-600 border-2 border-amber-50 row-span-8 row-start-4">7</div>
            <div class=" row-span-4 bg-amber-100 border-2 border-amber-50 col-span-1 row-start-12">2</div>
            <div class=" col-span-1  border-r-2 border-l-2 border-b-2 border-amber-50 row-span-9 row-start-16 border-dashed"></div>




          </div>
        </div>
        <div className="w-7 lg:h-[1640px]   bg-[#231b17]"></div>
      </div>


    </>
  )
}

export default BuildAnythingPage