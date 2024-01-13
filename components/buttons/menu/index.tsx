// LIBRARY
import React from "react";
import { View, Image, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
// STYLE
import { useStyle } from "../../../contexts/style";
// CONTEXT
import { usePage } from "../../../contexts/page";
// VIEW
// COMPONENT
// OTHER
import BackgroundButton from "../background";
import { NavigationProps } from "../../../types";

export default function MenuButton() {
	// Global Constante
	const { updatePage } = usePage();
	const { styles } = useStyle();
	const navigation = useNavigation<NavigationProps>();
	// Private Constante
	const icon = require("../../../assets/images/parameter.png");
	// Functions
	const handle = () => {
		updatePage("Menu");
		setTimeout(() => navigation.navigate("Menu"), 500);
	};
	// Renders

	return (
		<Pressable onPress={handle} style={styles.menuButton}>
			<BackgroundButton rad={50}>
				<Image source={icon} style={styles.menuButtonImage} />
			</BackgroundButton>
		</Pressable>
	);
}
