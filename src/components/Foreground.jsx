import React, { useRef } from "react";
import Card from "./card";

function Foreground() {
  
    const ref = useRef(null);

  const data = [
    {
      desc: "Basic React Project.",
      filesize: ".9mb",
      close: true,
      tag: { isOpen: true, tagTitle: "Download Now", tagColor: "green" },
    },
    {
      desc: "Inspiration Sheriyans Coding School",
      filesize: ".9mb",
      close: true,
      tag: { isOpen: true, tagTitle: "Download Now", tagColor: "blue" },
    },
    {
      desc: "Cool Hovering Effect",
      filesize: ".9mb",
      close: true,
      tag: { isOpen: true, tagTitle: "Upload3t", tagColor: "green" },
    },
  ];
  return (
    <div ref={ref} className="fixed z-[3] top-0 left-0 h-full w-full flex gap-10 flex-wrap p-5">
      {data.map((item, index) => (
        <Card data={item} reference={ref} />
      ))}
    </div>
  );
}

export default Foreground;
