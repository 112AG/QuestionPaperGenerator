import React from "react";
import { CiCircleMinus } from "react-icons/ci";


const MCQForm = ({ count, setMcq , mcq}: any) => {
    console.log("mcq", mcq)
    const removeMcqHandler=()=>{
        console.log("Handler triggered.", mcq)
        setMcq(mcq.slice(0, -1))
    }
  return (
    <div className="flex flex-col gap-3 mt-5">
      <div className="flex gap-2 items-center">
        <div className="flex gap-2 items-center w-full">
          <input
            type="text"
            name={`name_mcq${count}`}
            className="placeholder:text-zinc-200 border-zinc-200 rounded-lg py-2.5 px-5 flex-grow block"
            placeholder="Enter Question:"
          />
          <input
            type="text"
            name={`name_mcq_marks${count}`}
            className="placeholder:text-zinc-200 border-zinc-200 rounded-lg py-2.5 px-5"
            placeholder="Enter Marks"
          />
        </div>
      </div>
      <div className="w-full">
        <input
          type="text"
          name={`name_mcq_marks${count}`}
          className="placeholder:text-zinc-200 border-zinc-200 rounded-lg py-2.5 px-5 w-full"
          placeholder="Option"
        />
      </div>
      <div className="flex justify-center">
        <CiCircleMinus onClick={removeMcqHandler} className="text-xl text-white cursor-pointer hover:bg-red-500 text-center w-8 h-8 rounded-full p-1 bg-red-600" />
      </div>
    </div>
  );
};

export default MCQForm;
