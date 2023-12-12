import React, { createContext, useEffect, useState } from "react";
import { INIT_MESSAGE } from "../constants";
import { initServer } from "../utils/API";
import { getStorage } from "../utils/Storage/storageCall";
import { Linking } from "react-native";

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
		const res = await checkStorage();
		res ? (setUser(res), setOpen(true)) : warmUpServer();
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
