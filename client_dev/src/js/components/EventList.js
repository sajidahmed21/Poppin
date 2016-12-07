import React from 'react';

import EventListItem from './EventListItem';

export default class EventList extends React.Component {
    constructor() {
        super();
    }

    render() {
        return (
            <div className='height-sizer'>
                <div className='event-list'>
                    {this.props.events && Object.keys(this.props.events).filter(key => (
                        typeof this.props.filter === 'undefined' ||
                        this.props.filter(this.props.events[key])
                    )).sort((a, b) => (
                        this.props.events[a].distance - this.props.events[b].distance
                    )).map(key => (
                        <EventListItem
                            key={key}
                            name={this.props.events[key].name}
                            communities={this.props.events[key].communities || []}
                            distance={this.props.events[key].distance}
                            onClick={() => {
                                if (this.props.onEventSelect) {
                                    this.props.onEventSelect(key);
                                }
                            }}
                        />
                    ))}
                </div>
            </div>
        );
    }
}
