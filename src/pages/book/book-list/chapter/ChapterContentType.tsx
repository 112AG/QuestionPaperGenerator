import React from "react";

interface ChapterProps {
  lession: string | number;
  title: string;
  contents: { Paragraph: string; description: string }[];
}

interface BookViewProps {
  lessions: ChapterProps[];
}

const ChapterContentBookType: React.FC<BookViewProps> = ({
    lessions,
    }) => {
  const currentLession = lessions?.[0];
  return (
    <div className="pb-4">
        <div className="flex flex-col gap-5 px-4">
          {currentLession?.contents?.map((item, index) => (
            <div key={index} className="flex flex-col">
              <div className="text-stone-800 font-normal text-base mb-2">
                {item.Paragraph}
              </div>
              <div className="text-sm font-light text-stone-500">
                {item.description}
              </div>
            </div>
          ))}
        </div>
    </div>
  );
};

export default ChapterContentBookType;
