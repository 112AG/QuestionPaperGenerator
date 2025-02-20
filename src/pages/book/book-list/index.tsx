import { CLASS_SUBJECT } from "@/utils/data";
import { useRouter } from "next/router";
import BookItems from "../book-items";
import { generateRandomHexColor } from "@/utils/hooks";
import { IoIosArrowBack } from "react-icons/io";

const BookList = () => {
  const router = useRouter();
  const { route }: { route: string } = router.query as { route: string };
  const fielter = CLASS_SUBJECT.filter((item) => item.class === route && item);
  const handleGoBack = () => {
    router.back();
  };
  return (
    <div className="relative">
      <div className="bg-brand/70 h-32 relative w-full z-10">
        <div className="flex justify-between items-center px-4">
          <div className="text-lg text-stone-100 font-bold pt-3 mb-3 underline underline-offset-3">
            Choose a Subject:
          </div>
          <div
            onClick={handleGoBack}
            className="text-sm font-extrabold text-stone-100 flex gap-2 items-center border rounded-md p-1 cursor-pointer"
          >
            <IoIosArrowBack />
            Back
          </div>
        </div>
      </div>
      <div className="bg-white absolute rounded-t-lg w-[95%] mx-auto z-20 top-20 left-1/2 transform -translate-x-1/2">
        <div className="flex flex-wrap mt-2 px-4 box-border gap-4 justify-center pb-6">
          {fielter[0]?.subject.map((item, i) => {
            return (
              <BookItems
                key={i}
                classValue={route}
                title={item.subject}
                image={""}
                colors={generateRandomHexColor()}
                pages={`book-list/chapter?val=${item.subject}&`}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default BookList;
