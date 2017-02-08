import React from 'react';
import FacebookLogin from 'react-facebook-login';

class Login extends React.Component {
    constructor(props) {
        super(props);
    };

    responseFacebook = (response) => {
        console.log(response);
    };
    render() {
        return (
            <FacebookLogin
                appId="252743665168569"
                autoLoad={true}
                fields="name,email,picture"
                textButton="fb login"
            />
        )
    }
}

export default Login;