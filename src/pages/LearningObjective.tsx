import React from "react";
import { PageList } from "../types";
import "./LearningObjective.css";

type Props = {
  changePage: (value: PageList) => void;
};

const LearningObjective = (props: Props) => {
  return (
    <div className="bg-[url('/images/objectives.jpg')] bg-cover">
      <div className="learning_objective">
        <h1 className="text-lg">Learning Objectives</h1>
        <h3 className="text_first">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. In velit est,
          placerat in consequat vitae, porttitor eget dui.
        </h3>
        <ul className="list-disc">
          <li className="text-white">
            Mauris volutpat augue pellentesque eros convallis ornare sed at
            nisi. Cras sodales libero ultricies ex scelerisque
          </li>
          <br />
          <li className="text-white">
            Mauris volutpat augue pellentesque eros convallis ornare sed at
            nisi. Cras sodales libero ultricies ex scelerisque
          </li>
          <br />
          <li className="text-white">
            Mauris volutpat augue pellentesque eros convallis ornare sed at
            nisi. Cras sodales libero ultricies ex scelerisque
          </li>
          <br />
        </ul>
        <button
          className="btn_start"
          onClick={() => props.changePage("QuestionPage")}
        >
          NEXT
        </button>
      </div>
    </div>
  );
};

export default LearningObjective;
