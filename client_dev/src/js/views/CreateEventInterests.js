import React from 'react';

/* Import Material UI Components. */
import Container from 'muicss/lib/react/container';

import CommunityList from '../components/CommunityList';

export default class CreateEventInterests extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            event_id: props.viewOpts.event_id || false,
            communities: {}
        };
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

        poppin.axios().get('communities').then(resp => {
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
            'header': "Select communities to post your event in..."
        };

        return (
            <Container className="createeventinterests-view expand">
                <div className="message center">{text['header']}</div>
                <CommunityList
                    communities={this.state.communities}
                />
            </Container>
        );
    }
}
