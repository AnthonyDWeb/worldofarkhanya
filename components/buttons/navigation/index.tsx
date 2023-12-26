// LIBRARY
import React from "react";
import { Text } from "react-native";
// STYLE
import { useStyle } from "../../../contexts/style";
// CONTEXT
import { usePage } from "../../../contexts/page";
// VIEW
// COMPONENT
import SampleButton from "../sample";
import { useNavigation } from "@react-navigation/native";
import { NavigationProps, NavigationBtnProps } from "../../../types";
// OTHER

export default function NavigationButton({ title, label }: NavigationBtnProps) {
	// Global Constante
	const { styles } = useStyle();
	const { parchmentDisplay, updatePage } = usePage();
	const navigation = useNavigation<NavigationProps>();
	// Private Constante
	// Functions
	const handle = () => {
		updatePage(label);
		navigation.navigate("Navigation");
	};
	// Renders

	return (
		<SampleButton action={() => parchmentDisplay && handle()}>
			<Text style={[styles.sampleTextButtons]}>{title}</Text>
		</SampleButton>
	);
}
