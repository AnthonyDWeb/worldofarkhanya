import { View, Image, ActivityIndicator } from "react-native";
import React, { useState } from "react";
import AddImage from "../buttons/image/add_image";
import { useAuth } from "../../contexts/auth";
import { pickFile, uploadImage } from "../../utils/Storage.Upload/upload";
import { UserProps } from "../../types";

export default function ProfileImage({ d }: { d: number }) {
	const { user, token, setUser } = useAuth();
	const [image, setImage] = useState(user?.profileImage);
	const [uploading, setUploading] = useState(false);

	const pickImage = async () => {
		const uri: string = await pickFile();
		if (uri === "error") alert("une erreur est survenue, veuillez essayer à nouveau");
		if (uri !== "error" && user) {
			const upadatedUser: UserProps = await uploadImage(uri, user, token, setUploading);
			setUser(upadatedUser);
			setImage(upadatedUser.profileImage);
		}
	};

	return (
		<View style={{ alignItems: "center" }}>
			<AddImage action={pickImage}>
				{image && !uploading && (
					<Image source={{ uri: image }} style={{width: d, height: d, borderRadius: d}} />
				)}
				{uploading && <ActivityIndicator size="large" />}
			</AddImage>
		</View>
	);
}
