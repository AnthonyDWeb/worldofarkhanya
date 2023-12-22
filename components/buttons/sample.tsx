import { Image, Pressable } from "react-native";
import React, { useEffect, useState } from "react";
import { LinearGradient } from "expo-linear-gradient";
import { usePage } from "../../contexts/page";
import { useStyle } from "../../contexts/style";

type btnProps = {
	children: any;
	action: () => void;
	rad?: number;
	hide?: boolean;
};
export default function SampleButton({ children, action, rad, hide }: btnProps) {
	const { styles } = useStyle();
	const { parchmentDisplay } = usePage();
	const [active, setActivation] = useState(true);

	useEffect(() => {
		parchmentDisplay && setTimeout(() => setActivation(true), 450);
	}, [parchmentDisplay])

	const bgBtnColors = ["#6c3f02", "#9f6913", "#fbcd76", "#9f6913", "#6c3f02"];

	const calc = require("../../assets/images/parchment/calc-parchment.png");
	const calcUp = [styles.sampleCalcUp, rad && { borderRadius: rad }];
	const calcDown = [styles.sampleCalcDown, rad && { borderRadius: rad }];

	const HandleButton = ({children}: any) => {
		return (
			<Pressable
				style={({ pressed }) => [
					styles.sampleBtnContainer,
					{ opacity: (pressed || !active) ? 0.5 : 1},
				]}
				onPress={() => active && (action(), setActivation(false))}
			>
				{children}
			</Pressable>
		);
	};

	return (
		<HandleButton>
			<LinearGradient colors={bgBtnColors} style={styles.sampleBtnBg}>
				{!hide && <Image source={calc} style={calcUp} />}
				{children}
				{!hide && <Image source={calc} style={calcDown} />}
			</LinearGradient>
		</HandleButton>
	);
}
