## XMark mobile application

XMark is a mobile application that allow users to store geolocations and view them on the map

All of the data is stored directly on the device using [SecureStore](https://docs.expo.io/versions/latest/sdk/securestore)

Stack: [React Native](https://reactnative.dev), [Expo](https://expo.dev), [MapView](https://docs.expo.io/versions/latest/sdk/map-view), [Typescript](https://www.typescriptlang.org)

### Deploy

```shell script
git clone https://github.com/peterdee/xmark-mobile
cd ./xmark-mobile
nvm use 16
npm i -g yarn
yarn
```

### Launch

```shell script
yarn start
```

Alternatively, use one of the simulators:

```shell script
yarn android
```

```shell script
yarn ios
```

### Linting

```shell script
yarn lint
```

Using [ESLint](https://eslint.org)

### License

[MIT](LICENSE.md)
