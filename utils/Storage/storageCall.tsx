import AsyncStorage from "@react-native-async-storage/async-storage";

export const getAllKeysStorage = async() => {
	return await AsyncStorage.getAllKeys()
};
export const getStorage = async (name: string) => {
	const store = await AsyncStorage.getItem(name);
	return store && JSON.parse(store);
};
export const setStorage = (name: string, value: any) => {
	AsyncStorage.setItem(name, JSON.stringify(value));
};
export const removeStorage = async(name: string) => {
	const remove = await AsyncStorage.removeItem(name);
	return remove;
};
export const clearStorage = async() => {
	return await AsyncStorage.clear();
};
