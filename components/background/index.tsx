import React from "react";
import { ImageBackground } from "react-native";
import { styles } from "../../styles";

export default function Background(children: any) {
	const bg = require("../../assets/images/background.jpg");
	return <ImageBackground source={bg} style={styles.background} {...children} />;
}
