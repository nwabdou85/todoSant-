import React, { Component, PropTypes } from 'react';
import { Tasks } from '../api/tasks.js';
 import { Meteor } from 'meteor/meteor';

// Task component - represents a single todo item
export default class Task extends Component {
	toggleChecked() {
    // Set the checked property to the opposite of its current value
        Meteor.call('tasks.setChecked', this.props.task._id, !this.props.task.checked);

  }
 
  deleteThisTask() {
    Meteor.call('tasks.remove', this.props.task._id);
  }




  render() {
    
    const taskClassName = this.props.task.checked ? 'checked' : '';

    return (
    	// <input id="item1" type="checkbox" checked>
        <li className={taskClassName}> 
         <button className="delete" onClick={this.deleteThisTask.bind(this)}>
           <i className="fa fa-trash-o"></i>
          </button>
        <input
          type="checkbox"
          id="item1"
          readOnly
          checked={this.props.task.checked}
          onClick={this.toggleChecked.bind(this)} />

        {this.props.task.text} </li>
      // <li>{this.props.task.text}</li>
    );
  }
}
 
Task.propTypes = {
  // This component gets the task to display through a React prop.
  // We can use propTypes to indicate it is required
  task: PropTypes.object.isRequired,
};