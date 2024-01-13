// LIBRARY
import React, { useState } from "react";
import { Text, View, ScrollView } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
// STYLE
import { useStyle } from "../../contexts/style";
// CONTEXT
import { useAuth } from "../../contexts/auth";
// VIEW
// COMPONENT
import ProfileImage from "../../components/image/profile_image";
// OTHER
import { deepClone } from "../../utils/other/transform_data";
import useDevice from "../../utils/hooks/useDevice";
import PressableButton from "../../components/buttons/pressable/pressable_button";
import { useLanguage } from "../../contexts/language";
import { usePage } from "../../contexts/page";
import { CREATION } from "../../constants";

export default function Profile() {
	// Global Constante
	const { isMobile, height } = useDevice();
	const { updatePage } = usePage();
	const { user } = useAuth();
	const { styles } = useStyle();
	const { translate } = useLanguage();
	// Private Constante
	const [showCreation, setShow] = useState(true);
	// Functions
	const getTotalCreations = (data: any) => {
		let total = 0;
		Object.keys(data).map((e: string) => (total = total + data[e].length));
		return total;
	};

	// Renders
	const Title = () => {
		console.info("user", user);
		return (
			<View
				style={[
					!isMobile && styles.rowContainer,
					{ alignItems: "center",justifyContent: "center", marginTop: 20 },
				]}
			>
				<ProfileImage />
				<Text
					style={[
						styles.titlePage,
						{ marginHorizontal: 20, marginTop: isMobile ? 10 : 0 },
					]}
				>
					{user?.username}
				</Text>
			</View>
		);
	};

	const Creation = () => {
		const userCopy = user && deepClone(user);
		const creationKeys = Object.keys(userCopy.creations);
		const arrowIcon = showCreation ? "arrow-drop-up" : "arrow-drop-down";
		const seeStyle = [
			styles.text,
			{ textDecorationLine: "underline", marginLeft: 5, opacity: 0.6 },
		];
		const totalCreations = getTotalCreations(userCopy.creations);
		return (
			<View style={styles.profileCreation}>
				<PressableButton
					action={() => setShow(!showCreation)}
					style={styles.rowContainer}
				>
					<Text style={styles.secondaryTitle}>
						Mes créations: {totalCreations}
					</Text>
					<MaterialIcons name={arrowIcon} size={45} color="black" />
				</PressableButton>
				<ScrollView style={{ height: showCreation ? height / 2 : 0 }}>
					{creationKeys.map((e: string) => (
						<View style={styles.rowContainer} key={e}>
							<Text style={styles.text}>
								{translate(e, "maj")} : {userCopy.creations[e].length}
							</Text>
							<PressableButton
								action={() => (alert(`voir => ${e}`), updatePage(CREATION))}
							>
								<Text style={seeStyle}>voir</Text>
							</PressableButton>
						</View>
					))}
				</ScrollView>
			</View>
		);
	};

	return (
		<View>
			<Title />
			<Creation />
		</View>
	);
}
