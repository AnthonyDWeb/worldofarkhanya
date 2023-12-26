// LIBRARY
import React, { useState } from "react";
import { Text, View } from "react-native";
// STYLE
import { useStyle } from "../../contexts/style";
// CONTEXT
import { useAuth } from "../../contexts/auth";
// VIEW
// COMPONENT
// OTHER
import ProfileImage from "../../components/image/profile_image";

export default function Profile() {
	// Global Constante
	const { user } = useAuth();
	const { styles } = useStyle();
	// Private Constante

	// Functions

	// Renders
	const Title = () => {
		return (
			<Text style={[styles.titlePage, { marginVertical: 20 }]}>
				{user?.username}
			</Text>
		);
	};

	const Creation = () => {
		return (
			<View style={styles.profileCreation}>
				<Text style={styles.title}>Mes créations:</Text>
			</View>
		);
	};

	return (
		<View>
			<Title />
			<ProfileImage d={200} />
			<Creation />
		</View>
	);
}
