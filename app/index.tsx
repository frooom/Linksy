import { View, Text, StyleSheet, Image, TouchableOpacity, Linking } from 'react-native'
import React from 'react'
import { Link } from 'expo-router';
import welcomeImage from "@/assets/images/statue.png";
import Colors from "@/constants/Colors";

const welcome_image = Image.resolveAssetSource(welcomeImage).uri
const WelcomeScreen = () => {
	const openLink = () => {
		<Link href={'/privacy-policy'} />
		// Linking.openURL(privacy)
	};

	return (
		<View style={styles.container}>
			<Image source={{ uri: welcome_image }} style={styles.welcome} />
			<Text style={styles.headline}>Welcome to Linksy</Text>
			<Text style={styles.description}>
				Read our{' '}
				<Text style={styles.link} onPress={openLink}>
					Privacy Policy
				</Text>
				. {'Tap "Agree & Continue" to accept the '}
				<Text style={styles.link} onPress={openLink}>
					Terms of Service
				</Text>
				.
			</Text>
			<Link href={'/otp'} replace asChild>
				<TouchableOpacity style={styles.button}>
					<Text style={styles.buttonText}>Agree & Continue</Text>
				</TouchableOpacity>
			</Link>
		</View>
	)
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		padding: 20,
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: '#fff'
	},
	welcome: {
		width: '100%',
		height: 330,
		marginBottom: 80,
		borderRadius: 70,
	},
	headline: {
		fontSize: 24,
		fontWeight: 'bold',
		marginVertical: 20,
	},
	description: {
		fontSize: 14,
		textAlign: 'center',
		marginBottom: 80,
		color: Colors.gray,
	},
	button: {
		width: '100%',
		alignItems: 'center',
	},
	buttonText: {
		color: Colors.primary,
		fontSize: 22,
		fontWeight: '500',
	},
	link: {
		color: Colors.primary
	}
});

export default WelcomeScreen