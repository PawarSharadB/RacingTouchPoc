import {TabBarPresets} from './my-tab-bar.presets';

export interface MyTabBarProps {
  /**
   * Various look & feels.
   */
  preset?: TabBarPresets;

  /**
   * represents each state with index and route name and key
   */
  state: {index: number; routes: [{key: string; name: string}]};

  /**
   * An descriptors.
   */
  descriptors?: any;

  /**
   * navigation
   */
  navigation?: any;
}
