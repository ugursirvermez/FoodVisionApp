import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react';

interface CustomButtonProps{
    onPress: () => void;
    title: string;
    textStyles?: string;
    containerStyles?: string;
}

const CustomButton = ({onPress, title,textStyles="", containerStyles=""}:CustomButtonProps) => {
  return (
    <TouchableOpacity activeOpacity={0.7}
    onPress={onPress}>
      <Text style={styles.buttontext}>
        {title}</Text>
    </TouchableOpacity>
  )
}
const styles = StyleSheet.create({
    buttontext:{fontWeight: 'bold', fontSize:25}
  });
export default CustomButton