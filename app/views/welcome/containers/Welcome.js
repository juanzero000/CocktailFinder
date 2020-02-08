import React from 'react';
import {StatusBar, Text, StyleSheet} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Icon from 'react-native-vector-icons/Fontisto';
import CocktailsLogo from '../components/CocktailsLogo';

const Welcome = props => {
  const handleSearchPress = () => {
    props.navigation.push('CocktailFinderScreen');
  };

  return (
    <>
      <StatusBar barStyle="light-content" />
      <LinearGradient colors={['#cb1889', '#dd3448']} style={styles.gradient}>
        <CocktailsLogo />
        <Icon.Button
          name="search"
          backgroundColor="#fff"
          color="#cb1889"
          size={24}
          onPress={handleSearchPress}>
          <Text style={styles.buttonText}>Search your favorite cocktail</Text>
        </Icon.Button>
      </LinearGradient>
    </>
  );
};

const styles = StyleSheet.create({
  gradient: {flex: 1, justifyContent: 'center', alignItems: 'center'},
  buttonText: {
    color: 'gray',
    textAlign: 'center',
    width: '80%',
    fontSize: 18,
  },
});

export default Welcome;
