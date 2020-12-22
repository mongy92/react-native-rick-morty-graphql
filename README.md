# react-native-rick-morty-graphql
A Demo Application for listing Rick and Morty Characters with the abilty to search and view the details for each character

## IMPORTANT NOTE
I am using API provided by https://rickandmortyapi.com/documentation/

## Main technologies used
- React Native
- Typescript
- React Navigation (v5)
- Graphql
- Apollo Client (v3)
- React Native Testing Library

## Main functionality

- Home Page contain list of characters.
- Uesr can scroll with pagination through the character list 
- User can search by writing the name inside Search box and if there are result it will appear or it will view no result message.
- User can see all the details related to the character by click on the character card.


## Prerequisites

- React Native CLI to be installed. You can install it by running the command:

`npm install -g react-native-cli`

- Simulator or emulator to run the app on.

### Installation

First clone the repo using `SSH` or `HTTPS`.
Here's an example using `HTTPS`:

`git clone https://github.com/mongy92/react-native-rick-morty-graphql.git`

Second run the following command to install project dependencies:

`yarn install`

**in IOS**

You will need to make one more step to install pods dependencies, run the following command in the project directory:

- `cd ios && pod install`

### Run on Device

- run `yarn android` or `yarn ios` to run on device or emulator.

### Run Unit Test

- run `yarn run test` to run all unit test suites.

### Used dependencies

```json
    "@apollo/client": "^3.3.6",
    "@react-native-community/masked-view": "^0.1.10",
    "@react-navigation/native": "^5.8.10",
    "@react-navigation/stack": "^5.12.8",
    "@types/lodash": "^4.14.165",
    "graphql": "^15.4.0",
    "lodash": "^4.17.20",
    "react": "16.13.1",
    "react-native": "0.63.3",
    "react-native-gesture-handler": "^1.9.0",
    "react-native-reanimated": "^1.13.2",
    "react-native-safe-area-context": "^3.1.9",
    "react-native-screens": "^2.16.1",
    "react-native-vector-icons": "^7.1.0"
```

Also I am using `eslint` and prettier for better code formatting alongside [husky hooks](https://github.com/typicode/husky) to apply linting and formatting before each commit



## Screenshots (IOS)

<p float="left">
<a href="https://ibb.co/HFZcwpm"><img src="https://i.ibb.co/f1J36Gm/ios1.png" height='400' alt="ios1" border="0"></a>
<a href="https://ibb.co/b3M9KsC"><img src="https://i.ibb.co/KGpvr2f/ios2.png" height='400' alt="ios2" border="0"></a>
<a href="https://ibb.co/9VXzBH1"><img src="https://i.ibb.co/VQyrbYz/ios3.png" height='400' alt="ios3" border="0"></a>
</p>

## Screenshots (Android)

<p float="left">
<a href="https://ibb.co/jrxJPS2"><img src="https://i.ibb.co/kSrmstf/android1.png" height='400' alt="android1" border="0"></a>
<a href="https://ibb.co/xjsgmGn"><img src="https://i.ibb.co/bB3vHL4/android2.png" height='400' alt="android2" border="0"></a>
<a href="https://ibb.co/bmchs1z"><img src="https://i.ibb.co/8s13rM6/android3.png" height='400' alt="android3" border="0"></a>

</p>
