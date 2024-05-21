import { Text, View } from 'react-native'
import React from 'react'
import { Appbar, Avatar, Button, Headline } from 'react-native-paper'
import SafeAreaViewApp from '../Components/SafeAreaViewApp'
import userData from '../assets/userData.json';

const Main = ({navigation}) => {
  return (
    <View>
        <Appbar style={{backgroundColor:'rgba(108,21,222,1)'}}>
            <Appbar.Action color='white' icon={'heart'} onPress={()=> console.log('heart pressed')} />
            <Appbar.Content color='white' title='App Ui' />
            <Appbar.Action color='white' icon={'account-circle-outline'} onPress={()=> navigation.navigate('Register')} />
            <Appbar.Action color='white' icon={'camera'} onPress={()=> navigation.navigate('Camera')} />
        </Appbar>
        <Avatar.Image source={{uri:userData['users'].imageUrl}} size={160} style={{alignSelf:'center',margin:40}} />

<View style={{alignItems:'center',gap:10}}>

        <Text style={{fontSize:30}}>Name = {userData.users.name}</Text>
        <Text  style={{fontSize:25}}>Email = {userData.users.email}</Text>
        <Text style={{fontSize:25}}>Password = {userData.users.password}</Text>

</View>
        
    <Headline style={{textAlign:'center',marginVertical:10}}>About Me</Headline>
    <Text style={{textAlign:'center',width:'80%',alignSelf:'center',color:'gray'}}>Hello,My name is rajesh kumar and i am learnig web development and also app development on react native , so i am very confident.</Text>
    </View>
  )
}
const Home = ({navigation}) => {
  return (
    <SafeAreaViewApp Component={Main} navigation={navigation} />
  )
}

export default Home