// LIBRARY
import React from "react";
import * as Linking from "expo-linking";
import { StatusBar } from "expo-status-bar";
import { NavigationContainer } from "@react-navigation/native";

import { createNativeStackNavigator } from "@react-navigation/native-stack";
// STYLE
import { styles } from "../styles";
// CONTEXT
// VIEW
import Index from "../views";
import Authentification from "../views/auth";
import Creation from "../views/creation";
import Library from "../views/library";
import Profile from "../views/profile";
import Menu from "../views/menu";
// COMPONENT
import Loader from "../components/loader";
// OTHER
import { RootStack } from "../types";
import NavigationBar from "../components/navigation_bar";

export default function Routes() {
	// Global Constante
	// Private Constante
	const Stack = createNativeStackNavigator<RootStack>();
	const Navigator = Stack.Navigator;
	const Screen = Stack.Screen;

	const config = {
		screens: {
			Privacy: "worldofarkhanya/privacy",
			Homepage: "worldofarkhanya/",
			Authentification: "worldofarkhanya/auth",
			Creation: "worldofarkhanya/creation",
			Library: "worldofarkhanya/library",
			Profile: "worldofarkhanya/profile",
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
			<StatusBar translucent hidden />
			<Navigator
				screenOptions={{
					headerTitleAlign: "center",
					headerTitleStyle: { fontSize: 30 },
					headerStyle: { backgroundColor: "gray" },
					headerShown: false,
				}}
			>
				<Screen name="Homepage" component={Index} />
				<Screen name="Authentification" component={Authentification} />
				<Screen name="Creation" component={Creation} />
				<Screen name="Library" component={Library} />
				<Screen name="Profile" component={Profile} />
				<Screen name="Menu" component={Menu} />
			</Navigator>
			<NavigationBar />
		</NavigationContainer>
	);
}
