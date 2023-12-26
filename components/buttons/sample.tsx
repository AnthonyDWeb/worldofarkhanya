import { Image } from "react-native";
import React, { useEffect, useState } from "react";
import { LinearGradient } from "expo-linear-gradient";
import { usePage } from "../../contexts/page";
import { useStyle } from "../../contexts/style";
import { SampleBtnProps } from "../../types";
import PressableButton from "./pressable_button";

export default function SampleButton({ children, action, rad, hide, style }: SampleBtnProps) {
	const { styles } = useStyle();
	const { parchmentDisplay } = usePage();
	const [active, setActivation] = useState(true);

	useEffect(() => {
		parchmentDisplay && setTimeout(() => setActivation(true), 450);
	}, [parchmentDisplay]);

	const bgBtnColors = ["#6c3f02", "#9f6913", "#fbcd76", "#9f6913", "#6c3f02"];
	const calc = require("../../assets/images/parchment/calc-parchment.png");

	const handle = () => {
		action();
		setActivation(false);
	};

	return (
		<PressableButton style={[styles.sampleBtnContainer, style && style]} action={() => active && handle()}>
			<LinearGradient colors={bgBtnColors} style={styles.sampleBtnBg}>
				{!hide && (
					<Image
						source={calc}
						style={[styles.sampleCalcUp, rad && { borderRadius: rad }]}
					/>
				)}
				{children}
				{!hide && (
					<Image
						source={calc}
						style={[styles.sampleCalcDown, rad && { borderRadius: rad }]}
					/>
				)}
			</LinearGradient>
		</PressableButton>
	);
}
