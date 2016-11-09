import React from 'react';
import update from 'immutability-helper';

import Hammer from 'react-hammerjs';

import TitleBar from './TitleBar';

/* Import our views. */
import LoginView from './views/Login';
import SignUpView from './views/SignUp';
import FirstTimeInterestsView from './views/FirstTimeInterests';
import DiscoverView from './views/Discover';
import EventView from './views/Event';
import CreateEventView from './views/CreateEvent';
import MyEventsView from './views/MyEvents';
import MyInterestsView from './views/MyInterests';
import CreateEventInterests from './views/CreateEventInterests';

export default class MainView extends React.Component {
    constructor() {
        super();

        this.state = {
            current: 'login',
            drawerOpen: false,
            opts: {}
        };

        this.hammerOpts = {
            direction: Hammer.DIRECTION_HORIZONTAL,
            threshold: 10
        };

        this.change = this.change.bind(this);
        this.onSwipe = this.onSwipe.bind(this);
        this.onDrawerClick = this.onDrawerClick.bind(this);
        this.isLoggedIn = this.isLoggedIn.bind(this);

        /* Attach view changer for debugging. */
        window.changeView = this.change;
    }

    change(view, opts = {}) {
        this.setState(update(this.state, { $merge: {
            current: view,
            opts: opts,
            drawerOpen: false
        }}));
    }

    onSwipe(e) {
        if ((e.deltaX > 0 && !this.state.drawerOpen) || (e.deltaX < 0 && this.state.drawerOpen)) {
            this.onDrawerClick();
        }
    }

    onDrawerClick() {
        if (this.isLoggedIn()) {
            this.setState(update(this.state, { $merge: { drawerOpen: !this.state.drawerOpen }}));
        } else {
            this.setState(update(this.state, { $merge: { drawerOpen: false }}));
        }
    }

    isLoggedIn() {
        return !['login', 'signup', 'firsttimeinterests'].includes(this.state.current);
    }

    render() {
        /* View mappings. */
        const views = {
            'login': (<LoginView onViewChange={this.change} viewOpts={this.state.opts} />),
            'signup': (<SignUpView onViewChange={this.change} viewOpts={this.state.opts} />),
            'firsttimeinterests': (<FirstTimeInterestsView onViewChange={this.change} viewOpts={this.state.opts} />),
            'discover': (<DiscoverView onViewChange={this.change} viewOpts={this.state.opts} />),
            'event': (<EventView onViewChange={this.change} viewOpts={this.state.opts} />),
            'createevent': (<CreateEventView onViewChange={this.change} viewOpts={this.state.opts} />),
            'createeventinterests': (<CreateEventInterests onViewChange={this.change} viewOpts={this.state.opts} />),
            'myevents': (<MyEventsView onViewChange={this.change} viewOpts={this.state.opts} />),
            'myinterests': (<MyInterestsView onViewChange={this.change} viewOpts={this.state.opts} />)
        };

        return (
            <div>
                <TitleBar
                    view={this.state.current}
                    onViewChange={this.change}
                    drawerOpen={this.state.drawerOpen}
                    onDrawerClick={this.onDrawerClick}
                    loggedIn={this.isLoggedIn()}
                />
                <Hammer onSwipe={this.onSwipe} options={this.hammerOpts}>
                    {views[this.state.current]}
                </Hammer>
            </div>
        );
    }
}
