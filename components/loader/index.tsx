import { ActivityIndicator, Text, View } from "react-native";
import React from "react";
import { useStyle } from "../../contexts/style";
import useDevice from "../../utils/hooks/useDevice";
import Parchment from "../parchment";

export default function Loader() {
	const { screenSize } = useDevice();
	const { styles } = useStyle();
	const width = screenSize.width * 0.7;
	const height = screenSize.height * 0.4;
	return (
		<Parchment modal hSize={height} wSize={width}>
        <ActivityIndicator size="large" />
        <Text style={styles.text}>Chargement des données en cours...</Text>
		</Parchment>
	);
}
