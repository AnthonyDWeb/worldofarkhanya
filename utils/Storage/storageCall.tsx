import AsyncStorage from "@react-native-async-storage/async-storage";

const setStorage = (name: string, value: any) => {
	AsyncStorage.setItem(name, JSON.stringify(value));
};
const getStorage = async (name: string) => {
	const store = await AsyncStorage.getItem(name);
	store && JSON.parse(store);
};

export { getStorage, setStorage };
