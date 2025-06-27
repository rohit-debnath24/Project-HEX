import React, { useEffect, useRef, useState } from "react";

const timelineData = [
    {
        title: "Started Learning",
        description: "Began exploring programming basics.",
        image: "https://hex.tech/static/4c734708eb53084eb47a817c6d586eb8/be194/1.webp",
    },
    {
        title: "Built First App",
        description: "Created my first mini web application.",
        image: "https://hex.tech/static/e7302790f1e13c92e1f8abebd11d3686/be194/3.webp",
    },
    {
        title: "Won a Hackathon",
        description: "Participated and won a hackathon event.",
        image: "https://hex.tech/static/0c264b9fea34fc56da022d069d3474cf/be194/3.webp",
    },
    {
        title: "Got an Internship",
        description: "Worked with a tech company as an intern.",
        image: "https://hex.tech/static/2e14a09c0f0f9ba152db3b2ce763e00d/1d9d3/1.webp",
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
        <section id="SelfServePage">

            <div className=" flex h-screen  sm:flex-cols-[8px_2fr_8px] gap-0  py-4">
                <div className="w-14   bg-[#231b17]"></div>
                <div className='sm:w-full border border-amber-100 pt-5  '>
                    <div className=' sm:h-1/16  pl-20 font-thin text-white '>I DATA APPS --</div>
                    <div className=' sm:h-3/16  pl-20 sm:text-5xl font-medium text-white' >Enable self serve <br />without the silos</div>
                    <div className=' sm:h-2/16  pl-20 text-xl text-white ' >From simple reports to complex workflows, easily<br /> build apps that allow business stakeholders to <br />understand and take action.</div>
                    <div className=' sm:h-10/16   flex justify-end '><div className='  h-3/4 mt-5 sm:w-11/12 ' >
                        <div className="min-h-screen">
                            <div className="relative flex  px-8 py-0 text-white overflow-hidden">
                                {/* Vertical Line */}
                                <div
                                    className="absolute left-6 top-0 w-1 bg-blue-500 transition-all duration-[3000ms]"
                                    style={{ height: lineHeight }}
                                    />

                                {/* Timeline Content */}
                                <div className="flex flex-col space-y-0 ml-10 relative z-10">
                                    {timelineData.map((item, index) => (
                                        <div
                                        key={index}
                                            className="relative flex items-start space-x-8 h-12 pb-10 m-2 "
                                        >
                                            {/* Timeline Box */}
                                            <div className="timeline-box p- rounded-lg shadow-md w-80 transition-transform duration-500 transform">
                                                <h3 className="font-bold text-lg">{item.title}</h3>
                                                <div
                                                    className={`transition-all duration-1000 ease-in-out overflow-hidden ${activeIndex === index
                                                        ? "max-h-40 opacity-100 mt-2"
                                                        : "max-h-0 opacity-0 mt-0"
                                                    }`}
                                                >
                                                    <p className="text-sm text-gray-600">{item.description}</p>
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
                <div className='sm:w-full border border-amber-100 text-white 
                 inset-0 -rotate- bg-[repeating-linear-gradient(45deg,#491D08_0px,#491D08_1px,transparent_1px,transparent_10px)]
                 '><div className='bg-black rounded-lg lg:h-160 m-5'>
 {timelineData.map((item, index) => (
     <div key={index} className="w-60 h-60 overflow-hidden rounded-lg  ">
                            <img
                                src={item.image}
                                alt={item.title}
                                className={`absolute sm:top-940 sm:left-200 h-160 w-150  object-cover rounded-lg transition-opacity duration-1000 ${activeIndex === index ? "opacity-100" : "opacity-0"
                                }`}
                                />
                        </div>
 ))}


                    </div>


                </div>

                <div className="w-14  bg-[#231b17]"></div>
            </div>






 </section>
        </>
    )
}

export default SelfServe