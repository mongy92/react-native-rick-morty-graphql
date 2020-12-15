import React from 'react';
import { View } from 'react-native';
import { Episode } from '../../apollo/Types';
import { Row } from '../Row';
import styles from './styles';
interface EposideCardProps {
  episode: Episode;
}

const EpisodeCard: React.FC<EposideCardProps> = ({ episode }: EposideCardProps) => {
  return (
    <View style={styles.card}>
      <Row title="Name" value={episode.name} />
      <Row title="Air Date" value={episode.air_date} />
    </View>
  );
};

export { EpisodeCard };
