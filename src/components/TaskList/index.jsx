import React, { Component } from 'react';
import TaskItem from '../TaskItem';
import s from './TaskList.module.scss';

class TaskList extends Component {
  render() {
    const { tasks, toggleCompletedStatus, handleDelete } = this.props;
    return (
      <ul className={s.list}>
        {tasks.length === 0 ? (
          <li className={s.noTasks}>You haven't added any tasks yet</li>
        ) : (
          tasks.map((task) => (
            <TaskItem
              key={task.id}
              task={task}
              toggleCompletedStatus={toggleCompletedStatus}
              handleDelete={handleDelete}
            />
          ))
        )}
      </ul>
    );
  }
}

export default TaskList;
