import { AppRegistry } from 'react-native';

import App from './app/app.tsx';

if (__DEV__) {
  require('react-native-performance-flipper-reporter').setupDefaultFlipperReporter();
}
AppRegistry.registerComponent('mobileAppPOCRN', () => App);
export default App;
