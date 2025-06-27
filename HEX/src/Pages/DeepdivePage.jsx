import React from 'react'

const DeepdivePage = () => {
    return (
        <>
            <div>
                <div class="h-screen bg-amber-500">
                    <div class="h-[200px] border border-black sm:grid sm:grid-cols-[26px_1fr_26px]">
                        <div class="bg-amber-950 sm:col-span-1">a</div>
                        <div class="bg-amber-200">b</div>
                        <div class="bg-amber-950">c</div>
                    </div>
                    <div class="h-[448px] sm:grid sm:grid-cols-[26px_1fr_26px]">
                        <div class="bg-amber-950 sm:col-span-1">a</div>
                        <div class="m-4 rounded-lg bg-amber-200 sm:h-[416px] sm:grid sm:grid-cols-6">
                            <div class="sm:col-span-5 sm:col-start-2 m-2 h-[400px] bg-amber-100"> </div>
                        </div>
                        <div class="bg-amber-950">c</div>
                    </div>
                </div>
            </div>

            <div>
                <div class="h-[550px] bg-amber-500">

                    <div class="h-[448px] sm:grid sm:grid-cols-[26px_1fr_26px]">
                        <div class="bg-amber-950 sm:col-span-1">a</div>
                        <div class="sm:grid sm:grid-cols-3 ml-10 mr-10">
                            <div class="m-4 rounded-lg bg-amber-200 sm:h-[516px] sm:grid sm:grid-rows-4">
                                <div class="sm:row-span-3 sm:row-start-2 m-2 h-[300px] bg-amber-100"> </div>
                            </div>
                            <div class="m-4 rounded-lg bg-amber-200 sm:h-[516px] sm:grid sm:grid-rows-4">
                                <div class="sm:row-span-3 sm:row-start-2 m-2 h-[300px] bg-amber-100"> </div>
                            </div>
                            <div class="m-4 rounded-lg bg-amber-200 sm:h-[516px] sm:grid sm:grid-rows-4">
                                <div class="sm:row-span-3 sm:row-start-2 m-2 h-[300px] bg-amber-100"> </div>
                            </div>

                        </div>
                        <div class="bg-amber-950">c</div>
                    </div>
                </div>
                    <div class="h-[200px] border border-black sm:grid sm:grid-cols-2">
                        
                        <div class="bg-amber-200 border border-amber-900 border-dashed"></div>
                        <div class="bg-amber-200 border border-amber-900 border-dashed"></div>
                    
                    </div>
            </div>
        </>
    )
}

export default DeepdivePage