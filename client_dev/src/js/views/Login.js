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
            <Container>
                <Form>
                    <div>
                        <Input hint="Email" type="email" />
                        <Input hint="Password" type="password" />
                    </div>
                    <div>
                        <Button variant="raised">Sign Up</Button>
                        <Button color="primary" variant="raised">Login</Button>
                    </div>
                </Form>
            </Container>
        );
    }
}
