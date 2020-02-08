# Cocktail Finder App

App to find cocktails. Foxbox react native code challenge.

### How to run

Make sure you have a react-native environment already configured and in the project directory run the following commands:

For iOS:

```
yarn
cd ios
pod install
yarn run ios
```

For Android:

```
yarn
yarn run android
```

### Dependencies used

- react, react-native: to create the app and run it in iOS and Android
- redux, react-redux : to handle app state and connect the data to React components.
- redux-thunk: redux middleware to handle side effect logic and async operations
- redux-debounce: redux middleware to execute the action after a specified amount of time. Here we use it to prevent invoking the API call on each keystroke.
- react-navigation, react-navigation-stack: to handle the navigation in the app for all the screens created.
- react-native-gesture-handler, react-native-reanimated, react-native-safe-area-context, react-native-screens, @react-native-community/masked-view: these are required by react-navigation-stack to provide some navigation functionalities like gestures.
- react-native-linear-gradient: library to implement the gradient background used in the screens of the app.
- react-native-vector-icons: icon library for the several icons used in the app.
- prop-types: to validate the types for props in React components.

### Performance suggestions

It would be great if the API had some sort of pagination support. That would allow us to create functionalities like infinite scrolling in the list instead of loading all the data at once.
