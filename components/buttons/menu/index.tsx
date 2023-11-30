// LIBRARY
import React from "react";
import { Pressable, Image } from "react-native";
// STYLE
import { styles } from "../../../styles";
import SampleButton from "../sample";
import { useNavigation } from "@react-navigation/native";
// CONTEXT
// VIEW
// COMPONENT
// OTHER

export default function MenuButton() {
	// Global Constante
	const navigation = useNavigation<any>();
	// Private Constante
	const icon = require("../../../assets/images/parameter.png");
	// Functions

	// Renders

	return (
		<Pressable style={styles.menuButton} onPress={() => navigation.navigate("Menu")}>
			<SampleButton rad={50} hide={true}>
				<Image source={icon} style={{height: 15, width: 15, zIndex: 15, margin: 3,}}/>
			</SampleButton>
		</Pressable>
	);
}
