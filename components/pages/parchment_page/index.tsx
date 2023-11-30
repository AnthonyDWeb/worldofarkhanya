// LIBRARY
import React from "react";
import { ImageBackground, Text, View } from "react-native";
// STYLE
import { styles } from "../../../styles";
import Page from "..";
import Parchment from "../../parchment";
import NavigationBar from "../../navigation_bar";
import Background from "../../background";
import { usePage } from "../../../contexts/page";
// CONTEXT
// VIEW
// COMPONENT
// OTHER

export default function ParchmentPage({ children }: any) {
	// Global Constante
	// Private Constante
	// Functions
	// Renders

	return (
		<Background>
			<Parchment>{children}</Parchment>
			<NavigationBar />
		</Background>
	);
}
