import React, {Component} from 'react';
import {StyleSheet, View} from 'react-native';
import MapboxGL from '@react-native-mapbox-gl/maps';

MapboxGL.setAccessToken('YOUR-ACCESS-TOKEN');

const styles = StyleSheet.create({
  page: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  container: {
    height: 300,
    width: 300,
    backgroundColor: 'tomato',
  },
  map: {
    flex: 1,
  },
});

export default class App extends Component {
  componentDidMount() {
    MapboxGL.setTelemetryEnabled(false);
  }

  render() {
    return (
      <View style={styles.page}>
        <View style={styles.container}>
          <MapboxGL.MapView style={styles.map}>
            <MapboxGL.VectorSource
              id="occurrence"
              tileUrlTemplates={[
                `https://api.gbif.org/v2/map/occurrence/density/{z}/{x}/{y}.mvt?taxonKey=8671098`,
              ]}>
              <MapboxGL.HeatmapLayer
                id="occurrence"
                sourceID="occurrence"
                sourceLayerID="occurrence"
                style={{
                  heatmapOpacity: 0.5,
                  heatmapRadius: [
                    'interpolate',
                    ['linear'],
                    ['zoom'],
                    0,
                    2,
                    9,
                    20,
                  ],
                }}
              />
            </MapboxGL.VectorSource>
          </MapboxGL.MapView>
        </View>
      </View>
    );
  }
}
