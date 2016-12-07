import React from 'react';
import axios from 'axios';

/* Import Material UI Components. */
import Container from 'muicss/lib/react/container';

import EventList from '../components/EventList';
import EmptyEventList from '../components/EmptyEventList';

export default class MyEvents extends React.Component {
    constructor() {
        super();

        this.state = {
            organized: false,
            upcoming: false
        };

        this.onEventSelect = this.onEventSelect.bind(this);
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
        if (!this._isMounted) return;

        axios.get(consts.SERVER + '/myevents').then(resp => {
            if (!this._isMounted) return;
            this.setState({
                organized: resp.data.data.organized,
                upcoming: resp.data.data.upcoming
            });
        }).catch(err => {
            if (!this._isMounted) return;
        });
    }

    onEventSelect(eventId) {
        this.props.onViewChange('event', { id: eventId });
    }

    render() {
        return (
            <Container className='expand myevents-view'>
                <div className="message bordered large center">My Events</div>
                <div className='myevents-content'>
                    <div className='map-listings'>
                        <div className='list-header'>Your Upcoming Events</div>
                        {this.state.upcoming !== false && Object.keys(this.state.upcoming) > 0 && (
                            <EventList
                                onEventSelect={this.onEventSelect}
                                events={this.state.upcoming}
                            />
                        )}
                        {this.state.upcoming === false && Object.keys(this.state.upcoming) === 0 (
                            <EmptyEventList
                                text={'No Plans?'}
                                icon={'fa-frown-o'}
                            />
                        )}
                        {this.state.upcoming === false && (
                            <EmptyEventList
                                text={'Loading...'}
                                icon={'fa-circle-o-notch fa-spin'}
                            />
                        )}
                    </div>
                    <div className='map-listings'>
                        <div className='list-header'>Events You Organize</div>
                        {this.state.organized !== false && Object.keys(this.state.organized) > 0 && (
                            <EventList
                                onEventSelect={this.onEventSelect}
                                events={this.state.organized}
                            />
                        )}
                        {this.state.organized === false && Object.keys(this.state.organized) === 0 (
                            <EmptyEventList
                                text={'You haven\'t made any Events'}
                                icon={'fa-calendar-times-o'}
                            />
                        )}
                        {this.state.organized === false && (
                            <EmptyEventList
                                text={'Loading...'}
                                icon={'fa-circle-o-notch fa-spin'}
                            />
                        )}
                    </div>
                </div>
            </Container>
        );
    }
}
