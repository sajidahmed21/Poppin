import React from 'react';

import EventListItem from './EventListItem';

import Dummy from '../lib/Dummy';

export default class EventList extends React.Component {
    constructor() {
        super();

        /* Initialize blank state. */
        this.state = {
            'event-list-style': {},
            events: {}
        };
    }

    componentDidMount() {
        this.setState({
            'event-list-style': {
                height: window.innerHeight - document.querySelector('.event-list').offsetTop
            },
            events: Dummy.events
        });


    }

    render() {
        return (
            <div className='event-list' style={this.state['event-list-style']}>
                {Object.keys(this.state.events).map((key) => (
                    <EventListItem
                        key={key}
                        name={this.state.events[key].name}
                        communities={this.state.events[key].communities}
                        distance={this.state.events[key].distance}
                    />
                ))}
            </div>
        );
    }
}
