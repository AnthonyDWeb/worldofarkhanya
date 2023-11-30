import { NativeStackScreenProps as Props } from "@react-navigation/native-stack";

export type RootStack = {
	Privacy: undefined;
	Navigation: undefined;
	Authentification: undefined,
	Creation: undefined,
	Library: undefined,
	Profile: undefined,
	Menu: undefined,
	useNavigation: any,
	// Navigation: {
	// 	navigate: () => void;
	// },
};

export type NavigationProps = Props<RootStack, "Navigation">;
export type AuthProps = Props<RootStack, "Authentification">;
export type CreationProps = Props<RootStack, "Creation">;
export type LibraryProps = Props<RootStack, "Library">;
export type ProfileProps = Props<RootStack, "Profile">;
export type MenuProps = Props<RootStack, "Menu">;
export type RouteProps = Props<RootStack, "useNavigation">;
export type PrivacyProps = Props<RootStack, "Privacy">;
