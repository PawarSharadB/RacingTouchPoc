import React, {useState} from 'react';
import {View, Image, TouchableWithoutFeedback} from 'react-native';
import {images} from '../../theme/images';
import {palette} from '../../theme/pallete';
import {STATUS_BAR_HEIGHT} from '../../utils/device';
import {presets} from './header.presets';

export type IheaderProps = {};

const icons = [
  {name: 'message', icon: images.header_menu_message},
  {name: 'account', icon: images.header_menu_account},
  {name: 'eWallet', icon: images.header_menu_ewallet},
];

export const ImageComponent = () => {
  const styles = presets.imageStyles;
  return (
    <>
      {icons.map((data, index) => {
        let dynamicStyle = null;
        switch (data.name) {
          case 'message':
            dynamicStyle = styles.header_menu_message;
            break;
          case 'account':
            dynamicStyle = styles.header_menu_account;
            break;

          case 'eWallet':
            dynamicStyle = styles.header_menu_ewallet;
            break;
        }
        return (
          <TouchableWithoutFeedback key={index} onPress={() => {}}>
            <View style={styles.imageContainer}>
              <Image
                source={data.icon}
                style={[dynamicStyle]}
                resizeMode={'contain'}
              />
            </View>
          </TouchableWithoutFeedback>
        );
      })}
    </>
  );
};

export const Header = () => {
  const [safeAreaViewTopPadding] = useState(STATUS_BAR_HEIGHT || 0);

  const headerViewHeight = safeAreaViewTopPadding + 62;

  const containerStyles = {
    height: headerViewHeight,
    backgroundColor: palette.navHeaderLinearGradientBackground0,
  };
  const imageStyles = presets.imageStyles;
  const headerStyles = presets.headerStyles;
  return (
    <View style={[containerStyles, headerStyles.container]}>
      <View style={imageStyles.racingTouchImageContainer}>
        <Image
          source={images.racing_touch_icon}
          style={[imageStyles.racingTouchImage]}
        />
      </View>
      <ImageComponent />
    </View>
  );
};
