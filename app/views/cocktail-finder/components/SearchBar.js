import React from 'react';
import {
  TextInput,
  Text,
  View,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import Icon from 'react-native-vector-icons/Fontisto';
import PropTypes from 'prop-types';

const SearchBar = props => {
  const {criteria, onPressBack, onChange} = props;

  return (
    <View style={styles.main}>
      {!criteria && (
        <TouchableOpacity onPress={onPressBack}>
          <Icon name="arrow-left" color="white" size={18} />
        </TouchableOpacity>
      )}
      <Icon.Button
        name="search"
        color="gray"
        style={styles.searchButton}
        size={15}>
        <TextInput
          style={styles.searchInput}
          value={criteria}
          placeholder="Search"
          onChangeText={value => onChange(value)}
        />
      </Icon.Button>
      {criteria ? (
        <TouchableOpacity onPress={() => onChange('')}>
          <Text style={styles.cancelButton}>Cancel</Text>
        </TouchableOpacity>
      ) : null}
    </View>
  );
};

const styles = StyleSheet.create({
  main: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    padding: 10,
    width: '100%',
  },
  searchButton: {
    backgroundColor: '#e9e9e9',
  },
  searchInput: {width: '75%'},
  cancelButton: {fontSize: 18, color: 'white'},
});

SearchBar.propTypes = {
  criteria: PropTypes.string.isRequired,
  onPressBack: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default SearchBar;
