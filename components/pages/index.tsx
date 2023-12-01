import React from "react";
import Background from "../background";

export default function Page({ children }: any) {
	return (
		<Background>
			{children}
		</Background>
	);
}
