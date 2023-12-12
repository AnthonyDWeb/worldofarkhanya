import React, { createContext, useEffect, useState } from "react";
import { INIT_MESSAGE } from "../constants";
import { initServer } from "../utils/API";
import { getStorage } from "../utils/Storage/storageCall";

const AuthContext = createContext<any>({});

export const AuthProvider = (props: any) => {
	const [user, setUser] = useState();
	const [serverOpen, setOpen] = useState(true);
	const [isLogged, setIsLogged] = useState(false);

	useEffect(() => {
		initialization();
		console.log("inside auth");
	}, []);

	const initialization = async () => {
		const res = await initServer();
		const woaUser = await getStorage("woaUser");
		console.log("woaUser", woaUser.user)
		setUser(woaUser.user);
		setOpen(res.message === INIT_MESSAGE);
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
