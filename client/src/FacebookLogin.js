import React from 'react';
import FacebookLogin from 'react-facebook-login';

class Login extends React.Component {
    constructor(props) {
        super(props);
        this.responseFacebook = this.responseFacebook.bind(this)
    };

    responseFacebook = (response) => {
        if(response.accessToken){
            localStorage.setItem('fbAccessToken', response.accessToken);
            console.log(response);
        }
        else {
            console.log(response);
        }
    };

    render() {
        return (
            <FacebookLogin
                appId="252743665168569"
                autoLoad={true}
                fields="name,email,picture"
                textButton="fb login"
                //onClick={componentClicked}
                callback={this.responseFacebook}
            />
        )
    }
}

export default Login;