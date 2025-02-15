import commonAlignStyles from '@src/common/styles/commonAlignStyles';
import commonBorderWidthStyles from '@src/common/styles/commonBorderWidthStyles';
import commonFlexStyles from '@src/common/styles/commonFlexStyles';
import commonFontStyles from '@src/common/styles/commonFontStyles';
import commonPaddingStyles from '@src/common/styles/commonPaddingStyles';
import { spacing } from '@src/common/styles/values';
import { scaleHeightPX, scaleWidthPX } from '@src/common/utils/responsiveStyle';
import { StyleSheet } from 'react-native';

export const navigationStyles = (Colors: any) => {
  return StyleSheet.create({
   container: {
      height: scaleHeightPX(52),
      ...commonAlignStyles.justifyBetween,
      ...commonPaddingStyles.paddingHorizontalM,
      ...commonBorderWidthStyles.borderBottomWidthM,
      borderColor: Colors.inputPlaceholder,
      ...commonFlexStyles.flexRow
    },
    leftView: {
      ...commonFlexStyles.flexRow,
      columnGap: scaleWidthPX(spacing.m || 0),
      flex: 0.75,
      ...commonAlignStyles.alignCenter,
    },
    titleStyle: {
      ...commonFontStyles.fontSizeL,
      color: Colors.textColor,
    },
  });
};
