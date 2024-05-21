import { StyleSheet, View } from 'react-native'
import React, { useState } from 'react'
import { Button, Checkbox, Headline, Text, TextInput } from 'react-native-paper'
import SafeAreaViewApp from '../Components/SafeAreaViewApp'

const Main = ({navigation}) => {
    const [checked, setChecked] = useState(false);
  return (
    <View>
        <Headline style={styles.headline}>Register</Headline>
        <TextInput placeholder='Full Name' style={styles.input} />
        <TextInput placeholder='Email' style={styles.input} />
        <TextInput placeholder='Password' secureTextEntry={true} style={styles.input} />
        <View style={{flexDirection:'row',alignSelf:'center',alignItems:'center',marginVertical:20}}>
        <Checkbox status={checked?"checked":"unchecked"} onPress={()=> setChecked((prev)=> !prev)} />
        <Text>Please Accept all term & Conditions</Text>
        </View>
      <Button disabled={checked? false :true}  style={{backgroundColor:'yellow',marginHorizontal:60}} onPress={()=> navigation.navigate('Home')}>
        Home
      </Button>
    </View>
  )
}
const Register = ({navigation}) => {
  return (
    <SafeAreaViewApp Component={Main} navigation={navigation} />
  )
}

export default Register



const styles = StyleSheet.create({
    headline:{
        textAlign: 'center',
        marginVertical: 20,
        color: 'rgba(108,21,222,1)',
        fontWeight: 'bold'
    },
    input:{
        backgroundColor: 'white',
        marginHorizontal:50,
        marginVertical:5,
    }
})