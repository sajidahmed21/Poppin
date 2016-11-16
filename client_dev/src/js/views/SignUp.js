import React from 'react';

/* Import Material UI Components. */
import Container from 'muicss/lib/react/container';
import Form from 'muicss/lib/react/form';
import Button from 'muicss/lib/react/button';
import Input from 'muicss/lib/react/input';

export default class SignUp extends React.Component {
    constructor() {
        super();

        /* Initialize blank state. */
        this.state = {};

        this.doAlreadyAccount = this.doAlreadyAccount.bind(this);
        this.doSignup = this.doSignup.bind(this);
    }

    doAlreadyAccount(e) {
        e.preventDefault();
        this.props.onViewChange('login');
    }

    doSignup() {
        this.props.onViewChange('firsttimeinterests');
    }

    render() {
        return (
            <Container className="signup-view expand">
                <div className="message bordered large center">Signup to start Poppin!</div>
                <div className="signup-form form form-1">
                    <div>
                        <Input
                            hint="Email"
                            type="email"
                            defaultValue={this.props.viewOpts.email || ''}
                        />
                        <Input
                            hint="First Name"
                            type="text"
                        />
                        <Input
                            hint="Last Name"
                            type="text"
                        />
                        <Input
                            hint="Password"
                            type="password"
                        />
                    </div>
                    <div className="buttons">
                        <div>
                            <Button color="primary" onClick={this.doSignup}>Continue</Button>
                        </div>
                    </div>
                    <div className="hint">
                        <a href="#" className="link" onClick={this.doAlreadyAccount}>Already have an account?</a>
                    </div>
                </div>
            </Container>
        );
    }
}
