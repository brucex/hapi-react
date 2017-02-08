import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import FacebookLogin from './FacebookLogin';
//import './index.css';
/*
ReactDOM.render(
  <App txt="this is the prop text" />,
  //<Login />,
  document.getElementById('root')
);
*/

ReactDOM.render(
  <FacebookLogin />,
  document.getElementById('fb-root')
);
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