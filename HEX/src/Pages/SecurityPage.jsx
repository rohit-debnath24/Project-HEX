import React from 'react'

const SecurityPage = () => {
    return (
        <>
            <div className="bg-[url('https://th.bing.com/th/id/OIP.D_W4CSxPf0xbXPnWKCsDmAHaEc?rs=1&pid=ImgDetMain')] md:bg-cover mt-20 md:mt-20 md:w-full md:h-full ">
                
                <div className='text-white grid sm:grid-rows-3 sm:grid-cols-2 h- w-auto mb-40 '>
                    <div className='sm:col-span-2 sm:row-span-1  grid justify-center text-center text-6xl break-words md:text-7xl p-20 font-medium'>Built for security and control </div>
                    <div className='sm:col-span-1 sm:row-span-2  grid-rows-4 sm:pl-75
        
        '>
                        <div className='row-span-1  min-h-30 grid  text-center md:text-left text-2xl pt-4 text-amber-600'>Enterprise-grade security: SOC2,<br /> HIPAA, and privacy regulations.</div>
                        <div className='row-span-1  min-h-30 grid  text-center'><div className='text-2xl font-bold md:justify-start grid'>Flexible deployment models</div><div className='text-center grid md:justify-start text-amber-700'>Multi-tenant, HIPAA, Single-Tenant,<br /> and Private Cloud options available</div></div>
                        <div className='row-span-1  min-h-30 grid  text-center'><div className='text-2xl font-bold md:justify-start grid'>Easy authentication and authorization</div><div className='text-center grid md:justify-start pb-8 text-amber-700'>SSO and SCIM with Google,<br/> AzureAD, Okta, and more</div></div>
                        <div className='row-span-1  min-h-30 grid  text-center'><div className='text-2xl font-bold md:justify-start grid'>Secure database connections</div><div className='text-center grid md:justify-start pb-8 text-amber-700'>SSL and pass-through OAuth available</div><div className='border border-red-300 h-8 w-50 hover:border-orange-500 relative flex m-auto md:m-0 bottom-5'>Read more about Security</div></div>

                    </div>
                </div>
            </div>
        </>

    )
}

export default SecurityPage