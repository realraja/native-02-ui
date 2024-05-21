import { View } from 'react-native'
import React from 'react'
import { Appbar, Avatar, Button } from 'react-native-paper'
import SafeAreaViewApp from '../Components/SafeAreaViewApp'

const Main = ({navigation}) => {
  return (
    <View>
        <Appbar style={{backgroundColor:'rgba(108,21,222,1)'}}>
            <Appbar.Action color='white' icon={'heart'} onPress={()=> console.log('heart pressed')} />
            <Appbar.Content color='white' title='App Ui' />
            <Appbar.Action color='white' icon={'account-circle-outline'} onPress={()=> navigation.navigate('Register')} />
            <Appbar.Action color='white' icon={'camera'} onPress={()=> console.log('camara pressed')} />
        </Appbar>
        <Avatar.Image source={{uri:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLjisGy4eY5ZkfsZAmtRQ-4MstK4DapAPegcL52fG10g&s'}} size={160} style={{alignSelf:'center',margin:40}} />
        
      <Button color='black' style={{backgroundColor:'yellow',marginHorizontal:60}} onPress={()=> navigation.navigate('Register')}>
        Register
      </Button>
    </View>
  )
}
const Home = ({navigation}) => {
  return (
    <SafeAreaViewApp Component={Main} navigation={navigation} />
  )
}

export default Home