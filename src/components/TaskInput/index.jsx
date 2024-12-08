import React from 'react';
import classNames from 'classnames';
import s from './TaskInput.module.scss';
import { Field, Formik, Form, ErrorMessage } from 'formik';
import { TASK_INPUT_SCHEMA } from '../../validation';

function TaskInput({ handleAddTask }) {
  const handleSubmit = (values, formikBag) => {
    handleAddTask(values.task);
    formikBag.resetForm();
  };

  return (
    <Formik
      initialValues={{ task: '' }}
      onSubmit={(values, formikBag) => {
        handleSubmit(values, formikBag);
      }}
      validationSchema={TASK_INPUT_SCHEMA}
    >
      {({ errors, touched }) => (
        <Form className={s.formInput}>
          <Field
            as="textarea"
            name="task"
            placeholder="Enter your task..."
            className={classNames(s.textarea, {
              [s.error]: errors.task && touched.task,
            })}
          />
          <ErrorMessage
            name="task"
            component="div"
            className={s.errorMessage}
          />
          <button type="submit" className={s.button}>
            Add Task
          </button>
        </Form>
      )}
    </Formik>
  );
}

export default TaskInput;
