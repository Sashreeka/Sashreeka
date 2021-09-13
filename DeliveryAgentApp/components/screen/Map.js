import * as React from 'react';
import MapView, { Callout, Circle, Marker } from 'react-native-maps';
import { StyleSheet, Text, View, Dimensions } from 'react-native';

export default function Map() {
  return (
    <View style={styles.container}>
      <MapView style={styles.map} 

    initialRegion={{
      latitude: 6.893189327190345,
      longitude: 79.917411061118,
      latitudeDelta: 0.0922,
      longitudeDelta: 0.0421,
    }}
   
      >
          <Marker
              coordinate={{
                    latitude:6.893189327190345,
                  longitude:79.917411061118
                 }}
                 pinColor='black'
          >
          <Callout>
              <Text>Saman's Home</Text>
          </Callout>
          <Circle center={{
           latitude:6.893189327190345,
                  longitude:79.917411061118
          }}
              radius={1000}
          />

          </Marker>
      </MapView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  map: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
  },
});