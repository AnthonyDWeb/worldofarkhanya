import React, { createContext, useEffect, useState } from "react";

type pagePros = {
	page: { name: string; data?: {} | [] };
	setPage: (page: string, data?: {} | []) => void;
	parchmentDisplay: boolean;
	setParchmentDisplay: (value: boolean) => void;
};
const prospsPage = {
	page: { name: "" },
	setPage: function (page: string, data?: {} | []): void {},
	parchmentDisplay: false,
	setParchmentDisplay: function (value: boolean): void {},
	updatePage: function (value: string): void {},
};

const PageContext = createContext(prospsPage);

export const PageProvider = (props: any) => {
	const [page, setPage] = useState<any>({ name: "Profile" });
	const [parchmentDisplay, setParchmentDisplay] = useState<boolean>(true);

	useEffect(() => {
		setTimeout(() => setParchmentDisplay(true), 300);
	}, [page]);

	const updatePage = (page: string, data: {} | []) => {
		setParchmentDisplay(false);
		setPage({
			name: page,
			data: data && data,
		});
	};

	const pageContextValue: any = {
		page,
		setPage,
		parchmentDisplay,
		setParchmentDisplay,
		updatePage,
	};
	
	return <PageContext.Provider value={pageContextValue} {...props} />;
};
export const usePage = () => React.useContext(PageContext);
