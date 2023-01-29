import {useState} from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import {launchImageLibrary} from 'react-native-image-picker';
import {Colors} from '../../constants/colors';
import OutlinedButton from '../UI/OutlinedButton';

const ImagePicker = () => {
  const [pickedImage, setPickedImage] = useState();

  async function takeImageHandler() {
    const image = await launchImageLibrary({
      quality: 0.5,
      storageOptions: {
        skipBackup: true,
        path: 'images',
      },
      mediaType: 'photo',
    }); //launchCamera
    setPickedImage(image?.assets[0]?.uri);
  }

  let imagePreview = <Text>no image taken yet!!</Text>;

  if (pickedImage) {
    imagePreview = <Image source={{uri: pickedImage}} style={styles.image} />;
  }

  return (
    <View>
      <View style={styles.imagePreview}>{imagePreview}</View>
      <OutlinedButton icon="camera" onPress={takeImageHandler}>
        Take Image
      </OutlinedButton>
    </View>
  );
};

export default ImagePicker;

const styles = StyleSheet.create({
  imagePreview: {
    width: '100%',
    height: 200,
    marginVertical: 8,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.primary100,
    borderRadius: 4,
  },
  image: {
    width: '100%',
    height: '100%',
  },
});
