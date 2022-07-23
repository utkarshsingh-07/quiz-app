import { FormikProps } from "formik";
import { Fragment } from "react";
import { Choice } from "../types";

type Props = {
  choices: Choice[];
  formik: FormikProps<{
    choice: string;
  }>;
};

const MultipleQuestionAnswerList = (props: Props) => {
  return (
    <div>
      {props.choices.map((op, i) => (
        <Fragment key={op.id}>
          <label htmlFor={op.id}>{op.value}</label>
          <input type="checkbox" name="choice" id={op.id} />
        </Fragment>
      ))}
    </div>
  );
};

export default MultipleQuestionAnswerList;
