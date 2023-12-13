// LIBRARY
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import CheckBox from 'expo-checkbox';
// CONTEXT
import { useStyle } from '../../contexts/style'; 
// VIEWS
// COMPONENTS
// UTILS
// OTHER
type checktype = {
    label: string,
    action: () => void,
    checked: boolean
}

export default function Checkbox({ label, action, checked }: checktype) {
    // Contexts constantes
    const { styles } = useStyle();
    // Hooks constantes
    // Private constantes
    return (
        <View style={style.checkboxContainer}>
            <Text style={[styles.text,style.label]}>{label}</Text>
            <CheckBox value={checked} onValueChange={action} style={style.checkbox} />
        </View>
    )
}

const style = StyleSheet.create({
    checkboxContainer: {
        flexDirection: "row",
        marginTop: 10,
        marginBottom: 20,
    },
    checkbox: {
        alignSelf: "center",
        borderRadius: 5,
        backgroundColor: "whitesmoke"
    },
    label: {
        margin: 8,
    },
});