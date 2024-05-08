import React from 'react';
import {Image, StyleSheet} from 'react-native';
import 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import ContactsScreen from './screens/ContactsScreen';
import ContactScreen from './screens/ContactScreen';
const Stack = createStackNavigator();

const headerRight = (route: any) => {
  const {isFavorite}: {isFavorite: boolean} = route.params.contact;
  return (
    isFavorite && (
      <Image style={styles.favImage} source={require('./assets/star.png')} />
    )
  );
};

function Navigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          options={{
            headerStyle: {
              backgroundColor: 'lightgrey',
            },
            headerTintColor: 'black',
          }}
          name="Contacts"
          component={ContactsScreen}
        />
        <Stack.Screen
          options={({route}) => ({
            title: 'Contact',
            headerRight: () => headerRight(route),
            headerStyle: {
              backgroundColor: 'lightgrey',
            },
            headerTintColor: 'black',
            headerTitleStyle: {
              fontWeight: 'bold',
            },
          })}
          name="Contact"
          component={ContactScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  favImage: {
    marginRight: 10,
  },
});

export default Navigation;
