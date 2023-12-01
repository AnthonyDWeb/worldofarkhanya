import { useEffect, useState } from "react";
import { loadAsync } from "expo-font";
import { StatusBar } from "expo-status-bar";
import Routes from "./routes";
import { PageProvider } from "./contexts/page";

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
			<PageProvider>
				<StatusBar translucent hidden />
				<Routes />
			</PageProvider>
		);
	}
}
