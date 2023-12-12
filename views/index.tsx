import React from "react";
import Creation from "./creation";
import Library from "./library";
import Profile from "./profile";
import ParchmentPage from "../components/pages/parchment_page";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { RootStack } from "../types";

export default function Index() {
	const Stack = createNativeStackNavigator<RootStack>();
	const Navigator = Stack.Navigator;
	const Screen = Stack.Screen;
	return (
		<ParchmentPage>
			<Navigator screenOptions={{ headerShown: false}}>
				<Screen name="Profile" component={Profile} />
				<Screen name="Creation" component={Creation} />
				<Screen name="Library" component={Library} />
			</Navigator>
		</ParchmentPage>
	);
}
