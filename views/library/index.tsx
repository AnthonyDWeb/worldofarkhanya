// LIBRARY
import React from "react";
import { Text, View } from "react-native";
// STYLE
import { useStyle } from "../../contexts/style";
// CONTEXT
// VIEW
// COMPONENT
// OTHER

export default function Library() {
	const {styles} = useStyle();
    // Global Constante
    // Private Constante

    // Functions
	
    // Renders

	return (
		<View>
			<Text style={styles.titlePage}>Bibliothèque</Text>
		</View>
	);
}
