import React from 'react';

/* Import Material UI Components. */
import Container from 'muicss/lib/react/container';
import Form from 'muicss/lib/react/form';
import Button from 'muicss/lib/react/button';
import Input from 'muicss/lib/react/input';

export default class ForgotPassword extends React.Component {
    constructor() {
        super();

        /* Initialize blank state. */
        this.state = {};
        this.doResetEmail = this.doResetEmail.bind(this);
        this.onEmailChange = this.onEmailChange.bind(this);
    }

    doResetEmail() {
        this.props.onViewChange('login');
    }

    onEmailChange() {
        
    }

    render() {
        return (
            <Container>
                <div className="message bordered large center">Reset Password</div>
                <div className="login-form form form-1">
                    <div>
                        <Input hint="Email" type="email" onChange={this.onEmailChange} />
                    </div>
                    <div className="buttons">
                        <div>
                            <Button
                                color="primary"
                                onClick={this.doResetEmail}
                            >Send Reset Email</Button>
                        </div>
                    </div>
                </div>

            </Container>
        );
    }
}
