// LIBRARY
import React, { useRef, useState } from "react";
import { View, Text, TextInput, Pressable, ScrollView } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { MaterialIcons } from "@expo/vector-icons";
// STYLE
import { useStyle } from "../../contexts/style";
// CONTEXT
import { usePage } from "../../contexts/page";
import { useAuth } from "../../contexts/auth";
// VIEW
// COMPONENT
import { Modal } from "../../components/modal";
import Background from "../../components/background";
import ProfileImage from "../../components/image/profile_image";
import PressableButton from "../../components/buttons/pressable/pressable_button";
// OTHER
import {
	NavigationProps,
	MenuErrorProps,
	MenuFieldProps,
	MenuSectionProps,
	MenuTitleFieldProps,
	UserProps,
	UserCheckProps,
	resProps,
	MenuTInputFieldProps,
} from "../../types";
import { ACCESS_TOKEN, STORAGE_USER } from "../../constants";
import { deleteData, setData } from "../../utils/API";
import { deepClone } from "../../utils/other/transform_data";
import { setStorage } from "../../utils/Storage.Upload/storage";

export default function Menu() {
	// Global Constante
	const { user, setUser, logout, token } = useAuth();
	const { page, getBack, setPage, setParchmentDisplay } = usePage();
	const { styles } = useStyle();
	const navigation = useNavigation<NavigationProps>();
	// Private Constante
	const [selected, selection] = useState<string>();
	const [editable, setEdit] = useState<string[]>([]);
	const [showPass, setHide] = useState<string[]>([]);
	const [error, setError] = useState<{}[]>([]);
	const [alertMessage, setAlert] = useState("");

	const username = useRef(user?.username);
	const oldPassword = useRef("");
	const newPassword = useRef("");
	const ConfirmNewPassword = useRef("");
	const message = "Attention, votre compte va être définitivement supprimé !";

	// -------------------------------- Functions --------------------------------
	const handleNavigation = () => {
		if (selected === "Mon compte") {
			selection(undefined);
		} else {
			getBack();
			navigation.navigate("Navigation");
		}
	};

	const handleAuthentification = () => {
		setPage({ name: "login" });
		logout();
	};

	const resetPassField = () => {
		oldPassword.current = "";
		newPassword.current = "";
		ConfirmNewPassword.current = "";
		setError([]);
	}

	const handleEdit = (value: string) => {
		const exist: boolean = editable.includes(value);
		const editClone: string[] = deepClone(editable);
		const newEdit = exist
			? editClone.filter((e: string) => e !== value)
			: [...editClone, value];
		setEdit(newEdit);
		resetPassField();
	};

	const handleHide = (value: string) => {
		const exist: boolean = showPass.includes(value);
		const showClone: string[] = deepClone(showPass);
		const newShowPass = exist
			? showClone.filter((e: string) => e !== value)
			: [...showClone, value];
		setHide(newShowPass);
	};

	const handleCheck = () => {
		const body: UserCheckProps = {};
		const newError: {}[] = [];
		const p1: string = newPassword.current;
		const p2: string = ConfirmNewPassword.current;
		const vIsEqual: boolean = p1 === p2;
		const hasPass: boolean = p1 !== "" || p2 !== "";
		const hasOld: boolean = oldPassword.current !== "";
		const hasUsername: boolean = username.current !== user?.username;
		const passChange: boolean = hasPass && vIsEqual && hasOld;

		if (hasUsername) {
			body.username = username.current;
		}
		if (passChange) {
			body.currentPassword = oldPassword.current;
			body.newPassword = newPassword.current;
		}

		switch (true) {
			case hasPass:
				!hasOld &&
					newError.push({
						key: "password",
						message: "Champ vide !",
					});
				!vIsEqual &&
					newError.push({
						key: "newPassword",
						message: "Mot de passe non identique !",
					});
				break;

			case hasOld && !hasPass:
				newError.push({
					key: "newPassword",
					message: "Champ vide !",
				});
				break;

			default:
				break;
		}
		setError(newError);
		const needUpdate: boolean =
			newError.length === 0 && Object.keys(body).length !== 0;
		needUpdate && updateData(body);
	};

	const updateData = async (body: UserProps) => {
		const res: resProps = await setData(body, "users", token, user?._id);
		if (res.user) {
			setStorage(STORAGE_USER, {
				user: res.user,
				[ACCESS_TOKEN]: res[ACCESS_TOKEN],
			});
			setUser(res.user);
		}
	};

	const deletUser = async () => {
		setAlert(message);
		setParchmentDisplay(true);
	};

	const cancelDeleteUser = () => {
		setAlert("");
		setParchmentDisplay(false);
	};

	const validateDeleteUser = async () => {
		const res = await deleteData("users", token, user?._id);
		if (res.message) {
			setAlert(res.message);
			setTimeout(() => setAlert("Retour à la page d'acceuil en cours . . ."), 1000);
			setTimeout(() => logout(), 1500);
		}
	};

	// -------------------------------- Renders --------------------------------
	const Header = () => {
		return (
			<>
				<Pressable onPress={handleNavigation} style={styles.menuBack}>
					<MaterialIcons name="arrow-back" size={24} color="black" />
					<Text style={styles.text}>Retour</Text>
				</Pressable>
				<Text style={styles.titlePage}>{page.name}</Text>
			</>
		);
	};

	const MenuInformation = () => {
		return (
			<View style={{ flex: 1, padding: 15, justifyContent: "space-between" }}>
				<View>
					<Section name="Mon compte" />
					<Section name="Politique de confidentialité" />
				</View>
				<PressableButton action={() => handleAuthentification()}>
					<Text style={[styles.textButton, { color: "crimson" }]}>
						Se déconnecter
					</Text>
				</PressableButton>
			</View>
		);
	};

	const Section = ({ name, children }: MenuSectionProps) => {
		const isName = name === "Mon compte";
		const isSelected = selected === "Mon compte";
		const handle = () => selection(isSelected ? undefined : name);
		return (
			<View style={styles.menuSection}>
				<PressableButton action={() => isName && handle()}>
					<Text style={styles.secondaryTitle}>{name}</Text>
				</PressableButton>
				{isSelected && children}
			</View>
		);
	};

	// ---------------------- User Information --------------------------------
	const UserInformation = () => {
		const isPass = editable.includes("password");
		return (
			<ScrollView style={{ flex: 1, padding: 15 }} contentContainerStyle={{ alignItems: "center" }}>
				<ProfileImage />
				<FieldInformation title="Nom d'utilisateur" label="username" value={username}/>
				<TitleField title="Changer de mot de passe" label="password" />
				{isPass && (
					<>
						<FieldInformation title="Mot de passe actuel" label="currentPassword" focus={true} value={oldPassword} sub/>
						<FieldInformation title="Nouveau mot de passe" label="newPassword" value={newPassword} sub/>
						<FieldInformation title="Confirmer le mot de passe" label="newPassword" value={ConfirmNewPassword} sub/>
					</>
				)}
				<PressableButton style={{ marginTop: 20 }} action={handleCheck}>
					<Text style={[styles.textButton, { textAlign: "center" }]}>
						Valider les modifications
					</Text>
				</PressableButton>
				<PressableButton action={deletUser}>
					<Text style={[styles.secondaryTitle, { color: "red" }]}>
						Suprimer le compte
					</Text>
				</PressableButton>
			</ScrollView>
		);
	};

	const FieldInformation = ({ title, label, value, sub }: MenuFieldProps) => {
		const err = error?.filter((e: MenuErrorProps) => e.key === label)[0];
		const currentError: MenuErrorProps = err ? err : {};
		const isKey = currentError.key === label;

		return (
			<View style={{ marginBottom: sub ? 5 : 20, width: "100%" }}>
				<TitleField title={title} label={label} sub={sub}/>
				<InputField label={label} value={value} sub={sub}/>
				 {isKey && <Text style={[styles.text,{color: "crimson"}]}>{currentError.message}</Text>}
			</View>
		)
	}

	const TitleField = ({ title, label, sub }: MenuTitleFieldProps) => {
		return (
			<View style={[styles.rowContainer, {width: "100%",justifyContent: "space-between", borderBottomWidth: sub ? 0 : 1,marginBottom: sub ? 0 : 10}]}>
				<Text style={[styles.text, {marginLeft: sub && 20}]}>{title}</Text>
				{!sub && <MaterialIcons name="edit" size={24} onPress={() => handleEdit(label)} />}
			</View>
		);
	};

	const InputField = ({ label, value, sub }: MenuTInputFieldProps) => {
		const focus = editable.includes(label);
		const secure = showPass.includes(label)
		const icon = secure ? "visibility-off" : "visibility";
		const err = error?.filter((e: MenuErrorProps) => e.key === label)[0];
		const currentError: MenuErrorProps = err ? err : {};
		const isKey = currentError.key === label;
		const iStyle = [ styles.text, styles.authInput, {width: "100%", borderColor: isKey ? "crimson" : "transparent", borderWidth: 1} ];
		return (
			<View style={[styles.rowContainer, { width: "100%", marginTop: sub ? 5 : 0 }]}>
	 				<TextInput 
						style={iStyle} onChangeText={(t) => (value.current = t)} defaultValue={value.current} 
						autoFocus={focus}  editable={focus || sub} secureTextEntry={secure} 
					/>
	 				{sub && (
	 					<PressableButton action={() => handleHide(label)}>
	 						<MaterialIcons name={icon} size={24} />
	 					</PressableButton>
	 				)}
	 			</View>
		)
	}

	return (
		<Background>
			<Header />
			{selected === "Mon compte" ? <UserInformation /> : <MenuInformation />}
			{alertMessage.length !== 0 && <Modal message={alertMessage} validate={() => validateDeleteUser()} cancel={() => cancelDeleteUser()}/>}
		</Background>
	);
}
