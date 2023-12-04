import { useState, useEffect } from "react";
import { useWindowDimensions } from "react-native";

export default function useDevice() {
	const [screenSize, setDimensions] = useState({
		width: useWindowDimensions().width,
		height: useWindowDimensions().height,
	});
	const height = screenSize.height;
	const isMobile = screenSize.width < 764;
	const isTablet = screenSize.width >= 764 && screenSize.width < 1024;
	const isDesktop = screenSize.width >= 1024;
	const device = isMobile
		? "mobile"
		: isTablet
		? "tablet"
		: isDesktop && "desktop";
	const deviceContextValue = {
		screenSize,
		height,
		isMobile,
		isTablet,
		isDesktop,
		device,
	};

	useEffect(() => {
		const handleResize = () =>
			setDimensions({
				width: useWindowDimensions().width,
				height: useWindowDimensions().height,
			});
		window?.addEventListener?.("resize", handleResize);
		return () => window?.removeEventListener?.("resize", handleResize);
	}, []);

	return deviceContextValue;
}
