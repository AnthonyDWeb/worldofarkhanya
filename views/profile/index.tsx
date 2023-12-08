// LIBRARY
import React from "react";
import { Text, View } from "react-native";
// STYLE
import { useStyle } from "../../contexts/style";
// CONTEXT
// VIEW
// COMPONENT
// OTHER

export default function Profile() {
	// Global Constante
	const { styles } = useStyle();
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

	return (
		<View>
			<Text style={styles.titlePage}>Nom d'utilisateur</Text>
			<View style={styles.section}>
				<Text style={styles.title}>Mes créations:</Text>
			</View>
		</View>
	);
}
