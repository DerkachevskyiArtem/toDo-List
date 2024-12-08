import React from 'react';
import classNames from 'classnames';
import s from './TaskItem.module.scss';

function TaskItem(props) {
  const {
    task: { id, text, completed },
    toggleCompletedStatus,
    handleDelete,
  } = props;

  return (
    <li
      className={classNames(s.taskItem, {
        [s.completed]: completed,
      })}
    >
      <p className={s.taskText}>{text}</p>

      <input
        type="checkbox"
        className={s.checkbox}
        checked={completed}
        onChange={() => toggleCompletedStatus(id)}
      />

      <button
        type="button"
        className={s.deleteButton}
        onClick={() => handleDelete(id)}
      >
        Delete
      </button>
    </li>
  );
}

export default TaskItem;
