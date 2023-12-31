import React from 'react'
import { FaRegFileAlt } from "react-icons/fa";
import { MdDownloading } from "react-icons/md";
import { IoMdClose } from "react-icons/io"
import { motion } from "framer-motion"

export default function Cards({data,reference}) {
  return (
    <>
    <motion.div drag dragConstraints={reference} whileDrag={{scale: 1.1}} dragElastic={0.2} dragTransition={{ bounceStiffness: 100, bounceDamping: 10 }} className='relative flex-shrink-0 w-52 h-64 rounded-[45px] text-white bg-zinc-900/90 px-8 py-10 overflow-hidden'>
    <FaRegFileAlt />
        <p className='mt-5 leading-tight font-semibold text-sm '>{data.desc}</p>
        <div className="footer absolute bottom-0 w-full h-10 mb-6 left-0">
            <div className='flex justify-between items-center px-4'>
                <h5>{data.size}</h5>
                <span className='w-6 h-6 bg-zinc-600 rounded-full flex items-center justify-center mb-1 '>
                {data.close?<IoMdClose/>:<MdDownloading size="1.0em" color="#fff"/>}
                </span>
            </div>
            {data.tags.isOpen &&(
               <div className={`tag ${data.tags.tagColor ==="blue"?"bg-blue-600":"bg-green-600" } w-full h-10 flex items-center justify-center`}>
               <h5 className='text-sm font-semibold'>{data.tags.tagTitle}</h5>
            </div>)}
           
        </div>
        </motion.div>
    </>
  )
}
