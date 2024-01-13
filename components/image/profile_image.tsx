import { Image, ActivityIndicator,} from "react-native";
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
			const upadatedUser: UserProps | undefined = await uploadImage(
				uri,
				user,
				token,
				setUploading
			);
			upadatedUser &&
				(setUser(upadatedUser), setImage(upadatedUser.profileImage));
		}
	};

	const imgStyle = { width: 145, height: 145, borderRadius: 145, zIndex: 1 };
	return (
		<BackgroundButton rad={150}>
			{(image && !uploading) ? (
				<>
					<Image source={{ uri: image }} style={imgStyle} />
					<Add action={pickImage} />
				</>
			) : (
				<ActivityIndicator size="large" />
			)}
		</BackgroundButton>
	);
}
