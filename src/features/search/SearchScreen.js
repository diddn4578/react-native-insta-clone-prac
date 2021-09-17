import {useIsFocused} from '@react-navigation/core';
import React from 'react';
import {useState} from 'react';
import {
  View,
  Pressable,
  Text,
  SafeAreaView,
  TextInput,
  FlatList,
  Dimensions,
  AsyncStorage,
  Image,
  ScrollView,
} from 'react-native';
import {useEffect} from 'react/cjs/react.development';

const SearchScreen = ({navigation}) => {
  const isFocused = useIsFocused();
  const [tempFeedList, setTempFeedList] = useState([]);
  const [splitList, setSpliList] = useState([]);

  useEffect(async () => {
    if (isFocused) {
      let data = await AsyncStorage.getItem('feedData');
      data = JSON.parse(data);
      console.log(data);
      setTempFeedList(data);
    }
  }, [isFocused]);

  useEffect(() => {
    let splitVal = [];
    if (tempFeedList.length > 0) {
      for (let i = 0; i < tempFeedList.length; i += 3) {
        console.log(i, i + 2);
        splitVal.push(tempFeedList.slice(i, i + 3));
      }
      console.log(splitVal);
      setSpliList(splitVal);
    }
  }, [tempFeedList, setTempFeedList]);

  return (
    <View style={{flex: 1, backgroundColor: 'white'}}>
      <SafeAreaView />

      {/* <FlatList
        ListHeaderComponent={
          <>
            <View
              style={{
                flexDirection: 'row',
                paddingLeft: 20,
                paddingRight: 20,
                alignItems: 'center',
              }}>
              <View
                style={{
                  flexGrow: 1,
                  flexShrink: 1,
                  flexDirection: 'row',
                  padding: 6,
                  paddingLeft: 12,
                  paddingRight: 12,
                  backgroundColor: 'lightgray',
                  borderRadius: 3,
                  marginRight: 8,
                }}>
                <View
                  style={{
                    width: 24,
                    height: 24,
                    backgroundColor: 'gray',
                    marginRight: 8,
                  }}
                />
                <TextInput placeholder={'검색어를 입력해주세요.'} />
              </View>
              <View style={{width: 24, height: 24, backgroundColor: 'gray'}} />
            </View>
            <View style={{height: 10}} />
          </>
        }
        data={tempFeedList}
        showsVerticalScrollIndicator={false}
        numColumns={3}
        renderItem={({item, index}) => {
          return (
            <Pressable
              onPress={() => {
                console.log('글 상세로 들어가야됨');
              }}
              style={{margin: 1}}>
              <View
                style={{
                  width: Dimensions.get('screen').width / 3,
                  height: Dimensions.get('screen').width / 3,
                  // backgroundColor: 'skyblue',
                }}>
                <Image
                  style={{
                    width: Dimensions.get('screen').width / 3,
                    height: Dimensions.get('screen').width / 3,
                  }}
                  source={{
                    uri: item.images?.[0].url,
                  }}
                />
              </View>
            </Pressable>
          );
        }}
      /> */}
      <FlatList
        ListHeaderComponent={
          <>
            <View
              style={{
                flexDirection: 'row',
                paddingLeft: 20,
                paddingRight: 20,
                alignItems: 'center',
              }}>
              <View
                style={{
                  flexGrow: 1,
                  flexShrink: 1,
                  flexDirection: 'row',
                  padding: 6,
                  paddingLeft: 12,
                  paddingRight: 12,
                  backgroundColor: 'lightgray',
                  borderRadius: 3,
                  marginRight: 8,
                }}>
                <View
                  style={{
                    width: 24,
                    height: 24,
                    backgroundColor: 'gray',
                    marginRight: 8,
                  }}
                />
                <TextInput placeholder={'검색어를 입력해주세요.'} />
              </View>
              <View style={{width: 24, height: 24, backgroundColor: 'gray'}} />
            </View>
            <View style={{height: 10}} />
          </>
        }
        data={splitList}
        showsVerticalScrollIndicator={false}
        renderItem={({item, index}) => {
          if (index == 0) {
            return (
              <View style={{flexDirection: 'row'}}>
                <View>
                  <Pressable
                    onPress={() => {
                      console.log('글 상세로 들어가야됨');
                    }}
                    style={{margin: 1}}>
                    <View
                      style={{
                        width: Dimensions.get('screen').width / 3 - 2,
                        height: Dimensions.get('screen').width / 3 - 2,
                        backgroundColor: 'skyblue',
                      }}>
                      <Image
                        style={{
                          width: Dimensions.get('screen').width / 3 - 2,
                          height: Dimensions.get('screen').width / 3 - 2,
                        }}
                        source={{
                          uri: item[0].images?.[0].url,
                        }}
                      />
                    </View>
                  </Pressable>
                  <Pressable
                    onPress={() => {
                      console.log('글 상세로 들어가야됨');
                    }}
                    style={{margin: 1}}>
                    <View
                      style={{
                        width: Dimensions.get('screen').width / 3 - 2,
                        height: Dimensions.get('screen').width / 3 - 2,
                        backgroundColor: 'skyblue',
                      }}>
                      <Image
                        style={{
                          width: Dimensions.get('screen').width / 3 - 2,
                          height: Dimensions.get('screen').width / 3 - 2,
                        }}
                        source={{
                          uri: item[1].images?.[0].url,
                        }}
                      />
                    </View>
                  </Pressable>
                </View>
                <Pressable
                  onPress={() => {
                    console.log('글 상세로 들어가야됨');
                  }}
                  style={{margin: 1}}>
                  <View
                    style={{
                      width: (Dimensions.get('screen').width / 3 - 1) * 2,
                      height: (Dimensions.get('screen').width / 3 - 1) * 2,
                      backgroundColor: 'skyblue',
                    }}>
                    <Image
                      style={{
                        width: (Dimensions.get('screen').width / 3 - 1) * 2,
                        height: (Dimensions.get('screen').width / 3 - 1) * 2,
                      }}
                      source={{
                        uri: item[2].images?.[0].url,
                      }}
                    />
                  </View>
                </Pressable>
              </View>
            );
          }
          if (index == 2) {
            return (
              <View style={{flexDirection: 'row'}}>
                <Pressable
                  onPress={() => {
                    console.log('글 상세로 들어가야됨');
                  }}
                  style={{margin: 1}}>
                  <View
                    style={{
                      width: (Dimensions.get('screen').width / 3 - 1) * 2,
                      height: (Dimensions.get('screen').width / 3 - 1) * 2,
                      backgroundColor: 'skyblue',
                    }}>
                    <Image
                      style={{
                        width: (Dimensions.get('screen').width / 3 - 1) * 2,
                        height: (Dimensions.get('screen').width / 3 - 1) * 2,
                      }}
                      source={{
                        uri: item[0].images?.[0].url,
                      }}
                    />
                  </View>
                </Pressable>
                <View>
                  <Pressable
                    onPress={() => {
                      console.log('글 상세로 들어가야됨');
                    }}
                    style={{margin: 1}}>
                    <View
                      style={{
                        width: Dimensions.get('screen').width / 3 - 2,
                        height: Dimensions.get('screen').width / 3 - 2,
                        backgroundColor: 'skyblue',
                      }}>
                      <Image
                        style={{
                          width: Dimensions.get('screen').width / 3 - 2,
                          height: Dimensions.get('screen').width / 3 - 2,
                        }}
                        source={{
                          uri: item[1].images?.[0].url,
                        }}
                      />
                    </View>
                  </Pressable>
                  <Pressable
                    onPress={() => {
                      console.log('글 상세로 들어가야됨');
                    }}
                    style={{margin: 1}}>
                    <View
                      style={{
                        width: Dimensions.get('screen').width / 3 - 2,
                        height: Dimensions.get('screen').width / 3 - 2,
                        backgroundColor: 'skyblue',
                      }}>
                      <Image
                        style={{
                          width: Dimensions.get('screen').width / 3 - 2,
                          height: Dimensions.get('screen').width / 3 - 2,
                        }}
                        source={{
                          uri: item[2].images?.[0].url,
                        }}
                      />
                    </View>
                  </Pressable>
                </View>
              </View>
            );
          }
          return (
            <View style={{flexDirection: 'row'}}>
              <Pressable
                onPress={() => {
                  console.log('글 상세로 들어가야됨');
                }}
                style={{margin: 1}}>
                <View
                  style={{
                    width: Dimensions.get('screen').width / 3 - 2,
                    height: Dimensions.get('screen').width / 3 - 2,
                    backgroundColor: 'skyblue',
                  }}>
                  <Image
                    style={{
                      width: Dimensions.get('screen').width / 3 - 2,
                      height: Dimensions.get('screen').width / 3 - 2,
                    }}
                    source={{
                      uri: item[0].images?.[0].url,
                    }}
                  />
                </View>
              </Pressable>
              <Pressable
                onPress={() => {
                  console.log('글 상세로 들어가야됨');
                }}
                style={{margin: 1}}>
                <View
                  style={{
                    width: Dimensions.get('screen').width / 3 - 2,
                    height: Dimensions.get('screen').width / 3 - 2,
                    backgroundColor: 'skyblue',
                  }}>
                  <Image
                    style={{
                      width: Dimensions.get('screen').width / 3 - 2,
                      height: Dimensions.get('screen').width / 3 - 2,
                    }}
                    source={{
                      uri: item[1].images?.[0].url,
                    }}
                  />
                </View>
              </Pressable>
              <Pressable
                onPress={() => {
                  console.log('글 상세로 들어가야됨');
                }}
                style={{margin: 1}}>
                <View
                  style={{
                    width: Dimensions.get('screen').width / 3 - 2,
                    height: Dimensions.get('screen').width / 3 - 2,
                    backgroundColor: 'skyblue',
                  }}>
                  <Image
                    style={{
                      width: Dimensions.get('screen').width / 3 - 2,
                      height: Dimensions.get('screen').width / 3 - 2,
                    }}
                    source={{
                      uri: item[2].images?.[0].url,
                    }}
                  />
                </View>
              </Pressable>
            </View>
          );
        }}
      />
    </View>
  );
};

export default SearchScreen;
