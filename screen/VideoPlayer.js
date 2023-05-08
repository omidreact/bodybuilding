import React, { useRef } from 'react';
import { View, StyleSheet, Dimensions } from 'react-native';
import Video from 'react-native-video';

const { width, height } = Dimensions.get('window');

export default function VideoPlayer({ source }) {
  const playerRef = useRef(null);

  return (
    <View style={styles.container}>
      <Video
        ref={playerRef}
        source={source}
        style={styles.video}
        resizeMode="contain"
        controls={true}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  video: {
    width: width,
    height: height ,
  },
});
