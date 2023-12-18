import { NativeStackScreenProps as Props } from "@react-navigation/native-stack";

export type RootStack = {
	Privacy: undefined;
	Navigation: undefined;
	Homepage: undefined,
	Creation: undefined,
	Library: undefined,
	Profile: undefined,
	Menu: undefined,
	useNavigation: any,
};

export type NavigationProps = Props<RootStack, "Navigation">;
export type HomepageProps = Props<RootStack, "Homepage">;
export type CreationProps = Props<RootStack, "Creation">;
export type LibraryProps = Props<RootStack, "Library">;
export type ProfileProps = Props<RootStack, "Profile">;
export type MenuProps = Props<RootStack, "Menu">;
export type RouteProps = Props<RootStack, "useNavigation">;
export type PrivacyProps = Props<RootStack, "Privacy">;

export type NavStack = { "Mon compte": undefined };
export type NavProps = Props<NavStack, "Mon compte">;