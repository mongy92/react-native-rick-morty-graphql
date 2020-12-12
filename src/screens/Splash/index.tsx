import { useNavigation } from '@react-navigation/native';
import React, { useEffect } from 'react';
import { ImageBackground } from 'react-native';
import { IMAGES, STYLES } from '../../common';

const Splash = () => {
  const navigation = useNavigation();

  useEffect(() => {
    setTimeout(() => {
      navigation.reset({ routes: [{ name: 'CharacterList' }] });
    }, 2000);
  }, []);
  return <ImageBackground style={STYLES.container} source={IMAGES.splash} />;
};

export default Splash;
