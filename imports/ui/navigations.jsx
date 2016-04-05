import  React from 'react';
import { IndexLink, Link} from 'react-router';
import { Meteor } from 'meteor/meteor';

export const Navigation = () => (
    <ul>
      <li id="li"><IndexLink to="/" activeClassName="active">Accuiel</IndexLink></li>
      <li id="li"><Link to="/one" activeClassName="active">About us</Link></li>
      <li id="li"><Link to="/two" activeClassName="active">C est à vous</Link></li>

     </ul>
)