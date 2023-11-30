import { View, Text, TouchableOpacity, Image } from 'react-native'
import React from 'react';
import { LinearGradient } from 'expo-linear-gradient';

type btnProps = {
  children: any,
  rad?: number | string | any;
}
export default function SampleButton({children,rad}: btnProps) {
  const backgroundButton = ["#6c3f02", "#9f6913", "#fbcd76", "#9f6913", "#6c3f02"];
  const calc = require('../../assets/images/calc-parchment.png')
  return (
    
    <LinearGradient colors={backgroundButton} style={{position: "relative",borderRadius: rad ? rad: 5, paddingHorizontal: 5, justifyContent: "center", paddingTop: 4, paddingBottom: 6}}>
      <Image source={calc} style={[{ position: "absolute",top: 0, height: "100%", width: "100%", alignSelf: "center", borderRadius: rad ? rad: 5, zIndex: -1 }]} />
      {children}
      <Image source={calc} style={[{ position: "absolute",bottom: 0, height: "100%", width: "100%", alignSelf: "center", borderRadius: rad ? rad: 5, transform: [{ rotate: '180deg' }], zIndex: -1 }]} />
    </LinearGradient>
  )
}