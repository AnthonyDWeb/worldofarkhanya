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
		alignItems: "center",
		justifyContent: "space-around",
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
		padding: 0,
		height: "100%",
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
		zIndex: -1,
	},
	scrollpage: {
		paddingHorizontal: 10,
	},
});
