import { Link } from 'expo-router'
import { Button, ScrollView, Text } from 'react-native'

export default function index() {
	return (
		<ScrollView contentInsetAdjustmentBehavior='automatic'>
			<Text>hello expo</Text>
			<Link href='/page' asChild>
				<Button title='Go Page' />
			</Link>
		</ScrollView>
	)
}
