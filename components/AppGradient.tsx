import { View,StyleSheet, Text } from 'react-native'
import React from 'react'
import { LinearGradient } from 'expo-linear-gradient';
import Content from './Content';

const AppGradient = (
    {children, colors,}:
    {children:any;colors:string[];}) => {
  return (
    <LinearGradient colors={colors} style={styles.headline}>
      <Content>{children}</Content>
    </LinearGradient>
  )
}
const styles = StyleSheet.create({

    headline:{flex:1, fontWeight: 'bold', fontSize:25, color:"white",
    justifyContent:"center",textAlign: 'center', alignItems:"center",
    height:'100%', width:'100%'},

  });


export default AppGradient;