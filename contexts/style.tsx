import React, { createContext, useEffect, useState } from "react";

const StyleContext = createContext({});

export const StyleProvider = (props: any) => {
	const styleContextValue: any = {};
	return <StyleContext.Provider value={styleContextValue} {...props} />;
};
export const usePage = () => React.useContext(StyleContext);
