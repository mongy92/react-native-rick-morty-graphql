import React from 'react';
import { Text, TouchableOpacity, Image } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { Character } from '../../apollo/Types';
import { ACTIVE_OPCITY, COLORS } from '../../common';
import styles from './styles';

interface CharacterCardProps {
  character: Character;
  onPress: () => void;
}

const CharacterCard: React.FC<CharacterCardProps> = ({
  character,
  onPress,
}: CharacterCardProps) => {
  return (
    <TouchableOpacity
      testID="CharacterCard"
      style={styles.card}
      activeOpacity={ACTIVE_OPCITY}
      onPress={onPress}>
      <Image source={{ uri: character.image }} style={styles.image} />
      <Text style={styles.name} numberOfLines={2}>
        {character.name}
      </Text>
      <Icon name="chevron-right" size={25} style={styles.icon} color={COLORS.gray} />
    </TouchableOpacity>
  );
};

export { CharacterCard };
