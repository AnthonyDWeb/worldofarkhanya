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
import Homepage from "../views/home";
import { useAuth } from "../contexts/auth";
import { getStorage } from "../utils/Storage/storageCall";
import { usePage } from "../contexts/page";

export default function Routes() {
	// Global Constante
	const { user, setUser } = useAuth();
	const { page } = usePage();
	// Private Constante
	const Stack = createNativeStackNavigator<RootStack>();
	const Navigator = Stack.Navigator;
	const Screen = Stack.Screen;

	// const prefix = Linking.createURL("/worldofarkhanya");
	const prefix = "http://localhost:19006/";
	const config = {
		screens: {
			Navigation: " worldofarkhanya/",
			// {
			// 	screens: {
			// 		Profile: "worldofarkhanya/profil",
			// 		Library: "worldofarkhanya/bibliothèque",
			// 		Creation: "worldofarkhanya/création",
			// 	}
			// },
			Homepage: "worldofarkhanya/auth",
			Menu: "worldofarkhanya/menu",
			Privacy: "worldofarkhanya/privacy",
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
			<Navigator initialRouteName="Homepage" screenOptions={{ headerShown: false}}>
				<Screen name="Homepage" component={Homepage} />
				<Screen name="Navigation" component={Navigation} />
				<Screen name="Menu" component={Menu} />
			</Navigator>
		</NavigationContainer>
	);
}
