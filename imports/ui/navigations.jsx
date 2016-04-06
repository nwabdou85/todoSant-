import React, { Component} from 'react';
import { IndexLink, Link} from 'react-router';
import { Meteor } from 'meteor/meteor';



export default class Navigation extends Component {

  render() {
    

    return (

	<div>
	    <ul
         style={{textAlign:'center'}}
	    >
	      <li id="li"><IndexLink to="/" activeClassName="active"> Home </IndexLink></li>
	      <li id="li"><Link to="/two" activeClassName="active"> Graphe </Link></li>
	      <li id="li"><Link to="/one" activeClassName="active">About us</Link></li>

	     </ul>
      {this.props.children}
     </div>
      
    );
  }
}
