import React, { createContext, useEffect, useState } from "react";

type pagePros = {
	page: { name: string; data?: {} | [] };
	setPage: (page: string, data?: {} | []) => void;
	lastPage: { name: string; data?: {} | [] };
	setLastPage: (page: string, data?: {} | []) => void;
	parchmentDisplay: boolean;
	setParchmentDisplay: (value: boolean) => void;
};

const PageContext = createContext<any>({});

export const PageProvider = (props: any) => {
	const [page, setPage] = useState<any>({ name: "login" });
	const [lastPage, setLastPage] = useState<any>({ name: "" });
	const [parchmentDisplay, setParchmentDisplay] = useState<boolean>(false);

	useEffect(() => {
		page.name !== "Menu" && setTimeout(() => setParchmentDisplay(true), lastPage.name === "Menu" ? 0 : 300);
	}, [page]);

	const closeParchment = () => {
		setParchmentDisplay(false);
		setLastPage(page);
	}
	const updatePage = (pageName: string, data: {} | []) => {
		closeParchment()
		setPage({
			name: pageName,
			data: data && data,
		});
	};

	const getBack = () => {
		setLastPage(page);
		setPage(lastPage);
	};

	const pageContextValue: any = {
		page,
		setPage,
		lastPage,
		setLastPage,
		parchmentDisplay,
		setParchmentDisplay,
		updatePage,
		getBack,
	};

	return <PageContext.Provider value={pageContextValue} {...props} />;
};
export const usePage = () => React.useContext(PageContext);
