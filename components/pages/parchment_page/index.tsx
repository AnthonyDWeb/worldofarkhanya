// LIBRARY
import React from "react";
import { Text, View } from "react-native";
// STYLE
import Parchment from "../../parchment";
import NavigationBar from "../../navigation_bar";
import Background from "../../background";
import useDevice from "../../../utils/hooks/useDevice";
// CONTEXT
// VIEW
// COMPONENT
// OTHER

export default function ParchmentPage({ children }: any) {
	// Global Constante
	const { isMobile } = useDevice();
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
