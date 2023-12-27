// LIBRARY
import React, { useRef, useState } from "react";
import { View, Text, TextInput } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { MaterialIcons,FontAwesome } from "@expo/vector-icons";
// STYLE
import { useStyle } from "../../contexts/style";
// CONTEXT
import { usePage } from "../../contexts/page";
import { useAuth } from "../../contexts/auth";
// VIEW
// COMPONENT
import Page from "../../components/pages";
import PressableButton from "../../components/buttons/pressable_button";
// OTHER
import { ACCESS_TOKEN, STORAGE_USER } from "../../constants";
import { deepClone } from "../../utils/other/transform_data";
import { setData } from "../../utils/API";
import { setStorage } from "../../utils/Storage.Upload/storage";
import {
	NavigationProps,
	MenuErrorProps,
	MenuFieldProps,
	MenuSectionProps,
	MenuTitleFieldProps,
	UserProps,
	UserCheckProps,
	resProps,
} from "../../types";

export default function Menu() {
	// Global Constante
	const { user, setUser, logout, token } = useAuth();
	const { page, getBack, setPage } = usePage();
	const { styles } = useStyle();
	const navigation = useNavigation<NavigationProps>();
	// Private Constante
	const [selected, selection] = useState<string>();
	const [editable, setEdit] = useState<string[]>([]);
	const [showPass, setHide] = useState<string[]>([]);
	const [error, setError] = useState<{}[]>([]);

	const username = useRef(user?.username);
	const oldPassword = useRef("");
	const newPassword = useRef("");
	const ConfirmNewPassword = useRef("");

	// Functions
	const handleNavigation = () => {
		getBack();
		navigation.navigate("Navigation");
	};
	
	const handleAuthentification = () => {
		setPage({ name: "login" });
		logout();
	};

	const handleEdit = (value: string) => {
		const exist: boolean = editable.includes(value);
		const editClone: string[] = deepClone(editable);
		const newEdit = exist
			? editClone.filter((e: string) => e !== value)
			: [...editClone, value];
		setEdit(newEdit);
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
		const needUpdate: boolean = newError.length === 0 && Object.keys(body).length !== 0;
		needUpdate && updateData(body);
	};

	const updateData = async (body: UserProps) => {
		const res: resProps = await setData(body, "users", token, user?._id);
		res &&
			setStorage(STORAGE_USER, {
				user: res.user,
				[ACCESS_TOKEN]: res[ACCESS_TOKEN],
			});
		if (res) {
			setUser(res.user);
		}
	};

	// Renders

	// ---------------------- Menu Information --------------------------------
	const MenuInformation = () => {
		return (
			<View style={{ flex: 1, padding: 15 }}>
				<Section name="Mon compte" />
				<Section name="Politique de confidentialité" />
				<PressableButton action={() => handleAuthentification()}>
					<Text style={styles.secondaryTitle}>{`-> Se déconnecter`}</Text>
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
		return (
			<View style={{ flex: 1, padding: 15 }}>
				<FieldInformation
					title="Nom d'utilisateur"
					label="username"
					focus={editable.includes("username")}
					value={username}
				/>
				<TitleField title="Changer de mot de passe" label="password" />
				{editable.includes("password") && (
					<>
						<FieldInformation
							title="Mot de passe actuel"
							label="currentPassword"
							focus={true}
							value={oldPassword}
							secure={!showPass.includes("old")}
							sub="old"
							error={error}
						/>
						<FieldInformation
							title="Nouveau mot de passe"
							label="newPassword"
							value={newPassword}
							secure={!showPass.includes("new")}
							sub="new"
							error={error}
						/>
						<FieldInformation
							title="Confirmer le mot de passe"
							label="newPassword"
							value={ConfirmNewPassword}
							secure={!showPass.includes("confirm")}
							sub="confirm"
							error={error}
						/>
					</>
				)}
				<PressableButton
					style={[styles.authButtonValidation, { marginTop: 20 }]}
					action={() => handleCheck()}
				>
					<Text style={[styles.text, { textAlign: "center" }]}>Valider</Text>
				</PressableButton>
			</View>
		);
	};

	const FieldInformation = ({
		title,
		label,
		focus,
		value,
		sub,
		secure,
	}: MenuFieldProps) => {
		const err = error?.filter((e: MenuErrorProps) => e.key === label)[0];
		const currentError: MenuErrorProps = err ? err : {};
		const key = currentError.key;
		const cStyle = { marginVertical: sub ? 5 : 10 };
		const iStyle = [
			styles.text,
			styles.authInput,
			{
				width: "100%",
				marginHorizontal: 10,
				borderColor: key && "crimson",
			},
		];
		const eStyle = [styles.text, { color: "crimson", marginLeft: 15 }];
		const uName = editable.includes(label);
		const hasSub = sub ? true : false;
		const icon = secure ? "visibility-off" : "visibility";
		return (
			<View style={cStyle}>
				<TitleField title={title} label={label} sub={hasSub} />
				<View style={[styles.rowContainer, { width: "100%" }]}>
					<TextInput
						style={iStyle}
						onChangeText={(t) => (value.current = t)}
						defaultValue={value.current}
						autoFocus={focus}
						editable={hasSub || uName}
						secureTextEntry={secure}
					/>
					{sub && (
						<PressableButton action={() => handleHide(sub)}>
							<MaterialIcons name={icon} size={24} color="black" />
						</PressableButton>
					)}
				</View>
				{currentError.key === label && (
					<Text style={eStyle}>{currentError.message}</Text>
				)}
			</View>
		);
	};

	const TitleField = ({ title, label, sub }: MenuTitleFieldProps) => {
		const tStyle = [
			styles.text,
			{
				width: "100%",
				marginLeft: 5,
				paddingVertical: 2,
				marginVertical: sub ? 0 : 10,
				borderBottomWidth: sub ? 0 : 1,
			},
		];
		return (
			<View style={styles.rowContainer}>
				<Text style={tStyle}>{title}</Text>
				{!sub && (
					<FontAwesome
						name="pencil"
						size={20}
						color="black"
						onPress={() => handleEdit(label)}
					/>
				)}
			</View>
		);
	};

	return (
		<Page>
			<PressableButton action={handleNavigation}>
				<Text style={styles.titlePage}>{page.name}</Text>
			</PressableButton>
			{selected === "Mon compte" ? <UserInformation /> : <MenuInformation />}
		</Page>
	);
}
