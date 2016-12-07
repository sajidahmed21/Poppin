import React from 'react';

import update from 'immutability-helper';

/* Import Material UI Components. */
import Container from 'muicss/lib/react/container';
import Form from 'muicss/lib/react/form';
import Button from 'muicss/lib/react/button';
import Input from 'muicss/lib/react/input';



export default class Login extends React.Component {
    constructor() {
        super();

        /* Initialize blank state. */
        this.state = {
            fields: {
                email: '',
                password: ''
            }
        };

        this.doLogin = this.doLogin.bind(this);
        this.doSignup = this.doSignup.bind(this);
        this.doForgotPassword = this.doForgotPassword.bind(this);
        this.onEmailChange = this.onEmailChange.bind(this);
        this.onPasswordChange = this.onPasswordChange.bind(this);
    }

    componentDidMount() {
        this._isMounted = true;
    }

    componentWillUnmount() {
        this._isMounted = false;
    }

    doLogin() {
        poppin.axios().post('authorize', this.state.fields).then(resp => {
            if (!this._isMounted) return;
            //poppin.auth.setToken(resp.data.data.token);
            this.props.onViewChange('discover');
        }).catch(err => {
            if (!this._isMounted) return;
            this.props.onViewChange('myevents');
        });
    }

    doSignup() {
        this.props.onViewChange('signup', this.state.fields);
    }

    doForgotPassword(e) {
        this.props.onViewChange('forgotpassword');
    }

    onEmailChange(e) {
        this.setState({fields: update(this.state.fields, {$merge: { email: e.target.value }})});
    }

    onPasswordChange(e) {
        this.setState({fields: update(this.state.fields, {$merge: { password: e.target.value }})});
    };

    render() {
        return (
            <Container className="login-view expand">
                <div className="message bordered large center">Login to start Poppin!</div>
                <div className="login-form form form-1">
                    <div>
                        <Input hint="Email" type="email" onChange={this.onEmailChange} />
                        <Input hint="Password" type="password" onChange={this.onPasswordChange} />
                    </div>
                    <div className="buttons">
                        <div>
                            <Button
                                color="primary"
                                onClick={this.doLogin}
                            >Login</Button>
                        </div>
                        <div>
                            <Button
                                variant="raised"
                                onClick={this.doSignup}
                            >Sign Up</Button>
                        </div>
                    </div>
                    <div className="hint">
                        <a href="#" className="link" onClick={this.doForgotPassword}>Forgot your password?</a>
                    </div>
                </div>
            </Container>
        );
    }
}
