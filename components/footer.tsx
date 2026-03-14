import React from 'react'
import MagicButton from './ui/magicbutton'
import { FaLocationArrow } from 'react-icons/fa'
import { socialMedia } from '@/data'

const Footer = () => {
    return (
        <footer className='w-full mb-[100px] md:mb-5 pb-10 ' id='contact'>
        

            <div className='flex flex-col items-center'>
                <h1 className='heading lg:max-w-[45vw]'>
                    Ready To Take <span className='text-purple'>Your Digital</span>  Presence To The Next Level?
                </h1>
                <p className='text-white-200 md:mt-10 my-5 text-center'>Reach out to me today & let&apos;s discuss how I can help you achive your goals.</p>

                <a href="mailto:abdullaomi46@gmail.com">

                    <MagicButton
                        title="Let's get in touch"
                        icon={<FaLocationArrow />}
                        position='right'
                    />
                </a>
            </div>
            <div className='flex md:flex-row flex-col mt-16 justify-between items-center'>
                <p className='md:text-base text-sm md:font-normal font-light'>Copyright © 2026 Jubayer</p>

                <div className='flex items-center md:gap-3 gap-6'
                >
                    {socialMedia.map((profile) => (
                        <div key={profile.id} className='w-10 h-10 cursor-pointer flex justify-center items-center backdrop-filter backdrop-blur-lg saturate-180 bg-opacity-75 bg-black-200 rounded-lg border-black-300'>
                            <img src={profile.img} alt={profile.id} width={20} height={20} />
                        </div>
                    ))}

                </div>

            </div>
        </footer>
    )
}

export default Footer
