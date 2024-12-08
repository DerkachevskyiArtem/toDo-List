import * as yup from 'yup';

export const TASK_INPUT_SCHEMA = yup.object({
  task: yup
    .string()
    .required('Please enter the task')
    .matches(/^(?!\s*$).+$/, 'Task cannot be empty'),
});
