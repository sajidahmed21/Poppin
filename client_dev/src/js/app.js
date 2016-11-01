import React from 'react';
import ReactDOM from 'react-dom';
import injectTapEventPlugin from 'react-tap-event-plugin';
import RequirePermissions from './lib/RequirePermissions';

import MainView from './MainView';

injectTapEventPlugin();

const App = () => (
    <MainView />
);

document.addEventListener('deviceready', () => {
    /* Request all necessary permissions. */
    RequirePermissions([]).then(() => {
        ReactDOM.render(
            <App />,
            document.getElementById('root')
        );
    }, (req) => {
        navigator.notification.alert("Permissions must be granted to use this app: " + req, () => {
            navigator.app.exitApp();
        }, "Permission Required", "Exit");
    });
}, false);
