import React, { useState } from "react";
import Question from "./components/Question";
import LandingPage from "./pages/LandingPage";
import LearningObjective from "./pages/LearningObjective";
import ResultPage from "./pages/ResultPage";
import { PageList, Question as QuestionType } from "./types";

const DUMMY_DATA: QuestionType[] = [
  {
    id: "1",
    question: "Inside which HTML element do we put the JavaScript?",
    type: "single",
    choices: [
      { id: "11", value: "<scripting>" },
      { id: "12", value: "<js>" },
      { id: "13", value: "<script>" },
      { id: "14", value: "<javascript>" },
    ],
    answer: "<script>",
  },
  {
    id: "2",
    question: "Select the primitive datattypes in javascript?",
    type: "multiple",
    choices: [
      { id: "21", value: "Boolean" },
      { id: "22", value: "Array" },
      { id: "23", value: "Object" },
      { id: "24", value: "String" },
    ],
    answer: ["Boolean", "String"],
  },
  {
    id: "3",
    question: "Where is the correct place to insert a JavaScript?",
    type: "single",
    choices: [
      { id: "31", value: "The <head> section" },
      { id: "32", value: "The <body>> section" },
      { id: "33", value: "None" },
      {
        id: "34",
        value: "Both the <head> section and <body> section are correct",
      },
    ],
    answer: "Both the <head> section and <body> section are correct",
  },
  {
    id: "4",
    question: "What are Semantic Elements tags?",
    type: "multiple",
    choices: [
      { id: "41", value: "<article>" },
      { id: "42", value: "<details>" },
      { id: "43", value: "<summary>" },
      { id: "44", value: "<String>" },
    ],
    answer: ["<article>", "<details>", "<summary>"],
  },
];

function App() {
  const [page, setPage] = useState<PageList>("LandingPage");
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [userAnswers, setUserAnswers] = useState<{
    [key: string]: string | string[];
  }>({});

  const getResult = () => {
    let result = 0;
    DUMMY_DATA.forEach((value) => {
      const answer = userAnswers[value.id];
      if (value.type === "single") {
        if (value.answer === answer) result++;
      } else {
        let valid = true;
        if ((answer as string[]).length !== value.answer.length) return;
        (answer as string[]).forEach((ans) => {
          if (!(value.answer as string[]).includes(ans)) {
            valid = false;
          }
        });
        if (valid) result++;
      }
    });
    const score = result / DUMMY_DATA.length;
    console.log(score, result);
    return score * 100;
  };

  const changePage = (value: PageList) => {
    setPage(value);
  };

  const decrementQuestion = () => {
    setCurrentQuestion((prev) => (prev > 0 ? prev - 1 : prev));
  };

  const incrementQuestion = () => {
    setCurrentQuestion((prev) => prev + 1);
  };

  const addUserAnswer = (value: { id: string; choice: string | string[] }) => {
    setUserAnswers((prev) => {
      const obj = { ...prev };
      obj[value.id] = value.choice;
      return obj;
    });
  };

  return (
    <div>
      {page === "LandingPage" && <LandingPage changePage={changePage} />}
      {page === "LearningObjective" && (
        <LearningObjective changePage={changePage} />
      )}
      {page === "QuestionPage" && currentQuestion < DUMMY_DATA.length && (
        <Question
          changePage={changePage}
          isFirst={currentQuestion === 0}
          isLast={currentQuestion === DUMMY_DATA.length - 1}
          question={DUMMY_DATA[currentQuestion]}
          incrementQuestion={incrementQuestion}
          decrementQuestion={decrementQuestion}
          addAnswer={addUserAnswer}
          answers={userAnswers}
        />
      )}
      {page === "ResultPage" && currentQuestion < DUMMY_DATA.length && (
        <ResultPage getResult={getResult} />
      )}
    </div>
  );
}

export default App;
