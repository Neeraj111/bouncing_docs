import React from "react";
import { FaRegFileLines } from "react-icons/fa6";
import { PiDownloadSimpleBold } from "react-icons/pi";
import { IoClose } from "react-icons/io5";
import { motion } from "framer-motion";


function Card({ data, reference }) {
  return (
    <motion.div drag dragConstraints={reference} whileDrag={{scale:1.2}} dragElastic={.1} dragTransition={{bounceStiffness:600, bounceDamping:10}} className="relative flex-shrink-0 overflow-hidden w-60 h-72 bg-zinc-700/90 rounded-[40px] text-white px-5 py-10 ">
      <FaRegFileLines />
      <p className=" text-sm leading-tight mt-5">{data.desc}</p>
      <div className="footer absolute bottom-0 w-full left-0">
        <div className="flex items-center justify-between text-zinc-800 px-8 py-3 mt-3">
          <h5 className="text-zinc-300">{data.fileSize}</h5>
          <span className="w-7 h-7 bg-zinc-200 rounded-full flex items-center justify-center ">
            {data.close ? (
              <IoClose />
            ) : (
              <PiDownloadSimpleBold size=".7em" color="#000" />
            )}
          </span>
        </div>
        {/* {data.tag.isopen ? (
          <div className="tag w-full py-4 bg-green-700 flex items-center justify-center">
            <h3 className="text-sm ">Download Now</h3>
          </div>
        ) : null} */}
        {data.tag.isopen && (
          <div className={`tag w-full py-4 ${data.tag.tagColor==="blue"?"bg-blue-600":"bg-green-600"} flex items-center justify-center`}>
            <h3 className="text-sm ">{data.tag.tagTitle}</h3>
          </div>
        )}
      </div>
    </motion.div>
  );
}

export default Card;
