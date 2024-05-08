import {StackNavigationProp} from '@react-navigation/stack';

export type RootStackParamList = {
  Contacts: undefined;
  Contact: {contact: Contact};
};

export type ContactsScreenProps = {
  navigation: StackNavigationProp<RootStackParamList, 'Contacts'>;
};

export type Contact = {
  params: any;
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  name: string;
  isFavorite: boolean;
  companyName: string;
};

export type ContactsResponse = {
  contacts: Contact[];
};
