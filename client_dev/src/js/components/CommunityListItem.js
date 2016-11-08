import React from 'react';

import Checkbox from './Checkbox';

export default class CommunityListItem extends React.Component {
    constructor() {
        super();

        /* Initialize blank state. */
        this.state = {
            expanded: false
        };

        this.toggleExpanded = this.toggleExpanded.bind(this);
    }

    toggleExpanded() {
        this.setState({ expanded: !this.state.expanded });
    }

    render() {
        return (
            <div className='community-list-item'>
                <div className='left-column'>
                    <Checkbox id={this.props.id} onChange={this.props.onSelected} selected={this.props.selected} />
                </div>
                <div className={'right-column ' + (this.state.expanded ? 'expanded' : '')} onClick={this.toggleExpanded}>
                    <div className='name'>{this.props.name}</div>
                    <div className='description'>{this.props.description}</div>
                </div>
            </div>
        );
    }
}
