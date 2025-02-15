import { createNativeStackNavigator } from '@react-navigation/native-stack'
import CustomAlert from '@src/common/components/Alert'
import React from 'react'
import FullScreenLoader from '@src/common/components/FullScreenLoader'
import Demo from '../screens'
import SelectBrand from '../screens/SelectBrand'
import VehicleForm from '../screens/VehicleForm'
import AddAddress from '../screens/AddAddress'
import BottomTabs from './BottomTabs'

const Stack = createNativeStackNavigator()

export default function RootStack() {
	return (
		<>
			<Stack.Navigator
				initialRouteName='SelectBrand'
				screenOptions={{
					headerShown: false
				}}>
				<Stack.Screen name='Home' component={BottomTabs} />
				<Stack.Screen name='Demo' component={Demo} />
				<Stack.Screen name='SelectBrand' component={SelectBrand} />
				<Stack.Screen name='VehicleForm' component={VehicleForm} />
				<Stack.Screen name='AddAddress' component={AddAddress} />
			</Stack.Navigator>
			<CustomAlert />
			<FullScreenLoader />
		</>
	)
}
