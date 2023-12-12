// LIBRARY
import React from "react";
import { Text, View } from "react-native";
// STYLE
import { useStyle } from "../../contexts/style";
// CONTEXT
import { useAuth } from "../../contexts/auth";
// VIEW
import Auth from "../auth";
// COMPONENT
import Page from "../../components/pages";
// OTHER
import { TITLE } from "../../constants";

export default function Homepage() {
	// Global Constante
	const { serverOpen } = useAuth();
	const { styles } = useStyle();
	// Private Constante
	// Functions
	// Renders

	return (
		<Page>
			<View style={styles.centerContainer}>
				<Text style={[styles.mainTitle]}>{TITLE}</Text>
				{serverOpen ? <Auth /> : <Text>Loading</Text>}
			</View>
		</Page>
	);
}