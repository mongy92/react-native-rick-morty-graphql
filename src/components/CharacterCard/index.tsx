import React from 'react';
import { Text, TouchableOpacity, Image } from 'react-native';
import { Character } from '../../apollo/Types';
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
    <TouchableOpacity style={styles.card} activeOpacity={0.8} onPress={onPress}>
      <Image source={{ uri: character.image }} style={styles.image} />
      <Text style={styles.name}>{character.name}</Text>
    </TouchableOpacity>
  );
};

export { CharacterCard };
