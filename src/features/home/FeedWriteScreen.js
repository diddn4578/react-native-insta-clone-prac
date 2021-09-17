import React, {useState} from 'react';
import {Pressable, SafeAreaView, Text, TextInput, View} from 'react-native';
import Header from '../header/Header';

const FeedWriteScreen = ({navigation}) => {
  const [content, setContent] = useState('');

  return (
    <View style={{flex: 1, backgroundColor: 'white'}}>
      <SafeAreaView />
      <Header
        leftComponent={
          <Pressable
            onPress={() => {
              navigation.goBack();
            }}>
            <Text>뒤로</Text>
          </Pressable>
        }
        centerComponent={
          <View style={{alignItems: 'center'}}>
            <Text style={{fontSize: 18, fontWeight: 'bold'}}>글쓰기</Text>
          </View>
        }
        rightComponent={
          <Pressable
            onPress={() => {
              console.log('글 작성');
              navigation.navigate('MainScreen', {
                screen: 'HomeScreen',
                params: {
                  newFeed: {
                    name: '신규 글쓴이',
                    content: content,
                    images: [
                      {
                        url: 'https://via.placeholder.com/500',
                      },
                      {
                        url: 'https://via.placeholder.com/600',
                      },
                      {
                        url: 'https://via.placeholder.com/500',
                      },
                      {
                        url: 'https://via.placeholder.com/600',
                      },
                      {
                        url: 'https://via.placeholder.com/500',
                      },
                      {
                        url: 'https://via.placeholder.com/600',
                      },
                    ],
                    isLike: false,
                  },
                },
              });
            }}>
            <Text>작성</Text>
          </Pressable>
        }
      />

      <TextInput
        style={{borderWidth: 1, borderColor: 'black', padding: 10}}
        placeholder={'내용을 입력해주세요.'}
        onChangeText={txt => {
          setContent(txt);
        }}
      />
    </View>
  );
};

export default FeedWriteScreen;
