import React from 'react';

/* Import Material UI Components. */
import Container from 'muicss/lib/react/container';

export default class MyInterests extends React.Component {
    constructor() {
        super();

        /* Initialize blank state. */
        this.state = {};
    }

    render() {
        return (
            <Container>
                <div className="message bordered large center">Template Message: My Interests</div>
            </Container>
        );
    }
}
