import { StatusBar } from "expo-status-bar";
import Routes from "./routes";
import { PageProvider } from "./contexts/page";

export default function App() {
	return (
		<PageProvider>
			<StatusBar translucent hidden />
			<Routes />
		</PageProvider>
	);
}
