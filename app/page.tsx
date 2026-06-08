import { Link } from 'expo-router'
import { Button, ScrollView, Text } from 'react-native'

export default function page() {
	return (
		<ScrollView contentInsetAdjustmentBehavior='automatic'>
			<Text>page</Text>
			<Link
				href='/'
				asChild>
				<Button title='go to home' />
			</Link>
		</ScrollView>
	)
}
