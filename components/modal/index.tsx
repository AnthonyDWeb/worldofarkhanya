import { View, Text } from "react-native";
import React, { useEffect, useState } from "react";
import Parchment from "../parchment";
import useDevice from "../../utils/hooks/useDevice";
import { useStyle } from "../../contexts/style";
import PressableButton from "../buttons/pressable/pressable_button";
import BackgroundButton from "../buttons/background";
import TextButton from "../buttons/TextButton";

export const Modal = ({ message, cancel, validate }: any) => {
	const { styles } = useStyle();
	const { screenSize } = useDevice();
	const [display,setDisplay] = useState(false);
	const width = screenSize.width * 0.75;
	const height = screenSize.height*0.4;

	useEffect(() => {
		setTimeout(() => setDisplay(true), 300)
	}, [])
	return (
		<View style={styles.modalContainer}>
			<Parchment modal hSize={height} wSize={width}>
				{display &&
				<View style={{height: "100%", justifyContent: "space-around"}}>
					<Text style={[styles.text, { textAlign: "center" }]}>{message}</Text>
					<View style={[styles.rowContainer,{ justifyContent: "space-around", marginTop: 10 }]}>
						<TextButton action={cancel} text="Annuler" textStyle={styles.textButton} bgStyle={{borderRadius: 20}}/>
						<TextButton action={validate} text="Valider" textStyle={styles.textButton} bgStyle={{borderRadius: 20}}/>
					</View>
				</View>
				}
			</Parchment>
		</View>
	);
};
