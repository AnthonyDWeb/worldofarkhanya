import { Image, View } from "react-native";
import React from "react";
import { LinearGradient } from "expo-linear-gradient";
import { useStyle } from "../../contexts/style";
import { usePage } from "../../contexts/page";

type btnProps = {
	children: any;
	hide?: boolean;
	rad?: number | string | any;
};
export default function SampleButton({ children, rad, hide }: btnProps) {
	const { styles } = useStyle();
	const { parchmentDisplay } = usePage();
	const br = rad && rad;
	const sampleStyle = [ styles.sampleButton, { opacity: parchmentDisplay ? 1 : 0.5 }, ];
	const colors = ["#6c3f02", "#9f6913", "#fbcd76", "#9f6913", "#6c3f02"];
	const calc = require("../../assets/images/parchment/calc-parchment.png");
	const calcUp = [styles.sampleCalc, { top: 0}];
	const calcDown = [
		styles.sampleCalc,
		{ bottom: 0, transform: [{ rotate: "180deg" }] },
	];

	return (
		<LinearGradient colors={colors} style={sampleStyle}>
			{!hide && <Image source={calc} style={calcUp} />}
			{children}
			{!hide && <Image source={calc} style={calcDown} />}
		</LinearGradient>
	);
}
