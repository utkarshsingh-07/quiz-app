import React from "react";
import "./ResultPage.css";

type Props = {
  getResult: () => any;
};

const ResultPage = (props: Props) => {
  return (
    <div className="bg-[url('/images/finalpage.jpg')] bg-cover output">
      <div className="text-lg font_style">Congratulations</div>
      <div className="text-base score">Your score is {props.getResult()}%</div>
      <div className="text-base output_last">
        You have successfully self certified your completion of this training.
        click EXIT to close.
      </div>
    </div>
  );
};

export default ResultPage;
