// LIBRARY
import React from "react";
import { View, Text, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
// STYLE
import { useStyle } from "../../contexts/style";
// CONTEXT
import { usePage } from "../../contexts/page";
// VIEW
// COMPONENT
import Page from "../../components/pages";
// OTHER

export default function Menu() {
	const { getBack } = usePage();
	const { styles } = useStyle();
	const navigation = useNavigation<any>();
	// Global Constante
	// Private Constante

	// Functions
	const handle = () => {
		getBack();
		navigation.navigate("Navigation");
	};
	// Renders

	const Section = ({ name }: { name: string }) => {
		return (
			<Pressable style={{padding: 10, borderBottomColor: "grey", borderBottomWidth: 1}}
				onPress={() => {
					("");
				}}
			>
				<Text style={styles.text}>{name}</Text>
			</Pressable>
		);
	};
	return (
		<Page>
			<View style={{ flex: 1, padding: 15 }}>
				<Pressable onPress={() => handle()}>
					<Text style={styles.titlePage}>Menu</Text>
				</Pressable>
				<Section name="Mon compte" />
				<Section name="Politique de confidentialité" />
				<Section name={`->Se déconnecter`} />
			</View>
		</Page>
	);
}
