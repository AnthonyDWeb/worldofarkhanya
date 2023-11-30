// LIBRARY
import React from "react";
import { Text, Pressable } from "react-native";
// STYLE
import SampleButton from "../sample";
// CONTEXT
// VIEW
// COMPONENT
// OTHER

export default function NavigationButton({ title, action }: any) {
	// Global Constante
	// Private Constante

	// Functions

	// Renders

	return (
		<Pressable onPress={() => action()}>
			<SampleButton>
				<Text style={{ fontWeight: "bold" }}>{title}</Text>
			</SampleButton>
		</Pressable>
	);
}
