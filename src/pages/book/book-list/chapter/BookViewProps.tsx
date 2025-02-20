import React from "react";
import ChapterContentBookType from "./ChapterContentType";
import { IoIosArrowBack } from "react-icons/io";
import ChapterActivity from "./Activity";
import activityBg from "../../../images/activity_bg.png";
import Image from "next/image";
import QuestionPaperGenerator from "@/pages/question-paper-generator";

interface ChapterProps {
  lession: string | number;
  title: string;
  contents: { Paragraph: string; description: string }[];
}

interface FilteredChapters {
  subject: string;
  chapter: ChapterProps[];
}

interface BookViewProps {
  chapter: FilteredChapters;
  val: string;
  route: string;
  lessions: ChapterProps[];
  types: string;
  setType: React.Dispatch<React.SetStateAction<string>>;
}

const BookView: React.FC<BookViewProps> = ({
  val,
  route,
  lessions,
  types,
  setType,
}) => {
  const renderContent = () => {
    switch (types) {
      case "BOOK":
        return (
          <>
            <ChapterHeader
              setType={setType}
              val={val}
              route={route}
              lessions={lessions}
              types={types}
            />
            <ChapterContentBookType lessions={lessions} />
          </>
        );
      case "ACTIVITY":
        return (
          <div className="h-screen relative">
            <Image
              className="absolute w-full h-full"
              src={activityBg}
              alt="dfghjk"
            />
              <ChapterActivity lessions={lessions} />
          </div>
        );
      case "VIDEO":
        return (
          <>
            <ChapterHeader
              setType={setType}
              val={val}
              route={route}
              lessions={lessions}
              types={types}
            />
            <div className="text-center text-white mt-4">
              Coming Soon: Video
            </div>
          </>
        );
      case "PAPER_GENERATOR":
        return (
          <>
            {/* <ChapterHeader
              setType={setType}
              val={val}
              route={route}
              lessions={lessions}
              types={types}
            /> */}
            <QuestionPaperGenerator/>
          </>
        );
      default:
        return (
          <div className="text-center text-red-500">
            Type not matched. Please go back and try again.
          </div>
        );
    }
  };

  return <>{renderContent()}</>;
};

interface ChapterViewProps {
  val: string;
  route: string;
  lessions: ChapterProps[];
  types: string;
  setType: React.Dispatch<React.SetStateAction<string>>;
}

const ChapterHeader: React.FC<ChapterViewProps> = ({
  types,
  setType,
  lessions,
  val,
  route,
}) => {
  const currentLession = lessions?.[0] ?? null;

  return (
    <div className="bg-white shadow-md sticky top-0 z-10">
      <div className="text-center text-lg font-bold mb-4">{types}</div>
      <div className="px-4 pt-2">
        <div className="flex justify-between items-center">
          <div className="text-sm font-extrabold text-stone-800 flex gap-4 border rounded-sm py-1 px-2 mb-2">
            {val} {route} ::
          </div>
          <button
            onClick={() => setType("")}
            className="text-sm font-extrabold text-stone-800 flex gap-2 items-center border rounded-md p-1 cursor-pointer hover:bg-gray-100"
          >
            <IoIosArrowBack />
            Back
          </button>
        </div>
        <div className="text-sm text-stone-800 font-semibold pl-1 text-center underline underline-offset-4 mb-3">
          Chapter - {currentLession?.lession ?? "N/A"}:
        </div>
        <div className="text-sm font-extrabold mb-5 line-clamp-1 border-b border-b-stone-100 pb-3">
          {currentLession?.title || "Title Not Available"}
        </div>
      </div>
    </div>
  );
};

export default BookView;
