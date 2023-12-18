import { Pressable } from "react-native";
import React from "react";

type btnProps = {
	children: any;
	action: () => void;
    style?: {}
};
export default function PressableButton({ children, action,style }: btnProps) {
	return (
		<Pressable style={({pressed}) => [style && style,{ opacity: pressed ? 0.5 : 1 }]} onPress={() => action()}>
			{children}
		</Pressable>
	);
}
