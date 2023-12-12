// LIBRARY
import React from "react";
import { Text, View } from "react-native";
// STYLE
import { useStyle } from "../../contexts/style";
// CONTEXT
// VIEW
// COMPONENT
import Page from "../../components/pages";
import { useAuth } from "../../contexts/auth";
import { TITLE } from "../../constants";
import Auth from "../auth";
import useDevice from "../../utils/hooks/useDevice";
// OTHER

export default function Homepage() {
	// Global Constante
	const { isMobile } = useDevice();
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
