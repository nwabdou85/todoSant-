import React, { Component, PropTypes } from 'react';
import ReactDOM from 'react-dom';
import { createContainer } from 'meteor/react-meteor-data';
 
import { Tasks } from '../api/tasks.js'; 
import Task from './Task.jsx';
import check from './checked.jsx';
 
 import {Navigation} from './navigations.jsx'

// App component - represents the whole app
export default class App extends Component {
  handleSubmit(event) {
    event.preventDefault();
 
    // Find the text field via the React ref
    const text = ReactDOM.findDOMNode(this.refs.textInput).value.trim();

      if (this.props.completCounts < 10) {
           // chaque jour dix taches au max
          Meteor.call('tasks.insert', text);
      }else{

        alert('vous avez atteint votre limite d aujordhui');
        // console.log('vous avez atteint votre limite d aujordhui');
      }
 
    // Clear form
    ReactDOM.findDOMNode(this.refs.textInput).value = '';
  }
 
  renderTasks() {
      let filteredTasks = this.props.tasks;
      filteredTasks = filteredTasks.filter(task => !task.checked);
     return filteredTasks.map((task) => (
      <Task key={task._id} task={task} />
    ));
  }
 
    renderTasksL() {
      let filteredTasks = this.props.tasks;
      filteredTasks = filteredTasks.filter(task => task.checked);
     return filteredTasks.map((task) => (
      <Task key={task._id} task={task} />
    ));
  }


  render() {
    return (

     
      <div className="container">
        <header>
          <h1>Today s Todo health </h1>

           <form className="new-task" onSubmit={this.handleSubmit.bind(this)} >
            <input
              type="text"
              ref="textInput"
              placeholder="Type to add new tasks"
            />
            </form>
          
        </header>

        <h2 className="done" aria-hidden="true"><span>Done</span><span  className="numbre"> ({this.props.completeCount})</span></h2>
        <div className="items">
          {this.renderTasksL()}
        </div>
         
        <h2 className="undone" aria-hidden="true"> <span>Not Done</span><span  className="numbre"> ({this.props.incompleteCount})</span></h2>
        <div className="items">
          {this.renderTasks()}
        </div>
      </div>
    );
  }
}





App.propTypes = {
  tasks: PropTypes.array.isRequired,
  incompleteCount: PropTypes.number.isRequired,
};
 
export default createContainer(() => {
    Meteor.subscribe('tasks');

  return {
    tasks: Tasks.find({}, { sort: { createdAt: -1 } }).fetch(),
    incompleteCount: Tasks.find({ checked: { $ne: true } }).count(),
    completeCount: Tasks.find({ checked: true }).count(),
    completCounts: Tasks.find({}).count(),
  };
}, App);