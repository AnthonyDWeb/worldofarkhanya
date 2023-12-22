// LIBRARY
import React, { useState } from "react";
import { Text, View, Image } from "react-native";
import * as DocumentPicker from "expo-document-picker";
// STYLE
import { useStyle } from "../../contexts/style";
// CONTEXT
import { useAuth } from "../../contexts/auth";
// VIEW
// COMPONENT
import AddImage from "../../components/buttons/image/add_image";
// OTHER
import { setData } from "../../utils/API";
import { postFirebaseImage } from "../../utils/firebase";

export default function Profile() {
	// Global Constante
	const { user, token, setUser } = useAuth();
	const { styles } = useStyle();
	// Private Constante
	const [image, setImage] = useState<string>(user?.profilImage);
	const [uploading, setUploading] = useState(false);

	// Functions
	const pickFile = async () => {
		try {
			const docRes = await DocumentPicker.getDocumentAsync({type: "image/*"});
			docRes.assets && (await uploadImage(docRes.assets?.[0].uri));
		} catch (error) {
			console.log("Error while selecting file: ", error);
		}
	};

	const uploadImage = async (uri: string) => {
		setUploading(true);
		try {
			const filename = `${user.username}${user._id}`;
			const url = await postFirebaseImage(uri, filename);
			const body = { profilImage: url };
			const updateUser = await setData(body, "users", token, user._id);
			setUser(updateUser.user);
			setImage(updateUser.user.profilImage);
			setUploading(false);
		} catch (error) {
			console.error(error);
			setUploading(false);
		}
	};

	// Renders
	const Title = () => {
		return (
			<Text style={[styles.titlePage, { marginVertical: 20 }]}>
				{user?.username}
			</Text>
		);
	};

	const ProfileImage = () => {
		const iStyle = { width: 200, height: 200, borderRadius: 200 };
		return (
			<View style={{ alignItems: "center" }}>
				<AddImage action={pickFile}>
					{image && !uploading && (
						<Image source={{ uri: image }} style={iStyle} />
					)}
				</AddImage>
			</View>
		);
	};

	const Creation = () => {
		return (
			<View style={styles.section}>
				<Text style={styles.title}>Mes créations:</Text>
			</View>
		);
	};

	return (
		<View>
			<Title />
			<ProfileImage />
			<Creation />
		</View>
	);
}
