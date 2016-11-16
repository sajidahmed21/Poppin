import React from 'react';

/* Import Material UI Components. */
import Container from 'muicss/lib/react/container';
import Button from 'muicss/lib/react/button';

import Dummy from '../lib/Dummy';

export default class Community extends React.Component {
    constructor() {
        super();

        /* Initialize blank state. */
        this.state = {
            community: {
                id: '',
                name: '',
                description: '',
                private: false
            }
        };
    }

    componentWillMount() {
        if (this.props.viewOpts.id) {
            this.setState({
                community: Object.assign({ private: false }, Dummy.communities[this.props.viewOpts.id])
            });
        }
    }

    render() {
        return (
            <Container className='expand entity'>
                <div className='header community-header'>
                    <span className='title'>{this.state.community.name}</span>
                </div>
                <div className='details community-details'>
                    <div className='description'>{this.state.community.description}</div>
                </div>
                <div className='actions community-actions'>
                    {this.state.community.private && (
                        <Button color="primary">{"Request Membership"}</Button>
                    )}
                    {this.state.community.private !== true && (
                        <Button color="primary">{"Join Community"}</Button>
                    )}
                </div>
            </Container>
        );
    }
}
