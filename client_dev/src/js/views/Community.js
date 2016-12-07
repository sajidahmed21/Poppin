import React from 'react';

/* Import Material UI Components. */
import Container from 'muicss/lib/react/container';
import Button from 'muicss/lib/react/button';

import Dummy from '../lib/Dummy';
import axios from 'axios';

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

        this.fetch = this.fetch.bind(this);
    }

    componentDidMount() {
        this._isMounted = true;
    }

    componentWillMount() {
        this.fetch();
    }

    componentWillUnmount() {
        this._isMounted = false;
    }

    fetch() {
        if (!this._isMounted || !this.props.viewOpts || !this.props.viewOpts.id) return;

        axios.get(consts.SERVER + '/communities?id=' + this.props.viewOpts.id).then(resp => {
            if (!this._isMounted) return;
            let community = resp.data.data;
            community.private = community.private || false;
            this.setState({
                community: community
            });
        }).catch(err => {
            if (!this._isMounted) return;
        });
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
