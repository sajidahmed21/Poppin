import React from 'react';

/* Import Material UI Components. */
import Container from 'muicss/lib/react/container';
import Form from 'muicss/lib/react/form';
import Button from 'muicss/lib/react/button';
import Input from 'muicss/lib/react/input';
import Textarea from 'muicss/lib/react/textarea';

import DatePicker from '../components/DatePicker';
import AddressPicker from '../components/AddressPicker';

export default class CreateEvent extends React.Component {
    constructor() {
        super();

        /* Initialize blank state. */
        this.state = {};

        this.create = this.create.bind(this);
    }

    create() {
        this.props.onViewChange('createeventinterests');
    }

    render() {
        return (
            <Container className="createevent-view expand">
                <div className="message bordered large center">Create New Event</div>
                <div className="form form-1">
                    <div>
                        <Input
                            hint="Event Name"
                            type="text"
                            label="What is the name of your event?"
                            defaultValue={this.props.viewOpts.name || ''}
                        />
                        <DatePicker
                            placeholder='Start Time'
                            label='When does your event start?'
                        />
                        <DatePicker
                            placeholder='End Time'
                            label='When does your event end?'
                        />
                        <AddressPicker
                            label='Click a location on the map:'
                            onLocationSelected={(loc) => {}}
                        />
                        <Textarea
                            hint="Description"
                            label='Describe your event:'
                        />
                    </div>
                    <div className="buttons">
                        <div>
                            <Button color="primary" onClick={this.create}>Create Event</Button>
                        </div>
                    </div>
                </div>
            </Container>
        );
    }
}
