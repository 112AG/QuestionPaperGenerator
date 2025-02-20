import { useEffect } from "react";
import { RxCrossCircled } from "react-icons/rx";

interface ErrorTostProps {
    message: string;
    setFormStatus: (status: boolean) => void;
  }

const ErrorTost = ({ message, setFormStatus }: ErrorTostProps) => {
  useEffect(() => {
    let timer = setTimeout(() => {
      setFormStatus(false);
    },5000)
  
    return () => {
      clearTimeout(timer)
    }
  }, [setFormStatus])
  
    return (
      <div className="max-w-[360px] w-[65%] py-2 px-4 text-stone-100 bg-red-500 rounded border border-red-700 flex justify-between items-center gap-4 absolute right-3 top-3 shadow-xl err-slide">
        <div className="truncate">{message}</div>
        <RxCrossCircled
          onClick={() => setFormStatus(false)}
          className="text-[24px] font-bold text-white cursor-pointer"
        />

        <style jsx>{`
        .err-slide{
          animation: slider 5s ease;
        }

        @keyframes slider {
          0% {
            transform: translateX(100%);
            opacity: 0;
          }
          15% {
            transform: translateX(0);
            opacity: 1;
          }
          85% {
            transform: translateX(0);
            opacity: 1;
          }
          100% {
            transform: translateX(100%);
            opacity: 0;
          }
        }
        `}</style>


      </div>
    );
  };

  export default ErrorTost;