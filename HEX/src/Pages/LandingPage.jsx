
import Companies from "../components/Companies";
function LandingPage() {
    return (
        <>
            <div className="flex">
                <div >
                    <div className="ml-10    text-transparent bg-clip-text bg-[linear-gradient(55deg,white_20%,rgba(245,192,192,0.8)_100%)]  mt-10 text-8xl w-180 h-50 leading-22 bg-amber-500 font-medium">
                        Go deeper than dashboards
                    </div>
                    <div className="  w-150 mt-5 ml-10 text-amber-800 text-2xl">
                        Hex is the AI-powered analytics workspace built for<br /> teams driving faster answers and better decisions.
                    </div>
                    <div >
                        <button className=" ml-10 mt-10 w-50 h-16 text-amber-800 border-amber-700 hover:text-amber-500 hover:text-[20px] duration-500 border-2 hover:opacity-100 opacity-90  hover:bg-[#db693069]    ">Get Started</button>
                        <button className=" ml-10 mt-10 w-50 h-16  text-amber-800 border-amber-700 hover:text-amber-500 hover:text-[20px] duration-500 border-2 hover:opacity-100 opacity-90 hover:bg-[#db693069] ">Request a demo</button>
                    </div>
                </div>
                <div className="aspect-w-16 aspect-h-9 w-full">
                    <iframe className="ml-15 mt-5 border-1 border-gray-700 rounded-lg p-4 w-160 h-110"
                        width="560" height="315" src="https://www.youtube.com/embed/ejeUNsa8rBY?si=9QaQEqnEyx12IU4p" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share loop" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

                </div>
            </div>
            <Companies />



        </>
    )
}

export default LandingPage;