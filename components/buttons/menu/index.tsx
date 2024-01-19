// LIBRARY
import React, { useEffect } from "react";
import { View, Image, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
// STYLE
import { useStyle } from "../../../contexts/style";
// CONTEXT
import { usePage } from "../../../contexts/page";
// VIEW
// COMPONENT
// OTHER
import BackgroundButton from "../background";
import { NavigationProps } from "../../../types";
import Animated from "react-native-reanimated";

export default function MenuButton({ opacity }: any) {
	// Global Constante
	const { updatePage } = usePage();
	const { styles } = useStyle();
	const navigation = useNavigation<NavigationProps>();
	// Private Constante
	const icon = require("../../../assets/images/parameter.png");
	// Functions

	const handle = () => {
		updatePage("Menu");
		setTimeout(() => navigation.navigate("Menu"), 500);
	};
	// Renders
	const value = 80;
	return (
		<Animated.View style={[styles.menuButton, opacity]}>
			<Pressable onPress={handle}>
				<BackgroundButton>
					<Image source={icon} style={[styles.menuButtonImage]} />
				</BackgroundButton>
			</Pressable>
		</Animated.View>
	);
}
