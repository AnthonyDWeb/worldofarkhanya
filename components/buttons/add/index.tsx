import { Pressable } from "react-native";
import React from "react";
import { MaterialIcons } from "@expo/vector-icons";
import BackgroundButton from "../background";

type btnProps = {
	action: () => void;
	size?: number;
};
export default function Add({ action, size }: btnProps) {

	return (
		<Pressable onPress={action} style={{position: "absolute", bottom: "-5%", right: "0%", zIndex: 25}}>
			<BackgroundButton>
				<MaterialIcons name="add" size={size ? size : 30} color="black" style={{ margin: 5, zIndex: 20 }} />
			</BackgroundButton>
		</Pressable>
	);
}
