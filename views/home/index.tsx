// LIBRARY
import React from "react";
import { Text, View, Image } from "react-native";
// STYLE
import { useStyle } from "../../contexts/style";
// CONTEXT
import { useAuth } from "../../contexts/auth";
// VIEW
import Auth from "../auth";
// COMPONENT
// OTHER
import { TITLE } from "../../constants";
import Background from "../../components/background";
import Loader from "../../components/loader";

export default function Homepage() {
	// Global Constante
	const { styles } = useStyle();
	const { serverOpen } = useAuth();
	// Private Constante
	// Functions
	// Renders
	return (
		<Background>
			<View style={styles.centerContainer}>
				<Image source={require("../../assets/icon.png")} style={{height: 200, width: 200, marginTop: 20}}/>
				<Text style={[styles.mainTitle]}>{TITLE}</Text>
				{serverOpen ? <Auth /> : <Loader/>}
			</View>
		</Background>
	);
}