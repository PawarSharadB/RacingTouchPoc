import {Platform, Dimensions, StatusBar, PixelRatio} from 'react-native';
import {isTablet, isPortrait} from './measurements';
// iPhoneX Xs
const X_WIDTH = 375;
const X_HEIGHT = 812;

// iPhoneXR XsMax
const XR_WIDTH = 414;
const XR_HEIGHT = 896;

// iPhone12
const I12_WIDTH = 390;
const I12_HEIGHT = 844;

// iPhone12 max
const I12X_WIDTH = 428;
const I12X_HEIGHT = 926;

// screen
// const SCREEN_WIDTH = Dimensions.get('window').width;
// const SCREEN_HEIGHT = Dimensions.get('window').height;

const BET_SLIP_WIDTH = 300;

function isIphoneX(): boolean {
  const SCREEN_WIDTH = Dimensions.get('window').width;
  const SCREEN_HEIGHT = Dimensions.get('window').height;
  return (
    Platform.OS === 'ios' &&
    !Platform.isPad &&
    ((SCREEN_HEIGHT === X_HEIGHT && SCREEN_WIDTH === X_WIDTH) ||
      (SCREEN_HEIGHT === X_WIDTH && SCREEN_WIDTH === X_HEIGHT))
  );
}

function isIphoneXR(): boolean {
  const SCREEN_WIDTH = Dimensions.get('window').width;
  const SCREEN_HEIGHT = Dimensions.get('window').height;
  return (
    Platform.OS === 'ios' &&
    !Platform.isPad &&
    ((SCREEN_HEIGHT === XR_HEIGHT && SCREEN_WIDTH === XR_WIDTH) ||
      (SCREEN_HEIGHT === XR_WIDTH && SCREEN_WIDTH === XR_HEIGHT))
  );
}

function isIphone12(): boolean {
  const SCREEN_WIDTH = Dimensions.get('window').width;
  const SCREEN_HEIGHT = Dimensions.get('window').height;
  return (
    Platform.OS === 'ios' &&
    !Platform.isPad &&
    ((SCREEN_HEIGHT === I12_HEIGHT && SCREEN_WIDTH === I12_WIDTH) ||
      (SCREEN_HEIGHT === I12_WIDTH && SCREEN_WIDTH === I12_HEIGHT))
  );
}

function isIphone12Max(): boolean {
  const SCREEN_WIDTH = Dimensions.get('window').width;
  const SCREEN_HEIGHT = Dimensions.get('window').height;
  return (
    Platform.OS === 'ios' &&
    !Platform.isPad &&
    ((SCREEN_HEIGHT === I12X_HEIGHT && SCREEN_WIDTH === I12X_WIDTH) ||
      (SCREEN_HEIGHT === I12X_WIDTH && SCREEN_WIDTH === I12X_HEIGHT))
  );
}

const STATUS_BAR_HEIGHT =
  Platform.OS === 'ios'
    ? isIphone12() || isIphone12Max()
      ? 47
      : isIphoneX() || isIphoneXR()
      ? 34
      : 20
    : StatusBar.currentHeight;

const BOTTOM_STATUS_BAR_HEIGHT =
  Platform.OS === 'ios'
    ? isIphoneX() || isIphoneXR() || isIphone12() || isIphone12Max()
      ? 34
      : 0
    : 0;

function getScreenWidth() {
  return Dimensions.get('window').width;
}
function getScreenHeight() {
  return Dimensions.get('window').height;
}

function getScreenScale() {
  return Dimensions.get('window').scale;
}

function getResolutionScreenWidth() {
  return getScreenWidth() * getScreenScale();
}

function getResolutionScreenHeight() {
  return getScreenHeight() * getScreenScale();
}

function getRealScreenHeight() {
  return Dimensions.get('screen').height;
}

function getDeviceDpi() {
  return PixelRatio.get() * 160;
}

// function getSafeHeight() {
// 	return getScreenHeight() + (Platform.OS === 'ios' ? 0 : NativeModules.StatusBarManager.HEIGHT);
// }

function getSafeWindowHeight() {
  return Platform.OS === 'ios'
    ? getScreenHeight()
    : Dimensions.get('screen').height;
}

/**
 * get
 */
function getTrueScreenWidth() {
  const SCREEN_WIDTH = Dimensions.get('window').width;

  if (isTablet() && !isPortrait()) {
    return SCREEN_WIDTH - BET_SLIP_WIDTH;
  }
  return SCREEN_WIDTH;
}

export {
  isIphoneX,
  isIphoneXR,
  isIphone12,
  isIphone12Max,
  getScreenWidth,
  getScreenHeight,
  getScreenScale,
  getTrueScreenWidth,
  BET_SLIP_WIDTH,
  // getSafeHeight,
  getSafeWindowHeight,
  getResolutionScreenWidth,
  getResolutionScreenHeight,
  getDeviceDpi,
  STATUS_BAR_HEIGHT,
  BOTTOM_STATUS_BAR_HEIGHT,
  getRealScreenHeight,
};
