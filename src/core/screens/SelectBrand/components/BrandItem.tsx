import { Pressable, StyleSheet, Image } from 'react-native'
import React from 'react'
import { useTheme } from '@react-navigation/native'
import commonBorderRadiusStyles from '@src/common/styles/commonBorderRadiusStyles'
import commonBorderWidthStyles from '@src/common/styles/commonBorderWidthStyles'
import { scaleHeightPX, scaleWidthPX } from '@src/common/utils/responsiveStyle'
import commonAlignStyles from '@src/common/styles/commonAlignStyles'
import commonPaddingStyles from '@src/common/styles/commonPaddingStyles'
import commonMarginStyles from '@src/common/styles/commonMarginStyles'
import commonShadowStyles from '@src/common/styles/commonShadowStyles'
import CustomText from '@src/common/components/Text'
import commonFontStyles from '@src/common/styles/commonFontStyles'

const BrandItem = (props: { onPress: () => void; item: any }) => {
	const { onPress, item } = props
	const { colors } = useTheme()
	const styles = selectionModalStyles(colors)
	return (
		<Pressable onPress={onPress} style={styles.item}>
			<Image source={{ uri: item?.image }} style={styles.image} />
			<CustomText numberOfLines={1} style={{ ...commonFontStyles.fontSizeS, textAlign: 'center' }}>{item?.name}</CustomText>
		</Pressable>
	)
}

export default BrandItem

const selectionModalStyles = (colors: any) =>
	StyleSheet.create({
		item: {
			...commonBorderRadiusStyles.borderRadiusS,
			...commonBorderWidthStyles.borderWidthM,
			borderColor: colors.inputPlaceholder,
			width: scaleWidthPX(80),
			...commonAlignStyles.justifyCenter,
			...commonAlignStyles.alignCenter,
			...commonPaddingStyles.paddingHorizontal4XS,
			...commonPaddingStyles.paddingVerticalM,
			...commonMarginStyles.marginBottomM,
			gap: scaleHeightPX(16),
		},
		image: {
			width: scaleWidthPX(50), 
			height: scaleHeightPX(40), 
			...commonBorderRadiusStyles.borderRadiusS,
			...commonBorderWidthStyles.borderWidthM,
			borderColor: colors.inputPlaceholder
		}
	})
