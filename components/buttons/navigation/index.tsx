// LIBRARY
import React from "react";
import { Text, Pressable } from "react-native";
// STYLE
import { useStyle } from "../../../contexts/style";
// CONTEXT
import { usePage } from "../../../contexts/page";
// VIEW
// COMPONENT
import SampleButton from "../sample";
import { LinearGradient } from "expo-linear-gradient";
// OTHER
type navBtnProps = { title: string; label: string };

export default function NavigationButton({ title, label }: navBtnProps) {
	// Global Constante
	const {styles} = useStyle();
	const { parchmentDisplay, updatePage } = usePage();
	// Private Constante
	const backgroundBorder = ["#6c3f02","#d3913a","#a35f04","#a35f04","#6c3f02",];
	// Functions
	// Renders

	return (
		<Pressable onPress={() => parchmentDisplay && updatePage(label)} style={styles.navigationButton}>
			<LinearGradient colors={backgroundBorder} style={styles.navigationBackgroundButton}>
				<SampleButton>
					<Text style={[styles.sampleText]}>{title}</Text>
				</SampleButton>
			</LinearGradient>
		</Pressable>
	);
}