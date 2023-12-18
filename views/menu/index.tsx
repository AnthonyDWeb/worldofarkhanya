// LIBRARY
import React, { useRef, useState } from "react";
import { View, Text, TextInput } from "react-native";
import { useNavigation } from "@react-navigation/native";
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
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavStack } from "../../types";
import { FontAwesome } from "@expo/vector-icons";
// OTHER

export default function Menu() {
	// Global Constante
	const { user, logout } = useAuth();
	const { page, getBack, setPage } = usePage();
	const { styles } = useStyle();
	const navigation = useNavigation<any>();
	// Private Constante
	const [selected, selection] = useState<string>();
	const [hide, setDisplay] = useState(true);
	const [editable, setEdit] = useState("");
	const username = useRef(user.username);
	const password = useRef("");

	type sectionProps = {
		name: string;
		children?: any;
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

	// Renders
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

	const UserInformation = () => {
		const cStyle = { marginVertical: 10 };
		const tStyle = [styles.text, { marginHorizontal: 5, paddingVertical: 2 }];
		const iStyle = [styles.text, styles.authInput, { textAlign: "center" }];
		const uName = editable === "username";
		const pass = editable === "password";
		return (
			<View>
				<View style={cStyle}>
					<View style={styles.rowContainer}>
						<Text style={tStyle}>Nom d'utilisateur</Text>
						<FontAwesome name="pencil" size={20} color="black" onPress={() => setEdit(uName ? "" :"username")} />
					</View>
					<TextInput
						style={iStyle}
						onChangeText={(t) => (username.current = t)}
						defaultValue={username.current}
						autoFocus={uName}
						editable={uName}
					/>
				</View>

				<View style={cStyle}>
				<View style={styles.rowContainer}>
					<Text style={tStyle}>Changer de mot de passe</Text>
					<FontAwesome name="pencil" size={20} color="black" onPress={() => setEdit(pass ? "" :"password")} />
				</View>
					{editable === "password" && (
						<>
							<Text style={tStyle}>Nouveau Mot de passe</Text>
							<TextInput
								style={iStyle}
								onChangeText={(t) => (password.current = t)}
								defaultValue={password.current}
								secureTextEntry={hide}
								editable={pass}
								autoFocus={pass}
							/>
							<Text style={tStyle}>Nouveau Mot de passe</Text>
							<TextInput
								style={iStyle}
								onChangeText={(t) => (password.current = t)}
								defaultValue={password.current}
								secureTextEntry={hide}
								editable={pass}
							/>
						</>
					)}
				</View>
			</View>
		);
	};

	return (
		<Page>
			<Text style={styles.titlePage}>{page.name}</Text>
			<View style={{ flex: 1, padding: 15 }}>
				{selected === "Mon compte" ? (
					<UserInformation />
				) : (
					<>
						<Section name="Mon compte" />
						<Section name="Politique de confidentialité" />
						<PressableButton action={() => handleAuthentification()}>
							<Text style={styles.secondaryTitle}>{`-> Se déconnecter`}</Text>
						</PressableButton>
					</>
				)}
			</View>
		</Page>
	);
}
