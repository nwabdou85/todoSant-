import React from 'react';
import { render } from 'react-dom';
import { Meteor } from 'meteor/meteor';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';

import App from '../imports/ui/App.jsx';

 import One from '../imports/ui/one.jsx';
 import Two from '../imports/ui/two.jsx';
 import Not from '../imports/ui/notfound.jsx';
 import Navigation from '../imports/ui/navigations.jsx';
 // import Inedx from '../imports/ui/idex.jsx';


Meteor.startup(() => {

 render(
 	<Router history = {browserHistory}>
 	      <Route path="/" component={ Navigation }>
	 	      <IndexRoute component={ App } />
		      <Route path="/one" component={ One } />
		      <Route path="/two" component={ Two } />
		      <Route path="*" component={ Not } />
		   </Route>
 	</Router>, 


 	document.getElementById('app'));
}); 
