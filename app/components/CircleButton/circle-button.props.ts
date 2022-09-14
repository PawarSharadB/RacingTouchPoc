import {CircleButtonPresets} from './circle-button.presets';

export interface CircleButtonProps {
  /**
   * Various look & feels.
   */
  preset?: CircleButtonPresets;

  /**
   * represents size of circle button
   */
  size: number;

  /**
   * represents text of button
   */
  text: string;

  /**
   * represents selected index
   */
  index?: number;

  /**
   * An text Opacity
   */
  textOpacity?: number;

  /**
   * Theme Color
   */
  themeColor?: string;

  /**
   * If button selected
   */
  selected?: boolean;

  /**
   * If Brown Track
   */
  isBrownTrack?: boolean;

  /**
   * type of button
   */
  type?: string;

  /**
   * size of text
   */
  textSize?: number;

  /**
   * button when disabled
   */
  disabledRace?: boolean;

  /**
   * Current Theme
   */
  currentTheme?: string;

  /**
   * font Size
   */
  fontSize?: number;
}
