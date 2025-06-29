import { AiFillProduct } from "react-icons/ai";
import { BsInboxes } from "react-icons/bs";
import React, { useState, useEffect } from 'react';



function Navbar() {
    const [sticky, setSticky] = useState(false);

    useEffect(() => {
        const onScroll = () => {
            setSticky(window.scrollY > 100); // toggle at 100px
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
                     md:py-1 flex justify-between transition-all duration-500
                  `}>

                <div className="h-14 md:w-7 w-2 mt-2 md:mt-4 border-2  bg-[#231b17] "></div>
                <div className="h-14 border-1 border-[#564b45ca] w-screen mt-2 md:mt-4 py-2 flex justify-center gap-7 ">
                    <div class="md:grid grid-cols-4 gap-7 hidden  relative top-1 text-white">
                        <div class="h-7 w-20  text-center flex justify-center"><h1> </h1> </div>
                        <div class="h-7 w-20  hover:bg-[#564b45ca]  hover:text-white text-center group flex justify-center">

                        
                                Product
                                <div class=" border border-amber-100/50 absolute left-18 grid-rows-5 bg-black gap-2 top-7 w-90 p-2 right-0 z-50    shadow-md hidden group-hover:grid origin-top duration-100 ease-out" >
                                    <a class="row-span-1  box-border hover:bg-[#e3b2b3]/20 text-left"><div className="pl-2"># NoteBooks</div> <div class="text-[#e3b2b3] pl-4"  >Lorem ipsum dolor sit consecte </div></a>
                                    <a class="row-span-1  box-border hover:bg-[#e3b2b3]/20 text-left"><div className="pl-2"># NoteBooks</div> <div class="text-[#e3b2b3] pl-4"  >Lorem ipsum dolor sit consecte </div></a>
                                    <a class="row-span-1  box-border hover:bg-[#e3b2b3]/20 text-left"><div className="pl-2"># NoteBooks</div> <div class="text-[#e3b2b3] pl-4"  >Lorem ipsum dolor sit consecte </div></a>
                                    <a class="row-span-1  box-border hover:bg-[#e3b2b3]/20 text-left"><div className="pl-2"># NoteBooks</div> <div class="text-[#e3b2b3] pl-4"  >Lorem ipsum dolor sit consecte </div></a>
                                    <a class="row-span-1  box-border hover:bg-[#e3b2b3]/20 text-left"><div className="pl-2"># NoteBooks</div> <div class="text-[#e3b2b3] pl-4"  >Lorem ipsum dolor sit consecte </div></a>
                                    <a class="row-span-1  box-border hover:bg-[#e3b2b3]/20 text-left"><div className="pl-2"># NoteBooks</div> <div class="text-[#e3b2b3] pl-4"  >Lorem ipsum dolor sit consecte </div></a>
                                    <a class="row-span-1  box-border hover:bg-[#e3b2b3]/20 text-left"><div className="pl-2"># NoteBooks</div> <div class="text-[#e3b2b3] pl-4"  >Lorem ipsum dolor sit consecte </div></a>
                                    
                                   
                                </div>
                           


                        </div>
                        
                        <div class="h-7 w-20  hover:bg-[#564b45ca]  hover:text-white text-center group flex justify-center">

                        
                                Product
                                <div class=" border border-amber-100/50 absolute left-52 grid-rows-4 bg-black gap-2 top-7 w-90 p-2 right-0 z-50    shadow-md hidden group-hover:grid origin-top duration-100 ease-out" >
                                    <a class="row-span-1  box-border hover:bg-[#e3b2b3]/20 text-left"><div className="pl-2"># NoteBooks</div> <div class="text-[#e3b2b3] pl-4"  >Lorem ipsum dolor sit consecte </div></a>
                                    <a class="row-span-1  box-border hover:bg-[#e3b2b3]/20 text-left"><div className="pl-2"># NoteBooks</div> <div class="text-[#e3b2b3] pl-4"  >Lorem ipsum dolor sit consecte </div></a>
                                    <a class="row-span-1  box-border hover:bg-[#e3b2b3]/20 text-left"><div className="pl-2"># NoteBooks</div> <div class="text-[#e3b2b3] pl-4"  >Lorem ipsum dolor sit consecte </div></a>
                                    <a class="row-span-1  box-border hover:bg-[#e3b2b3]/20 text-left"><div className="pl-2"># NoteBooks</div> <div class="text-[#e3b2b3] pl-4"  >Lorem ipsum dolor sit consecte </div></a>
                                   
                                   
                                </div>
                           


                        </div>
                     


                     

                        <div class="h-7 w-20  hover:bg-[#564b45ca] hover:text-white text-center">Resources</div>
                    </div>
                    <div class="h-10 w-20 font-serif text-center text-4xl text-[#e3b2b3]">HEX</div>
                    <div class="md:grid hidden grid-cols-4 gap-2 relative top-1 text-white ">

                        <div class="h-7 w-20  hover:bg-[#564b45ca]  hover:text-white text-center group flex justify-center">

                        
                                Product
                                <div class=" border border-amber-100/50 absolute -left-50 grid-rows-4 grid-cols-2 bg-black gap-2 top-7 w-150 p-2 right-0 z-50    shadow-md hidden group-hover:grid origin-top duration-100 ease-out" >
                                    <a class="row-span-1  box-border hover:bg-[#e3b2b3]/20 text-left"><div className="pl-2"># NoteBooks</div> <div class="text-[#e3b2b3] pl-4"  >Lorem ipsum dolor sit consecte </div></a>
                                    <a class="row-span-1  box-border hover:bg-[#e3b2b3]/20 text-left"><div className="pl-2"># NoteBooks</div> <div class="text-[#e3b2b3] pl-4"  >Lorem ipsum dolor sit consecte </div></a>
                                    <a class="row-span-1  box-border hover:bg-[#e3b2b3]/20 text-left"><div className="pl-2"># NoteBooks</div> <div class="text-[#e3b2b3] pl-4"  >Lorem ipsum dolor sit consecte </div></a>
                                    <a class="row-span-1  box-border hover:bg-[#e3b2b3]/20 text-left"><div className="pl-2"># NoteBooks</div> <div class="text-[#e3b2b3] pl-4"  >Lorem ipsum dolor sit consecte </div></a>
                                    
                                    <a class="row-span-1  box-border hover:bg-[#e3b2b3]/20 text-left"><div className="pl-2"># NoteBooks</div> <div class="text-[#e3b2b3] pl-4"  >Lorem ipsum dolor sit consecte </div></a>
                                    <a class="row-span-1  box-border hover:bg-[#e3b2b3]/20 text-left"><div className="pl-2"># NoteBooks</div> <div class="text-[#e3b2b3] pl-4"  >Lorem ipsum dolor sit consecte </div></a>
                                    <a class="row-span-1  box-border hover:bg-[#e3b2b3]/20 text-left"><div className="pl-2"># NoteBooks</div> <div class="text-[#e3b2b3] pl-4"  >Lorem ipsum dolor sit consecte </div></a>
                                    <a class="row-span-1  box-border hover:bg-[#e3b2b3]/20 text-left"><div className="pl-2"># NoteBooks</div> <div class="text-[#e3b2b3] pl-4"  >Lorem ipsum dolor sit consecte </div></a>
                                    
                                   
                                </div>
                           


                        </div>
                        <div class="h-7 w-20  hover:bg-[#564b45ca] hover:text-white text-center">Pricing</div>
                       
                        
                        <div class="h-7 w-15 cursor-pointer  text-center hover:bg-[#564b45ca] hover:text-white " >Log In</div>

                        <div class="h-7 w-24  hover:bg-[#ae876b] hover:text-white text-center border-1 border-amber-700 "><button>Get started</button></div>
                    </div>
                    <div className="text-[#e3b2b3] md:hidden flex ml-auto text-2xl w-10 h-10 text-center justify-center border border-[#564b45ca] rounded-full rotate-90 font-light">||</div>
                </div>
                <div className="h-14 md:mt-4 md:w-7 mt-2 w-2 border-2  bg-[#231b17]"></div>

            </div>











        </>
    )
}
export default Navbar;