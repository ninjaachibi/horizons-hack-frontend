import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  TextInput,
  ListView,
  Alert,
  Button
} from 'react-native';
import styles from './Styles'

class MealPlanScreen extends React.Component {
  //Location  Favorites,foods,home, history, search?
  static navigationOptions ={
    title:'Plan Your Meals',
  };
  constructor(props) {
    super(props)
    this.ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});

    this.state = {meals: this.ds.cloneWithRows([])}
  }

  componentDidMount() {
    // fetch(url,{method:'GET'})
    // .then(resp=>resp.json())
    // .then(resp=>
    //   {if (resp.success)
    //   {
    //     this.setState({meals: this.ds.cloneWithRows(resp.meals)})
    //     //meals is the array that is returned, might have to be digested
    //   }}
    // )
    // .catch(err=>{console.log(err)})
    // //a string is passed into meal from a list in the database

    fetch('https://spoonacular-recipe-food-nutrition-v1.p.mashape.com/recipes/search', {
      
    })

  }
  //display components for every meal with the object passed in as the prop <Meal>
  render() {
    return (
      <View style={styles.container}>
          <Text>Hello world</Text>
      </View>

    )
  }
}