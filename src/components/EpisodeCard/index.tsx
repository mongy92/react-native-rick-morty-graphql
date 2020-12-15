import React from 'react';
import { Text, View } from 'react-native';
import { Row } from '../Row';
import styles from './styles';
interface EpisodeCardProp {
  name: string;
  air_date: string;
  index: number;
}
const EpisodeCard: React.FC<EpisodeCardProp> = ({ name, air_date, index }: EpisodeCardProp) => {
  return (
    <View style={styles.card}>
      <Text style={styles.countText}>{index + 1} - </Text>
      <View style={styles.info}>
        <Row title="Name" value={name} />
        <Row title="Air Date" value={air_date} />
      </View>
    </View>
  );
};

export { EpisodeCard };
