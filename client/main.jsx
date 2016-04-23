import React from 'react';
import { render } from 'react-dom';
import { Meteor } from 'meteor/meteor';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import { createContainer } from 'meteor/react-meteor-data';


import App from '../imports/ui/App.jsx';

 import One from '../imports/ui/one.jsx';
 import Two from '../imports/ui/two.jsx';
  import Login from '../imports/ui/login.jsx';
 import Not from '../imports/ui/notfound.jsx';
 import Navigation from '../imports/ui/navigations.jsx';
 import '../imports/startup/accounts-config.js';
 // import Inedx from '../imports/ui/idex.jsx';


Meteor.startup(() => {

	const  requireAuth = function requireAuth(nextState, replace) {
    if (!Meteor.user()) {
        replace({
            pathname: '/login',
            state: { nextPathname: nextState.location.pathname }
        })
    }
}

const  requireNotAuthed = function requireNotAuthed(nextState, replace) {
    if (Meteor.user()) {
        replace({
            pathname: '/',
        })
    }
}

 render(
 	<Router history = {browserHistory}>
 	      <Route path="/" component={ Navigation } onChange={requireAuth}>
	 	      <IndexRoute component={ App } onEnter={requireAuth} />
		      <Route path="/one" component={ One } onEnter={requireAuth} />
		      <Route path="/two" component={ Two } onEnter={requireAuth} />
		      <Route path="/login" component={Login} />
		      <Route path="*" component={ Not } onEnter={requireAuth} />
		   </Route>
 	</Router>, 


 	document.getElementById('app'));
}); 



