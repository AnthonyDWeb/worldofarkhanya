import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
	background: {
		width: "100%",
		height: "100%",
		justifyContent: "space-between",
	},
	navigation: {
		height: 40,
		width: "100%",
		display: "flex",
		flexDirection: "row",
		alignItems: "flex-start",
		justifyContent: "space-around",
	},
	sampleButton: {
		position: "relative",
		justifyContent: "center",
		borderColor: "black",
		borderWidth: 0.7,
	},
	sampleCalc: {
		position: "absolute",
		height: "100%",
		width: "100%",
		alignSelf: "center",
	},
	sampleText: {
		fontWeight: "bold",
		paddingHorizontal: 10,
		paddingTop: 4,
		paddingBottom: 6,
	},
	menuButton: {
		zIndex: 15,
		position: "absolute",
		top: 5,
		right: 5,
	},
	NavButton: {
		padding: 5,
		borderRadius: 5,
		backgroundColor: "gray",
	},
	parchment: {
		paddingVertical: 20,
		paddingHorizontal: 25,
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
