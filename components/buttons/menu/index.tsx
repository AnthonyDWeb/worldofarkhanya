// LIBRARY
import React from "react";
import { View, Image } from "react-native";
import { useNavigation } from "@react-navigation/native";
// STYLE
import { useStyle } from "../../../contexts/style";
// CONTEXT
import { usePage } from "../../../contexts/page";
// VIEW
// COMPONENT
// OTHER
import SampleButton from "../sample";

export default function MenuButton() {
	const { updatePage } = usePage();
	const { styles } = useStyle();
	// Global Constante
	const navigation = useNavigation<any>();
	// Private Constante
	const icon = require("../../../assets/images/parameter.png");
	// Functions
	const handle = () => {
		updatePage("Menu");
		setTimeout(() => navigation.navigate("Menu"), 500);
	};
	// Renders

	return (
		<View style={styles.menuButton}>
			<SampleButton rad={50} action={() => handle()}>
				<Image source={icon} style={styles.menuButtonImage} />
			</SampleButton>
		</View>
	);
}
