import React from "react";
import BookItems from "./book-items";
import radheKrishna from "../images/radheKrishna.jpeg";
import hindi from "../images/hindi.jpeg";
import english from "../images/english.jpeg";
import story from "../images/story.jpeg";
import company from "../images/company.jpeg";
import { generateRandomHexColor } from "@/utils/hooks";

const bookList = [
  {
    class: "class-1",
    title: "Radhe Krishna",
    image: radheKrishna,
  },
  {
    class: "class-2",
    title: "Hindi",
    image: hindi,
  },
  {
    class: "class-3",
    title: "English",
    image: english,
  },
  {
    class: "class-4",
    title: "Story",
    image: story,
  },
  {
    class: "class-5",
    title: "Company",
    image: company,
  },
  {
    class: "class-6",
    title: "Company",
    image: company,
  },
  {
    class: "class-7",
    title: "Company",
    image: company,
  },
  {
    class: "class-8",
    title: "Company",
    image: company,
  },
];
const Books = () => {
  return (
    <div className="flex flex-wrap mt-2 px-4 box-border gap-4 justify-center pb-6">
      {bookList?.map((item, i) => (
        <BookItems
          key={i}
          classValue={item.class}
          title={""}
          image={""}
          colors={generateRandomHexColor()}
          pages={`book/book-list?val=${item.class}&`}
        />
      ))}
    </div>
  );
};

export default Books;
