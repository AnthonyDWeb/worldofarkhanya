import AsyncStorage from "@react-native-async-storage/async-storage";

export const setStorage = (name: string, value: any) => {
	AsyncStorage.setItem(name, JSON.stringify(value));
};
export const getStorage = async (name: string) => {
	const store = await AsyncStorage.getItem(name);
	return store && JSON.parse(store);
};