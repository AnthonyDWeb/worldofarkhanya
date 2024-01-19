import React from "react";
import { Pressable } from "react-native";
import { PressableBtnProps } from "../../types";
import BackgroundButton from "./background";
import { MaterialIcons } from "@expo/vector-icons";

export default function IconButton({action, icon, size, style, color} : PressableBtnProps) {
	return (
		<Pressable style={({ pressed }) => [style && style, { opacity: pressed ? 0.5 : 1 }]} onPress={action}>
            <BackgroundButton>
                <MaterialIcons name={icon} size={size ? size : 30} color={color ? color : "black"} style={{ margin: 5, zIndex: 20 }} />
            </BackgroundButton>
		</Pressable>
	);
}