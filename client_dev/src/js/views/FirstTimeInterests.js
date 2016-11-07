import React from 'react';

/* Import Material UI Components. */
import Container from 'muicss/lib/react/container';

import CommunityList from '../components/CommunityList';

export default class FirstTimeInterests extends React.Component {
    constructor() {
        super();

        /* Initialize blank state. */
        this.state = {};
    }

    render() {
        const text = {
            'header': "Select the communities you are interested in..."
        };

        return (
            <Container>
                <div className="message center">{text['header']}</div>
                <CommunityList />
            </Container>
        );
    }
}
