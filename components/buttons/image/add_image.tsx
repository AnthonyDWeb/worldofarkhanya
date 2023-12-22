import { Image } from "react-native";
import React from "react";
import { LinearGradient } from "expo-linear-gradient";
import { useStyle } from "../../../contexts/style";
import PressableButton from "../pressable_button";
import { MaterialIcons } from "@expo/vector-icons";

type btnProps = {
	children: any;
	action: () => void;
};
export default function AddImage({ children, action }: btnProps) {
	const { styles } = useStyle();

	const rad = 200;
	const bgStyle = [
		styles.sampleBtnBg,
		{
			position: "relative",
			height: 200,
			width: 200,
			borderRadius: rad,
			justifyContent: "center",
			alignItems: "center",
            padding: 10,
		},
	];
	const bgBtnColors = ["#6c3f02", "#9f6913", "#fbcd76", "#9f6913", "#6c3f02"];
	const calc = require("../../../assets/images/parchment/calc-parchment.png");
	const calcUp = [styles.sampleCalcUp, { height: 70, borderRadius: 70 }];
	const calcDown = [styles.sampleCalcDown, { height: 70, borderRadius: 70 }];


	const Upload = () => {
        const btnStyle = [
			styles.sampleBtnContainer,
			{ position: "absolute", bottom: "0%", right: "0%" },
		];
		const iStyle = { margin: 5, zIndex: 20 };
		return (
			<PressableButton style={btnStyle} action={() => action()}>
				<LinearGradient colors={bgBtnColors} style={styles.sampleBtnBg}>
					<Image source={calc} style={calcUp} />
					<MaterialIcons name="add" size={30} color="black" style={iStyle} />
					<Image source={calc} style={calcDown} />
				</LinearGradient>
			</PressableButton>
		);
	};
	return (
		<LinearGradient colors={bgBtnColors} style={bgStyle}>
			{children}
			<Upload />
		</LinearGradient>
	);
}
