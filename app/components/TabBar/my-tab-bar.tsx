import React from 'react';
import { Image, Text, TouchableOpacity, View } from 'react-native';
import routes from '../../navigation/routes';
import { images } from '../../theme/images';
import { BetSlip } from '../BetSlip/bet-slip-screen';
import { InfoScreen } from '../Info/info-screen';
import { More } from '../More/more-screen';
import { RaceScreen } from '../Race/race-screen';
import { presets } from './my-tab-bar.presets';
import { MyTabBarProps } from './my-tab-bar.props';
import { palette } from '../../theme/pallete';

const colors = palette;

export const HomeTabBar: any = {
  Race: {
    name: routes.Race,
    icon: images.BOTTOM_TAB_1,
    label: 'Race',
    component: RaceScreen,
    bottomTab: true,
  },
  Info: {
    name: routes.Info,
    icon: images.BOTTOM_TAB_2,
    label: 'Info',
    component: InfoScreen,
    bottomTab: true,
  },
  BetSlip: {
    name: routes.Betslip,
    icon: images.BOTTOM_TAB_3,
    label: 'BetSlip',
    component: BetSlip,
    bottomTab: true,
  },
  More: {
    name: routes.More,
    icon: images.BOTTOM_TAB_5,
    label: 'More',
    component: More,
    bottomTab: true,
  },
};

const getIconAndTabBarLabel = (name: string) => {
  switch (name) {
    case routes.Race:
      return images.BOTTOM_TAB_1;
    case routes.Info:
      return images.BOTTOM_TAB_2;
    case routes.Betslip:
      return images.BOTTOM_TAB_3;
    case routes.More:
      return images.BOTTOM_TAB_5;
  }
};

export const MyTabBar = (props: MyTabBarProps): JSX.Element => {
  const { state, descriptors, navigation } = props;
  const styles = presets.default;

  return (
    <View style={styles.container}>
      {state.routes.map((route, index) => {
        const { options } = descriptors[route.key];

        const label =
          options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
            ? options.title
            : route.name;

        const isFocused = state.index === index;
        let iconName = getIconAndTabBarLabel(route.name);
        let tintColor = isFocused ? colors.blue.number0 : colors.black.number0;

        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name);
          }
        };

        const onLongPress = () => {
          navigation.emit({
            type: 'tabLongPress',
            target: route.key,
          });
        };

        return (
          <TouchableOpacity
            accessibilityRole="button"
            accessibilityState={isFocused ? { selected: true } : {}}
            accessibilityLabel={options.tabBarAccessibilityLabel}
            testID={options.tabBarTestID}
            onPress={onPress}
            key={index}
            onLongPress={onLongPress}
            style={[
              styles.itemStyle,
              {
                borderTopColor: isFocused
                  ? colors.blue.number0
                  : colors.white.number0,
              },
            ]}
            activeOpacity={1}>
            <View style={styles.barContainer}>
              <Image
                style={[styles.imageStyles, { tintColor }]}
                resizeMode="contain"
                source={iconName}
              />
              <Text style={isFocused ? styles.titleFocused : styles.title}>
                {label}
              </Text>
            </View>
          </TouchableOpacity>
        );
      })}
    </View>
  );
};
