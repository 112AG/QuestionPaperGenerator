import { CLASS_SUBJECT } from "@/utils/data";
import { generateRandomHexColor } from "@/utils/hooks";
import { useRouter } from "next/router";
import React, { useState } from "react";
import { IoIosArrowBack } from "react-icons/io";
import ChapterPopup from "./Popup";

interface ChapterProps {
  lession: string | number;
  title: string;
  contents: { Paragraph: string; description: string }[];
}

const Chapter: React.FC = () => {
  const router = useRouter();
  const [selectedChapterIndex, setSelectedChapterIndex] = useState<number>(0);
  const [isChapterSelected, setIsChapterSelected] = useState<boolean>(false);
  const [lessions, setLessions] = useState<ChapterProps[]>([]);

  const { val, route } = router.query;

  // Filter subjects based on class and subject
  const filteredSubjects =
    CLASS_SUBJECT?.filter((item) => item.class === route) || [];
  const filteredChapters =
    filteredSubjects[0]?.subject?.filter((subj) => subj.subject === val) || [];
  const selectedChapter = filteredChapters[selectedChapterIndex];

  // Populate lessons for a given chapter
  const postLession = (lession: string | number) => {
    const getLession = filteredChapters[0]?.chapter?.filter(
      (item) => item.lession === lession
    );
    setLessions(getLession || []);
  };

  // Navigate back to the previous page
  const handleGoBack = () => {
    router.back();
  };

  // Handle popup display for selected chapter
  const handlePopup = (index: number, lession: string | number) => {
    setSelectedChapterIndex(index);
    setIsChapterSelected(true);
    postLession(lession);
  };

  return (
    <>
      {!isChapterSelected ? (
        <div className="pt-3 px-4">
          <div className="flex justify-between">
            <div>
              <div className="text-sm font-semibold mb-1 capitalize">
                {route || "Unknown Route"}
              </div>
              <div className="text-sm font-medium mb-4">Select a Lesson:</div>
            </div>
            <div
              onClick={handleGoBack}
              className="text-sm font-extrabold text-stone-800 flex gap-2 items-center border rounded-md p-1 cursor-pointer max-h-8"
            >
              <IoIosArrowBack />
              Back
            </div>
          </div>
          {filteredChapters[0]?.chapter?.length ? (
            filteredChapters[0].chapter.map((chapter, index) => (
              <div
                key={chapter.lession}
                className="text-stone-800 py-3 px-4 rounded-md shadow-lg mb-5"
                style={{ background: generateRandomHexColor() }}
                onClick={() => handlePopup(index, chapter.lession)}
              >
                Lesson - {chapter.lession}
              </div>
            ))
          ) : (
            <div className="text-sm text-gray-500">
              No chapters available for the selected subject.
            </div>
          )}
        </div>
      ) : (
        <ChapterPopup
          chapter={selectedChapter}
          setIsChapterSelected={setIsChapterSelected}
          val={val as string}
          route={route as string}
          lessions={lessions}
        />
      )}
    </>
  );
};

export default Chapter;
