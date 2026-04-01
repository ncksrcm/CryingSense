/**
 * Below are the colors that are used in the app. The colors are defined in the light and dark mode.
 * There are many other ways to style your app. For example, [Nativewind](https://www.nativewind.dev/), [Tamagui](https://tamagui.dev/), [unistyles](https://reactnativeunistyles.vercel.app), etc.
 */

import { Platform } from 'react-native';

const tintColorLight = '#0a7ea4';
const tintColorDark = '#fff';

export const Colors = {
  light: {
    text: '#11181C',
    background: '#fff',
    gradientStart: '#FFE4E1',
    gradientEnd: '#E6F3FF',
    cardBackground: '#ffffff',
    border: '#ddd',
    shadow: '#000',
    tint: tintColorLight,
    icon: '#687076',
    tabIconDefault: '#687076',
    tabIconSelected: tintColorLight,
    buttonBackground: '#60A5FA',
    buttonText: '#ffffff',
    sectionTitle: '#333',
    cardTitle: '#333',
    preferenceText: '#333',
    historyText: '#333',
    historyTime: '#999',
    insightTitle: '#555',
  },
  dark: {
    text: '#ECEDEE',
    background: '#1a1a1a',
    gradientStart: '#0A0A1A',
    gradientEnd: '#1A0033',
    cardBackground: '#2d2d2d',
    border: '#404040',
    shadow: '#000',
    tint: tintColorDark,
    icon: '#9BA1A6',
    tabIconDefault: '#9BA1A6',
    tabIconSelected: tintColorDark,
    buttonBackground: '#60A5FA',
    buttonText: '#ffffff',
    sectionTitle: '#ECEDEE',
    cardTitle: '#ECEDEE',
    preferenceText: '#ECEDEE',
    historyText: '#ECEDEE',
    historyTime: '#999',
    insightTitle: '#9BA1A6',
  },
};

export const Fonts = Platform.select({
  ios: {
    /** iOS `UIFontDescriptorSystemDesignDefault` */
    sans: 'system-ui',
    /** iOS `UIFontDescriptorSystemDesignSerif` */
    serif: 'ui-serif',
    /** iOS `UIFontDescriptorSystemDesignRounded` */
    rounded: 'ui-rounded',
    /** iOS `UIFontDescriptorSystemDesignMonospaced` */
    mono: 'ui-monospace',
  },
  default: {
    sans: 'normal',
    serif: 'serif',
    rounded: 'normal',
    mono: 'monospace',
  },
  web: {
    sans: "system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif",
    serif: "Georgia, 'Times New Roman', serif",
    rounded: "'SF Pro Rounded', 'Hiragino Maru Gothic ProN', Meiryo, 'MS PGothic', sans-serif",
    mono: "SFMono-Regular, Menlo, Monaco, Consolas, 'Liberation Mono', 'Courier New', monospace",
  },
});
