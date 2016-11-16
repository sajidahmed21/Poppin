import React from 'react';

import MapContainer from '../components/MapContainer';
/* Import Material UI Components. */
import Container from 'muicss/lib/react/container';
import Button from 'muicss/lib/react/button';

import Dummy from '../lib/Dummy';

export default class Event extends React.Component {
    constructor() {
        super();

        /* Initialize blank state. */
        this.state = {
            event: {
                name: "",
                description: "",
                start_date: 0,
                end_date: 0,
                longitude: 0,
                latitude: 0,
                distance: 0,
                communities: []
            }
        };
    }

    componentWillMount() {
        if (this.props.viewOpts.id) {
            this.setState({
                event: Dummy.events[this.props.viewOpts.id]
            });
        }
    }

    render() {
        const dateFormat = "h:mm:ss a, MMM. Do";

        const renderDate = () => {
            if (this.state.event.start_date === this.state.event.end_date) {
                return (
                    <div className='date'>
                        <span className='single'>{moment(this.state.event.start_date).format(dateFormat)}</span>
                    </div>
                );
            } else {
                return (
                    <div className='date'>
                        <span className='start'>{moment(this.state.event.start_date).format(dateFormat)}</span>
                        <span className='to'>to</span>
                        <span className='end'>{moment(this.state.event.end_date).format(dateFormat)}</span>
                    </div>
                );
            }
        };

        return (
            <Container className='expand entity'>
                <div className='header event-header'>
                    <span className='title'>{this.state.event.name}</span>
                </div>
                <div className='map-container small'>
                    <MapContainer
                        latitude={this.state.event.latitude}
                        longitude={this.state.event.longitude}
                        isEvent={true}
                    />
                </div>
                <div className='details event-details'>
                    {renderDate()}
                    <div className='communities'>{this.state.event.communities.map((community) => (
                        <span
                            className='community'
                            key={community.id}
                            id={community.id}
                            onClick={() => {
                                this.props.onViewChange('community', { id: community.id });
                            }}
                        >{community.name}</span>
                    ))}</div>
                    <div className='description'>{this.state.event.description}</div>
                </div>
                <div className='actions event-actions'>
                    <Button color="primary">{"I'm Going"}</Button>
                    <Button color="primary">{"I'm Interested"}</Button>
                </div>
            </Container>
        );
    }
}
