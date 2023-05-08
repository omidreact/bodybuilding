import React from 'react';
import {StyleSheet, View, Text, ScrollView, Image} from 'react-native';
import Video from 'react-native-video';

const Screen17 = () => {
  return (
    <View style={styles.screen}>
      <View style={{width: '95%', height: '95%', top: 10}}>
        <ScrollView style={{width: '98%'}}>
          <View
            style={{
              backgroundColor: '#eeeeee',
              justifyContent: 'center',
              alignItems: 'center',
              borderRadius: 20,
            }}>
            <View style={{width: 15, height: 15}}></View>
            <Text style={{fontSize: 18, fontWeight: 'bold'}}>
              شانه بالا انداختن دمبل نشسته
            </Text>
            <Text style={{fontSize: 16, fontWeight: 'bold'}}>
              درجه سختی: مبتدی
            </Text>
            <Video
              source={require('../videos/cool/2.mp4')}
              style={{width: 330, height: 250, borderRadius: 200}}
              repeat={true}
              muted={false}
              resizeMode="contain"
            />
            <Text style={{fontWeight: 'bold'}}>
              1-روی یک نیمکت بنشینید و دمبل در هر دو دست خود داشته باشید، کف
              دست‌ها به سمت بدن‌تان باشد، پشت صاف باشد.
            </Text>
            <Text style={{fontWeight: 'bold'}}>
              2-شانه های خود را بالا بیاورید و وضعیت منقبض را در اوج حرکت نگه
              دارید.
            </Text>
            <Text style={{fontWeight: 'bold'}}>
              3-به آرامی شانه های خود را به حالت اولیه برگردانید.
            </Text>
            <View style={{width: 15, height: 15}}></View>
          </View>

          <View style={{width: 15, height: 15}}></View>

          <View
            style={{
              backgroundColor: '#eeeeee',
              justifyContent: 'center',
              alignItems: 'center',
              borderRadius: 20,
            }}>
            <View style={{width: 15, height: 15}}></View>
            <Text style={{fontSize: 18, fontWeight: 'bold'}}>
              شانه بالا انداختن دمبل نشسته
            </Text>
            <Text style={{fontSize: 16, fontWeight: 'bold'}}>
              درجه سختی: مبتدی
            </Text>
            <Video
              source={require('../videos/cool/3.mp4')}
              style={{width: 330, height: 250, borderRadius: 200}}
              repeat={true}
              muted={false}
              resizeMode="contain"
            />
            <Text style={{fontWeight: 'bold'}}>
              1-روی یک نیمکت بنشینید و دمبل در هر دو دست خود داشته باشید، کف
              دست‌ها به سمت بدن‌تان باشد، پشت صاف باشد.
            </Text>
            <Text style={{fontWeight: 'bold'}}>
              2-شانه های خود را بالا بیاورید و وضعیت منقبض را در اوج حرکت نگه
              دارید.
            </Text>
            <Text style={{fontWeight: 'bold'}}>
              3-به آرامی شانه های خود را به حالت اولیه برگردانید.
            </Text>
            <View style={{width: 15, height: 15}}></View>
          </View>
          <View style={{width: 15, height: 15}}></View>

          <View
            style={{
              backgroundColor: '#eeeeee',
              justifyContent: 'center',
              alignItems: 'center',
              borderRadius: 20,
            }}>
            <View style={{width: 15, height: 15}}></View>
            <Text style={{fontSize: 18, fontWeight: 'bold'}}>
              شانه بالا انداختن دمبل نشسته
            </Text>
            <Text style={{fontSize: 16, fontWeight: 'bold'}}>
              درجه سختی: مبتدی
            </Text>

            <Video
              source={require('../videos/cool/1.mp4')}
              style={{width: 330, height: 250, borderRadius: 200}}
              repeat={true}
              muted={false}
              resizeMode="contain"
            />

            <Text style={{fontWeight: 'bold'}}>
              1-روی یک نیمکت بنشینید و دمبل در هر دو دست خود داشته باشید، کف
              دست‌ها به سمت بدن‌تان باشد، پشت صاف باشد.
            </Text>
            <Text style={{fontWeight: 'bold'}}>
              2-شانه های خود را بالا بیاورید و وضعیت منقبض را در اوج حرکت نگه
              دارید.
            </Text>
            <Text style={{fontWeight: 'bold'}}>
              3-به آرامی شانه های خود را به حالت اولیه برگردانید.
            </Text>
            <View style={{width: 15, height: 15}}></View>
          </View>
        </ScrollView>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: 'white',
  },
});

export default Screen17;
