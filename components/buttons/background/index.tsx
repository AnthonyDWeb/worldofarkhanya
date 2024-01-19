import { Image } from "react-native";
import React from "react";
import { LinearGradient } from "expo-linear-gradient";
import { useStyle } from "../../../contexts/style";
import { SampleBtnProps } from "../../../types";

export default function BackgroundButton({ children, addStyle }: SampleBtnProps) {
	const { styles } = useStyle();
	const bgBtnColors = ["#6c3f02", "#9f6913", "#fbcd76", "#9f6913", "#6c3f02"];
	const calc = require("../../../assets/images/parchment/calc-parchment.png");

	return (
		<LinearGradient colors={bgBtnColors} style={[styles.centerContainer,styles.background_button, styles.shadow, addStyle]}>
			<Image source={calc} style={[styles.calc, styles.t_0, addStyle]} />
			{children}
			<Image source={calc} style={[styles.calc, styles.b_0, styles.rot_180,addStyle]} />
		</LinearGradient>
	);
}
