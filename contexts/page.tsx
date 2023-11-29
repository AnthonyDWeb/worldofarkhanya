import React, { createContext, useState } from "react";
const PageContext = createContext({});

export const PageProvider = (props: any) => {
	const pageContextValue = {};
	return <PageContext.Provider value={pageContextValue} {...props} />;
};
export const usePage = () => React.useContext(PageContext);
