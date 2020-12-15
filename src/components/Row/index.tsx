import React from 'react';
import { View, Text } from 'react-native';
import styles from './styles';

interface RowProps {
  title: string;
  value: string;
}

const Row: React.FC<RowProps> = ({ title, value }: RowProps) => {
  return (
    <View style={styles.row}>
      <Text style={styles.titleStyle}>{title}</Text>
      <Text style={styles.valueStyle} numberOfLines={2}>
        {value}
      </Text>
    </View>
  );
};

export { Row };
