import React from 'react';

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

export default class MainView extends React.Component {
    constructor() {
        super();

        this.state = {
            current: 'login',
            opts: {}
        };

        this.change = this.change.bind(this);

        /* Attach view changer for debugging. */
        window.changeView = this.change;
    }

    change(view, opts = {}) {
        this.setState({ current: view, opts: opts });
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
            'myevents': (<MyEventsView onViewChange={this.change} viewOpts={this.state.opts} />),
            'myinterests': (<MyInterestsView onViewChange={this.change} viewOpts={this.state.opts} />)
        };

        return (
            <div>
                <TitleBar view={this.state.current} onViewChange={this.change} />
                {views[this.state.current]}
            </div>
        );
    }
}
