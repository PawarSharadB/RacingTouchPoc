import React from 'react';
import {TouchableOpacity, Text, Image} from 'react-native';
import {images} from '../../theme/images';
import {palette} from '../../theme/pallete';
import {presets} from './race-top-view.presets';

export type IRaceTopViewProps = {};

export const RaceTopView = () => {
  const styles = presets.default;
  const color = palette;
  return (
    <TouchableOpacity
      onPress={() => {}}
      style={[styles.liveContainer, {backgroundColor: color.white.number0}]}>
      <Image
        style={styles.imageStyles}
        resizeMode="contain"
        source={images.livePlay}
      />
      <Text style={[styles.liveTextTitle, {color: color.liveTextColor}]}>
        LIVE
      </Text>
    </TouchableOpacity>
  );
};
