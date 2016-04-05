// import React, { Component, PropTypes } from 'react';
// import ReactDOM from 'react-dom';
// import { createContainer } from 'meteor/react-meteor-data';
 
// import { Tasks } from '../api/tasks.js'; 
// import Task from './Task.jsx';
 
// // App component - represents the whole app
//  class check extends Component {

//   renderTasks() {
//       let filteredTasks = this.props.tasks;
//       filteredTasks = filteredTasks.filter(task => task.checked);
//      return filteredTasks.map((task) => (
//       <Task key={task._id} task={task} />
//     ));
//   }
 
//   render() {
//     return (        
       
//         <div class="items">
//           {this.renderTasks()}
//         </div>

//     );
//   }
// }





// check.propTypes = {
//   tasks: PropTypes.array.isRequired,
//   incompleteCount: PropTypes.number.isRequired,
// };
 
// export default createContainer(() => {
//   return {
//     tasks: Tasks.find({}, { sort: { createdAt: -1 } }).fetch(),
//     incompleteCount: Tasks.find({ checked: true }).count(),
//   };
// }, check);