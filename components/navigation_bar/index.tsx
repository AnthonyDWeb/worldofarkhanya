// LIBRARY
import React from "react";
import { View } from "react-native";
// STYLE
// CONTEXT
import NavigationButton from "../buttons/navigation";
import { useStyle } from "../../contexts/style";
// VIEW
// COMPONENT
// OTHER

export default function NavigationBar() {
	const { styles } = useStyle();
	// Global Constante
	// Private Constante
	// Functions
	// Renders

	return (
		<View style={styles.navigation}>
			<NavigationButton title="Création" label="Creation" />
			<NavigationButton title="Bibliothèque" label="Library" />
			<NavigationButton title="Profil" label="Profile" />
		</View>
	);
}
