// LIBRARY
import React from "react";
import { Text, View } from "react-native";
// STYLE
import { useStyle } from "../../contexts/style";
import useDevice from "../../utils/hooks/useDevice";
import ParchmentPage from "../../components/pages/parchment_page";
// CONTEXT
// VIEW
// COMPONENT
// OTHER

export default function Library() {
	const {styles} = useStyle();
	const {isMobile} = useDevice();
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
