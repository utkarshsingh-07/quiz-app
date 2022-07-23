export type PageList =
  | "LandingPage"
  | "LearningObjective"
  | "QuestionPage"
  | "ResultPage";
export type Question = {
  id: string;
  question: string;
  type: "single" | "multiple";
  choices: Choice[];
  answer: string | string[];
};
export type Choice = {
  id: string;
  value: string;
};
