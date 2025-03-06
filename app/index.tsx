import { View, Text,StyleSheet,ImageBackground,Modal,StatusBar, Linking } from 'react-native';
import React from 'react';
import { SafeAreaView } from "react-native-safe-area-context";
import { useRouter } from "expo-router";
import CustomButton from "@/components/CustomButton";
import AppGradient from "@/components/AppGradient";
import BImage from "@/assets/images/indexbl.jpg";
import { useState } from 'react';
import { InAppBrowser } from 'react-native-inappbrowser-reborn';
import WebView from 'react-native-webview';

const GRADIO_URL ="https://huggingface.co/spaces/ugursirvermez/FoodVision101";

const App = () => {
    const router = useRouter();

    const [visible, setVisible] = useState(false);

  //TEST ETME
  const openLinkInBrowserHandler = () => {
    Linking.canOpenURL(GRADIO_URL).then((supported) => {
      supported && Linking.openURL(GRADIO_URL);
    });
  };
  //Modal'da kullanılan
  const openLinkInWebView = () => setVisible(true);
  //Modal'a bağlı
  const openLinkInAppBrowser = () => {
    InAppBrowser.isAvailable()
      .then(() => {
        return InAppBrowser.open(GRADIO_URL, {
          // iOS Properties
          animated: true,
          modalEnabled: true,
          // Android Properties
          showTitle: true,
        });
      })
      .catch((_) => openLinkInBrowserHandler());
  };
    
  return (
    <View style={{flex:1,height:'120%', width:'100%',position:"absolute"}}>
    <ImageBackground 
    source={BImage} 
    resizeMode="cover" 
    style={{flex:1,height:'100%', width:'100%',
            position:"absolute", backgroundColor:'rgba(0,0,0,0.8)'}}>

    <AppGradient colors={["rgba(0,0,0,0.5)", "rgba(0,0,0,0.8)"]} >
      <SafeAreaView>
      <View style={{height:'50%', width:'100%'}}>
      <Text style={styles.headline}>
        FoodVision
      </Text>
      <Text style={{textAlign:"center", fontSize:20, color:"white"}}>
      Yiyecek Adını Bilen Sihirbaz!
      </Text>
      </View>
      <View style={styles.buttonstyle}>
        <CustomButton onPress={openLinkInWebView}
        title="Başlayalım!"/>
      </View>

      <Modal
        visible={visible}
        presentationStyle={'pageSheet'}
        animationType={'slide'}
        onRequestClose={() => setVisible(!visible)}
      >
        <WebView source={{ uri: GRADIO_URL }} />
      </Modal>

      <StatusBar barStyle={'default'}/>
      
      </SafeAreaView>
    </AppGradient>
    </ImageBackground>
  </View>

);
};

const styles = StyleSheet.create({

headline:{flex:1, fontWeight: 'bold', fontSize:25, color:"white",
justifyContent:"center",textAlign: 'center', alignItems:"center"},

buttonstyle:{color:"black", backgroundColor: 'white',
height:'30%', width:'100%',
position: 'absolute', //Here is the trick
bottom:-100, //Here is the trick
justifyContent:"center",textAlign: 'center', alignItems:"center", borderRadius: 35}

});

export default App;