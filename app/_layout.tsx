import { Badge, Icon, Label, NativeTabs } from 'expo-router/unstable-native-tabs'
import { DynamicColorIOS } from 'react-native'

export default function TabLayout() {
	return (
		<NativeTabs
			labelStyle={{
				color: DynamicColorIOS({
					dark: 'white',
					light: 'black'
				})
			}}
			tintColor={DynamicColorIOS({
				dark: 'white',
				light: 'black'
			})}>
			<NativeTabs.Trigger name='index' disablePopToTop>
				<Label>Home</Label>
				<Icon sf={{ default: 'house', selected: 'house.fill' }} drawable='custom_android_drawable' />
				<Badge>3</Badge>
			</NativeTabs.Trigger>

			<NativeTabs.Trigger name='settings'>
				<Icon sf='gear' drawable='custom_settings_drawable' />
				<Label hidden>Settings</Label>
				<Badge />
			</NativeTabs.Trigger>

			<NativeTabs.Trigger name='search' role='search'>
				<Label>Search</Label>
			</NativeTabs.Trigger>
		</NativeTabs>
	)
}
