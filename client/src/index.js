import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Test from './Test';
import EnsureLoggedInContainer from './EnsureLoggedInContainer'
import FacebookLogin from './FacebookLogin';
import {Router, Route, IndexRoute, browserHistory} from 'react-router';

//import './index.css';
/*
ReactDOM.render(
  <App txt="this is the prop text" />,
  //<Login />,
  document.getElementById('root')
);
*/

/*
function requireAuth(nextState, replace, callback){
  console.log(localStorage.fbAccessToken);
  if(!localStorage.fbAccessToken) {
    replace('/login')
  }
  callback();
}
*/

ReactDOM.render((
  <Router history={browserHistory}>
     <Route path="/login" component={FacebookLogin}/>
     <Route component={EnsureLoggedInContainer}>
       <Route path="/" component={App}/>
       <Route path="test" component={Test}/>
     </Route>
  </Router>
), document.getElementById('root'))

/*
const responseFacebook = (response) => {
  console.log(response);
}

ReactDOM.render(
  <FacebookLogin
    appId="252743665168569"
    autoLoad={true}
    fields="name,email,picture"
    //onClick={componentClicked}
    callback={responseFacebook}
    cssClass="my-facebook-button-class"
    icon="fa-facebook"
  />,
  document.getElementById('fb-root')
);
*/