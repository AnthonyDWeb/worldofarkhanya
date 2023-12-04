// LIBRARY
import React from "react";
import { Pressable, Image } from "react-native";
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
	const {styles} = useStyle();
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
					style={styles.menuButtonImage}
				/>
			</SampleButton>
		</Pressable>
	);
}
