
import Companies from "../components/Companies";
function LandingPage() {
    return (
        <>

            <div className=" flex flex-cols-3 gap-0   py-1">
                <div className="md:w-7 w-2   bg-[#231b17]"></div>
                <div className="w-screen border-2  flex justify-center">

                    <div className="md:flex ">
                        <div >
                            <div className="md:ml-10 ml-1 text-center  text-transparent bg-clip-text bg-[linear-gradient(55deg,white_20%,rgba(245,192,192,0.8)_100%)]  mt-10 text-5xl md:text-8xl md:w-180 md:h-50 h-35 bg-amber-500 font-medium">
                                Go deeper than<br /> dashboards
                            </div>
                            <div className=" p-x-6 md:w-150 md:mt-5 text-center text-amber-800 break-words text-2xl">
                                Hex is the AI-powered analytics workspace built for teams driving faster answers and better decisions.
                            </div>
                            <div className="flex justify-around m-auto">
                                <button className=" md:ml-10 mt-10 w-40 md:w-50 h-16 text-amber-800 border-amber-700 hover:text-amber-500 hover:text-[20px] duration-500 border-2 hover:opacity-100 opacity-90  hover:bg-[#db693069]    ">Get Started</button>
                                <button className=" md:ml-10 mt-10 w-40 md:w-50 h-16  text-amber-800 border-amber-700 hover:text-amber-500 hover:text-[20px] duration-500 border-2 hover:opacity-100 opacity-90 hover:bg-[#db693069] ">Request a demo</button>
                            </div>
                        </div>
                        <div className="md:aspect-w-16 flex justify-around md:aspect-h-9 md:w-full">
                            <iframe className=" md:ml-15 mt-5 border-1 border-gray-700 rounded-lg p-4 h-60 w-80 md:w-160 md:h-110"
                                src="https://www.youtube.com/embed/ejeUNsa8rBY?si=9QaQEqnEyx12IU4p" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share loop" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

                        </div>
                    </div>


                </div>
                <div className="md:w-7 w-2  bg-[#231b17]"></div>
            </div>
                    <Companies />



        </>

    )
}

export default LandingPage;