import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/Fontisto';

const CocktailsLogo = () => {
  return (
    <View style={styles.main}>
      <Icon name="cocktail" color="white" size={50} />
      <View style={styles.textContainer}>
        <Text style={[styles.textLogo, styles.textBold]}>Cocktail</Text>
        <Text style={styles.textLogo}>Finder</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  main: {
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 20,
  },
  textLogo: {
    color: 'white',
    fontSize: 24,
  },
  textBold: {
    fontWeight: 'bold',
  },
  textContainer: {flexDirection: 'row', marginTop: 10},
});

export default CocktailsLogo;
