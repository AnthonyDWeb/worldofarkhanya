// LIBRARY
import React from "react";
import * as Linking from "expo-linking";
import { NavigationContainer } from "@react-navigation/native";

import { createNativeStackNavigator } from "@react-navigation/native-stack";
// STYLE
// CONTEXT
// VIEW
import Navigation from "../views";
import Menu from "../views/menu";
// COMPONENT
import Loader from "../components/loader";
// OTHER
import { RootStack } from "../types";
import Homepage from "../views/home";
import { usePage } from "../contexts/page";
import {
	BASE_URL,
	CREATION,
	CREATION_URL,
	HOMEPAGE,
	HOMEPAGE_URL,
	LIBRARY,
	LIBRARY_URL,
	MENU,
	MENU_URL,
	NAVIGATION,
	NAVIGATION_URL,
	PRIVACY_URL,
	PROFILE_URL,
} from "../constants";
import { capitalizeFirstLetter } from "../utils/other/transform_data";

export default function Routes() {
	// Global Constante
	const { page, urlRoute } = usePage();
	// Private Constante
	const Stack = createNativeStackNavigator<RootStack>();
	const Navigator = Stack.Navigator;
	const Screen = Stack.Screen;

	const prefix = Linking.createURL("");

	const endRoute =
		page.name === LIBRARY
			? LIBRARY_URL
			: page.name === CREATION
			? CREATION_URL
			: PROFILE_URL;
	const initRoute =
		urlRoute === NAVIGATION_URL || urlRoute === endRoute
			? NAVIGATION
			: urlRoute === MENU_URL
			? MENU
			: urlRoute === HOMEPAGE_URL
			? HOMEPAGE
			: undefined;

	console.log("urlRoute", urlRoute);
	console.log("initRoute", initRoute);

	const config = {
		screens: {
			Navigation: `${BASE_URL}/${NAVIGATION_URL}/${endRoute}`,
			Homepage: `${BASE_URL}/${HOMEPAGE_URL}`,
			Menu: `${BASE_URL}/${MENU_URL}`,
			Privacy: `${BASE_URL}/${PRIVACY_URL}`,
		},
	};
	const linking = {
		prefixes: [prefix],
		config,
	};

	// Functions
	// Renders
	return (
		<NavigationContainer linking={linking} fallback={<Loader />}>
			<Navigator
				initialRouteName={initRoute ? initRoute : HOMEPAGE}
				screenOptions={{ headerShown: false }}
			>
				<Screen
					name={HOMEPAGE}
					component={Homepage}
					options={{ title: `WoA  - ${HOMEPAGE_URL}` }}
				/>
				<Screen
					name={NAVIGATION}
					component={Navigation}
					options={{ title: `WoA - ${capitalizeFirstLetter(endRoute)}` }}
				/>
				<Screen
					name={MENU}
					component={Menu}
					options={{ title: `WoA - ${MENU}` }}
				/>
			</Navigator>
		</NavigationContainer>
	);
}
