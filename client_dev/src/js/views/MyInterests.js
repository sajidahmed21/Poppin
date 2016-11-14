import React from 'react';

/* Import Material UI Components. */
import Container from 'muicss/lib/react/container';

import CommunityList from '../components/CommunityList';

export default class MyInterests extends React.Component {
    constructor() {
        super();

        /* Initialize blank state. */
        this.state = {};

        this.onCommunitySelect = this.onCommunitySelect.bind(this);
    }

    onCommunitySelect(id) {
        this.props.onViewChange('community', { id: id });
    }

    render() {
        const text = {
            'header': "Join communities which interests you..."
        };

        return (
            <Container className="myinterests-view expand">
                <div className="message center bordered">{text['header']}</div>
                <CommunityList onCommunitySelect={this.onCommunitySelect} />
            </Container>
        );
    }
}
