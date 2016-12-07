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

        this.values = {
            name: '',
            description: '',
            start_date: 0,
            end_date: 0,
            longitude: 0,
            latitude: 0
        };

        this.create = this.create.bind(this);
    }

    create() {
        poppin.axios().post('event', this.values).then(resp => {
            if (!this._isMounted) return;
            this.props.onViewChange('createeventinterests', {
                event_id: resp.data.data.event_id || false
            });
        }).catch(err => {
            if (!this._isMounted) return;
            this.props.onViewChange('myevents');
        });
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
                            onChange={(e) => {
                                this.values.name = e.target.value;
                            }}
                        />
                        <DatePicker
                            placeholder='Start Time'
                            label='When does your event start?'
                            onDateSelected={(dt) => {
                                this.values.start_date = dt;
                            }}
                        />
                        <DatePicker
                            placeholder='End Time'
                            label='When does your event end?'
                            onDateSelected={(dt) => {
                                this.values.end_date = dt;
                            }}
                        />
                        <AddressPicker
                            label='Click a location on the map:'
                            onLocationSelected={(loc) => {
                                this.values.latitude = loc.latitude;
                                this.values.longitude = loc.longitude;
                            }}
                        />
                        <Textarea
                            hint="Description"
                            label='Describe your event:'
                            onChange={(e) => {
                                this.values.description = e.target.value;
                            }}
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
