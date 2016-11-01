import React from 'react';

import TitleBar from './TitleBar';

/* Import our views. */
import LoginView from './views/Login';

export default class MainView extends React.Component {
    constructor() {
        super();

        this.state = {
            current: 'login'
        };
    }

    change(view) {
        this.setState({ current: view });
    }

    render() {
        const views = {
            'login': (<LoginView />)
        };

        return (
            <div>
                <TitleBar view={this.state.current} />
                {views[this.state.current]}
            </div>
        );
    }
}
