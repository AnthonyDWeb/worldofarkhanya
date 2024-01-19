// LIBRARY
import React, { useRef, useState } from "react";
import { Pressable, Text, View, TextInput } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
// STYLE
import { useStyle } from "../../contexts/style";
// CONTEXT
// VIEW
// COMPONENT
import { usePage } from "../../contexts/page";
import { useAuth } from "../../contexts/auth";
import {
	REGISTER,
	SIGNIN,
	ACCESS_TOKEN,
	PROFILE,
	REMEMBER_ME,
	STORAGE_USER,
} from "../../constants";
import { login, loginToken, register } from "../../utils/API";
import Checkbox from "../../components/box/checkbox";
import { setStorage } from "../../utils/Storage.Upload/storage";
import PressableButton from "../../components/buttons/pressable/pressable_button";
import { UserProps, resProps } from "../../types";
import TextButton from "../../components/buttons/TextButton";
import Loader from "../../components/loader";
// OTHER

export default function Auth() {
	// Global Constante
	const {
		user,
		userStorage,
		setUserStorage,
		token,
		authentification,
		load,
		setLoad,
	} = useAuth();
	const { styles } = useStyle();
	const { page, setPage, updatePage } = usePage();
	// Private Constante
	const [hide, setDisplay] = useState(true);
	const [save, setSave] = useState(false);
	const username = useRef("");
	const password = useRef("");

	// Functions
	const handleSaveDisplay = () => setSave(!save);

	const authValidation = async () => {
		setLoad(true);
		const user: UserProps = { username: username.current, password: password.current };
		const res: resProps = page.name === "login" ? await login(user) : await register(user);
		if (res?.user) {
			save && setStorage(STORAGE_USER, { user: res.user,[ACCESS_TOKEN]: res[ACCESS_TOKEN] });
			handleAuthentification(res);
		} else {
			alert(res.message);
			setLoad(false);
		}
	};

	const tokenValidation = async () => {
		setLoad(true);
		const res: resProps = await loginToken(token);
		res && handleAuthentification(res);
	};

	const handleAuthentification = (res: resProps) => {
		authentification(res);
		updatePage(PROFILE);
	};

	const resetUser = () => {
		setPage({ name: "login" });
		setUserStorage(false);
	};

	// Renders
	const SelectPage = () => {
		const opaLog = { opacity: page.name === "login" ? 1 : 0.35 };
		const opaReg = { opacity: page.name === "register" ? 1 : 0.35 };
		return (
			<View style={styles.rowContainer}>
				<Pressable onPress={() => setPage({ name: "login" })}>
					<Text style={[styles.secondaryTitle, opaLog]}>Se connecter</Text>
				</Pressable>
				<Text style={[styles.secondaryTitle, { marginHorizontal: 10 }]}>/</Text>
				<Pressable onPress={() => setPage({ name: "register" })}>
					<Text style={[styles.secondaryTitle, opaReg]}>S'enregistrer</Text>
				</Pressable>
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
		const validationTitle = page.name === "login" ? SIGNIN : REGISTER;
		const icon = hide ? "visibility-off" : "visibility";
		return (
			<View style={styles.centerContainer}>
				<SelectPage />
				<View style={styles.authContainer}>
					<Text style={styles.authLabel}>Nom d'utilisateur</Text>
					<TextInput style={[styles.text, styles.authInput]} onChangeText={(t) => (username.current = t)} defaultValue={username.current}/>
				</View>
				<View style={styles.authContainer}>
					<View style={styles.rowContainer}>
						<Text style={styles.authLabel}>Mot de passe</Text>
						<MaterialIcons name={icon} size={24} onPress={() => setDisplay(!hide)}/>
					</View>
					<TextInput style={[styles.text, styles.authInput]} onChangeText={(t) => (password.current = t)} defaultValue={password.current} secureTextEntry={hide}/>
				</View>
				{page.name === "register" && <RegisterPart />}
				<Checkbox label={REMEMBER_ME} action={handleSaveDisplay} checked={save}/>
				<TextButton text={validationTitle} action={authValidation} textStyle={styles.secondaryTitle}/>
			</View>
		);
	};

	const StorageRender = () => {
		const textStyle = [styles.secondaryTitle, styles.profileStorageName];
		return (
			<>
				<TextButton action={tokenValidation} style={styles.storageUser} bgStyle={{ borderWidth: 0 }} text={user?.username} textStyle={textStyle}/>
				<PressableButton action={resetUser} style={{ marginTop: 200 }}>
					<Text style={[styles.text,styles.textShadow]}>Changer de compte</Text>
				</PressableButton>
			</>
		);
	};

	return load ? (
		<Loader />
	) : userStorage ? (
		<StorageRender />
	) : (
		<NoStorageRender />
	);
}
