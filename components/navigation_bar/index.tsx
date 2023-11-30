// LIBRARY
import React, { useEffect } from "react";
import { View } from "react-native";
// STYLE
import { styles } from "../../styles";
// CONTEXT
import NavigationButton from "../buttons/navigation";
// VIEW
// COMPONENT
// OTHER

export default function NavigationBar() {
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
