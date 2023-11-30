// LIBRARY
import React, { useEffect } from "react";
import { Text, View, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
// STYLE
import { styles } from "../../styles";
// CONTEXT
import { usePage } from "../../contexts/page";
import NavigationButton from "../buttons/navigation";
// VIEW
// COMPONENT
// OTHER

export default function NavigationBar() {
	const { pageData, updatePage } = usePage();
	// Global Constante
	// Private Constante
	const navigation = useNavigation<any>();

	// Functions
	useEffect(() => {
		pageData.name === "Menu" && navigation.navigate(pageData.name);
	}, [pageData])

	// Renders


	return (
		<View style={styles.navigation}>
			<NavigationButton title="Menu" action={() => updatePage("Menu")}/>
			<NavigationButton title="Création" action={() => updatePage("Creation")}/>
			<NavigationButton title="Bibliothèque" action={() => updatePage("Library")}/>
			<NavigationButton title="Profil" action={() => updatePage("Profile")}/>
		</View>
	);
}
