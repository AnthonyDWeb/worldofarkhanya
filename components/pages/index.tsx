import React from "react";
import { styles } from "../../styles";
import Background from "../background";
import NavigationBar from "../navigation_bar";

export default function Page({children}: any) {
	return (
		<Background>
				{children}
				<NavigationBar />
		</Background>
	);
}
