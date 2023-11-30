import { StatusBar } from "expo-status-bar";
import Routes from "./routes";
import { PageProvider } from "./contexts/page";
import { StyleProvider } from "./contexts/style";

export default function App() {
	return (
		<PageProvider>
			<StatusBar translucent hidden />
			<Routes />
		</PageProvider>
	);
}
