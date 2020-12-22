import { useLazyQuery } from '@apollo/client';
import { useNavigation } from '@react-navigation/native';
import React, { useEffect, useRef, useState } from 'react';
import { ActivityIndicator, Platform, View, Text } from 'react-native';
import { FETCH_CHARACTERS } from '../../apollo/Queries';
import { Character, CharactersQueryType } from '../../apollo/Types';
import { ACTIVE_OPCITY, COLORS, STRINGS, STYLES } from '../../common';
import { CharacterCard, SearchBox } from '../../components';
import _ from 'lodash';
import styles from './styles';
import { errorHandler } from '../../utils';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { FlatList, TouchableOpacity } from 'react-native';

const CharacterList: React.FC = () => {
  const navigation = useNavigation();
  const flatlistRef = useRef<any>();

  const [loadingMore, setLoadingMore] = useState<boolean>(false);
  const [searchText, setSearchText] = useState<string>('');

  /** fetch characters query */
  const [getCharacters, { data, fetchMore, loading, error }] = useLazyQuery<CharactersQueryType>(
    FETCH_CHARACTERS,
    {
      variables: {
        page: 1,
      },
    },
  );

  // fetch character at the beginnig
  useEffect(() => {
    getCharacters();
  }, []);

  /** variables section */
  const queryData = data && data.characters;
  const showNoMoreMessage = queryData && !queryData.info.next && queryData.info.pages > 1;
  const characters = queryData ? queryData.results : null;
  const canLoadMore = queryData && queryData.info.next && !loadingMore;

  /** debounce search function used to call the query after 500ms  */
  const searchHander: (value: string) => void = _.debounce(async (value) => {
    getCharacters({
      variables: {
        filter: {
          name: value,
        },
      },
    });
  }, 500);

  const onPressCharacter = (character: Character) => {
    navigation.navigate('CharacterDetails', {
      id: character.id,
      name: character.name,
    });
  };

  /** function used to load more characters * */
  const loadMoreHandler = async () => {
    if (!canLoadMore || !fetchMore) {
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
  /** render footer (loading | no more message | nothing) */
  const renderFooter = () => {
    if (data && loadingMore) {
      return <ActivityIndicator style={styles.indicator} color={COLORS.koromike} />;
    } else if (showNoMoreMessage) {
      return (
        <View style={styles.noMoreContainer}>
          <Text style={styles.noMoreText}>{STRINGS.noMoreChars}</Text>
          <TouchableOpacity
            style={styles.upIcon}
            activeOpacity={ACTIVE_OPCITY}
            onPress={() => flatlistRef.current.scrollToIndex({ index: 0 })}>
            <Icon name={'arrow-up'} size={25} color={COLORS.white} />
          </TouchableOpacity>
        </View>
      );
    } else {
      return null;
    }
  };

  return (
    <>
      <SearchBox
        placeholder="Search"
        value={searchText}
        onChangeText={(text) => {
          setSearchText(text);
          searchHander(text);
        }}
      />

      {loading && (
        <ActivityIndicator color={COLORS.koromike} style={styles.indicator} size={'small'} />
      )}
      {error ? (
        <Text style={STYLES.errorText}>{errorHandler(error)}</Text>
      ) : (
        characters && (
          <FlatList
            ref={flatlistRef}
            data={characters}
            renderItem={({ item }) => (
              <CharacterCard character={item} onPress={() => onPressCharacter(item)} />
            )}
            // ItemSeparatorComponent={() => <View style={STYLES.separator} />}
            ListFooterComponent={renderFooter}
            contentContainerStyle={styles.list}
            keyExtractor={(item) => `${item.id}`}
            onEndReachedThreshold={Platform.OS == 'ios' ? 0 : 0.2}
            onEndReached={loadMoreHandler}
          />
        )
      )}
    </>
  );
};

export default CharacterList;
