import React from 'react'
import { FaRegFileAlt } from "react-icons/fa";
import { MdOutlineFileDownload } from "react-icons/md";

const Card = () => {
  return (
           <div className="relative w-60 h-72 rounded-[50px] px-8   bg-zinc-900/90 overflow-hidden">
             <FaRegFileAlt />
             <p className='text-xs  leading-tight mt-5 font-semibold'>Lorem ipsum dolor sit amet consectetur adipisicing.</p>
            <div className="footer absolute bottom-0  w-full py-3  left-0 ">
                <div className='flex items-center justify-between  py-3 mb-3 '>
                    <h5>.4Mb</h5>
                    <span className='w-7 h-7 bg-zinc-600 rounded-full flex items-center justify-center '>

                    <MdOutlineFileDownload size=".7em" color='#fff'/>
                    </span>
                </div>
                <div className="tag w-full py-4 bg-emerald-400 flex items-center justify-center ">
                    <h3 className='text-sm font-semibold  '>Download Now</h3>
                </div>
            </div>

           </div>

  )
}

export default Card