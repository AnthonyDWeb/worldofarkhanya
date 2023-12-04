import React, { createContext, useEffect, useState } from "react";
import { StyleSheet } from "react-native";
import useDevice from "../utils/hooks/useDevice";

const StyleContext = createContext<any>({});

export const StyleProvider = (props: any) => {
	const { device } = useDevice();

	const defaultButtonRadius = device === "mobile" ? 15 : 25;

	const styles = StyleSheet.create({
		background: {
			width: "100%",
			height: "100%",
			justifyContent: "space-between",
		},

		// TEXT
		maintitle: {
			fontFamily: "imf",
			fontSize: 20,
		},
		title: {
			fontFamily: "cookie",
			fontSize: device === "mobile" ? 40 : 55,
			textAlign: "center",
			textDecorationLine: "underline",
		},
		text: {
			fontFamily: "cookie",
			fontSize: 20,
		},

		// NAVIGATION BAR
		navigation: {
			width: "100%",
			display: "flex",
			flexDirection: "row",
			alignItems: "flex-start",
			justifyContent: device === "mobile" ? "center" : "space-around",
		},
		navigationButton: {
			marginHorizontal: 15,
			marginVertical: device === "mobile" ? 5 : 15,
		},
		navigationBackgroundButton: {
			padding: 0.7,
			borderRadius: defaultButtonRadius,
		},

		// BUTTON
		sampleButton: {
			position: "relative",
			justifyContent: "center",
			borderColor: "black",
			borderWidth: 0.7,
			borderRadius: defaultButtonRadius,
		},
		sampleCalc: {
			width: "100%",
            height: "100%",
			alignSelf: "center",
			position: "absolute",
			borderRadius: defaultButtonRadius,
		},
		sampleText: {
			fontFamily: "cookie",
			fontSize: device === "mobile" ? 22 : 35,
			paddingVertical: device !== "mobile" ? 5 : 0,
			paddingHorizontal: device === "mobile" ? 5 : 20,
		},
		menuButton: {
            top: 5,
			right: 0,
			zIndex: 20,
			position: "absolute",
		},
		menuButtonImage: {
			margin: 3,
            width: device === "mobile" ? 20 : 30,
			height: device === "mobile" ? 20 : 30,
		},

		// PARCHMENT
		parchment: {
            paddingBottom: 5,
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
		parchmentCacl: {
			position: "absolute",
			height: "15%",
			width: "100%",
			zIndex: 0,
		},
		scrollpage: {
			paddingHorizontal: 10,
		},
	});

	return <StyleContext.Provider value={{ styles }} {...props} />;
};
export const useStyle = () => React.useContext(StyleContext);
