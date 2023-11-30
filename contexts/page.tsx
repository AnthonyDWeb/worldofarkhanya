import React, { createContext, useEffect, useState } from "react";

type pagePros = {
	pageData: { name: string; data: {} | [] };
	setPageData: (value: any) => void;
	parchmentDisplay: boolean;
	setParchmentDisplay: (value: boolean) => void;
};
const prospsPage = {
	pageData: { name: "", data: {} },
	setPageData: function (value: any): void {},
	parchmentDisplay: false,
	setParchmentDisplay: function (value: boolean): void {},
	updatePage: function (value: string): void {},
};

const PageContext = createContext(prospsPage);

export const PageProvider = (props: pagePros) => {
	const [pageData, setPageData] = useState<any>({ name: "Profile", data: {} });
	const [parchmentDisplay, setParchmentDisplay] = useState<boolean>(true);

	const updatePage = (page: string, data: {} | []) => {
		setParchmentDisplay(false);
		setTimeout(() => {
			setPageData({ name: page, data: data });
			setParchmentDisplay(true);
		}, 500);
	};
	const pageContextValue: any = {
		pageData,
		setPageData,
		parchmentDisplay,
		setParchmentDisplay,
		updatePage,
	};
	return <PageContext.Provider value={pageContextValue} {...props} />;
};
export const usePage = () => React.useContext(PageContext);
