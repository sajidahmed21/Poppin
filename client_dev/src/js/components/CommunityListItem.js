import React from 'react';

import Checkbox from './Checkbox';

export default class CommunityListItem extends React.Component {
    constructor() {
        super();

        /* Initialize blank state. */
        this.state = {};
    }

    render() {
        return (
            <div className='community-list-item'>
                <div className='left-column'>
                    <Checkbox id={this.props.id} onChange={this.props.onSelected} />
                </div>
                <div className='right-column'>
                    <span className='name'>{this.props.name}</span>
                    <div className='description'>{this.props.description}</div>
                </div>
            </div>
        );
    }
}
