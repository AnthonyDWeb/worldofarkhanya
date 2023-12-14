// LIBRARY
import React, { useState } from "react";
import { View, Text, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import Animated, {
	useSharedValue,
	withTiming,
	useAnimatedStyle,
	Easing,
} from "react-native-reanimated";
// STYLE
import { useStyle } from "../../contexts/style";
// CONTEXT
import { usePage } from "../../contexts/page";
// VIEW
// COMPONENT
import Page from "../../components/pages";
import { useAuth } from "../../contexts/auth";
// OTHER

export default function Menu() {
	const { logout } = useAuth();
	const { getBack, setPage } = usePage();
	const { styles } = useStyle();
	const navigation = useNavigation<any>();
	const [selected, selection] = useState<string>();
	// Global Constante
	// Private Constante

	// Functions
	const handleNavigation = () => {
		getBack();
		navigation.navigate("Navigation");
	};
	const handleAuthentification = () => {
		setPage({name: "login"});
		logout();
	}
	
	// Renders
	const Section = ({ name, children }: { name: string; children?: any }) => {
		const sectionStyle = {
			padding: 10,
			borderBottomColor: "grey",
			borderBottomWidth: 1,
		};
		const isSelected = name === selected;
		return (
			<View style={sectionStyle}>
				<Pressable onPress={() => selection(isSelected ? undefined : name)}>
					<Text style={styles.secondaryTitle}>{name}</Text>
				</Pressable>
				{isSelected && children}
			</View>
		);
	};

	return (
		<Page>
			<View style={{ flex: 1, padding: 15 }}>
				<Pressable onPress={() => handleNavigation()}>
					<Text style={styles.titlePage}>Menu</Text>
				</Pressable>
				<Section name="Mon compte">
					<Text style={styles.text}>Mon compte 1</Text>
					<Text style={styles.text}>Mon compte 2</Text>
					<Text style={styles.text}>Mon compte 3</Text>
					<Text style={styles.text}>Mon compte 4</Text>
				</Section>
				<Section name="Politique de confidentialité">
					<Text style={styles.text}>Politique de confidentialité 1</Text>
					<Text style={styles.text}>Politique de confidentialité 2</Text>
					<Text style={styles.text}>Politique de confidentialité 3</Text>
					<Text style={styles.text}>Politique de confidentialité 4</Text>
				</Section>
				<Pressable onPress={() => handleAuthentification()}>
					<Text style={styles.secondaryTitle}>{`-> Se déconnecter`}</Text>
				</Pressable>
			</View>
		</Page>
	);
}
