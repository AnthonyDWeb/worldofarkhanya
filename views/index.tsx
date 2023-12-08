import React from "react";
import { usePage } from "../contexts/page";
import Auth from "./auth";
import Creation from "./creation";
import Library from "./library";
import Profile from "./profile";
import ParchmentPage from "../components/pages/parchment_page";

export default function Index() {
	const { page } = usePage();

	return (
		<ParchmentPage>
			{page.name === "Creation" ? (
				<Creation />
			) : page.name === "Library" ? (
				<Library />
			) : (
				page.name === "Profile" && <Profile />
			)}
		</ParchmentPage>
	);
}
