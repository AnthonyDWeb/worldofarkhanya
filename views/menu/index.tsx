// LIBRARY
import React from "react";
import { Text, Pressable } from "react-native";
// STYLE
import { styles } from "../../styles";
import Page from "../../components/pages";
import { useNavigation } from "@react-navigation/native";
import { usePage } from "../../contexts/page";
// CONTEXT
// VIEW
// COMPONENT
// OTHER

export default function Menu() {
	const { getBack } = usePage();
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
