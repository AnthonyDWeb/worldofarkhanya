import { Pressable } from "react-native";
import React from "react";
import { PressableBtnProps } from "../../types";

export default function PressableButton({ children, action, style }: PressableBtnProps) {
	return (
		<Pressable style={({pressed}) => [style && style,{ opacity: pressed ? 0.5 : 1 }]} onPress={() => action()}>
			{children}
		</Pressable>
	);
}
