import React from 'react';
import Appbar from 'muicss/lib/react/appbar';

const Notifications = props => {
    const icons = {
        'request': 'fa-check-circle',
        'chat': 'fa-comments',
        'invite': 'fa-user'
    };

    return (
        <div className='notifications-list'>
            {props.data.map(notification => (
                <div
                    key={notification.id}
                    className={`notification type-${notification.type}`} onClick={() => {
                        props.onNotificationClick(notification.id);
                    }}>
                    <div className='msg'>{notification.message}</div>
                    <div className='type'>
                        <i className={'fa ' + icons[notification.type]}></i>
                    </div>
                </div>
            ))}
        </div>
    );
};

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
                    <div className="btn-drawer" onClick={this.props.onDrawerClick}>
                        <span className="fa fa-bars"></span>
                    </div>
                    <span className="title">Poppin</span>
                    { (['firsttimeinterests', 'createeventinterests'].includes(this.props.view) && (
                        <div className="btn-next" onClick={
                                () => {
                                    if (this.props.view === 'firsttimeinterests') {
                                        this.props.onViewChange('discover');
                                    } else if (this.props.view === 'createeventinterests') {
                                        this.props.onViewChange('event', { id: this.props.viewOpts.event_id || false });
                                    }
                                }
                            }>
                            <span className="fa fa-arrow-circle-right"></span>
                            <span className="label">Next</span>
                        </div>
                    )) || (this.props.loggedIn && (
                        <div className='btn-notifications' onClick={this.props.onNotificationsClick}>
                            <span className='fa fa-bell-o'>
                                <span className='label'>{this.props.notifications.length}</span>
                            </span>
                        </div>
                    ))}
                </Appbar>
                <div className={this.props.drawerOpen ? 'drawer open' : 'drawer closed'}>
                    <ul>
                        <li onClick={() => { this.props.onViewChange('discover'); }}>Discover</li>
                        <li onClick={() => { this.props.onViewChange('myevents'); }}>My Events</li>
                        <li onClick={() => { this.props.onViewChange('createevent'); }}>Create Event</li>
                        <li onClick={() => { this.props.onViewChange('myinterests'); }}>Communities</li>
                    </ul>
                    <ul>
                        <li onClick={() => { this.props.onViewChange('settings'); }}>Settings</li>
                        <li onClick={() => { this.props.onViewChange('login'); }}>Logout</li>
                    </ul>
                </div>
                <div className={this.props.notificationsOpen ? 'notifications open' : 'notifications closed'}>
                    <Notifications data={this.props.notifications} onNotificationClick={this.props.onNotificationClick} />
                </div>
            </div>
        );
    }
}
