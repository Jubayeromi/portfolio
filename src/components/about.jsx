import React from 'react'

const About = () => {
    const arr = [
        {
            img: "./download.jpg",
            des1: "I am a multi-disciplinary creator based in the digital void. For over 8 years, I've partnered with forward-thinking brands to build products that resonate on a visceral level.",
            des2: "My approach is rooted in intentional asymmetry and tonal depth. I believe that digital interfaces should feel alive, reacting to users with organic fluidity while maintaining the structural integrity of high-end editorial design.",
            capabilities: ["UI/IX Design", "React & Next.js", "Creative Director", "Brand Identity"],
            awards: ["Awards SOTD", "FWA Site of the Month", "CSS Design Awards"]
        }
    ]
    return (
        <div id='about'>

                    {arr.map((arr) => (
            <div className='md:w-full w-full md:flex pt-[5%] pb-[10%]'>
                <div className="imgprofile md:w-[50%] w-full flex justify-center items-center pb-[10%] md:pb-0">

                        <div className='md:h-112.5 md:w-100 h-50 w-50 '>

                        <img className='md:rounded-md rounded-full w-full h-full object-cover' src={arr.img} alt="profile" />
                    </div>
                </div>
                <div className="story md:w-[50%] w-full flex flex-col items-center md:items-start md:flex-none">
                    <p className='text-green-600 font-bold md:text-[16px] text-[12px] md:ml-[5%] '>THE STORY</p>
                    <h1 className='text-[#77a02e] font-bold md:ml-[5%] md:text-[32px] leading-7 md:leading-10 mt-[5%] text-center md:text-start '>

                        Bridging the gap <br /> between artistic vision <br /> and technical <br /> execution.</h1>

                    <p className='text-white md:w-[90%] w-[90%] md:ml-[5%] mt-[4%]'>
                        {arr.des1}
                    </p>

                    <p className='text-white md:w-[90%] w-[90%] md:ml-[5%] mt-[4%]'>
                        {arr.des2}
                    </p>

                    <div className='flex w-[90%] justify-between mt-[10%]'>
                        <div className='text-white md:ml-[5%] list-none'>
                            <p className='text-[#77a02e] pb-2 font-bold'>
                                Capabilities
                            </p>
                            <li>{arr.capabilities[0]}</li>
                            <li>{arr.capabilities[1]}</li>
                            <li>{arr.capabilities[2]}</li>
                            <li>{arr.capabilities[3]}</li>
                        </div>
                        <div className='text-white md:mr-[5%] list-none'>
                            <p className='text-[#77a02e] font-bold pb-2'>
                                Awards
                            </p>
                            <li>{arr.awards[0]} </li>
                            <li>{arr.awards[1]} </li>
                            <li>{arr.awards[2]}</li>
                        </div>
                    </div>
                </div>
            </div>
            ))}
        </div>
    )
}

export default About
