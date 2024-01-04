import { View, Text } from "react-native";
import React from "react";
import Parchment from "../parchment";
import useDevice from "../../utils/hooks/useDevice";

export const Modal = ({ children }: any) => {
  const { screenSize } = useDevice();
  const width = screenSize.width*0.7;
	return (
		<View
			style={{
				zIndex: 100,
				position: "absolute",
				height: "100%",
				width: "100%",
				padding: 20,
				alignSelf: "center",
				justifyContent: "center",
        backgroundColor: "rgba(0,0,0,0.3)"
			}}
		>
			<Parchment modal wSize={width}>
        {children}
			</Parchment>
		</View>
	);
};
