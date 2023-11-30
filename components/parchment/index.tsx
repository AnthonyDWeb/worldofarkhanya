// LIBRARY
import React, { useEffect } from "react";
import { Image, ImageBackground, useWindowDimensions } from "react-native";
import Animated, { useSharedValue,withTiming,useAnimatedStyle,Easing } from "react-native-reanimated";
// STYLEs
import { styles } from "../../styles";
// CONTEXT
import { usePage } from "../../contexts/page";
// VIEW
// COMPONENT
import Roll from "./roll/";
import MenuButton from "../buttons/menu";
// OTHER

export default function Parchment({ children }: any) {
	// Global Constante
	const {  parchmentDisplay } = usePage();
	const windowHeight = useWindowDimensions().height;
	// Private Constante
	const parchment = require("../../assets/images/parchment/parchment.jpg");
	const calc = require("../../assets/images/parchment/calc-parchment.png");
	const height = useSharedValue(0);
	const opacity = useSharedValue(0);
	const padding = useSharedValue(0);

	const config = { duration: 300, easing: Easing.linear };
	const animHeight = useAnimatedStyle(() => {
		return {
			height: withTiming(height.value, config),
		};
	});
	const animOpacity = useAnimatedStyle(() => {
		return {
			opacity: withTiming(opacity.value, config),
			paddingTop: withTiming(padding.value, config),
			paddingBottom: withTiming(padding.value, config),
		};
	});
	const animeHeightStyle = [ styles.parchment, { height: windowHeight - 45 }, animHeight ];

	const scrollStyle = [styles.scrollpage, animOpacity];
	const calcUp = [styles.parchmentCacl, { top: 0 }];
	const calcDown = [styles.parchmentCacl,{ bottom: 0, transform: [{ rotate: "180deg" }] }];

	// Functions
	useEffect(() => {
		height.value = parchmentDisplay ? windowHeight - 45 : 0;
		opacity.value = parchmentDisplay ? 1 : 0;
		padding.value = parchmentDisplay ? 10 : 0;
	}, [parchmentDisplay]);

	// Renders
	return (
		<Animated.View style={animeHeightStyle}>
			<ImageBackground source={parchment} style={styles.parchmentpaper}>
				<MenuButton/>
				<Roll pos="top" />
				<Image source={calc} style={calcUp} />
				<Animated.ScrollView style={scrollStyle} showsVerticalScrollIndicator={false}>
					{parchmentDisplay && children}
				</Animated.ScrollView>
				<Image source={calc} style={calcDown}/>
				<Roll pos="bottom" />
			</ImageBackground>
		</Animated.View>
	);
}