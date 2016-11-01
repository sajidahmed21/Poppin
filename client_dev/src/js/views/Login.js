import React from 'react';

/* Import Material UI Components. */
import Container from 'muicss/lib/react/container';
import Form from 'muicss/lib/react/form';
import Button from 'muicss/lib/react/button';
import Input from 'muicss/lib/react/input';

export default class Login extends React.Component {
    constructor() {
        super();

        /* Initialize blank state. */
        this.state = {};
    }

    render() {
        return (
            <Container className="login-view">
                <div className="message bordered large center">Login to start Poppin!</div>
                <Form className="login-form">
                    <div>
                        <Input hint="Email" type="email" />
                        <Input hint="Password" type="password" />
                    </div>
                    <div className="buttons">
                        <div>
                            <Button color="primary">Login</Button>
                        </div>
                        <div>
                            <Button variant="raised">Sign Up</Button>
                        </div>
                    </div>
                    <div className="hint">
                        <a href="#" className="link">Forgot your password?</a>
                    </div>
                </Form>
            </Container>
        );
    }
}