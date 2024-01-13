import { Image } from "react-native";
import React from "react";
import { LinearGradient } from "expo-linear-gradient";
import { useStyle } from "../../../contexts/style";
import { SampleBtnProps } from "../../../types";

export default function BackgroundButton({ children, rad }: SampleBtnProps) {
	const { styles } = useStyle();
	const bgBtnColors = ["#6c3f02", "#9f6913", "#fbcd76", "#9f6913", "#6c3f02"];
	const calc = require("../../../assets/images/parchment/calc-parchment.png");
	const radStyle = rad && { borderRadius: rad, width: rad, height: rad };

	return (
		<LinearGradient colors={bgBtnColors} style={[styles.sampleBtnBg, radStyle]}>
			<Image source={calc} style={[styles.sampleCalcUp, radStyle]} />
			{children}
			<Image source={calc} style={[styles.sampleCalcDown, radStyle]} />
		</LinearGradient>
	);
}
