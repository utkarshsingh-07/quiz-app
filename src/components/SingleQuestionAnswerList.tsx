import { Field, FormikProps } from "formik";
import React, { Fragment } from "react";
import { Choice } from "../types";

type Props = {
  choices: Choice[];
  formik: FormikProps<{
    choice: string;
  }>;
};

const SingleQuestionAnswerList = (props: Props) => {
  console.log(props.formik.getFieldProps("choice"));
  return (
    <>
      {props.choices.map((op, i) => (
        <Fragment key={op.id}>
          <label htmlFor={op.id}>{op.value}</label>
          <Field
            {...props.formik.getFieldProps("choice")}
            type="radio"
            name="choice"
            id={op.id}
            value={op.value}
          />
        </Fragment>
      ))}
    </>
  );
};

export default SingleQuestionAnswerList;
