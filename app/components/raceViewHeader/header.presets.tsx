import {ViewStyle, ImageStyle} from 'react-native';
import {sizeAdaption} from '../../utils/measurements';

const ImageStyles = {
  header_menu_message: {
    width: sizeAdaption(22),
    height: sizeAdaption(22),
  } as ImageStyle,
  header_menu_account: {
    width: sizeAdaption(20),
    height: sizeAdaption(22),
  } as ImageStyle,
  header_menu_ewallet: {
    width: sizeAdaption(25),
    height: sizeAdaption(25),
  } as ImageStyle,
  imageContainer: {flexDirection: 'row', padding: 16} as ViewStyle,
  racingTouchImage: {
    width: sizeAdaption(130),
    height: sizeAdaption(17),
    resizeMode: 'contain',
    marginLeft: sizeAdaption(30),
  } as ImageStyle,
  racingTouchImageContainer: {
    flex: 1,
    flexDirection: 'row',
    padding: 16,
  } as ImageStyle,
};

const HeaderStyles = {
  container: {
    flexDirection: 'row',
    alignItems: 'flex-end',
    justifyContent: 'flex-end',
  } as ViewStyle,
};

export const presets = {
  imageStyles: ImageStyles,
  headerStyles: HeaderStyles,
};

export type HeaderPresets = keyof typeof presets;
