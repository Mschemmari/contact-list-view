import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';

const ContactScreen = ({route}: {route: any}) => {
  const {contact} = route.params;
  const {name, phone, address, emailAddress, companyName, birthdate} = contact;

  const formattedBirthdate = new Date(birthdate).toLocaleDateString('en-US', {
    month: 'long',
    day: 'numeric',
    year: 'numeric',
  });

  return (
    <ScrollView style={styles.sectionContainer}>
      <View style={styles.container}>
        <View style={styles.separator}>
          <View style={styles.header}>
            <Image source={require('../assets/user-large.png')} />
            {name && <Text style={styles.name}>{name}</Text>}
            {companyName && <Text style={styles.title}>{companyName}</Text>}
          </View>
        </View>
        {Object.keys(phone).map(key => {
          const phoneNumber = phone[key];
          return (
            phoneNumber && (
              <View style={[styles.separator, styles.phoneContainer]} key={key}>
                <View>
                  <Text style={styles.title}>PHONE:</Text>
                  <Text style={styles.detail}>{phoneNumber}</Text>
                </View>
                <View style={styles.phoneTag}>
                  <Text>{key.charAt(0).toUpperCase() + key.slice(1)}</Text>
                </View>
              </View>
            )
          );
        })}
        {address && (
          <View style={styles.separator}>
            <Text style={styles.title}>ADDRESS:</Text>
            <Text style={styles.detail}>{address.street}</Text>
            <Text style={styles.detail}>
              {`${address.city}, ${address.state} ${address.zipCode}, ${address.country}`}
            </Text>
          </View>
        )}
        {birthdate && (
          <View style={styles.separator}>
            <Text style={styles.title}>BIRTHDATE:</Text>
            <Text style={styles.detail}>{formattedBirthdate}</Text>
          </View>
        )}
        {emailAddress && (
          <View style={styles.separator}>
            <Text style={styles.title}>EMAIL:</Text>
            <Text style={styles.detail}>{emailAddress}</Text>
          </View>
        )}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  sectionContainer: {
    flex: 1,
    backgroundColor: 'white',
  },
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    paddingHorizontal: 20,
    backgroundColor: 'white',
  },
  header: {
    flexDirection: 'column',
    alignItems: 'center',
  },
  title: {
    fontSize: 13,
    color: 'grey',
    paddingBottom: 10,
  },
  detail: {
    fontSize: 17,
    fontWeight: '500',
  },
  name: {
    paddingVertical: 10,
    fontSize: 24,
    fontWeight: 'medium',
  },
  separator: {
    paddingVertical: 15,
    borderBottomWidth: 1,
    borderTopColor: 'lightgrey',
    borderBottomColor: 'lightgrey',
  },
  phoneContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  phoneTag: {
    marginTop: 'auto',
  },
});
export default ContactScreen;
