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
// OTHER
type navBtnProps = { title: string; label: string };

export default function NavigationButton({ title, label }: navBtnProps) {
	// Global Constante
	const { styles } = useStyle();
	const { parchmentDisplay, updatePage } = usePage();
	const navigation = useNavigation<any>();
	// Private Constante
	// Functions
	const handle = () => {
		updatePage(label)
		setTimeout(() => navigation.navigate("Navigation", {
			screen: label
		}), 500)
	}
	// Renders

	return (
		<SampleButton action={() => parchmentDisplay && handle()}>
			<Text style={[styles.sampleTextButtons]}>{title}</Text>
		</SampleButton>
	);
}
