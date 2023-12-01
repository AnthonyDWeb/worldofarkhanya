// LIBRARY
import React from "react";
import { Pressable, Image } from "react-native";
// STYLE
import { styles } from "../../../styles";
import SampleButton from "../sample";
import { useNavigation } from "@react-navigation/native";
import { usePage } from "../../../contexts/page";
// CONTEXT
// VIEW
// COMPONENT
// OTHER

export default function MenuButton() {
	const { updatePage } = usePage();
	// Global Constante
	const navigation = useNavigation<any>();
	// Private Constante
	const icon = require("../../../assets/images/parameter.png");
	// Functions

	// Renders

	return (
		<Pressable
			style={styles.menuButton}
			onPress={() => {
				updatePage("Menu");
				setTimeout(()=> navigation.navigate("Menu"),500);
			}}
		>
			<SampleButton rad={50} hide={true}>
				<Image
					source={icon}
					style={{ height: 20, width: 20, margin: 3 }}
				/>
			</SampleButton>
		</Pressable>
	);
}
