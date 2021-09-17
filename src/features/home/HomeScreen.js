import {useIsFocused} from '@react-navigation/core';
import React from 'react';
import {useEffect} from 'react';
import {useState} from 'react';
import {
  View,
  Pressable,
  Text,
  SafeAreaView,
  FlatList,
  Dimensions,
  Modal,
  TouchableOpacity,
  Image,
  AsyncStorage,
} from 'react-native';
import Carousel, {Pagination} from 'react-native-snap-carousel';
import Header from '../header/Header';
import Feed from './Feed';

const HomeScreen = ({navigation, route}) => {
  const [modalVisible, setModalVisible] = useState(false);
  const [feedList, setFeedList] = useState(DATAS);

  const isFocused = useIsFocused();

  useEffect(() => {
    if (isFocused) {
      if (route.params?.newFeed) {
        console.log(route.params.newFeed);
        setFeedList([route.params.newFeed, ...feedList]);
      }
    }
  }, [isFocused]);

  useEffect(() => {
    AsyncStorage.setItem('feedData', JSON.stringify(feedList));
  }, [feedList]);

  const LeftComponent = () => {
    return (
      <Text
        style={{
          fontSize: 18,
          fontWeight: '600',
          color: '#333',
        }}>
        Instagram
      </Text>
    );
  };
  const RightComponent = () => {
    return (
      <View style={{flexDirection: 'row'}}>
        <Pressable
          onPress={() => {
            console.log('글쓰기 버튼');
            navigation.navigate('FeedWriteScreen');
          }}
          style={{padding: 4}}>
          <View style={{width: 24, height: 24, backgroundColor: 'pink'}} />
        </Pressable>
        <Pressable
          onPress={() => {
            console.log('중앙버튼');
          }}
          style={{padding: 4}}>
          <View style={{width: 24, height: 24, backgroundColor: 'pink'}} />
        </Pressable>
        <Pressable
          onPress={() => {
            console.log('오른쪽버튼');
          }}
          style={{padding: 4, paddingRight: 0}}>
          <View style={{width: 24, height: 24, backgroundColor: 'pink'}} />
        </Pressable>
      </View>
    );
  };
  //
  return (
    <View
      style={{
        flex: 1,
      }}>
      <SafeAreaView style={{backgroundColor: 'white'}} />
      <Header
        leftComponent={<LeftComponent />}
        rightComponent={<RightComponent />}
      />
      <FlatList
        showsVerticalScrollIndicator={false}
        data={feedList}
        renderItem={({item, index}) => (
          <Feed
            data={item}
            onPressIsLike={() => {
              let clone = [...feedList];
              let clone2 = {...clone[index]};
              clone2.isLike = !clone2.isLike;
              clone[index] = clone2;
              setFeedList(clone);
            }}
          />
        )}
        onEndReached={() => {
          setFeedList([...feedList, ...DATAS]);
        }}
        onEndReachedThreshold={0.7}
      />
      {/*  */}
      <Modal visible={modalVisible} transparent={true}>
        <TouchableOpacity
          onPress={() => {
            setModalVisible(false);
          }}
          activeOpacity={1}
          style={{
            flex: 1,
            justifyContent: 'flex-end',
            backgroundColor: 'rgba(0,0,0,0.3)',
          }}>
          <View style={{backgroundColor: 'white'}}>
            <Text>신고</Text>
            <Text>신고</Text>
            <Text>신고</Text>
            <Text>신고</Text>
            <Text>신고</Text>
            <Text>신고</Text>
            <SafeAreaView />
          </View>
        </TouchableOpacity>
      </Modal>
    </View>
  );
};

export default HomeScreen;

const DATAS = [
  {
    name: '첫번째',
    content:
      '내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용',
    images: [
      {
        url: 'https://via.placeholder.com/300',
      },
      {
        url: 'https://via.placeholder.com/200',
      },
    ],
    isLike: false,
  },
  {
    name: '두번째',
    content:
      '내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용',
    images: [
      {
        url: 'https://via.placeholder.com/300',
      },
    ],
    isLike: true,
  },
  {
    name: '세번째',
    content:
      '내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용',
    images: [
      {
        url: 'https://via.placeholder.com/300',
      },
    ],
    isLike: false,
  },
];
