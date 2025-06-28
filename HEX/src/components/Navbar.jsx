import { AiFillProduct } from "react-icons/ai";
import { BsInboxes } from "react-icons/bs";
import React, { useState, useEffect } from 'react';



function Navbar() {
    const [sticky, setSticky] = useState(false);

    useEffect(() => {
        const onScroll = () => {
            setSticky(window.scrollY > 100 ); // toggle at 100px
        };
        window.addEventListener('scroll', onScroll);
        return () => window.removeEventListener('scroll', onScroll);
    }, []);
    return (
        <>

            <div className=" flex flex-cols-3 gap-0   py-1">
                <div className="md:w-7 w-2 h-10 mt-4 bg-[#231b17]"></div>
                <div className="w-screen border-1  hover:bg-[#564b45ca] hover:text-white border-white mt-4 py-1 flex justify-center">
                    Rolling motion
                </div>
                <div className="md:w-7 w-2 h-10 mt-4 bg-[#231b17]"></div>
            </div>

            <div className={`${sticky ? 'fixed top-0 left-0 right-0 shadow-md bg-[#100A06] z-50' : 'relative'} 
                   border-2 border-[#564b45ca]  md:py-1 flex justify-between transition-all duration-500
                  `}>
                <div className="h-14 md:w-7 w-2 md:mt-4 border-2  bg-[#231b17] "></div>
                <div className="h-14 border-2 w-screen  md:mt-4 py-2 flex justify-center gap-7 ">
                    <div class="md:grid grid-cols-4 gap-7 hidden  relative top-1 text-white">
                        <div class="h-7 w-20  text-center flex justify-center"><h1> </h1> </div>
                        <div class="h-7 w-20  hover:bg-[#564b45ca] hover:text-white text-center flex justify-center"><h1> Products</h1> </div>
                        <div class="h-7 w-20  hover:bg-[#564b45ca] hover:text-white text-center flex">Use cases</div>
                        <div class="h-7 w-20  hover:bg-[#564b45ca] hover:text-white text-center ...">Enterprise</div>

                    </div>
                    <div class="h-10 w-20 font-serif text-center text-4xl text-amber-600">HEX</div>
                    <div class="md:grid hidden grid-cols-4 gap-2 relative top-1 text-white ">
                        <div class="h-7 w-20  hover:bg-[#564b45ca] hover:text-white text-center">Resources</div>
                        <div class="h-7 w-20  hover:bg-[#564b45ca] hover:text-white text-center">Pricing</div>
                        <div class="h-7 w-15 cursor-pointer  text-center hover:bg-[#564b45ca] hover:text-white " >Log In</div>

                        <div class="h-7 w-24  hover:bg-[#ae876b] hover:text-white text-center border-1 border-amber-700 "><button>Get started</button></div>
                    </div>
                    <div className="text-amber-600 md:hidden flex ml-auto text-2xl w-10 h-10 text-center justify-center border border-[#564b45ca] rounded-full rotate-90 font-light">||</div>
                </div>
                <div className="h-14 md:mt-4 md:w-7 w-2 border-2  bg-[#231b17]"></div>
            </div>











        </>
    )
}
export default Navbar;