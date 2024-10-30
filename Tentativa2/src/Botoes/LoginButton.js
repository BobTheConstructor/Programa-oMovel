import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { TouchableOpacity, Alert } from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';



const ClickableIcon = () => {
    const navigation = useNavigation();
  const handlePress = () => {
    navigation.navigate('Login'); 
  };

  return (
    <TouchableOpacity onPress={handlePress} style={{marginRight: 15}}>
      <MaterialIcons name='account-circle' color='black' size={37} />
    </TouchableOpacity>
  );
};

export default ClickableIcon;