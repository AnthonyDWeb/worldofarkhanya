import * as DocumentPicker from "expo-document-picker";
import { postFirebaseImage } from "../firebase";
import { setData } from "../API";
import { UserProps, resProps } from "../../types";

export const pickFile = async () => {
	try {
		const docRes = await DocumentPicker.getDocumentAsync({ type: "image/*" });
		if (docRes.assets) {
			return docRes.assets[0].uri;
		} else {
			return "error";
		}
	} catch (error) {
		console.log("Error while selecting file: ", error);
		return "error";
	}
};

export const uploadImage = async ( uri: string, user: UserProps, token: string, action: (value: boolean) => void) => {
	action(true);
	try {
		const filename: string = `${user.username}${user._id}`;
		const url: string = await postFirebaseImage(uri, filename);
		const body: UserProps = { profileImage: url };
		const updateUser: resProps = await setData(body, "users", token, user._id);
		action(false);
		return updateUser.user;
	} catch (error) {
		console.error(error);
		action(false);
	}
};
