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
            current: 'login'
        };

        /* Attach view changer for debugging. */
        window.changeView = this.change.bind(this);
    }

    change(view) {
        this.setState({ current: view });
    }

    render() {
        /* View mappings. */
        const views = {
            'login': (<LoginView />),
            'signup': (<SignUpView />),
            'firsttimeinterests': (<FirstTimeInterestsView />),
            'discover': (<DiscoverView />),
            'event': (<EventView />),
            'createevent': (<CreateEventView />),
            'myevents': (<MyEventsView />),
            'myinterests': (<MyInterestsView />)
        };

        return (
            <div>
                <TitleBar view={this.state.current} />
                {views[this.state.current]}
            </div>
        );
    }
}
