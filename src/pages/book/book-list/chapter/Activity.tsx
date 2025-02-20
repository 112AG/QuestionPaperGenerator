import angry from "../../../images/angry.png";
import Image from "next/image";
import React, { useState } from "react";
import gifBoom from "../../../images/click.gif";

interface ChapterProps {
  lession: string | number; // Consistently define this
  title: string;
  contents: { Paragraph: string; description: string }[];
  activity?: { question: string; options: string[] }[]; // Optional if used in Activity
}

interface ActivityProps {
  lessions: ChapterProps[]; // Ensure this matches the BookView definition
}

const ChapterActivity = ({ lessions }: ActivityProps) => {
  const [next, setNext] = useState<number>(0);
  const [boom, setBoom] = useState<boolean>(false);

  if (!lessions || lessions.length === 0) {
    return (
      <div className="text-white flex justify-center items-center">
        No lessons available
      </div>
    );
  }

  const activities = lessions[0]?.activity || [];

  if (activities.length === 0) {
    return (
      <div className="text-white flex justify-center items-center">
        No activities available
      </div>
    );
  }
  async function nextHandle() {
    setBoom(true);
    await setTimeout(() => {
      setBoom(false);
      setNext((prev) => (prev + 1 < activityLength ? prev + 1 : prev));
    }, 1800);
  }

  const activityLength = activities.length;

  if (next >= activityLength) {
    return (
      <div className="text-white flex justify-center items-center">
        Development in Progress: Result Section
      </div>
    );
  }

  return (
    <div className="flex flex-col justify-between h-full overflow-hidden gap-8 relative z-10">
      {boom && (
        <Image
          className="z-20 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
          src={gifBoom}
          alt="Example GIF"
          width={500} // Set width
          height={500} // Set height
        />
      )}
      <div className="relative rounded-b-3xl overflow-hidden shadow-xl min-h-[352px] h-[70%] z-10">
        <Image
          className="absolute w-full top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 h-[60%] blur-md"
          src={angry}
          alt="Angry face"
          width={100}
          height={100}
        />
        <div className="flex flex-col justify-between gap-8 relative z-10 bg-[#000000ab] h-full pt-5">
          {" "}
          <div className="px-8 flex">
            <div className="text-sm text-white font-semibold mb-5 text-center line-clamp-1">
              Question-{next + 1}
            </div>
          </div>
          <div className="flex justify-center mb-12">
            <Image src={angry} alt="Angry face" width={100} height={100} />
          </div>
          <div className="text-sm text-stone-50 font-semibold line-clamp-1 px-7 h-20">
            {activities[next]?.question || "No question available"}
          </div>
        </div>
      </div>
      <div className="flex-grow flex flex-col gap-4 px-5 overflow-y-auto pb-5">
        {activities[next]?.options?.map((option, optIndex) => (
          <div
            key={optIndex}
            onClick={() => nextHandle()}
            className="w-full border border-stone-400 text-stone-50 bg-[#3c3b3b38] flex items-center p-3 text-sm line-clamp-2 shadow-2xl rounded-lg min-h-12"
          >
            {option}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ChapterActivity;
