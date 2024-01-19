import React, { createContext, useEffect, useState } from "react";
import { capitalizeFirstLetter } from "../utils/other/transform_data";

const defaultValue = {
	translate: (word: any, option?: string) => void {}
};
const LanguageContext = createContext(defaultValue);
export const LanguageProvider = (children: any) => {
	const variable = require("../data/translate.json");
	const translate = (word: any, option?: string) => {
		const translation = variable?.[word] ? variable[word] : word;
		return option === "maj" ? capitalizeFirstLetter(translation) : translation;
	};
	const languageContextValue = { translate };
	return (
		<LanguageContext.Provider value={languageContextValue} {...children} />
	);
};
export const useLanguage = () => React.useContext(LanguageContext);
