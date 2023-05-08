import React from 'react';
import { StyleSheet, View, Text,Image,ScrollView,Pressable,Linking } from 'react-native';
import Swiper from 'react-native-swiper';

const Screen1 = () => {
  return (
    <View style={styles.screen}>

<Swiper>
<View style={{width:370,height:700}}>
<Image style={{width:"100%",height:"100%",marginTop:-30}}  source={require("../images/1.png")}/>
<Pressable onPress={()=>alert("سرشونه")} style={{width:100,height:50,backgroundColor:"lightgreen",position:"absolute",top:100,left:25,borderRadius:25}}><View style={{flex:1,justifyContent:"center",alignItems:"center"}}><Text style={{fontSize:20}}>سرشونه</Text></View></Pressable>
<Pressable onPress={()=>alert("کول")} style={{width:100,height:50,backgroundColor:"lightgreen",position:"absolute",top:100,right:35,borderRadius:25}}><View style={{flex:1,justifyContent:"center",alignItems:"center"}}><Text style={{fontSize:20}}>کول</Text></View></Pressable>
<Pressable onPress={()=>alert("بازو")} style={{width:100,height:50,backgroundColor:"lightgreen",position:"absolute",top:160,left:10,borderRadius:25}}><View style={{flex:1,justifyContent:"center",alignItems:"center"}}><Text style={{fontSize:20}}>جلو بازو</Text></View></Pressable>
<Pressable onPress={()=>alert("سینه")} style={{width:100,height:50,backgroundColor:"lightgreen",position:"absolute",top:160,right:15,borderRadius:25}}><View style={{flex:1,justifyContent:"center",alignItems:"center"}}><Text style={{fontSize:20}}>سینه</Text></View></Pressable>     
<Pressable onPress={()=>alert("ساعد")} style={{width:100,height:50,backgroundColor:"lightgreen",position:"absolute",top:385,left:15,borderRadius:25}}><View style={{flex:1,justifyContent:"center",alignItems:"center"}}><Text style={{fontSize:20}}>ساعد</Text></View></Pressable>
<Pressable onPress={()=>alert("پهلو")} style={{width:100,height:50,backgroundColor:"lightgreen",position:"absolute",top:385,right:15,borderRadius:25}}><View style={{flex:1,justifyContent:"center",alignItems:"center"}}><Text style={{fontSize:20}}>پهلو</Text></View></Pressable>
<Pressable onPress={()=>alert("شکم")} style={{width:100,height:50,backgroundColor:"lightgreen",position:"absolute",top:452,left:15,borderRadius:25}}><View style={{flex:1,justifyContent:"center",alignItems:"center"}}><Text style={{fontSize:20}}>شکم</Text></View></Pressable>
<Pressable onPress={()=>alert("جلو ران")} style={{width:100,height:50,backgroundColor:"lightgreen",position:"absolute",top:452,right:15,borderRadius:25}}><View style={{flex:1,justifyContent:"center",alignItems:"center"}}><Text style={{fontSize:20}}>جلو ران</Text></View></Pressable>
<Pressable onPress={()=>alert("دوسر")} style={{width:100,height:50,backgroundColor:"lightgreen",position:"absolute",top:515,left:15,borderRadius:25}}><View style={{flex:1,justifyContent:"center",alignItems:"center"}}><Text style={{fontSize:20}}>دوسر پا</Text></View></Pressable>
</View>
<View style={{width:370,height:700}}>
<Image style={{width:"100%",height:"100%",marginTop:-30}}  source={require("../images/2.png")}/>
<Pressable onPress={()=>alert("سرشونه")} style={{width:100,height:50,backgroundColor:"lightgreen",position:"absolute",top:100,left:25,borderRadius:25}}><View style={{flex:1,justifyContent:"center",alignItems:"center"}}><Text style={{fontSize:20}}>سرشونه</Text></View></Pressable>
<Pressable onPress={()=>alert("کول")} style={{width:100,height:50,backgroundColor:"lightgreen",position:"absolute",top:100,right:35,borderRadius:25}}><View style={{flex:1,justifyContent:"center",alignItems:"center"}}><Text style={{fontSize:20}}>کول</Text></View></Pressable>
<Pressable onPress={()=>alert("پشت بازو")} style={{width:100,height:50,backgroundColor:"lightgreen",position:"absolute",top:160,left:10,borderRadius:25}}><View style={{flex:1,justifyContent:"center",alignItems:"center"}}><Text style={{fontSize:20}}>پشت بازو</Text></View></Pressable>
<Pressable onPress={()=>alert("سینه")} style={{width:100,height:50,backgroundColor:"lightgreen",position:"absolute",top:160,right:15,borderRadius:25}}><View style={{flex:1,justifyContent:"center",alignItems:"center"}}><Text style={{fontSize:20}}>سینه</Text></View></Pressable>     
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

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  
  },
});

export default Screen1;
