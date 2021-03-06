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
import ForgotPasswordView from './views/ForgotPassword';
import SettingsView from './views/Settings';
import CommunityView from './views/Community';

export default class MainView extends React.Component {
    constructor() {
        super();

        this.state = {
            current: 'login',
            drawerOpen: false,
            notificationsOpen: false,
            opts: {},
            notifications: [
                { id: 1, type: 'request', message: "James has accepted your request to join Elite Clubs.", link: '' },
                { id: 2, type: 'chat', message: "Alexander has replied to you on the event: Iron Chef at UofT.", link: '' },
                { id: 3, type: 'invite', message: "Sam has invited you to the community: Hackers of Toronto", link: '' },
                { id: 4, type: 'chat', message: "Dylan has replied to you on the event: Iron Chef at UofT.", link: '' }
            ]
        };

        this.hammerOpts = {
            direction: Hammer.DIRECTION_HORIZONTAL
        };

        this.change = this.change.bind(this);
        this.onSwipe = this.onSwipe.bind(this);
        this.onDrawerClick = this.onDrawerClick.bind(this);
        this.onNotificationsClick = this.onNotificationsClick.bind(this);
        this.onNotificationClick = this.onNotificationClick.bind(this);
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

    onNotificationsClick() {
        if (this.isLoggedIn()) {
            this.setState(update(this.state, { $merge: { notificationsOpen: !this.state.notificationsOpen }}));
        } else {
            this.setState(update(this.state, { $merge: { notificationsOpen: false }}));
        }
    }

    onNotificationClick(id) {
        // TODO
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
            'myinterests': (<MyInterestsView onViewChange={this.change} viewOpts={this.state.opts} />),
            'forgotpassword': (<ForgotPasswordView onViewChange={this.change} viewOpts={this.state.opts} />),
            'settings': (<SettingsView onViewChange={this.change} viewOpts={this.state.opts} />),
            'community': (<CommunityView onViewChange={this.change} viewOpts={this.state.opts} />)
        };

        return (
            <Hammer onSwipe={this.onSwipe} options={this.hammerOpts}>
                <div>
                    <TitleBar
                        view={this.state.current}
                        onViewChange={this.change}
                        drawerOpen={this.state.drawerOpen}
                        onDrawerClick={this.onDrawerClick}
                        notificationsOpen={this.state.notificationsOpen}
                        onNotificationsClick={this.onNotificationsClick}
                        onNotificationClick={this.onNotificationClick}
                        loggedIn={this.isLoggedIn()}
                        notifications={this.state.notifications}
                        viewOpts={this.state.opts || {}}
                    />
                    {views[this.state.current]}
                </div>
            </Hammer>
        );
    }
}
