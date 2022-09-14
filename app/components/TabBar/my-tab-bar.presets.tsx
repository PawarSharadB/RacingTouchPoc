import {ViewStyle, TextStyle, ImageStyle} from 'react-native';
import {palette} from '../../theme/pallete';
import {sizeAdaption} from '../../utils/measurements';
// import Fonts from '../../theme/fonts/index';

const color = palette;

const DefaultTabBar = {
  container: {
    flexDirection: 'row',
    height: 60,
    justifyContent: 'center',
    alignItems: 'center',
  } as ViewStyle,
  title: {
    color: color.black.number0,
    textAlign: 'center',
  } as TextStyle,
  titleFocused: {
    color: color.blue.number0,
    textAlign: 'center',
  } as TextStyle,
  itemStyle: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    borderTopWidth: sizeAdaption(3),
  } as ViewStyle,
  imageStyles: {
    width: 20,
    height: 20,
    marginBottom: 10,
    top: 8,
  } as ImageStyle,
  barContainer: {justifyContent: 'center', alignItems: 'center'} as ViewStyle,
};

export const presets = {
  default: DefaultTabBar,
};

export type TabBarPresets = keyof typeof presets;
