import React, { useEffect, useRef, useState } from "react";

const timelineData = [
    {
        title: "Started Learning",
        description: "Began exploring enterprenuership.",
        image: "https://hex.tech/static/4f6dc7a770197ac80c8f029e176ec7f4/be194/2.webp",
    },
    {
        title: "Built Our First StartUp",
        description: "Created from a single room to nation.",
        image: "https://hex.tech/static/2e14a09c0f0f9ba152db3b2ce763e00d/1d9d3/1.webp",
    },
    {
        title: "Won the Best CEO Award",
        description: "Participated and won a International event.",
        image: "https://hex.tech/static/0c264b9fea34fc56da022d069d3474cf/be194/3.webp",
    },
    {
        title: "Got an Autorization",
        description: "Worked with a tech company as an partner.",
        image: "https://hex.tech/static/d9f7652fd97cc4ec851cb99cfb8b0498/be194/4.webp",
    },

];

const SelfServe = () => {
    const [activeIndex, setActiveIndex] = useState(-1);
    const [lineHeight, setLineHeight] = useState(0);
    const intervalRef = useRef(null);

    useEffect(() => {
        let i = 0;

        const startAnimation = () => {
            intervalRef.current = setInterval(() => {
                if (i < timelineData.length) {
                    setActiveIndex(i);
                    setLineHeight((prev) => prev + 70); 
                    i++;
                } else {
                    clearInterval(intervalRef.current);
                    setTimeout(() => {
                        setActiveIndex(-1);
                        setLineHeight(0);
                        i = 0;
                        startAnimation();
                    }, 3000);
                }
            }, 3000);
        };

        startAnimation();
        return () => clearInterval(intervalRef.current);
    }, []);
    return (
        <>
            <section id="IntDataPage">

                <div className=" lg:flex smh-[1100] lg:h-screen flex-cols-[8px_2fr_8px] sm:flex-cols-[8px_2fr_8px] gap-0 lg:mb-40 py-4 mt-10">
                    <div className="lg:w-14 lg:h-screen  bg-[#231b17]"></div>
                    <div className='sm:w-full border border-amber-100 h-[600px] lg:min-h-screen  pt-5 '>
                        <div className=' sm:h-1/16  pl-10 font-thin text-white'>I DATA APPS --</div>
                        <div className=' sm:h-3/16  pl-10 sm:text-5xl font-medium text-white' >Powerful, interactive <br />data apps</div>
                        <div className=' sm:h-2/16  pl-10 text-xl text-white ' >From simple reports to complex workflows, easily<br /> build apps that allow business stakeholders to <br />understand and take action.</div>
                        <div className=' sm:h-10/16   flex justify-end '><div className='  lg:h-3/4 mt-5 sm:w-11/12 ' >
                            <div className="lg:min-h-screen ">
                                <div className="relative flex  lg:px-8 py-0 text-white overflow-hidden">
                                  
                                    <div className="absolute  lg:left-6 lg:top-0 w-1 bg-amber-800/50 transition-all duration-[3000ms]"
                                        style={{ height: lineHeight }} />



                                    <div className="flex flex-col space-y-0 lg:ml-10 lg:relative z-10">
                                        {timelineData.map((item, index) => (
                                            <div
                                                key={index}
                                                className="lg:relative flex items-start space-x-8 h-12 pb-10 m-2 "
                                            >

                                                <div className="timeline-box p- rounded-lg shadow-lg w-80 transition-transform duration-500 transform">
                                                    <h3 className="font-bold text-lg pl-4 lg:pl-0">{item.title}</h3>
                                                    <div
                                                        className={`transition-all duration-1000 ease-in-out overflow-hidden ${activeIndex === index ? "max-h-40 opacity-100 mt-2" : "max-h-0 opacity-0 mt-0"}`}>
                                                        <p className="text-sm text-gray-600 pl-4 lg:pl-0">{item.description}</p>
                                                    </div>
                                                </div>



                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div></div>

                    </div>
                    <div className='sm:w-full border border-amber-100  text-white lg:h-screen
                 inset-0 -rotate- bg-[repeating-linear-gradient(45deg,#491D08_0px,#491D08_1px,transparent_1px,transparent_10px)]
                '><div className='bg-black lg:block rounded-lg h-80 lg:h-165 m-5'>
                            {timelineData.map((item, index) => (
                                <div key={index} className="lg:w-60 flex justify-center lg:h-60 overflow-hidden rounded-lg  ">
                                    <img
                                        src={item.image}
                                        alt={item.title}
                                        className={`absolute lg:top-1020 lg:left-200 lg:h-160 lg:w-150 h-80 w-80 md:w-120 object-cover rounded-lg transition-opacity duration-1000 ${activeIndex === index ? "opacity-100" : "opacity-0"}`} />
                                </div>
                            ))}
                        </div>


                    </div>

                    <div className="w-14 lg:h-screen bg-[#231b17]"></div>
                </div>





            </section>

        </>
    )
}

export default SelfServe;