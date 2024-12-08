import React, { Component } from 'react';
import s from './TaskDashboard.module.scss'
import TaskInput from '../TaskInput';
import TaskList from '../TaskList';


class TaskDashboard extends Component {
  state = {
    tasks: [
      { id: 1, text: 'Learn React', completed: false },
      { id: 2, text: 'Learn Formik', completed: true },
    ],
  };

  handleAddTask = (newTaskText) => {
    const newTask = {
      id: this.state.tasks.length + 1,
      text: newTaskText,
      completed: false,
    };

    this.setState((prevState) => ({
      tasks: [...prevState.tasks, newTask],
    }));
  };

  toggleCompletedStatus = (taskId) => {
    const updatedTasks = this.state.tasks.map((task) => {
      if (task.id === taskId) {
        return {
          ...task,
          completed: !task.completed,
        };
      } else {
        return task;
      }
    });
    this.setState({
      tasks: updatedTasks,
    });
  };

  handleDelete = (id) => {
    const updatedTasks = this.state.tasks.filter((task) => task.id !== id);

    this.setState({
      tasks: updatedTasks,
    });
  };

  render() {
    const { tasks } = this.state;

    return (
      <>
        <TaskInput handleAddTask={this.handleAddTask} />
        <TaskList
          tasks={tasks}
          toggleCompletedStatus={this.toggleCompletedStatus}
          handleDelete={this.handleDelete}
        />
      </>
    );
  }
}

export default TaskDashboard;
