// LIBRARY
import React, { useRef, useState } from "react";
import { View, Text, TextInput } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { MaterialIcons } from "@expo/vector-icons";
import Animated, {
	useSharedValue,
	withTiming,
	useAnimatedStyle,
	Easing,
} from "react-native-reanimated";
// STYLE
import { useStyle } from "../../contexts/style";
// CONTEXT
import { usePage } from "../../contexts/page";
// VIEW
// COMPONENT
import Page from "../../components/pages";
import { useAuth } from "../../contexts/auth";
import PressableButton from "../../components/buttons/pressable_button";
import { FontAwesome } from "@expo/vector-icons";
import { deepClone } from "../../utils/other/transform_data";
import { setData } from "../../utils/API";
import { ACCESS_TOKEN, STORAGE_USER } from "../../constants";
import { setStorage } from "../../utils/Storage/storageCall";
// OTHER

export default function Menu() {
	// Global Constante
	const { user, setUser, logout, token } = useAuth();
	const { page, getBack, setPage } = usePage();
	const { styles } = useStyle();
	const navigation = useNavigation<any>();
	// Private Constante
	const [selected, selection] = useState<string>();
	const [showPass, setHide] = useState<string[]>([]);
	const [editable, setEdit] = useState("");
	const [errorMessage, setErrorMessage] = useState(false);
	const username = useRef(user.username);
	const oldPassword = useRef("");
	const newPassword = useRef("");
	const ConfirmNewPassword = useRef("");

	type sectionProps = {
		name: string;
		children?: any;
	};
	type fieldProps = {
		title: string;
		label: string;
		value?: any;
		focus?: boolean;
		sub?: string;
		secure?: boolean;
		error?: boolean;
	};
	type titlefieldProps = {
		title: string;
		label: string;
		sub?: boolean;
	};
	// Functions
	const handleNavigation = () => {
		getBack();
		navigation.navigate("Navigation");
	};
	const handleAuthentification = () => {
		setPage({ name: "login" });
		logout();
	};

	const handleCheck = () => {
		const v1: string = newPassword.current;
		const v2: string = ConfirmNewPassword.current;
		const isEqual = v1 === v2;
		if (v1 !== "") {
			isEqual
				? updateData()
				: (setErrorMessage(true), console.log("is not equal"));
		}
	};

	const updateData = async () => {
		console.log("updateData is equal");
		// const body = {};
		// const res = await setData(body, "users", token, user._id);
		// res &&
		// 	setStorage(STORAGE_USER, {
		// 		user: res.user,
		// 		[ACCESS_TOKEN]: res[ACCESS_TOKEN],
		// 	});
		// console.log("res", res);
		// if (res) {
		// 	setUser(res.user);
		// }
	};

	const handleHide = (value: any) => {
		const exist = showPass.includes(value);
		const showClone = deepClone(showPass);
		const newShowPass = exist
			? showClone.filter((e: string) => e !== value)
			: [...showClone, value];
		setHide(newShowPass);
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

	const Section = ({ name, children }: sectionProps) => {
		const sectionStyle = {
			padding: 10,
			borderBottomColor: "grey",
			borderBottomWidth: 1,
		};
		const isName = name === "Mon compte";
		const isSelected = selected === "Mon compte";
		const handle = () => selection(isSelected ? undefined : name);
		return (
			<View style={sectionStyle}>
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
					focus={editable === "username"}
					value={username}
				/>
				<TitleField title="Changer de mot de passe" label="password" />
				{editable === "password" && (
					<>
						<FieldInformation
							title="Mot de passe actuel"
							label="username"
							focus={editable === "password"}
							value={oldPassword}
							secure={!showPass.includes("old")}
							sub="old"
						/>
						<FieldInformation
							title="Nouveau mot de passe"
							label="username"
							value={newPassword}
							secure={!showPass.includes("new")}
							sub="new"
							error={errorMessage}
						/>
						<FieldInformation
							title="Confirmer le mot de passe"
							label="username"
							value={ConfirmNewPassword}
							secure={!showPass.includes("confirm")}
							sub="confirm"
							error={errorMessage}
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
		error,
	}: fieldProps) => {
		const cStyle = { marginVertical: sub ? 5 : 10 };
		const iStyle = [
			styles.text,
			styles.authInput,
			{
				textAlign: "center",
				width: "100%",
				marginHorizontal: 10,
				borderColor: error && "crimson",
			},
		];
		const eStyle = [styles.text, { color: "crimson", marginLeft: 15 }];
		const uName = editable === label;
		const hasSub = sub ? true : false;
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
							<MaterialIcons
								name={secure ? "visibility-off" : "visibility"}
								size={24}
								color="black"
							/>
						</PressableButton>
					)}
				</View>
				{sub && error && <Text style={eStyle}>Mot de passe non identique</Text>}
			</View>
		);
	};

	const TitleField = ({ title, label, sub }: titlefieldProps) => {
		const uName = editable === label;
		const tStyle = [
			styles.text,
			{
				marginVertical: sub ? 0 : 10,
				marginLeft: 5,
				paddingVertical: 2,
				borderBottomWidth: sub ? 0 : 1,
				width: "100%",
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
						onPress={() => setEdit(uName ? "" : label)}
					/>
				)}
			</View>
		);
	};

	return (
		<Page>
			<Text style={styles.titlePage}>{page.name}</Text>
			{selected === "Mon compte" ? <UserInformation /> : <MenuInformation />}
		</Page>
	);
}
