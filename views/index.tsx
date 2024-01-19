import React from "react";
import Creation from "./creation";
import Library from "./library";
import Profile from "./profile";
import ParchmentPage from "../components/parchment_page";
import { usePage } from "../contexts/page";
import { CREATION, LIBRARY, PROFILE } from "../constants";

export default function Index() {
	const { page } = usePage();

	return (
		<ParchmentPage>
			{page.name === PROFILE && <Profile />}
			{page.name === CREATION && <Creation />}
			{page.name === LIBRARY && <Library />}
		</ParchmentPage>
	);
}
