// LIBRARY
import React from "react";
import { Text, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
// STYLE
// CONTEXT
// VIEW
// COMPONENT
// OTHER

export default function NavigationBar() {
	// Global Constante
	// Private Constante
	const navigation = useNavigation<any>();
	// Functions

	// Renders

	return (
		<View
			style={{
				display: "flex",
				flexDirection: "row",
				justifyContent: "space-around",
				width: "100%",
				padding: 10,
				borderColor: "brown",
				borderTopWidth: 1
			}}
		>
			<Text onPress={() => navigation.navigate("Library")}>Library</Text>
			<Text onPress={() => navigation.navigate("Profile")}>Profile</Text>
			<Text onPress={() => navigation.navigate("Menu")}>Menu</Text>
			<Text onPress={() => navigation.navigate("Authentification")}>Auth</Text>
			<Text onPress={() => navigation.navigate("Creation")}>Creation</Text>
		</View>
	);
}
