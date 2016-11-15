import React from 'react';

export default class EventListItem extends React.Component {
    constructor() {
        super();

        /* Initialize blank state. */
        this.state = {};
    }

    render() {
        return (
            <div className='event-list-item' onClick={(e) => {
                if (this.props.onClick) {
                    this.props.onClick(e);
                }
            }}>
                <div className='left-column'>
                    <div className='name'>{this.props.name}</div>
                    <div className='communities'>
                    {this.props.communities.map((community) => (
                        <span key={community.id}>({community.name})</span>
                    ))}
                    </div>
                </div>
                <div className='right-column'>
                    <span className='distance'>{this.props.distance.toFixed(1)}<span className='unit'>{'km'}</span></span>
                </div>
            </div>
        );
    }
}
