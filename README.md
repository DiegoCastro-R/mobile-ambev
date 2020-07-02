# Ponto Ambev

Application developed as part of the Ponto Ambev solution, for participation in Mega Hack, Hackathon Edtion 3.0

# Requirements

- Node.js v10+ + Yarn
- React Native CLI (npm -g install react-native-cli)
- Xcode Command Line tools (xcode-select --install)
- Bash v4 (default on GNU/Linux, brew install bash on macOS)


# Usage

# install dependencies

yarn install

# run bundler

yarn start

# run on Android device/emulator

yarn android

# run on iOS device/simulator

yarn ios

# run tests

yarn run test

# lint code

yarn run lint

# format code

yarn run format
Debugging
From DevTools

// use logger
Logger.debug('Hello World!');

// check if there is an authenticated session
AuthService.isAuthenticated();

// get state from Redux store
\$store.getState().MyModule.myField;

// dispatch action from Redux store
$store.dispatch($state.MyModule.\$myAction(/_ args _/)
