import AsyncStorage from "@react-native-async-storage/async-storage";
import { STORAGE_USER } from "../../constants";
import { resProps } from "../../types";

export const getAllKeysStorage = async () => {
	return await AsyncStorage.getAllKeys();
};
export const getStorage = async (name: string) => {
	const store: string | null = await AsyncStorage.getItem(name);
	return store && JSON.parse(store);
};

export const getUserStorage = async () => {
	const storage: resProps = await getStorage(STORAGE_USER);
	const userStorage = storage.user;
	return userStorage;
};
export const setStorage = (name: string, value: any) => {
	AsyncStorage.setItem(name, JSON.stringify(value));
};
export const removeStorage = async (name: string) => {
	const remove = await AsyncStorage.removeItem(name);
	return remove;
};
export const clearStorage = async () => {
	return await AsyncStorage.clear();
};
