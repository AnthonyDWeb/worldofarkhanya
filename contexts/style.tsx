import React, { createContext } from "react";
import { StyleSheet } from "react-native";
import useDevice from "../utils/hooks/useDevice";
import { StyleContextProps } from "../types";

const StyleContext = createContext<StyleContextProps>({ styles: {} });

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

		// CONTAINER
		centerContainer: {
			position: "relative",
			flex: 1,
			width: "100%",
			display: "flex",
			alignItems: "center",
			justifyContent: "center",
		},
		rowContainer: {
			position: "relative",
			display: "flex",
			flexDirection: "row",
			alignItems: "center",
		},
		columnContainer: {
			position: "relative",
			display: "flex",
			flexDirection: "column",
			justifyContent: "center",
		},

		// TITLE - TEXT
		mainTitle: {
			fontSize: 35,
			fontFamily: "imf",
			textAlign: "center",
			margin: 20,
			textShadowRadius: 5,
			textShadowColor: "crimson",
			textShadowOffset: { width: 1.5, height: 0 },
		},
		titlePage: {
			fontFamily: "cookie",
			fontSize: device === "mobile" ? 40 : 55,
			textAlign: "center",
			textDecorationLine: "underline",
			textShadowColor: "black",
			textShadowOffset: { width: 1, height: 0 },
			textShadowRadius: 2,
		},
		title: {
			fontFamily: "cookie",
			fontSize: device === "mobile" ? 30 : 55,
			textShadowColor: "black",
			textShadowOffset: { width: 1, height: 0 },
			textShadowRadius: 2,
		},
		secondaryTitle: {
			fontSize: 30,
			fontFamily: "cookie",
			textShadowColor: "black",
			textShadowOffset: { width: 1, height: 0 },
			textShadowRadius: 2,
			marginVertical: 5,
			textAlign: "center",
		},
		text: {
			fontFamily: "cookie",
			fontSize: 25,
		},

		// AUTHENTIFICATION
		authContainer: {
			width: "80%",
			alignItems: "center",
		},
		authTitleSelection: {
			display: "flex",
			flexDirection: "row",
			alignItems: "baseline",
			justifyContent: "center",
			marginBottom: 20,
		},
		authInputContainer: {
			marginVertical: 5,
		},
		authLabel: {
			fontFamily: "cookie",
			fontSize: 25,
			marginHorizontal: 5,
			paddingVertical: 2,
		},
		authInput: {
			textAlign: "center",
			borderWidth: 0.1,
			borderRadius: 10,
			paddingVertical: 5,
			paddingHorizontal: 15,
			color: "dimgray",
			backgroundColor: "#F3EEEA",
		},
		authButtonValidation: {
			paddingVertical: 5,
			paddingHorizontal: 20,
			borderWidth: 1,
			borderRadius: 15,
			borderColor: "black",
		},

		// AUTH STORAGE
		profileContainer: {
			borderColor: "Black",
			borderTopWidth: 1,
			borderBottomWidth: 1,
			borderLeftWidth: 0.01,
			borderRightWidth: 0.01,
			marginVertical: 10,
			borderRadius: 15,
			width: 150,
		},
		profileStorageName: {
			marginVertical: 0,
			paddingVertical: 5,
			textAlign: "center",
			borderRadius: 15,
			backgroundColor: "rgba(255,255,255,0.2)",
		},

		// MENU
		menuSection: {
			padding: 10,
			borderBottomColor: "grey",
			borderBottomWidth: 1,
		},
		menuBack: {
			display: "flex",
			flexDirection: "row",
			alignItems: "center",
			position: "absolute",
			top: 10,
			left: 10,
			height: 20,
			zIndex: 25,
		},

		// PROFILE
		profileCreation: {
			marginTop: 20,
			marginHorizontal: 15,
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
			paddingHorizontal: 15,
			alignSelf: "center",
			paddingTop: isMobile ? 20 : 40
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
			transform: "rotate(180deg)",
		},
		scrollpage: {
			paddingHorizontal: 10,
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
			transform: "rotate(180deg)",
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
			textShadowRadius: 2.5,
		},
		addImageButton: {
			position: "relative",
			height: 200,
			width: 200,
			borderRadius: 200,
			justifyContent: "center",
			alignItems: "center",
			padding: 10,
			borderWidth: 0.5,
			shadowColor: "#000",
			shadowOpacity: 1,
			shadowRadius: 10,
			shadowOffset: { width: 0, height: 8 },
			borderColor: isMobile ? "rgba(0,0,0,0.9)" : "rgba(0,0,0,0.2)",
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

	const styleContextValue: StyleContextProps = { styles };

	return <StyleContext.Provider value={styleContextValue} {...props} />;
};
export const useStyle = () => React.useContext(StyleContext);
