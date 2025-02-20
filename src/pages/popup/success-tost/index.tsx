import { RxCrossCircled } from "react-icons/rx";

interface ErrorTostProps {
  message: string;
  setFormStatus: (status: boolean) => void;
}

const SuccessTost = ({ message, setFormStatus }: ErrorTostProps) => {
  return (
    <div className="w-[65%] py-2 px-4 text-stone-500 bg-green-700 flex justify-between items-center gap-4">
      <div className="truncate">{message}</div>
      <RxCrossCircled
        onClick={() => setFormStatus(false)}
        className="text-xl text-white cursor-pointer"
      />
    </div>
  );
};


export default SuccessTost;
