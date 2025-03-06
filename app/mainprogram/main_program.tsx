import { View, Text,StyleSheet,ImageBackground,StatusBar } from 'react-native';
import React from 'react';
import { useRouter } from "expo-router";
import CustomButton from "@/components/CustomButton";
import AppGradient from "@/components/AppGradient";
import BImage from "@/assets/images/background1.jpg";


const main_program = () => {
    const router = useRouter();
  return (
<View style={{flex:1,height:'120%', width:'100%',position:"absolute"}}>
    <ImageBackground 
    source={BImage} 
    resizeMode="cover" 
    style={{flex:1,height:'100%', width:'100%',
            position:"absolute", backgroundColor:'rgba(0,0,0,0.8)'}}>

    <AppGradient colors={["rgba(0,0,0,0.5)", "rgba(0,0,0,0.8)"]} >
      <View style={{height:'50%', width:'100%'}}>

      <Text style={styles.headline}>
      Fotoğraf Çek veya Resmi Yükle!
      </Text>

      </View>
      <View style={styles.buttonstyle1}>
        <CustomButton onPress={() => console.log("çek")}
        title="Fotoğraf Çek!"/>
        </View>
        <View style={styles.buttonstyle}>
        <CustomButton onPress={() => console.log("yükle")}
        title="Yükle!"/>
      </View>

      <StatusBar barStyle={'default'}/>
      
    </AppGradient>
    </ImageBackground>
  </View>

);
};

const styles = StyleSheet.create({

headline:{flex:1, fontWeight: 'bold', fontSize:25, color:"white",
justifyContent:"center",textAlign: 'center', alignItems:"center"},

buttonstyle:{color:"black", backgroundColor: 'white',
height:'30%', width:'90%', marginBottom:"8%",
position: 'absolute', //Here is the trick
bottom:-100, //Here is the trick
justifyContent:"center",textAlign: 'center', alignItems:"center", borderRadius: 35},

buttonstyle1:{color:"black", backgroundColor: 'white', 
    height:'30%', width:'90%', marginBottom:"45%",
    position: 'absolute', //Here is the trick
    bottom:-100, //Here is the trick
    justifyContent:"center",textAlign: 'center', alignItems:"center", borderRadius: 35}

});

export default main_program;