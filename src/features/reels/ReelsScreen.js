import React from 'react';
import {View, Pressable, Text, SafeAreaView} from 'react-native';
import Header from '../header/Header';

const ReelsScreen = ({navigation}) => {
  return (
    <View
      style={{
        flex: 1,
      }}>
      <SafeAreaView style={{backgroundColor: 'white'}} />
      <Header
        transparent={true}
        leftComponent={
          <Text
            style={{
              fontSize: 18,
              fontWeight: '600',
              color: '#333',
            }}>
            Reels
          </Text>
        }
        rightComponent={
          <View style={{flexDirection: 'row'}}>
            <Pressable
              onPress={() => {
                console.log('오른쪽버튼');
              }}
              style={{padding: 4, paddingRight: 0}}>
              <View style={{width: 24, height: 24, backgroundColor: 'pink'}} />
            </Pressable>
          </View>
        }
      />
    </View>
  );
};

export default ReelsScreen;
