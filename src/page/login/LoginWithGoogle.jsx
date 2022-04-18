import { useState, useEffect } from 'react';
import { GoogleLogin, GoogleLogout } from 'react-google-login';
import { useHistory } from 'react-router';


const initialState = {
    isSignIn: false,
}

const LoginWithGoogle = () => {
    const [state, setState] = useState(initialState);
    const history = useHistory();

    const responseGoogle = (response) => {
        console.log(response);
        if (response.profileObj) {
            setState({ isSignIn: true });
            history.push('/')
        } else {
            setState({ isSignIn: false });

        }
    }

    const logout = () => {
        setState({ isSignIn: false });
    }
    return (
        <button className="form-group">
            {!state.isSignIn && (
                <GoogleLogin
                    clientId='196767848877-8a3mdqbo23p3f7o8h11k7om3k20gvoar.apps.googleusercontent.com'
                    onSuccess={responseGoogle}
                    onFailure={responseGoogle}
                    buttonText="Login of Google"
                    cookiePolicy={"single_host_origin"}>
                </GoogleLogin>
            )}

            {state.isSignIn && (
                <GoogleLogout
                    clientId='196767848877-8a3mdqbo23p3f7o8h11k7om3k20gvoar.apps.googleusercontent.com'
                    buttonText="Logout of Google"
                    onLogoutSuccess={logout}>
                </GoogleLogout>
            )}


        </button>
    )
}

export default LoginWithGoogle;