import React from 'react';

/* Import Material UI Components. */
import Container from 'muicss/lib/react/container';
import Form from 'muicss/lib/react/form';
import Button from 'muicss/lib/react/button';
import Input from 'muicss/lib/react/input';

export default class CreateEvent extends React.Component {
    constructor() {
        super();

        /* Initialize blank state. */
        this.state = {};

        this.create = this.create.bind(this);
    }

    create() {
        this.props.onViewChange('firsttimeinterests');
    }

    render() {
        return (
            <Container className="signup-view">
                <div className="message bordered large center">Create New Event</div>
                <div className="signup-form form form-1">
                    <div>
                        <Input
                            hint="Event Name"
                            type="text"
                            defaultValue={this.props.viewOpts.name || ''}
                        />
                        <Input
                            hint="Start Time"
                            type="text"
                        />
                        <Input
                            hint="End Time"
                            type="text"
                        />
                        <Input
                            hint="Address"
                            type="text"
                        />
                    </div>
                    <div className="buttons">
                        <div>
                            <Button color="primary" onClick={this.create}>Create!</Button>
                        </div>
                    </div>
                </div>
            </Container>
        );
    }
}
