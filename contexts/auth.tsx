import React, { createContext, useEffect, useState } from "react";
import { ACCESS_TOKEN, STORAGE_TIME, STORAGE_USER } from "../constants";
import { initServer } from "../utils/API";
import { getStorage, setStorage } from "../utils/Storage/storageCall";

const AuthContext = createContext<any>({});

export const AuthProvider = (props: any) => {
	const [user, setUser] = useState();
	const [token, setToken] = useState();
	const [serverOpen, setOpen] = useState(false);
	const [isLogged, setIsLogged] = useState(false);
	const [load, setLoad] = useState(false);

	useEffect(() => {
		initialization();
	}, []);

	const initialization = async () => {
		const storageUser = await getStorage(STORAGE_USER);
		const storageInitMessage = await getStorage(STORAGE_TIME);
		const newTime = new Date().getTime();
		const timeDelay =
			storageInitMessage && (newTime - storageInitMessage) / 1000;
		timeDelay > 3600 || !storageInitMessage ? warmUpServer() : setOpen(true);
		storageUser && setUser(storageUser);
	};

	const warmUpServer = async () => {
		try {
			const res = await initServer();
			if (res?.message || res === undefined) {
				setStorage(STORAGE_TIME, new Date().getTime());
				setOpen(true);
			}
		} catch (error) {
			console.log("err", error);
		}
	};

	const authentification = (res: any) => {
		setUser(res.user);
		setToken(res.access_token);
		setIsLogged(true);
		setTimeout(() => setLoad(false), 500);
	};

	const logout = async () => {
		const users = await getStorage(STORAGE_USER);
		setIsLogged(false);
		setUser(users);
	};

	const authContextValue: any = {
		isLogged,
		logout,
		authentification,
		serverOpen,
		initServer,
		user,
		setUser,
		load,
		setLoad,
		token,
		setToken,
	};

	return <AuthContext.Provider value={authContextValue} {...props} />;
};
export const useAuth = () => React.useContext(AuthContext);
