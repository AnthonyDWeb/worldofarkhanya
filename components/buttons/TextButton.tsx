import React from "react";
import { Text, Pressable } from "react-native";
import { PressableBtnProps } from "../../types";
import BackgroundButton from "./background";

export default function TextButton({action, style, text, textStyle, bgStyle} : PressableBtnProps) {
	return (
		<Pressable style={({ pressed }) => [style && style, { opacity: pressed ? 0.5 : 1, zIndex: 200 }]} onPress={action}>
            <BackgroundButton addStyle={bgStyle}>
                <Text style={textStyle}>{text}</Text>
            </BackgroundButton>
		</Pressable>
	);
}