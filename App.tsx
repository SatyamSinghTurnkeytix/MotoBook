import { NavigationContainer } from '@react-navigation/native'
import { COLORS } from '@src/common/colors/colors'
import RootStack from '@src/core/navigation'
import React from 'react'

function App(): React.JSX.Element {
	return (
		<NavigationContainer theme={COLORS.light}>
			<RootStack />
		</NavigationContainer>
	)
}
export default App
