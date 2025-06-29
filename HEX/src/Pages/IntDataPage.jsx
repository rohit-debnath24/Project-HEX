import React, { useEffect, useRef, useState } from "react";

const timelineData = [
    {
        title: "Started Learning",
        description: "Began exploring programming basics.",
        image: "https://hex.tech/static/4f6dc7a770197ac80c8f029e176ec7f4/be194/2.webp",
    },
    {
        title: "Built First App",
        description: "Created my first mini web application.",
        image: "https://hex.tech/static/2e14a09c0f0f9ba152db3b2ce763e00d/1d9d3/1.webp",
    },
    {
        title: "Won a Hackathon",
        description: "Participated and won a hackathon event.",
        image: "https://hex.tech/static/0c264b9fea34fc56da022d069d3474cf/be194/3.webp",
    },
    {
        title: "Got an Internship",
        description: "Worked with a tech company as an intern.",
        image: "https://hex.tech/static/d9f7652fd97cc4ec851cb99cfb8b0498/be194/4.webp",
    },

];

const IntDataPage = () => {
    const [activeIndex, setActiveIndex] = useState(-1);
    const [lineHeight, setLineHeight] = useState(0);
    const intervalRef = useRef(null);

    useEffect(() => {
        let i = 0;

        const startAnimation = () => {
            intervalRef.current = setInterval(() => {
                if (i < timelineData.length) {
                    setActiveIndex(i);
                    setLineHeight((prev) => prev + 70); // adjust to match spacing
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
            }, 3000); // snail speed
        };

        startAnimation();
        return () => clearInterval(intervalRef.current);
    }, []);
    return (
        <>
            <section id="IntDataPage">

                <div className=" md:flex smh-[1100] md:h-screen flex-cols-[8px_2fr_8px] sm:flex-cols-[8px_2fr_8px] gap-0 md:mb-40 py-4">
                    <div className="md:w-14 md:h-screen  bg-[#231b17]"></div>
                    <div className='sm:w-full border border-amber-100 h-[600px] md:min-h-screen  pt-5 '>
                        <div className=' sm:h-1/16  pl-20 font-thin text-white'>I DATA APPS --</div>
                        <div className=' sm:h-3/16  pl-20 sm:text-5xl font-medium text-white' >Powerful, interactive <br />data apps</div>
                        <div className=' sm:h-2/16  pl-20 text-xl text-white ' >From simple reports to complex workflows, easily<br /> build apps that allow business stakeholders to <br />understand and take action.</div>
                        <div className=' sm:h-10/16   flex justify-end '><div className='  md:h-3/4 mt-5 sm:w-11/12 ' >
                            <div className="md:min-h-screen ">
                                <div className="relative flex  md:px-8 py-0 text-white overflow-hidden">
                                    {/* Vertical Line */}
                                    <div
                                        className="absolute  md:left-6 md:top-0 w-1 bg-blue-500 transition-all duration-[3000ms]"
                                        style={{ height: lineHeight }}
                                    />

                                    {/* Timeline Content */}
                                    <div className="flex flex-col space-y-0 md:ml-10 md:relative z-10">
                                        {timelineData.map((item, index) => (
                                            <div
                                                key={index}
                                                className="md:relative flex items-start space-x-8 h-12 pb-10 m-2 "
                                            >
                                                {/* Timeline Box */}
                                                <div className="timeline-box p- rounded-lg shadow-md w-80 transition-transform duration-500 transform">
                                                    <h3 className="font-bold text-lg pl-4 md:pl-0">{item.title}</h3>
                                                    <div
                                                        className={`transition-all duration-1000 ease-in-out overflow-hidden ${activeIndex === index
                                                            ? "max-h-40 opacity-100 mt-2"
                                                            : "max-h-0 opacity-0 mt-0"
                                                            }`}
                                                    >
                                                        <p className="text-sm text-gray-600 pl-4 md:pl-0">{item.description}</p>
                                                    </div>
                                                </div>

                                                {/* Timeline Image */}

                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div></div>

                    </div>
                    <div className='sm:w-full border border-amber-100 text-white md:h-screen
                 inset-0 -rotate- bg-[repeating-linear-gradient(45deg,#491D08_0px,#491D08_1px,transparent_1px,transparent_10px)]
                '><div className='bg-black rounded-lg h-80 lg:h-165 m-5'>
                            {timelineData.map((item, index) => (
                                <div key={index} className="md:w-60 md:h-60 overflow-hidden rounded-lg  ">
                                    <img
                                        src={item.image}
                                        alt={item.title}
                                        className={`absolute md:top-780 md:left-200 md:h-160 md:w-150 h-80 w-80  object-cover rounded-lg transition-opacity duration-1000 ${activeIndex === index ? "opacity-100" : "opacity-0"
                                            }`}
                                    />
                                </div>
                            ))}


                        </div>


                    </div>

                    <div className="w-14 md:h-screen bg-[#231b17]"></div>
                </div>





            </section>

        </>
    )
}

export default IntDataPage