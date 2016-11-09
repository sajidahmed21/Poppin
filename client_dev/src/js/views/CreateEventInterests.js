import React from 'react';

/* Import Material UI Components. */
import Container from 'muicss/lib/react/container';

import CommunityList from '../components/CommunityList';

export default class CreateEventInterests extends React.Component {
    constructor() {
        super();

        /* Initialize blank state. */
        this.state = {};
    }

    render() {
        const text = {
            'header': "Select communities to post your event in..."
        };

        return (
            <Container className="createeventinterests-view">
                <div className="message center">{text['header']}</div>
                <CommunityList />
            </Container>
        );
    }
}
