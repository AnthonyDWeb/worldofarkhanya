import { getBlobFromUri } from "../other/transform_data";
import { firebase } from "./config";

export const getFirebaseImage = async (filename: string) => {
	const mediaRef: firebase.storage.Reference = firebase.storage().ref(filename);
	const url: string = await mediaRef.getDownloadURL();
	const metadata: firebase.storage.FullMetadata = await mediaRef.getMetadata();
	return { url, metadata };
};

export const postFirebaseImage = async (uri: string, filename: string) => {
	const ref: firebase.storage.Reference = firebase.storage().ref().child(filename);
    const blob: Blob = await getBlobFromUri(uri);
	await ref.put(blob);
    return ref.getDownloadURL();
};
