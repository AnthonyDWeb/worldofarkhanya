// LIBRARY
import React, { useEffect, useRef, useState } from "react";
import { Pressable, Text, View } from "react-native";
import { FontAwesome, AntDesign } from "@expo/vector-icons";
// STYLE
import { useStyle } from "../../contexts/style";
import { useAuth } from "../../contexts/auth";
import ParchmentPage from "../../components/pages/parchment_page";
import useDevice from "../../utils/hooks/useDevice";
import PressableButton from "../../components/buttons/pressable_button";
import { setData } from "../../utils/API";
import { TextInput } from "react-native";
import { setStorage } from "../../utils/Storage/storageCall";
import { ACCESS_TOKEN, STORAGE_USER } from "../../constants";
// CONTEXT
// VIEW
// COMPONENT
// OTHER

export default function Profile() {
	// Global Constante
	const { user, token, setUser } = useAuth();
	const { styles } = useStyle();
	// Private Constante
	const username = useRef(user?.username)
	const [usernameIsUpdate, setUpdate] = useState(false);
	// Functions
	const updateUsername = async () => {
		const body = {username: username.current};
		const res = await setData(body,"users", token, user._id);
		res && setStorage(STORAGE_USER, {
			user: res.user,
			[ACCESS_TOKEN]: res[ACCESS_TOKEN],
		});
		console.log("res", res);
		if (res) {
			setUser(res.user);
			setUpdate(false);
		}
	};
	// Renders
	const Title = () => {
		const row = [
			styles.rowContainer,
			{ justifyContent: "center", alignItems: "baseline", marginTop: 10 },
		];
		const btn = { padding: 10 };
		const title = [styles.titlePage, { marginRight: 10 }];
		const input = [styles.authInput,styles.titlePage, {width: 180}];
		return usernameIsUpdate ? (
			<View style={row}>
				<TextInput 
					autoFocus
					style={input} 
					defaultValue={username.current} 
					onChangeText={(t)=> username.current = t} 
				/>
				<PressableButton action={() => updateUsername()} style={btn}>
					<AntDesign name="checkcircle" size={24} color="green" />
				</PressableButton>
				<PressableButton action={() => setUpdate(false)} style={btn}>
					<AntDesign name="closecircle" size={24} color="red" />
				</PressableButton>
			</View>
		) : (
			<View style={row}>
				<Text style={title}>{user?.username}</Text>
				<PressableButton action={() => setUpdate(true)} style={btn}>
					<FontAwesome name="pencil" size={24} color="black" />
				</PressableButton>
			</View>
		);
	};
	const Information = ({ field, value }: { field: string; value: any }) => {
		return (
			<View
				style={{display: "flex", flexDirection: "row", alignItems: "flex-end"}}>
				<Text style={styles.text}>{field}:</Text>
				<Text style={[styles.text, { fontSize: 25, marginLeft: 5 }]}>
					{value}
				</Text>
			</View>
		);
	};

	return (
		<View>
			<Title />
			<View style={styles.section}>
				<Text style={styles.title}>Mes créations:</Text>
			</View>
		</View>
	);
}
