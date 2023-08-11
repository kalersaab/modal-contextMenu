import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import ModalMenu from './screen/ModalMenu';
import { useState } from 'react';


const App = () => {
  const [visible, setVisible] = useState(false)
  return(
  <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
    <TouchableOpacity
      style={{
        backgroundColor:"orange",
        width: "80%", 
        height: 50 ,
        alignSelf:'center',
        justifyContent:'center',
        alignItems:'center',
        borderRadius:10
        }}
    >
      <Text>Modal</Text>
    </TouchableOpacity>
    <ModalMenu visible={visible} setVisible={setVisible} />
  </View>
  );
}
export default App;
