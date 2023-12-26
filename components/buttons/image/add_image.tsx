import { Image } from "react-native";
import React from "react";
import { LinearGradient } from "expo-linear-gradient";
import { useStyle } from "../../../contexts/style";
import { MaterialIcons } from "@expo/vector-icons";
import SampleButton from "../sample";

type btnProps = {
	children: any;
	action: () => void;
};
export default function AddImage({ children, action }: btnProps) {
	const { styles } = useStyle();

	const bgBtnColors = ["#6c3f02", "#9f6913", "#fbcd76", "#9f6913", "#6c3f02"];
	const calc = require("../../../assets/images/parchment/calc-parchment.png");


	const Upload = () => {
		return (
			<SampleButton style={{ position: "absolute", bottom: "0%", right: "0%" }} action={() => action()}>
				<LinearGradient colors={bgBtnColors} style={styles.sampleBtnBg}>
					<Image source={calc} style={[styles.sampleCalcUp, { height: 70, borderRadius: 70 }]} />
					<MaterialIcons name="add" size={30} color="black" style={{ margin: 5, zIndex: 20 }} />
					<Image source={calc} style={[styles.sampleCalcDown, { height: 70, borderRadius: 70 }]} />
				</LinearGradient>
			</SampleButton>
		);
	};
	return (
		<LinearGradient colors={bgBtnColors} style={styles.addImageButton}>
			{children}
			<Upload />
		</LinearGradient>
	);
}
