import React, {useEffect} from 'react';
import {ScrollView, StyleSheet, Button} from 'react-native';

import {Header} from 'react-native/Libraries/NewAppScreen';

import {useAuthenticator} from '@aws-amplify/ui-react-native';
import {DataStore} from 'aws-amplify/datastore';
import {Questionnaire, User, Vote} from '../models';

function SignOutButton() {
  const {signOut} = useAuthenticator();
  return <Button title="Sign Out" onPress={signOut} />;
}

export default function Home(): React.JSX.Element {
  useEffect(() => {
    const test = async () => {
      const models = await DataStore.query(User);
      const models2 = await DataStore.query(Questionnaire);
      const models3 = await DataStore.query(Vote);
      console.log(models);
      console.log(models2);
      console.log(models3);
    };
    test();
  }, []);
  return (
    <ScrollView>
      <Header />
      <SignOutButton />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});
