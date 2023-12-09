// LIBRARY
import React from "react";
import { Pressable, Text, View } from "react-native";
// STYLE
import { useStyle } from "../../contexts/style";
// CONTEXT
// VIEW
// COMPONENT
import Page from "../../components/pages";
import { usePage } from "../../contexts/page";
import { useNavigation } from "@react-navigation/native";
// OTHER

export default function Auth() {
	// Global Constante
	const { styles } = useStyle();
	const { page, setPage, updatePage } = usePage();
	// Private Constante
	const navigation = useNavigation<any>();
	// Functions
	const handleAuthentification = () => {
		updatePage("Profile", { username: "Arkhanys" });
		navigation.navigate("Navigation");
	};
	// Renders
	const SelectPage = () => {
		return (
			<View style={styles.authTitleSelection}>
				<Pressable onPress={() => setPage({ name: "login" })}>
					<Text style={styles.secondaryTitle}>Se connecter</Text>
				</Pressable>
				<Text style={[styles.secondaryTitle, { marginHorizontal: 10 }]}>/</Text>
				<Pressable onPress={() => setPage({ name: "register" })}>
					<Text style={styles.secondaryTitle}>S'enregistrer</Text>
				</Pressable>
			</View>
		);
	};
	const Login = () => {
		return (
			<Pressable onPress={() => handleAuthentification()}>
				<Text style={styles.text}>Se connecter</Text>
			</Pressable>
		);
	};
	const Register = () => {
		return (
			<Pressable>
				<Text style={styles.text}>S'inscrire</Text>
			</Pressable>
		);
	};

	return (
		<Page>
			<Text style={[styles.title, styles.authTitle]}>Authentification</Text>
			<View style={styles.authContainer}>
				<SelectPage />
				{page.name === "login" ? <Login /> : <Register />}
			</View>
		</Page>
	);
}
