// LIBRARY
import React, { useEffect } from "react";
import { Image, ImageBackground, useWindowDimensions } from "react-native";
import Animated, {
	useSharedValue,
	withTiming,
	useAnimatedStyle,
	Easing,
} from "react-native-reanimated";
// STYLEs
import { styles } from "../../styles";
// CONTEXT
import { usePage } from "../../contexts/page";
// VIEW
// COMPONENT
import Roll from "./roll/";
// OTHER

export default function Parchment({ children }: any) {
	// Global Constante
	const { parchmentDisplay } = usePage();
	const windowHeight = useWindowDimensions().height;
	// Private Constante
	const parchment = require("../../assets/images/parchment.jpg");
	const backgroundButton = [
		"#6c3f02",
		"#9f6913",
		"#fbcd76",
		"#9f6913",
		"#6c3f02",
	];
	const calc = require("../../assets/images/calc-parchment.png");
	const height = useSharedValue(0);
	const opacity = useSharedValue(0);
	const padding = useSharedValue(0);

	const config = { duration: 500, easing: Easing.bezier(0.5, 0.01, 0, 1) };

	const animHeight = useAnimatedStyle(() => {
		return { height: withTiming(height.value, config) };
	});
	const animOpacity = useAnimatedStyle(() => {
		return {
			opacity: withTiming(opacity.value, config),
			paddingTop: withTiming(padding.value, config),
			paddingBottom: withTiming(padding.value, config),
		};
	});
	const animeHeightStyle = [
		styles.parchment,
		{ height: windowHeight - 40 },
		animHeight,
	];

	const scrollStyle = [styles.scrollpage, animOpacity];
	// Functions
	useEffect(() => {
		height.value = parchmentDisplay ? windowHeight - 40 : 0;
		opacity.value = parchmentDisplay ? 1 : 0;
		padding.value = parchmentDisplay ? 10 : 0;
	}, [parchmentDisplay]);

	// Renders
	return (
		<Animated.View style={animeHeightStyle}>
			<ImageBackground source={parchment} style={styles.parchmentpaper}>
				<Roll pos="top" />
				<Image source={calc} style={[styles.parchmentCacl,{top: 0 }]} />
				<Animated.ScrollView style={scrollStyle} showsVerticalScrollIndicator={false}>
					{children}
				</Animated.ScrollView>
				<Image source={calc} style={[styles.parchmentCacl,{bottom: 0, transform: [{ rotate: '180deg' }] }]} />
				<Roll pos="bottom" />
			</ImageBackground>
		</Animated.View>
	);
}
