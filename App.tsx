import { useEffect, useState } from "react";
import { loadAsync } from "expo-font";
import { StatusBar } from "expo-status-bar";
import { PageProvider } from "./contexts/page";
import { StyleProvider } from "./contexts/style";
import { AuthProvider } from "./contexts/auth";
import { LanguageProvider } from "./contexts/language";
import Routes from "./routes";

export default function App() {
	const [fontLoad, setFontLoad] = useState(false);

	useEffect(() => {
		fontLoading();
	}, []);

	const fontLoading = async () => {
		await loadAsync({
			imf: require("./assets/fonts/IMF.ttf"),
			cookie: require("./assets/fonts/Cookie.ttf"),
		})
			.then(() => setFontLoad(true))
			.catch((err) => {
				console.log("error", err);
			});
	};
	if (!fontLoad) {
		return null;
	} else {
		return (
			<AuthProvider>
				<PageProvider>
					<StyleProvider>
						<LanguageProvider>
							<StatusBar translucent hidden />
							<Routes />
						</LanguageProvider>
					</StyleProvider>
				</PageProvider>
			</AuthProvider>
		);
	}
}