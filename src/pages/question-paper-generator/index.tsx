import React, { useState } from "react";
import MCQForm from "./mcq-form";
import { CiCirclePlus } from "react-icons/ci";
// import './style.css'

const QuestionPaperGenerator = () => {
  const [mcq, setMcq] = useState([1]);
  console.log(mcq);
  return (
    <div className="bg-zinc-200 h-screen overflow-scroll">
      <div className="text-xl font-extrabold text-stone-800 text-center pt-3 pb-8">
        Paper generator
      </div>
      <form className="px-4">
        {/* Header Section Start*/}
        <div>
          <div className="flex flex-col gap-2">
            <label className="text-stone-800 text-base font-bold text-center">
              School Name
            </label>
            <input
              type="text"
              className="placeholder:text-zinc-200 border-zinc-200 rounded-lg py-2.5 px-5"
              placeholder="School Name:"
            />
          </div>
        </div>
        <div className="flex justify-between items-center pt-5 gap-8 w-full">
          <div className="flex flex-col gap-2">
            <label className="text-stone-800 text-base font-bold text-center">
              Time
            </label>
            <input
              type="text"
              className="placeholder:text-zinc-200 border-zinc-200 rounded-lg py-2.5 px-5"
              placeholder="HH:MM"
            />
          </div>
          <div className="flex flex-col gap-2">
            <label className="text-stone-800 text-base font-bold text-center">
              Marks
            </label>
            <input
              type="text"
              className="placeholder:text-zinc-200 border-zinc-200 rounded-lg py-2.5 px-5"
              placeholder="Enter Total Marks:"
            />
          </div>
        </div>
        {/* Header Section Close*/}

        {mcq.map((item, index) => {
          return (
            <div key={index} className="border border-zinc-500 w-[99%] mx-auto p-2 rounded-lg mt-5 boxShadow">
              <div className="mt-5 w-full">
                <select name={`type${index}`} className="w-full block py-2.5 px-5 rounded-lg">
                  <option value="long">Long Question</option>
                  <option value="sort">Sort Question</option>
                  <option value="mcq">MCQ</option>
                </select>
              </div>
              <MCQForm count={index + 1} setMcq={setMcq} mcq={mcq} />
            </div>
          );
        })}

        {/* Increment and Decrement Buttons*/}
        <div className="flex justify-center mt-8 gap-4">
          <CiCirclePlus
            onClick={() => setMcq([...mcq, mcq.length + 1])}
            className="text-xl text-white cursor-pointer hover:bg-green-500 text-center w-8 h-8 rounded-full p-1 bg-green-600"
          />
        </div>
      </form>
    </div>
  );
};

export default QuestionPaperGenerator;
