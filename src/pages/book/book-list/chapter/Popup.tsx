import { generateRandomHexColor } from "@/utils/hooks";
import React, { useState } from "react";
import { RxCross1 } from "react-icons/rx";
import { LuBookMinus, LuGamepad2 } from "react-icons/lu";
import { MdOndemandVideo } from "react-icons/md";
import { FaRegNewspaper } from "react-icons/fa6";
import BookView from "./BookViewProps";

interface ChapterProps {
  lession: string | number;
  title: string;
  contents: { Paragraph: string; description: string }[];
}

interface FilteredChapters {
  subject: string;
  chapter: {
    lession: string | number;
    title: string;
    contents: {
      Paragraph: string;
      description: string;
    }[];
  }[];
}

interface ChapterPopupProps {
  setIsChapterSelected: React.Dispatch<React.SetStateAction<boolean>>;
  chapter: FilteredChapters;
  val: string;
  route: string;
  lessions: ChapterProps[];
}

const ChapterPopup: React.FC<ChapterPopupProps> = ({
  chapter,
  val,
  route,
  lessions,
  setIsChapterSelected,
}) => {
  const [type, setType] = useState<string>("");

  return (
    <div>
      {type === "" ? (
        <div className="absolute bg-stone-100 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full min-h-full flex justify-center items-center">
          <div className="min-h-[80%] bg-white w-4/5 p-2 rounded-sm shadow-stone-800/20 shadow-2xl">
            <div className="flex justify-between items-center pb-2 mb-4 border-b border-b-slate-300">
              <h3 className="text-lg font-semibold">Chapter Popup</h3>
              <button
                onClick={() => setIsChapterSelected(false)}
                className="p-1 rounded-full hover:bg-gray-200"
              >
                <RxCross1 className="text-xl" />
              </button>
            </div>
            <div className="flex flex-col gap-4">
              <PopupOption
                label="Read"
                icon={<LuBookMinus />}
                setType={setType}
                typeValue="BOOK"
              />
              <PopupOption
                label="Activity"
                icon={<LuGamepad2 />}
                setType={setType}
                typeValue="ACTIVITY"
              />
              <PopupOption
                label="Video"
                icon={<MdOndemandVideo />}
                setType={setType}
                typeValue="VIDEO"
              />
              <PopupOption
                label="Paper Generator"
                icon={<FaRegNewspaper />}
                setType={setType}
                typeValue="PAPER_GENERATOR"
              />
            </div>
          </div>
        </div>
      ) : (
        <BookView
          setType={setType}
          val={val}
          route={route}
          lessions={lessions}
          types={type}
          chapter={chapter}
        />
      )}
    </div>
  );
};

interface PopupOptionProps {
  label: string;
  icon: React.ReactNode;
  setType: React.Dispatch<React.SetStateAction<string>>;
  typeValue: string;
}

const PopupOption: React.FC<PopupOptionProps> = ({
  label,
  icon,
  setType,
  typeValue,
}) => {
  return (
    <button
      onClick={() => setType(typeValue)}
      className="text-stone-800 py-3 px-4 rounded-md shadow-lg flex items-center gap-2 transition-transform transform hover:scale-105"
      style={{ background: generateRandomHexColor() }}
    >
      {icon}
      {label}
    </button>
  );
};

export default ChapterPopup;
