// LIBRARY
import React from "react";
import { useWindowDimensions } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
// STYLE
import { styles } from "../../../styles";
// CONTEXT
// VIEW
// COMPONENT
// OTHER

export default function Roll({ pos }: any) {
	// Global Constante
	const windowWidth = useWindowDimensions().width;
	// Private Constante
	const backgroundBorder = [
		"#6c3f02",
		"#d3913a",
		"#a35f04",
		"#a35f04",
		"#6c3f02",
	];
	const rollStyle = [
		styles.parchmentRoll,
		{ width: windowWidth - 25, [pos]: -10 },
	];
	const rollBorderLeft = [styles.parchmentRollBorder, { left: 5 }];
	const rollBorderRight = [styles.parchmentRollBorder, { right: 5 }];
	// Functions

	// Renders

	return (
		<LinearGradient colors={backgroundBorder} style={rollStyle}>
			<LinearGradient colors={backgroundBorder} style={rollBorderLeft}/>
			<LinearGradient colors={backgroundBorder} style={rollBorderRight}/>
		</LinearGradient>
	);
}
