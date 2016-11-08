import React from 'react';
import Appbar from 'muicss/lib/react/appbar';

export default class TitleBar extends React.Component {
    constructor() {
        super();

        /* Initialize blank state. */
        this.state = {
            open: false
        };
    }

    render() {
        return (
            <div className={this.props.loggedIn ? 'titlebar logged-in' : 'titlebar'}>
                <Appbar>
                    <div className="drawer-btn" onClick={this.props.onDrawerClick}>
                        <span className="fa fa-bars"></span>
                    </div>
                    <span className="title">Poppin</span>
                </Appbar>
                <div className={this.props.drawerOpen ? 'drawer open' : 'drawer closed'}>
                    <ul>
                        <li onClick={() => { this.props.onViewChange('discover'); }}>Discover</li>
                        <li onClick={() => { this.props.onViewChange('myevents'); }}>My Events</li>
                        <li onClick={() => { this.props.onViewChange('createevent'); }}>Create Event</li>
                    </ul>
                    <ul>
                        <li>Settings</li>
                        <li onClick={() => { this.props.onViewChange('login'); }}>Logout</li>
                    </ul>
                </div>
            </div>
        );
    }
}
