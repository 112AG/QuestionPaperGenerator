import Image from "next/image";
import React, { useContext, useState } from "react";
import loginHero from "../images/login-hero.png";
import { MdOutlineEmail } from "react-icons/md";
import { MdLockOutline } from "react-icons/md";
import { MdLogin } from "react-icons/md";
import { IoMdEye } from "react-icons/io";
import { useRouter } from "next/router";
import ErrorTost from "../popup/error-tost";
import { LOGIN } from "@/utils/data";
import { AppContext } from "../AppContextProvider";

const Login = () => {
  const [HSPass, setHSPass] = useState<boolean>(false);
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [formStatus, setFormStatus] = useState<boolean>(false);
  const [emailData, setEmailData] = useState<string>("");
  const [passwordData, setPasswordData] = useState<string>("");
  const [auth, setAuth] = useState<string>("");
  const router = useRouter();

  const {setFirstLetter} = useContext(AppContext);


  const dedaError = (meg: string) => {
    setAuth(meg);
    setFormStatus(true);
  };

  const mailFun = (e: React.ChangeEvent<HTMLInputElement>): void=> {
    const { value } = e.target;
    setEmailData(value);
  };
  const hideShowIcon = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const { value } = e.target;
    if (value !== "") {
      setHSPass(true);
    } else {
      setHSPass(false);
    }
    setPasswordData(value);
  };
  const submited = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    if (emailData !== "" && passwordData !== "") {
      const validate = LOGIN?.filter((item) => {
        if (item?.email === emailData && item?.password === passwordData) {
          return item?.token;
        } else {
          return null;
        }
        return null;
      });
      if(validate[0]?.token !== undefined)
         {router.push("/dashboard")
          setFirstLetter(emailData)
         }
      else
         dedaError("Please enter correct email or password");
    } else {
      dedaError("Please fill in all fields");
    }
  };
  return (
    <div className="relative">
      {/* <h1 className="font-bold text-[38px] text-center py-2 text-transparent bg-clip-text bg-gradient-to-r from-[#749273] via-[#FCC564] to-[#F75D3B] top-head">Welcome Back!</h1> */}
      {formStatus && <ErrorTost setFormStatus={setFormStatus} message={auth} />}
      <Image
        className="w-[calc(100%-50px)] mx-auto py-2"
        alt="login-hero"
        src={loginHero}
      />
      <form className="px-12" onSubmit={submited}>
        <div className="border rounded-lg hover:shadow-md transition flex items-center gap-2 mb-4 overflow-hidden pl-2">
          <MdOutlineEmail className="text-2xl text-brand" />
          <input
            className="flex-grow py-3 px-2 block rounded-lg "
            type="text"
            placeholder="Enter email:"
            onChange={(e) => mailFun(e)}
          />
        </div>
        <div className="border rounded-lg hover:shadow-md transition flex items-center gap-2 overflow-hidden pl-2 mb-7 relative">
          <MdLockOutline className="text-2xl text-brand" />
          <input
            type={showPassword ? "text" : "password"}
            className="flex-grow py-3 px-2 block rounded-lg"
            placeholder="Enter password:"
            onChange={(e) => hideShowIcon(e)}
          />
          {HSPass && (
            <IoMdEye
              onClick={() => setShowPassword(!showPassword)}
              className="absolute  text-2xl right-3 top-1/2 transform -translate-y-1/2 cursor-pointer hover:opacity-85"
            />
          )}
        </div>
        <div className="flex justify-center">
          <button className="py-2 px-5 rounded-lg bg-brand text-white text-xl font-medium flex items-center hover:opacity-85 gap-2">
            Login <MdLogin className="text-2xl" />
          </button>
        </div>
      </form>

    </div>
  );
};

export default Login;
