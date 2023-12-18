// LIBRARY
import React, { useEffect, useRef, useState } from "react";
import {
	Pressable,
	Text,
	View,
	TextInput,
	ActivityIndicator,
} from "react-native";
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
	STORAGE_USER,
} from "../../constants";
import { login, loginToken, register } from "../../utils/API";
import Checkbox from "../../components/box/checkbox";
import {
	getStorage,
	getUserStorage,
	setStorage,
} from "../../utils/Storage/storageCall";
import PressableButton from "../../components/buttons/pressable_button";
// OTHER

export default function Auth() {
	// Global Constante
	const { user, setUser, setToken, authentification, load, setLoad } =
		useAuth();
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
		setLoad(true);
		const user = { username: username.current, password: password.current };
		const res =
			page.name === "login" ? await login(user) : await register(user);
		if (res) {
			save &&
				setStorage(STORAGE_USER, {
					user: res.user,
					[ACCESS_TOKEN]: res[ACCESS_TOKEN],
				});
			handleAuthentification(res);
		}
	};
	const tokenValidation = async (data: { user: any; access_token: string }) => {
		setLoad(true);
		const res = await loginToken(data.access_token);
		res && handleAuthentification(res);
	};

	const handleAuthentification = (res: {}) => {
		authentification(res);
		updatePage(PROFILE);
	};

	const resetUser = () => {
		setPage({ name: "login" });
		setUser(undefined);
	};

	// Renders
	const SelectPage = () => {
		const opaLog = page.name === "login" ? 1 : 0.35;
		const opaReg = page.name === "register" ? 1 : 0.35;
		return (
			<View style={styles.authTitleSelection}>
				<PressableButton action={() => setPage({ name: "login" })}>
					<Text style={[styles.secondaryTitle, opaLog]}>Se connecter</Text>
				</PressableButton>
				<Text style={[styles.secondaryTitle, { marginHorizontal: 10 }]}>/</Text>
				<PressableButton action={() => setPage({ name: "register" })}>
					<Text style={[styles.secondaryTitle, opaReg]}>S'enregistrer</Text>
				</PressableButton>
			</View>
		);
	};

	const RegisterPart = () => {
		return (
			<>
				<Text>REGISTER ADD PART</Text>
			</>
		);
	};

	const NoStorageRender = () => {
		const cStyle = {marginVertical: 5};
		const tStyle = [styles.text,{marginLeft: 5, paddingVertical: 2}]
		const iStyle = [styles.text, styles.authInput, {textAlign: "center"}];
		const validationTitle = page.name === "login" ? SIGNIN : REGISTER;
		const validationBtnStyle ={ ...styles.secondaryTitle, textAlign: "center" };
		return (
			<View>
				<SelectPage />

				<View style={cStyle}>
					<Text style={tStyle}>Nom d'utilisateur</Text>
					<TextInput style={iStyle} onChangeText={(t) => (username.current = t)} defaultValue={username.current}/>
				</View>

				<View style={cStyle}>
					<Text style={tStyle}>Mot de passe</Text>
					<TextInput 
						style={iStyle} 
						onChangeText={(t) => (password.current = t)} 
						defaultValue={password.current} 
						secureTextEntry={hide}
					/>
				</View>

				{page.name === "register" && <RegisterPart />}

				<View style={{alignItems: "center"}}>
					<Checkbox label={REMEMBER_ME} action={() => setSave(!save)} checked={save} />
				</View>

				<Pressable style={styles.authButtonValidation} onPress={() => authValidation()} >
					<Text style={validationBtnStyle}>{validationTitle}</Text>
				</Pressable>
			</View>
		);
	};
	const StorageRender = () => {
		const data = user.user;
		return (
			<>
				<Pressable
					style={styles.profileContainer}
					onPress={() => tokenValidation(user)}
				>
					<Text style={[styles.secondaryTitle, styles.profileStorageName]}>
						{data.username}
					</Text>
				</Pressable>
				<PressableButton action={() => resetUser()}>
					<Text style={styles.secondaryTitle}>Changer de compte</Text>
				</PressableButton>
			</>
		);
	};

	const Loading = () => {
		return (
			<View>
				<ActivityIndicator size="large" />
				<Text style={styles.text}>Chargement des données en cours...</Text>
			</View>
		);
	};
	return (
		<View style={styles.authContainer}>
			{load ? <Loading /> : user ? <StorageRender /> : <NoStorageRender />}
		</View>
	);
}
