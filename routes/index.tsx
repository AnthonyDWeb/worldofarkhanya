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

export default function Routes() {
	// Global Constante
	const { urlRoute } = usePage();
	// const navigation = useNavigation<any>();
	// Private Constante
	const Stack = createNativeStackNavigator<RootStack>();
	const Navigator = Stack.Navigator;
	const Screen = Stack.Screen;

	const prefix = Linking.createURL("");
	const config = {
		screens: {
			Navigation: {
				path: "worldofarkhanya",
				screens: {
					Profile: "profil",
					Library: "bibliothèque",
					Creation: "création",
				},
			},
			Homepage: "worldofarkhanya/auth",
			Menu: "worldofarkhanya/menu",
			Privacy: "worldofarkhanya/privacy",
		},
	};
	const linking = {
		prefixes: [prefix],
		config,
	};

	const initRoute = urlRoute === "auth" ? "Homepage" : urlRoute === "Menu" ? "Menu": "Navigation";
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
