import React from 'react';

/* Import Material UI Components. */
import Container from 'muicss/lib/react/container';
import Button from 'muicss/lib/react/button';

export default class Settings extends React.Component {
    constructor() {
        super();

        /* Initialize blank state. */
        this.state = {};
        this.logOut = this.logOut.bind(this);
    }

    logOut() {
        this.props.onViewChange('login');
    }

    render() {
        return (
            <Container className='expand'>
                <div className="message bordered large center">Settings</div>
                <div className='form form-1'>
                    <div>
                        <Button
                            color="primary"
                        >Edit Profile</Button>
                    </div>
                    <div>
                        <Button
                            color="primary"
                        >Change Email</Button>
                    </div>
                    <div>
                        <Button
                            color="primary"
                        >Change Password</Button>
                    </div>
                    <div>
                        <Button
                            color="primary"
                        >Language</Button>
                    </div>
                    <div>
                        <Button
                            color="primary"
                            onClick={this.logOut}
                        >Log Out</Button>
                    </div>
                </div>
            </Container>
        );
    }
}
