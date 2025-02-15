// if (__DEV__) {
	require('./ReactotronConfig')
// }

import { AppRegistry, Text, TextInput } from 'react-native'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'
import App from './App'
import { name as appName } from './app.json'
import { persistor, store } from './src/common/redux/store/store'

const Root = () => {
	return (
		<Provider store={store}>
			<PersistGate loading={null} persistor={persistor}>
				<App />
			</PersistGate>
		</Provider>
	)
}

AppRegistry.registerComponent(appName, () => Root)

// Disable font scalling based on phone setting.
if (Text.defaultProps == null) {
	Text.defaultProps = {}
	Text.defaultProps.allowFontScaling = false
}

if (TextInput.defaultProps == null) {
	TextInput.defaultProps = {}
	TextInput.defaultProps.allowFontScaling = false
}
