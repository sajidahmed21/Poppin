import React from 'react';

export default class EventListItem extends React.Component {
    constructor() {
        super();

        /* Initialize blank state. */
        this.state = {};
    }

    render() {
        return (
            <div className='event-list-item'>
                <div className='left-column'>
                    <span className='name'>{this.props.name}</span>
                    <div className='communities'>
                    {this.props.communities.map((community) => (
                        <span key={community.id}>({community.name})</span>
                    ))}
                    </div>
                </div>
                <div className='right-column'>
                    <span className='distance'>{this.props.distance} km</span>
                </div>
            </div>
        );
    }
}