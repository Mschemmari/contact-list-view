import {useState, useEffect} from 'react';

export const useContacts = () => {
  const [contacts, setContacts] = useState();

  useEffect(() => {
    const fetchContacts = async () => {
      try {
        const response = await fetch(
          'https://s3.amazonaws.com/technical-challenge/v3/contacts.json',
        );
        const data = await response.json();
        setContacts(data);
      } catch (error) {
        console.error('Error fetching contacts:', error);
      }
    };

    fetchContacts();
  }, []);

  return contacts || [];
};
