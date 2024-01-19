import React, { createContext } from "react";
import { StyleSheet } from "react-native";
import useDevice from "../utils/hooks/useDevice";
import { StyleContextProps } from "../types";

const StyleContext = createContext<StyleContextProps>({ styles: {} });

export const StyleProvider = (props: any) => {
	const { device, isMobile, screenSize, parchmentWidth, parchmentHeight } =
		useDevice();
	const defaultButtonRadius = 25;
	const styles = StyleSheet.create({
		// BACKGROUND
		background: {
			flex: 1,
			justifyContent: "space-between",
		},

		// CONTAINER
		fullscreen: {
			flex: 1,
		},
		centerContainer: {
			display: "flex",
			position: "relative",
			alignItems: "center",
			justifyContent: "center",
		},
		rowContainer: {
			display: "flex",
			position: "relative",
			flexDirection: "row",
			alignItems: "center",
		},
		columnContainer: {
			display: "flex",
			position: "relative",
			flexDirection: "column",
			justifyContent: "center",
		},

		// TITLE - TEXT
		mainTitle: {
			zIndex: 1,
			fontFamily: "imf",
			textAlign: "center",
			fontSize: screenSize.width / 9,
			fontWeight: "600",
			marginBottom: 20,
			textShadowRadius: 5,
			textShadowColor: "crimson",
			textShadowOffset: { width: 1.5, height: 0 },
		},
		secondaryTitle: {
			zIndex: 1,
			fontSize: 30,
			marginVertical: 5,
			marginHorizontal: 10,
			textAlign: "center",
			fontFamily: "cookie",
			textShadowRadius: 2,
			textShadowColor: "black",
			textShadowOffset: { width: 1, height: 0 },
		},
		titlePage: {
			marginTop: 15,
			textAlign: "center",
			fontFamily: "cookie",
			textShadowRadius: 2,
			textShadowColor: "black",
			textDecorationLine: "underline",
			fontSize: device === "mobile" ? 40 : 55,
			textShadowOffset: { width: 1, height: 0 },
		},
		text: {
			zIndex: 1,
			fontFamily: "cookie",
			fontSize: screenSize.width / 15,
		},
		textButton: {
			zIndex: 1,
			fontFamily: "cookie",
			paddingVertical: 5,
			marginHorizontal: 10,
			fontSize: screenSize.width / 15,
			textShadowRadius: 2,
			textShadowColor: "black",
			textShadowOffset: { width: 1, height: 0 },
		},

		// BUTTON
		background_button: {
			minHeight: 30,
			borderWidth: 2,
			borderColor: "rgba(0,0,0,0.9)",
			borderRadius: defaultButtonRadius,
			overflow: "hidden",
		},

		// NAVIGATION BAR
		navigation: {
			// zIndex: 5,
			// bottom: 0,
			// position: "absolute",
			width: "100%",
			display: "flex",
			flexDirection: "row",
			alignItems: "center",
			justifyContent: "space-around",
			height: isMobile ? 55 : 60,
		},
		// PARCHMENT
		parchment: {
			width: parchmentWidth,
			maxHeight: parchmentHeight,
			alignSelf: "center",
			marginTop: isMobile ? 20 : 40,
		},
		parchmentpaper: {
			flex: 1,
			alignSelf: "center",
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

		// AUTHENTIFICATION
		authContainer: {
			width: "90%",
			marginTop: 15,
		},
		authLabel: {
			paddingVertical: 2,
			marginHorizontal: 5,
			fontFamily: "cookie",
			fontSize: screenSize.width / 12,
		},
		authInput: {
			color: "dimgray",
			borderWidth: 0.1,
			borderRadius: defaultButtonRadius,
			textAlign: "center",
			paddingHorizontal: 15,
			backgroundColor: "rgba(255,255,255,0.4)",
		},
		storageUser: {
			width: 120,
			marginTop: 100,
			alignSelf: "center",
			borderColor: "Black",
			borderTopWidth: 2,
			borderBottomWidth: 2,
			borderLeftWidth: 0.5,
			borderRightWidth: 0.5,
			borderRadius: defaultButtonRadius,
		},

		// AUTH STORAGE

		// MENU
		menuButton: {
			position: "absolute",
			top: 5,
			right: 5,
			zIndex: 10,
		},
		menuButtonImage: {
			zIndex: 1,
			width: 30,
			height: 30,
		},
		menuSection: {
			padding: 10,
			borderBottomWidth: 1,
			borderBottomColor: "grey",
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

		// Modal
		modalContainer: {
			zIndex: 100,
			padding: 20,
			height: "100%",
			alignSelf: "center",
			position: "absolute",
			justifyContent: "center",
			backgroundColor: "rgba(0,0,0,0.3)",
		},

		// OTHER
		sampleTextButtons: {
			zIndex: 10,
			fontFamily: "cookie",
			fontSize: 25,
			marginRight: 3,
			paddingVertical: 2,
			paddingHorizontal: 10,
			textShadowRadius: 2.5,
			textShadowColor: "black",
			textShadowOffset: { width: 1, height: 0 },
		},
		shadow: {
			shadowOpacity: 1,
			shadowRadius: 10,
			shadowColor: "#000",
			shadowOffset: { width: 0, height: 8 },
		},
		textShadow: {
			textShadowRadius: 5,
			textShadowColor: "dimgrey",
			textShadowOffset: { width: 1, height: 0 },
		},
		calc: {
			left: 0,
			zIndex: 0,
			maxHeight: 60,
			width: "100%",
			position: "absolute",
			borderRadius: defaultButtonRadius - 2,
		},
		scrollpage: {
			height: parchmentHeight,
			paddingHorizontal: 10,
		},
		rot_90: {
			transform: [{ rotate: "90deg" }],
		},
		_rot_90: {
			transform: [{ rotate: "-90deg" }],
		},
		rot_180: {
			transform: [{ rotate: "180deg" }],
		},
		t_0: {
			top: 0,
		},
		b_0: {
			bottom: 0,
		},
		l_0: {
			left: 0,
		},
		r_0: {
			right: 0,
		},
	});

	const styleContextValue: StyleContextProps = { styles };

	return <StyleContext.Provider value={styleContextValue} {...props} />;
};
export const useStyle = () => React.useContext(StyleContext);
