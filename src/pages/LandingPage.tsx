import React from "react";
import { PageList } from "../types";
import "./LandingPage.css";
type Props = {
  changePage: (value: PageList) => void;
};

const LandingPage = (props: Props) => {
  return (
    <div className="bg-[url('/images/intro.jpg')] bg-cover">
      <div className="content_landing">
        <h1 className="text-xl">
          Lorem ipsum Neque poro quiesnam est qui dolorem
        </h1>
        <button
          className="btn_start"
          onClick={() => props.changePage("LearningObjective")}
        >
          START
        </button>
      </div>
    </div>
  );
};

export default LandingPage;
