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
    }

    render() {
        return (
            <Container className="signup-view">
                <div className="message bordered large center">Signup to start Poppin!</div>
                <Form className="signup-form">
                    <div>
                        <Input hint="Email" type="email" />
                        <Input hint="Password" type="password" />
                    </div>
                    <div className="buttons">
                        <div>
                            <Button color="primary">Continue</Button>
                        </div>
                    </div>
                    <div className="hint">
                        <a href="#" className="link">Already have an account?</a>
                    </div>
                </Form>
            </Container>
        );
    }
}
