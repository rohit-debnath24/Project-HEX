import React from 'react'
import bgimage from "../Images/77840.jpg"
import bgImg from "../Images/download.png"

const DeepdivePage = () => {
    return (
        <>
            <section id="DeepDive">
                <div>
                    <div class="h-screen">
                        <div class="h-[200px] border grid mt-8 mb-8 grid-cols-[8px_1fr_8px] border-black sm:grid sm:grid-cols-[26px_1fr_26px]">
                            <div class="bg-amber-950  sm:col-span-1">a</div>
                            <div class=" grid sm:grid-cols-2 sm:grid-rows-4 ">
                                <div className='col-span-1 row-span-1 text-emerald-400'># NOTEBOOK</div>
                                <div className='sm:col-start-1 sm:col-span-1 sm:row-span-3 text-3xl sm:text-5xl font-medium text-amber-300 pl-4'>Fast,flexible and collaborative analytics</div>
                                <div className='sm:col-start-2 sm:col-span-1 sm:row-span-4 sm:text-xl sm:font-medium  text-amber-600 pl-4'>Hex's notebooks are built for the analyses that actually matter. With<br /> an integrated toolkit, you no longer need to jump between tools to <br />query, predict, transform, and visualize data.</div>

                            </div>
                            <div class="bg-amber-950">c</div>
                        </div>
                        <div class="md:h-[448px] sm:grid grid grid-cols-[8px_1fr_8px]  sm:grid-cols-[26px_1fr_26px]">
                            <div class="bg-amber-950 sm:col-span-1"></div>
                            <div class="m-4 rounded-lg h-[350px] md:h-[466px] grid grid-rows-4 sm:grid sm:grid-cols-6"><p className='text-[20px] text-amber-50 p-1 font-medium'>SQL and Python,living <br />together in harmony</p> <p className='text-amber-900 p-1'>Go back and forth between  <br /> and scripts,without jumping between tools.</p>
                                <div class="sm:col-span-5 row-span-2 row-start-2 sm:row-start-1 sm:col-start-2 m-2 h-[240px] md:h-[450px] bg-cover  rounded-lg" style={{ backgroundImage: `url(${bgimage})` }}> <img src="https://hex.tech/images/notebooks/chart-cell@2x.png" className='bg-cover w-full h-full object-contain'></img></div>
                            </div>
                            <div class="bg-amber-950">c</div>
                        </div>
                    </div>
                </div>

                <div>
                    <div class="md:h-[550px] ">

                        <div class="md:h-[448px] sm:grid grid grid-cols-[8px_1fr_8px] sm:grid-cols-[26px_1fr_26px]">
                            <div class="bg-amber-950 sm:col-span-1"></div>
                            <div class="grid grid-cols-1 sm:grid-cols-3 md:ml-10 md:mr-10">
                                <div class="m-4 rounded-lg  h-[410px] md:h-[516px] grid grid-rows-4 "><div className='p-3'><div className='text-2xl sm:text-3xl text-amber-100 font-medium'>Explore with point and click no code tools</div><div className='text-amber-700'>Hex makes it easier to code implement and deploy your code with ease </div></div>
                                    <div class="row-span-3  row-start-2 mt-6 sm:mt-2 m-3 sm:m-4  bg-cover rounded-lg overflow-hidden" style={{ backgroundImage: `url(${bgImg})` }}><img src="https://image.freepik.com/free-photo/stock-market-forex-trading-graph-graphic-concept_73426-102.jpg" className=' pt-20 sm:pt-26 '></img> </div>
                                </div>
                                <div class="m-4 rounded-lg  h-[410px] md:h-[516px] grid grid-rows-4 "><div className='p-3'><div className='text-2xl sm:text-3xl text-amber-100 font-medium'>Explore with point and click no code tools</div><div className='text-amber-700'>Hex makes it easier to code implement and deploy your code with ease </div></div>
                                    <div class="row-span-3 row-start-2 mt-6 sm:mt-2 m-3 sm:m-4  bg-cover rounded-lg overflow-hidden" style={{ backgroundImage: `url(${bgImg})` }}><img src="https://i.pinimg.com/736x/ec/31/fb/ec31fb6bb86683cf4d2d1680f79f14cb.jpg" className='bg-cover h-fullw-full pt-20 sm:pt-26 '></img> </div>
                                </div>
                                <div class="m-4 rounded-lg  h-[410px] md:h-[516px] grid grid-rows-4 "><div className='p-3'><div className='text-2xl sm:text-3xl text-amber-100 font-medium'>Explore with point and click no code tools</div><div className='text-amber-700'>Hex makes it easier to code implement and deploy your code with ease </div></div>
                                    <div class="row-span-3  row-start-2 mt-6 sm:mt-2 m-3 sm:m-4  bg-cover rounded-lg overflow-hidden" style={{ backgroundImage: `url(${bgImg})` }}><img src="https://i.pinimg.com/736x/52/e1/77/52e177276388a34e067773436d3a98a4.jpg" className=' pt-20 sm:pt-26 '></img> </div>
                                </div>



                            </div>
                            <div class="bg-amber-950">c</div>
                        </div>
                    </div>
                </div>
                <div class="h-[480px] md:h-[200px] border border-black grid sm:grid-cols-2">

                    <div class=" border border-amber-900 border-dashed"><img src="https://images.squarespace-cdn.com/content/v1/6530fd268904d075879efe71/3f58c1e1-ef36-4b0c-a491-f46530a648d6/Huckleberry+Logo+Soft+Green+RGB.png?format=1500w" className='h-10 mt-3 m-auto'></img><div className='text-amber-800 text-center p-8 md:p-0'>“We generated over a million dollars in value from a leaner,<br /> more precise replenishment model.”</div><div className='text-amber-800 text-center md:pt-11'>Ben S.<br />Director Data & Analytics, Huckberry</div></div>
                    <div class=" border border-amber-900 border-dashed"><img src="https://sparkwise.ca/wp-content/uploads/2020/07/logo-dark-small-transparent.png" className='h-12 w-38 mt-3 m-auto'></img><div className='text-amber-800 text-center p-6 md:p-0'>“We needed a tool with the flexibility for anyone on any<br /> team to explore and build segments related to their <br />part of the business. Hex unlocks that for ClickUp ”</div><div className='text-amber-800 text-center pt-3'>Sai S.<br />Director Data & Analytics, Huckberry</div></div>



                </div>
            </section>
        </>
    )
}

export default DeepdivePage