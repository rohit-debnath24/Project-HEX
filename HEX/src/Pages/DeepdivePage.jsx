import React from 'react'

const DeepdivePage = () => {
    return (
        <>
            <div>
                <div class="h-screen ">
                    <div class="h-[200px] border grid grid-cols-[8px_1fr_8px] border-black sm:grid sm:grid-cols-[26px_1fr_26px]">
                        <div class="bg-amber-950  sm:col-span-1">a</div>
                        <div class="bg-amber-200">b</div>
                        <div class="bg-amber-950">c</div>
                    </div>
                    <div class="md:h-[448px] sm:grid grid grid-cols-[8px_1fr_8px]  sm:grid-cols-[26px_1fr_26px]">
                        <div class="bg-amber-950 sm:col-span-1">a</div>
                        <div class="m-4 rounded-lg bg-amber-200 h-[350px] md:h-[416px] grid grid-rows-4 sm:grid sm:grid-cols-6">
                            <div class="sm:col-span-5 row-span-2 row-start-2 sm:row-start-1 sm:col-start-2 m-2 h-[240px] md:h-[400px] bg-amber-100"> </div>
                        </div>
                        <div class="bg-amber-950">c</div>
                    </div>
                </div>
            </div>

            <div>
                <div class="md:h-[550px] ">

                    <div class="md:h-[448px] sm:grid grid grid-cols-[8px_1fr_8px] sm:grid-cols-[26px_1fr_26px]">
                        <div class="bg-amber-950 sm:col-span-1">a</div>
                        <div class="grid grid-cols-1 sm:grid-cols-3 md:ml-10 md:mr-10">
                            <div class="m-4 rounded-lg bg-amber-200 h-[300px] md:h-[516px] grid grid-rows-4">
                                <div class="row-span-3 row-start-2 m-2  bg-amber-100"> </div>
                            </div>
                            <div class="m-4 rounded-lg bg-amber-200 h-[300px] md:h-[516px] grid grid-rows-4">
                                <div class="row-span-3 row-start-2 m-2  bg-amber-100"> </div>
                            </div>
                            <div class="m-4 rounded-lg bg-amber-200 h-[300px] md:h-[516px] grid grid-rows-4">
                                <div class="row-span-3 row-start-2 m-2  bg-amber-100"> </div>
                            </div>


                        </div>
                        <div class="bg-amber-950">c</div>
                    </div>
                </div>
            </div>
                <div class="h-[400px] md:h-[200px] border border-black grid sm:grid-cols-2">

                    <div class="bg-amber-200 border border-amber-900 border-dashed"></div>
                    <div class="bg-amber-200 border border-amber-900 border-dashed"></div>

                </div>
        </>
    )
}

export default DeepdivePage