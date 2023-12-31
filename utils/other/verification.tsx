import { Linking } from "react-native";

export const checkOnlyNumber = (value: string) => {
	const reg = new RegExp("^[0-9]*$");
	return reg.test(value);
};

export const getRouteFromUrl = async() => {
	const url: string = `${await Linking.getInitialURL()}`;
	const url_route: string = url.substring(url.lastIndexOf('/') + 1);
	return url_route;
}