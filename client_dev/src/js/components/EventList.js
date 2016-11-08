import React from 'react';

import EventListItem from './EventListItem';

import Dummy from '../lib/Dummy';

export default class EventList extends React.Component {
    constructor() {
        super();

        /* Initialize blank state. */
        this.state = {
            events: {}
        };
    }

    componentDidMount() {
        this.setState({
            events: Dummy.events
        });
    }

    render() {
        return (
            <div className='event-list'>
                {Object.keys(this.state.events).map((key) => (
                    <EventListItem
                        key={key}
                        name={this.state.events[key].name}
                        communities={this.state.events[key].communities}
                        distance={this.state.events[key].distance}
                        onClick={() => {
                            if (this.props.onEventSelect) {
                                this.props.onEventSelect(key);
                            }
                        }}
                    />
                ))}
            </div>
        );
    }
}
