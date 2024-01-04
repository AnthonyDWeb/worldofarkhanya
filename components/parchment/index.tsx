// LIBRARY
import React, { useEffect } from "react";
import { Image, ImageBackground, View } from "react-native";
import Animated, {
	useSharedValue,
	withTiming,
	useAnimatedStyle,
	Easing,
} from "react-native-reanimated";
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

export default function Parchment({ children, modal, wSize }: any) {
	// Global Constante
	const { parchmentDisplay } = usePage();
	const { styles } = useStyle();
	const { screenSize, isMobile } = useDevice();
	const windowHeight = modal ? 0 : screenSize.height - (isMobile ? 60 : 70);
	const windowWidth = modal ? wSize : screenSize.width * 0.95;
	// Private Constante
	const parchment = require("../../assets/images/parchment/parchment.jpg");
	const calc = require("../../assets/images/parchment/calc-parchment.png");

	const height = useSharedValue(0);
	const opacity = useSharedValue(0);
	const config = { duration: 300, easing: Easing.linear };

	const animHeight = useAnimatedStyle(() => {
		return {
			minHeight: withTiming(height.value, config),
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

	const ModalRender = () => {
		return (
			<View style={{ paddingVertical: 20, paddingHorizontal: 30 }}>
				{children}
			</View>
		);
	};
	const DefaultRender = () => {
		return (
			<Animated.ScrollView
				style={[styles.scrollpage, animOpacity]}
				showsVerticalScrollIndicator={false}
			>
				{<MenuButton />}
				{parchmentDisplay && children}
			</Animated.ScrollView>
		);
	};
	// Renders
	return (
		<Animated.View
			style={[styles.parchment, animHeight, modal && { paddingTop: 0 }]}
		>
			<ImageBackground
				source={parchment}
				style={[styles.parchmentpaper, { minWidth: windowWidth }]}
			>
				<Roll pos="top" wSize={windowWidth} />
				<Image source={calc} style={[styles.parchmentCalcUp]} />
				{modal ? <ModalRender /> : <DefaultRender />}
				<Image source={calc} style={styles.parchmentCalcDown} />
				<Roll pos="bottom" wSize={windowWidth} />
			</ImageBackground>
		</Animated.View>
	);
}
