import React from "react";
import { usePage } from "../contexts/page";
import Creation from "./creation";
import Library from "./library";
import Profile from "./profile";
import ParchmentPage from "../components/pages/parchment_page";

export default function Index() {
	const { pageData } = usePage();

	return (
		<ParchmentPage>
			{pageData.name === "Creation" ? (
				<Creation />
			) : pageData.name === "Library" ? (
				<Library />
			) : (
				pageData.name === "Profile" && <Profile />
			)}
		</ParchmentPage>
	);
}
