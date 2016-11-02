# Poppin: Client

## Dev Environment Setup
To setup development environment, ensure you are in the `client_dev` directory:

#### Prerequisites
Download and install [Node.js®](https://nodejs.org) if you have not already done so.

Once installed, open up a console. Type:
```
$ npm -v
3.10.9
```
If you get an unrecognized command error, you may need to add Node to your path.

We use [cordova](https://cordova.apache.org/) to deploy our application
across multiple platforms using the same codebase. It is recommended to install
cordova globally, although not necessary.

To install `cordova` globally:
```
$ npm install -g cordova
```
You may need to restart your console for environment variable changes to take effect.

#### Installation
```
$ npm install
```
This may take some time, as all the plugins need to be downloaded. Once the
root package has been installed, run the initial build:
```
$ npm run build-src
```
This will generate the application's `css` and `js` files and automatically place
them in the `cordova-app/www/{css,js}` directories.

Now navigate to the `cordova-app` directory (or open a new console) and prepare
the `cordova` project.
```
$ cd cordova-app
$ cordova prepare
```
If you have not installed `cordova` globally, you may need to type (on \*nix):
```
$ $(npm bin)/cordova prepare
```
If you do not have the Android SDK, you may run into some trouble here.
The current build is targeted towards Android 5.2.2.

Once installed, __go back to the root directory__ and build the `cordova-app`.
```
$ npm run build-cordova
```
And then, with an emulator (AVD) or Android device connected via USB cable with
USB debugging enabled, type:
```
$ npm run deploy-android
```
(Note: This will automatically build as well.)

## Build Process

All commands should be executed from the `client_dev` directory.
After making changes to the `scss` files, you can transpile them using:
```
$ npm run build-css
```
Likewise to build the JavaScript:
```
$ npm run build-js
```

If you've modified both JavaScript and SCSS, you can type:
```
$ npm run build-src
```
A shortcut for the previous two commands.

You can type:
```
$ npm run build
```
To build the source and build Cordova all in one command.

To build all and then immediately deploy:
```
$ npm run deploy
```
or to just run Cordova:
```
$ npm run deploy-android
```

## Running without Android

If you want to test the application without an Android device or an emulator,
you can use the browser.

```
$ cd cordova-app
$ cordova platform add browser
$ cordova run browser
```
This will launch your browser with the application. Android specific plugins
may break this process (they will throw an error in the console).

## Testing once deployed

We use [Crosswalk](https://crosswalk-project.org/) which allows us to debug
the application using Chrome Device Inspector and Chrome Development Tools.
Once the application has started on your emulator or device, go to
`chrome://inspect/#devices` on your computer's Google Chrome. If on the same
WiFi, you should see your Android device. Click inspect. You can click "reload"
in the top left to reload the application without re-running the cordova command.

You may also find Android Monitor useful at debugging more troublesome messages.
Android Monitor is included with the Android SDK, in the tools directory.

## Directory Structure
```
client_dev/
│    README.md
│    package.json
│    webpack.config.js
│    .babelrc
│    .gitignore
│
└────src/
│    └────scss/
│    └────js/
│    │    └────lib/
│    │    └────views/
│    │
└────cordova-app/
│    │    config.xml
│    └────www/
│    │    |    index.html
│    │    └────css/
│    │    └────lib-css/
│    │    └────fonts/
│    │    └────img/
│    │    └────js/
│    │    └────lib-js/
│    └────plugins/
│    └────platforms/
│    └────hooks/
```

All of the development happens in the `client_dev/src` directory. When
the build commands are run via the root npm package, the built JavaScript and
CSS files are placed in `client_dev/cordova-app/www/{js,css}`. These built files
are not committed to Git.

## Core Technologies
Core application development is written using [React](https://facebook.github.io/react/)
and JavaScript for the views, and [SASS](http://sass-lang.com/) for the CSS styling.

Much of the themes and React components come directly from [MUI](https://github.com/muicss/mui),
an open source project which implements Google's Material Design.

[Babel](https://babeljs.io/) is used to transpile the ES6 code more compatible
versions. [Webpack](https://webpack.github.io/) is then used to bundle the transpiled
code into a single file, which is generated in the `client_dev/cordova-app/www/js` directory.

[Cordova](https://cordova.apache.org/) is used to run the JavaScript application on Android.
