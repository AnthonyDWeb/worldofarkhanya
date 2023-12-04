// LIBRARY
import React from "react";
import { LinearGradient } from "expo-linear-gradient";
// STYLE
import { useStyle } from "../../../contexts/style";
import useDevice from "../../../utils/hooks/useDevice";
// CONTEXT
// VIEW
// COMPONENT
// OTHER

export default function Roll({ pos }: any) {
	// Global Constante
	const {styles} = useStyle();
	const {screenSize} = useDevice();
	const windowWidth = screenSize.width;
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
		{ width: windowWidth, [pos]: -10 },
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
