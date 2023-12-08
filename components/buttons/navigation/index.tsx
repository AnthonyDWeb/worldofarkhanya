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
// OTHER
type navBtnProps = { title: string; label: string };

export default function NavigationButton({ title, label }: navBtnProps) {
	// Global Constante
	const { styles } = useStyle();
	const { parchmentDisplay, updatePage } = usePage();
	// Private Constante
	// Functions
	// Renders

	return (
		<SampleButton action={() => parchmentDisplay && updatePage(label)}>
			<Text style={[styles.sampleTextButtons]}>{title}</Text>
		</SampleButton>
	);
}
