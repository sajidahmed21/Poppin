import React from 'react';

/* Import Material UI Components. */
import Container from 'muicss/lib/react/container';

import CommunityList from '../components/CommunityList';

export default class MyInterests extends React.Component {
    constructor() {
        super();

        /* Initialize blank state. */
        this.state = {};
    }

    render() {
        const text = {
            'header': "Join communities which interests you..."
        };

        return (
            <Container className="myinterests-view">
                <div className="message center">{text['header']}</div>
                <CommunityList />
            </Container>
        );
    }
}
