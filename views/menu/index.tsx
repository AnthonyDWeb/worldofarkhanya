// LIBRARY
import React from "react";
import { Text, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
// STYLE
import { useStyle } from "../../contexts/style";
// CONTEXT
import { usePage } from "../../contexts/page";
// VIEW
// COMPONENT
import Page from "../../components/pages";
// OTHER

export default function Menu() {
	const { getBack } = usePage();
	const {styles} = useStyle();
	const navigation = useNavigation<any>();
	// Global Constante
	// Private Constante

	// Functions

	// Renders

	return (
		<Page>
			<Pressable onPress={() => {getBack() ; navigation.navigate("Navigation")}}>
				<Text style={styles.title}>Menu</Text>
			</Pressable>
		</Page>
	);
}
