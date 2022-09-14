import {Dimensions, Platform} from 'react-native';
import {isTablet as RNIsTable} from 'react-native-device-info';

export const isAndroidTablet = Platform.OS === 'android' && RNIsTable();

const isIOS = Platform.OS === 'ios';
const isAndroid = Platform.OS === 'android';

const isTablet = () => {
  const isIosTablet = Platform.OS === 'ios' && Platform.isPad; // it is here so it would be possible to mock this
  // TODO: update once Android Tablet ready
  return isIosTablet;
};

/**
 * ! THIS FUNCTION is PROBLEMATIC \r
 * ! Use orientationHelper.isDevicePortrait if you want the immediate effect
 * ! or use the isPortrait from orientationReducer
 * ! To compute the device height and width correctly,
 * ! use DrawerNavigation.getScreenWidthFromAPI
 * ! should keep track on https://github.com/facebook/react-native/issues/29323
 */
const isPortrait = () => {
  const dim = Dimensions.get('screen');
  return dim.height >= dim.width;
};

// design standard
const uiWidthPx = 375;

// device width  unit:dp
//SQ0228-3067: fixed IOS phone launch app in landscape mode
export const deviceWidthDp =
  isTablet() || isAndroidTablet || isPortrait()
    ? Dimensions.get('window').width
    : Dimensions.get('window').height;
export const deviceHeightDp =
  isTablet() || isAndroidTablet || isPortrait()
    ? Dimensions.get('window').height
    : Dimensions.get('window').width;

// the type of mobile any other device scale
const normalScale = deviceWidthDp / uiWidthPx;
// all tablet scale is 0.6
const iPadScale = 0.6;

enum TabletType {
  TabletTypeOne = 'TabletTypeOne', // 豎向isPortrait 沒打開bet select
  TabletTypeTwo = 'TabletTypeTwo', // 豎向isPortrait 打開bet select
  TabletTypeThree = 'TabletTypeThree', // 橫向Landscape 沒打開bet select
  TabletTypeFour = 'TabletTypeFour', // 橫向Landscape 打開bet select
  TabletTypeNO = 'TabletTypeNO', // 非平板模式
}

const getTabletType = (isDrawerOpened: boolean): TabletType => {
  let tabletType = TabletType.TabletTypeNO;
  if (!isTablet()) {
    return tabletType;
  }
  if (isPortrait()) {
    return !isDrawerOpened
      ? TabletType.TabletTypeOne
      : TabletType.TabletTypeTwo;
  }

  return !isDrawerOpened
    ? TabletType.TabletTypeThree
    : TabletType.TabletTypeFour;
};

// calculate scale iPhone/android   iPad/tablet
const scale = isTablet() ? iPadScale : normalScale;

// '1rem' based on 24 px
const rem = scale * 24;

// device size compatible
const pTd = (uiElePx: number) => {
  return (uiElePx * deviceWidthDp) / uiWidthPx;
};

const sizeAdaption = (uiElePx: number) => {
  if (isTablet() || isAndroidTablet) {
    // if (isAndroid) {
    // 	// use 1.5 seems display normal
    // 	return uiElePx * 1.5;
    // }
    return uiElePx;
  }

  // if (Platform.OS === 'ios' || Platform.OS === 'android') {
  // 	return (uiElePx * deviceWidthDp) / uiWidthPx;
  // }
  return (uiElePx * deviceWidthDp) / uiWidthPx;
};

const sizeAdaptionEven = (uiElePx: number) => {
  /**
   * Implemented by Kelvin Wong on 21 June 2021
   * Usage: Prevent small lines from background (Usually caused by non-integer pixels)
   * Method: Round to nearest even number
   */
  let result = sizeAdaption(uiElePx);
  result = Math.round(result / 2) * 2;
  return result;
};

const isLandscape = (isDrawerOpened: boolean) => {
  const _type = getTabletType(isDrawerOpened);
  if (_type == TabletType.TabletTypeThree) {
    return true;
  }
  return false;
};

const isLandscapeAndOpenBetSlip = (isDrawerOpened: boolean) => {
  const _type = getTabletType(isDrawerOpened);
  if (_type == TabletType.TabletTypeFour) {
    return true;
  }
  return false;
};

export {
  pTd,
  sizeAdaption,
  sizeAdaptionEven,
  isTablet,
  isPortrait,
  isIOS,
  isAndroid,
  getTabletType,
  TabletType,
  isLandscape,
  isLandscapeAndOpenBetSlip,
};
