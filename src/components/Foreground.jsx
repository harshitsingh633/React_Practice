import React, { useRef } from "react";
import Card from "./Card";

function Foreground() {
  
    const ref = useRef(null);

  const data = [
    {
      desc: "lorem ipsum dolor sit amet consectetur adispisicing.",
      filesize: ".9mb",
      close: true,
      tag: { isOpen: true, tagTitle: "Download Now", tagColor: "green" },
    },
    {
      desc: "lorem ipsum dolor sit amet consectetur adispisicing.",
      filesize: ".9mb",
      close: true,
      tag: { isOpen: true, tagTitle: "Download Now", tagColor: "blue" },
    },
    {
      desc: "lorem ipsum dolor sit amet consectetur adispisicing.",
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
