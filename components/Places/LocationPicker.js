import Geolocation from 'react-native-geolocation-service';
import {View, StyleSheet, Platform, PermissionsAndroid} from 'react-native';
import {Colors} from '../../constants/colors';
import OutlinedButton from '../UI/OutlinedButton';

const LocationPicker = () => {
  async function getPermission() {
    let granted = false;
    if (Platform.OS === 'ios') {
      const auth = await Geolocation.requestAuthorization('whenInUse');
      if (auth === 'granted') {
        granted = true;
      }
    }
    if (Platform.OS === 'android') {
      const auth = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
      );
      if (auth === PermissionsAndroid.RESULTS.GRANTED) {
        granted = true;
      }
    }
    return granted;
  }

  async function getLocationHandler() {
    const permission = await getPermission();
    if (permission) {
      Geolocation.getCurrentPosition(
        position => {
          console.log(position);
        },
        error => {
          console.log(error.code, error.message);
        },
        {enableHighAccuracy: true, timeout: 15000, maximumAge: 10000},
      );
    }
  }

  function pickOnMapHandler() {}

  return (
    <View>
      <View style={styles.mapPreview}></View>
      <View style={styles.actions}>
        <OutlinedButton icon="location" onPress={getLocationHandler}>
          Locate User
        </OutlinedButton>
        <OutlinedButton icon="map" onPress={pickOnMapHandler}>
          Pick on map
        </OutlinedButton>
      </View>
    </View>
  );
};

export default LocationPicker;

const styles = StyleSheet.create({
  mapPreview: {
    width: '100%',
    height: 200,
    marginVertical: 8,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.primary100,
    borderRadius: 4,
  },
  actions: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
});
