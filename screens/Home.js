import {useState} from 'react';
import {View, SafeAreaView, FlatList, Text, Image} from 'react-native';

import { COLORS, NFTData } from '../constants';
import { NFTCard, HomeHeader, FocusedStatusBar } from '../components';


const Home = () => {
  return (
    <SafeAreaView style={{flex:1}}>

      <FocusedStatusBar backgroundColor={COLORS.primary} />

      <View style={{flex:1}}>
        <View style={{zIndex:0}}>
          <FlatList 
            ListHeaderComponent={<HomeHeader />} //AQUI ME PERMITE PONER COMO HEADER UN COMPONENTE, SIN IMPORTAR EL ORDEN
            data={NFTData} 
            renderItem={({ item }) => <NFTCard data={item} />}
            keyExtractor={(item) => item.id}
            showsVerticalScrollIndicator = {false}/>
        </View>
        <View 
          style={{
            position:"absolute",
            top:0,
            bottom:0,
            right:0, 
            left:0,
            zIndex:-1,
          }}>
        <View style={{height:300,backgroundColor:COLORS.primary}}/>
        <View style={{flex:1, backgroundColor:COLORS.white}}/>
        </View>
      </View>
      
    </SafeAreaView>
  )
}

export default Home