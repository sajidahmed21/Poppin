import React from 'react';

/* Import Material UI Components. */
import Container from 'muicss/lib/react/container';

import EventList from '../components/EventList';

export default class MyEvents extends React.Component {
    constructor() {
        super();

        /* Initialize blank state. */
        this.state = {};
        this.onEventSelect = this.onEventSelect.bind(this);
    }

    onEventSelect(eventId) {
        this.props.onViewChange('event', { id: eventId });
    }

    render() {
        return (
            <Container className='expand myevents-view'>
                <div className="message bordered large center">My Events</div>
                <div className='myevents-content'>
                    <div className='map-listings'>
                        <div className='list-header'>Your Upcoming Events</div>
                        <EventList
                            onEventSelect={this.onEventSelect}
                        />
                    </div>
                    <div className='map-listings'>
                        <div className='list-header'>Events You Organize</div>
                        <EventList
                            onEventSelect={this.onEventSelect}
                        />
                    </div>
                </div>
            </Container>
        );
    }
}
