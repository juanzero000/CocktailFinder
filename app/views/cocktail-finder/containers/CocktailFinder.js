import React from 'react';
import {
  SafeAreaView,
  StatusBar,
  KeyboardAvoidingView,
  View,
  Platform,
  FlatList,
  ActivityIndicator,
  StyleSheet,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import SearchBar from '../components/SearchBar';
import CocktailItem from '../components/CocktailItem';
import {connect} from 'react-redux';
import {searchDrinks} from '../../../actions/cocktailActions';

class CocktailFinder extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      criteria: '',
    };
  }

  handlePressBack = () => {
    this.props.navigation.pop();
  };

  handleSearchBarChange = value => {
    this.setState({criteria: value});
    this.props.searchDrinks(value);
  };

  render() {
    return (
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : undefined}
        enabled
        style={{flex: 1}}>
        <StatusBar barStyle="light-content" />
        <LinearGradient colors={['#cb1889', '#dd3448']} style={styles.gradient}>
          <SafeAreaView style={{flex: 1}}>
            <SearchBar
              onChange={this.handleSearchBarChange}
              onPressBack={this.handlePressBack}
              criteria={this.state.criteria}
            />
            {this.props.isLoading ? (
              <View style={styles.loadingIndicator}>
                <ActivityIndicator size="large" color="#fff" />
              </View>
            ) : (
              <FlatList
                data={this.props.drinks}
                keyExtractor={item => item.id}
                renderItem={({item}) => (
                  <CocktailItem name={item.name} imgSrc={item.img} />
                )}
              />
            )}
          </SafeAreaView>
        </LinearGradient>
      </KeyboardAvoidingView>
    );
  }
}

const styles = StyleSheet.create({
  gradient: {
    flex: 1,
  },
  loadingIndicator: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

const mapStateToProps = state => {
  return {
    drinks: state.drinks,
    isLoading: state.isLoading,
  };
};

const mapDispatchToProps = {
  searchDrinks,
};

// eslint-disable-next-line prettier/prettier
export default connect(mapStateToProps, mapDispatchToProps)(CocktailFinder);
