import React, { createContext, useEffect, useState } from "react";
import { getRouteFromUrl } from "../utils/other/verification";
import { PageContextProps, SetPageProps } from "../types";

const pagebase = {
	name: "",
	data: undefined,
};

const defaultValue = {
	page: pagebase,
	setPage: ({ name, data }: SetPageProps) => void {},
	lastPage: pagebase,
	setLastPage: ({ name, data }: SetPageProps) => void {},
	parchmentDisplay: false,
	setParchmentDisplay: (value: boolean) => void {},
	updatePage: (pageName: string, data?: {}) => void {},
	getBack: () => void {},
	urlRoute: "",
};
const PageContext = createContext<PageContextProps>(defaultValue);

export const PageProvider = (props: any) => {
	const [urlRoute, setUrl] = useState("");
	const [page, setPage] = useState<any>({ name: "login" });
	const [lastPage, setLastPage] = useState<any>({ name: "" });
	const [parchmentDisplay, setParchmentDisplay] = useState<boolean>(false);

	useEffect(() => {
		page.name !== "Menu" &&
			setTimeout(
				() => setParchmentDisplay(true),
				lastPage.name === "Menu" ? 0 : 300
			);
		updateURL();
	}, [page]);

	const updateURL = async () => {
		const path = await getRouteFromUrl();
		setUrl(path);
	};

	const closeParchment = () => {
		setParchmentDisplay(false);
		setLastPage(page);
	};
	const updatePage = (pageName: string, data?: {}) => {
		closeParchment();
		setPage({
			name: pageName,
			data: data,
		});
	};

	const getBack = () => {
		setLastPage(page);
		setPage(lastPage);
	};

	const pageContextValue: PageContextProps = {
		page,
		setPage,
		lastPage,
		setLastPage,
		parchmentDisplay,
		setParchmentDisplay,
		updatePage,
		getBack,
		urlRoute,
	};

	return <PageContext.Provider value={pageContextValue} {...props} />;
};
export const usePage = () => React.useContext(PageContext);
