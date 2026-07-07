import { Key } from 'lucide-react'
import React from 'react'

const Footer = () => {
  const links=[
    {id:1, name:"FACEBOOK", url:"https://facebook.com"},
    {id:2, name:"instagram", url:"https://instagram.com"},
     {id:3, name:"twitter", url:"https://twitter.com"},
      {id:4, name:"linkedin", url:"https://linkedin.com"}
  ]
  return (
    <div>
      <div className='md:h-20 h-10 flex items-center w-full justify-between'>
        <h1 className='md:ml-8 ml-4 font-bold md:text-[18px] text-xs void '>ELITE_PORTFOLIO</h1>
        <div className='flex gap-3 md:gap-8 md:text-sm text-gray-500 list-none mr-4 md:mr-8 text-[8px]'>
        {links.map((links) =>(
           
            <li key={links.id} className='hover:text-white hover:cursor-pointer uppercase'>
              <a href={links.url}
              target="_blank"
              rel='noopener noreferrer'
               >

              {links.name} 
              </a>
            </li>

          
            
            ))}
        </div>
      </div>
    </div>
  )
}

export default Footer
