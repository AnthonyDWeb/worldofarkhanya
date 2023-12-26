import * as DocumentPicker from "expo-document-picker";
import { postFirebaseImage } from "../firebase";
import { setData } from "../API";
import { UserProps } from "../../types";

export const pickFile = async () => {
	try {
		const docRes = await DocumentPicker.getDocumentAsync({ type: "image/*" });
		return docRes.assets?.[0].uri;
	} catch (error) {
		console.log("Error while selecting file: ", error);
	}
};

export const uploadImage = async (uri: string, user: UserProps, token: string, action: (value: boolean) => void) => {
	action(true);
	try {
		const filename = `${user.username}${user._id}`;
		const url = await postFirebaseImage(uri, filename);
		const body = { profileImage: url };
		const updateUser = await setData(body, "users", token, user._id);
		action(false);
		return updateUser.user;
	} catch (error) {
		console.error(error);
		action(false);
	}
};
