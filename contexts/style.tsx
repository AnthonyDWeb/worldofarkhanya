import React, { createContext } from "react";
import { StyleSheet } from "react-native";
import useDevice from "../utils/hooks/useDevice";

const StyleContext = createContext<any>({});

export const StyleProvider = (props: any) => {
	const { device, isMobile, screenSize } = useDevice();
	const windowHeight = screenSize.height - (isMobile ? 60 : 70);
	const defaultButtonRadius = 25;

	const styles = StyleSheet.create({
		// BACKGROUND
		background: {
			width: "100%",
			height: "100%",
			justifyContent: "space-between",
		},

		// SECTION
		section: {
			marginTop: 20,
			marginHorizontal: 15
		},

		// NAVIGATION BAR
		navigation: {
			zIndex: 5,
			bottom: 0,
			position: "absolute",
			width: "100%",
			display: "flex",
			flexDirection: "row",
			alignItems: "center",
			justifyContent: "space-around",
			height: isMobile ? 55 : 60,
		},
		navigationBackgroundButton: {
			padding: 0.7,
			borderRadius: defaultButtonRadius,
		},
		navigationButton: {
			marginHorizontal: 15,
			marginVertical: device === "mobile" ? 5 : 10,
			borderRadius: defaultButtonRadius,
			borderWidth: 0.5,
			borderColor: device === "mobile" ? "rgba(0,0,0,0.9)" : "rgba(0,0,0,0.2)",
			shadowColor: "#000",
			shadowOpacity: 1,
			shadowRadius: 10,
			shadowOffset: { width: 0, height: 8 },
		},

		// PARCHMENT
		parchment: {
			maxHeight: windowHeight,
			paddingBottom: 0,
			paddingHorizontal: 15,
			paddingTop: device === "mobile" ? 20 : 40,
		},
		parchmentpaper: {
			flex: 1,
			position: "relative",
		},
		parchmentRoll: {
			height: 10,
			borderRadius: 10,
			alignSelf: "center",
			position: "absolute",
		},
		parchmentRollBorder: {
			position: "absolute",
			top: -5,
			width: 10,
			height: 20,
			borderRadius: 10,
		},
		parchmentCalcUp: {
			position: "absolute",
			height: "15%",
			width: "100%",
			zIndex: 0,
			top: 0,
		},
		parchmentCalcDown: {
			position: "absolute",
			height: "15%",
			width: "100%",
			zIndex: 0,
			bottom: 0,
			transform: [{ rotate: "180deg" }],
		},
		scrollpage: {
			paddingHorizontal: 10,
		},

		// TITLE - TEXT
		maintitle: {
			fontFamily: "imf",
			fontSize: 20,
		},
		titlePage: {
			fontFamily: "cookie",
			fontSize: device === "mobile" ? 40 : 55,
			textAlign: "center",
			textDecorationLine: "underline",
			textShadowColor: "black",
			textShadowOffset: { width: 1, height: 0 },
			textShadowRadius: isMobile ? 3 : 5,
		},
		title: {
			fontFamily: "cookie",
			fontSize: device === "mobile" ? 30 : 55,
			textShadowColor: "black",
			textShadowOffset: { width: 1, height: 0 },
			textShadowRadius: isMobile ? 3 : 5,
		},
		text: {
			fontFamily: "cookie",
			fontSize: 25,
		},

		// BUTTON
		sampleBtnContainer: {
			position: "relative",
			display: "flex",
			alignItems: "center",
			borderColor: "rgba(0,0,0,0.7)",
			borderTopWidth: 0.5,
			borderRightWidth: 0.5,
			borderLeftWidth: 2,
			borderBottomWidth: 2,
			borderRadius: defaultButtonRadius,
			justifyContent: "center",
		},
		sampleBtnBg: {
			borderRadius: defaultButtonRadius,
			borderWidth: 0.5,
			shadowColor: "#000",
			shadowOpacity: 1,
			shadowRadius: 10,
			shadowOffset: { width: 0, height: 8 },
			borderColor: isMobile ? "rgba(0,0,0,0.9)" : "rgba(0,0,0,0.2)",
		},
		sampleCalcUp: {
			position: "absolute",
			borderRadius: defaultButtonRadius,
			left: 0,
			top: 0.1,
			height: isMobile ? 34 : 40,
			width: "100%",
			opacity: isMobile ? 0.9 : 0.5,
		},
		sampleCalcDown: {
			position: "absolute",
			borderRadius: defaultButtonRadius,
			left: 0,
			bottom: 0.1,
			transform: [{ rotate: "180deg" }],
			height: isMobile ? 34 : 40,
			width: "100%",
			opacity: isMobile ? 0.9 : 0.5,
		},
		sampleTextButtons: {
			zIndex: 10,
			fontFamily: "cookie",
			fontSize: 25,
			marginRight: 3,
			paddingVertical: 2,
			paddingHorizontal: 10,
			textShadowColor: "black",
			textShadowOffset: { width: 1, height: 0 },
			textShadowRadius: isMobile ? 3 : 5,
		},
		menuButton: {
			top: 5,
			right: 0,
			zIndex: 20,
			position: "absolute",
		},
		menuButtonImage: {
			margin: 3,
			zIndex: 20,
			width: device === "mobile" ? 20 : 30,
			height: device === "mobile" ? 20 : 30,
		},
	});

	return <StyleContext.Provider value={{ styles }} {...props} />;
};
export const useStyle = () => React.useContext(StyleContext);
