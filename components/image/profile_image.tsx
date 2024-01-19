import { Image, ActivityIndicator, View } from "react-native";
import React, { useState } from "react";
import { useAuth } from "../../contexts/auth";
import { pickFile, uploadImage } from "../../utils/Storage.Upload/upload";
import { UserProps } from "../../types";
import Add from "../buttons/add";
import BackgroundButton from "../buttons/background";

export default function ProfileImage() {
	const { user, token, setUser } = useAuth();
	const [image, setImage] = useState(user?.profileImage);
	const [uploading, setUploading] = useState(false);

	const pickImage = async () => {
		const uri: string = await pickFile();
		if (uri === "error")
			alert("une erreur est survenue, veuillez essayer à nouveau");
		if (uri !== "error" && user) {
			const upadatedUser: UserProps | undefined = await uploadImage(uri, user, token, setUploading);
			upadatedUser && (setUser(upadatedUser), setImage(upadatedUser.profileImage));
		}
	};

	const cStyle = { width: 145, height: 145, borderRadius: 145/2 };
	const imgStyle = { ...cStyle, zIndex: 10 };
	
	return (
		<View style={{position: "relative"}}>
			<BackgroundButton addStyle={cStyle}>
				{image && !uploading ?  <Image source={{ uri: image }} style={imgStyle} /> :  <ActivityIndicator size="large" /> }
			</BackgroundButton>
			<Add action={pickImage} />
		</View>
	);
}
