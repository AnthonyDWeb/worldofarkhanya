import React, { createContext, useEffect, useState } from "react";
import { INIT_MESSAGE } from "../constants";
import { initServer } from "../utils/API";
import { getStorage, setStorage } from "../utils/Storage/storageCall";

const AuthContext = createContext<any>({});

export const AuthProvider = (props: any) => {
	const [user, setUser] = useState();
	const [serverOpen, setOpen] = useState(false);
	const [isLogged, setIsLogged] = useState(false);

	useEffect(() => {
		initialization();
	}, []);

	const warmUpServer = async () => {
		const res = await initServer();
		setStorage("woaInit", new Date().getTime());
		setOpen(res.message === INIT_MESSAGE);
	};

	const checkStorage = async () => {
		const woaUser = await getStorage("woaUser");
		if (woaUser) {
			return woaUser.user;
		} else {
			return undefined;
		}
	};

	const initialization = async () => {
		const storageUser = await checkStorage();
		const storageInitMessage = await getStorage("woaInit");
		if (storageInitMessage) {
			const newTime = new Date().getTime();
			const timeDelay = (newTime - storageInitMessage) / 1000;
			timeDelay > 3600 && warmUpServer();
			storageUser && (setUser(storageUser), setOpen(true));
		}
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
	};

	return <AuthContext.Provider value={authContextValue} {...props} />;
};
export const useAuth = () => React.useContext(AuthContext);
