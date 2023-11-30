// LIBRARY
import React from "react";
import * as Linking from "expo-linking";
import { NavigationContainer } from "@react-navigation/native";

import { createNativeStackNavigator } from "@react-navigation/native-stack";
// STYLE
// CONTEXT
// VIEW
import Navigation from "../views";
import Authentification from "../views/auth";
import Menu from "../views/menu";
// COMPONENT
import Loader from "../components/loader";
// OTHER
import { RootStack } from "../types";
import { usePage } from "../contexts/page";

export default function Routes() {
	const { page } = usePage();
	// Global Constante
	// Private Constante
	const Stack = createNativeStackNavigator<RootStack>();
	const Navigator = Stack.Navigator;
	const Screen = Stack.Screen;

	const config = {
		screens: {
			Privacy: "worldofarkhanya/privacy",
			Navigation: `worldofarkhanya/${page}`,
			Authentification: "worldofarkhanya/auth",
			Menu: "worldofarkhanya/menu",
		},
	};
	const prefix = Linking.createURL("/");
	const linking = {
		prefixes: [prefix, "https://anthonydweb.github.io/worldofarkhanya/"],
		config,
	};

	// Functions
	// Renders

	return (
		<NavigationContainer linking={linking} fallback={<Loader />}>
				<Navigator initialRouteName="Navigation"
					screenOptions={{
						headerTitleAlign: "center",
						headerTitleStyle: { fontSize: 30 },
						headerStyle: { backgroundColor: "gray" },
						headerShown: false,
					}}
				>
					<Screen name="Navigation" component={Navigation} />
					<Screen name="Authentification" component={Authentification} />
					<Screen name="Menu" component={Menu} />
				</Navigator>
		</NavigationContainer>
	);
}
