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
	const {updatePage} = usePage();
	const navigation = useNavigation<any>();
    // Global Constante
    // Private Constante

    // Functions

    // Renders

	return (
		<Page>
			<Pressable onPress={() => {navigation.navigate("Navigation"); updatePage("Profile")}} style={styles.NavButton}>
				<Text>Menu</Text>
			</Pressable>
		</Page>
	);
}
