import React from 'react'

const Front = () => {
    const desarr=[
        {
            des1:"I specialize in creating high- performance digital environments where technical precision meets bioluminescent creativity. My work lives in the intersection of machine efficiency and editorial soul.",
            phil:"CORE PHILOSOPHY",
            des2:"Design is not a surface-level application; it is the structural integrity of the user's journey. Every pixel is a calculated step toward functional elegance."
        }
    ]
    return (
        <section id='front'>
{desarr.map( (desarr) =>(

    <div className='frontcontainer w-full mt-[10%] mb-[10%] bg-[#121412]'>
            <p className='text-[#77a02e] md:text-[13px] text-[10px] ml-[5%]' >DIGITAL ARCHITECTURE & HUMAN LOGIN</p>
            <h1 className='text-white font-extrabold ml-[5%] md:text-[120px] text-[55px] font-sans md:tracking-[0.9px] leading-14 md:leading-25 md:pt-10 pt-2'>BRIDGING THE <br /> <p className='tracking-[0.9px] void text-glow italic'>VOID</p></h1>
            <div className="description w-full flex justify-between flex-col md:flex-row">
                <div className='w-[25%] ml-[5%] mt-[5%] hidden md:flex ' >

                    <p className='text-amber-50' >{desarr.des1}</p>
                </div>
                <div className='md:w-[25%] w-[75%] md:mr-[5%] md:mt-[5%] mt-[10%] ml-[5%] md:ml-0' >
                    <h2 className='fronth2 pb-2 md:pb-5'>{desarr.phil}</h2>
                    <p className='text-amber-50' >{desarr.des2}</p>
                </div>
            </div>
        </div>
        ))}
        </section>
    )
}

export default Front
