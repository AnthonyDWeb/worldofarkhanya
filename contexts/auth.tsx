import React, { createContext, useEffect, useState } from "react";
import { INIT_MESSAGE } from "../constants";
import { initServer } from "../utils/API";

const AuthContext = createContext<any>({});

export const AuthProvider = (props: any) => {
	const [serverOpen, setOpen] = useState(false);
	const [isLogged, setIsLogged] = useState(false);

	useEffect(() => {
		initialization();
	}, []);

	const initialization = async () => {
		const res = await initServer();
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
	};

	return <AuthContext.Provider value={authContextValue} {...props} />;
};
export const useAuth = () => React.useContext(AuthContext);
