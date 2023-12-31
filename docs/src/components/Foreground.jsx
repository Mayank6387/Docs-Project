import React, { useRef } from 'react'
import Cards from './Cards'


function Foreground() {
  const ref=useRef(null);
   const data=[{
     desc:"Welcome!!",
     size:"0.9mb",
     close:false,
     tags:{isOpen:true,tagTitle:"DownloadNow",tagColor:"blue"},
   },{
    desc:"This is Awesome.",
    size:"0.9mb",
    close:true,
    tags:{isOpen:true,tagTitle:"DownloadNow",tagColor:"green"},
  },{
    desc:"Heyy You :)",
    size:"0.9mb",
    close:true,
    tags:{isOpen:true,tagTitle:"DownloadNow",tagColor:"blue"},
  },];
  return (
    <>
    <div ref={ref} className='fixed p-5 flex flex-wrap gap-10 z-[3]  h-screen w-full top-0 left-0'>
    {data.map((item,index)=>(
      <Cards data={item} reference={ref}></Cards>
    ))}
    </div>
    </>
  )
}

export default Foreground