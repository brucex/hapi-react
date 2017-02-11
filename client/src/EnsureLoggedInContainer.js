import {browserHistory} from 'react-router';
import React from 'react';

class EnsureLoggedInContainer extends React.Component {  
    componentDidMount() {
        const { dispatch, currentURL } = this.props

        if (!requireAuth()) {
        // set the current url/path for future redirection (we use a Redux action)
        // then redirect (we use a React Router method)
        //dispatch(setRedirectUrl(currentURL))
        browserHistory.replace("/login")
        }
  }

  render() {
    if (requireAuth()) {
      console.log("props "+this.props.children);
      return this.props.children
    } else {
      return null
    }
  }
}

function requireAuth(){
  console.log(localStorage.fbAccessToken);
  if(!localStorage.fbAccessToken) {
    return false;
  }
  else return true;
  
}

export default EnsureLoggedInContainer