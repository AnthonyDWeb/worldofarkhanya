// LIBRARY
import React from "react";
// STYLE
import Parchment from "../parchment";
import NavigationBar from "../navigation_bar";
import Background from "../background";
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
