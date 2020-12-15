import React from 'react';
import { View, TextInput, ViewStyle, TextInputProps } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { COLORS } from '../../common';
import styles from './styles';

interface SearchBoxType {
  containerStyle?: ViewStyle;
}

export type SearchBoxProps = SearchBoxType & TextInputProps;

let SearchBox: React.FC<SearchBoxProps> = ({ containerStyle, ...rest }: SearchBoxProps) => {
  return (
    <View style={[styles.search, containerStyle]}>
      <View style={styles.leftIconPlacholder}>
        <TextInput
          testID="SearchBox"
          maxLength={20}
          autoCapitalize={'none'}
          autoCorrect={false}
          style={styles.textInput}
          {...rest}
        />
        <Icon name={'magnify'} size={25} style={styles.searchIcon} color={COLORS.gray} />
      </View>
    </View>
  );
};
SearchBox = React.memo(SearchBox);
export { SearchBox };
