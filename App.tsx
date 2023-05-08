import React, { useState } from 'react';
import { StyleSheet, View, Text, TouchableOpacity ,Linking,Image,Pressable} from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import Swiper from 'react-native-swiper';

import Screen2 from './screens/Screen2';
import Screen3 from './screens/Screen3';
import Screen4 from './screens/Screen4';
import Screen5 from './screens/Screen5';
import Screen6 from './screens/Screen6';
import Screen7 from './screens/Screen7';
import Screen8 from './screens/Screen8';
import Screen9 from './screens/Screen9';
import Screen10 from './screens/Screen10';
import Screen11 from './screens/Screen11';
import Screen12 from './screens/Screen12';
import Screen13 from './screens/Screen13';
import Screen14 from './screens/Screen14';
import Screen15 from './screens/Screen15';
import Screen16 from './screens/Screen16';
import Screen17 from './screens/Screen17';
import Screen18 from './screens/Screen18';
import Screen19 from './screens/Screen19';

const Drawer = createDrawerNavigator();


const Screen1 = ({ navigation }) => {
  return (
    <View style={{    flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: 'white',}}>

<Swiper>
<View style={{width:370,height:700}}>
<Image style={{width:"100%",height:"100%",marginTop:-30}}  source={require("./images/1.png")}/>
<Pressable onPress={() => navigation.navigate('سرشونه')} style={{width:100,height:50,backgroundColor:"lightgreen",position:"absolute",top:100,left:25,borderRadius:25}}><View style={{flex:1,justifyContent:"center",alignItems:"center"}}><Text style={{fontSize:20}}>سرشونه</Text></View></Pressable>
<Pressable onPress={() => navigation.navigate('کول')} style={{width:100,height:50,backgroundColor:"lightgreen",position:"absolute",top:100,right:35,borderRadius:25}}><View style={{flex:1,justifyContent:"center",alignItems:"center"}}><Text style={{fontSize:20}}>کول</Text></View></Pressable>
<Pressable onPress={() => navigation.navigate('جلوبازو')} style={{width:100,height:50,backgroundColor:"lightgreen",position:"absolute",top:160,left:10,borderRadius:25}}><View style={{flex:1,justifyContent:"center",alignItems:"center"}}><Text style={{fontSize:20}}>جلو بازو</Text></View></Pressable>
<Pressable onPress={() => navigation.navigate('ساعد')} style={{width:100,height:50,backgroundColor:"lightgreen",position:"absolute",top:160,right:15,borderRadius:25}}><View style={{flex:1,justifyContent:"center",alignItems:"center"}}><Text style={{fontSize:20}}>سینه</Text></View></Pressable>     
<Pressable onPress={() => navigation.navigate('سینه')} style={{width:100,height:50,backgroundColor:"lightgreen",position:"absolute",top:385,left:15,borderRadius:25}}><View style={{flex:1,justifyContent:"center",alignItems:"center"}}><Text style={{fontSize:20}}>ساعد</Text></View></Pressable>
<Pressable onPress={() => navigation.navigate('زیربغل')} style={{width:100,height:50,backgroundColor:"lightgreen",position:"absolute",top:385,right:15,borderRadius:25}}><View style={{flex:1,justifyContent:"center",alignItems:"center"}}><Text style={{fontSize:20}}>زیربغل</Text></View></Pressable>
<Pressable onPress={()=> navigation.navigate('شکم')} style={{width:100,height:50,backgroundColor:"lightgreen",position:"absolute",top:452,left:15,borderRadius:25}}><View style={{flex:1,justifyContent:"center",alignItems:"center"}}><Text style={{fontSize:20}}>شکم</Text></View></Pressable>
<Pressable onPress={()=> navigation.navigate('جلو ران')} style={{width:100,height:50,backgroundColor:"lightgreen",position:"absolute",top:452,right:15,borderRadius:25}}><View style={{flex:1,justifyContent:"center",alignItems:"center"}}><Text style={{fontSize:20}}>جلو ران</Text></View></Pressable>
<Pressable onPress={()=> navigation.navigate('عضله دوسر')} style={{width:100,height:50,backgroundColor:"lightgreen",position:"absolute",top:515,left:15,borderRadius:25}}><View style={{flex:1,justifyContent:"center",alignItems:"center"}}><Text style={{fontSize:20}}>دوسر پا</Text></View></Pressable>
</View>
<View style={{width:370,height:700}}>
<Image style={{width:"100%",height:"100%",marginTop:-30}}  source={require("./images/2.png")}/>
<Pressable onPress={()=>alert("سرشونه")} style={{width:100,height:50,backgroundColor:"lightgreen",position:"absolute",top:100,left:25,borderRadius:25}}><View style={{flex:1,justifyContent:"center",alignItems:"center"}}><Text style={{fontSize:20}}>سرشونه</Text></View></Pressable>
<Pressable onPress={()=>alert("کول")} style={{width:100,height:50,backgroundColor:"lightgreen",position:"absolute",top:100,right:35,borderRadius:25}}><View style={{flex:1,justifyContent:"center",alignItems:"center"}}><Text style={{fontSize:20}}>کول</Text></View></Pressable>
<Pressable onPress={()=>alert("پشت بازو")} style={{width:100,height:50,backgroundColor:"lightgreen",position:"absolute",top:160,left:10,borderRadius:25}}><View style={{flex:1,justifyContent:"center",alignItems:"center"}}><Text style={{fontSize:20}}>پشت بازو</Text></View></Pressable>
<Pressable onPress={()=>alert("بین دوکتف")} style={{width:100,height:50,backgroundColor:"lightgreen",position:"absolute",top:160,right:15,borderRadius:25}}><View style={{flex:1,justifyContent:"center",alignItems:"center"}}><Text style={{fontSize:20}}>بین دوکتف</Text></View></Pressable>     
<Pressable onPress={()=>alert("ساعد")} style={{width:100,height:50,backgroundColor:"lightgreen",position:"absolute",top:385,left:15,borderRadius:25}}><View style={{flex:1,justifyContent:"center",alignItems:"center"}}><Text style={{fontSize:20}}>ساعد</Text></View></Pressable>
<Pressable onPress={()=>alert("پهلو")} style={{width:100,height:50,backgroundColor:"lightgreen",position:"absolute",top:385,right:15,borderRadius:25}}><View style={{flex:1,justifyContent:"center",alignItems:"center"}}><Text style={{fontSize:20}}>پهلو</Text></View></Pressable>
<Pressable onPress={()=>alert("شکم")} style={{width:100,height:50,backgroundColor:"lightgreen",position:"absolute",top:452,left:15,borderRadius:25}}><View style={{flex:1,justifyContent:"center",alignItems:"center"}}><Text style={{fontSize:20}}>شکم</Text></View></Pressable>
<Pressable onPress={()=>alert("پشت ران")} style={{width:100,height:50,backgroundColor:"lightgreen",position:"absolute",top:452,right:15,borderRadius:25}}><View style={{flex:1,justifyContent:"center",alignItems:"center"}}><Text style={{fontSize:20}}>پشت ران</Text></View></Pressable>
<Pressable onPress={()=>alert("باسن")} style={{width:100,height:50,backgroundColor:"lightgreen",position:"absolute",top:515,right:15,borderRadius:25}}><View style={{flex:1,justifyContent:"center",alignItems:"center"}}><Text style={{fontSize:20}}>باسن</Text></View></Pressable>
<Pressable onPress={()=>alert("دوسر")} style={{width:100,height:50,backgroundColor:"lightgreen",position:"absolute",top:515,left:15,borderRadius:25}}><View style={{flex:1,justifyContent:"center",alignItems:"center"}}><Text style={{fontSize:20}}>دوسر پا</Text></View></Pressable>
</View>


</Swiper>     
<Text style={{color:"#bdc3c2",marginBottom:30}} onPress={()=>Linking.openURL("http://oreact.ir/")}>Design by oreact</Text>
    </View>
  );
};



