import React, { PropTypes } from 'react';
import { Image, StyleSheet, TouchableNativeFeedback } from 'react-native';

const img = require('../images/menu.png');

const HamburgerIcon = ({ navigation }) => (
  <TouchableNativeFeedback
    onPress={() => navigation.navigate('DrawerOpen')}
  >
    <Image
      style={styles.icon}
      source={img}
    />
  </TouchableNativeFeedback>
);

HamburgerIcon.propTypes = {
  navigation: PropTypes.object.isRequired,
};

const styles = StyleSheet.create({
  icon: {
    height: 36,
    width: 36,
    left: 5,
  },
});

export default HamburgerIcon;
