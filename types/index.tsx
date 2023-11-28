import { NativeStackScreenProps as Props } from "@react-navigation/native-stack";

export type RootStack = {
	Privacy: undefined;
	Homepage: undefined;
	Authentification: undefined,
	Creation: undefined,
	Library: undefined,
	Profile: undefined,
	Menu: undefined,
	Navigation: any,
	// Navigation: {
	// 	navigate: () => void;
	// },
};

export type HomepageProps = Props<RootStack, "Homepage">;
export type AuthProps = Props<RootStack, "Authentification">;
export type CreationProps = Props<RootStack, "Creation">;
export type LibraryProps = Props<RootStack, "Library">;
export type ProfileProps = Props<RootStack, "Profile">;
export type MenuProps = Props<RootStack, "Menu">;
export type RouteProps = Props<RootStack, "Navigation">;
export type PrivacyProps = Props<RootStack, "Privacy">;
