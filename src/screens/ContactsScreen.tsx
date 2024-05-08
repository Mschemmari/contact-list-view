import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity, Image} from 'react-native';
import {useContacts} from '../useContacts';
import {Contact, RootStackParamList} from '../types';

import {useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import {ScrollView} from 'react-native-gesture-handler';

const ContactsScreen = () => {
  const navigation = useNavigation<StackNavigationProp<RootStackParamList>>();
  const contacts: Contact[] = useContacts();

  const handleContactPress = (contact: Contact) => {
    navigation.navigate('Contact', {contact});
  };
  const favoriteContacts = contacts.filter(
    (contact: Contact) => contact.isFavorite,
  );
  const otherContacts = contacts.filter(
    (contact: Contact) => !contact.isFavorite,
  );
  return (
    <ScrollView>
      <View style={styles.favContainer}>
        <Text style={styles.favAndOtherTitle}>FAVORITE CONTACTS</Text>
      </View>
      <View style={styles.container}>
        <View style={styles.container}>
          {favoriteContacts.map((contact: Contact, index: number) => (
            <View key={contact.id}>
              <View
                style={
                  index === 0 ? styles.firstItemSeparator : styles.separator
                }>
                <TouchableOpacity
                  key={contact.id}
                  style={styles.button}
                  onPress={() => handleContactPress(contact)}>
                  <Image source={require('../assets/user.png')} />

                  <View style={styles.contactDescription}>
                    <View style={styles.favImageContainer}>
                      <Image
                        style={styles.favImage}
                        source={require('../assets/star.png')}
                      />
                      <Text style={styles.contactName}>{contact.name}</Text>
                    </View>
                    <Text style={styles.companyName}>
                      {contact.companyName}
                    </Text>
                  </View>
                </TouchableOpacity>
              </View>
            </View>
          ))}
        </View>
      </View>

      <View>
        <View style={styles.favContainer}>
          <Text style={styles.favAndOtherTitle}>OTHER CONTACTS</Text>
        </View>
        <View style={styles.container}>
          {otherContacts.map((contact: Contact, index: number) => (
            <View
              style={index === 0 ? styles.firstItemSeparator : styles.separator}
              key={contact.id}>
              <TouchableOpacity
                key={contact.id}
                style={styles.button}
                onPress={() => handleContactPress(contact)}>
                <Image source={require('../assets/user.png')} />
                <View style={styles.otherContactDescription}>
                  <Text style={styles.contactName}>{contact.name}</Text>
                  <Text style={styles.otherCompanyName}>
                    {contact.companyName}
                  </Text>
                </View>
              </TouchableOpacity>
            </View>
          ))}
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: 5,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  button: {
    paddingHorizontal: 10,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  favContainer: {
    backgroundColor: '#f0f0f0',
    paddingHorizontal: 10,
  },
  separator: {
    paddingVertical: 15,
    borderTopWidth: 1,
    borderTopColor: 'lightgrey',
  },
  firstItemSeparator: {
    paddingVertical: 15,
  },
  contactDescription: {
    marginLeft: 20,
  },
  favImageContainer: {
    flexDirection: 'row',
    alignItems: 'flex-start',
  },
  favImage: {
    marginRight: 5,
  },
  companyName: {
    color: 'grey',
    marginLeft: 25,
    marginTop: 2,
  },
  otherContactDescription: {
    marginLeft: 45,
  },
  otherCompanyName: {
    color: 'grey',
  },
  contactName: {
    fontSize: 20,
    fontWeight: '400',
  },
  favAndOtherTitle: {
    padding: 5,
  },
});

export default ContactsScreen;
