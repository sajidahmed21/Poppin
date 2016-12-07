import React from 'react';

/* Import Material UI Components. */
import Container from 'muicss/lib/react/container';

import CommunityList from '../components/CommunityList';

export default class FirstTimeInterests extends React.Component {
    constructor() {
        super();

        this.state = {
            communities: {}
        };

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

        poppin.axios().get('communities', {
            private: false
        }).then(resp => {
            if (!this._isMounted) return;
            this.setState({
                communities: resp.data.data
            });
        }).catch(err => {
            if (!this._isMounted) return;
        });
    }

    render() {
        const text = {
            'header': "Select the communities you are interested in..."
        };

        return (
            <Container className="firsttimeinterests-view expand">
                <div className="message center bordered">{text['header']}</div>
                <CommunityList
                    filter={el => (el.private !== true)}
                    communities={this.state.communities}
                />
            </Container>
        );
    }
}
