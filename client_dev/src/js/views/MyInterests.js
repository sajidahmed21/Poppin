import React from 'react';

/* Import Material UI Components. */
import Container from 'muicss/lib/react/container';

import CommunityList from '../components/CommunityList';

export default class MyInterests extends React.Component {
    constructor() {
        super();

        this.state = {
            communities: {}
        };

        this.onCommunitySelect = this.onCommunitySelect.bind(this);
        this.fetch = this.fetch.bind(this);
    }

    componentDidMount() {
        this._isMounted = true;
        this.fetch();
    }

    componentWillUnmount() {
        this._isMounted = false;
    }

    fetch() {
        if (this.state.location === false || !this._isMounted) return;

        poppin.axios().get('mycommunities').then(resp => {
            if (!this._isMounted) return;
            this.setState({
                communities: resp.data.data
            });
        }).catch(err => {
            if (!this._isMounted) return;
        });
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
                <CommunityList
                    onCommunitySelect={this.onCommunitySelect}
                    communities={this.state.communities}
                />
            </Container>
        );
    }
}
