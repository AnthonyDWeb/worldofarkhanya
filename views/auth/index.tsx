// LIBRARY
import React, { useRef } from "react";
import { Pressable, Text, View, TextInput } from "react-native";
// STYLE
import { useStyle } from "../../contexts/style";
// CONTEXT
// VIEW
// COMPONENT
import Page from "../../components/pages";
import { usePage } from "../../contexts/page";
import { useNavigation } from "@react-navigation/native";
import { useAuth } from "../../contexts/auth";
import { REGISTER, SIGNIN, ACCESS_TOKEN } from "../../constants";
import { login, register } from "../../utils/API";
import { getStorage, setStorage } from "../../utils/Storage/storageCall";
// OTHER

export default function Auth() {
	// Global Constante
	const { serverOpen, setUser } = useAuth();
	const { styles } = useStyle();
	const { page, setPage, updatePage } = usePage();
	const navigation = useNavigation<any>();
	// Private Constante
	const username = useRef("");
	const password = useRef("");
	// Functions
	const authValidation = async() => {
		const user = {username: username.current, password: password.current};
		const res = (page.name === "login") ? await login(user) : await register(user);
		if (res) {
			setStorage("woaUser", {user: res.user, [ACCESS_TOKEN]: res[ACCESS_TOKEN]});
			handleAuthentification(res.user);
		}
	}


	const handleAuthentification = (res: {}) => {
		setUser(res);
		updatePage("Profile");
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

	return (
		<View style={styles.authContainer}>
			<SelectPage/>
			<View style={{...styles.rowContainer, marginVertical: 5}}>
				<Text style={styles.text}>Nom d'utilisateur : </Text>
				<TextInput
					style={[styles.text, styles.authInput]}
					onChangeText={(t) => username.current = t}
				/>
			</View>
			<View style={{...styles.rowContainer, marginVertical: 5}}>
				<Text style={styles.text}>Mot de passe : </Text>
				<TextInput
					style={[styles.text, styles.authInput]}
					secureTextEntry={true}
					onChangeText={(p) => password.current = p}
				/>
			</View>
			<Pressable style={styles.authButtonValidation} onPress={() => authValidation()}>
				<Text style={{...styles.secondaryTitle}}>{page.name === "login" ? SIGNIN : REGISTER}</Text>
			</Pressable>
		</View>
	);
}
