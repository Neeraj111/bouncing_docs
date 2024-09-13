import React, { useRef } from "react";
import Card from "./Card";

function Foreground() {
    const ref = useRef(null)
    const data=[
        {
            desc:"This is a card conaining some data which could be available or could be close",
            fileSize:"0.9mb",
            close: false,
            tag:{isopen: true, tagTitle:"Download Now", tagColor:"green"},
        },
        {
            desc:"This is a card conaining some data which could be available or could be close",
            fileSize:"0.9mb",
            close: false,
            tag:{isopen: true, tagTitle:"upload", tagColor:"blue"},
        },
        {
            desc:"This is a card conaining some data which could be available or could be close",
            fileSize:"0.9mb",
            close: false,
            tag:{isopen: true, tagTitle:"Download Now", tagColor:"yellow"},
        },
        {
            desc:"This is a card conaining some data which could be available or could be close",
            fileSize:"0.9mb",
            close: false,
            tag:{isopen: true, tagTitle:"Download Now", tagColor:"red"}
        }
    ]
  return (
    <div ref={ref} className="fixed top-0 left-0 z-[3] w-full h-full gap-10 flex flex-wrap p-5">
        {data.map((item, index)=>(
            <Card data={item} reference={ref}/>
        ))}
    </div>
  );
}

export default Foreground;
