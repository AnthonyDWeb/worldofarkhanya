import React from "react";
import { ImageBackground } from "react-native";
import { useStyle } from "../../contexts/style";
import { View } from "react-native";

export default function Background(children: any) {
	const {styles} = useStyle();
	const bg = require("../../assets/images/background.jpg");
	return <ImageBackground source={bg} style={styles.background} {...children} />;
}
