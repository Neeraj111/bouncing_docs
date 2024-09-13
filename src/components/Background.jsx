import React from "react";

function Background() {
  return (
    <>
    <div className="w-full h-screen fixed z-[2]">

      <div 
      className=" absolute top-[3%] w-full p-10 flex
       justify-center text-zinc-600 text-[2vh] font-semibold">
        Documents
      </div>
      <h1
        className="font-semibold text-zinc-300 
      absolute text-[13vh] leading-none tracking-tighter
       top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%]"
      >
        Docs.
      </h1>
              
    </div>
    </>
  );
}

export default Background;
