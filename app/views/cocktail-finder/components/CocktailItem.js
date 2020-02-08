import React from 'react';
import {Text, View, Image, StyleSheet} from 'react-native';
import PropTypes from 'prop-types';

const CocktailItem = props => {
  const {name, imgSrc} = props;
  return (
    <View style={styles.itemView}>
      <Image
        style={styles.roundedImg}
        source={{
          uri: `${imgSrc}/preview`,
        }}
      />
      <Text style={styles.itemText}>{name}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  itemView: {
    backgroundColor: 'white',
    margin: 10,
    borderRadius: 10,
    paddingHorizontal: 10,
    paddingVertical: 25,
    flexDirection: 'row',
    alignItems: 'center',
  },
  roundedImg: {
    width: 75,
    height: 75,
    borderRadius: 75,
  },
  itemText: {marginLeft: 20, color: 'gray', fontSize: 20},
});

CocktailItem.propTypes = {
  name: PropTypes.string.isRequired,
  imgSrc: PropTypes.string.isRequired,
};

export default CocktailItem;