const DrawerButton = ({ title, onPress }) => {
  return (
    <TouchableOpacity style={styles.drawerButton} onPress={onPress}>
      <Text style={styles.drawerButtonText}>{title}</Text>
    </TouchableOpacity>
  );
};

const App = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Screen1">
        <Drawer.Screen name="صفحه نخست" component={Screen1} />
        <Drawer.Screen name="کول" component={Screen2} />
        <Drawer.Screen name="سرشونه" component={Screen3} />
        <Drawer.Screen name="جلوبازو" component={Screen4} />
        <Drawer.Screen name="ساعد" component={Screen5} />
        <Drawer.Screen name="سینه" component={Screen6} />
        <Drawer.Screen name="زیربغل" component={Screen7} />
        <Drawer.Screen name="شکم" component={Screen8} />
        <Drawer.Screen name="جلو ران" component={Screen9} />
        <Drawer.Screen name="عضله دوسر" component={Screen10} />
        <Drawer.Screen name="پشت کول" component={Screen11} />
        <Drawer.Screen name="پشت سرشونه" component={Screen12} />
        <Drawer.Screen name="پشت بازو" component={Screen13} />
        <Drawer.Screen name="پشت ساعد" component={Screen14} />
        <Drawer.Screen name="بین دوکتف" component={Screen15} />
        <Drawer.Screen name="پهلو" component={Screen16} />
        <Drawer.Screen name="باسن" component={Screen17} />
        <Drawer.Screen name="پشت ران" component={Screen18} />
        <Drawer.Screen name="دوسرپا" component={Screen19} />
      </Drawer.Navigator>
      {drawerOpen && (
        <View style={styles.drawer}>
          <DrawerButton title="Screen 1" onPress={() => setDrawerOpen(false)} />
          <DrawerButton title="Screen 2" onPress={() => setDrawerOpen(false)} />
          <DrawerButton title="Screen 3" onPress={() => setDrawerOpen(false)} />
          <DrawerButton title="Screen 4" onPress={() => setDrawerOpen(false)} />
          <DrawerButton title="Screen 5" onPress={() => setDrawerOpen(false)} />
          <DrawerButton title="Screen 6" onPress={() => setDrawerOpen(false)} />
          <DrawerButton title="Screen 7" onPress={() => setDrawerOpen(false)} />
          <DrawerButton title="Screen 8" onPress={() => setDrawerOpen(false)} />
          <DrawerButton title="Screen 9" onPress={() => setDrawerOpen(false)} />
          <DrawerButton title="Screen 10" onPress={() => setDrawerOpen(false)} />
          <DrawerButton title="Screen 11" onPress={() => setDrawerOpen(false)} />
          <DrawerButton title="Screen 12" onPress={() => setDrawerOpen(false)} />
          <DrawerButton title="Screen 13" onPress={() => setDrawerOpen(false)} />
          <DrawerButton title="Screen 14" onPress={() => setDrawerOpen(false)} />
          <DrawerButton title="Screen 15" onPress={() => setDrawerOpen(false)} />
          <DrawerButton title="Screen 16" onPress={() => setDrawerOpen(false)} />
          <DrawerButton title="Screen 17" onPress={() => setDrawerOpen(false)} />
          <DrawerButton title="Screen 18" onPress={() => setDrawerOpen(false)} />
          <DrawerButton title="Screen 19" onPress={() => setDrawerOpen(false)} />
        </View>
      )}
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  drawer: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    width: '80%',
    backgroundColor: '#fff',
    padding: 20,
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
  },
  drawerButton: {
    paddingVertical: 10,
    paddingHorizontal: 15,
  },
  drawerButtonText: {
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default App;
