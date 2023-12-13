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
import useDevice from "../../../utils/hooks/useDevice";
// OTHER
type navBtnProps = { title: string; label: string };

export default function NavigationButton({ title, label }: navBtnProps) {
	// Global Constante
	const { styles } = useStyle();
	const { parchmentDisplay, updatePage } = usePage();
	const {isMobile} = useDevice();
	const navigation = useNavigation<any>();
	// Private Constante
	// Functions
	const handle = () => {
		updatePage(label)
		!isMobile && navigation.navigate("Navigation")
	}
	// Renders

	return (
		<SampleButton action={() => parchmentDisplay && handle()}>
			<Text style={[styles.sampleTextButtons]}>{title}</Text>
		</SampleButton>
	);
}
