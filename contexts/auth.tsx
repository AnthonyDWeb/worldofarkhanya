import React, { createContext, useEffect, useState } from "react";
import { ACCESS_TOKEN, INIT_MESSAGE } from "../constants";
import { initServer } from "../utils/API";
import {
	clearStorage,
	getAllKeysStorage,
	getStorage,
	removeStorage,
	setStorage,
} from "../utils/Storage/storageCall";

const AuthContext = createContext<any>({});

export const AuthProvider = (props: any) => {
	const [user, setUser] = useState();
	const [serverOpen, setOpen] = useState(false);
	const [isLogged, setIsLogged] = useState(false);

	useEffect(() => {
		initialization();
	}, []);

	const warmUpServer = async () => {
		try {
			const res = await initServer();
			setStorage("woaInit", new Date().getTime());
			setOpen(res.message === INIT_MESSAGE);
		} catch (error) {
			console.log("err", error);
		}
	};

	const updateUserStorage = async (data: any) => {
		const users = await checkStorage();
		const storage = users ? users : [];
		storage.push({
			user: data.user,
			[ACCESS_TOKEN]: data[ACCESS_TOKEN],
		})
		console.log("usersStorage after",storage);
		setStorage("woaUser", storage);
	};

	const checkStorage = async () => await getStorage("woaUser");

	const initialization = async () => {
		const storageUser = await checkStorage();
		console.log("storageUser",storageUser);
		const storageInitMessage = await getStorage("woaInit");
		const newTime = new Date().getTime();
		const timeDelay =
			storageInitMessage && (newTime - storageInitMessage) / 1000;
		timeDelay > 3600 || !storageInitMessage ? warmUpServer() : setOpen(true);
		storageUser && setUser(storageUser);
	};

	const authentification = () => {
		setIsLogged(true);
	};

	const authContextValue: any = {
		isLogged,
		authentification,
		serverOpen,
		initServer,
		user,
		setUser,
		updateUserStorage
	};

	return <AuthContext.Provider value={authContextValue} {...props} />;
};
export const useAuth = () => React.useContext(AuthContext);
