// LIBRARY
import React from "react";
import { Text, View } from "react-native";
// STYLE
import { useStyle } from "../../contexts/style";
// CONTEXT
// VIEW
// COMPONENT
// OTHER

export default function Creation() {
	const {styles} = useStyle();
    // Global Constante
    // Private Constante

    // Functions

    // Renders
	
	return (
		<View style={{backgroundColor: "red"}}>
			<Text style={styles.titlePage}>Création</Text>
			<Text style={styles.secondaryTitle}>Creér +</Text>
			<Text style={styles.secondaryTitle}>Mes Créations</Text>
		</View>
	);
}
