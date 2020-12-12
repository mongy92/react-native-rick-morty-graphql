import { useQuery } from '@apollo/client';
import { useNavigation } from '@react-navigation/native';
import React, { useRef, useState } from 'react';
import { ActivityIndicator, Text, View } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import { FETCH_CHARACTERS } from '../../apollo/Queries';
import { Character, CharactersQueryType } from '../../apollo/Types';
import { STYLES } from '../../common';
import { CharacterCard } from '../../components';
import styles from './styles';

const CharacterList: React.FC = () => {
  const navigation = useNavigation();
  const flatlistRef = useRef<any>();

  const [loadingMore, setLoadingMore] = useState<boolean>(false);

  /** fetch characters query */
  const { loading, data, error, fetchMore } = useQuery<CharactersQueryType>(FETCH_CHARACTERS, {
    variables: {
      page: 1,
    },
  });

  const onPressCharacter = (character: Character) => {
    navigation.navigate('CharacterDetails', {
      id: character.id,
      name: character.name,
    });
  };

  /**
   * function used to load more characters .
   * it depends on the next page and loadingMore state
   * */
  const loadMoreHandler = async () => {
    if (!data || !data.characters.info.next || loadingMore) {
      return null;
    } else {
      setLoadingMore(true);
      await fetchMore({
        variables: {
          page: data?.characters.info.next,
        },
      });
      setLoadingMore(false);
    }
  };

  if (error) {
    return <Text style={STYLES.errorText}>Something went wrong, Please try again later.!</Text>;
  }
  if (loading) {
    return <ActivityIndicator size={'large'} />;
  }

  const renderFooter = () => {
    if (data && loadingMore) {
      return <ActivityIndicator />;
    } else if (data && !data.characters.info.next) {
      return (
        <View style={styles.noMoreContainer}>
          <Text style={styles.noMoreText}>No More Characters...</Text>
          <Text
            style={styles.topText}
            onPress={() => flatlistRef.current.scrollToIndex({ index: 0 })}>
            Back To Top
          </Text>
        </View>
      );
    } else {
      return null;
    }
  };

  return (
    <FlatList
      ref={flatlistRef}
      data={data?.characters.results}
      renderItem={({ item }) => (
        <CharacterCard character={item} onPress={() => onPressCharacter(item)} />
      )}
      ItemSeparatorComponent={() => <View style={STYLES.separator} />}
      ListFooterComponent={renderFooter}
      contentContainerStyle={styles.list}
      keyExtractor={(item) => `${item.id}`}
      onEndReachedThreshold={0}
      onEndReached={loadMoreHandler}
    />
  );
};

export default CharacterList;
