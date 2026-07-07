import React from 'react'
import { ExternalLink } from 'lucide-react'

const Pcards = ({ data }) => {
  if (!data || data.length < 4) return null;
  const openInNewTab = (url) => {

    const formattedUrl = url.startsWith('http') ? url : `https://${url}`;


    const newWindow = document.createElement('a');
    newWindow.href = formattedUrl;
    newWindow.target = '_blank';
    newWindow.rel = 'noopener noreferrer';


    newWindow.click();
  };
  return (
    <div className='pb-[5%]'>
      <div className='md:ml-[5%] md:flex md:justify-between md:mr-[5%] mt-[3%] md:flex-row flex flex-col items-center ' >



        <div onClick={() => {
          openInNewTab(data[0].link)
        }} id='1' className='img1 md:w-[55%] w-[94%] md:mt-0 mt-[10%] cursor-pointer'>


          <div className='h-[30vh] md:h-[55vh] w-full'>

            <img className='w-full h-full object-cover rounded-md' src={data[0].img} alt={data[0].name} />
          </div>
<div className='flex pt-5 justify-between pr-2 '>

          <h1 className='text-[#7ec128] font-bold text-xl '>{data[0].name}</h1>
          <span> <ExternalLink className='text-white '/></span>
</div>
          <p className='text-white pt-3 pb-5'>{data[0].des}</p>
        </div>

        <div
        onClick={()=>{
            openInNewTab(data[1].link)
          }} 
        id='2' className='img2 md:w-[33%] md:h-[80vh] md:mt-[7%] mt-[10%] w-[94%] cursor-pointer'>
          <div className='h-[30vh] md:h-[80vh] w-full'>

            <img className='w-full h-full object-cover rounded-md' src={data[1].img} alt={data[1].name} />
          </div>
          <div className='flex pt-5 justify-between pr-2 '>

          <h1 className='text-[#7ec128] font-bold text-xl '>{data[1].name}</h1>
          <span> <ExternalLink className='text-white '/></span>
          </div>
          <p className='text-white pt-3 pb-5'>{data[1].des}</p>
        </div>
      </div>
      <div className='md:ml-[5%] md:flex md:justify-between md:mr-[5%] md:mt-[3%] md:flex-row flex flex-col items-center' >

        <div
        onClick={()=>{
            openInNewTab(data[2].link)
          }} 
        id='3' className='img3 md:w-[35%] w-[94%] md:mt-[10%] cursor-pointer'>
          <div className='h-[30vh] md:h-[60vh] mt-[10%] w-full'>

            <img className='rounded-md w-full h-full object-cover' src={data[2].img} alt={data[2].name} />
          </div>
          <div className='flex pt-5 justify-between pr-2 '>

          <h1 className='text-[#7ec128] font-bold text-xl '>{data[2].name}</h1>
          <span> <ExternalLink className='text-white '/></span>
          </div>
          <p className='text-white pt-3 pb-5'>{data[2].des}</p>
        </div>

        <div
        onClick={()=>{
            openInNewTab(data[3].link)
          }} 
        id='4' className='img4 md:w-[55%] mt-[10%] w-[94%] md:mt-0 md:h-auto md:mb-[5%] cursor-pointer'>
          <div className='h-[30vh] md:h-[45vh] w-full'>

            <img className='w-full h-full object-cover rounded-md' src={data[3].img} alt={data[3].name} />
          </div>
          <div className='flex pt-5 justify-between pr-2 '>

          <h1 className='text-[#7ec128] font-bold text-xl '>{data[3].name}</h1>
          <span> <ExternalLink className='text-white '/></span>
          </div>
          <p className='text-white pt-3 pb-5'>{data[3].des}</p>
        </div>
      </div>
    </div>
  )
}

export default Pcards
