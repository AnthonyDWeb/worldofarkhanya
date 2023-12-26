// LIBRARY
import React, { useRef, useState } from "react";
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
import PressableButton from "../../components/buttons/pressable_button";
import { resProps } from "../../types";
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
		const user = { username: username.current, password: password.current };
		const res =
			page.name === "login" ? await login(user) : await register(user);
		if (res?.user) {
			save &&
				setStorage(STORAGE_USER, {
					user: res.user,
					[ACCESS_TOKEN]: res[ACCESS_TOKEN],
				});
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
		const validationTitle = page.name === "login" ? SIGNIN : REGISTER;
		return (
			<>
				<SelectPage />
				<View style={styles.authInputContainer}>
					<Text style={styles.authLabel}>Nom d'utilisateur</Text>
					<TextInput
						style={[styles.text, styles.authInput]}
						onChangeText={(t) => (username.current = t)}
						defaultValue={username.current}
					/>
				</View>

				<View style={styles.authInputContainer}>
					<View style={styles.rowContainer}>
						<Text style={styles.authLabel}>Mot de passe</Text>
						{hide ? (
							<MaterialIcons
								name="visibility-off"
								size={24}
								color="black"
								onPress={() => setDisplay(false)}
							/>
						) : (
							<MaterialIcons
								name="visibility"
								size={24}
								color="black"
								onPress={() => setDisplay(true)}
							/>
						)}
					</View>
					<TextInput
						style={[styles.text, styles.authInput]}
						onChangeText={(t) => (password.current = t)}
						defaultValue={password.current}
						secureTextEntry={hide}
					/>
				</View>

				{page.name === "register" && <RegisterPart />}

				<View style={{ alignItems: "center" }}>
					<Checkbox
						label={REMEMBER_ME}
						action={handleSaveDisplay}
						checked={save}
					/>
				</View>

				<Pressable style={styles.authButtonValidation} onPress={authValidation}>
					<Text style={styles.secondaryTitle}>{validationTitle}</Text>
				</Pressable>
			</>
		);
	};
	const StorageRender = () => {
		return (
			user && (
				<>
					<Pressable
						style={styles.profileContainer}
						onPress={() => tokenValidation()}
					>
						<Text style={[styles.secondaryTitle, styles.profileStorageName]}>
							{user.username}
						</Text>
					</Pressable>
					<PressableButton action={() => resetUser()}>
						<Text style={styles.secondaryTitle}>Changer de compte</Text>
					</PressableButton>
				</>
			)
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
			{load ? (
				<Loading />
			) : userStorage ? (
				<StorageRender />
			) : (
				<NoStorageRender />
			)}
		</View>
	);
}
