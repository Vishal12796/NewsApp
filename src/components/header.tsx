import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";
import { AppImages } from "../assets/images";
import { Colors } from "../utils/Colors";
import { horizontalScale, verticalScale } from "../utils/Const";

interface HeaderProps {
  onBackPress?: () => void;
}

const Header: React.FC<HeaderProps> = (props) => {
  const { onBackPress } = props;

  return (
    <View style={styles.headerStyle}>
      <TouchableOpacity
        style={styles.imageTouch}
        activeOpacity={0.5} onPress={onBackPress}>
        <Image source={AppImages.backArrow} style={styles.imgSize} resizeMode='contain' />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  headerStyle: {
    backgroundColor: Colors.whiteColor,
    height: verticalScale(50),
    justifyContent: 'center',
    paddingHorizontal: horizontalScale(10)
  },
  imageTouch: {
    height: verticalScale(50),
    width: verticalScale(50),
    justifyContent: 'center'
  },
  imgSize: {
    height: verticalScale(30),
    width: verticalScale(30)
  }
});

export default Header;