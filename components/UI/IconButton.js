import {StyleSheet, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const IconButton = ({icon, size, color, onPress}) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.button}>
      <Icon name={icon} size={size} color={color} />
    </TouchableOpacity>
  );
};

export default IconButton;

const styles = StyleSheet.create({
  button: {
    padding: 8,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
