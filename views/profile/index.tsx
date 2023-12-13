// LIBRARY
import React, { useEffect } from "react";
import { Text, View } from "react-native";
// STYLE
import { useStyle } from "../../contexts/style";
import { useAuth } from "../../contexts/auth";
import ParchmentPage from "../../components/pages/parchment_page";
import useDevice from "../../utils/hooks/useDevice";
// CONTEXT
// VIEW
// COMPONENT
// OTHER

export default function Profile() {
	// Global Constante
	const { user } = useAuth();
	const { styles } = useStyle();
	const {isMobile} = useDevice();
	// Private Constante

	// Functions
	// Renders
	const Information = ({ field, value }: { field: string; value: any }) => {
		return (
			<View
				style={{
					display: "flex",
					flexDirection: "row",
					alignItems: "flex-end",
				}}
			>
				<Text style={styles.text}>{field}:</Text>
				<Text style={[styles.text, { fontSize: 25, marginLeft: 5 }]}>
					{value}
				</Text>
			</View>
		);
	};
	console.log("---------------------------------------");
	console.log("inside Profile");
	console.log("user",user);

	return (
		<View>
			<Text style={styles.titlePage}>{user?.username}</Text>
			<View style={styles.section}>
				<Text style={styles.title}>Mes créations:</Text>
			</View>
		</View>
	);
}
