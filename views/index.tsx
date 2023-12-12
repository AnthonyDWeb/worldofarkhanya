import React from "react";
import Creation from "./creation";
import Library from "./library";
import Profile from "./profile";
import ParchmentPage from "../components/pages/parchment_page";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { RootStack } from "../types";
import { usePage } from "../contexts/page";
import {
	CREATION,
	CREATION_PATH,
	HOMEPAGE_URL,
	LIBRARY,
	PROFILE,
	PROFILE_URL,
} from "../constants";

export default function Index() {
	const { urlRoute } = usePage();
	const Stack = createNativeStackNavigator<RootStack>();
	const Navigator = Stack.Navigator;
	const Screen = Stack.Screen;

	const initRoute =
		(urlRoute === PROFILE_URL || urlRoute === HOMEPAGE_URL)
			? PROFILE
			: urlRoute === CREATION_PATH
			? CREATION
			: LIBRARY;
	return (
		<ParchmentPage>
			<Navigator
				initialRouteName={initRoute}
				screenOptions={{ headerShown: false }}
			>
				<Screen name="Profile" component={Profile} />
				<Screen name="Creation" component={Creation} />
				<Screen name="Library" component={Library} />
			</Navigator>
		</ParchmentPage>
	);
}
