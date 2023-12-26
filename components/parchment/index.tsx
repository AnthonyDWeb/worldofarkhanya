// LIBRARY
import React, { useEffect } from "react";
import { Image, ImageBackground } from "react-native";
import Animated, { useSharedValue, withTiming, useAnimatedStyle, Easing } from "react-native-reanimated";
// STYLEs
import { useStyle } from "../../contexts/style";
// CONTEXT
import { usePage } from "../../contexts/page";
// VIEW
// COMPONENT
import Roll from "./roll/";
import MenuButton from "../buttons/menu";
import useDevice from "../../utils/hooks/useDevice";
// OTHER

export default function Parchment({ children }: any) {
	// Global Constante
	const { parchmentDisplay } = usePage();
	const { styles } = useStyle();
	const { screenSize, isMobile } = useDevice();
	const windowHeight = screenSize.height - (isMobile ? 60 : 70);
	// Private Constante
	const parchment = require("../../assets/images/parchment/parchment.jpg");
	const calc = require("../../assets/images/parchment/calc-parchment.png");

	const height = useSharedValue(0);
	const opacity = useSharedValue(0);
	const config = { duration: 300, easing: Easing.linear };

	const animHeight = useAnimatedStyle(() => {
		return {
			height: withTiming(height.value, config),
		};
	});
	const animOpacity = useAnimatedStyle(() => {
		return {
			opacity: withTiming(opacity.value, config),
		};
	});

	// Functions
	useEffect(() => {
		update();
	}, [parchmentDisplay]);

	const update = () => {
		height.value = parchmentDisplay ? windowHeight : 0;
		opacity.value = parchmentDisplay ? 1 : 0;
	};
	
	// Renders
	return (
		<Animated.View style={[styles.parchment, animHeight]}>
			<ImageBackground source={parchment} style={styles.parchmentpaper}>
				<Roll pos="top" />
				<Image source={calc} style={styles.parchmentCalcUp} />
				<Animated.ScrollView style={[styles.scrollpage, animOpacity]} showsVerticalScrollIndicator={false}>
					<MenuButton />
					{parchmentDisplay && children}
				</Animated.ScrollView>
				<Image source={calc} style={styles.parchmentCalcDown} />
				<Roll pos="bottom" />
			</ImageBackground>
		</Animated.View>
	);
}
