import React from 'react';

import TitleBar from './TitleBar';

export default class MainView extends React.Component {
    constructor() {
        super();

        this.state = {
            current: 'template'
        };
    }

    change(view) {
        this.setState({ current: view });
    }

    render() {
        const views = {
            'template': (<div>Template View</div>)
        };

        return (
            <div>
                <TitleBar />
                {views[this.state.current]}
            </div>
        );
    }
}
