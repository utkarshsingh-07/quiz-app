import React, { Fragment } from "react";
import { Field, Formik } from "formik";
import { PageList, Question as QuestionType } from "../types";
import "./Question.css";

type Props = {
  question: QuestionType;
  incrementQuestion: () => void;
  decrementQuestion: () => void;
  addAnswer: (value: { id: string; choice: string | string[] }) => void;
  isLast: boolean;
  isFirst: boolean;
  changePage: (value: PageList) => void;
  answers: {
    [key: string]: string | string[];
  };
};

const Question = (props: Props) => {
  return (
    <div className="bg-[url('/images/kc.jpg')] bg-cover">
      <div className="question_container">
        <h1 className="text-lg">Knowledge Check questions:</h1>
        <h2 className="text-base">
          <div>
            <span className="question_number">{props.question.id}.</span>
            {props.question.question}
          </div>
        </h2>
        <Formik
          key={props.question.id.toString()}
          initialValues={{ choice: props.answers[props.question.id] ?? "" }}
          onSubmit={(values) => {
            props.addAnswer({ id: props.question.id, choice: values.choice });
            if (props.isLast) props.changePage("ResultPage");
            else props.incrementQuestion();
          }}
        >
          {(formik) => (
            <form onSubmit={formik.handleSubmit}>
              {props.question.type === "single"
                ? props.question.choices.map((op) => (
                    <div className="radio_option flex item-center">
                      <Fragment key={op.id}>
                        <Field
                          type="radio"
                          {...formik.getFieldProps("choice")}
                          name="choice"
                          id={op.id}
                          value={op.value}
                        />
                        <label
                          htmlFor={op.id}
                          className="label_radio flex items-center"
                        >
                          {op.value}
                        </label>
                      </Fragment>
                    </div>
                  ))
                : props.question.choices.map((op) => (
                    <div className="checkbox_option">
                      <Fragment key={op.id}>
                        <div className="flex items-center">
                          <Field
                            {...formik.getFieldProps("choice")}
                            type="checkbox"
                            name="choice"
                            id={op.id}
                            value={op.value}
                          />
                          <label
                            htmlFor={op.id}
                            className="label_radio flex items-center"
                          >
                            {op.value}
                          </label>
                        </div>
                      </Fragment>
                    </div>
                  ))}
              <button className="btn_answer_submit" type="submit">
                Submit
              </button>
            </form>
          )}
        </Formik>
      </div>
      <div>
        {!props.isLast && (
          <div className="float-right">
            <div className="arrow_align_right">
              <button
                className="text-white bg-gray-700 focus:ring-4 focus:outline-none font-medium rounded-full text-sm p-2.5 text-center items-center"
                onClick={() => props.incrementQuestion()}
              >
                <svg
                  aria-hidden="true"
                  className="w-4 h-4"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  ></path>
                </svg>
                <span className="sr-only">Icon description</span>
              </button>
            </div>
          </div>
        )}
        {!props.isFirst && (
          <div className="float-right">
            <div className="arrow_align_left">
              <button
                className="text-white bg-gray-700 focus:ring-4 focus:outline-none font-medium rounded-full text-sm p-2.5 text-center items-center"
                onClick={() => props.decrementQuestion()}
              >
                <svg
                  aria-hidden="true"
                  className="w-4 h-4 arrow"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  ></path>
                </svg>
                <span className="sr-only">Icon description</span>
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Question;
