// LIBRARY
import React, { useEffect } from "react";
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

export default function Routes() {
	// Global Constante
	// Private Constante
	const Stack = createNativeStackNavigator<RootStack>();
	const Navigator = Stack.Navigator;
	const Screen = Stack.Screen;

	const config = {
		screens: {
			Navigation: `worldofarkhanya/`,
			Authentification: "worldofarkhanya/auth",
			Menu: "worldofarkhanya/menu",
			Privacy: "worldofarkhanya/privacy",
		},
	};
	const prefix = Linking.createURL("/worldofarkhanya");
	const linking = {
		prefixes: [prefix, "https://anthonydweb.github.io/worldofarkhanya/"],
		config,
	};

	// Functions
	// Renders

	return (
		<NavigationContainer linking={linking} fallback={<Loader />}>
			<Navigator
				initialRouteName="Authentification"
				screenOptions={{
					headerTitleAlign: "center",
					headerTitleStyle: { fontSize: 30 },
					headerShown: false,
					headerBackImageSource: require("../assets/images/background.jpg"),
				}}
			>
				<Screen name="Authentification" component={Authentification} />
				<Screen name="Navigation" component={Navigation} />
				<Screen name="Menu" component={Menu} />
			</Navigator>
		</NavigationContainer>
	);
}
