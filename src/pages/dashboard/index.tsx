import React from "react";
import Header from "../header";
import Books from "../book";
import { BiBook } from "react-icons/bi";
import Slider from "../header/Slider";

const Dashboard = () => {
  return (<div>
     <Header/>
     <Slider/>
     <div className="text-xl font-semibold text-stone-800 flex gap-2 items-center mt-5 px-4"><BiBook className="text-2xl"/>Books</div>
     <Books/>
  </div>);
};

export default Dashboard;
