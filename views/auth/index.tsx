// LIBRARY
import React, { useRef, useState } from "react";
import { Pressable, Text, View, TextInput } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
// STYLE
import { useStyle } from "../../contexts/style";
// CONTEXT
// VIEW
// COMPONENT
import Page from "../../components/pages";
import { usePage } from "../../contexts/page";
import { useNavigation } from "@react-navigation/native";
import { useAuth } from "../../contexts/auth";
import {
	REGISTER,
	SIGNIN,
	ACCESS_TOKEN,
	PROFILE,
	NAVIGATION,
	REMEMBER_ME,
} from "../../constants";
import { login, register } from "../../utils/API";
import Checkbox from "../../components/box/checkbox";
// OTHER

export default function Auth() {
	// Global Constante
	const { serverOpen, user, setUser, updateUserStorage } = useAuth();
	const { styles } = useStyle();
	const { page, setPage, updatePage } = usePage();
	const navigation = useNavigation<any>();
	// Private Constante
	const [hide, setDisplay] = useState(true);
	const [save, setSave] = useState(false);
	const username = useRef("");
	const password = useRef("");
	// Functions
	const authValidation = async () => {
		const user = { username: username.current, password: password.current };
		const res =
			page.name === "login" ? await login(user) : await register(user);
		if (res) {
			console.log("authValidation res", res);
			save && updateUserStorage(res);
			handleAuthentification(res.user);
		}
	};

	const handleAuthentification = (res: {}) => {
		setUser(res);
		updatePage(PROFILE);
		navigation.navigate(NAVIGATION);
	};

	// Renders
	const SelectPage = () => {
		return (
			<View style={styles.authTitleSelection}>
				<Pressable onPress={() => setPage({ name: "login" })}>
					<Text
						style={{
							...styles.secondaryTitle,
							opacity: page.name === "login" ? 1 : 0.35,
						}}
					>
						Se connecter
					</Text>
				</Pressable>
				<Text style={[styles.secondaryTitle, { marginHorizontal: 10 }]}>/</Text>
				<Pressable onPress={() => setPage({ name: "register" })}>
					<Text
						style={{
							...styles.secondaryTitle,
							opacity: page.name === "register" ? 1 : 0.35,
						}}
					>
						S'enregistrer
					</Text>
				</Pressable>
			</View>
		);
	};

	const NoStorageRender = () => {
		return (
			<>
				<SelectPage />
				<View style={{ ...styles.rowContainer, marginVertical: 5 }}>
					<Text style={styles.text}>Nom d'utilisateur : </Text>
					<TextInput
						style={[styles.text, styles.authInput]}
						onChangeText={(t) => (username.current = t)}
						defaultValue={username.current}
					/>
				</View>
				<View style={{ ...styles.rowContainer, marginVertical: 5 }}>
					<Text style={styles.text}>Mot de passe : </Text>
					<TextInput
						style={[styles.text, styles.authInput]}
						secureTextEntry={hide}
						onChangeText={(p) => (password.current = p)}
						defaultValue={password.current}
					/>
					{hide ? (
						<MaterialIcons
							style={{ marginLeft: 5 }}
							name="visibility-off"
							size={24}
							color="black"
							onPress={() => setDisplay(false)}
						/>
					) : (
						<MaterialIcons
							style={{ marginLeft: 5 }}
							name="visibility"
							size={24}
							color="black"
							onPress={() => setDisplay(true)}
						/>
					)}
				</View>
				<Checkbox
					label={REMEMBER_ME}
					action={() => setSave(!save)}
					checked={save}
				/>
			</>
		);
	};

	const StorageRender = () => {
		return user?.map((d: any) => {
			return (
				<View key={d.user._id}
					style={{
						borderColor: "Black",
						borderTopWidth: 1,
						borderBottomWidth: 1,
						borderLeftWidth: 0.01,
						borderRightWidth: 0.01,
						marginVertical: 10,
						borderRadius: 15,
						width: 150,
					}}
				>
					<Text
						style={{
							...styles.secondaryTitle,
							marginVertical: 0,
							paddingVertical: 5,
							textAlign: "center",
							borderRadius: 15,
							backgroundColor: "rgba(255,255,255,0.2)",
						}}
						
					>
						{d.user.username}
					</Text>
				</View>
			);
		});
	};
	return (
		<View style={styles.authContainer}>
			{user ? <StorageRender /> : <NoStorageRender />}
			<Pressable
				style={styles.authButtonValidation}
				onPress={() => authValidation()}
			>
				<Text style={{ ...styles.secondaryTitle }}>
					{page.name === "login" ? SIGNIN : REGISTER}
				</Text>
			</Pressable>
			{user && (
				<Pressable
					onPress={() => (setPage({ name: "login" }), setUser(undefined))}
				>
					<Text
						style={{
							...styles.secondaryTitle,
							opacity: page.name === "login" ? 1 : 0.35,
						}}
					>
						Changer de compte
					</Text>
				</Pressable>
			)}
		</View>
	);
}
