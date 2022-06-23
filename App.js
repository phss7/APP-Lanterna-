import React, {useState, useEffect} from "react";
import {View, StyleSheet, Image, TouchableOpacity} from 'react-native';
import Torch from "react-native-torch";
import RNShake from 'react-native-shake';

const App = () => {
  const [toggle, setToggle] = useState(false);  
  const handleChangeToggle = () => setToggle(oldToggle => !oldToggle);

  useEffect(() =>{
     Torch.switchState(toggle);
  }, [toggle]);

  useEffect(() => {
    const subscript = RNShake.addListener(() =>{
      handleChangeToggle();
      setToggle(oldToggle => !oldToggle);
    });
    return () => subscript.remove();
  }, []);

  return(
     <View style={toggle ? style.containerlight : style.container}>
      <TouchableOpacity onPress={handleChangeToggle}>

        <Image style={toggle ? style.lighton : style.lightoff} 
        source={
          toggle
          ?require('./assets/eco-light.png')
          :require('./assets/eco-light-off.png')} />

        <Image style={style.dioLogo} 
          source={
            toggle
            ?require('./assets/logo-dio.png')
            :require('./assets/logo-dio-white.png')} />
            </TouchableOpacity>
    </View>
  );
}; 

export default App;

const style = StyleSheet.create({
  
  container: {flex: 1,
  backgroundColor: 'black',
  alignItems: 'center',
  justifyContent: 'center',
},

containerlight: {flex: 1,
  backgroundColor: 'white',
  alignItems: 'center',
  justifyContent: 'center',
},
lighton:{
  resizeMode: 'contain',
  alignSelf: 'center',
  height: 150,
  width: 150,
},
lightoff:{
  resizeMode: 'contain',
  alignSelf: 'center',
  tintColor: 'white',
  height: 150,
  width: 150,
},
dioLogo: {
  resizeMode: 'contain',
  alignSelf: 'center',
  height: 250,
  width: 250,
}
})