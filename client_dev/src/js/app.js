import React from 'react';
import ReactDOM from 'react-dom';
import injectTapEventPlugin from 'react-tap-event-plugin';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import RequirePermissions from './lib/RequirePermissions';

import MainView from './MainView';

injectTapEventPlugin();

const App = () => (
    <MuiThemeProvider>
        <MainView />
    </MuiThemeProvider>
);

document.addEventListener('deviceready', () => {
    /* Request all necessary permissions. */
    RequirePermissions([
        cordova.plugins.permissions.READ_CONTACTS
    ]).then(() => {
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
