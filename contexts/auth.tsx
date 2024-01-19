import React, { createContext, useEffect, useState } from "react";
import { ACCESS_TOKEN, STORAGE_TIME, STORAGE_USER } from "../constants";
import { initServer } from "../utils/API";
import { clearStorage, getStorage, setStorage } from "../utils/Storage.Upload/storage";
import { AuthContextProps, UserProps, resProps } from "../types";

const defaultValue = {
	user: {
		_id: undefined,
		username: undefined,
		token: undefined,
		profileImage: undefined,
	},
	setUser: (value: UserProps) => void {},
	userStorage: false,
	setUserStorage: (value: boolean) => void {},
	token: "",
	setToken: () => void {},
	serverOpen: false,
	setOpen: () => void {},
	isLogged: false,
	setIsLogged: () => void {},
	load: false,
	setLoad: () => void {},
	logout: () => void {},
	authentification: () => void {},
	initServer: () => void {},
};
const AuthContext = createContext<AuthContextProps>(defaultValue);

export const AuthProvider = (children: any) => {
	const [user, setUser] = useState<UserProps>();
	const [userStorage, setUserStorage] = useState(false);
	const [token, setToken] = useState("");
	const [serverOpen, setOpen] = useState(false);
	const [isLogged, setIsLogged] = useState(false);
	const [load, setLoad] = useState(false);

	useEffect(() => {
		initialization();
	}, []);

	const initialization = async () => {
		const storageUser: resProps = await getStorage(STORAGE_USER);
		const storageTime: number = await getStorage(STORAGE_TIME);
		const newTime = new Date().getTime();
		const timeDelay = storageTime && (newTime - storageTime) / 1000;
		timeDelay > 3600 || !storageTime ? warmUpServer() : setOpen(true);
		if (storageUser) {
			setUser(storageUser.user);
			setToken(storageUser.access_token);
			setUserStorage(true);
		}
	};

	const warmUpServer = async () => {
		try {
			const res = await initServer();
			if (res?.message || res === undefined) {
				setStorage(STORAGE_TIME, new Date().getTime());
				setOpen(true);
			}
		} catch (error) { warmUpServer(); console.log("err", error); }
	};

	const authentification = (res: resProps) => {
		setUser(res.user);
		setToken(res[ACCESS_TOKEN]);
		setIsLogged(true);
		setTimeout(() => setLoad(false), 500);
	};

	const logout = async () => {
		setIsLogged(false);
	};

	const authContextValue: AuthContextProps = {
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
		userStorage,
		setUserStorage,
	};

	return <AuthContext.Provider value={authContextValue} {...children} />;
};
export const useAuth = () => React.useContext(AuthContext);
