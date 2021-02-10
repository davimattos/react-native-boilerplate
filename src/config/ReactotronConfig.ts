import Reactotron from 'reactotron-react-native';

declare global {
  interface Console {
    tron: any;
  }
}

if (__DEV__) {
  const tron = Reactotron.configure({
    name: 'React Native Boilerplate',
  })
    .useReactNative({
      asyncStorage: false, // there are more options to the async storage.
      networking: {
        // optionally, you can turn it off with false.
        ignoreUrls: /symbolicate/,
      },
      editor: false, // there are more options to editor
      overlay: false, // just turning off overlay
    })
    .connect();

  tron.clear!();

  console.tron = tron;
}
