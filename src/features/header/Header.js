import React from 'react';
import {View} from 'react-native';

const Header = ({
  transparent,
  leftComponent,
  centerComponent,
  rightComponent,
}) => {
  return (
    <View
      style={{
        height: 55,
        backgroundColor: transparent ? 'transparent' : 'white',
        flexDirection: 'row',
        paddingLeft: 20,
        paddingRight: 20,
        alignItems: 'center',
      }}>
      <View style={{}}>{leftComponent}</View>
      <View style={{flexGrow: 1, flexShrink: 1}}>{centerComponent}</View>
      <View style={{}}>{rightComponent}</View>
    </View>
  );
};

export default Header;
