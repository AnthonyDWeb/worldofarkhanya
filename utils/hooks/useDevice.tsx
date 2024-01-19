import { useState, useEffect } from "react";
import { useWindowDimensions } from "react-native";

export default function useDevice() {
	const defaultValue = {
		width: useWindowDimensions().width,
		height: useWindowDimensions().height,
	};
	const [screenSize, setDimensions] = useState(defaultValue);
	const isMobile = screenSize.width < 764;
	const isTablet = screenSize.width >= 764 && screenSize.width < 1024;
	const isDesktop = screenSize.width >= 1024;
	const parchmentWidth = screenSize.width*0.9;
	const parchmentHeight = screenSize.height - 85;

	const device = isMobile
		? "mobile"
		: isTablet
		? "tablet"
		: isDesktop && "desktop";

	const deviceContextValue = {
		screenSize,
		isMobile,
		isTablet,
		isDesktop,
		device,
		parchmentWidth,
		parchmentHeight
	};

	useEffect(() => {
		const handleResize = () => setDimensions({ width: useWindowDimensions().width, height: useWindowDimensions().height });
		window?.addEventListener?.("resize", handleResize);
		return () => window?.removeEventListener?.("resize", handleResize);
	}, []);

	return deviceContextValue;
}
