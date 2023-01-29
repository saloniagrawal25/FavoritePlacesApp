import {View, StyleSheet, TouchableOpacity} from 'react-native';

const PlaceItem = ({place, onPress}) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <Image source={{uri: place?.imageUri}} />
      <View>
        <Text>{place?.title}</Text>
        <Text>{place?.address}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default PlaceItem;

const styles = StyleSheet.create({});
