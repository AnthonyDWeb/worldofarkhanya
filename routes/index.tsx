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
	CREATION_URL,
	HOMEPAGE,
	HOMEPAGE_URL,
	LIBRARY_URL,
	MENU,
	MENU_URL,
	NAVIGATION,
	PRIVACY_URL,
	PROFILE_URL,
} from "../constants";

export default function Routes() {
	// Global Constante
	const { urlRoute } = usePage();
	// Private Constante
	const Stack = createNativeStackNavigator<RootStack>();
	const Navigator = Stack.Navigator;
	const Screen = Stack.Screen;

	const prefix = Linking.createURL("");
	const config = {
		screens: {
			Navigation: {
				path: BASE_URL,
				screens: {
					Profile: PROFILE_URL,
					Library: LIBRARY_URL,
					Creation: CREATION_URL,
				},
			},
			Homepage: `${BASE_URL}/${HOMEPAGE_URL}`,
			Menu: `${BASE_URL}/${MENU_URL}`,
			Privacy: `${BASE_URL}/${PRIVACY_URL}`,
		},
	};
	const linking = {
		prefixes: [prefix],
		config,
	};

	const initRoute =
		urlRoute === HOMEPAGE_URL
			? HOMEPAGE
			: urlRoute === MENU_URL
			? MENU
			: NAVIGATION;
	// Functions
	// Renders
	return (
		<NavigationContainer linking={linking} fallback={<Loader />}>
			<Navigator
				initialRouteName={initRoute}
				screenOptions={{ headerShown: false }}
			>
				<Screen name="Homepage" component={Homepage} />
				<Screen name="Navigation" component={Navigation} />
				<Screen name="Menu" component={Menu} />
			</Navigator>
		</NavigationContainer>
	);
}
