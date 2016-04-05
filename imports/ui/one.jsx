import React, {Component} from 'react';
import { Meteor } from 'meteor/meteor';
 import {Navigation} from './navigations.jsx'


// export const One = () => <h3> hola my name is one </h3>;


export default class One extends Component {

  render() {
    

    return (
      
      <h3> 
       <Navigation />
      it s me number one</h3>
    );
  }
}
 