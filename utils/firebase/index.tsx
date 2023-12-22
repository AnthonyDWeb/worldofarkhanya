import { getBlobFromUri } from "../other/transform_data";
import { firebase } from "./config";

export const getFirebaseImage = async (filename: string) => {
	const mediaRef = firebase.storage().ref(filename);
	const url = await mediaRef.getDownloadURL();
	const metadata = await mediaRef.getMetadata();
	return { url, metadata };
};

export const postFirebaseImage = async (uri: string, filename: string) => {
	const ref = firebase.storage().ref().child(filename);
    const blob = await getBlobFromUri(uri);
	await ref.put(blob);
    return ref.getDownloadURL();
};
