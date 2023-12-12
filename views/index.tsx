import React, { useEffect } from "react";
import Creation from "./creation";
import Library from "./library";
import Profile from "./profile";
import ParchmentPage from "../components/pages/parchment_page";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { RootStack } from "../types";
import { getStorage } from "../utils/Storage/storageCall";
import { usePage } from "../contexts/page";
import { useNavigation } from "@react-navigation/native";

export default function Index() {
	const { urlRoute } = usePage();
	const navigation = useNavigation<any>();
	const Stack = createNativeStackNavigator<RootStack>();
	const Navigator = Stack.Navigator;
	const Screen = Stack.Screen;
	
	const initRoute = urlRoute === "profil" ? "Profile" : urlRoute === "cr%C3%A9ation" ? "Creation": "Library";
	return (
		<ParchmentPage>
			<Navigator initialRouteName={initRoute} screenOptions={{ headerShown: false }}>
				<Screen name="Profile" component={Profile} />
				<Screen name="Creation" component={Creation} />
				<Screen name="Library" component={Library} />
			</Navigator>
		</ParchmentPage>
	);
}
